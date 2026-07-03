import { useState } from "react";
import Module1 from "./components/Module1";
import Timer from "./components/Timer";
import VocabularyPanel from "./components/Vocabulary";

function App() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [vocabOpen, setVocabOpen] = useState(false);

  const toggleModule = (key: string) => {
    setOpenModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-8">
      {/* Fixed top bar - responsive */}
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
        </div>
      </div>

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
              className="w-full flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="bg-gray-900 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="text-sm font-semibold text-gray-800">Modelltest 1</span>
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m1"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
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

export default App;
