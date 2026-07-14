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

export const module4HoerenTeil3: HoerenTeil3Data = {
  module: 4,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen in einem Fast-Food-Restaurant und h\u00f6ren, wie sich drei Jugendliche \u00fcber jemanden unterhalten, der vom Internet abh\u00e4ngig ist.",
  questions: [
    {
      id: 16,
      statement: "Julia ist die Freundin von Erik.",
      correct: "falsch",
    },
    {
      id: 17,
      statement: "Julia ist allein ins Fast-Food-Restaurant gekommen.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Erik hat auch nachts am Computer gespielt.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Nele ist jetzt die Freundin von Erik.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Die Familie wusste nichts von Eriks Problemen mit Nele.",
      correct: "richtig",
    },
    {
      id: 21,
      statement: "Er wollte nicht mit dem Arzt \u00fcber sein Problem sprechen.",
      correct: "falsch",
    },
    {
      id: 22,
      statement: "Sebastian und Tom wollen Erik helfen.",
      correct: "richtig",
    },
  ],
};
