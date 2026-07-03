import { useState } from "react";
import { module1HoerenTeil4 } from "../data/module1/hoerenTeil4";

type Answer = "moderatorin" | "berger" | "weser" | null;

export default function HoerenTeil4() {
  const data = module1HoerenTeil4;
  const [answers, setAnswers] = useState<Answer[]>(
    Array(data.questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: Answer) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setAnswers(Array(data.questions.length).fill(null));
    setSubmitted(false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.questions[i].correct).length
    : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <p className="text-gray-700 mb-4">{data.instruction}</p>
      <p className="text-gray-600 italic mb-4">{data.context}</p>

      {/* Audio */}
      <div className="mb-4">
        <p className="text-xs font-medium text-gray-500 mb-1">Einleitung anhören:</p>
        <audio controls controlsList="nodownload" className="w-full h-9 mb-2">
          <source src="/horen/teil4-introduction.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div className="mb-6">
        <p className="text-xs font-medium text-gray-500 mb-1">Diskussion anhören:</p>
        <audio controls controlsList="nodownload" className="w-full h-9">
          <source src="/horen/teil4-text.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Example */}
      <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500 font-semibold mb-2">Beispiel</p>
        <div className="flex items-center justify-between">
          <p className="text-sm">
            <span className="font-bold mr-2">0</span>
            {data.example.statement}
          </p>
          <span className="text-sm font-bold text-green-700">
            {data.speakers.find((s) => s.key === data.example.correct)?.label}
          </span>
        </div>
      </div>

      {/* Table header */}
      <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto] gap-2 mb-2 px-4">
        <span></span>
        {data.speakers.map((s) => (
          <span
            key={s.key}
            className="text-xs font-bold text-center w-20"
          >
            {s.label}
          </span>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-2">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong =
            submitted && userAnswer !== null && userAnswer !== q.correct;

          return (
            <div
              key={q.id}
              className={`p-3 rounded-lg border grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-2 items-center ${
                submitted
                  ? isCorrect
                    ? "border-green-400 bg-green-50"
                    : isWrong
                    ? "border-red-400 bg-red-50"
                    : "border-yellow-400 bg-yellow-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <p className="text-sm">
                <span className="font-bold mr-2">{q.id}</span>
                {q.statement}
              </p>
              {data.speakers.map((s) => (
                <button
                  key={s.key}
                  onClick={() =>
                    handleAnswer(index, s.key as Answer)
                  }
                  className={`w-20 py-1 rounded text-xs font-medium cursor-pointer ${
                    userAnswer === s.key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  disabled={submitted}
                >
                  {s.label}
                </button>
              ))}
              {submitted && isWrong && (
                <span className="text-xs text-red-600 col-span-full">
                  ✗ Richtig:{" "}
                  {data.speakers.find((s) => s.key === q.correct)?.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Auswerten
          </button>
        ) : (
          <>
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 font-semibold">
              Ergebnis: {score} / {data.questions.length}
            </div>
            <button
              onClick={handleReset}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 cursor-pointer"
            >
              Nochmal versuchen
            </button>
          </>
        )}
      </div>
    </div>
  );
}
