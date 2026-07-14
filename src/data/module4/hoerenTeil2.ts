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

export const module4HoerenTeil2: HoerenTeil2Data = {
  module: 4,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie nehmen an einer F\u00fchrung in Swarovski Kristallwelten teil.",
  questions: [
    {
      id: 11,
      statement: "Swarovskis Kristallwelten liegen in ...",
      options: {
        a: "Innsbruck.",
        b: "Wattens.",
        c: "Wattenbach.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Wie viele Mitarbeiter hat Swarovski?",
      options: {
        a: "5000.",
        b: "2000.",
        c: "25000.",
      },
      correct: "c",
    },
    {
      id: 13,
      statement: "Von wem wurden die R\u00e4ume in Swarovski Kristallwelten geplant?",
      options: {
        a: "Von Daniel Swarovski.",
        b: "Von Kindern und Enkeln der Familie Swarovski.",
        c: "Von einem \u00f6sterreichischen K\u00fcnstler.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Wer im Einkaufszentrum Produkte kauft, ...",
      options: {
        a: "kann sich seine Eink\u00e4ufe per Post schicken lassen.",
        b: "muss in Euro bezahlen.",
        c: "muss mit dem Personal sprechen.",
      },
      correct: "a",
    },
    {
      id: 15,
      statement: "Wer einen Hund hat, ...",
      options: {
        a: "kann mit ihm im Park spazieren gehen.",
        b: "muss sich im Empfangszelt melden.",
        c: "kann ihn kostenlos in die R\u00e4ume mitnehmen.",
      },
      correct: "a",
    },
  ],
};
