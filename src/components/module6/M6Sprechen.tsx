import { useEffect, useState } from "react";
import { module6Sprechen } from "../../data/module6/sprechen";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

const SECTION_ID = "m6-sprechen";

export default function M6Sprechen() {
  const data = module6Sprechen;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers } = useAnswers();
  const [activeTab, setActiveTab] = useState<"teil1" | "teil2a" | "teil2b" | "teil3">("teil1");

  const NOTE_KEYS = [
    "teil1",
    "teil2a-0",
    "teil2a-1",
    "teil2a-2",
    "teil2a-3",
    "teil2a-4",
    "teil2b-0",
    "teil2b-1",
    "teil2b-2",
    "teil2b-3",
    "teil2b-4",
    "teil3",
  ];

  const answersArr = getAnswers<string>(SECTION_ID) ?? [];
  const savedNotes: Record<string, string> = {};
  NOTE_KEYS.forEach((key, index) => {
    savedNotes[key] = answersArr[index] ?? "";
  });

  useEffect(() => {
    const completed = Object.values(savedNotes).filter((n) => n && n.trim().length > 0).length;
    updateProgress(SECTION_ID, Math.min(completed, 4), 4);
  }, [savedNotes, updateProgress]);

  const handleNoteChange = (key: string, value: string) => {
    const newAnswers = NOTE_KEYS.map((k) => (k === key ? value : (savedNotes[k] ?? "")));
    setAnswers(SECTION_ID, newAnswers);
  };

  const tabs = [
    { key: "teil1" as const, label: "Teil 1" },
    { key: "teil2a" as const, label: "Teil 2 (A)" },
    { key: "teil2b" as const, label: "Teil 2 (B)" },
    { key: "teil3" as const, label: "Teil 3" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Tab selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
              activeTab === tab.key
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Teil 1 */}
      {activeTab === "teil1" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-bold mb-2">{data.teil1.title}</h3>
          <p className="text-sm text-gray-800 mb-4">{data.teil1.instruction}</p>
          <p className="text-sm font-medium text-gray-700 mb-4">Thema: {data.teil1.topic}</p>

          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
            <p className="text-xs font-bold text-gray-600 mb-2">Besprechungspunkte:</p>
            <ul className="list-disc list-inside space-y-1">
              {data.teil1.points.map((point, i) => (
                <li key={i} className="text-sm text-gray-700">{point}</li>
              ))}
            </ul>
          </div>

          <textarea
            value={savedNotes["teil1"] || ""}
            onChange={(e) => handleNoteChange("teil1", e.target.value)}
            placeholder="Notizen für Teil 1..."
            className="w-full h-32 border border-gray-300 rounded-lg p-4 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      )}

      {/* Teil 2A */}
      {activeTab === "teil2a" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-bold mb-2">{data.teil2A.title}</h3>
          <p className="text-sm text-gray-800 mb-4">{data.teil2A.instruction}</p>
          <p className="text-sm font-medium text-gray-700 mb-6">Thema: {data.teil2A.topic}</p>

          <div className="space-y-4">
            {data.teil2A.folien.map((folie, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-1">Folie {i + 1}</p>
                    <p className="text-sm text-gray-800 mb-2">{folie.step}</p>
                    <div className="bg-gray-100 rounded p-3">
                      <p className="text-xs text-gray-700 whitespace-pre-line">{folie.content}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-1">Ihre Notizen</p>
                    <textarea
                      value={savedNotes[`teil2a-${i}`] || ""}
                      onChange={(e) => handleNoteChange(`teil2a-${i}`, e.target.value)}
                      placeholder="Notizen..."
                      className="w-full h-24 border border-gray-300 rounded p-2 text-xs resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Teil 2B */}
      {activeTab === "teil2b" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-bold mb-2">{data.teil2B.title}</h3>
          <p className="text-sm text-gray-800 mb-4">{data.teil2B.instruction}</p>
          <p className="text-sm font-medium text-gray-700 mb-6">Thema: {data.teil2B.topic}</p>

          <div className="space-y-4">
            {data.teil2B.folien.map((folie, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-1">Folie {i + 1}</p>
                    <p className="text-sm text-gray-800 mb-2">{folie.step}</p>
                    <div className="bg-gray-100 rounded p-3">
                      <p className="text-xs text-gray-700 whitespace-pre-line">{folie.content}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 mb-1">Ihre Notizen</p>
                    <textarea
                      value={savedNotes[`teil2b-${i}`] || ""}
                      onChange={(e) => handleNoteChange(`teil2b-${i}`, e.target.value)}
                      placeholder="Notizen..."
                      className="w-full h-24 border border-gray-300 rounded p-2 text-xs resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Teil 3 */}
      {activeTab === "teil3" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-bold mb-2">{data.teil3.title}</h3>
          <p className="text-sm text-gray-800 mb-4">{data.teil3.instruction}</p>

          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
            <ul className="list-disc list-inside space-y-1">
              {data.teil3.points.map((point, i) => (
                <li key={i} className="text-sm text-gray-700">{point}</li>
              ))}
            </ul>
          </div>

          <textarea
            value={savedNotes["teil3"] || ""}
            onChange={(e) => handleNoteChange("teil3", e.target.value)}
            placeholder="Notizen für Teil 3..."
            className="w-full h-32 border border-gray-300 rounded-lg p-4 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      )}
    </div>
  );
}
