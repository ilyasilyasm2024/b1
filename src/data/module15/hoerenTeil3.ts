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

export const module15HoerenTeil3: HoerenTeil3Data = {
  module: 15,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen in einem Caf\u00e9 in Z\u00fcrich und h\u00f6ren, wie sich ein alter Mann und ein M\u00e4dchen \u00fcber die Schweizer K\u00fcche unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Lenas Gro\u00dfvater mag Kuchen nicht.",
      correct: "falsch",
    },
    {
      id: 17,
      statement: "Lenas Gro\u00dfvater hat noch nie R\u00f6sti gegessen.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Lena braucht Geld f\u00fcr einen Kochkurs.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Lenas Oma kocht gern schweizerische Gerichte.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Traditionelle Gerichte zu kochen ist umweltfreundlich.",
      correct: "richtig",
    },
    {
      id: 21,
      statement: "Die mexikanische K\u00fcche ist nicht so gesund f\u00fcr Schweizer.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Lenas Gro\u00dfvater kann ihr das Geld nicht geben.",
      correct: "falsch",
    },
  ],
};
