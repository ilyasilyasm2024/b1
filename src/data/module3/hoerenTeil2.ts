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

export const module3HoerenTeil2: HoerenTeil2Data = {
  module: 3,
  part: "Hören Teil 2",
  instruction:
    "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie nehmen an einer Besichtigung des Stadions Bergisel teil.",
  questions: [
    {
      id: 11,
      statement: "Das Stadion liegt ...",
      options: {
        a: "auf einem Hügel.",
        b: "in der Innenstadt.",
        c: "am Fluss.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Im Stadion Bergisel finden ... statt.",
      options: {
        a: "Tennisturniere.",
        b: "Skisprungwettbewerbe.",
        c: "Fußballspiele.",
      },
      correct: "c",
    },
    {
      id: 13,
      statement: "Wie viele Sportler nahmen an der Jugendolympiade teil?",
      options: {
        a: "Über 2000.",
        b: "Über 1000.",
        c: "Über 500.",
      },
      correct: "a",
    },
    {
      id: 14,
      statement: "Die Fahrt hoch auf den Turm dauert ...",
      options: {
        a: "zwei Minuten.",
        b: "zwölf Minuten.",
        c: "zweiunddreißig Minuten.",
      },
      correct: "a",
    },
    {
      id: 15,
      statement: "Wo befindet sich das Café?",
      options: {
        a: "Im Erdgeschoss.",
        b: "Auf Ebene eins.",
        c: "Auf Ebene zwei.",
      },
      correct: "c",
    },
  ],
};
