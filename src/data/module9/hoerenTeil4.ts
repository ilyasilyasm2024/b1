export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: "moderator" | "steiner" | "gerber";
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

export const module9HoerenTeil4: HoerenTeil4Data = {
  module: 9,
  part: "H\u00f6ren Teil 4",
  instruction:
    "Sie h\u00f6ren nun eine Diskussion. Sie h\u00f6ren die Diskussion zweimal. Dazu l\u00f6sen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Der Moderator der Radiosendung \u201eAll d\u00e4 Guugg\u00e4r\u201c diskutiert mit Frau Gerber, Mutter von zwei pubertierenden Kindern, und Frau Steiner, Direktorin einer internationalen Sekundarschule, \u00fcber das Thema \u201eJugendgewalt\u201c.",
  speakers: [
    { key: "moderator", label: "Moderator" },
    { key: "steiner", label: "Frau Steiner" },
    { key: "gerber", label: "Frau Gerber" },
  ],
  example: {
    id: 0,
    statement: "Es kann leicht zum Streit unter Jugendlichen kommen.",
    correct: "moderator",
  },
  questions: [
    {
      id: 23,
      statement: "In der Schule hat Gewalt zugenommen.",
      correct: "steiner",
    },
    {
      id: 24,
      statement: "Fehlende Kontrolle von der Familie kann zu Gewalt f\u00fchren.",
      correct: "steiner",
    },
    {
      id: 25,
      statement: "Ausl\u00e4nderkinder machen Probleme.",
      correct: "gerber",
    },
    {
      id: 26,
      statement:
        "Durch die richtige Erziehung kann man mehr erreichen als durch Gesetze.",
      correct: "steiner",
    },
    {
      id: 27,
      statement: "Sport kann sicher gegen Gewalt helfen.",
      correct: "gerber",
    },
    {
      id: 28,
      statement:
        "Das Gesetz unterscheidet zwischen verschiedenen alkoholischen Getr\u00e4nken.",
      correct: "moderator",
    },
    {
      id: 29,
      statement: "Durch ein Verbot kann etwas noch attraktiver werden.",
      correct: "steiner",
    },
    {
      id: 30,
      statement:
        "In der Schule sollten Kinder lernen, mit Konflikten umzugehen.",
      correct: "gerber",
    },
  ],
};
