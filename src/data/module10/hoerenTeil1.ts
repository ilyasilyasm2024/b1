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

export const module10HoerenTeil1: HoerenTeil1Data = {
  module: 10,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Ein Sch\u00fcler hatte einen Unfall.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Wo ist der Sch\u00fcler jetzt?",
      options: {
        a: "Im Krankenhaus.",
        b: "Bei Nachbarn.",
        c: "Auf dem Sportplatz.",
      },
      correct: "a",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Sie h\u00f6ren eine Information einer Berufsschule.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "F\u00fcr die Anmeldung braucht man ...",
        options: {
          a: "einen Pass.",
          b: "das Zeugnis der Grundschule.",
          c: "ein Foto.",
        },
        correct: "c",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie h\u00f6ren eine Unfallmeldung.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wer soll sich bei der Polizei melden?",
        options: {
          a: "Die Frau, die das Auto fuhr.",
          b: "Der Junge, der die Stra\u00dfe \u00fcberquerte.",
          c: "Personen, die den Unfall gesehen haben.",
        },
        correct: "c",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Der Zug kommt jetzt an.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Der Zug ...",
        options: {
          a: "kommt aus Heilbronn.",
          b: "f\u00e4hrt nach Heilbronn.",
          c: "kommt aus Ebersberg.",
        },
        correct: "b",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Sie h\u00f6ren eine Werbung f\u00fcr Schokolade.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Eine viertel Million Tafeln Schokolade ...",
        options: {
          a: "wurde von Kindern gegessen.",
          b: "sind in vier Wochen verkauft worden.",
          c: "haben die H\u00e4ndler bestellt.",
        },
        correct: "b",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren ein Quiz f\u00fcr Kinder.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "In die Kunsthalle Bremen wird eingeladen, wer ...",
        options: {
          a: "seine Meinung \u00fcber die Testversion des Spiels schreibt.",
          b: "die besten Tipps zur Verbesserung des Spiels gibt.",
          c: "den Fragebogen zum Spiel ausf\u00fcllt.",
        },
        correct: "b",
      },
    },
  ],
};
