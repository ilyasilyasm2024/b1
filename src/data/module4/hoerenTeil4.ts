export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderator" | "doris" | "eva";
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

export const module4HoerenTeil4: HoerenTeil4Data = {
  module: 4,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Der Moderator der Radiosendung \u201eAktuelle Themen\u201c diskutiert mit der Modeberaterin Doris Siebert und der 14-j\u00e4hrigen Sch\u00fclerin Eva Martins \u00fcber Mode in unserem Leben.",
  speakers: [
    { key: "moderator", label: "Moderator" },
    { key: "doris", label: "Doris Siebert" },
    { key: "eva", label: "Eva Martins" },
  ],
  example: {
    id: 0,
    statement: "Der Beruf der Modeberaterin ist toll.",
    correct: "doris",
  },
  questions: [
    {
      id: 23,
      statement: "Modeberater informieren die Kunden, wie man Stoffe pflegt.",
      correct: "doris",
    },
    {
      id: 24,
      statement: "Nicht alle Jugendlichen achten auf die Mode.",
      correct: "eva",
    },
    {
      id: 25,
      statement: "In zu sein, kostet viel.",
      correct: "moderator",
    },
    {
      id: 26,
      statement: "F\u00fcr ein modisches Aussehen braucht man nicht unbedingt viel Geld.",
      correct: "doris",
    },
    {
      id: 27,
      statement: "Man kann wegen schlechter Qualit\u00e4t Hautprobleme bekommen.",
      correct: "doris",
    },
    {
      id: 28,
      statement: "Wer Bio auf der Haut will, muss mehr zahlen.",
      correct: "doris",
    },
    {
      id: 29,
      statement: "Kritik an dem Aussehen von Jugendlichen ist nicht selten.",
      correct: "moderator",
    },
    {
      id: 30,
      statement: "So ein Verhalten ist zu erwarten.",
      correct: "doris",
    },
  ],
};
