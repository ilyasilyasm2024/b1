import { useEffect } from "react";
import { module11HoerenTeil2 } from "../../data/module11/hoerenTeil2";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "a" | "b" | "c" | null;
const SECTION_ID = "m11-hoeren-teil2";

export default function M11HoerenTeil2() {
  const data = module11HoerenTeil2;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const answers: Answer[] = (getAnswers<Answer>(SECTION_ID) ?? Array(data.questions.length).fill(null)) as Answer[];
  const submitted = isSubmitted(SECTION_ID);

  useEffect(() => {
    const answered = answers.filter((a) => a !== null).length;
    updateProgress(SECTION_ID, answered, data.questions.length);
  }, [answers, data.questions.length, updateProgress]);

  const handleAnswer = (index: number, value: "a" | "b" | "c") => {
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

      <div className="space-y-4">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correct;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-lg border ${
                submitted
                  ? isCorrect
                    ? "border-green-400 bg-green-50"
                    : isWrong
                    ? "border-red-400 bg-red-50"
                    : "border-yellow-400 bg-yellow-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <p className="font-medium mb-3 text-sm">
                <span className="font-bold mr-2">{q.id}</span>
                {q.statement}
              </p>
              <div className="ml-6 space-y-2">
                {(["a", "b", "c"] as const).map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-2 cursor-pointer text-sm p-2 rounded ${
                      userAnswer === opt ? "bg-blue-100 border border-blue-300" : "hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`m11h2-${q.id}`}
                      checked={userAnswer === opt}
                      onChange={() => handleAnswer(index, opt)}
                      disabled={submitted}
                      className="accent-blue-600"
                    />
                    <span>
                      {opt}) {q.options[opt]}
                    </span>
                    {submitted && opt === q.correct && (
                      <span className="text-green-600 font-bold ml-2">✓</span>
                    )}
                  </label>
                ))}
              </div>
              {submitted && isWrong && (
                <p className="text-sm text-red-600 mt-2 ml-6">
                  ✗ Richtige Antwort: {q.correct})
                </p>
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
