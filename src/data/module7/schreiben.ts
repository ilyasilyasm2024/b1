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

export const module7Schreiben: SchreibenData = {
  module: 7,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie haben gestern in einem Einkaufszentrum zuf\u00e4llig einen Fu\u00dfballspieler Ihrer Lieblingsmannschaft gesehen und ihn angesprochen. Sie wollen nat\u00fcrlich sofort Ihrem Freund / Ihrer Freundin davon erz\u00e4hlen.",
      points: [
        "Beschreiben Sie das Treffen.",
        "Begr\u00fcnden Sie: Warum wollen Sie jetzt Mitglied im Fan-Club der Mannschaft werden?",
        "Schlagen Sie vor, gemeinsam ein Spiel der Mannschaft zu sehen.",
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
        "Sie haben im Radio eine Diskussionssendung zum Thema \u201eRauchen\u201c geh\u00f6rt. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eRauchen schadet der Gesundheit. Ich glaube, das ist sogar den Rauchern klar. Jeder kann aber tun, was er will. Es geht letztendlich um sein eigenes Leben. Hauptsache ist, dass man R\u00fccksicht auf die anderen nimmt.\u201c \u2014 Stefan, Do. 21.01., 17:23 Uhr",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "F\u00fcr Ihre Reise nach Hamburg haben Sie eine pers\u00f6nliche Stadtf\u00fchrung gebucht. Als Treffpunkt war der Hauptbahnhof verabredet, aber nun m\u00f6chten Sie lieber, dass Ihr Stadtf\u00fchrer Andreas Sie an Ihrem Hotel abholt.",
      points: [
        "Schreiben Sie an Andreas. Entschuldigen Sie sich h\u00f6flich und erkl\u00e4ren Sie, warum Sie den Treffpunkt \u00e4ndern m\u00f6chten.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
