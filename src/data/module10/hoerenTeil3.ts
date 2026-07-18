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

export const module10HoerenTeil3: HoerenTeil3Data = {
  module: 10,
  part: "H\u00f6ren Teil 3",
  instruction:
    "Sie h\u00f6ren nun ein Gespr\u00e4ch. Sie h\u00f6ren das Gespr\u00e4ch einmal. Dazu l\u00f6sen Sie sieben Aufgaben. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22. Dazu haben Sie 60 Sekunden Zeit.",
  context:
    "Sie sind an einer Stra\u00dfenbahnhaltestelle und h\u00f6ren, wie sich eine \u00e4ltere Frau mit einem jungen Mann \u00fcber ihr Leben als Rentnerin unterh\u00e4lt.",
  questions: [
    {
      id: 16,
      statement: "Simon und Frau Pichler waren Kollegen.",
      correct: "richtig",
    },
    {
      id: 17,
      statement: "Frau Pichler war froh, als sie in Rente gehen konnte.",
      correct: "richtig",
    },
    {
      id: 18,
      statement: "Zu den Vereinstreffen k\u00f6nnen nur Mitglieder kommen.",
      correct: "falsch",
    },
    {
      id: 19,
      statement:
        "Simon hat Frau Pichler vor einigen Tagen angerufen, aber nicht erreicht.",
      correct: "falsch",
    },
    {
      id: 20,
      statement:
        "Der Buchladen will regelm\u00e4\u00dfig B\u00fcchernachmittage f\u00fcr Kinder organisieren.",
      correct: "falsch",
    },
    {
      id: 21,
      statement:
        "Frau Pichler will auf keinen Fall bei den Kindernachmittagen mitmachen.",
      correct: "richtig",
    },
    {
      id: 22,
      statement: "Der Basar war ein voller Erfolg.",
      correct: "falsch",
    },
  ],
};
