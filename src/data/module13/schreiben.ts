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

export const module13Schreiben: SchreibenData = {
  module: 13,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Bald ist Weihnachten und Sie finden es wie immer schwierig zu entscheiden, was Sie Ihrem Vater schenken sollen. Sie schreiben deshalb einer Freundin / einem Freund.",
      points: [
        "Beschreiben Sie, was Ihrem Vater gef\u00e4llt und was er gerne macht.",
        "Machen Sie Vorschl\u00e4ge f\u00fcr m\u00f6gliche Geschenke und bitten Sie Ihre Freundin / Ihren Freund um Rat.",
        "Begr\u00fcnden Sie, warum es so schwierig ist, f\u00fcr ihn ein passendes Geschenk zu finden.",
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
        "Sie haben im Radio eine Diskussionssendung zum Thema \u201eSinn von B\u00fcrgerinitiativen\u201c geh\u00f6rt. Im Online-G\u00e4stebuch der Sendung finden Sie folgende Meinung:",
      points: ["Schreiben Sie nun Ihre Meinung (circa 80 W\u00f6rter)."],
      hints: [
        "G\u00e4stebuch-Eintrag: \u201eIn meiner Nachbarschaft soll ein Parkplatz gebaut werden. Viele Leute sind nun dagegen. Was tun sie? Sie gr\u00fcnden eine B\u00fcrgerinitiative und fordern, dass der Parkplatz in einem anderen Stadtteil gebaut wird. Das ist in meinen Augen Egoismus. Und \u00fcberhaupt, warum wird man nur dann aktiv, wenn einen etwas st\u00f6rt?\u201c",
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "Sie brauchen einen Elektriker, aber als Sie zum Gesch\u00e4ft von Herrn Walter kommen, ist er nicht da. Deshalb hinterlassen Sie ihm eine Nachricht.",
      points: [
        "Schreiben Sie an den Elektriker. Beschreiben Sie kurz Ihr Problem und bitten Sie ihn h\u00f6flich, sich zu melden.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 W\u00f6rter).",
        "Vergessen Sie nicht die Anrede und den Gru\u00df am Schluss.",
      ],
    },
  ],
};
