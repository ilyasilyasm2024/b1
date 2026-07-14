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

export const module5Sprechen: SprechenData = {
  module: 5,
  part: "Sprechen",
  teil1: {
    title: "Teil 1 \u2013 Gemeinsam etwas planen",
    instruction:
      "Ihr Deutschkurs endet bald und Sie m\u00fcssen in wenigen Tagen einen schwierigen Test schreiben. Sie m\u00f6chten gemeinsam mit Ihren Mitsch\u00fclern aus dem Deutschkurs daf\u00fcr lernen. Sprechen Sie \u00fcber die Punkte unten, machen Sie Vorschl\u00e4ge und reagieren Sie auf die Vorschl\u00e4ge Ihres Gespr\u00e4chspartners / Ihrer Gespr\u00e4chspartnerin. Planen und entscheiden Sie gemeinsam, was Sie tun m\u00f6chten.",
    topic: "Gruppe organisieren und f\u00fcr den Test lernen",
    points: [
      "Wer mitmachen?",
      "Wo treffen?",
      "Wie oft und wann lernen?",
      "Was lernen? (Wortschatz, Grammatik, ...)",
    ],
  },
  teil2A: {
    title: "Teil 2 \u2013 Ein Thema pr\u00e4sentieren (Kandidat A)",
    instruction:
      "Sie sollen Ihren Zuh\u00f6rern ein aktuelles Thema pr\u00e4sentieren. Dazu finden Sie hier f\u00fcnf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic:
      "Sollen Kinder selbst entscheiden, was sie mit ihrem Taschengeld machen?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erkl\u00e4ren Sie den Inhalt und die Struktur Ihrer Pr\u00e4sentation.",
        content:
          "Sollen Kinder selbst entscheiden, was sie mit ihrem Taschengeld machen?",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERS\u00d6NLICHEN ERFAHRUNGEN",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "TASCHENGELD IN MEINEM HEIMATLAND",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "ARGUMENTE DAF\u00dcR UND DAGEGEN & MEINE MEINUNG",
      },
      {
        step: "Beenden Sie Ihre Pr\u00e4sentation und bedanken Sie sich bei den Zuh\u00f6rern.",
        content: "ABSCHLUSS & DANK",
      },
    ],
  },
  teil2B: {
    title: "Teil 2 \u2013 Ein Thema pr\u00e4sentieren (Kandidat B)",
    instruction:
      "Sie sollen Ihren Zuh\u00f6rern ein aktuelles Thema pr\u00e4sentieren. Dazu finden Sie hier f\u00fcnf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: "Einkaufen im Einkaufszentrum",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erkl\u00e4ren Sie den Inhalt und die Struktur Ihrer Pr\u00e4sentation.",
        content: "Einkaufen im Einkaufszentrum",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERS\u00d6NLICHEN ERFAHRUNGEN",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "EINKAUFEN IN MEINEM HEIMATLAND",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "VOR- UND NACHTEILE & MEINE MEINUNG",
      },
      {
        step: "Beenden Sie Ihre Pr\u00e4sentation und bedanken Sie sich bei den Zuh\u00f6rern.",
        content: "ABSCHLUSS & DANK",
      },
    ],
  },
  teil3: {
    title: "Teil 3 \u2013 \u00dcber ein Thema sprechen",
    instruction:
      "Nach Ihrer Pr\u00e4sentation: Reagieren Sie auf die R\u00fcckmeldung und Fragen der Pr\u00fcfer/-innen und des Gespr\u00e4chspartners / der Gespr\u00e4chspartnerin.",
    points: [
      "Geben Sie eine R\u00fcckmeldung zur Pr\u00e4sentation Ihres Partners / Ihrer Partnerin (z.B. wie Ihnen die Pr\u00e4sentation gefallen hat, was f\u00fcr Sie neu oder besonders interessant war usw.).",
      "Stellen Sie auch eine Frage zur Pr\u00e4sentation Ihres Partners / Ihrer Partnerin.",
    ],
  },
};
