export interface SprechenTeil1Data {
  title: string;
  instruction: string;
  topic: string;
  points: string[];
}

export interface SprechenTeil2Folie {
  step: string;
  content: string;
}

export interface SprechenTeil2Data {
  title: string;
  instruction: string;
  topic: string;
  folien: SprechenTeil2Folie[];
}

export interface SprechenTeil3Data {
  title: string;
  instruction: string;
  points: string[];
}

export interface SprechenData {
  module: number;
  part: string;
  teil1: SprechenTeil1Data;
  teil2A: SprechenTeil2Data;
  teil2B: SprechenTeil2Data;
  teil3: SprechenTeil3Data;
}

export const module1Sprechen: SprechenData = {
  module: 1,
  part: "Sprechen",
  teil1: {
    title: "Teil 1 – Gemeinsam etwas planen",
    instruction:
      "Sie möchten mit Ihren Mitschülern aus dem Deutschkurs einen gemeinsamen DVD-Abend organisieren. Überlegen Sie, was Sie alles besprechen müssen. Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Gesprächspartners / Ihrer Gesprächspartnerin. Planen und entscheiden Sie gemeinsam, was Sie tun möchten.",
    topic: "DVD-Abend organisieren",
    points: [
      "Film (Welchen? Auf Deutsch?)",
      "Wo und wann treffen?",
      "Was mitbringen? (Essen? Trinken?)",
      "Hilfe beim Aufräumen (Wer? Was? Wann?)",
    ],
  },
  teil2A: {
    title: "Teil 2 – Ein Thema präsentieren (Kandidat A)",
    instruction:
      "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: "Brauchen wir Fitnessstudios?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
        content: "Brauchen wir Fitnessstudios?",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERSÖNLICHEN ERFAHRUNGEN",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "VOR- UND NACHTEILE VON FITNESSSTUDIOS & MEINE MEINUNG",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "FITNESSSTUDIOS IN MEINEM HEIMATLAND",
      },
      {
        step: "Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.",
        content: "ABSCHLUSS & DANK",
      },
    ],
  },
  teil2B: {
    title: "Teil 2 – Ein Thema präsentieren (Kandidat B)",
    instruction:
      "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: "Brauchen Kinder Kochunterricht?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
        content: "Brauchen Kinder Kochunterricht?",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERSÖNLICHEN ERFAHRUNGEN",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "FÜR UND GEGEN DAS SCHULISCH KOCHEN & MEINE MEINUNG",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "DIE ROLLE VON ESSEN UND KOCHEN IN MEINEM HEIMATLAND",
      },
      {
        step: "Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.",
        content: "ABSCHLUSS & DANK",
      },
    ],
  },
  teil3: {
    title: "Teil 3 – Über ein Thema sprechen",
    instruction:
      "Nach Ihrer Präsentation: Reagieren Sie auf die Rückmeldung und Fragen der Prüfer/-innen und des Gesprächspartners / der Gesprächspartnerin.",
    points: [
      "Geben Sie eine Rückmeldung zur Präsentation Ihres Partners / Ihrer Partnerin (z.B. wie Ihnen die Präsentation gefallen hat, was für Sie neu oder besonders interessant war usw.).",
      "Stellen Sie auch eine Frage zur Präsentation Ihres Partners / Ihrer Partnerin.",
    ],
  },
};
