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

export const module8Schreiben: SchreibenData = {
  module: 8,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Ein Freund / Eine Freundin hat Sie eingeladen, auch dieses Jahr wieder zusammen mit ihm/ihr und seinen/ihren Eltern ins Ferienhaus der Familie zu fahren.",
      points: [
        "Lehnen Sie die Einladung dankend ab und erkl\u00e4ren Sie den Grund.",
        "Beschreiben Sie Ihre eigenen Urlaubspl\u00e4ne.",
        "Fragen Sie nach den Eltern und senden Sie ihnen Gr\u00fc\u00dfe.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 80 W\u00f6rter).",
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
        "Sie haben im Fernsehen eine Diskussionssendung zum Thema \u201eMobbing in der Schule\u201c gesehen. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eIch musste wegen Mobbing die Schule wechseln. Zum Gl\u00fcck habe ich in meiner neuen Schule richtige Freunde gefunden. Aber ich kann nicht vergessen, wie sehr ich gelitten habe. Ich konnte die bl\u00f6den Bemerkungen \u00fcber mein Aussehen nicht mehr h\u00f6ren. Es ist schrecklich, wenn man st\u00e4ndig verletzt wird.\u201c \u2014 Emily, 07.07., 18:49 Uhr",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Der Garten des Jugendzentrums braucht unbedingt neue Pflanzen und richtige Pflege. Sie und Ihre Freunde wollen helfen und deshalb bitten Sie Ihre Biologielehrerin Frau Meyer, die auch den Schulgarten betreut, um Rat.",
      points: [
        "Schreiben Sie an Frau Meyer. Bitten Sie sie h\u00f6flich um Hilfe und erkl\u00e4ren Sie, worum es geht.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
