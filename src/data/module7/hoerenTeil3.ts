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

export const module7HoerenTeil3: HoerenTeil3Data = {
  module: 7,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen in einem Restaurant und h\u00f6ren, wie sich zwei Eltern und ihr Sohn \u00fcber den Kauf eines Hauses oder einer Wohnung unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Die Wohnung ist neuer als das Haus.",
      correct: "falsch",
    },
    {
      id: 17,
      statement: "Die Familie hat einen Hund.",
      correct: "richtig",
    },
    {
      id: 18,
      statement: "Die Mutter findet Nachbarn im selben Haus positiv.",
      correct: "falsch",
    },
    {
      id: 19,
      statement: "Lennard verspricht, bei der Gartenarbeit zu helfen.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Das Haus hat mehr Zimmer als die Wohnung.",
      correct: "richtig",
    },
    {
      id: 21,
      statement: "Der Vater von Lennard ist Architekt.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Euskirchen liegt in der N\u00e4he von Bonn.",
      correct: "falsch",
    },
  ],
};
