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

export const module4HoerenTeil1: HoerenTeil1Data = {
  module: 4,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie h\u00f6ren ein Reisemagazin \u00fcber Berlin.",
      correct: "falsch",
    },
    multipleChoice: {
      statement: "Wann k\u00f6nnen Sie an einen See fahren?",
      options: {
        a: "Im Januar.",
        b: "Im Oktober.",
        c: "Im Dezember.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Sie sind mit dem Kundenservice einer Buchhandlung verbunden.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Wer Fragen hat, ...",
        options: {
          a: "soll eine Postkarte schreiben.",
          b: "kann auch am Wochenende anrufen.",
          c: "kann eine E-Mail schreiben.",
        },
        correct: "c",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Der Zug kommt fr\u00fcher.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wann kommen die Reisenden in M\u00fcnchen an?",
        options: {
          a: "Um 20:00 Uhr.",
          b: "Gegen 15:00 Uhr.",
          c: "Nach 23:00 Uhr.",
        },
        correct: "c",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Es gibt eine Theatervorstellung f\u00fcr Kinder.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Der Besuch der Veranstaltung ...",
        options: {
          a: "ist kostenlos.",
          b: "kostet f\u00fcr Kinder und Erwachsene gleich viel.",
          c: "ist f\u00fcr Erwachsene teurer als f\u00fcr Kinder.",
        },
        correct: "b",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Paula ist am Nachmittag nicht zu Hause.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wann kann Viola Paula zur\u00fcckrufen?",
        options: {
          a: "In den n\u00e4chsten ein bis zwei Stunden.",
          b: "Heute Abend um 20 Uhr.",
          c: "Heute Abend zu Hause oder morgen in der Firma.",
        },
        correct: "c",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren Tipps f\u00fcr Eink\u00e4ufe im Supermarkt.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "An wie vielen Tagen kann man Bioprodukte kaufen?",
        options: {
          a: "An drei Tagen.",
          b: "An zwei Tagen.",
          c: "An einem Tag.",
        },
        correct: "b",
      },
    },
  ],
};
