import { useEffect } from "react";
import { module6LesenTeil5 } from "../../data/module6/lesenTeil5";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "a" | "b" | "c" | null;
const SECTION_ID = "m6-lesen-teil5";

export default function M6LesenTeil5() {
  const data = module6LesenTeil5;
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
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">Arbeitszeit: {data.time}</p>
      <p className="text-sm text-gray-800 mb-2">{data.instruction}</p>
      <p className="text-sm text-gray-700 mb-6 italic">
        Sie informieren sich dar&uuml;ber, wie man sich bei einem Restaurantbesuch richtig verh&auml;lt, denn Sie sind zu einem wichtigen Arbeitsessen eingeladen.
      </p>

      {/* Questions */}
      <div className="space-y-0 mb-8">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correct;

          return (
            <div
              key={q.id}
              className={`grid grid-cols-[1fr_1fr] gap-6 py-4 border-b border-gray-200 ${
                submitted ? (isCorrect ? "bg-green-50" : isWrong ? "bg-red-50" : "bg-yellow-50") : ""
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-black text-white text-[10px] rounded-full font-bold shrink-0 mt-0.5">
                  {q.id}
                </span>
                <span className="text-sm font-bold text-gray-800">{q.statement}</span>
              </div>
              <div className="space-y-1.5">
                {(["a", "b", "c"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name={`q-lt5-m6-${q.id}`}
                      checked={userAnswer === opt}
                      onChange={() => handleAnswer(index, opt)}
                      disabled={submitted}
                      className="accent-black w-3 h-3"
                    />
                    <span className={userAnswer === opt ? "font-bold" : "text-gray-700"}>
                      {opt}) {q.options[opt]}
                    </span>
                    {submitted && opt === q.correct && <span className="text-green-600 font-bold ml-1">&#10003;</span>}
                  </label>
                ))}
              </div>
              {submitted && isWrong && (
                <span className="text-red-600 text-[10px] col-span-2">&#10007; Richtige Antwort: {q.correct})</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Text */}
      <div className="border border-gray-400 p-6 bg-white shadow-sm">
        <h2 className="text-xl font-black mb-4">{data.title}</h2>
        <div className="columns-1 md:columns-2 gap-6 text-[11px] text-gray-900 leading-[1.7] text-justify hyphens-auto whitespace-pre-line">
          {data.text}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-4">
        {!submitted ? (
          <button onClick={handleSubmit} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">
            Auswerten
          </button>
        ) : (
          <>
            <div className="border-2 border-black px-4 py-2 text-sm font-bold">Ergebnis: {score} / {data.questions.length}</div>
            <button onClick={handleReset} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">
              Nochmal
            </button>
          </>
        )}
      </div>
    </div>
  );
}
