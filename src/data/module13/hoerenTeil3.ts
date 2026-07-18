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

export const module13HoerenTeil3: HoerenTeil3Data = {
  module: 13,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie stehen an einer Haltestelle in Wien und h\u00f6ren, wie sich ein Mann und eine Frau \u00fcber eine Klassenreise unterhalten.",
  questions: [
    {
      id: 16,
      statement:
        "Herr Brunner und die Sch\u00fcler organisieren die Klassenreise gemeinsam.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Die Klasse hat beschlossen, eine Radtour zu machen.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Die meisten Sch\u00fcler k\u00f6nnen nur Englisch.",
      correct: "falsch",
    },
    {
      id: 19,
      statement: "Viktoria hat es in London nicht gefallen.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Herr Brunner war gegen eine Klassenreise nach Paris.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Es gibt Eltern, f\u00fcr die eine Auslandsreise zu teuer ist.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Die Sch\u00fcler wollen, dass alle mitfahren k\u00f6nnen.",
      correct: "richtig",
    },
  ],
};
