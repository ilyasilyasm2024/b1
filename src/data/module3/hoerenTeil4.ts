export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "journalist" | "anna" | "kim";
}

export interface HoerenTeil4Data {
  module: number;
  part: string;
  instruction: string;
  context: string;
  speakers: { key: string; label: string }[];
  example: HoerenTeil4Question;
  questions: HoerenTeil4Question[];
}

export const module3HoerenTeil4: HoerenTeil4Data = {
  module: 3,
  part: "Hören Teil 4",
  instruction:
    "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Ein Journalist diskutiert mit Anna Lorenz, der Leiterin des Seniorenheims Abendruhe, und der 22-jährigen Studentin Kim Köhler über das Modell Generationen-WG.",
  speakers: [
    { key: "journalist", label: "Journalist" },
    { key: "anna", label: "Anna Lorenz" },
    { key: "kim", label: "Kim Köhler" },
  ],
  example: {
    id: 0,
    statement: "Junge und Alte können gut zusammenleben.",
    correct: "journalist",
  },
  questions: [
    {
      id: 23,
      statement: "In der Stadt gibt es nicht viele Wohnungen für Studenten.",
      correct: "kim",
    },
    {
      id: 24,
      statement: "Viele Studenten möchten am Projekt 'Wohnen für Hilfe' teilnehmen.",
      correct: "anna",
    },
    {
      id: 25,
      statement: "Die Apartments der Studenten sind alle gleich.",
      correct: "journalist",
    },
    {
      id: 26,
      statement: "Die Studenten übernehmen verschiedene Aufgaben im Heim.",
      correct: "anna",
    },
    {
      id: 27,
      statement: "Die Studenten helfen etwa acht Stunden pro Monat im Heim.",
      correct: "kim",
    },
    {
      id: 28,
      statement: "Der Kontakt mit den Heimbewohnern ist für die Studenten eine schöne Erfahrung.",
      correct: "kim",
    },
    {
      id: 29,
      statement: "Informationen allein reichen für die Tätigkeit im Altersheim nicht aus.",
      correct: "anna",
    },
    {
      id: 30,
      statement: "Die älteren Bewohner des Altenheims freuen sich über das Zusammenleben mit den jungen Leuten.",
      correct: "journalist",
    },
  ],
};
