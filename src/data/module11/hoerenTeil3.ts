export interface HoerenTeil3Question {
  id: number;
  statement: string;
  correct: "richtig" | "falsch";
}

export interface HoerenTeil3Data {
  module: number;
  part: string;
  instruction: string;
  context: string;
  questions: HoerenTeil3Question[];
}

export const module11HoerenTeil3: HoerenTeil3Data = {
  module: 11,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie warten an einer Bushaltestelle auf den Bus und h\u00f6ren, wie sich ein Mann und eine Frau \u00fcber den Umwelttag an einer Schule unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Der Umwelttag war dieses Jahr nur f\u00fcr Sch\u00fcler und Lehrer.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Nils m\u00f6chte ein neues, umweltfreundlicheres Motorrad haben.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Am Nachmittag haben nicht viele Sch\u00fcler mitgemacht.",
      correct: "falsch",
    },
    {
      id: 19,
      statement: "Am Morgen haben die Sch\u00fcler mit Kindern gespielt.",
      correct: "falsch",
    },
    {
      id: 20,
      statement: "Frau Nowak hat Fotos vom Umwelttag gemacht.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Ein Radioreporter hat mit Nils gesprochen.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Nils ist der Sohn von Herrn Kr\u00f6ger.",
      correct: "richtig",
    },
  ],
};
