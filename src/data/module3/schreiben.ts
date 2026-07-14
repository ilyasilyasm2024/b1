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

export const module3Schreiben: SchreibenData = {
  module: 3,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie haben gestern auf dem Weg nach Hause einen kleinen Hund gefunden und ihn mit nach Hause genommen. Schreiben Sie einer Freundin / einem Freund darüber.",
      points: [
        "Wo haben Sie den Hund gefunden?",
        "Warum wollten Sie den Hund zuerst nicht mit nach Hause nehmen? Erklären Sie.",
        "Schlagen Sie Ihrer Freundin / Ihrem Freund vor, Sie zu besuchen.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 80 Wörter).",
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
        'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Mein Umweltschutz" gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:',
      points: [
        "Schreiben Sie nun Ihre Meinung (circa 80 Wörter).",
      ],
      hints: [
        'Gästebuch-Eintrag: "Ich finde, dass jeder Einzelne etwas für die Umwelt tun kann und muss. Ich fahre zum Beispiel mit dem Fahrrad zur Arbeit und kaufe nur regionale Produkte. Wenn alle so denken würden, hätten wir viele Umweltprobleme nicht." — Lena, 28.03., 19:22 Uhr',
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Sie suchen für Ihre Tochter einen Nachhilfelehrer für Chemie. In der Schule Ihrer Tochter haben Sie eine Anzeige von Herrn Seifert gelesen.",
      points: [
        "Schreiben Sie an Herrn Seifert. Stellen Sie sich kurz vor, erklären Sie die Situation Ihrer Tochter und fragen Sie nach dem Preis für die Nachhilfestunden.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 Wörter).",
        "Vergessen Sie nicht die Anrede und den Gruß am Schluss.",
      ],
    },
  ],
};
