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

export const module5HoerenTeil1: HoerenTeil1Data = {
  module: 5,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie bekommen Informationen zu Stadtrundfahrten.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Um wie viel Uhr beginnt die erste Sightseeing-Tour?",
      options: {
        a: "Um 11 Uhr.",
        b: "Um 12 Uhr.",
        c: "Um 10 Uhr.",
      },
      correct: "c",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Es wird ein Ausflug in einen Zoo angeboten.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Was gibt es in Walsrode?",
        options: {
          a: "V\u00f6gel.",
          b: "B\u00e4ume.",
          c: "Flugzeuge.",
        },
        correct: "a",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie h\u00f6ren eine Nachricht aus einem Kochstudio.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Was kann man schicken?",
        options: {
          a: "Ein Kochbuch.",
          b: "Ein Familienrezept.",
          c: "Einen Kochtopf.",
        },
        correct: "b",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "In der Sendung bekommen Touristen Tipps.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Assistent/Assistentin wird man ...",
        options: {
          a: "in zehn Monaten.",
          b: "in drei Monaten.",
          c: "in drei Jahren.",
        },
        correct: "a",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Luigi und Thomas sind verabredet.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wie lange l\u00e4uft Luigi vom Hotel bis zur Ged\u00e4chtniskirche?",
        options: {
          a: "30 Minuten.",
          b: "20 Minuten.",
          c: "10 Minuten.",
        },
        correct: "b",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Der Zug kommt an.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wo kann man schlafen?",
        options: {
          a: "Im Zug in der Mitte.",
          b: "Im Zug vorn.",
          c: "Im Zug hinten.",
        },
        correct: "c",
      },
    },
  ],
};
