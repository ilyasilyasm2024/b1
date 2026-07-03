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

export const module1HoerenTeil3: HoerenTeil3Data = {
  module: 1,
  part: "Hören Teil 3",
  instruction:
    "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie warten an einer Bushaltestelle auf den Bus in die Stadt und hören, wie sich zwei Jugendliche über eine Geburtstagsparty unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Selina will wegen ihrer Geburtstagsparty in die Stadt fahren.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Selina will bei sich zu Hause keine Party machen.",
      correct: "richtig",
    },
    {
      id: 18,
      statement: "Selinas Eltern sind gegen die Party.",
      correct: "falsch",
    },
    {
      id: 19,
      statement: "Für Selinas Berufswunsch ist die Reise nach England wichtig.",
      correct: "richtig",
    },
    {
      id: 20,
      statement: "Jan hat dieselbe Meinung wie Selinas Eltern.",
      correct: "richtig",
    },
    {
      id: 21,
      statement: "Selina mag Pascal nicht.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Pascals Party hat viel Geld gekostet.",
      correct: "falsch",
    },
  ],
};
