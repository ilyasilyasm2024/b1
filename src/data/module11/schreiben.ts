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

export const module11Schreiben: SchreibenData = {
  module: 11,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie waren bei Ihren neuen ausl\u00e4ndischen Nachbarn zum Essen eingeladen. Der Abend war besonders sch\u00f6n. Deshalb m\u00f6chten Sie Ihrem Freund / Ihrer Freundin davon berichten.",
      points: [
        "Beschreiben Sie, wie der Abend war und was es zum Essen gab.",
        "Was fanden Sie besonders gut und was nicht? Begr\u00fcnden Sie Ihre Meinung.",
        "Erz\u00e4hlen Sie, wie Sie den Nachbarn f\u00fcr die Einladung danken wollen, und bitten Sie Ihren Freund / Ihre Freundin um seine/ihre Meinung.",
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
        "Sie haben im Fernsehen eine Diskussionssendung zum Thema \u201eKomatrinken \u2013 die neue Jugendmode\u201c gesehen. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eNat\u00fcrlich ist es schlimm, wenn Jugendliche wegen Alkoholvergiftung ins Krankenhaus m\u00fcssen. Trinkt man aber wenig, ist Alkohol nicht gef\u00e4hrlich. Er hilft sogar gegen Stress, denn mit einem Glas Bier kann man sich entspannen.\u201c \u2014 Fabian, 21.01., 19:03 Uhr",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Professor Klage sucht Studenten, die ihm helfen, f\u00fcr eine Studie statistische Daten zu sammeln.",
      points: [
        "Schreiben Sie an Herrn Professor Klage. Teilen Sie ihm Ihr Interesse an dem Job mit und erkundigen Sie sich h\u00f6flich nach Einzelheiten.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
