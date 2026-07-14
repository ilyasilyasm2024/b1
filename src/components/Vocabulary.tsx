import { useState } from "react";
import { Link } from "react-router-dom";
import {
  translateWord,
  generateExample,
  verifyGermanWord,
  isApiKeyConfigured,
  type TranslationLanguage,
} from "../services/ai";
import { useVocabulary } from "../context/VocabularyContext";
import { useAuth } from "../context/AuthContext";
import { usePermissions } from "../context/Permissions";
import { useAIUsage } from "../context/AIUsageContext";
import ConfirmModal from "./ConfirmModal";

export type { VocabItem } from "../context/VocabularyContext";
export { useVocabulary } from "../context/VocabularyContext";

interface VocabularyPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VocabularyPanel({ isOpen, onClose }: VocabularyPanelProps) {
  const { vocab, addWord, removeWord, clearAll } = useVocabulary();
  const { user } = useAuth();
  const [newWord, setNewWord] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [newContext, setNewContext] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [translationLang, setTranslationLang] = useState<TranslationLanguage>("arabic");
  const [aiLoading, setAiLoading] = useState<"translate" | "example" | null>(null);
  const [confirmAdd, setConfirmAdd] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [confirmDeleteWord, setConfirmDeleteWord] = useState("");
  const [wordWarning, setWordWarning] = useState("");
  const [wordSuggestion, setWordSuggestion] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleNewClick = () => {
    if (!user) {
      setShowAuthPrompt(true);
      return;
    }
    setShowForm(!showForm);
    setShowAuthPrompt(false);
  };

  const handleAdd = async () => {
    if (!newWord || !newTranslation) return;

    setWordWarning("");
    setWordSuggestion("");

    // Verify the word is German using AI (if API key available)
    if (isApiKeyConfigured()) {
      setIsVerifying(true);
      try {
        const result = await verifyGermanWord(newWord);
        if (!result.isGerman) {
          setWordWarning(`„${newWord}" scheint kein deutsches Wort zu sein.`);
          setWordSuggestion(result.suggestion || "");
          setIsVerifying(false);
          return;
        }
      } catch {
        // If verification fails, let the user proceed
      }
      setIsVerifying(false);
    }

    setConfirmAdd(true);
  };

  const handleAddAnyway = () => {
    // User wants to add despite the warning
    setWordWarning("");
    setWordSuggestion("");
    setConfirmAdd(true);
  };

  const handleUseSuggestion = () => {
    if (wordSuggestion) {
      setNewWord(wordSuggestion);
    }
    setWordWarning("");
    setWordSuggestion("");
  };

  const confirmAddWord = async () => {
    setConfirmAdd(false);
    await addWord(newWord, newTranslation, newContext || undefined);
    setNewWord("");
    setNewTranslation("");
    setNewContext("");
    setShowForm(false);
  };

  const handleDeleteClick = (id: string, word: string) => {
    setConfirmDeleteId(id);
    setConfirmDeleteWord(word);
  };

  const confirmDelete = async () => {
    if (confirmDeleteId) {
      await removeWord(confirmDeleteId);
      setConfirmDeleteId(null);
      setConfirmDeleteWord("");
    }
  };

  const { hasFeature, limits, canUseAI } = usePermissions();
  const { todayUsage, increment: incrementAI } = useAIUsage();

  const handleAITranslate = async () => {
    if (!newWord) return;
    if (!canUseAI(todayUsage)) {
      alert("AI daily limit reached. Upgrade for unlimited AI.");
      return;
    }
    setAiLoading("translate");
    try {
      const result = await translateWord(newWord, translationLang);
      setNewTranslation(result);
      incrementAI();
    } catch {
      alert("Fehler bei der Übersetzung. Bitte API-Key prüfen.");
    }
    setAiLoading(null);
  };

  const handleAIExample = async () => {
    if (!newWord) return;
    if (!hasFeature("contextSentences")) {
      alert("AI example sentences require Gold plan or higher.");
      return;
    }
    if (!canUseAI(todayUsage)) {
      alert("AI daily limit reached. Upgrade for unlimited AI.");
      return;
    }
    setAiLoading("example");
    try {
      const result = await generateExample(newWord);
      setNewContext(result);
      incrementAI();
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
    <div className="fixed inset-0 z-[70] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-white shadow-xl flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Meine Vokabeln</h2>
            <p className="text-xs text-gray-500">
              {vocab.length}{limits.vocabularyCapacity !== -1 ? `/${limits.vocabularyCapacity}` : ""} Wörter gespeichert
            </p>
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
              onClick={handleNewClick}
              className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-800"
            >
              + Neu
            </button>
          </div>

          {/* Auth prompt for unauthenticated users */}
          {showAuthPrompt && !user && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    Anmeldung erforderlich
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    Um Vokabeln zu speichern, musst du dich anmelden oder ein Konto erstellen.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/login"
                  onClick={onClose}
                  className="flex-1 bg-gray-900 text-white text-center py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
                >
                  Anmelden
                </Link>
                <Link
                  to="/signup"
                  onClick={onClose}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 text-center py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors"
                >
                  Registrieren
                </Link>
              </div>
              <button
                onClick={() => setShowAuthPrompt(false)}
                className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                Schließen
              </button>
            </div>
          )}

          {/* Add form (only for logged-in users) */}
          {showForm && user && (
            <div className="bg-gray-50 rounded-lg p-3 space-y-2">
              <input
                type="text"
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                placeholder="Wort (Deutsch)"
                maxLength={150}
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              {/* Translation field + AI button */}
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={newTranslation}
                  onChange={(e) => setNewTranslation(e.target.value)}
                  placeholder="Übersetzung"
                  maxLength={150}
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
                  maxLength={150}
                  className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={handleAIExample}
                  disabled={!newWord || aiLoading !== null || !isApiKeyConfigured() || !hasFeature("contextSentences")}
                  className={`px-2.5 py-1.5 rounded text-[10px] font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 ${
                    hasFeature("contextSentences") ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-300 text-gray-500"
                  }`}
                  title={!hasFeature("contextSentences") ? "🔒 Gold plan required" : !isApiKeyConfigured() ? "API-Key nicht konfiguriert" : "Beispielsatz generieren"}
                >
                  {aiLoading === "example" ? (
                    <span className="animate-spin">⟳</span>
                  ) : hasFeature("contextSentences") ? (
                    "Beispiel"
                  ) : (
                    "🔒 Beispiel"
                  )}
                </button>
              </div>

              {!isApiKeyConfigured() && (
                <p className="text-[9px] text-amber-600">
                  ⚠️ AI-Funktionen erfordern einen API-Key in der .env Datei (VITE_GROQ_API_KEY). Bitte den Dev-Server neu starten nach Änderungen.
                </p>
              )}

              {limits.aiTranslationsPerDay !== -1 ? (
                <p className={`text-[9px] ${todayUsage >= limits.aiTranslationsPerDay ? "text-red-500" : "text-gray-400"}`}>
                  🤖 AI: {todayUsage}/{limits.aiTranslationsPerDay} today
                </p>
              ) : (
                <p className="text-[9px] text-gray-400">
                  🤖 AI: {todayUsage} used today (unlimited)
                </p>
              )}

              <div className="flex gap-2">
                <button
                  onClick={handleAdd}
                  disabled={!newWord || !newTranslation || isVerifying}
                  className="bg-emerald-600 text-white px-4 py-1.5 rounded text-xs font-medium cursor-pointer hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? "Prüfe..." : "Speichern"}
                </button>
                <button
                  onClick={() => { setShowForm(false); setWordWarning(""); setWordSuggestion(""); }}
                  className="text-gray-500 px-4 py-1.5 rounded text-xs font-medium cursor-pointer hover:bg-gray-200"
                >
                  Abbrechen
                </button>
              </div>

              {/* Word verification warning */}
              {wordWarning && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <p className="text-xs text-orange-800">{wordWarning}</p>
                  </div>
                  {wordSuggestion && (
                    <p className="text-xs text-orange-700">
                      Meintest du: <strong>„{wordSuggestion}"</strong>?
                    </p>
                  )}
                  <div className="flex gap-2">
                    {wordSuggestion && (
                      <button
                        onClick={handleUseSuggestion}
                        className="bg-orange-600 text-white px-3 py-1 rounded text-[10px] font-medium cursor-pointer hover:bg-orange-700"
                      >
                        Vorschlag übernehmen
                      </button>
                    )}
                    <button
                      onClick={handleAddAnyway}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-[10px] font-medium cursor-pointer hover:bg-gray-300"
                    >
                      Trotzdem speichern
                    </button>
                  </div>
                </div>
              )}
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
                      onClick={() => handleDeleteClick(item.id, item.word)}
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
          {user ? (
            <>
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
                <label className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 cursor-pointer hover:bg-gray-50"
                  title="Excel-Datei mit Spalten: Wort | Übersetzung | Kontext (optional)"
                >
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
                        import("xlsx").then(async (XLSX) => {
                          try {
                            const data = new Uint8Array(ev.target?.result as ArrayBuffer);
                            const wb = XLSX.read(data, { type: "array" });
                            const ws = wb.Sheets[wb.SheetNames[0]];
                            const rows = XLSX.utils.sheet_to_json<{ Wort?: string; Übersetzung?: string; Kontext?: string }>(ws);
                            for (const row of rows) {
                              if (row.Wort && row.Übersetzung) {
                                await addWord(row.Wort, row.Übersetzung, row.Kontext);
                              }
                            }
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
              {/* Import format guide */}
              <div className="bg-gray-50 rounded p-2 border border-gray-100">
                <p className="text-[9px] text-gray-500 font-medium mb-1">📋 Import-Format (.xlsx):</p>
                <div className="text-[9px] text-gray-400 font-mono">
                  <span className="text-gray-600">Wort</span> | <span className="text-gray-600">Übersetzung</span> | <span className="text-gray-600">Kontext</span>
                </div>
                <p className="text-[8px] text-gray-400 mt-0.5">z.B. "der Schüler | الطالب | Der Schüler lernt Deutsch."</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-400">
                  Synchronisiert mit deinem Konto
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
            </>
          ) : (
            <p className="text-xs text-gray-400 text-center py-1">
              Melde dich an, um Vokabeln zu speichern, exportieren und importieren.
            </p>
          )}
        </div>
      </div>

      {/* Confirmation Modal: Add */}
      <ConfirmModal
        isOpen={confirmAdd}
        title="Vokabel hinzufügen"
        message={`Möchtest du „${newWord}" wirklich speichern?`}
        confirmText="Speichern"
        cancelText="Abbrechen"
        onConfirm={confirmAddWord}
        onCancel={() => setConfirmAdd(false)}
      />

      {/* Confirmation Modal: Delete */}
      <ConfirmModal
        isOpen={!!confirmDeleteId}
        title="Vokabel löschen"
        message={`Möchtest du „${confirmDeleteWord}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`}
        confirmText="Löschen"
        cancelText="Abbrechen"
        variant="danger"
        onConfirm={confirmDelete}
        onCancel={() => { setConfirmDeleteId(null); setConfirmDeleteWord(""); }}
      />
    </div>
  );
}
