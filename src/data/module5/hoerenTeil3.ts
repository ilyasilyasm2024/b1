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

export const module5HoerenTeil3: HoerenTeil3Data = {
  module: 5,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen in einem Caf\u00e9 und h\u00f6ren, wie sich zwei junge Leute \u00fcber die Arbeit als Skilehrer unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Robin war schon oft zum Skifahren in \u00d6sterreich.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Die Skilehrerpr\u00fcfung ist ziemlich schwer.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Gro\u00dfe Skischulen bieten den Skilehrern bessere Unterk\u00fcnfte.",
      correct: "falsch",
    },
    {
      id: 19,
      statement: "Laura unterrichtet nur Kinder.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Robin m\u00f6chte lieber Erwachsenenkurse machen.",
      correct: "richtig",
    },
    {
      id: 21,
      statement: "Laura verdient viel Geld als Skilehrerin.",
      correct: "falsch",
    },
    {
      id: 22,
      statement: "Robin findet die Skilehrerpr\u00fcfung teuer.",
      correct: "richtig",
    },
  ],
};
