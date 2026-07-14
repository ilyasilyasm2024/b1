export interface HoerenTeil2Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface HoerenTeil2Data {
  module: number;
  part: string;
  instruction: string;
  context: string;
  questions: HoerenTeil2Question[];
}

export const module5HoerenTeil2: HoerenTeil2Data = {
  module: 5,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie nehmen an einer F\u00fchrung auf dem Zeltdach des Olympiastadions M\u00fcnchen teil.",
  questions: [
    {
      id: 11,
      statement:
        "Wie viele Mannschaften nahmen 1972 an den olympischen Sommerspielen teil?",
      options: {
        a: "\u00dcber 100.",
        b: "Fast 100.",
        c: "8000.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Was gibt es seit 2005 im Olympiastadion nicht mehr?",
      options: {
        a: "Fu\u00dfballspiele.",
        b: "Konzerte.",
        c: "Sportwettk\u00e4mpfe.",
      },
      correct: "a",
    },
    {
      id: 13,
      statement: "Die Zeltdachtour dauert ...",
      options: {
        a: "20 Minuten.",
        b: "eine halbe Stunde.",
        c: "zwei Stunden.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Wie ist das Wetter heute?",
      options: {
        a: "Es ist bew\u00f6lkt.",
        b: "Wie gestern.",
        c: "Sehr g\u00fcnstig.",
      },
      correct: "c",
    },
    {
      id: 15,
      statement: "Wo k\u00f6nnen die Besucher etwas essen und trinken?",
      options: {
        a: "In einem Restaurant.",
        b: "In einem Self-Service.",
        c: "Im Biergarten.",
      },
      correct: "b",
    },
  ],
};
