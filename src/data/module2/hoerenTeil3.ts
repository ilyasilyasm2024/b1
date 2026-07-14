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

export const module2HoerenTeil3: HoerenTeil3Data = {
  module: 2,
  part: "Hören Teil 3",
  instruction:
    "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen im Bus und hören, wie sich eine Frau und ein Mann über Haustiere unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Frau Böhm hat keinen Regenschirm dabei.",
      correct: "falsch",
    },
    {
      id: 17,
      statement: "Timmy möchte Fische haben.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Der Mann arbeitet nicht mehr.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Die meisten Kinder wollen lieber eine Katze als einen Hund.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Frau Böhm und Timmy wohnen in Hamburg.",
      correct: "richtig",
    },
    {
      id: 21,
      statement: "Der Mann hat Hunde gern.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Es gibt einen Park in der Nähe der Wohnung.",
      correct: "richtig",
    },
  ],
};
