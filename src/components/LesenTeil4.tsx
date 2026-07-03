import { useState } from "react";
import { module1LesenTeil4 } from "../data/module1/lesenTeil4";

type Answer = "ja" | "nein" | null;

export default function LesenTeil4() {
  const data = module1LesenTeil4;
  const [answers, setAnswers] = useState<Answer[]>(
    Array(data.persons.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: "ja" | "nein") => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setAnswers(Array(data.persons.length).fill(null));
    setSubmitted(false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.answers[i].answer).length
    : null;

  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">
        Arbeitszeit: {data.time}
      </p>

      <p className="text-sm text-gray-800 mb-2">{data.instruction}</p>
      <p className="text-sm text-gray-600 italic mb-5">{data.topic}</p>

      {/* Names grid with Ja/Nein buttons - 3 columns like in the book */}
      <div className="mb-6">
        {/* Example + all persons in a 3-column grid */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-2 mb-6">
          {/* Example */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold">
              0
            </span>
            <span className="text-xs font-medium">Henriette</span>
            <span className="border border-gray-500 rounded-sm px-2 py-0.5 text-[10px]">Ja</span>
            <span className="border-2 border-black rounded-sm px-2 py-0.5 text-[10px] font-bold bg-gray-100">Nein</span>
          </div>

          {/* All persons */}
          {data.persons.map((person, index) => {
            const userAnswer = answers[index];
            const correctAnswer = data.answers[index].answer;
            const isCorrect = submitted && userAnswer === correctAnswer;
            const isWrong = submitted && userAnswer !== null && userAnswer !== correctAnswer;

            return (
              <div
                key={person.name}
                className={`flex items-center gap-2 ${
                  submitted
                    ? isCorrect
                      ? "bg-green-50 rounded"
                      : isWrong
                      ? "bg-red-50 rounded"
                      : "bg-yellow-50 rounded"
                    : ""
                }`}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold">
                  {20 + index}
                </span>
                <span className="text-xs font-medium">{person.name}</span>
                <button
                  onClick={() => handleAnswer(index, "ja")}
                  disabled={submitted}
                  className={`border rounded-sm px-2 py-0.5 text-[10px] cursor-pointer transition-colors ${
                    userAnswer === "ja"
                      ? "border-2 border-black font-bold bg-gray-100"
                      : "border-gray-500 hover:border-gray-700"
                  }`}
                >
                  Ja
                </button>
                <button
                  onClick={() => handleAnswer(index, "nein")}
                  disabled={submitted}
                  className={`border rounded-sm px-2 py-0.5 text-[10px] cursor-pointer transition-colors ${
                    userAnswer === "nein"
                      ? "border-2 border-black font-bold bg-gray-100"
                      : "border-gray-500 hover:border-gray-700"
                  }`}
                >
                  Nein
                </button>
                {submitted && isWrong && (
                  <span className="text-red-600 text-[9px]">✗</span>
                )}
                {submitted && isCorrect && (
                  <span className="text-green-600 text-[9px]">✓</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Kommentare box - two columns like in the book */}
      <div className="border-2 border-gray-800 p-5 bg-white">
        <h3 className="text-center font-bold text-base mb-4">Kommentare</h3>
        <div className="columns-2 gap-6">
          {data.persons.map((person, index) => (
            <div key={person.name} className="break-inside-avoid mb-4">
              <p className="text-[11px] text-gray-900 leading-[1.55] text-justify">
                {index === 0 && <span className="font-bold">Beispiel </span>}
                {index > 0 && (
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-black text-white text-[9px] rounded-sm font-bold mr-1 align-middle">
                    {20 + index}
                  </span>
                )}
                {person.comment}
              </p>
              <p className="text-[10px] italic text-gray-600 mt-0.5">
                {person.name}, {person.age}, {person.city}
              </p>
            </div>
          ))}
        </div>
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
              Ergebnis: {score} / {data.persons.length}
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
