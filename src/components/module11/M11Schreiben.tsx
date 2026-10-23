import { useEffect, useState } from "react";
import { module11Schreiben } from "../../data/module11/schreiben";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";
import { schreibenContext } from "../../services/ai";
import useWritingSuggestions from "../../hooks/useWritingSuggestions";
import AISuggestionBar from "../AISuggestionBar";
import SuggestionGhost from "../SuggestionGhost";
import { useTranslation } from "react-i18next";

const SECTION_ID = "m11-schreiben";

export default function M11Schreiben() {
  const { t } = useTranslation();
  const data = module11Schreiben;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers } = useAnswers();
  const [activeTask, setActiveTask] = useState(0);
  const ai = useWritingSuggestions();
  const suggestion = ai.suggestionFor(activeTask);

  const savedTexts: string[] = (getAnswers<string>(SECTION_ID) ?? Array(data.aufgaben.length).fill("")) as string[];

  useEffect(() => {
    const completed = savedTexts.filter((text) => text.trim().length > 0).length;
    updateProgress(SECTION_ID, completed, data.aufgaben.length);
  }, [savedTexts, data.aufgaben.length, updateProgress]);

  // Ask the AI for the next words of the active task's text (after a pause in typing by default)
  const requestSuggestion = (text: string, delay?: number) => {
    const aufgabe = data.aufgaben[activeTask];
    ai.request(activeTask, schreibenContext(aufgabe), text, aufgabe.wordCount, delay);
  };

  const handleTextChange = (value: string) => {
    const newTexts = [...savedTexts];
    newTexts[activeTask] = value;
    setAnswers(SECTION_ID, newTexts);
    requestSuggestion(value);
  };

  const acceptSuggestion = () => {
    if (!suggestion) return;
    const clean = suggestion.replace(/\\n/g, "\n");
    const currentEnd = savedTexts[activeTask]?.slice(-1) || "";
    const sep = currentEnd === "\n" || clean.startsWith("\n") ? "" : " ";
    const newTexts = [...savedTexts];
    newTexts[activeTask] = (savedTexts[activeTask] || "") + sep + clean;
    setAnswers(SECTION_ID, newTexts);
    requestSuggestion(newTexts[activeTask], 1000);
  };

  const currentTask = data.aufgaben[activeTask];
  const currentText = savedTexts[activeTask] || "";
  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Task selector tabs */}
      <div className="flex gap-2 mb-6">
        {data.aufgaben.map((aufgabe, index) => (
          <button
            key={aufgabe.id}
            onClick={() => {
              setActiveTask(index);
              ai.clear();
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
              activeTask === index
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {aufgabe.title}
          </button>
        ))}
      </div>

      {/* Task content */}
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">{currentTask.title}</h3>
          <span className="text-xs text-gray-500 italic">Zeit: {currentTask.time} | ca. {currentTask.wordCount} Wörter</span>
        </div>

        <p className="text-sm text-gray-800 mb-4">{currentTask.instruction}</p>

        {/* Points */}
        <ul className="list-disc list-inside mb-4 space-y-1">
          {currentTask.points.map((point, i) => (
            <li key={i} className="text-sm text-gray-700">{point}</li>
          ))}
        </ul>

        {/* Hints */}
        {currentTask.hints && currentTask.hints.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4">
            {currentTask.hints.map((hint, i) => (
              <p key={i} className="text-xs text-gray-600 italic">{hint}</p>
            ))}
          </div>
        )}

        {/* Textarea */}
        <div className="relative">
          <textarea
            value={currentText}
            onChange={(e) => handleTextChange(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Tab" && suggestion) { e.preventDefault(); acceptSuggestion(); } }}
            placeholder={t("exercise.writePlaceholder")}
            className="w-full h-48 border border-gray-300 rounded-lg p-4 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          {suggestion && (
            <div className="absolute top-0 left-0 right-0 p-4 pointer-events-none h-48 text-sm whitespace-pre-wrap break-words overflow-hidden">
              <span className="invisible">{currentText}</span>
              <SuggestionGhost text={suggestion} />
              <span className="pointer-events-auto ml-1 bg-gray-200 border border-gray-300 text-[8px] text-gray-500 px-1 py-0.5 rounded font-mono cursor-pointer" onClick={acceptSuggestion}>Tab</span>
            </div>
          )}
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {t("exercise.wordsOfTarget", { count: wordCount, target: currentTask.wordCount })}
          </div>
        </div>

        <AISuggestionBar
          ai={ai}
          fieldKey={activeTask}
          onSuggestNow={() => requestSuggestion(currentText, 0)}
          onAccept={acceptSuggestion}
        />

        {/* Word count indicator */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                wordCount >= currentTask.wordCount ? "bg-green-500" : wordCount >= currentTask.wordCount * 0.5 ? "bg-yellow-500" : "bg-gray-400"
              }`}
              style={{ width: `${Math.min(100, (wordCount / currentTask.wordCount) * 100)}%` }}
            />
          </div>
          <span className={`text-xs font-medium ${wordCount >= currentTask.wordCount ? "text-green-600" : "text-gray-500"}`}>
            {wordCount >= currentTask.wordCount ? `✓ ${t("exercise.goalReached")}` : t("exercise.wordsMissing", { count: currentTask.wordCount - wordCount })}
          </span>
        </div>
      </div>
    </div>
  );
}
