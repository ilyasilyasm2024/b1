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

export const module13HoerenTeil1: HoerenTeil1Data = {
  module: 13,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie h\u00f6ren eine Auskunft eines Elektrogesch\u00e4fts.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Wo werden die meisten Ger\u00e4te repariert?",
      options: {
        a: "In der Werkstatt.",
        b: "Beim T\u00dcV-Kundendienst.",
        c: "Zu Hause beim Kunden.",
      },
      correct: "a",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Der Tipp ist f\u00fcr junge Leute, die studieren wollen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Wo kann man aktiv sein?",
        options: {
          a: "In einem Krankenhaus.",
          b: "In einem Altenheim.",
          c: "In einer Arztpraxis.",
        },
        correct: "b",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Die Polizei kennt den T\u00e4ter.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wie geht es der Kellnerin?",
        options: {
          a: "Sie ist verletzt.",
          b: "Sie ist tot.",
          c: "Sie ist betrunken.",
        },
        correct: "a",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement:
          "Die Informationen sind f\u00fcr Reisende, die auf dem Flughafen ankommen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Wer muss sich beeilen?",
        options: {
          a: "Die Passagiere nach Frankfurt.",
          b: "Die Passagiere nach K\u00f6ln.",
          c: "Die Passagiere Siebert und Johannsen.",
        },
        correct: "a",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Sie h\u00f6ren eine Auskunft \u00fcber die Bestellung von Eintrittskarten.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wann kann man bestellen?",
        options: {
          a: "Samstag und Sonntag von 7.30 Uhr bis 18.00 Uhr.",
          b: "Montag bis Freitag bis 20.00 Uhr.",
          c: "Montag bis Sonntag von 7.30 Uhr bis 20.00 Uhr.",
        },
        correct: "c",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren eine Werbung f\u00fcr Reisen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Alle Angebote kosten ...",
        options: {
          a: "\u00fcber 100 Euro.",
          b: "unter 100 Euro.",
          c: "98 Euro.",
        },
        correct: "b",
      },
    },
  ],
};
