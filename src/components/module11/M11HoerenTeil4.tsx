import { useEffect } from "react";
import { module11HoerenTeil4 } from "../../data/module11/hoerenTeil4";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "daniel" | "binder" | "fuchs" | null;
const SECTION_ID = "m11-hoeren-teil4";

export default function M11HoerenTeil4() {
  const data = module11HoerenTeil4;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const answers: Answer[] = (getAnswers<Answer>(SECTION_ID) ?? Array(data.questions.length).fill(null)) as Answer[];
  const submitted = isSubmitted(SECTION_ID);

  useEffect(() => {
    const answered = answers.filter((a) => a !== null).length;
    updateProgress(SECTION_ID, answered, data.questions.length);
  }, [answers, data.questions.length, updateProgress]);

  const handleAnswer = (index: number, value: Answer) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(SECTION_ID, newAnswers);
  };

  const handleSubmit = () => setSubmitted(SECTION_ID, true);
  const handleReset = () => {
    setAnswers(SECTION_ID, Array(data.questions.length).fill(null));
    setSubmitted(SECTION_ID, false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.questions[i].correct).length
    : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <p className="text-gray-700 mb-4">{data.instruction}</p>
      <p className="text-gray-600 italic mb-6">{data.context}</p>

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
          <span key={s.key} className="text-xs font-bold text-center w-20">
            {s.label}
          </span>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-2">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correct;

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
                  onClick={() => handleAnswer(index, s.key as Answer)}
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
                  ✗ Richtig: {data.speakers.find((s) => s.key === q.correct)?.label}
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
