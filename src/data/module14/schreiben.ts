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

export const module14Schreiben: SchreibenData = {
  module: 14,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie haben zum ersten Mal Ihre Schwester besucht, die in einer Gro\u00dfstadt studiert, und schreiben zwei Freunden / zwei Freundinnen dar\u00fcber.",
      points: [
        "Beschreiben Sie: Wie und wo wohnt Ihre Schwester?",
        "Erz\u00e4hlen Sie: Was haben Sie w\u00e4hrend Ihres Aufenthalts unternommen?",
        "Begr\u00fcnden Sie: Warum finden Sie es (nicht) gut, in einer Gro\u00dfstadt zu studieren?",
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
        "Sie haben im Fernsehen eine Diskussionssendung zum Thema \u201eStars \u2013 unsere Idole?\u201c gesehen. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag von Emily: \u201eSicher haben Stars einen Fanclub, der sie toll findet und bewundert. Ich habe auch einen Lieblingsschauspieler und eine Lieblingss\u00e4ngerin. Aber die sind f\u00fcr mich keine Idole, denn sie sind auch nur Menschen mit Fehlern und Schw\u00e4chen. Au\u00dferdem erf\u00e4hrt man immer wieder von Skandalen mit Stars. Und das finde ich \u00fcberhaupt nicht gut.\u201c",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Sie spielen in einer Band und m\u00f6chten einmal in der Woche einen Raum des Jugendzentrums f\u00fcr Proben benutzen. Herrn Bauer, den Leiter des Jugendzentrums, kennen Sie gut, weil Sie im Jugendzentrum schon Konzerte gegeben haben.",
      points: [
        "Schreiben Sie an Herrn Bauer. Bitten Sie ihn h\u00f6flich um die Erlaubnis und berichten Sie, warum Sie nicht mehr dort proben k\u00f6nnen, wo Sie bisher geprobt haben.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
