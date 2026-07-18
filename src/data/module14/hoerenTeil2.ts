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

export const module14HoerenTeil2: HoerenTeil2Data = {
  module: 14,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie nehmen an der Mozart-City-Tour teil.",
  questions: [
    {
      id: 11,
      statement: "Wie lange dauert die Rundfahrt?",
      options: {
        a: "Zwanzig Minuten.",
        b: "F\u00fcnfzehn Minuten.",
        c: "Neunzig Minuten.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Auf der Mozart-City-Tour besichtigt man ...",
      options: {
        a: "das Wohnhaus Mozarts.",
        b: "das Geburtshaus Mozarts.",
        c: "das Schloss Leopoldskron.",
      },
      correct: "b",
    },
    {
      id: 13,
      statement: "Von wem wurde das Mozarteum gegr\u00fcndet?",
      options: {
        a: "Von Mozart.",
        b: "Von Wissenschaftlern.",
        c: "Von Salzburgern.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Wem geh\u00f6rte das Geburtshaus Mozarts?",
      options: {
        a: "Der Familie Mozart.",
        b: "Einem H\u00e4ndler.",
        c: "Mozarts Nachbarin.",
      },
      correct: "b",
    },
    {
      id: 15,
      statement: "Was sieht man in dem Museum?",
      options: {
        a: "Mozarts Kinder-Violine.",
        b: "Mozarts Klavier.",
        c: "M\u00f6bel der Familie Mozart.",
      },
      correct: "a",
    },
  ],
};
