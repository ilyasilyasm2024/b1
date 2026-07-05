import { useState, useEffect } from "react";
import { module1Schreiben } from "../data/module1/schreiben";
import { useProgress } from "../context/ProgressContext";
import { useAnswers } from "../context/AnswersContext";

const SECTION_ID = "m1-schreiben";

export default function Schreiben() {
  const data = module1Schreiben;
  const { updateProgress } = useProgress();
  const { getTexts, setTexts: setGlobalTexts, getDone, setDone: setGlobalDone } = useAnswers();

  const texts = getTexts(SECTION_ID) ?? Array(data.aufgaben.length).fill("");
  const done = getDone(SECTION_ID) ?? Array(data.aufgaben.length).fill(false);

  useEffect(() => {
    const answered = done.filter(Boolean).length;
    updateProgress(SECTION_ID, answered, data.aufgaben.length);
  }, [done, data.aufgaben.length, updateProgress]);

  const handleChange = (index: number, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setGlobalTexts(SECTION_ID, newTexts);
  };

  const toggleDone = (index: number) => {
    // Only allow marking done if word count is met (or already done to undo)
    if (!done[index] && wordCount(texts[index]) < data.aufgaben[index].wordCount) {
      return;
    }
    const newDone = [...done];
    newDone[index] = !newDone[index];
    setGlobalDone(SECTION_ID, newDone);
  };

  const wordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {data.aufgaben.map((aufgabe, index) => (
          <div
            key={aufgabe.id}
            className={`border rounded-lg p-6 bg-white transition-colors ${
              done[index] ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">{aufgabe.title}</h3>
                {done[index] && (
                  <span className="text-emerald-600 text-sm font-medium">✓ Erledigt</span>
                )}
              </div>
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

            <div className="flex items-center justify-between mt-3">
              <span
                className={`text-xs ${
                  wordCount(texts[index]) >= aufgabe.wordCount
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                Wörter: {wordCount(texts[index])} / {aufgabe.wordCount}
              </span>

              <button
                onClick={() => toggleDone(index)}
                disabled={!done[index] && wordCount(texts[index]) < aufgabe.wordCount}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                  done[index]
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {done[index] ? "✓ Erledigt" : "Als erledigt markieren"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
