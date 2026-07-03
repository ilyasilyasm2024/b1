import { useState } from "react";
import { module1Sprechen } from "../data/module1/sprechen";

export default function Sprechen() {
  const data = module1Sprechen;
  const [activeTab, setActiveTab] = useState<"teil1" | "teil2a" | "teil2b" | "teil3">("teil1");

  const tabs = [
    { key: "teil1" as const, label: "Teil 1" },
    { key: "teil2a" as const, label: "Teil 2 (A)" },
    { key: "teil2b" as const, label: "Teil 2 (B)" },
    { key: "teil3" as const, label: "Teil 3" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Tab navigation */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
              activeTab === tab.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Teil 1 */}
      {activeTab === "teil1" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
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
        </div>
      )}

      {/* Teil 2A */}
      {activeTab === "teil2a" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
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
        </div>
      )}

      {/* Teil 2B */}
      {activeTab === "teil2b" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
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
        </div>
      )}

      {/* Teil 3 */}
      {activeTab === "teil3" && (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
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
        </div>
      )}
    </div>
  );
}
