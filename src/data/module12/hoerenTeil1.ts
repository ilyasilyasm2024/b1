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

export const module12HoerenTeil1: HoerenTeil1Data = {
  module: 12,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Sie h\u00f6ren Informationen \u00fcber Ausbildungsberufe.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Was erfahren die Zuh\u00f6rer?",
      options: {
        a: "Wie man sich an der Uni bewirbt.",
        b: "Ob man studieren und gleichzeitig arbeiten kann.",
        c: "Wann man sich an der Uni anmeldet.",
      },
      correct: "b",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Sie h\u00f6ren ein Gesundheitsmagazin.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Die Teilnehmer des Testversuches waren ...",
        options: {
          a: "\u00fcber 90 Jahre alt.",
          b: "nicht \u00e4lter als 83 Jahre.",
          c: "70 Jahre alt.",
        },
        correct: "b",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Im Theater gibt es jeden Tag eine Vorstellung.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "An welchem Tag gibt es eine Vorstellung am Nachmittag?",
        options: {
          a: "Am Freitag.",
          b: "Am Samstag.",
          c: "Am Sonntag.",
        },
        correct: "c",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Elise und Ciara wollen zusammen verreisen.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Welche Unterkunft findet Ciara am g\u00fcnstigsten?",
        options: {
          a: "Ein Appartement.",
          b: "Eine Ferienwohnung.",
          c: "Ein Ferienhaus.",
        },
        correct: "c",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Das Wetter wird am Wochenende schlechter.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Vorausgesagt werden ...",
        options: {
          a: "dichte Wolken.",
          b: "starke Schneef\u00e4lle.",
          c: "Temperaturen \u00fcber 5 Grad.",
        },
        correct: "a",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie erfahren, wie viele Stunden der Mond scheint.",
        correct: "falsch",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Heute ...",
        options: {
          a: "hat man den ganzen Tag gute Laune.",
          b: "macht der Beruf keine M\u00fche.",
          c: "soll man vorsichtig Sport treiben.",
        },
        correct: "c",
      },
    },
  ],
};
