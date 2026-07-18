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

export const module10HoerenTeil2: HoerenTeil2Data = {
  module: 10,
  part: "H\u00f6ren Teil 2",
  instruction:
    "Sie h\u00f6ren nun einen Text. Sie h\u00f6ren den Text einmal. Dazu l\u00f6sen Sie f\u00fcnf Aufgaben. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15. Dazu haben Sie 60 Sekunden Zeit.",
  context: "Sie nehmen an einem Sch\u00fcler-Vortrag zum Tag der Umwelt teil.",
  questions: [
    {
      id: 11,
      statement: "Wer hat den Umwelttag vorbereitet?",
      options: {
        a: "Die Lehrer und Lehrerinnen.",
        b: "Sch\u00fcler aus den Klassen 8 und 9.",
        c: "Sch\u00fcler und Lehrer.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Zu den Themen des Umwelttages geh\u00f6ren auch ...",
      options: {
        a: "Heizung und Ern\u00e4hrung.",
        b: "Recycling und M\u00fcll.",
        c: "Strom und Elektroautos.",
      },
      correct: "a",
    },
    {
      id: 13,
      statement: "Wie viele Menschen in Deutschland haben ein Auto?",
      options: {
        a: "Ein gro\u00dfer Teil.",
        b: "Jeder Dritte.",
        c: "Die H\u00e4lfte.",
      },
      correct: "c",
    },
    {
      id: 14,
      statement: "Wie soll das Pausenbrot eingepackt sein?",
      options: {
        a: "In Butterbrotpapier.",
        b: "In einer Butterbrotdose.",
        c: "In Plastikfolie.",
      },
      correct: "b",
    },
    {
      id: 15,
      statement: "Wer den PC nicht mehr benutzt, soll ...",
      options: {
        a: "die Fernbedienung ausmachen.",
        b: "auf Wartebetrieb stellen.",
        c: "den Stecker ziehen.",
      },
      correct: "c",
    },
  ],
};
