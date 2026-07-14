export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderator" | "juergen" | "anna";
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

export const module2HoerenTeil4: HoerenTeil4Data = {
  module: 2,
  part: "Hören Teil 4",
  instruction:
    "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    'In der Radiosendung „Aktuell" spricht der Moderator mit dem 15-jährigen Jürgen Mayr und der Lehrerin Frau Anna Unterberger über das Thema: „Wer sind die Skater? Welche Rolle spielen sie heute?"',
  speakers: [
    { key: "moderator", label: "Moderator" },
    { key: "juergen", label: "Jürgen Mayr" },
    { key: "anna", label: "Anna Unterberger" },
  ],
  example: {
    id: 0,
    statement: "Ein Skater sollte sich nicht vor Schmerzen fürchten.",
    correct: "juergen",
  },
  questions: [
    {
      id: 23,
      statement: "Viele Eltern sind der Meinung, dass Skaten nicht ungefährlich ist.",
      correct: "moderator",
    },
    {
      id: 24,
      statement: "Skater-Kleidung kann man in vielen Geschäften erhalten.",
      correct: "anna",
    },
    {
      id: 25,
      statement: "Modische Kleidung spielt beim Skateboard-Fahren keine große Rolle.",
      correct: "juergen",
    },
    {
      id: 26,
      statement: "Mode bedeutet nicht nur Kleidung.",
      correct: "anna",
    },
    {
      id: 27,
      statement: "Viele Skater hören Hip-Hop-Musik.",
      correct: "juergen",
    },
    {
      id: 28,
      statement: "Die Mehrheit der Jugendlichen mag gern laute Musik.",
      correct: "moderator",
    },
    {
      id: 29,
      statement: "Die Mode des Skateboard-Fahrens wird es nicht lange geben.",
      correct: "anna",
    },
    {
      id: 30,
      statement: "Die Meinung der Erwachsenen ist unwichtig.",
      correct: "juergen",
    },
  ],
};
