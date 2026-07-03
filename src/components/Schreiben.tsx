import { useState } from "react";
import { module1Schreiben } from "../data/module1/schreiben";

export default function Schreiben() {
  const data = module1Schreiben;
  const [texts, setTexts] = useState<string[]>(
    Array(data.aufgaben.length).fill("")
  );

  const handleChange = (index: number, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  const wordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {data.aufgaben.map((aufgabe, index) => (
          <div
            key={aufgabe.id}
            className="border border-gray-200 rounded-lg p-6 bg-white"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">{aufgabe.title}</h3>
              <span className="text-sm text-gray-500">
                Arbeitszeit: {aufgabe.time}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{aufgabe.instruction}</p>

            {aufgabe.points.length > 0 && (
              <ul className="list-disc ml-6 mb-4 space-y-1">
                {aufgabe.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {aufgabe.hints && (
              <div className="bg-gray-50 rounded p-3 mb-4">
                {aufgabe.hints.map((hint, i) => (
                  <p key={i} className="text-xs text-gray-600 italic">
                    {hint}
                  </p>
                ))}
              </div>
            )}

            <textarea
              value={texts[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 min-h-[150px] text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder={`Schreiben Sie hier Ihren Text (circa ${aufgabe.wordCount} Wörter)...`}
            />

            <div className="flex items-center justify-between mt-2">
              <span
                className={`text-xs ${
                  wordCount(texts[index]) >= aufgabe.wordCount
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                Wörter: {wordCount(texts[index])} / {aufgabe.wordCount}
              </span>
              {wordCount(texts[index]) >= aufgabe.wordCount && (
                <span className="text-xs text-green-600 font-medium">
                  ✓ Mindestanzahl erreicht
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
