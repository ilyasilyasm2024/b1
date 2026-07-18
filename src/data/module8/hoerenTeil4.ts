export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderatorin" | "lena" | "simon";
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

export const module8HoerenTeil4: HoerenTeil4Data = {
  module: 8,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Die Moderatorin der Radiosendung \u201eheute\u00d6\u201c diskutiert mit Lena und Simon \u00fcber das Thema \u201eUmzug\u201c.",
  speakers: [
    { key: "moderatorin", label: "Moderatorin" },
    { key: "lena", label: "Lena" },
    { key: "simon", label: "Simon" },
  ],
  example: {
    id: 0,
    statement: "Es wird R\u00fccksicht auf die Interessen der Zuh\u00f6rer genommen.",
    correct: "moderatorin",
  },
  questions: [
    {
      id: 23,
      statement:
        "Die Entfernung zwischen den Wohnorten spielt am Anfang eine Rolle.",
      correct: "lena",
    },
    {
      id: 24,
      statement: "Der Umzug findet aus beruflichen Gr\u00fcnden statt.",
      correct: "simon",
    },
    {
      id: 25,
      statement: "Einen neuen Liebespartner findet man nicht so schnell.",
      correct: "lena",
    },
    {
      id: 26,
      statement:
        "Kommunikationstechnologie bietet keine wahre Chance, eine Beziehung fortzusetzen.",
      correct: "simon",
    },
    {
      id: 27,
      statement:
        "Bei Problemen sollte man sich nicht nur auf die Nachteile einer Situation konzentrieren.",
      correct: "moderatorin",
    },
    {
      id: 28,
      statement:
        "Auf dem Land gibt es nicht viele Unterhaltungsm\u00f6glichkeiten.",
      correct: "lena",
    },
    {
      id: 29,
      statement: "Im Dorf bleibt nichts geheim.",
      correct: "moderatorin",
    },
    {
      id: 30,
      statement: "Man sollte optimistisch in die Zukunft schauen.",
      correct: "moderatorin",
    },
  ],
};
