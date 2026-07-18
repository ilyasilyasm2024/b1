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

export const module9HoerenTeil1: HoerenTeil1Data = {
  module: 9,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie h\u00f6ren Informationen eines Jugendvereins.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Der Dorfabend beginnt um ...",
      options: {
        a: "19.30 Uhr.",
        b: "18.30 Uhr.",
        c: "18.00 Uhr.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "In der Lebensmittelabteilung kann man etwas essen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Was ist heute im Angebot?",
        options: {
          a: "Wurst.",
          b: "Gem\u00fcse.",
          c: "Obst.",
        },
        correct: "c",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Es gibt Nokia-Handys im Angebot.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wo hat man das Mobiltelefon gefunden?",
        options: {
          a: "Im Aufzug.",
          b: "Im B\u00fcro.",
          c: "Im 3. Stock.",
        },
        correct: "c",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Sie erfahren, wie das Wetter in Deutschland wird.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Die Temperatur in Deutschland wird h\u00f6chstens ...",
        options: {
          a: "12\u00b0C.",
          b: "15\u00b0C.",
          c: "18\u00b0C.",
        },
        correct: "c",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Jonas kann nicht zum Eislaufen kommen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wie soll Kathrin gehen?",
        options: {
          a: "Links und rechts.",
          b: "Geradeaus und links.",
          c: "Geradeaus und rechts.",
        },
        correct: "c",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Es gibt eine Veranstaltung in Griechenland.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wenn es regnet, ...",
        options: {
          a: "findet das Konzert nicht statt.",
          b: "findet das Konzert an einem anderen Ort statt.",
          c: "findet das Konzert an einem anderen Tag statt.",
        },
        correct: "b",
      },
    },
  ],
};
