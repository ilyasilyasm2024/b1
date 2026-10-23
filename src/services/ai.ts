// AI features (translation, example sentences, word check, writing suggestions) run on Google
// Gemini with the user's own API key. Key and model live only in this browser (localStorage);
// they are set in the AI settings panel (components/AISettings.tsx).

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const STORAGE_KEY = "b1-ai-config";
const CHANGE_EVENT = "b1-ai-config-changed";

export interface AIConfig {
  apiKey: string;
  /** Gemini model id without the "models/" prefix, e.g. "gemini-2.5-flash" */
  model: string;
}

export interface GeminiModel {
  id: string;
  displayName: string;
  description: string;
  /** Pro models have no free tier on Google AI Studio (free quota "limit: 0") */
  paid: boolean;
}

// Gemini calls can hang on a bad network; give up after this and show an error instead.
const REQUEST_TIMEOUT_MS = 30000;

export type TranslationLanguage = "arabic" | "english";

// --- Config (localStorage) --------------------------------------------------------------------

export function getAIConfig(): AIConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const cfg = raw ? (JSON.parse(raw) as AIConfig) : null;
    return cfg?.apiKey && cfg.model ? cfg : null;
  } catch {
    return null;
  }
}

export function saveAIConfig(cfg: AIConfig | null): void {
  try {
    if (cfg) localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage blocked (private mode…): the config simply won't persist
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Subscribe to config changes (this tab and other tabs), for useSyncExternalStore */
export function subscribeAIConfig(onChange: () => void): () => void {
  const onStorage = (e: StorageEvent) => e.key === STORAGE_KEY && onChange();
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Raw stored value: a stable snapshot for useSyncExternalStore (parsing would create new objects) */
export function getAIConfigSnapshot(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function isApiKeyConfigured(): boolean {
  return getAIConfig() !== null;
}

/** Ask the app to show the AI settings panel (from any component, e.g. a "Set up AI" link) */
export const OPEN_AI_SETTINGS_EVENT = "b1-open-ai-settings";
export function openAISettings(): void {
  window.dispatchEvent(new Event(OPEN_AI_SETTINGS_EVENT));
}

// --- Gemini API -------------------------------------------------------------------------------

/** Text-generation models available to this key (no embedding / image / audio / live models) */
export async function listGeminiModels(apiKey: string): Promise<GeminiModel[]> {
  const res = await fetch(`${GEMINI_BASE}/models?pageSize=1000`, {
    headers: { "x-goog-api-key": apiKey },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(await geminiError(res));
  const data: { models?: { name: string; displayName?: string; description?: string; supportedGenerationMethods?: string[] }[] } = await res.json();
  return (data.models || [])
    .filter((m) => m.supportedGenerationMethods?.includes("generateContent"))
    .map((m) => {
      const id = m.name.replace(/^models\//, "");
      return { id, displayName: m.displayName || m.name, description: m.description || "", paid: /(^|-)pro(-|$)/.test(id) };
    })
    // gemini-2.x models are no longer available to new keys
    .filter((m) => /^gemini|^gemma/.test(m.id) && !/^gemini-[12]\./.test(m.id) && !/embedding|image|banana|tts|audio|transcribe|live|vision|robotics|computer-use|customtools/.test(m.id))
    .sort((a, b) => a.id.localeCompare(b.id));
}

async function geminiError(res: Response): Promise<string> {
  try {
    const body = await res.json();
    return body?.error?.message || `HTTP ${res.status}`;
  } catch {
    return `HTTP ${res.status}`;
  }
}

// Models that refused a zero thinking budget (Pro models, some Lite/Gemma models answer 400
// "invalid argument"); for them we leave thinking settings out and give room for thinking tokens,
// so short answers aren't cut off.
const thinkingRequired = new Set<string>();

interface GeminiResponse {
  candidates?: { content?: { parts?: { text?: string; thought?: boolean }[] } }[];
}

async function generate(
  cfg: AIConfig,
  prompt: string,
  maxTokens: number,
  temperature: number,
  timeoutMs = REQUEST_TIMEOUT_MS
): Promise<string> {
  const request = (thinkingOff: boolean) =>
    fetch(`${GEMINI_BASE}/models/${encodeURIComponent(cfg.model)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": cfg.apiKey },
      signal: AbortSignal.timeout(timeoutMs),
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature,
          maxOutputTokens: thinkingOff ? maxTokens : maxTokens + 2048,
          ...(thinkingOff && { thinkingConfig: { thinkingBudget: 0 } }),
        },
      }),
    });

  let res: Response;
  try {
    const thinkingOff = !thinkingRequired.has(cfg.model);
    res = await request(thinkingOff);
    // Any 400 with thinking turned off: retry once without the thinking settings
    if (!res.ok && thinkingOff && res.status === 400) {
      const retry = await request(false);
      if (retry.ok) thinkingRequired.add(cfg.model);
      if (retry.ok || retry.status !== 400) res = retry;
    }
  } catch (e) {
    if ((e as Error).name === "TimeoutError") throw new Error("Gemini took too long to answer. Please try again.", { cause: e });
    throw new Error(`Could not reach Gemini (${(e as Error).message}). Check your internet connection.`, { cause: e });
  }
  if (!res.ok) {
    const message = await geminiError(res);
    console.error("Gemini API Error:", res.status, message);
    throw new Error(message);
  }
  const data: GeminiResponse = await res.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  return parts.filter((p) => !p.thought).map((p) => p.text || "").join("").trim();
}

async function callAI(prompt: string, maxTokens = 150, temperature = 0.3): Promise<string> {
  const cfg = getAIConfig();
  if (!cfg) throw new Error("AI is not set up");
  return generate(cfg, prompt, maxTokens, temperature);
}

export type ProbeResult =
  | { ok: true; ms: number }
  | { ok: false; kind: "quota" | "retired" | "slow" | "error"; message: string };

/**
 * Checks whether a model really answers for this key (some listed models are retired for new keys
 * or have no free quota). One tiny request with a short timeout.
 */
export async function probeGeminiModel(apiKey: string, model: string, timeoutMs = 12000): Promise<ProbeResult> {
  const started = performance.now();
  try {
    await generate({ apiKey, model }, 'Antworte nur mit "ok".', 10, 0, timeoutMs);
    return { ok: true, ms: Math.round(performance.now() - started) };
  } catch (e) {
    const message = (e as Error).message;
    const kind = /quota|exceeded|billing|limit: 0|resource.?exhausted/i.test(message)
      ? "quota"
      : /no longer available|not found|deprecated|not supported/i.test(message)
        ? "retired"
        : /too long/i.test(message)
          ? "slow"
          : "error";
    return { ok: false, kind, message };
  }
}

/** Settings "Test" button: one tiny request with the given key and model */
export async function testGemini(cfg: AIConfig): Promise<{ answer: string; ms: number }> {
  const started = performance.now();
  const answer = await generate(cfg, 'Übersetze "Haus" ins Englische. Antworte nur mit dem Wort.', 20, 0);
  return { answer, ms: Math.round(performance.now() - started) };
}

export async function translateWord(
  word: string,
  language: TranslationLanguage
): Promise<string> {
  const targetLang = language === "arabic" ? "Arabisch" : "Englisch";
  const prompt = `Übersetze das deutsche Wort oder den Ausdruck "${word}" ins ${targetLang}. Gib nur die Übersetzung zurück, ohne Erklärung.`;
  return callAI(prompt);
}

export async function generateExample(word: string): Promise<string> {
  const prompt = `Schreibe einen einfachen deutschen Beispielsatz (B1-Niveau) mit dem Wort oder Ausdruck "${word}". Gib nur den Satz zurück.`;
  return callAI(prompt);
}

export async function verifyGermanWord(word: string): Promise<{ isGerman: boolean; suggestion?: string }> {
  const prompt = `Ist "${word}" ein deutsches Wort oder ein deutscher Ausdruck? Antworte NUR im folgenden Format:
- Wenn es Deutsch ist: "JA"
- Wenn es NICHT Deutsch ist: "NEIN: [das Wort auf Deutsch]"
Beispiele:
- "Haus" → "JA"
- "house" → "NEIN: Haus"
- "computer" → "JA" (weil es auch im Deutschen verwendet wird)
- "beautiful" → "NEIN: schön"`;

  const result = await callAI(prompt);
  const trimmed = result.trim().toUpperCase();

  if (trimmed.startsWith("JA")) {
    return { isGerman: true };
  }

  // Extract suggestion after "NEIN:"
  const match = result.match(/NEIN:\s*(.+)/i);
  return {
    isGerman: false,
    suggestion: match?.[1]?.trim() || undefined,
  };
}


// Task context sent with writing suggestions. The hints matter: they say what to write
// ("Schreiben Sie eine E-Mail …"), which decides the format the suggestions follow.
export function schreibenContext(aufgabe: { instruction: string; points: string[]; hints?: string[] }): string {
  const hints = aufgabe.hints?.length ? `\nHinweise: ${aufgabe.hints.join(" ")}` : "";
  return `${aufgabe.instruction}\nPunkte: ${aufgabe.points.join(" / ")}${hints}`;
}

// Words that start lowercase after an email greeting ("Liebe Sara,\n\nich schreibe …"). Nouns keep
// their capital letter, so only common sentence starters are lowered.
const AFTER_GREETING_LOWER = /^(Ich|Wie|Vielen|Es|Das|Hier|Leider|Gestern|Heute|Morgen|Am|Seit|Wir|Du|Hast|Kannst|Danke|Gerne|Gern|Schon|Endlich|Lange)\b/;
const GREETING_LINE = /^\s*(liebe[rs]?|hallo|hi|sehr geehrte[rs]?|guten tag)\b[^\n]*,\s*$/i;
const CLOSING = /\s*(Liebe Grüße|Viele Grüße|Herzliche Grüße|Beste Grüße|Mit freundlichen Grüßen)\s*,?\s*/;

/**
 * Email layout the student would otherwise have to fix by hand: a blank line after the greeting
 * ("Liebe Sara,"), and the closing ("Liebe Grüße") as its own paragraph with the name on the next line.
 */
function applyEmailLineBreaks(currentText: string, suggestion: string): string {
  let result = suggestion;
  const lastLine = currentText.split("\n").pop() ?? "";
  if (GREETING_LINE.test(lastLine)) {
    result = result.replace(/^\s+/, "").replace(AFTER_GREETING_LOWER, (w) => w.toLowerCase());
    result = "\n\n" + result;
  }
  return result.replace(CLOSING, (_m, closing: string, offset: number) => {
    const before = currentText + result.slice(0, offset);
    const breaks = (before.match(/\n*$/)?.[0].length ?? 0);
    return "\n".repeat(Math.max(0, 2 - breaks)) + closing + "\n";
  });
}

/** Why a suggestion is empty: word target reached, text already closed with a greeting, or the AI returned nothing */
export type NoSuggestionReason = "target" | "closed" | "empty";
export interface WritingSuggestion {
  text: string;
  reason?: NoSuggestionReason;
}

/** Next words for a Schreiben text. Throws on AI errors (bad key, quota, network) so the UI can show them. */
export async function suggestNextWords(subject: string, currentText: string, targetWords: number = 80): Promise<WritingSuggestion> {
  if (!currentText.trim()) return { text: "", reason: "empty" };

  const currentWordCount = currentText.trim().split(/\s+/).length;
  // Aim for target + 5 to ensure we reach minimum
  const effectiveTarget = targetWords + 5;
  const remainingWords = effectiveTarget - currentWordCount;

  if (remainingWords <= 0) return { text: "", reason: "target" };

  // Stop if text already has a closing formula
  const closingPatterns = /(?:liebe grüße|mit freundlichen grüßen|viele grüße|herzliche grüße|mit besten grüßen|bis bald)\s*\n?\s*\w*$/i;
  if (closingPatterns.test(currentText.trim())) return { text: "", reason: "closed" };

  const suggestCount = Math.min(remainingWords, 10);

  // Detect text type from aufgabe context
  const isEmail = /e-mail|mail|schreiben sie.*an/i.test(subject);
  const isFormal = /kursleiter|herr|frau|formell|höflich|entschuldigen/i.test(subject);
  const isOpinion = /meinung|gästebuch|diskussion|sendung/i.test(subject);

  let typeRules = "";
  // Emails follow the B1 structure; each part is its own paragraph (blank line between parts).
  const paragraphs = currentText.split(/\n\s*\n|\n/).filter((p) => p.trim()).length;
  if (isEmail) {
    const anrede = isFormal ? '"Sehr geehrte Frau [Name]," / "Sehr geehrter Herr [Name],"' : '"Liebe [Name]," / "Lieber [Name],"';
    const gruss = isFormal ? '"Mit freundlichen Grüßen"' : '"Liebe Grüße" oder "Viele Grüße"';
    typeRules = `TEXTTYP: ${isFormal ? "Formelle E-Mail (Sie-Form)" : "Informelle E-Mail (Du-Form)"}.
AUFBAU (jeder Teil ist ein eigener Absatz, getrennt durch \\n\\n):
1. Anrede: ${anrede}
2. Einleitung: 1 Satz (Grund für die E-Mail)
3. Ein Absatz pro Inhaltspunkt aus "Punkte", in dieser Reihenfolge
4. Schluss: 1 Satz
5. Gruß: ${gruss}, dann \\n, dann ein Vorname
ABSATZ-REGELN:
- Beginnt deine Fortsetzung einen neuen Teil oder einen neuen Inhaltspunkt, dann beginne sie mit \\n\\n.
- Der Text hat bisher ${paragraphs} Absatz/Absätze. Ein Absatz hat höchstens 3 Sätze; ist er länger, beginne den nächsten Satz mit \\n\\n.
- Nach der Anrede mit Komma geht es klein weiter (z. B. "ich schreibe dir, weil …").
- Fehlt die Anrede am Anfang, ignoriere das und schreibe einfach weiter.`;
  } else if (isOpinion) {
    typeRules = `TEXTTYP: Meinungstext / Gästebuch-Eintrag.
FORMAT-REGELN:
- Keine Anrede. Direkt mit Meinung beginnen.
- Eigene Erfahrung + Argumente + Beispiele
- Schlusssatz als Zusammenfassung`;
  } else {
    typeRules = `TEXTTYP: Allgemeiner Text. Passe Format an die Aufgabe an.`;
  }

  let phaseHint = "";
  if (currentWordCount < 3) {
    phaseHint = "PHASE: Anfang. Beginne mit der passenden Eröffnung laut Texttyp.";
  } else if (remainingWords <= 15) {
    phaseHint = "PHASE: ENDE. Schreibe den Abschluss laut Format-Regeln.";
  } else if (remainingWords <= 30) {
    phaseHint = "PHASE: Übergang zum Schluss.";
  } else {
    phaseHint = "PHASE: Hauptteil. Beantworte die geforderten Punkte.";
  }

  const prompt = `Setze diesen B1-Text fort. Gib NUR die nächsten ~${suggestCount} Wörter.

AUFGABE:
${subject}

${typeRules}

WORTSTAND: ${currentWordCount}/${targetWords} (${remainingWords} übrig)
${phaseHint}

TEXT BISHER:
"""
${currentText}
"""

STRENGE REGELN:
- NUR die nächsten Wörter. KEINE Erklärung.
- Vollständige Sätze mit Punkt am Ende.
- \\n genau wie in FORMAT-REGELN beschrieben verwenden.
- Nichts wiederholen.
- B1-Niveau: klar, korrekt, einfach.`;

  let result = await callAI(prompt, 30, 0.4);
  // Clean up quotes and ensure proper spacing
  result = result.replace(/^["']|["']$/g, "");
  // Never start a new paragraph in the middle of a sentence
  result = result.replace(/\\n/g, "\n");
  if (!/[.!?:,]\s*$|\n\s*$/.test(currentText)) {
    result = result.replace(/^\s*\n+\s*/, "");
  } else {
    // At most one blank line between paragraphs, counting the line breaks the text already ends with
    const trailing = (currentText.match(/\n*\s*$/)?.[0].match(/\n/g) || []).length;
    result = result.replace(/^\s*\n+\s*/, (lead) => (lead.includes("\n") ? "\n".repeat(Math.max(0, 2 - trailing)) : ""));
  }
  if (isEmail) result = applyEmailLineBreaks(currentText, result);
  return (result.trim() || result.includes("\n")) ? { text: result } : { text: "", reason: "empty" };
}
