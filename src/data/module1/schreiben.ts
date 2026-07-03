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

export const module1Schreiben: SchreibenData = {
  module: 1,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Ihr Cousin, der in einer anderen Stadt wohnt, hat gerade das Abitur mit einer sehr guten Note bestanden und möchte das mit einer großen Party feiern.",
      points: [
        "Bedanken Sie sich für die Einladung und sagen Sie zu.",
        "Machen Sie Vorschläge, wie Sie bei den Partyvorbereitungen helfen könnten.",
        "Schreiben Sie, wann Sie kommen und wie lange Sie bleiben werden.",
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
        'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Freundschaft" gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:',
      points: [
        "Schreiben Sie nun Ihre Meinung (circa 80 Wörter).",
      ],
      hints: [
        'Gästebuch-Eintrag: "Ich habe mich oft gefragt, ob es überhaupt wahre Freundschaften gibt. Leider haben mich „meine besten Freundinnen" mehrmals enttäuscht. Anfangs war ich immer traurig, jetzt weiß ich, dass ein Leben ohne Freunde auch möglich ist – dank Internet." — Margarethe, 10.03., 19:27 Uhr',
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "In Ihrem Deutschkurs wurde gestern ein Test geschrieben, aber Sie waren nicht da.",
      points: [
        "Schreiben Sie an Ihren Kursleiter, Herrn Zeider. Entschuldigen Sie sich höflich für Ihr Fehlen und bitten Sie um einen Termin, an dem Sie den Test nachschreiben können.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 Wörter).",
        "Vergessen Sie nicht die Anrede und den Gruß am Schluss.",
      ],
    },
  ],
};
