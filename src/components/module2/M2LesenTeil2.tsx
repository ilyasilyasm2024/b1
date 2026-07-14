import { useEffect } from "react";
import {
  module2LesenTeil2A,
  module2LesenTeil2B,
  type LesenTeil2Data,
} from "../../data/module2/lesenTeil2";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "a" | "b" | "c" | null;

function LesenTeil2Section({ data, sectionId }: { data: LesenTeil2Data; sectionId: string }) {
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const answers: Answer[] = (getAnswers<Answer>(sectionId) ?? Array(data.questions.length).fill(null)) as Answer[];
  const submitted = isSubmitted(sectionId);

  useEffect(() => {
    const answered = answers.filter((a) => a !== null).length;
    updateProgress(sectionId, answered, data.questions.length);
  }, [answers, data.questions.length, sectionId, updateProgress]);

  const handleAnswer = (index: number, value: "a" | "b" | "c") => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(sectionId, newAnswers);
  };

  const handleSubmit = () => setSubmitted(sectionId, true);
  const handleReset = () => {
    setAnswers(sectionId, Array(data.questions.length).fill(null));
    setSubmitted(sectionId, false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.questions[i].correct).length
    : null;

  return (
    <div className="mb-8">
      {/* Newspaper-style text box */}
      <div className="border border-gray-400 bg-white mb-5 shadow-sm">
        <div className="px-5 pt-4 pb-1 border-b border-gray-200">
          <h3 className="text-2xl font-black leading-tight tracking-tight">{data.title}</h3>
        </div>
        <div className="px-5 py-3 columns-2 gap-5 text-[11px] text-gray-900 leading-[1.6] text-justify hyphens-auto">
          {data.text}
        </div>
        <div className="px-5 pb-2 text-right border-t border-gray-100">
          <p className="text-[10px] italic text-gray-500">aus einer deutschen Zeitung</p>
        </div>
      </div>

      {/* Example */}
      <div className="mb-4 pb-3 border-b border-gray-300">
        <p className="text-[10px] font-bold text-gray-500 mb-2">Beispiel</p>
        <div className="grid grid-cols-[1fr_1fr] gap-4">
          <div className="flex items-start gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold shrink-0 mt-0.5">
              {data.example.id}
            </span>
            <span className="text-xs font-bold">{data.example.statement}</span>
          </div>
          <div className="space-y-0.5">
            {(["a", "b", "c"] as const).map((opt) => (
              <p
                key={opt}
                className={`text-xs ${
                  opt === data.example.correct ? "font-bold underline" : "text-gray-600"
                }`}
              >
                {opt}) {data.example.options[opt]}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correct;

          return (
            <div
              key={q.id}
              className={`grid grid-cols-[1fr_1fr] gap-4 py-3 border-b border-gray-200 ${
                submitted
                  ? isCorrect
                    ? "bg-green-50 rounded"
                    : isWrong
                    ? "bg-red-50 rounded"
                    : "bg-yellow-50 rounded"
                  : ""
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold shrink-0 mt-0.5">
                  {q.id}
                </span>
                <span className="text-xs font-bold">{q.statement}</span>
              </div>
              <div className="space-y-1">
                {(["a", "b", "c"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-1.5 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name={`q-${sectionId}-${q.id}`}
                      checked={userAnswer === opt}
                      onChange={() => handleAnswer(index, opt)}
                      disabled={submitted}
                      className="accent-black w-3 h-3"
                    />
                    <span className={userAnswer === opt ? "font-bold" : "text-gray-700"}>
                      {opt}) {q.options[opt]}
                    </span>
                    {submitted && opt === q.correct && (
                      <span className="text-green-600 font-bold ml-1">✓</span>
                    )}
                  </label>
                ))}
              </div>
              {submitted && isWrong && (
                <span className="text-red-600 text-[10px] col-span-2">
                  ✗ Richtige Antwort: {q.correct})
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer"
          >
            Auswerten
          </button>
        ) : (
          <>
            <div className="border-2 border-black px-4 py-2 text-sm font-bold">
              Ergebnis: {score} / {data.questions.length}
            </div>
            <button
              onClick={handleReset}
              className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer"
            >
              Nochmal
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function M2LesenTeil2() {
  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">
        Arbeitszeit: 20 Minuten
      </p>

      <p className="text-sm text-gray-800 mb-5">
        Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu.
        Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.
      </p>

      <LesenTeil2Section data={module2LesenTeil2A} sectionId="m2-lesen-teil2a" />

      <hr className="my-8 border-gray-300" />

      <p className="text-sm text-gray-800 mb-5">
        Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu.
        Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.
      </p>

      <LesenTeil2Section data={module2LesenTeil2B} sectionId="m2-lesen-teil2b" />
    </div>
  );
}
