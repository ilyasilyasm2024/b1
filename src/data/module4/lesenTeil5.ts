export interface LesenTeil5Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil5Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  questions: LesenTeil5Question[];
}

export const module4LesenTeil5: LesenTeil5Data = {
  module: 4,
  part: "Lesen Teil 5",
  title: "Nutzungsordnung Campingplatz am Freibad Altenau",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c.",
  text: "Nutzungsordnung Campingplatz am Freibad Altenau\n\nAllgemeines:\nDer Campingplatz am Freibad Altenau bietet Stellpl\u00e4tze f\u00fcr Zelte und Wohnmobile. Hunde sind auf dem Campingplatz willkommen, jedoch ist der Aufenthalt im Bereich des Freibads f\u00fcr Hunde nicht zugelassen. Pro Hund wird eine Geb\u00fchr von 3 Euro pro Nacht berechnet.\n\nGrillen und Feuer:\nOffenes Feuer ist auf dem gesamten Campingplatz verboten. Es gibt festgelegte Grillpl\u00e4tze, die benutzt werden m\u00fcssen. Wer grillen m\u00f6chte, darf dies nur an diesen bestimmten Stellen tun. Eigene Feuerstellen d\u00fcrfen nicht angelegt werden.\n\nSanit\u00e4re Einrichtungen:\nDie Toiletten befinden sich neben dem Kiosk. Die Duschen sind in den Toilettenr\u00e4umen integriert. Jeder Gast ist verpflichtet, die R\u00e4ume sauber zu hinterlassen. Die Gruppenr\u00e4ume werden vom Personal gereinigt.\n\nUferzone:\nDie Uferzone am Bach ist Naturschutzgebiet. Der Aufenthalt dort ist verboten. Es d\u00fcrfen keine Zelte in der Uferzone aufgestellt werden. Bitte sch\u00fctzen Sie die Natur auch auf dem restlichen Gel\u00e4nde.",
  questions: [
    {
      id: 27,
      statement: "F\u00fcr Hunde ...",
      options: {
        a: "ist der Aufenthalt im Bereich des Freibads nicht zugelassen.",
        b: "ist der Campingplatz nicht vorgesehen.",
        c: "muss man einmalig 5 Euro bezahlen.",
      },
      correct: "a",
    },
    {
      id: 28,
      statement: "Um zu grillen, muss man ...",
      options: {
        a: "eine neue Feuerstelle bewilligt bekommen.",
        b: "an bestimmten Stellen Feuer machen.",
        c: "um Erlaubnis bitten.",
      },
      correct: "b",
    },
    {
      id: 29,
      statement: "Die Toiletten ...",
      options: {
        a: "liegen neben dem Kiosk.",
        b: "sollten von den Gruppenleitern sauber gemacht werden.",
        c: "haben auch Duschen.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "F\u00fcr die Uferzone gilt:",
      options: {
        a: "Es gibt dort auch Toiletten.",
        b: "Nur dort ist man verpflichtet, die Natur zu sch\u00fctzen.",
        c: "Der Aufenthalt dort ist verboten.",
      },
      correct: "c",
    },
  ],
};
