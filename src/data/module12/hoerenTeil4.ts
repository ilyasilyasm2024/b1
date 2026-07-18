export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderator" | "flavia" | "christina";
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

export const module12HoerenTeil4: HoerenTeil4Data = {
  module: 12,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Der Moderator der Radiosendung \u201eUmwelt Ihr\u201c diskutiert mit Flavia und Christina zum Thema \u201eBiolebensmittel direkt vom Bauern\u201c.",
  speakers: [
    { key: "moderator", label: "Moderator" },
    { key: "flavia", label: "Flavia" },
    { key: "christina", label: "Christina" },
  ],
  example: {
    id: 0,
    statement:
      "Von kleineren Umweltinitiativen erf\u00e4hrt die \u00d6ffentlichkeit selten.",
    correct: "moderator",
  },
  questions: [
    {
      id: 23,
      statement:
        "Frauen sind an der L\u00f6sung praktischer Probleme mehr interessiert als M\u00e4nner.",
      correct: "christina",
    },
    {
      id: 24,
      statement: "Das \u201eBio-Abo\u201c hilft Frauen, Zeit zu sparen.",
      correct: "flavia",
    },
    {
      id: 25,
      statement:
        "F\u00fcr die meisten Menschen sind Biolebensmittel noch kein wichtiges Thema.",
      correct: "moderator",
    },
    {
      id: 26,
      statement: "Bioprodukte sind billiger geworden.",
      correct: "christina",
    },
    {
      id: 27,
      statement:
        "Bestimmte Gem\u00fcsesorten aus der Region sind vielen unbekannt.",
      correct: "flavia",
    },
    {
      id: 28,
      statement:
        "Wer etwas f\u00fcr die Umwelt tun m\u00f6chte, sollte regionale Produkte konsumieren.",
      correct: "christina",
    },
    {
      id: 29,
      statement: "Dass es eine Konkurrenz gibt, ist positiv.",
      correct: "flavia",
    },
    {
      id: 30,
      statement: "Kleine Firmen sind f\u00fcr die Umwelt besser.",
      correct: "christina",
    },
  ],
};
