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

export const module14HoerenTeil1: HoerenTeil1Data = {
  module: 14,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie rufen beim Autohersteller VW an.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Wo bekommt man Informationen \u00fcber die Workshops?",
      options: {
        a: "Am Telefon.",
        b: "Im Internet.",
        c: "An der Kasse.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Auf der A1 ist ein Unfall passiert.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Warum gibt es Stau?",
        options: {
          a: "Weil das Wetter schlecht ist.",
          b: "Weil auf der Autobahn gebaut wird.",
          c: "Weil eine Ausfahrt geschlossen ist.",
        },
        correct: "a",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie h\u00f6ren eine Information eines Fotostudios.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "An welchem Tag ist das Haus geschlossen?",
        options: {
          a: "Am Montag.",
          b: "Am Dienstag.",
          c: "Am Mittwoch.",
        },
        correct: "b",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Sie h\u00f6ren Tipps zu Freizeitaktivit\u00e4ten f\u00fcr Jugendliche.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement:
          "F\u00fcr welche Veranstaltung muss man sich vorher anmelden?",
        options: {
          a: "F\u00fcr die Ausstellung.",
          b: "F\u00fcr die Fahrt mit dem Schneemobil.",
          c: "Zum Skifahren.",
        },
        correct: "b",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "In Augsburg findet ein Weihnachtsmarkt statt.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wie lange ist der Christkindlesmarkt in Betrieb?",
        options: {
          a: "L\u00e4nger als einen Monat.",
          b: "Weniger als einen Monat.",
          c: "135 Tage.",
        },
        correct: "a",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren einen Polizeibericht.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wer konnte die Besitzerin der Katze befreien?",
        options: {
          a: "Der Schl\u00fcsseldienst.",
          b: "Ein Nachbar.",
          c: "Die Polizei.",
        },
        correct: "a",
      },
    },
  ],
};
