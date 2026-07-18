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

export const module8HoerenTeil2: HoerenTeil2Data = {
  module: 8,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie nehmen an einer Rundfahrt auf dem Vierwaldst\u00e4ttersee teil.",
  questions: [
    {
      id: 11,
      statement: "Wie viele Schiffe geh\u00f6ren der Schifffahrtsgesellschaft?",
      options: {
        a: "F\u00fcnfzehn.",
        b: "Einundzwanzig.",
        c: "F\u00fcnf.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Wie schnell kann die Jacht fahren?",
      options: {
        a: "H\u00f6chstens 28 Kilometer pro Stunde.",
        b: "Ungef\u00e4hr 49 Kilometer pro Stunde.",
        c: "Fast 300 Kilometer pro Stunde.",
      },
      correct: "a",
    },
    {
      id: 13,
      statement: "Der Vierwaldst\u00e4ttersee liegt ...",
      options: {
        a: "im Kanton Uri.",
        b: "bei Bonn.",
        c: "mitten in der Schweiz.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Um den See gibt es ...",
      options: {
        a: "mehrere Berge.",
        b: "drei W\u00e4lder.",
        c: "eine Handelsstra\u00dfe.",
      },
      correct: "a",
    },
    {
      id: 15,
      statement: "Im Jahr 1871 ...",
      options: {
        a: "konnte man zum ersten Mal auf die Berge fahren.",
        b: "entdeckten die Engl\u00e4nder die Berge in der Schweiz.",
        c: "schrieb Mark Twain einen Artikel.",
      },
      correct: "a",
    },
  ],
};
