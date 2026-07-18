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

export const module12Schreiben: SchreibenData = {
  module: 12,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Ihr Bruder hat sich ein Tattoo auf seinem Arm machen lassen. Sie \u00fcberlegen sich, ob ein Tattoo auch f\u00fcr Sie eine gute Idee w\u00e4re. Dazu m\u00f6chten Sie aber auch noch die Meinung Ihrer besten Freunde/Freundinnen haben.",
      points: [
        "Beschreiben Sie: Wie sieht das Tattoo Ihres Bruders aus? Wie kam er auf die Idee?",
        "Begr\u00fcnden Sie: Warum m\u00f6chten Sie auch ein Tattoo?",
        "Machen Sie Vorschl\u00e4ge f\u00fcr Ihr Tattoo. Fragen Sie auch nach der Meinung Ihrer Freunde/Freundinnen.",
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
        "Sie haben im Radio eine Diskussionssendung zum Thema \u201eUrlaub mal anders: freiwillig arbeiten\u201c geh\u00f6rt. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eVorigen Sommer war ich in einem Workcamp in Italien. Da habe ich mit 19 anderen Jugendlichen aus ganz Europa an einem kleinen Weg in den Bergen gearbeitet. Das hat mir gro\u00dfen Spa\u00df gemacht, denn es war eine tolle Gelegenheit, ein anderes Land und viele junge Leute kennenzulernen. Und ganz wichtig: Ich habe in den Ferien etwas Sinnvolles gemacht.\u201c",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Das Team eines Schauspieler-Castings, an dem Sie erfolglos teilgenommen haben, l\u00e4dt Sie zu einer Abschiedsparty aller Teilnehmer ein.",
      points: [
        "Schreiben Sie an das Casting-Team. Lehnen Sie h\u00f6flich ab und erkl\u00e4ren Sie, warum Sie die Einladung nicht annehmen wollen.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
