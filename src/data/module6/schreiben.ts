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

export const module6Schreiben: SchreibenData = {
  module: 6,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Ihre Nachbarin muss f\u00fcr zwei Tage in eine andere Stadt fahren. Sie haben ihr versprochen, auf ihre 7-j\u00e4hrige Tochter aufzupassen. \u00dcberlegen Sie, was Sie planen m\u00fcssen.",
      points: [
        "Wie betreuen? (zur Schule bringen, Hausaufgaben, ...)",
        "Was essen? (Fr\u00fchst\u00fcck, Pausenbrot, ...)",
        "Schlafen gehen? Was bei Krankheit tun? (Medikamente, Arzt, ...)",
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
        "Sie haben im Fernsehen eine Diskussionssendung zum Thema \u201eExtremsportarten werden immer beliebter\u201c gesehen. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eF\u00fcr mich bedeuten Extremsportarten Abenteuer pur. Es muss ein tolles Gef\u00fchl sein, von einer Br\u00fccke zu springen. Leider erlauben mir meine Eltern nicht, das auszuprobieren. Sie finden Extremsport zu gef\u00e4hrlich. Dabei sorgt die moderne Technik f\u00fcr absolute Sicherheit.\u201c \u2014 Alex, 08.11., 22:07 Uhr",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Als Hausaufgabe sollen Sie f\u00fcr Ihren Deutschkurs einen Text schreiben. Sie k\u00f6nnen n\u00e4chste Woche aber nicht zum Unterricht kommen.",
      points: [
        "Schreiben Sie an Frau Reuter, Ihre Kursleiterin. Erkl\u00e4ren Sie h\u00f6flich Ihr Problem und schreiben Sie, wann und wie Sie die Hausaufgabe schicken werden.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
