export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "journalistin" | "klein" | "grewe";
}

export interface HoerenTeil4Data {
  module: number;
  part: string;
  instruction: string;
  context: string;
  speakers: { key: string; label: string }[];
  example: HoerenTeil4Question;
  questions: HoerenTeil4Question[];
}

export const module7HoerenTeil4: HoerenTeil4Data = {
  module: 7,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Eine Journalistin diskutiert mit Alexander Klein, Finanzexperte bei einer Bank, und der 13-j\u00e4hrigen Katja Grewe \u00fcber das Thema \u201eGeld sparen\u201c.",
  speakers: [
    { key: "journalistin", label: "Journalistin" },
    { key: "klein", label: "Al. Klein" },
    { key: "grewe", label: "K. Grewe" },
  ],
  example: {
    id: 0,
    statement: "Den Weltspartag gibt es seit 1925.",
    correct: "journalistin",
  },
  questions: [
    {
      id: 23,
      statement: "Wer am Weltspartag Geld auf die Bank bringt, bekommt ein Geschenk.",
      correct: "klein",
    },
    {
      id: 24,
      statement: "Die erste Erfahrung auf der Sparkasse war nicht angenehm.",
      correct: "grewe",
    },
    {
      id: 25,
      statement: "Kinder haben viele Fragen.",
      correct: "klein",
    },
    {
      id: 26,
      statement: "Das Sparen f\u00e4llt heute vielen Menschen schwer.",
      correct: "klein",
    },
    {
      id: 27,
      statement: "Viele Erwachsene kaufen auf Kredit ein.",
      correct: "journalistin",
    },
    {
      id: 28,
      statement:
        "Man braucht sich keine Sorgen um das Geld auf der Bank zu machen.",
      correct: "klein",
    },
    {
      id: 29,
      statement: "Euskirchen liegt in der N\u00e4he von Bonn.",
      correct: "journalistin",
    },
    {
      id: 30,
      statement: "Man bekommt mehr Geld von der Bank, wenn man viel spart.",
      correct: "klein",
    },
  ],
};
