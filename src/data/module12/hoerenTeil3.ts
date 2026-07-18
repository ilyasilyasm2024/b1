export interface HoerenTeil3Question {
  id: number;
  statement: string;
  correct: "richtig" | "falsch";
}

export interface HoerenTeil3Data {
  module: number;
  part: string;
  instruction: string;
  context: string;
  questions: HoerenTeil3Question[];
}

export const module12HoerenTeil3: HoerenTeil3Data = {
  module: 12,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sind an einer Bushaltestelle und h\u00f6ren, wie sich ein junger Mann und eine junge Frau \u00fcber Beruf und Studium unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Emma ist von ihrer Ausbildung entt\u00e4uscht.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Emma war in der Schule keine gute Sch\u00fclerin.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Julian hat beim Abitur keine guten Noten bekommen.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Das Abitur ist leichter geworden.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Julian hat dieses Jahr keinen Studienplatz in Medizin bekommen.",
      correct: "richtig",
    },
    {
      id: 21,
      statement:
        "Julian will erst sp\u00e4ter ein Praktikum in einem Krankenhaus machen.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Emma und Julian sind im selben Sportverein.",
      correct: "falsch",
    },
  ],
};
