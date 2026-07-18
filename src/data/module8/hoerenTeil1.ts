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

export const module8HoerenTeil1: HoerenTeil1Data = {
  module: 8,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie h\u00f6ren einen Veranstaltungstipp f\u00fcr Kinder.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Wer beim Kinder-Medien-Festival mitmachen m\u00f6chte, ...",
      options: {
        a: "muss eine Web-Seite f\u00fcr Kinder machen.",
        b: "kann Mitte Mai nicht zur Schule gehen.",
        c: "muss die Reise nach Deutschland bezahlen.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Sie h\u00f6ren eine Reklame.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Die Zeitschrift erscheint ...",
        options: {
          a: "einmal im Monat.",
          b: "einmal in der Woche.",
          c: "alle 14 Tage.",
        },
        correct: "a",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie sind mit einer Berufsschule verbunden.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wer sich f\u00fcr einen Ausbildungsplatz interessiert, ...",
        options: {
          a: "muss aus der EU kommen.",
          b: "sollte an einer Informationsveranstaltung teilnehmen.",
          c: "muss Latein k\u00f6nnen.",
        },
        correct: "b",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Sie h\u00f6ren die Sportnachrichten.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Was erfahren Sie auf dem Video?",
        options: {
          a: "Wie lange Sie Rad fahren sollen.",
          b: "Welche Kleidung Sie am besten tragen.",
          c: "Wie man Rennradler wird.",
        },
        correct: "b",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Das Flugzeug wird gleich landen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "W\u00e4hrend des Fluges ...",
        options: {
          a: "darf man keine elektronischen Ger\u00e4te benutzen.",
          b: "kann man sein Handy einschalten.",
          c: "sollte man angeschnallt bleiben.",
        },
        correct: "c",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie h\u00f6ren eine Meldung \u00fcber einen Verkehrsstau.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Der Autofahrer wurde ...",
        options: {
          a: "gar nicht verletzt.",
          b: "schwer verletzt.",
          c: "leicht verletzt.",
        },
        correct: "c",
      },
    },
  ],
};
