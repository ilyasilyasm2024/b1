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

export const module3Sprechen: SprechenData = {
  module: 3,
  part: "Sprechen",
  teil1: {
    title: "Teil 1 – Gemeinsam etwas planen",
    instruction:
      "Ihr Deutschkurs ist bald zu Ende. Sie und Ihre Kursteilnehmer möchten zusammen für die Abschiedsparty kochen. Es kommen etwa 30 Personen. Planen Sie gemeinsam die Kochaktion.",
    topic: "Kochaktion für die Abschiedsparty planen",
    points: [
      "Was kochen? (Essen? Süßes?)",
      "Wo und wann?",
      "Was besorgen?",
      "Wer übernimmt was?",
    ],
  },
  teil2A: {
    title: "Teil 2 – Ein Thema präsentieren (Kandidat A)",
    instruction:
      "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: "Sollen Jugendliche mit Freunden verreisen oder mit ihren Eltern?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
        content: "Sollen Jugendliche mit Freunden verreisen oder mit ihren Eltern?",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "BEDEUTUNG VON REISEN IN MEINEM HEIMATLAND",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERSÖNLICHEN ERFAHRUNGEN",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "VOR- UND NACHTEILE DES REISENS MIT FREUNDEN & MEINE MEINUNG",
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
    topic: "Urlaub am Meer oder in den Bergen?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
        content: "Urlaub am Meer oder in den Bergen?",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERSÖNLICHEN ERFAHRUNGEN",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "WIE VERBRINGEN DIE LEUTE IN MEINEM HEIMATLAND DEN URLAUB",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "VOR- UND NACHTEILE EINES URLAUBS IN DER NATUR & MEINE MEINUNG",
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
