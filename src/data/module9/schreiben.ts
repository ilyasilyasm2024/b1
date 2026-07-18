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

export const module9Schreiben: SchreibenData = {
  module: 9,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie mussten wegen einer Sportverletzung zwei Wochen im Bett bleiben und haben eine besorgte Nachricht von Ihrem Freund / Ihrer Freundin erhalten, weil er/sie so lange nichts von Ihnen geh\u00f6rt hat.",
      points: [
        "Beschreiben Sie: Wie haben Sie sich verletzt?",
        "Begr\u00fcnden Sie: Warum hatten Sie keinen Kontakt zu Ihrem Freund / Ihrer Freundin?",
        "Machen Sie einen Vorschlag f\u00fcr ein Treffen.",
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
        "Sie haben im Radio eine Diskussionssendung zum Thema \u201eWie kann man den richtigen Beruf w\u00e4hlen?\u201c geh\u00f6rt. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eIch finde, die Berufswahl ist eine sehr wichtige Entscheidung und deshalb braucht man dabei Hilfe und Beratung. Ich habe mit meinen Eltern dar\u00fcber diskutiert. Das war f\u00fcr mich eine gro\u00dfe Hilfe. Denn es gen\u00fcgt nicht, dass der Beruf einem Spa\u00df macht. Ganz wichtig ist, dass man sp\u00e4ter auch eine Arbeit finden kann.\u201c \u2014 Alexander, Fr. 11.05., 19:49 Uhr",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Sie sind normalerweise t\u00e4glich bis 16 Uhr im B\u00fcro. Diesen Montag m\u00f6chten Sie aber eine Stunde fr\u00fcher gehen.",
      points: [
        "Schreiben Sie an Ihren Chef, Herrn B\u00e4uerle. Beschreiben Sie Ihr Problem und bitten Sie h\u00f6flich um Erlaubnis.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
