export interface HoerenTeil2Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface HoerenTeil2Data {
  module: number;
  part: string;
  instruction: string;
  context: string;
  questions: HoerenTeil2Question[];
}

export const module2HoerenTeil2: HoerenTeil2Data = {
  module: 2,
  part: "Hören Teil 2",
  instruction:
    "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie nehmen an einer Stadtrundfahrt in Potsdam teil.",
  questions: [
    {
      id: 11,
      statement: "In Sanssouci wohnte der König ...",
      options: { a: "im Sommer.", b: "nur im April und Oktober.", c: "im Winter." },
      correct: "a",
    },
    {
      id: 12,
      statement: "Friedrich der Große interessierte sich für ...",
      options: { a: "Kriege.", b: "Frankreich.", c: "Musik." },
      correct: "c",
    },
    {
      id: 13,
      statement: "Wie viele Räume bewohnte der König im Schloss?",
      options: { a: "Sieben.", b: "Fünf.", c: "Zwölf." },
      correct: "b",
    },
    {
      id: 14,
      statement: "Wann begann man mit dem Bau des Schlosses?",
      options: { a: "1744.", b: "1747.", c: "1745." },
      correct: "a",
    },
    {
      id: 15,
      statement: "Seit 1927 ...",
      options: {
        a: "können Besucher das Schloss besichtigen.",
        b: "gibt es Veranstaltungen im Schloss.",
        c: "kann man im Schloss Bücher lesen.",
      },
      correct: "a",
    },
  ],
};
