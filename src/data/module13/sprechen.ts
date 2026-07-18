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

export const module13Sprechen: SprechenData = {
  module: 13,
  part: "Sprechen",
  teil1: {
    title: "Teil 1 \u2013 Gemeinsam etwas planen",
    instruction:
      "In zwei Wochen wird der B\u00fcrgermeister den Jugendclub in Ihrer Stadt besuchen. Sie m\u00f6chten ihn nicht nur empfangen, sondern auch ein Interview mit ihm machen. \u00dcberlegen Sie, was Sie organisieren m\u00fcssen. Sprechen Sie \u00fcber die Punkte unten, machen Sie Vorschl\u00e4ge und reagieren Sie auf die Vorschl\u00e4ge Ihres Gespr\u00e4chspartners / Ihrer Gespr\u00e4chspartnerin. Planen und entscheiden Sie gemeinsam, was Sie tun m\u00f6chten.",
    topic: "Den Empfang des B\u00fcrgermeisters und das Interview planen",
    points: [
      "Wie begr\u00fc\u00dfen?",
      "Fotos machen?",
      "Fragen sammeln (Vorschl\u00e4ge? Bis wann?)",
      "Fragen stellen (Wie viele? Wer?)",
    ],
  },
  teil2A: {
    title: "Teil 2 \u2013 Ein Thema pr\u00e4sentieren (Kandidat A)",
    instruction:
      "Sie sollen Ihren Zuh\u00f6rern ein aktuelles Thema pr\u00e4sentieren. Dazu finden Sie hier f\u00fcnf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: "Sollten Sch\u00fcler jobben?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erkl\u00e4ren Sie den Inhalt und die Struktur Ihrer Pr\u00e4sentation.",
        content: "Sollten Sch\u00fcler neben der Schule jobben?",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERS\u00d6NLICHEN ERFAHRUNGEN",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "SCH\u00dcLERJOBS IN MEINEM HEIMATLAND",
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
  teil2B: {
    title: "Teil 2 \u2013 Ein Thema pr\u00e4sentieren (Kandidat B)",
    instruction:
      "Sie sollen Ihren Zuh\u00f6rern ein aktuelles Thema pr\u00e4sentieren. Dazu finden Sie hier f\u00fcnf Folien. Folgen Sie den Anweisungen links und schreiben Sie Ihre Notizen und Ideen rechts daneben.",
    topic: "Studium oder Berufsausbildung?",
    folien: [
      {
        step: "Stellen Sie Ihr Thema vor. Erkl\u00e4ren Sie den Inhalt und die Struktur Ihrer Pr\u00e4sentation.",
        content: "Studium oder Berufsausbildung \u2013 was soll ich nach der Schule machen?",
      },
      {
        step: "Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.",
        content: "MEINE PERS\u00d6NLICHEN ERFAHRUNGEN",
      },
      {
        step: "Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.",
        content: "WORNACH SICH JUGENDLICHE IN MEINEM HEIMATLAND ENTSCHEIDEN",
      },
      {
        step: "Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.",
        content: "STUDIUM UND BERUFSAUSBILDUNG IM VERGLEICH & MEINE MEINUNG",
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
