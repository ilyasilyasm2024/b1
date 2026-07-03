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

export const module1HoerenTeil1: HoerenTeil1Data = {
  module: 1,
  part: "Hören Teil 1",
  instruction:
    "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Jens treibt Sport.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Bei welcher Temperatur soll Jens waschen?",
      options: {
        a: "Bei 60° C.",
        b: "Bei 40° C.",
        c: "Bei 30° C.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Das Möbelhaus hat Sonderangebote.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Im Angebot gibt es Möbel für ...",
        options: {
          a: "Wohnzimmer und Schlafzimmer.",
          b: "Schlafzimmer und Esszimmer.",
          c: "Wohn-, Schlaf- und Kinderzimmer.",
        },
        correct: "a",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie hören eine Musiksendung für kreative Menschen.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: 'Das Programmangebot von „musica viva" gibt es ...',
        options: {
          a: "nur in Österreich.",
          b: "nur in Deutschland.",
          c: "in mehreren Ländern.",
        },
        correct: "c",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Zu Abend soll es warmes Essen geben.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Wie viele Schalter müssen am Herd eingestellt werden?",
        options: {
          a: "Drei.",
          b: "Fünf.",
          c: "Zwei.",
        },
        correct: "c",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Sie hören den Wetterbericht für Österreich.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wo ist es am wärmsten?",
        options: {
          a: "Im Norden.",
          b: "Im Westen.",
          c: "Im Osten.",
        },
        correct: "b",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie sind mit einer Schokoladenfabrik verbunden.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wo braucht man nichts zu bezahlen?",
        options: {
          a: "In der Ausstellung.",
          b: "Im Schoko-Laden.",
          c: "In der Schokowerkstatt.",
        },
        correct: "b",
      },
    },
  ],
};
