import { useState } from "react";
import {
  translateWord,
  generateExample,
  isApiKeyConfigured,
  type TranslationLanguage,
} from "../services/ai";
import { useVocabulary } from "../context/VocabularyContext";

export type { VocabItem } from "../context/VocabularyContext";
export { useVocabulary } from "../context/VocabularyContext";

interface VocabularyPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VocabularyPanel({ isOpen, onClose }: VocabularyPanelProps) {
  const { vocab, addWord, removeWord, clearAll } = useVocabulary();
  const [newWord, setNewWord] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [newContext, setNewContext] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [translationLang, setTranslationLang] = useState<TranslationLanguage>("arabic");
  const [aiLoading, setAiLoading] = useState<"translate" | "example" | null>(null);

  const handleAdd = () => {
    if (newWord && newTranslation) {
      addWord(newWord, newTranslation, newContext || undefined);
      setNewWord("");
      setNewTranslation("");
      setNewContext("");
      setShowForm(false);
    }
  };

  const handleAITranslate = async () => {
    if (!newWord) return;
    setAiLoading("translate");
    try {
      const result = await translateWord(newWord, translationLang);
      setNewTranslation(result);
    } catch {
      alert("Fehler bei der Übersetzung. Bitte API-Key prüfen.");
    }
    setAiLoading(null);
  };

  const handleAIExample = async () => {
    if (!newWord) return;
    setAiLoading("example");
    try {
      const result = await generateExample(newWord);
      setNewContext(result);
    } catch {
      alert("Fehler beim Generieren. Bitte API-Key prüfen.");
    }
    setAiLoading(null);
  };

  const filteredVocab = vocab.filter(
    (item) =>
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-white shadow-xl flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Meine Vokabeln</h2>
            <p className="text-xs text-gray-500">{vocab.length} Wörter gespeichert</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search & Add */}
        <div className="px-5 py-3 border-b border-gray-100 space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Suchen..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-800"
            >
              + Neu
            </button>
          </div>

          {/* Add form */}
          {showForm && (
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <input
                type="text"
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                placeholder="Wort (Deutsch)"
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              {/* Translation field + AI button */}
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={newTranslation}
                  onChange={(e) => setNewTranslation(e.target.value)}
                  placeholder="Übersetzung"
                  className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <select
                  value={translationLang}
                  onChange={(e) => setTranslationLang(e.target.value as TranslationLanguage)}
                  className="border border-gray-300 rounded px-2 py-1.5 text-[10px] bg-white"
                >
                  <option value="arabic">🇸🇦 AR</option>
                  <option value="english">🇬🇧 EN</option>
                </select>
                <button
                  onClick={handleAITranslate}
                  disabled={!newWord || aiLoading !== null || !isApiKeyConfigured()}
                  className="bg-blue-600 text-white px-2.5 py-1.5 rounded text-[10px] font-medium cursor-pointer hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                  title={!isApiKeyConfigured() ? "API-Key nicht konfiguriert" : "KI-Übersetzung"}
                >
                  {aiLoading === "translate" ? (
                    <span className="animate-spin">⟳</span>
                  ) : (
                    "AI"
                  )}
                </button>
              </div>

              {/* Context field + AI example button */}
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={newContext}
                  onChange={(e) => setNewContext(e.target.value)}
                  placeholder="Kontext / Beispielsatz (optional)"
                  className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={handleAIExample}
                  disabled={!newWord || aiLoading !== null || !isApiKeyConfigured()}
                  className="bg-purple-600 text-white px-2.5 py-1.5 rounded text-[10px] font-medium cursor-pointer hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                  title={!isApiKeyConfigured() ? "API-Key nicht konfiguriert" : "Beispielsatz generieren"}
                >
                  {aiLoading === "example" ? (
                    <span className="animate-spin">⟳</span>
                  ) : (
                    "Beispiel"
                  )}
                </button>
              </div>

              {!isApiKeyConfigured() && (
                <p className="text-[9px] text-amber-600">
                  ⚠️ AI-Funktionen erfordern einen API-Key in der .env Datei (VITE_GROQ_API_KEY). Bitte den Dev-Server neu starten nach Änderungen.
                </p>
              )}

              <div className="flex gap-2">
                <button
                  onClick={handleAdd}
                  disabled={!newWord || !newTranslation}
                  className="bg-emerald-600 text-white px-4 py-1.5 rounded text-xs font-medium cursor-pointer hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Speichern
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 px-4 py-1.5 rounded text-xs font-medium cursor-pointer hover:bg-gray-200"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Vocab list */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {filteredVocab.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-400 text-sm">
                {vocab.length === 0
                  ? "Noch keine Vokabeln gespeichert."
                  : "Keine Ergebnisse."}
              </p>
              {vocab.length === 0 && (
                <p className="text-gray-400 text-xs mt-1">
                  Klicken Sie auf "+ Neu" um ein Wort hinzuzufügen.
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredVocab.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-bold text-gray-800">{item.word}</p>
                        <button
                          onClick={() => {
                            const utterance = new SpeechSynthesisUtterance(item.word);
                            utterance.lang = "de-DE";
                            utterance.rate = 0.85;
                            speechSynthesis.speak(utterance);
                          }}
                          className="p-0.5 hover:bg-gray-100 rounded cursor-pointer"
                          title="Wort vorlesen"
                        >
                          <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-600">{item.translation}</p>
                      {item.context && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <p className="text-[10px] text-gray-400 italic">
                            „{item.context}"
                          </p>
                          <button
                            onClick={() => {
                              const utterance = new SpeechSynthesisUtterance(item.context!);
                              utterance.lang = "de-DE";
                              utterance.rate = 0.8;
                              speechSynthesis.speak(utterance);
                            }}
                            className="p-0.5 hover:bg-gray-100 rounded cursor-pointer shrink-0"
                            title="Beispiel vorlesen"
                          >
                            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeWord(item.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-50 rounded cursor-pointer transition-opacity"
                      title="Löschen"
                    >
                      <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-gray-200 space-y-2">
          {/* Export / Import buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                import("xlsx").then((XLSX) => {
                  const data = vocab.map((item) => ({
                    Wort: item.word,
                    Übersetzung: item.translation,
                    Kontext: item.context || "",
                  }));
                  const ws = XLSX.utils.json_to_sheet(data);
                  const wb = XLSX.utils.book_new();
                  XLSX.utils.book_append_sheet(wb, ws, "Vokabeln");
                  XLSX.writeFile(wb, `b1-vokabeln-${new Date().toISOString().slice(0, 10)}.xlsx`);
                });
              }}
              disabled={vocab.length === 0}
              className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 cursor-pointer hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export (.xlsx)
            </button>
            <label className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Import (.xlsx)
              <input
                type="file"
                accept=".xlsx,.xls"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = (ev) => {
                    import("xlsx").then((XLSX) => {
                      try {
                        const data = new Uint8Array(ev.target?.result as ArrayBuffer);
                        const wb = XLSX.read(data, { type: "array" });
                        const ws = wb.Sheets[wb.SheetNames[0]];
                        const rows = XLSX.utils.sheet_to_json<{ Wort?: string; Übersetzung?: string; Kontext?: string }>(ws);
                        rows.forEach((row) => {
                          if (row.Wort && row.Übersetzung) {
                            addWord(row.Wort, row.Übersetzung, row.Kontext);
                          }
                        });
                      } catch {
                        alert("Fehler beim Importieren der Datei.");
                      }
                    });
                  };
                  reader.readAsArrayBuffer(file);
                  e.target.value = "";
                }}
              />
            </label>
          </div>

          {/* Clear all + info */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-400">
              Gespeichert im Browser (localStorage)
            </span>
            {vocab.length > 0 && (
              <button
                onClick={clearAll}
                className="text-[10px] text-red-500 hover:text-red-700 cursor-pointer font-medium"
              >
                Alle löschen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
