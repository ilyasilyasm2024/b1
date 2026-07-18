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

export const module7HoerenTeil2: HoerenTeil2Data = {
  module: 7,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie sind zu Besuch im Tierpark Haag.",
  questions: [
    {
      id: 11,
      statement: "Den Tierpark gibt es seit ...",
      options: {
        a: "1900.",
        b: "1970.",
        c: "1973.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Welche Tiere sehen Kinder am liebsten im Tierpark?",
      options: {
        a: "Tiger.",
        b: "Affen.",
        c: "V\u00f6gel.",
      },
      correct: "b",
    },
    {
      id: 13,
      statement: "Der Sprecher verteilt ...",
      options: {
        a: "Zeichenbl\u00f6cke.",
        b: "Malstifte.",
        c: "Arbeitsbl\u00e4tter.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Etwas bezahlen muss man f\u00fcr ...",
      options: {
        a: "das Klettern.",
        b: "den Kinderspielplatz.",
        c: "das Reiten.",
      },
      correct: "c",
    },
    {
      id: 15,
      statement: "Was sollte man im Tierpark nicht machen?",
      options: {
        a: "Musik spielen.",
        b: "Die Tiere f\u00fcttern.",
        c: "Skateboard fahren.",
      },
      correct: "b",
    },
  ],
};
