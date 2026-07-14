import { useEffect, useState, useRef } from "react";
import { module5Schreiben } from "../../data/module5/schreiben";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";
import { useAuth } from "../../context/AuthContext";
import { usePermissions } from "../../context/Permissions";
import { suggestNextWords, isApiKeyConfigured } from "../../services/ai";

const SECTION_ID = "m5-schreiben";

export default function M5Schreiben() {
  const data = module5Schreiben;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers } = useAnswers();
  const { user } = useAuth();
  const { hasFeature } = usePermissions();
  const [activeTask, setActiveTask] = useState(0);
  const [suggestion, setSuggestion] = useState("");
  const suggestTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const savedTexts: string[] = (getAnswers<string>(SECTION_ID) ?? Array(data.aufgaben.length).fill("")) as string[];

  useEffect(() => {
    const completed = savedTexts.filter((t) => t.trim().length > 0).length;
    updateProgress(SECTION_ID, completed, data.aufgaben.length);
  }, [savedTexts, data.aufgaben.length, updateProgress]);

  const handleTextChange = (value: string) => {
    const newTexts = [...savedTexts];
    newTexts[activeTask] = value;
    setAnswers(SECTION_ID, newTexts);
    setSuggestion("");

    if (suggestTimeout.current) clearTimeout(suggestTimeout.current);
    if (user && hasFeature("advancedSuggestions") && isApiKeyConfigured() && value.trim().length >= 1) {
      suggestTimeout.current = setTimeout(async () => {
        const aufgabe = data.aufgaben[activeTask];
        const fullContext = `${aufgabe.instruction}\nPunkte: ${aufgabe.points.join(" / ")}`;
        const result = await suggestNextWords(fullContext, value, aufgabe.wordCount);
        if (result) setSuggestion(result);
      }, 1500);
    }
  };

  const acceptSuggestion = () => {
    if (!suggestion) return;
    const clean = suggestion.replace(/\\n/g, "\n");
    const currentEnd = savedTexts[activeTask]?.slice(-1) || "";
    const sep = currentEnd === "\n" || clean.startsWith("\n") ? "" : " ";
    const newTexts = [...savedTexts];
    newTexts[activeTask] = (savedTexts[activeTask] || "") + sep + clean;
    setAnswers(SECTION_ID, newTexts);
    setSuggestion("");

    if (suggestTimeout.current) clearTimeout(suggestTimeout.current);
    suggestTimeout.current = setTimeout(async () => {
      if (user && hasFeature("advancedSuggestions") && isApiKeyConfigured()) {
        const aufgabe = data.aufgaben[activeTask];
        const fullContext = `${aufgabe.instruction}\nPunkte: ${aufgabe.points.join(" / ")}`;
        const result = await suggestNextWords(fullContext, newTexts[activeTask], aufgabe.wordCount);
        if (result) setSuggestion(result);
      }
    }, 1000);
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
            onClick={() => setActiveTask(index)}
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
            placeholder="Schreiben Sie hier Ihren Text..."
            className="w-full h-48 border border-gray-300 rounded-lg p-4 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          {suggestion && (
            <div className="absolute top-0 left-0 right-0 p-4 pointer-events-none h-48 text-sm whitespace-pre-wrap break-words overflow-hidden">
              <span className="invisible">{currentText}</span>
              <span className="text-gray-400 italic"> {suggestion}</span>
              <span className="pointer-events-auto ml-1 bg-gray-200 border border-gray-300 text-[8px] text-gray-500 px-1 py-0.5 rounded font-mono cursor-pointer" onClick={acceptSuggestion}>Tab</span>
            </div>
          )}
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {wordCount} / {currentTask.wordCount} Wörter
          </div>
        </div>

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
            {wordCount >= currentTask.wordCount ? "✓ Ziel erreicht" : `${currentTask.wordCount - wordCount} Wörter fehlen`}
          </span>
        </div>
      </div>
    </div>
  );
}
