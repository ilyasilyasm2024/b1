import { useEffect } from "react";
import { module5LesenTeil4 } from "../../data/module5/lesenTeil4";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type Answer = "ja" | "nein" | null;
const SECTION_ID = "m5-lesen-teil4";

export default function M5LesenTeil4() {
  const data = module5LesenTeil4;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const answers: Answer[] = (getAnswers<Answer>(SECTION_ID) ?? Array(data.persons.length).fill(null)) as Answer[];
  const submitted = isSubmitted(SECTION_ID);

  useEffect(() => {
    const answered = answers.filter((a) => a !== null).length;
    updateProgress(SECTION_ID, answered, data.persons.length);
  }, [answers, data.persons.length, updateProgress]);

  const handleAnswer = (index: number, value: "ja" | "nein") => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(SECTION_ID, newAnswers);
  };

  const handleSubmit = () => setSubmitted(SECTION_ID, true);
  const handleReset = () => {
    setAnswers(SECTION_ID, Array(data.persons.length).fill(null));
    setSubmitted(SECTION_ID, false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.answers[i]?.answer).length
    : null;

  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">Arbeitszeit: {data.time}</p>
      <p className="text-sm text-gray-800 mb-2">{data.instruction}</p>
      <p className="text-sm text-gray-700 mb-6 italic">{data.topic}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-full font-bold shrink-0">0</span>
          <span className="text-xs font-bold">{data.example.name}</span>
          <span className="border border-gray-400 px-2 py-0.5 text-[10px] rounded-sm text-gray-500">Ja</span>
          <span className="border-2 border-black px-2 py-0.5 text-[10px] rounded-sm font-bold bg-gray-100">Nein</span>
        </div>

        {data.persons.map((person, index) => {
          const userAnswer = answers[index];
          const correct = data.answers[index]?.answer;
          const isCorrect = submitted && userAnswer === correct;
          const isWrong = submitted && userAnswer !== null && userAnswer !== correct;

          return (
            <div
              key={person.name}
              className={`flex items-center gap-2 py-1 px-1 rounded ${
                submitted ? (isCorrect ? "bg-green-50" : isWrong ? "bg-red-50" : "") : ""
              }`}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-full font-bold shrink-0">
                {20 + index}
              </span>
              <span className="text-xs font-bold shrink-0">{person.name}</span>
              <button
                onClick={() => handleAnswer(index, "ja")}
                disabled={submitted}
                className={`border px-2 py-0.5 text-[10px] rounded-sm cursor-pointer transition-colors ${
                  userAnswer === "ja"
                    ? "border-2 border-black bg-gray-100 font-bold"
                    : "border-gray-400 text-gray-600 hover:border-gray-600"
                }`}
              >
                Ja
              </button>
              <button
                onClick={() => handleAnswer(index, "nein")}
                disabled={submitted}
                className={`border px-2 py-0.5 text-[10px] rounded-sm cursor-pointer transition-colors ${
                  userAnswer === "nein"
                    ? "border-2 border-black bg-gray-100 font-bold"
                    : "border-gray-400 text-gray-600 hover:border-gray-600"
                }`}
              >
                Nein
              </button>
              {submitted && isWrong && <span className="text-red-600 text-[9px] font-bold">&#10007;</span>}
              {submitted && isCorrect && <span className="text-green-600 text-[9px] font-bold">&#10003;</span>}
            </div>
          );
        })}
      </div>

      <div className="border border-gray-400 p-5 bg-white">
        <h3 className="text-center font-bold text-base mb-4">Leserbriefe</h3>
        <div className="columns-1 md:columns-2 gap-6 text-[11px] text-gray-900 leading-[1.6] text-justify">
          {data.persons.map((person, index) => (
            <div key={person.name} className="break-inside-avoid mb-4">
              <p>
                <span className="inline-flex items-center justify-center w-4 h-4 bg-black text-white text-[9px] rounded-full font-bold mr-1 align-middle">
                  {20 + index}
                </span>
                {person.comment}
              </p>
              <p className="italic text-gray-500 text-[10px] mt-1">
                {person.name}, {person.age}, {person.city}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        {!submitted ? (
          <button onClick={handleSubmit} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">
            Auswerten
          </button>
        ) : (
          <>
            <div className="border-2 border-black px-4 py-2 text-sm font-bold">Ergebnis: {score} / {data.persons.length}</div>
            <button onClick={handleReset} className="bg-black text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-gray-800 cursor-pointer">
              Nochmal
            </button>
          </>
        )}
      </div>
    </div>
  );
}
