import { useEffect } from "react";
import { module14LesenTeil3 } from "../../data/module14/lesenTeil3";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

const SECTION_ID = "m14-lesen-teil3";

export default function M14LesenTeil3() {
  const data = module14LesenTeil3;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const answers: (string | null)[] = (getAnswers<string | null>(SECTION_ID) ?? Array(data.situations.length).fill(null)) as (string | null)[];
  const submitted = isSubmitted(SECTION_ID);

  useEffect(() => {
    const answered = answers.filter((a) => a !== null && a.trim() !== "").length;
    updateProgress(SECTION_ID, answered, data.situations.length);
  }, [answers, data.situations.length, updateProgress]);

  const handleAnswer = (index: number, value: string) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value.toLowerCase().trim();
    setAnswers(SECTION_ID, newAnswers);
  };

  const handleSubmit = () => setSubmitted(SECTION_ID, true);
  const handleReset = () => {
    setAnswers(SECTION_ID, Array(data.situations.length).fill(null));
    setSubmitted(SECTION_ID, false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.situations[i].correctAd).length
    : null;

  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">Arbeitszeit: {data.time}</p>
      <p className="text-sm text-gray-800 mb-4">{data.instruction}</p>

      <p className="text-sm text-gray-700 mb-6">{data.context}</p>

      <div className="flex justify-end mb-2">
        <span className="text-xs font-bold text-gray-600">Anzeige</span>
      </div>

      <div className="flex items-start gap-3 py-3 border-b border-gray-300 mb-1">
        <p className="text-[10px] font-bold text-gray-500 shrink-0 mt-0.5">Beispiel</p>
        <div className="flex items-start gap-3 flex-1">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold shrink-0 mt-0.5">0</span>
          <p className="text-xs text-gray-800 flex-1">{data.example.description}</p>
          <span className="border-2 border-black w-7 h-7 flex items-center justify-center text-xs font-bold shrink-0">{data.example.correctAd}</span>
        </div>
      </div>

      <div className="space-y-0">
        {data.situations.map((sit, index) => {
          const userAnswer = answers[index] || "";
          const isCorrect = submitted && userAnswer === sit.correctAd;
          const isWrong = submitted && userAnswer !== "" && userAnswer !== sit.correctAd;

          return (
            <div
              key={sit.id}
              className={`flex items-start gap-3 py-3 border-b border-gray-200 ${
                submitted ? (isCorrect ? "bg-green-50" : isWrong ? "bg-red-50" : userAnswer === "" ? "bg-yellow-50" : "") : ""
              }`}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold shrink-0 mt-0.5">{sit.id}</span>
              <p className="text-xs text-gray-800 flex-1">{sit.description}</p>
              <div className="flex items-center gap-1 shrink-0">
                <input
                  type="text"
                  maxLength={1}
                  value={userAnswer}
                  onChange={(e) => handleAnswer(index, e.target.value)}
                  disabled={submitted}
                  className={`w-7 h-7 border-2 text-center text-xs font-bold uppercase focus:outline-none focus:ring-1 focus:ring-black ${
                    submitted
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : isWrong
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                      : "border-gray-400"
                  }`}
                />
                {submitted && isWrong && (
                  <span className="text-red-600 text-[10px] font-bold">{sit.correctAd}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {data.ads.map((ad) => (
          <div key={ad.letter} className="border border-gray-400 p-3">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-full font-bold mb-2">{ad.letter}</span>
            <p className="text-[10px] text-gray-800 leading-tight font-medium">{ad.title}</p>
            <p className="text-[9px] text-gray-600 mt-1 leading-tight">{ad.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        {!submitted ? (
          <button onClick={handleSubmit} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">
            Auswerten
          </button>
        ) : (
          <>
            <div className="border-2 border-black px-4 py-2 text-sm font-bold">Ergebnis: {score} / {data.situations.length}</div>
            <button onClick={handleReset} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">
              Nochmal
            </button>
          </>
        )}
      </div>
    </div>
  );
}
