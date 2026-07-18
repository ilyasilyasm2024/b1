import { useEffect } from "react";
import { module15HoerenTeil1 } from "../../data/module15/hoerenTeil1";
import { useProgress } from "../../context/ProgressContext";
import { useAnswers } from "../../context/AnswersContext";

type RFAnswer = "richtig" | "falsch" | null;
type MCAnswer = "a" | "b" | "c" | null;

const RF_SECTION = "m15-hoeren-teil1-rf";
const MC_SECTION = "m15-hoeren-teil1-mc";

export default function M15HoerenTeil1() {
  const data = module15HoerenTeil1;
  const { updateProgress } = useProgress();
  const { getAnswers, setAnswers, isSubmitted, setSubmitted } = useAnswers();

  const rfAnswers: RFAnswer[] = (getAnswers<RFAnswer>(RF_SECTION) ?? Array(data.texts.length).fill(null)) as RFAnswer[];
  const mcAnswers: MCAnswer[] = (getAnswers<MCAnswer>(MC_SECTION) ?? Array(data.texts.length).fill(null)) as MCAnswer[];
  const submitted = isSubmitted("m15-hoeren-teil1");

  useEffect(() => {
    const totalQ = data.texts.length * 2;
    const answered = rfAnswers.filter((a) => a !== null).length + mcAnswers.filter((a) => a !== null).length;
    updateProgress("m15-hoeren-teil1", answered, totalQ);
  }, [rfAnswers, mcAnswers, data.texts.length, updateProgress]);

  const handleRF = (index: number, value: "richtig" | "falsch") => {
    if (submitted) return;
    const newAnswers = [...rfAnswers];
    newAnswers[index] = value;
    setAnswers(RF_SECTION, newAnswers);
  };

  const handleMC = (index: number, value: "a" | "b" | "c") => {
    if (submitted) return;
    const newAnswers = [...mcAnswers];
    newAnswers[index] = value;
    setAnswers(MC_SECTION, newAnswers);
  };

  const handleSubmit = () => setSubmitted("m15-hoeren-teil1", true);
  const handleReset = () => {
    setAnswers(RF_SECTION, Array(data.texts.length).fill(null));
    setAnswers(MC_SECTION, Array(data.texts.length).fill(null));
    setSubmitted("m15-hoeren-teil1", false);
  };

  const score = submitted
    ? data.texts.reduce((acc, text, i) => {
        let s = 0;
        if (rfAnswers[i] === text.richtigFalschQuestion.correct) s++;
        if (mcAnswers[i] === text.multipleChoiceQuestion.correct) s++;
        return acc + s;
      }, 0)
    : null;

  const totalQuestions = data.texts.length * 2;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <p className="text-gray-700 mb-6">{data.instruction}</p>

      {/* Example */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500 font-semibold mb-2">Beispiel</p>
        <p className="text-sm mb-1">
          <span className="font-bold">0a)</span>{" "}
          {data.example.richtigFalsch.statement} →{" "}
          <span className="font-bold text-green-700 capitalize">
            {data.example.richtigFalsch.correct}
          </span>
        </p>
        <p className="text-sm">
          <span className="font-bold">0b)</span>{" "}
          {data.example.multipleChoice.statement} →{" "}
          <span className="font-bold text-green-700">
            {data.example.multipleChoice.correct})
          </span>
        </p>
      </div>

      {/* Texts */}
      <div className="space-y-6">
        {data.texts.map((text, index) => {
          const rfAnswer = rfAnswers[index];
          const mcAnswer = mcAnswers[index];
          const rfCorrect = submitted && rfAnswer === text.richtigFalschQuestion.correct;
          const rfWrong = submitted && rfAnswer !== null && rfAnswer !== text.richtigFalschQuestion.correct;
          const mcCorrect = submitted && mcAnswer === text.multipleChoiceQuestion.correct;
          const mcWrong = submitted && mcAnswer !== null && mcAnswer !== text.multipleChoiceQuestion.correct;

          return (
            <div key={text.id} className="border border-gray-200 rounded-lg p-4 bg-white">
              <h4 className="font-bold text-sm text-gray-500 mb-3">Text {text.id}</h4>

              {/* Richtig/Falsch */}
              <div className={`p-3 rounded mb-3 ${submitted ? (rfCorrect ? "bg-green-50" : rfWrong ? "bg-red-50" : "bg-yellow-50") : ""}`}>
                <p className="text-sm mb-2">
                  <span className="font-bold mr-1">{text.richtigFalschQuestion.id}</span>
                  {text.richtigFalschQuestion.statement}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleRF(index, "richtig")}
                    className={`px-3 py-1 rounded text-xs font-medium cursor-pointer ${
                      rfAnswer === "richtig" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    disabled={submitted}
                  >
                    Richtig
                  </button>
                  <button
                    onClick={() => handleRF(index, "falsch")}
                    className={`px-3 py-1 rounded text-xs font-medium cursor-pointer ${
                      rfAnswer === "falsch" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    disabled={submitted}
                  >
                    Falsch
                  </button>
                  {submitted && rfWrong && (
                    <span className="text-xs text-red-600 ml-2">✗ ({text.richtigFalschQuestion.correct})</span>
                  )}
                  {submitted && rfCorrect && (
                    <span className="text-xs text-green-600 ml-2">✓</span>
                  )}
                </div>
              </div>

              {/* Multiple Choice */}
              <div className={`p-3 rounded ${submitted ? (mcCorrect ? "bg-green-50" : mcWrong ? "bg-red-50" : "bg-yellow-50") : ""}`}>
                <p className="text-sm mb-2">
                  <span className="font-bold mr-1">{text.multipleChoiceQuestion.id}</span>
                  {text.multipleChoiceQuestion.statement}
                </p>
                <div className="ml-4 space-y-1">
                  {(["a", "b", "c"] as const).map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-2 cursor-pointer text-xs p-1 rounded ${
                        mcAnswer === opt ? "bg-blue-100 border border-blue-300" : "hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`mc-m15h1-${text.id}`}
                        checked={mcAnswer === opt}
                        onChange={() => handleMC(index, opt)}
                        disabled={submitted}
                        className="accent-blue-600"
                      />
                      <span>
                        {opt}) {text.multipleChoiceQuestion.options[opt]}
                      </span>
                      {submitted && opt === text.multipleChoiceQuestion.correct && (
                        <span className="text-green-600 font-bold ml-1">✓</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>
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
              Ergebnis: {score} / {totalQuestions}
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
