export interface HoerenTeil1Text {
  id: number;
  richtigFalschQuestion: {
    id: number;
    statement: string;
    correct: "richtig" | "falsch";
  };
  multipleChoiceQuestion: {
    id: number;
    statement: string;
    options: { a: string; b: string; c: string };
    correct: "a" | "b" | "c";
  };
}

export interface HoerenTeil1Data {
  module: number;
  part: string;
  instruction: string;
  example: {
    richtigFalsch: { statement: string; correct: "richtig" | "falsch" };
    multipleChoice: {
      statement: string;
      options: { a: string; b: string; c: string };
      correct: "a" | "b" | "c";
    };
  };
  texts: HoerenTeil1Text[];
}

export const module7HoerenTeil1: HoerenTeil1Data = {
  module: 7,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Das Reiseb\u00fcro ist im Moment geschlossen.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Wann ist das Reiseb\u00fcro ge\u00f6ffnet?",
      options: {
        a: "Von 9.00 Uhr bis 21.00 Uhr.",
        b: "Von 9.00 Uhr bis 18.00 Uhr.",
        c: "Von 10.00 Uhr bis 19.30 Uhr.",
      },
      correct: "c",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Es gibt einen Wettbewerb f\u00fcr Sch\u00fcler.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Wer kann teilnehmen?",
        options: {
          a: "Kinder im Alter von 8 bis 10 Jahren.",
          b: "Die Eltern bayerischer Sch\u00fcler.",
          c: "Realsch\u00fcler aus den Klassen 8, 9 und 10.",
        },
        correct: "c",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie h\u00f6ren das Konzertprogramm der Philharmonie.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wie kann man sich \u00fcber Abonnements informieren?",
        options: {
          a: "Telefonisch.",
          b: "\u00dcber Internet.",
          c: "Per E-Mail.",
        },
        correct: "a",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "In Z\u00fcrich wird ein Bahnhof gebaut.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Die Bauarbeiten dauern ...",
        options: {
          a: "weniger als ein Jahr.",
          b: "l\u00e4nger als ein Jahr.",
          c: "vier Jahre.",
        },
        correct: "b",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Sie h\u00f6ren eine Reisewertung.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wo verbringt man den Urlaub?",
        options: {
          a: "In Kolberg.",
          b: "An der Ostsee.",
          c: "An der Nordsee.",
        },
        correct: "b",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren Nachrichten \u00fcber Deutschland.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wer hat das Nummernschild gefunden?",
        options: {
          a: "Ein Mann aus M\u00fcnchen.",
          b: "Ein Motorradfahrer.",
          c: "Die Polizei.",
        },
        correct: "b",
      },
    },
  ],
};
