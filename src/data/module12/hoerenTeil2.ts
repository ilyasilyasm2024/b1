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

export const module12HoerenTeil2: HoerenTeil2Data = {
  module: 12,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie h\u00f6ren Informationen zu Beginn Ihres Besuches im Freizeitpark Heide-Park.",
  questions: [
    {
      id: 11,
      statement: "Der Freizeitpark liegt in ...",
      options: {
        a: "Heidelberg.",
        b: "L\u00fcneburg.",
        c: "Norddeutschland.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "F\u00fcr wie viele Attraktionen kann man die Jahreskarte benutzen?",
      options: {
        a: "F\u00fcr zehn.",
        b: "F\u00fcr zw\u00f6lf.",
        c: "F\u00fcr f\u00fcnfzehn.",
      },
      correct: "c",
    },
    {
      id: 13,
      statement:
        "Wie alt m\u00fcssen Kinder mindestens sein, wenn sie in den kleinen Schiffen mitfahren wollen?",
      options: {
        a: "Eineinhalb Jahre.",
        b: "Vier Jahre.",
        c: "Acht Jahre.",
      },
      correct: "b",
    },
    {
      id: 14,
      statement: "Hunde ...",
      options: {
        a: "sind in den Fahrkabinen nicht erlaubt.",
        b: "bekommen einen speziellen F\u00fchrer.",
        c: "m\u00fcssen in speziellen Shops warten.",
      },
      correct: "b",
    },
    {
      id: 15,
      statement: "Wie schnell f\u00e4hrt die Bobbahn?",
      options: {
        a: "20 Stundenkilometer.",
        b: "40 Stundenkilometer.",
        c: "50 Stundenkilometer.",
      },
      correct: "c",
    },
  ],
};
