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

export const module2HoerenTeil1: HoerenTeil1Data = {
  module: 2,
  part: "Hören Teil 1",
  instruction:
    "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Karolin ist Professorin an der Uni.",
      correct: "falsch",
    },
    multipleChoice: {
      statement: "Wo war Karolin heute?",
      options: {
        a: "In der Universität.",
        b: "Bei einem Professor in der Sprechstunde.",
        c: "Bei Schulfreunden.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Ein Haus hat gebrannt.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Wie viele Familien wohnen in dem Haus?",
        options: { a: "Dreizehn.", b: "Drei.", c: "Zwei." },
        correct: "b",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie erfahren das Wetter für die nächsten drei Tage.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wann schneit es?",
        options: { a: "Am Freitagvormittag.", b: "Am Samstagnachmittag.", c: "Am Sonntag." },
        correct: "a",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Miriam will Janosch zum Geburtstag einladen.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Was soll Janosch machen?",
        options: { a: "Etwas aus der Reinigung abholen.", b: "Etwas zur Reinigung bringen.", c: "In der Reinigung anrufen." },
        correct: "a",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Im Museum gibt es eine Ausstellung.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Wie kommt man zum Museum?",
        options: { a: "Mit dem Bus.", b: "Mit der Straßenbahn.", c: "Mit dem Zug." },
        correct: "b",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie hören eine Information für Reisende mit Kindern.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Wann kommt der ICE aus Paris?",
        options: { a: "45 Minuten später.", b: "30 Minuten später.", c: "15 Minuten später." },
        correct: "b",
      },
    },
  ],
};
