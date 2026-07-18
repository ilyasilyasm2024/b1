export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderator" | "annette" | "michael";
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

export const module15HoerenTeil4: HoerenTeil4Data = {
  module: 15,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Der Moderator der Radiosendung \u201eTopideen\u201c diskutiert mit Annette Vinke und Michael Sch\u00f6nberg \u00fcber ein einmaliges Projekt, das Spitalradio.",
  speakers: [
    { key: "moderator", label: "Moderator" },
    { key: "annette", label: "Annette Vinke" },
    { key: "michael", label: "Michael Sch\u00f6nberg" },
  ],
  example: {
    id: 0,
    statement:
      "Der Radiosender im Krankenhaus war eine Idee von Annette Vinke.",
    correct: "annette",
  },
  questions: [
    {
      id: 23,
      statement: "Die gute Laune der Moderatoren ist viel wert.",
      correct: "annette",
    },
    {
      id: 24,
      statement: "Ausgeschlossen vom Programm sind traurige Mitteilungen.",
      correct: "annette",
    },
    {
      id: 25,
      statement: "Werbung hat auch f\u00fcr die Zuh\u00f6rer Vorteile.",
      correct: "moderator",
    },
    {
      id: 26,
      statement: "Werbung macht die Finanzierung des Senders m\u00f6glich.",
      correct: "annette",
    },
    {
      id: 27,
      statement: "\u201eSpitalfunk\u201c hat es ohne Werbung geschafft.",
      correct: "michael",
    },
    {
      id: 28,
      statement: "Wer will, kann beim Radio mitmachen.",
      correct: "annette",
    },
    {
      id: 29,
      statement: "\u00dcber Fehler wird gelacht.",
      correct: "michael",
    },
    {
      id: 30,
      statement: "F\u00fcr die Ger\u00e4te muss man viel Geld ausgeben.",
      correct: "michael",
    },
  ],
};
