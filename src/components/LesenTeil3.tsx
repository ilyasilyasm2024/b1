import { useState } from "react";
import { module1LesenTeil3 } from "../data/module1/lesenTeil3";

export default function LesenTeil3() {
  const data = module1LesenTeil3;
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(data.situations.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: string) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setAnswers(Array(data.situations.length).fill(null));
    setSubmitted(false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.situations[i].correctAd).length
    : null;

  const adOptions = [...data.ads.map((ad) => ad.letter), "0"];

  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">
        Arbeitszeit: {data.time}
      </p>

      <p className="text-[11px] text-gray-800 mb-4 leading-relaxed">{data.instruction}</p>
      <p className="text-[11px] text-gray-700 mb-5">
        Einige Ihrer Bekannten sind Tierliebhaber. Sie haben bestimmte Wünsche und suchen nach passenden Anzeigen.
      </p>

      {/* Situations list with answer column - like left page of book */}
      <div className="mb-8">
        {/* Column header */}
        <div className="flex justify-end mb-1 pr-1">
          <span className="text-[10px] font-bold text-gray-600">Anzeige</span>
        </div>

        {/* Beispiel */}
        <div className="flex items-start gap-2 pb-3 border-b border-gray-300 mb-2 bg-gray-50 p-2 rounded">
          <div className="flex-1">
            <p className="text-[10px] font-bold text-gray-500 mb-1">Beispiel</p>
            <p className="text-[11px] text-gray-800 leading-snug">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[9px] rounded-sm font-bold mr-1.5 align-middle">
                0
              </span>
              {data.example.description}
            </p>
          </div>
          <div className="shrink-0 flex items-center mt-4">
            <span className="w-7 h-6 border-2 border-black flex items-center justify-center text-[10px] font-bold bg-gray-100">
              {data.example.correctAd}
            </span>
          </div>
        </div>

        {/* Situations */}
        <div className="space-y-2">
          {data.situations.map((sit, index) => {
            const userAnswer = answers[index];
            const isCorrect = submitted && userAnswer === sit.correctAd;
            const isWrong =
              submitted && userAnswer !== null && userAnswer !== sit.correctAd;

            return (
              <div
                key={sit.id}
                className={`flex items-start gap-2 pb-2 border-b border-gray-200 ${
                  submitted
                    ? isCorrect
                      ? "bg-green-50 rounded"
                      : isWrong
                      ? "bg-red-50 rounded"
                      : "bg-yellow-50 rounded"
                    : ""
                }`}
              >
                <div className="flex-1">
                  <p className="text-[11px] text-gray-800 leading-snug">
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[9px] rounded-sm font-bold mr-1.5 align-middle">
                      {sit.id}
                    </span>
                    {sit.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1">
                  <select
                    value={userAnswer || ""}
                    onChange={(e) => handleAnswer(index, e.target.value)}
                    disabled={submitted}
                    className="w-7 h-6 border border-gray-700 text-center text-[10px] font-bold appearance-none bg-white cursor-pointer"
                  >
                    <option value=""></option>
                    {adOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {submitted && isCorrect && (
                    <span className="text-green-600 text-[10px]">✓</span>
                  )}
                  {submitted && isWrong && (
                    <span className="text-red-600 text-[10px]">✗{sit.correctAd}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ads - styled as classified newspaper ads like in the book */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {data.ads.map((ad) => {
          // Different styling for different ads to look like real classifieds
          const isLargeAd = ad.letter === "g" || ad.letter === "j";
          return (
            <div
              key={ad.letter}
              className={`border-2 border-gray-800 bg-white relative p-3 ${
                isLargeAd ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Letter badge */}
              <span className="absolute -top-2 -left-2 inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[9px] rounded-full font-bold z-10">
                {ad.letter}
              </span>
              <div className="mt-1">
                <p className="text-[11px] font-black leading-tight text-center mb-1">
                  {ad.title}
                </p>
                <p className="text-[9px] text-gray-800 leading-snug text-center">
                  {ad.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-4">
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
              Ergebnis: {score} / {data.situations.length}
            </div>
            <button
              onClick={handleReset}
              className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer"
            >
              Nochmal versuchen
            </button>
          </>
        )}
      </div>
    </div>
  );
}
