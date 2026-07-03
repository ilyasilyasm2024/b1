import { useState } from "react";
import { module1LesenTeil5 } from "../data/module1/lesenTeil5";

type Answer = "a" | "b" | "c" | null;

export default function LesenTeil5() {
  const data = module1LesenTeil5;
  const [answers, setAnswers] = useState<Answer[]>(
    Array(data.questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: "a" | "b" | "c") => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setAnswers(Array(data.questions.length).fill(null));
    setSubmitted(false);
  };

  const score = submitted
    ? answers.filter((a, i) => a === data.questions[i].correct).length
    : null;

  return (
    <div className="p-6">
      <p className="text-xs text-right text-gray-500 mb-4 italic">
        Arbeitszeit: {data.time}
      </p>

      <p className="text-sm text-gray-800 mb-1">{data.instruction}</p>
      <p className="text-sm text-gray-600 italic mb-6">
        Sie informieren sich über das Deutsche Museum, weil sie es besuchen wollen.
      </p>

      {/* Questions - statement left, options right on same line */}
      <div className="space-y-4 mb-8">
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
              {/* Left: number + statement */}
              <div className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] rounded-sm font-bold shrink-0 mt-0.5">
                  {q.id}
                </span>
                <span className="text-xs font-bold">{q.statement}</span>
              </div>

              {/* Right: options */}
              <div className="space-y-1">
                {(["a", "b", "c"] as const).map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-1.5 text-xs cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`q5-${q.id}`}
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

      {/* Deutsches Museum info text - two columns like the book */}
      <div className="border-2 border-gray-800 p-5 bg-white">
        <h3 className="text-2xl font-black mb-4">Deutsches Museum</h3>
        <div className="columns-2 gap-6 text-[10px] text-gray-900 leading-[1.6]">
          {/* Left column content */}
          <div className="break-inside-avoid mb-3">
            <p className="font-bold italic mb-0.5">Öffnungszeiten</p>
            <p>Geöffnet täglich 9:00 bis 17:00 Uhr.</p>
            <p>Einlass bis 16:00 Uhr.</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold italic mb-0.5">Eintrittspreise</p>
            <p>Erwachsene ............................ 6,50 €</p>
            <p>Ermäßigt ............................... 2,50 €</p>
            <p>Schüler und Studenten ............. 1,50 €</p>
            <p>Übersichtsführung ................... 1,00 €</p>
            <p>Planetarium zusätzlich .............. 2,00 €</p>
            <p>Eintritt für Mitglieder und Kinder unter 6 Jahren frei.</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold italic mb-0.5">Werden Sie Mitglied!</p>
            <p>Mit einem Jahresbeitrag von 52,- € können Sie mit einer Begleitperson und zwei Kindern (oder allen eigenen Kindern) unter 16 Jahren jederzeit das Deutsche Museum besuchen. Jahresbeitrag für Schüler/-innen und Studierende (bis 30 Jahre, ohne Begleitung): 32,- €.</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold italic mb-0.5">Öffentliche Verkehrsmittel</p>
            <p>Alle S-Bahnen (Isartor),</p>
            <p>U-Bahn Linien 1 und 2 (Fraunhoferstraße),</p>
            <p>Straßenbahn Linie 18 (Deutsches Museum),</p>
            <p>Linie 17 (Isartor).</p>
            <p>Parkplätze sind nicht verfügbar.</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold mb-0.5">Führungen</p>
            <p>Schulklassenführungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen. Anmeldung schriftlich bitte sechs Wochen vorher.</p>
            <p className="mt-1">Führungen und Vorführungen für Einzelpersonen und Familien sind kostenlos (außer Planetarium und Übersichtsführung). Fotografieren (auch Blitz und Video, jedoch ohne Stativ) ist für private Zwecke erlaubt; für gewerbliche Zwecke: Tel. 089/21 79 – 252.</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold mb-0.5">Behindertengerechter Zugang</p>
            <p>Rollstuhlfahrer können fast alle Ausstellungen über Rampen und Aufzüge erreichen, das Restaurant über Aufzüge aus dem Imbissraum. Das Personal hilft Ihnen gerne. Die Toiletten befinden sich im Erdgeschoss und im 1. Obergeschoss.</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold mb-0.5">Gastronomie</p>
            <p>Restaurant, 1. Obergeschoss: 9:00 – 17:00 Uhr warme Küche, Mo – Fr 10:30 – 15:00 Uhr, Sa/So 10:30 – 15:30 Uhr</p>
            <p>Cafeteria, Erdgeschoss 9:00 – 15:30 Uhr (Verzehr von Mitgebrachtem möglich)</p>
          </div>

          <div className="break-inside-avoid mb-3">
            <p className="font-bold mb-0.5">Deutsches Museum Shop</p>
            <p>Führer, Kataloge und sonstige Veröffentlichungen des Deutschen Museums, großes Sortiment an technik- und wissenschaftsgeschichtlicher Literatur. Verzeichnis der lieferbaren Publikationen im Museum-Shop erhältlich.</p>
          </div>
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
              Ergebnis: {score} / {data.questions.length}
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
