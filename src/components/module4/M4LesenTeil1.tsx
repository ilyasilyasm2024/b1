import { useEffect } from "react";
import { module4LesenTeil1 } from "../../data/module4/lesenTeil1";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "richtig" | "falsch" | null;
const SECTION_ID = "m4-lesen-teil1";

export default function M4LesenTeil1() {
  const data = module4LesenTeil1;
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

  const score = submitted ? answers.filter((a, i) => a === data.questions[i].correct).length : null;

  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">Arbeitszeit: {data.time}</p>
      <p className="text-sm text-gray-800 mb-4">{data.instruction}</p>
      <div className="border border-gray-400 p-5 mb-6 bg-white shadow-sm">
        <h2 className="text-xl font-black italic mb-3">{data.title}</h2>
        <p className="text-[11px] text-gray-900 leading-[1.7] text-justify hyphens-auto whitespace-pre-line">{data.text}</p>
      </div>
      <div className="mb-5">
        <p className="text-xs font-bold text-gray-600 mb-2">Beispiel</p>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <p className="text-sm text-gray-800">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-xs rounded-sm mr-2 font-bold">0</span>
            {data.example.statement}
          </p>
          <div className="flex gap-1 shrink-0">
            <span className="border-2 border-black px-3 py-0.5 text-xs rounded-sm font-bold bg-gray-100">Richtig</span>
            <span className="border border-gray-400 px-3 py-0.5 text-xs rounded-sm text-gray-500">Falsch</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {data.questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = submitted && userAnswer === q.correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== q.correct;
          return (
            <div key={q.id} className={`flex items-center justify-between py-2 border-b border-gray-200 ${submitted ? (isCorrect ? "bg-green-50" : isWrong ? "bg-red-50" : "bg-yellow-50") : ""}`}>
              <p className="text-sm text-gray-800 flex-1 pr-4">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-xs rounded-sm mr-2 font-bold">{q.id}</span>
                {q.statement}
              </p>
              <div className="flex gap-1 shrink-0">
                <button onClick={() => handleAnswer(index, "richtig")} disabled={submitted} className={`border px-3 py-0.5 text-xs rounded-sm cursor-pointer transition-colors ${userAnswer === "richtig" ? "border-2 border-black bg-gray-100 font-bold" : "border-gray-400 text-gray-600 hover:border-gray-600"}`}>Richtig</button>
                <button onClick={() => handleAnswer(index, "falsch")} disabled={submitted} className={`border px-3 py-0.5 text-xs rounded-sm cursor-pointer transition-colors ${userAnswer === "falsch" ? "border-2 border-black bg-gray-100 font-bold" : "border-gray-400 text-gray-600 hover:border-gray-600"}`}>Falsch</button>
              </div>
              {submitted && isCorrect && <span className="text-green-600 text-xs ml-2">&#10003;</span>}
              {submitted && isWrong && <span className="text-red-600 text-xs ml-2">&#10007; {q.correct}</span>}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center gap-4">
        {!submitted ? (
          <button onClick={handleSubmit} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">Auswerten</button>
        ) : (
          <>
            <div className="border-2 border-black px-4 py-2 text-sm font-bold">Ergebnis: {score} / {data.questions.length}</div>
            <button onClick={handleReset} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">Nochmal versuchen</button>
          </>
        )}
      </div>
    </div>
  );
}
