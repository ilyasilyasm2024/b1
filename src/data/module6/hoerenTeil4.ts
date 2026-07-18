export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderatorin" | "leo" | "mario";
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

export const module6HoerenTeil4: HoerenTeil4Data = {
  module: 6,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Die Moderatorin der Radiosendung \u201eMenschen\u201c unterh\u00e4lt sich mit Herrn Leo Hofer und Herrn Mario Kulmer \u00fcber die Bedeutung der Zeit.",
  speakers: [
    { key: "moderatorin", label: "Moderatorin" },
    { key: "leo", label: "Leo Hofer" },
    { key: "mario", label: "Mario Kulmer" },
  ],
  example: {
    id: 0,
    statement: "Herr Kulmer ist seit mehr als drei Jahren Rentner.",
    correct: "mario",
  },
  questions: [
    {
      id: 23,
      statement: "Kinder langweilen sich eher als Erwachsene.",
      correct: "moderatorin",
    },
    {
      id: 24,
      statement:
        "Aktive Menschen haben viele Erinnerungen, wenn sie \u00e4lter sind.",
      correct: "mario",
    },
    {
      id: 25,
      statement:
        "Das Zeitmanagement ist in unserer Zeit ein aktuelles Thema.",
      correct: "moderatorin",
    },
    {
      id: 26,
      statement: "Das Zeitmanagement hilft gegen Stress.",
      correct: "leo",
    },
    {
      id: 27,
      statement:
        "Man soll bei einem Zeitplan sowohl an die Arbeitszeit als auch an die Freizeit denken.",
      correct: "leo",
    },
    {
      id: 28,
      statement:
        "Pension\u00e4re haben genug Zeit, da sie nicht berufst\u00e4tig sind.",
      correct: "moderatorin",
    },
    {
      id: 29,
      statement:
        "Man sollte sich nicht zu lange mit seinem Zeitplan besch\u00e4ftigen.",
      correct: "mario",
    },
    {
      id: 30,
      statement: "Alte Menschen haben t\u00e4glich gleich viel Zeit.",
      correct: "leo",
    },
  ],
};
