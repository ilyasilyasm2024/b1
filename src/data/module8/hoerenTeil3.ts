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

export const module8HoerenTeil3: HoerenTeil3Data = {
  module: 8,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen im Kino und h\u00f6ren, wie sich ein Junge und ein M\u00e4dchen \u00fcber Gewichtsprobleme unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Jasmin findet Hannes zu dick.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Hannes macht viel Sport.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Hannes isst gerne Salat.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Lara hat schon immer Tennis gespielt.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Lara findet, dass Jasmin gut aussieht.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Hannes und Lara sind Geschwister.",
      correct: "falsch",
    },
    {
      id: 22,
      statement: "Am Wochenende hat Lara ihren Geburtstag gefeiert.",
      correct: "falsch",
    },
  ],
};
