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

export const module14HoerenTeil3: HoerenTeil3Data = {
  module: 14,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie fahren mit der Stra\u00dfenbahn und h\u00f6ren, wie sich zwei Jugendliche \u2013 Isabella und Jonas \u2013 \u00fcber die Ferien unterhalten.",
  questions: [
    {
      id: 16,
      statement: "Isabella hat von ihren Eltern ein neues Handy bekommen.",
      correct: "falsch",
    },
    {
      id: 17,
      statement: "Isabella f\u00e4hrt gern auf die Chalkidiki.",
      correct: "richtig",
    },
    {
      id: 18,
      statement: "Isabella mag Andreas.",
      correct: "falsch",
    },
    {
      id: 19,
      statement:
        "Jonas ist dieses Jahr allein mit seiner Schwester verreist.",
      correct: "richtig",
    },
    {
      id: 20,
      statement:
        "Isabellas Eltern sind nicht so sportlich wie die Eltern von Jonas.",
      correct: "falsch",
    },
    {
      id: 21,
      statement: "Jonas findet Ferien am Strand langweilig.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Isabella zeigt Jonas Fotos auf ihrem Handy.",
      correct: "falsch",
    },
  ],
};
