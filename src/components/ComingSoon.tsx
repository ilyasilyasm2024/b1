import { useState } from "react";

const features = [
  {
    icon: "💬",
    title: "Global Chat",
    description: "Chatte mit anderen B1-Lernenden",
  },
  {
    icon: "🎙️",
    title: "Sprechen Recorder",
    description: "Nimm dein Sprechen auf und verfolge deinen Fortschritt",
  },
  {
    icon: "✍️",
    title: "AI Schreiben-Korrektur",
    description: "Lass deine Texte von KI korrigieren und verbessern",
  },
  {
    icon: "👥",
    title: "Sprechen mit Freunden",
    description: "Wähle einen Freund für die Sprechen-Vorbereitung",
  },
];

export default function ComingSoon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {/* Expanded panel */}
      {isOpen && (
        <div className="mb-3 bg-white border border-gray-200 rounded-xl shadow-xl w-72 overflow-hidden animate-in">
          <div className="px-4 py-3 bg-gray-900 text-white">
            <h3 className="text-sm font-bold">Bald verfügbar 🚀</h3>
            <p className="text-[10px] text-gray-300 mt-0.5">Neue Features in Entwicklung</p>
          </div>
          <div className="p-2 space-y-1 max-h-64 overflow-y-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg shrink-0">{feature.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{feature.title}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{feature.description}</p>
                </div>
                <span className="ml-auto shrink-0 bg-amber-100 text-amber-700 text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                  SOON
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all"
        title="Kommende Features"
      >
        <span className={`text-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? "✕" : "🔮"}
        </span>
      </button>
    </div>
  );
}
