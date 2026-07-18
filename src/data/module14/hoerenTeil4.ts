export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderatorin" | "lara" | "simon";
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

export const module14HoerenTeil4: HoerenTeil4Data = {
  module: 14,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Die Moderatorin der Radiosendung \u201eSchool for you\u201c diskutiert mit den Sch\u00fclern Lara und Simon zum Thema: \u201eDarf ein Lehrer einen Sch\u00fcler schlagen?\u201c.",
  speakers: [
    { key: "moderatorin", label: "Moderatorin" },
    { key: "lara", label: "Lara" },
    { key: "simon", label: "Simon" },
  ],
  example: {
    id: 0,
    statement:
      "Das Gericht hat gegen die Entlassung des Lehrers X entschieden.",
    correct: "moderatorin",
  },
  questions: [
    {
      id: 23,
      statement: "Fast alle Sch\u00fcler finden Herrn X sympathisch.",
      correct: "lara",
    },
    {
      id: 24,
      statement:
        "Eine Minderheit der Sch\u00fcler ist mit dem Gerichtsurteil nicht einverstanden.",
      correct: "simon",
    },
    {
      id: 25,
      statement:
        "Die verletzte Schulter des Lehrers spielte eine wichtige Rolle f\u00fcr das Gerichtsurteil.",
      correct: "moderatorin",
    },
    {
      id: 26,
      statement:
        "Der Lehrer hatte nicht die Absicht, die Sch\u00fclerin zu schlagen.",
      correct: "moderatorin",
    },
    {
      id: 27,
      statement:
        "Das M\u00e4dchen wollte, dass der Lehrer seine Arbeit verliert.",
      correct: "simon",
    },
    {
      id: 28,
      statement:
        "Das M\u00e4dchen und seine Freunde sind nicht in die Klasse integriert.",
      correct: "simon",
    },
    {
      id: 29,
      statement:
        "Die Klasse macht heute au\u00dferhalb des Unterrichts nichts gemeinsam.",
      correct: "lara",
    },
    {
      id: 30,
      statement:
        "Die ersten Tage der Klassenfahrten waren immer ein bisschen schwierig.",
      correct: "lara",
    },
  ],
};
