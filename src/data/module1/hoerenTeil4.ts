export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderatorin" | "berger" | "weser";
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

export const module1HoerenTeil4: HoerenTeil4Data = {
  module: 1,
  part: "Hören Teil 4",
  instruction:
    "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    'Eine Moderatorin diskutiert mit zwei jungen Leuten, Iris Berger und Kai Weser, über „Workcamps".',
  speakers: [
    { key: "moderatorin", label: "Moderatorin" },
    { key: "berger", label: "I. Berger" },
    { key: "weser", label: "K. Weser" },
  ],
  example: {
    id: 0,
    statement: "Workcamps werden immer beliebter.",
    correct: "moderatorin",
  },
  questions: [
    {
      id: 23,
      statement: "Das Angebot an Projekten ist groß.",
      correct: "moderatorin",
    },
    {
      id: 24,
      statement: "In der Freizeit kann man vieles machen.",
      correct: "berger",
    },
    {
      id: 25,
      statement: "Man kann Fortschritte in einer Sprache machen.",
      correct: "weser",
    },
    {
      id: 26,
      statement: "Freiwilligenarbeit ist ein Plus in einer Bewerbung.",
      correct: "moderatorin",
    },
    {
      id: 27,
      statement: "Man versucht, weitere Helfer zu gewinnen.",
      correct: "berger",
    },
    {
      id: 28,
      statement: "Die Einwohner werden über den Umweltschutz informiert.",
      correct: "weser",
    },
    {
      id: 29,
      statement: "Vieles in diesem Land kann Europäer überraschen.",
      correct: "weser",
    },
    {
      id: 30,
      statement: "Man fühlt sich gut, weil man mitgeholfen hat.",
      correct: "berger",
    },
  ],
};
