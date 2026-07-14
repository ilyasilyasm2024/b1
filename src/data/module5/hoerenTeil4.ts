export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderatorin" | "karla" | "walter";
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

export const module5HoerenTeil4: HoerenTeil4Data = {
  module: 5,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Die Moderatorin der Radiosendung \u201eEltern-Magazin\u201c diskutiert mit den Eltern Karla und Walter zum Thema \u201eStudieren mit Kind?\u201c.",
  speakers: [
    { key: "moderatorin", label: "Moderatorin" },
    { key: "karla", label: "Karla" },
    { key: "walter", label: "Walter" },
  ],
  example: {
    id: 0,
    statement:
      "F\u00fcnf Prozent der Studierenden in Deutschland haben mindestens ein Kind.",
    correct: "moderatorin",
  },
  questions: [
    {
      id: 23,
      statement:
        "Nur sehr wenige Studierende wollen ein Kind bekommen, solange sie studieren.",
      correct: "karla",
    },
    {
      id: 24,
      statement:
        "Je nach Studienrichtung ist es einfacher oder schwerer, ein Kind zu haben.",
      correct: "walter",
    },
    {
      id: 25,
      statement:
        "Die Unterst\u00fctzung studierender Eltern durch den Staat reicht nicht aus.",
      correct: "walter",
    },
    {
      id: 26,
      statement: "Gew\u00f6hnliche Kitas helfen studierenden Eltern oft nicht.",
      correct: "karla",
    },
    {
      id: 27,
      statement: "Die Kitas der Universit\u00e4ten haben zu wenig Pl\u00e4tze.",
      correct: "moderatorin",
    },
    {
      id: 28,
      statement:
        "Es gibt europ\u00e4ische L\u00e4nder, in denen es einfacher ist, als Student ein Kind zu haben.",
      correct: "moderatorin",
    },
    {
      id: 29,
      statement: "Karla ber\u00e4t andere studierende Eltern.",
      correct: "walter",
    },
    {
      id: 30,
      statement:
        "W\u00e4hrend des Studiums Kinder zu bekommen, kann f\u00fcr die sp\u00e4tere Karriere gut sein.",
      correct: "karla",
    },
  ],
};
