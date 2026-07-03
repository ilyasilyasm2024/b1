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

export function isApiKeyConfigured(): boolean {
  return GROQ_API_KEY.length > 10;
}
