export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "daniel" | "binder" | "fuchs";
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

export const module11HoerenTeil4: HoerenTeil4Data = {
  module: 11,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Die Moderatorin der Radiosendung \u201eTreffpunkt Salzburg\u201c diskutiert mit dem Sch\u00fcler Daniel, der Sportlehrerin Anna Binder und Herrn Professor Fuchs zum Thema \u201eNoten im Sportunterricht\u201c.",
  speakers: [
    { key: "daniel", label: "Daniel" },
    { key: "binder", label: "Frau Binder" },
    { key: "fuchs", label: "Herr Prof. Fuchs" },
  ],
  example: {
    id: 0,
    statement:
      "Studenten, die Sportlehrer werden wollen, m\u00fcssen ein Praktikum machen.",
    correct: "fuchs",
  },
  questions: [
    {
      id: 23,
      statement:
        "An vielen Schulen erhalten M\u00e4dchen f\u00fcr die gleiche sportliche Leistung eine h\u00f6here Note als Buben.",
      correct: "fuchs",
    },
    {
      id: 24,
      statement:
        "Zw\u00f6lfj\u00e4hrige M\u00e4dchen sind k\u00f6rperlich nicht schw\u00e4cher als Buben im gleichen Alter.",
      correct: "daniel",
    },
    {
      id: 25,
      statement:
        "Sich bei der Schulbeh\u00f6rde zu beschweren, ist nicht kompliziert.",
      correct: "daniel",
    },
    {
      id: 26,
      statement:
        "Die Situation mit den Sportnoten an Daniels Schule hat sich nicht ver\u00e4ndert.",
      correct: "daniel",
    },
    {
      id: 27,
      statement:
        "Es ist oft schwierig, theoretisches Wissen in der Praxis anzuwenden.",
      correct: "binder",
    },
    {
      id: 28,
      statement:
        "Auch die Universit\u00e4ten bem\u00fchen sich, die Situation mit den Sportnoten zu verbessern.",
      correct: "fuchs",
    },
    {
      id: 29,
      statement: "Es sollte in der Schule keine Noten geben.",
      correct: "daniel",
    },
    {
      id: 30,
      statement: "Die meisten Sch\u00fcler sind daf\u00fcr, dass Sport Pflichtfach bleibt.",
      correct: "fuchs",
    },
  ],
};
