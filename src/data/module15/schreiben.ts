export interface SchreibenAufgabe {
  id: number;
  title: string;
  time: string;
  wordCount: number;
  instruction: string;
  points: string[];
  hints?: string[];
}

export interface SchreibenData {
  module: number;
  part: string;
  aufgaben: SchreibenAufgabe[];
}

export const module15Schreiben: SchreibenData = {
  module: 15,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie m\u00f6chten einen Freund / eine Freundin, der/die Ihnen in einer schwierigen Situation geholfen hat, zu einem Ausflug einladen.",
      points: [
        "Begr\u00fcnden Sie: Warum war seine/ihre Hilfe so wichtig?",
        "Beschreiben Sie: Wohin geht der Ausflug und was haben Sie geplant?",
        "Erkl\u00e4ren Sie, warum er/sie auf keinen Fall ablehnen kann.",
      ],
      hints: [
        "Schreiben Sie eine pers\u00f6nliche Nachricht (circa 80 W\u00f6rter).",
        "Schreiben Sie etwas zu allen drei Punkten.",
        "Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).",
      ],
    },
    {
      id: 2,
      title: "Aufgabe 2",
      time: "25 Minuten",
      wordCount: 80,
      instruction:
        "Sie haben im Internet einen Artikel zum Thema \u201eVegetarische Ern\u00e4hrung\u201c gelesen. Im G\u00e4stebuch der Internetseite finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag von Lina: \u201eIch habe mich f\u00fcr eine vegetarische Ern\u00e4hrung entschieden, weil mir die Tiere leidtun. Meine Mutter behauptet zwar, dass es ungesund ist, kein Fleisch zu essen. Aber Tiere haben auch das Recht auf Leben.\u201c",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Ihr Sohn ist krank und die Kinder\u00e4rztin hat empfohlen, dass er eine Woche zu Hause bleibt. Sie m\u00f6chten seinem Klassenlehrer, Herrn Hackl, Bescheid geben.",
      points: [
        "Schreiben Sie an Herrn Hackl. Entschuldigen Sie h\u00f6flich das Fehlen Ihres Sohnes und informieren Sie ihn, wann er wieder zum Unterricht kommen kann.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
