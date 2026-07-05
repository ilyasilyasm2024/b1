import { useState } from "react";
import { Link } from "react-router-dom";
import Module1 from "./components/Module1";
import Timer from "./components/Timer";
import VocabularyPanel from "./components/Vocabulary";
import TextHighlighter from "./components/TextHighlighter";
import { VocabularyProvider } from "./context/VocabularyContext";
import { useAuth } from "./context/AuthContext";
import { ToastProvider } from "./components/Toast";
import { ProgressProvider, useProgress } from "./context/ProgressContext";
import { AnswersProvider } from "./context/AnswersContext";

function AppContent() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [vocabOpen, setVocabOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getModuleProgress } = useProgress();
  const m1Progress = getModuleProgress("m1");

  const toggleModule = (key: string) => {
    setOpenModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-8">
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 px-3 py-2">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <button
            onClick={() => setVocabOpen(true)}
            className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
            title="Meine Vokabeln"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-medium text-gray-700 hidden sm:inline">Vokabeln</span>
          </button>

          <Timer />

          {/* Auth section */}
          <div className="flex items-center gap-2 shrink-0">
            {user ? (
              <>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  Hallo, {user.firstName}
                </span>
                <button
                  onClick={logout}
                  className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
                  title="Abmelden"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="text-xs font-medium text-gray-700 hidden sm:inline">Abmelden</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-gray-900 text-white rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-gray-800 transition-colors"
                >
                  Anmelden
                </Link>
                <Link
                  to="/signup"
                  className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors hidden sm:inline-block"
                >
                  Registrieren
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Text Highlighter */}
      <TextHighlighter />

      {/* Vocabulary Panel */}
      <VocabularyPanel isOpen={vocabOpen} onClose={() => setVocabOpen(false)} />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            B1 Prüfungsvorbereitung
          </h1>
          <p className="text-gray-500 text-sm">Zertifikat B1 neu</p>
        </div>

        {/* Modules */}
        <div className="space-y-3">
          {/* Module 1 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m1")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Circular progress ring */}
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle
                        cx="20" cy="20" r="17"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <circle
                        cx="20" cy="20" r="17"
                        fill="none"
                        stroke={m1Progress.percent === 100 ? "#10b981" : "#3b82f6"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m1Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">
                      1
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 1</span>
                    <span className="text-[10px] text-gray-400">
                      {m1Progress.answered}/{m1Progress.total} Fragen
                    </span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m1"] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m1"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module1 />
              </div>
            )}
          </div>

          {/* Placeholder for future modules */}
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
            <div
              key={num}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm opacity-50"
            >
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-gray-400 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold">
                    {num}
                  </span>
                  <span className="text-sm font-semibold text-gray-500">Modelltest {num}</span>
                </div>
                <span className="text-[10px] text-gray-400 italic">Bald verfügbar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <VocabularyProvider>
        <AnswersProvider>
          <ProgressProvider>
            <AppContent />
          </ProgressProvider>
        </AnswersProvider>
      </VocabularyProvider>
    </ToastProvider>
  );
}

export default App;
