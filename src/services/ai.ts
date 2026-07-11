// Groq API integration for vocabulary translation and examples
// API key is loaded from .env file (VITE_GROQ_API_KEY)

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

export type TranslationLanguage = "arabic" | "english";

interface GroqResponse {
  choices: { message: { content: string } }[];
}

async function callGroq(prompt: string): Promise<string> {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Groq API Error:", response.status, errorText);
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }

  const data: GroqResponse = await response.json();
  return data.choices[0]?.message?.content?.trim() || "";
}

export async function translateWord(
  word: string,
  language: TranslationLanguage
): Promise<string> {
  const targetLang = language === "arabic" ? "Arabisch" : "Englisch";
  const prompt = `Übersetze das deutsche Wort oder den Ausdruck "${word}" ins ${targetLang}. Gib nur die Übersetzung zurück, ohne Erklärung.`;
  return callGroq(prompt);
}

export async function generateExample(word: string): Promise<string> {
  const prompt = `Schreibe einen einfachen deutschen Beispielsatz (B1-Niveau) mit dem Wort oder Ausdruck "${word}". Gib nur den Satz zurück.`;
  return callGroq(prompt);
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

  const result = await callGroq(prompt);
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

export function isApiKeyConfigured(): boolean {
  return GROQ_API_KEY.length > 10;
}


export async function suggestNextWords(subject: string, currentText: string, targetWords: number = 80): Promise<string> {
  if (!currentText.trim()) return "";

  const currentWordCount = currentText.trim().split(/\s+/).length;
  // Aim for target + 5 to ensure we reach minimum
  const effectiveTarget = targetWords + 5;
  const remainingWords = effectiveTarget - currentWordCount;

  if (remainingWords <= 0) return "";

  // Stop if text already has a closing formula
  const closingPatterns = /(?:liebe grüße|mit freundlichen grüßen|viele grüße|herzliche grüße|mit besten grüßen|bis bald)\s*\n?\s*\w*$/i;
  if (closingPatterns.test(currentText.trim())) return "";

  const suggestCount = Math.min(remainingWords, 10);

  // Detect text type from aufgabe context
  const isEmail = /e-mail|mail|schreiben sie.*an/i.test(subject);
  const isFormal = /kursleiter|herr|frau|formell|höflich|entschuldigen/i.test(subject);
  const isOpinion = /meinung|gästebuch|diskussion|sendung/i.test(subject);

  let typeRules = "";
  if (isEmail && isFormal) {
    typeRules = `TEXTTYP: Formelle E-Mail.
FORMAT-REGELN:
- Anrede: "Sehr geehrter Herr/Frau [Name]," dann \\n
- Höfliche Sie-Form durchgehend
- \\n zwischen jedem Absatz
- Abschluss: "Mit freundlichen Grüßen" dann \\n dann Name`;
  } else if (isEmail) {
    typeRules = `TEXTTYP: Informelle E-Mail.
FORMAT-REGELN:
- Anrede: "Lieber/Liebe [Name]," dann \\n
- Du-Form
- \\n zwischen Absätzen (nach Einleitung, zwischen Inhaltspunkten, vor Schluss)
- Abschluss: Schlusssatz. Dann \\n dann "Liebe Grüße" dann \\n dann Name`;
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

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 30,
        temperature: 0.4,
      }),
    });

    if (!response.ok) return "";
    const data: GroqResponse = await response.json();
    let result = data.choices[0]?.message?.content?.trim() || "";
    // Clean up quotes and ensure proper spacing
    result = result.replace(/^["']|["']$/g, "");
    return result;
  } catch {
    return "";
  }
}
