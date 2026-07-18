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

export const module11HoerenTeil1: HoerenTeil1Data = {
  module: 11,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie h\u00f6ren eine Werbung f\u00fcr ein Gesch\u00e4ft mit Wintersportartikeln.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Wer bekommt einen Gratis-Skipass?",
      options: {
        a: "Kinder bis 15, wenn Vater oder Mutter einen Pass f\u00fcr 6 Tage kaufen.",
        b: "Familien, die zu Ostern Ski fahren.",
        c: "Junge Leute zwischen 15 und 17 Jahren.",
      },
      correct: "a",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Die Sendung macht Werbung f\u00fcr einen Modekatalog.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Wer den Katalog bestellt, ...",
        options: {
          a: "bekommt eine Rechnung.",
          b: "bezahlt mit Kreditkarte.",
          c: "braucht nichts zu bezahlen.",
        },
        correct: "c",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Frau Heinrich soll heute in die Praxis kommen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Frau Heinrich soll ...",
        options: {
          a: "zum Orthop\u00e4den gehen.",
          b: "noch heute zur\u00fcckrufen.",
          c: "ins Krankenhaus kommen.",
        },
        correct: "b",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Es wurden Autos gestohlen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Wie kam der T\u00e4ter in die Autos?",
        options: {
          a: "Durch die T\u00fcr.",
          b: "Durch das Fenster.",
          c: "Durch den Kofferraum.",
        },
        correct: "b",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Eine Firma m\u00f6chte einen Test zum H\u00f6ren machen.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wer an der Studie teilnimmt, ...",
        options: {
          a: "braucht nichts zu bezahlen.",
          b: "muss etwas kaufen.",
          c: "muss 75 Jahre alt sein.",
        },
        correct: "a",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren Ern\u00e4hrungstipps f\u00fcr Kinder.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wo haben Kinder mehr \u00dcbergewicht?",
        options: {
          a: "In S\u00fCdeuropa.",
          b: "In Nordeuropa.",
          c: "In Deutschland.",
        },
        correct: "a",
      },
    },
  ],
};
