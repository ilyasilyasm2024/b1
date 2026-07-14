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

export const module4Schreiben: SchreibenData = {
  module: 4,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Ihr Hobby ist Fotografieren und Sie nehmen an einer Fotoausstellung teil. Ein Freund / Eine Freundin konnte bis jetzt nicht kommen, weil er/sie krank war. Schreiben Sie eine pers\u00f6nliche Nachricht.",
      points: [
        "Beschreiben Sie die Ausstellung (Ort, Thema, Teilnehmer).",
        "Begr\u00fcnden Sie: Hat sich die Teilnahme bisher gelohnt? Warum (nicht)?",
        "Machen Sie einen Vorschlag f\u00fcr einen gemeinsamen Besuch der Ausstellung.",
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
        "Sie haben in einer Zeitschrift einen Artikel zum Thema \u201eFremdsprachen\u201c gelesen. Im Online-G\u00e4stebuch der Zeitschrift finden Sie folgende Meinung:",
      points: [
        "Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter).",
      ],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eMan h\u00f6rt immer wieder, wie wichtig Fremdsprachenkenntnisse, besonders im vereinten Europa, sind. Warum muss man aber schon als Kind mehr als eine Fremdsprache lernen? Die Sch\u00fcler haben doch sowieso schon ein viel zu volles Programm und genug Stress. Ich finde es viel wichtiger, dass Kinder mehr Freizeit f\u00fcr ihre Interessen haben.\u201c \u2014 Kevin, Montag, 15. November, 23:02",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Sie haben am Freitag einen Termin mit einer fr\u00fcheren Kollegin, Frau Kirsten. Leider k\u00f6nnen Sie nicht kommen.",
      points: [
        "Schreiben Sie Frau Kirsten. Erkl\u00e4ren Sie, warum Sie nicht kommen k\u00f6nnen, und schlagen Sie einen neuen Termin vor.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
