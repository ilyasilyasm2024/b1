import { useEffect } from "react";
import { module2HoerenTeil3 } from "../../data/module2/hoerenTeil3";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "richtig" | "falsch" | null;
const SECTION_ID = "m2-hoeren-teil3";

export default function M2HoerenTeil3() {
  const data = module2HoerenTeil3;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const answers: Answer[] = (getAnswers<Answer>(SECTION_ID) ?? Array(data.questions.length).fill(null)) as Answer[];
  const submitted = isSubmitted(SECTION_ID);

  useEffect(() => {
    const answered = answers.filter((a) => a !== null).length;
    updateProgress(SECTION_ID, answered, data.questions.length);
  }, [answers, data.questions.length, updateProgress]);

  const handleAnswer = (index: number, value: "richtig" | "falsch") => {
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

      <div className="space-y-3">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correct;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-lg border flex items-center justify-between gap-4 ${
                submitted
                  ? isCorrect
                    ? "border-green-400 bg-green-50"
                    : isWrong
                    ? "border-red-400 bg-red-50"
                    : "border-yellow-400 bg-yellow-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <p className="text-sm flex-1">
                <span className="font-bold mr-2">{q.id}</span>
                {q.statement}
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => handleAnswer(index, "richtig")}
                  className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${
                    userAnswer === "richtig" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  disabled={submitted}
                >
                  Richtig
                </button>
                <button
                  onClick={() => handleAnswer(index, "falsch")}
                  className={`px-3 py-1 rounded text-sm font-medium cursor-pointer ${
                    userAnswer === "falsch" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  disabled={submitted}
                >
                  Falsch
                </button>
              </div>
              {submitted && isWrong && (
                <span className="text-xs text-red-600 shrink-0">✗ ({q.correct})</span>
              )}
              {submitted && isCorrect && (
                <span className="text-xs text-green-600 shrink-0">✓</span>
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
