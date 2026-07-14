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

export const module3HoerenTeil3: HoerenTeil3Data = {
  module: 3,
  part: "Hören Teil 3",
  instruction:
    "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sind an einer Bushaltestelle in einem Dorf bei Luzern und hören, wie sich ein Jugendlicher mit einem Mann über seine Schulprobleme unterhält.",
  questions: [
    {
      id: 16,
      statement: "Am Wochenende ist Timm auf eine Party eingeladen.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Timm hatte immer schon Schwierigkeiten in Mathe.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Leo will seinem Bruder nicht helfen.",
      correct: "falsch",
    },
    {
      id: 19,
      statement: "In Luzern gibt es nur teure Nachhilfeinstitute.",
      correct: "richtig",
    },
    {
      id: 20,
      statement: "Timm kann nicht mit den öffentlichen Verkehrsmitteln fahren.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Philipp will Geld für die Nachhilfe haben.",
      correct: "falsch",
    },
    {
      id: 22,
      statement: "Philipp wird Timm Nachhilfeunterricht geben.",
      correct: "richtig",
    },
  ],
};
