import { useState, useEffect } from "react";
import { module1Sprechen } from "../data/module1/sprechen";
import { useProgress } from "../context/ProgressContext";
import { useAnswers } from "../context/AnswersContext";

type TabKey = "teil1" | "teil2a" | "teil2b" | "teil3";
const SECTION_ID = "m1-sprechen";

export default function Sprechen() {
  const data = module1Sprechen;
  const { updateProgress } = useProgress();
  const { getDone, setDone: setGlobalDone } = useAnswers();
  const [activeTab, setActiveTab] = useState<TabKey>("teil1");

  const doneArr = getDone(SECTION_ID) ?? [false, false, false, false];
  const done: Record<TabKey, boolean> = {
    teil1: doneArr[0],
    teil2a: doneArr[1],
    teil2b: doneArr[2],
    teil3: doneArr[3],
  };

  const totalParts = 4;

  useEffect(() => {
    const answered = Object.values(done).filter(Boolean).length;
    updateProgress(SECTION_ID, answered, totalParts);
  }, [done, updateProgress]);

  const toggleDone = (key: TabKey) => {
    const keys: TabKey[] = ["teil1", "teil2a", "teil2b", "teil3"];
    const newArr = [...doneArr];
    const idx = keys.indexOf(key);
    newArr[idx] = !newArr[idx];
    setGlobalDone(SECTION_ID, newArr);
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "teil1", label: "Teil 1" },
    { key: "teil2a", label: "Teil 2 (A)" },
    { key: "teil2b", label: "Teil 2 (B)" },
    { key: "teil3", label: "Teil 3" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Tab navigation */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
              activeTab === tab.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
            {done[tab.key] && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full text-[9px] flex items-center justify-center">
                ✓
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Teil 1 */}
      {activeTab === "teil1" && (
        <div className={`border rounded-lg p-6 bg-white transition-colors ${done.teil1 ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"}`}>
          <h3 className="text-lg font-bold mb-4">{data.teil1.title}</h3>
          <p className="text-gray-700 mb-6">{data.teil1.instruction}</p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-4">{data.teil1.topic}</h4>
            <ul className="space-y-3">
              {data.teil1.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">–</span>
                  <span className="text-gray-800 italic">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 Tipp: Üben Sie diesen Teil mit einem Lernpartner. Machen Sie
              Vorschläge und reagieren Sie auf die Vorschläge des anderen.
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => toggleDone("teil1")}
              className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                done.teil1
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {done.teil1 ? "✓ Erledigt" : "Als erledigt markieren"}
            </button>
          </div>
        </div>
      )}

      {/* Teil 2A */}
      {activeTab === "teil2a" && (
        <div className={`border rounded-lg p-6 bg-white transition-colors ${done.teil2a ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"}`}>
          <h3 className="text-lg font-bold mb-4">{data.teil2A.title}</h3>
          <p className="text-gray-700 mb-6">{data.teil2A.instruction}</p>

          <div className="space-y-4">
            {data.teil2A.folien.map((folie, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="p-4 bg-gray-50">
                  <p className="text-sm text-gray-700">{folie.step}</p>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <span className="font-bold text-sm text-center text-gray-800">
                    {folie.content}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => toggleDone("teil2a")}
              className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                done.teil2a
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {done.teil2a ? "✓ Erledigt" : "Als erledigt markieren"}
            </button>
          </div>
        </div>
      )}

      {/* Teil 2B */}
      {activeTab === "teil2b" && (
        <div className={`border rounded-lg p-6 bg-white transition-colors ${done.teil2b ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"}`}>
          <h3 className="text-lg font-bold mb-4">{data.teil2B.title}</h3>
          <p className="text-gray-700 mb-6">{data.teil2B.instruction}</p>

          <div className="space-y-4">
            {data.teil2B.folien.map((folie, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="p-4 bg-gray-50">
                  <p className="text-sm text-gray-700">{folie.step}</p>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <span className="font-bold text-sm text-center text-gray-800">
                    {folie.content}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => toggleDone("teil2b")}
              className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                done.teil2b
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {done.teil2b ? "✓ Erledigt" : "Als erledigt markieren"}
            </button>
          </div>
        </div>
      )}

      {/* Teil 3 */}
      {activeTab === "teil3" && (
        <div className={`border rounded-lg p-6 bg-white transition-colors ${done.teil3 ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"}`}>
          <h3 className="text-lg font-bold mb-4">{data.teil3.title}</h3>
          <p className="text-gray-700 mb-6">{data.teil3.instruction}</p>

          <ul className="space-y-3">
            {data.teil3.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {String.fromCharCode(97 + i)}
                </span>
                <span className="text-sm text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 Tipp: Üben Sie diesen Teil mit einem Lernpartner. Geben Sie
              Feedback zur Präsentation und stellen Sie Fragen.
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => toggleDone("teil3")}
              className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                done.teil3
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {done.teil3 ? "✓ Erledigt" : "Als erledigt markieren"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
