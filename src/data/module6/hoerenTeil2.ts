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

export const module6HoerenTeil2: HoerenTeil2Data = {
  module: 6,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie sind zu Besuch im Puppenmuseum K\u00e4the Kruse.",
  questions: [
    {
      id: 11,
      statement: "Das Puppenmuseum gibt es seit ...",
      options: {
        a: "1883.",
        b: "1988.",
        c: "1999.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Die erste Puppe von K\u00e4the Kruse war ...",
      options: {
        a: "sehr schwer.",
        b: "unpers\u00f6nlich und kalt.",
        c: "warm und weich.",
      },
      correct: "c",
    },
    {
      id: 13,
      statement: "Warum wurde K\u00e4the Kruse ber\u00fchmt?",
      options: {
        a: "Weil es damals noch keine Puppen gab.",
        b: "Weil ihre Puppen den Kindern gefielen.",
        c: "Weil ihre Puppen wie Erwachsene waren.",
      },
      correct: "b",
    },
    {
      id: 14,
      statement: "Was kann man im Puppenmuseum auch machen?",
      options: {
        a: "Einen Workshop besuchen.",
        b: "Eine Puppe herstellen.",
        c: "K\u00e4the Kruse interviewen.",
      },
      correct: "a",
    },
    // id 15 correct: c (official)
    {
      id: 15,
      statement: "Man kann im Museum Geburtstag feiern, wenn man ...",
      options: {
        a: "Eltern, Oma oder Opa mitbringt.",
        b: "unter sechs Jahre alt ist.",
        c: "bis zu zw\u00f6lf Kinder einl\u00e4dt.",
      },
      correct: "c",
    },
  ],
};
