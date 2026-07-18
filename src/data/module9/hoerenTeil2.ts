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

export const module9HoerenTeil2: HoerenTeil2Data = {
  module: 9,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie besuchen das Mercedes-Benz-Museum und bekommen einige Informationen zu Beginn der F\u00fchrung.",
  questions: [
    {
      id: 11,
      statement: "Wo werden die Autos produziert?",
      options: {
        a: "In Stuttgart.",
        b: "In Untert\u00fcrkheim.",
        c: "In Bremen.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Auf der Automobilf\u00fchrung erf\u00e4hrt man etwas \u00fcber ...",
      options: {
        a: "die Geschichte der Firma.",
        b: "die spezielle Architektur des Museums.",
        c: "die Endmontage der Autos.",
      },
      correct: "a",
    },
    {
      id: 13,
      statement: "Wie viele Autos sind im Museum ausgestellt?",
      options: {
        a: "116.",
        b: "120.",
        c: "160.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Wie viele M\u00f6glichkeiten gibt es f\u00fcr den Rundgang?",
      options: {
        a: "Neun.",
        b: "Zwei.",
        c: "F\u00fcnf.",
      },
      correct: "b",
    },
    {
      id: 15,
      statement: "Bis um wie viel Uhr kann man etwas Warmes essen?",
      options: {
        a: "Bis um 18.30 Uhr.",
        b: "Bis um 19.00 Uhr.",
        c: "Bis um 18.00 Uhr.",
      },
      correct: "a",
    },
  ],
};
