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

export const module1HoerenTeil2: HoerenTeil2Data = {
  module: 1,
  part: "Hören Teil 2",
  instruction:
    "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sind auf dem Eltern-Informationsabend für eine Schülerreise in ein Feriencamp.",
  questions: [
    {
      id: 11,
      statement: "Wer fährt mit ins Camp?",
      options: {
        a: "Der Direktor der Schule.",
        b: "Der Techniker der Schule.",
        c: "Lehrer der Schule.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Was ist den Eltern bereits bekannt?",
      options: {
        a: "Wann die Schüler abfliegen und ankommen.",
        b: "Was jeden Tag auf dem Programm steht.",
        c: "Wie das Feriencamp aussieht.",
      },
      correct: "a",
    },
    {
      id: 13,
      statement: "Die Kinder und ihre Begleiter fahren mit dem Bus ...",
      options: {
        a: "nach Brandenburg.",
        b: "nach Papstdorf.",
        c: "nach Dresden.",
      },
      correct: "b",
    },
    {
      id: 14,
      statement: "Wie viele Kinder wohnen in einem Bungalow?",
      options: {
        a: "Acht.",
        b: "Vier.",
        c: "Zwei.",
      },
      correct: "a",
    },
    {
      id: 15,
      statement: "Die Kinder essen ...",
      options: {
        a: "jeden Tag in Gaststätten.",
        b: "dreimal am Tag.",
        c: "an einem Kiosk.",
      },
      correct: "b",
    },
  ],
};
