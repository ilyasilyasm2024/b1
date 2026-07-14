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

export const module3HoerenTeil1: HoerenTeil1Data = {
  module: 3,
  part: "Hören Teil 1",
  instruction:
    "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie hören eine Information über Veranstaltungen.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Für welche Veranstaltung muss man sich anmelden?",
      options: {
        a: "Für den Tanzkurs.",
        b: "Für die Kreativstunde.",
        c: "Für das Sommerfest.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Sie hören Informationen über Abflugzeiten.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Die Maschine aus London ...",
        options: {
          a: "fliegt später ab.",
          b: "ist schon gelandet.",
          c: "fällt heute aus.",
        },
        correct: "a",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie hören Ratschläge für Ihre Gesundheit.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wer besucht häufiger eine Arztpraxis?",
        options: {
          a: "Deutsche.",
          b: "Schweizer.",
          c: "Österreicher.",
        },
        correct: "a",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Sie hören Kinotipps.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Am Freitag läuft der Film ...",
        options: {
          a: "einmal.",
          b: "zweimal.",
          c: "dreimal.",
        },
        correct: "a",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Die Praxis ist jetzt nicht geöffnet.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wann ist der Besuch in der Praxis von Dr. Mannheim möglich?",
        options: {
          a: "Am Montag und am Dienstag.",
          b: "Am Mittwoch und am Donnerstag.",
          c: "Am Freitag und am Samstag.",
        },
        correct: "c",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie hören eine Werbung für Flugreisen.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Was kostet ein Ticket für fünf Personen?",
        options: {
          a: "27 Euro.",
          b: "57 Euro.",
          c: "72 Euro.",
        },
        correct: "a",
      },
    },
  ],
};
