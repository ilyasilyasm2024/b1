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

export const module6HoerenTeil1: HoerenTeil1Data = {
  module: 6,
  part: "H\u00f6ren Teil 1",
  instruction:
    "Sie h\u00f6ren nun f\u00fcnf kurze Texte. Sie h\u00f6ren jeden Text zweimal. Zu jedem Text l\u00f6sen Sie zwei Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung. Lesen Sie zuerst das Beispiel. Dazu haben Sie 10 Sekunden Zeit.",
  example: {
    richtigFalsch: {
      statement: "Im Supermarkt werden heute Obst und Gem\u00fcse angeboten.",
      correct: "richtig",
    },
    multipleChoice: {
      statement: "Die Preise f\u00fcr das Obst erf\u00e4hrt man ...",
      options: {
        a: "pro St\u00fcck.",
        b: "pro 500 Gramm.",
        c: "pro Kilo.",
      },
      correct: "c",
    },
  },
  texts: [
    {
      id: 1,
      richtigFalschQuestion: {
        id: 1,
        statement: "Ein Zug f\u00e4hrt ab.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 2,
        statement: "Der Zug ...",
        options: {
          a: "kommt aus Wien.",
          b: "transportiert sowohl Personen als auch Autos.",
          c: "hat einen Liegewagen, aber keinen Schlafwagen.",
        },
        correct: "b",
      },
    },
    {
      id: 2,
      richtigFalschQuestion: {
        id: 3,
        statement: "Sie h\u00f6ren die Spielzeiten eines Theaters.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 4,
        statement: "Wann gibt es eine Weihnachtsveranstaltung?",
        options: {
          a: "Am Samstag und Sonntag.",
          b: "Am Donnerstag und Freitag.",
          c: "Nur am Donnerstag.",
        },
        correct: "b",
      },
    },
    {
      id: 3,
      richtigFalschQuestion: {
        id: 5,
        statement: "Sie h\u00f6ren die abendliche Nachrichtensendung.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 6,
        statement: "Der Junge ...",
        options: {
          a: "fuhr mit der Stra\u00dfenbahn.",
          b: "ging zu Fu\u00df.",
          c: "war mit dem Fahrrad unterwegs.",
        },
        correct: "c",
      },
    },
    {
      id: 4,
      richtigFalschQuestion: {
        id: 7,
        statement: "Marie-Luise kann nicht mit ins Theater kommen.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 8,
        statement: "Was soll Adele machen?",
        options: {
          a: "Die Theaterkarten abholen.",
          b: "An der Theaterkasse warten.",
          c: "Ihre Freundin vom B\u00fcro abholen.",
        },
        correct: "a",
      },
    },
    {
      id: 5,
      richtigFalschQuestion: {
        id: 9,
        statement: "Sie erfahren, wo das Hotel liegt.",
        correct: "richtig",
      },
      multipleChoiceQuestion: {
        id: 10,
        statement: "Was liegt n\u00e4her zum Hotel?",
        options: {
          a: "Der Flughafen.",
          b: "Die Ausstellung.",
          c: "Der Bahnhof.",
        },
        correct: "c",
      },
    },
  ],
};
