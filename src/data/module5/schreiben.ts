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

export const module5Schreiben: SchreibenData = {
  module: 5,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie schreiben dem deutschen Austauschsch\u00fcler / der deutschen Austauschsch\u00fclerin, der/die n\u00e4chsten Monat eine Woche lang bei Ihnen leben wird.",
      points: [
        "Begr\u00fcnden Sie: Warum finden Sie es toll, dass der Austauschsch\u00fcler / die Austauschsch\u00fclerin kommt?",
        "Beschreiben Sie: Wie ist Ihre Wohnung und wo wird er/sie schlafen?",
        "Schreiben Sie, was er/sie unbedingt mitbringen soll und warum.",
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
        "Sie haben im Radio eine Diskussionssendung zum Thema \u201eGibt es noch Zeitungsleser?\u201c geh\u00f6rt. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: [
        "Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter).",
      ],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eIch informiere mich nicht nur durch das Internet, sondern lese auch mindestens einmal pro Woche Zeitung. Seitdem ich das mache, habe ich eine eigene Meinung. Jetzt kann ich auch mitreden, wenn mein Freund mit seinen Freunden \u00fcber Politik spricht.\u201c \u2014 Eva, Mo. 25.03., 17:31",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Sie suchen einen Ferienjob und lesen im Jugendzentrum eine Anzeige. Frau Gehrmann braucht jemanden, der ihr im Garten hilft. Da Frau Gehrmann nicht zu Hause ist, wollen Sie ihr eine Nachricht in den Briefkasten werfen.",
      points: [
        "Schreiben Sie an Frau Gehrmann. Erkl\u00e4ren Sie h\u00f6flich, warum Sie sich f\u00fcr den Job interessieren und wie man Sie erreichen kann.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
