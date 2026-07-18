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

export const module9HoerenTeil3: HoerenTeil3Data = {
  module: 9,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sind an einer Stra\u00dfenbahnhaltestelle und h\u00f6ren, wie sich zwei Jugendliche \u00fcber ihre Geschwister unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Ben f\u00e4hrt zum Basketballtraining.",
      correct: "falsch",
    },
    {
      id: 17,
      statement: "Eva w\u00fcrde ihre Schwester gern \u00f6fter sehen.",
      correct: "richtig",
    },
    {
      id: 18,
      statement: "Ben und sein Bruder verstehen sich gut.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Ben muss morgens um halb sechs aufstehen.",
      correct: "falsch",
    },
    {
      id: 20,
      statement:
        "Bens Bruder findet eigentlich Autos interessanter als Motorr\u00e4der.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Als Lehrling verdient Bens Bruder nicht viel Geld.",
      correct: "falsch",
    },
    {
      id: 22,
      statement: "Das T-Shirt ist ein Geschenk von Evas Schwester.",
      correct: "richtig",
    },
  ],
};
