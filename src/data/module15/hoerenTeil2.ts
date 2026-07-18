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

export const module15HoerenTeil2: HoerenTeil2Data = {
  module: 15,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie nehmen an einer Dampferschifffahrt auf dem Rhein teil.",
  questions: [
    {
      id: 11,
      statement: "Wann wurde das Schiff gebaut?",
      options: {
        a: "Vor 2010.",
        b: "Nach 2010.",
        c: "Vor 100 Jahren.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Was kann man auf der Burg Maus sehen?",
      options: {
        a: "Katzen.",
        b: "M\u00e4use.",
        c: "V\u00f6gel.",
      },
      correct: "c",
    },
    {
      id: 13,
      statement: "Wo gehen die Passagiere an Land?",
      options: {
        a: "In Bacharach.",
        b: "In R\u00fcdesheim.",
        c: "In Sankt Goarshausen.",
      },
      correct: "b",
    },
    {
      id: 14,
      statement: "An der Bar ...",
      options: {
        a: "gibt es nur Wein vom Rhein.",
        b: "gibt es verschiedene Getr\u00e4nke.",
        c: "gibt es warme Mahlzeiten.",
      },
      correct: "b",
    },
    {
      id: 15,
      statement: "Rauchen darf man ...",
      options: {
        a: "im Freien auf dem Schiff.",
        b: "in den inneren R\u00e4umen.",
        c: "in einer Kabine.",
      },
      correct: "c",
    },
  ],
};
