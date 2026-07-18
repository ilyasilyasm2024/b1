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

export const module15HoerenTeil1: HoerenTeil1Data = {
  module: 15,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Die Firma ist zurzeit geschlossen.",
      correct: "falsch",
    },
    multipleChoice: {
      statement: "Die Firma ...",
      options: {
        a: "\u00f6ffnet von Montag bis Freitag um 9.00 Uhr.",
        b: "hat am Freitag l\u00e4nger ge\u00f6ffnet als von Montag bis Donnerstag.",
        c: "schlie\u00dft jeden Tag um 19.00 Uhr.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Sie h\u00f6ren eine Information f\u00fcr Reisende.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Wer braucht f\u00fcr den Pass nicht zu zahlen?",
        options: {
          a: "Kleinkinder bis 2 Jahre.",
          b: "Kinder unter 13 Jahren.",
          c: "Kinder \u00fcber 12 Jahre.",
        },
        correct: "a",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie h\u00f6ren ein Angebot f\u00fcr Privatunterricht in Englisch.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "F\u00fcr wen ist der Sprachkurs?",
        options: {
          a: "F\u00fcr Berufst\u00e4tige.",
          b: "F\u00fcr Studenten.",
          c: "F\u00fcr Sch\u00fcler.",
        },
        correct: "a",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Es wird w\u00e4rmer.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Es regnet am ...",
        options: {
          a: "Donnerstag.",
          b: "Freitag.",
          c: "Samstag.",
        },
        correct: "c",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Es gibt einen Vortrag.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Worum geht es?",
        options: {
          a: "Um Medizin.",
          b: "Um Informatik.",
          c: "Um Robotik.",
        },
        correct: "c",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Dennis und Claudia wollen sich treffen.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Um zum Zoo zu kommen, ...",
        options: {
          a: "f\u00e4hrt Dennis sieben Stationen mit U- oder S-Bahn.",
          b: "braucht Dennis ungef\u00e4hr 35 Minuten.",
          c: "muss Dennis zweimal umsteigen.",
        },
        correct: "b",
      },
    },
  ],
};
