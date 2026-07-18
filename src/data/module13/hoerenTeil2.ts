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

export const module13HoerenTeil2: HoerenTeil2Data = {
  module: 13,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie nehmen an einer Informationsveranstaltung \u00fcber Ballonfahrten teil.",
  questions: [
    {
      id: 11,
      statement: "Wer besucht die Informationsveranstaltung?",
      options: {
        a: "Wer eine Ballonfahrt gewonnen hat.",
        b: "Wer das Sportmagazin liest.",
        c: "Wer an dem Quiz teilnehmen m\u00f6chte.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Die Piloten der Ballons ...",
      options: {
        a: "kommen aus der Schweiz.",
        b: "holen die G\u00e4ste ab.",
        c: "fliegen seit \u00fcber 20 Jahren.",
      },
      correct: "c",
    },
    {
      id: 13,
      statement: "Wie hoch kann ein Ballon steigen?",
      options: {
        a: "Bis zu 30 Metern.",
        b: "Bis zu 300 Metern.",
        c: "Bis zu 3000 Metern.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Die Fahrg\u00e4ste sollten ...",
      options: {
        a: "keine H\u00f6henangst haben.",
        b: "einen Fotoapparat dabeihaben.",
        c: "vom Ballon nicht hinunterschauen.",
      },
      correct: "b",
    },
    {
      id: 15,
      statement: "In dem ersten Ballon, der in die Luft stieg, ...",
      options: {
        a: "war ein K\u00f6nig.",
        b: "waren Josef und \u00c9tienne Montgolfier.",
        c: "waren Tiere.",
      },
      correct: "c",
    },
  ],
};
