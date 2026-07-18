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

export const module11HoerenTeil2: HoerenTeil2Data = {
  module: 11,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie nehmen an einer F\u00fchrung in der Emmentaler K\u00e4serei teil.",
  questions: [
    {
      id: 11,
      statement: "Seit wann gibt es die Emmentaler K\u00e4serei?",
      options: {
        a: "Seit 1978.",
        b: "Seit 1700.",
        c: "Seit 1985.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Wo kann man selbst K\u00e4se machen?",
      options: {
        a: "In der Dorfk\u00e4serei.",
        b: "In der ersten Station.",
        c: "Im zweiten Geb\u00e4ude.",
      },
      correct: "b",
    },
    {
      id: 13,
      statement: "Familienfeste feiert man ...",
      options: {
        a: "im Gasthof.",
        b: "im Restaurant.",
        c: "in der K\u00e4serei.",
      },
      correct: "a",
    },
    {
      id: 14,
      statement: "Was gibt es zurzeit f\u00fcr die Kinder?",
      options: {
        a: "Einen Zoo.",
        b: "Ein spezielles Restaurant.",
        c: "Eine M\u00e4rchentante.",
      },
      correct: "c",
    },
    {
      id: 15,
      statement: "In wie vielen Gesch\u00e4ften kann man einkaufen?",
      options: {
        a: "In zwei Gesch\u00e4ften.",
        b: "In drei Gesch\u00e4ften.",
        c: "In vier Gesch\u00e4ften.",
      },
      correct: "b",
    },
  ],
};
