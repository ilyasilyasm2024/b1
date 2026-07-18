export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderator" | "schulz" | "tilmann";
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

export const module13HoerenTeil4: HoerenTeil4Data = {
  module: 13,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Der Moderator der Radiosendung \u201eMitTalk\u201c diskutiert mit der Studentin Juliane Schulz, aktivem Mitglied der Stiftung \u201eTafel\u201c, und Lukas Tilmann, einem K\u00fcnstler der besonderen Art, zum Thema \u201eWie gehen wir mit dem Essen um?\u201c.",
  speakers: [
    { key: "moderator", label: "Moderator" },
    { key: "schulz", label: "Juliane Schulz" },
    { key: "tilmann", label: "Lukas Tilmann" },
  ],
  example: {
    id: 0,
    statement: "Die Namen der Kunstwerke sind fantasievoll.",
    correct: "moderator",
  },
  questions: [
    {
      id: 23,
      statement:
        "Die Reaktion anderer auf das erste Werk war eine Herausforderung.",
      correct: "tilmann",
    },
    {
      id: 24,
      statement: "Die Objekte entstehen aus dem, was \u00fcbrig bleibt.",
      correct: "tilmann",
    },
    {
      id: 25,
      statement: "Hunger gibt es nicht nur in armen L\u00e4ndern.",
      correct: "schulz",
    },
    {
      id: 26,
      statement:
        "Mit dem Essen aus Europas M\u00fcll k\u00f6nnte man alle hungrigen Menschen ern\u00e4hren.",
      correct: "moderator",
    },
    {
      id: 27,
      statement:
        "Manche Produkte d\u00fcrfen weder verkauft noch verschenkt werden.",
      correct: "schulz",
    },
    {
      id: 28,
      statement: "Essen aus dem M\u00fcll ist auch ein Problem f\u00fcr die Umwelt.",
      correct: "moderator",
    },
    {
      id: 29,
      statement: "Aus Protest aus dem M\u00fcll zu essen ist sinnlos.",
      correct: "schulz",
    },
    {
      id: 30,
      statement: "Der Erl\u00f6s der Ausstellung soll der \u201eTafel\u201c helfen.",
      correct: "tilmann",
    },
  ],
};
