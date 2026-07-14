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

export const module2Sprechen: SprechenData = {
  module: 2,
  part: "Sprechen",
  teil1: {
    title: "Teil 1 – Gemeinsam etwas planen",
    instruction:
      "Ihre Freundin aus dem Deutschkurs hat bald Geburtstag. Sie haben mit anderen zusammen vor, an ihrem Geburtstag eine Überraschungsparty zu machen. Dafür müssen Sie einiges organisieren und auch zusammen überlegen, was Sie Ihrer Freundin zum Geburtstag schenken.",
    topic: "Party organisieren und Geschenk aussuchen",
    points: [
      "Wann feiern?",
      "Wo feiern?",
      "Was mitbringen? (z.B. Essen)",
      "Was schenken?",
    ],
  },
  teil2A: {
    title: "Teil 2 – Ein Thema präsentieren (Kandidat A)",
    instruction:
      "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: 'Ist Lernen mit einem Partner motivierender? – \u201EKeine Lust zum Lernen!\u201C',
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
        content: '\u201EKeine Lust zum Lernen!\u201C\nIst Lernen mit einem Partner motivierender?',
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "DIE ROLLE VON LERNEN UND PRÜFUNGEN IN MEINEM HEIMATLAND",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERSÖNLICHEN ERFAHRUNGEN",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "VOR- UND NACHTEILE DES GEMEINSAMEN LERNENS & MEINE MEINUNG",
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
    topic: 'Alltag mit oder ohne Fernsehen? \u2013 \u201EAber jetzt kommt doch meine Lieblingssendung!\u201C',
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.",
        content: '\u201EAber jetzt kommt doch meine Lieblingssendung!\u201C\nAlltag mit oder ohne Fernsehen?',
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERSÖNLICHEN ERFAHRUNGEN",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "FERNSEHEN IN MEINEM HEIMATLAND",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "FERNSEHEN PRO UND CONTRA & MEINE MEINUNG",
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
