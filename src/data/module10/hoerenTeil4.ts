export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "journalistin" | "fink" | "egger";
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

export const module10HoerenTeil4: HoerenTeil4Data = {
  module: 10,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Eine Journalistin diskutiert mit der Volksschullehrerin Eva Fink und mit Paul Egger vom Verein \u201eKindernothilfe\u201c \u00fcber das Thema \u201eKinderarbeit\u201c.",
  speakers: [
    { key: "journalistin", label: "Journalistin" },
    { key: "fink", label: "E. Fink" },
    { key: "egger", label: "P. Egger" },
  ],
  example: {
    id: 0,
    statement: "In der Sendung geht es um ein trauriges Thema.",
    correct: "journalistin",
  },
  questions: [
    {
      id: 23,
      statement: "Die \u201eKindernothilfe\u201c hilft Kindern auf der ganzen Welt.",
      correct: "egger",
    },
    {
      id: 24,
      statement: "Millionen Kinder sind gezwungen zu arbeiten.",
      correct: "journalistin",
    },
    {
      id: 25,
      statement: "In Indien werden B\u00e4lle produziert.",
      correct: "fink",
    },
    {
      id: 26,
      statement: "In der Klasse sollten die Kinder einen Ball n\u00e4hen.",
      correct: "fink",
    },
    {
      id: 27,
      statement: "An einem Tag m\u00fcssen zwei B\u00e4lle fertig werden.",
      correct: "fink",
    },
    {
      id: 28,
      statement: "Der Basar war ein voller Erfolg.",
      correct: "egger",
    },
    {
      id: 29,
      statement:
        "Wer etwas gegen Kinderarbeit tun will, sollte Produkte mit dem Zeichen \u201eFairtrade\u201c kaufen.",
      correct: "egger",
    },
    {
      id: 30,
      statement: "Manche Kinder k\u00f6nnen trotz Arbeit eine Schule besuchen.",
      correct: "egger",
    },
  ],
};
