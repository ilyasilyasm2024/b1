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

export const module6HoerenTeil3: HoerenTeil3Data = {
  module: 6,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sitzen beim Zahnarzt im Wartezimmer und h\u00f6ren, wie sich eine Frau und ein M\u00e4dchen \u00fcber einen Kleidungskauf unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Hanna hat Zahnschmerzen.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Hanna hat sich ein T-Shirt und einen Rock gekauft.",
      correct: "falsch",
    },
    {
      id: 18,
      statement: "Das T-Shirt ist schwarz.",
      correct: "richtig",
    },
    {
      id: 19,
      statement: "Hanna will das T-Shirt nicht umtauschen.",
      correct: "richtig",
    },
    {
      id: 20,
      statement: "Die Mutter schenkt Hanna ein T-Shirt.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Hanna findet den Rock zu teuer.",
      correct: "falsch",
    },
    {
      id: 22,
      statement: "Hanna und ihre Mutter gehen noch in ein anderes Gesch\u00e4ft.",
      correct: "falsch",
    },
  ],
};
