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

export const module10Schreiben: SchreibenData = {
  module: 10,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "In Ihrer Stadt findet bald ein gro\u00dfes Fest statt. Sie m\u00f6chten mit Ihren Freunden hingehen.",
      points: [
        "Informieren Sie Ihre Freunde \u00fcber das Fest und laden Sie sie ein.",
        "Erz\u00e4hlen Sie, was es auf dem Fest geben wird.",
        "Schlagen Sie einen Treffpunkt vor.",
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
        "Sie haben im Fernsehen eine Diskussionssendung zum Thema \u201eBehindertensport in unserer Gesellschaft\u201c gesehen. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meldung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eIch finde, Behindertensport m\u00fcsste h\u00e4ufiger im Fernsehen gezeigt werden. Es ist mir absolut klar, dass dieser Sport nicht so popul\u00e4r ist. Aber es ist wirklich faszinierend, was f\u00fcr Leistungen behinderte Sportler vollbringen k\u00f6nnen. Deshalb verdienen sie unseren Respekt.\u201c \u2014 Manuel, 13.05., 11:51 Uhr",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Herr und Frau Stein haben Ihnen bei der Wohnungssuche geholfen. Sie sind nun vor zwei Tagen in die neue Wohnung eingezogen.",
      points: [
        "Schreiben Sie an Ihre Bekannten. Bedanken Sie sich h\u00f6flich f\u00fcr die Hilfe und laden Sie sie zu sich nach Hause ein.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
