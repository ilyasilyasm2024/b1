export interface LesenTeil5Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil5Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  questions: LesenTeil5Question[];
}

export const module7LesenTeil5: LesenTeil5Data = {
  module: 7,
  part: "Lesen Teil 5",
  title: "Die Begleithundpr\u00fcfung (VDH)",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie m\u00f6chten mit Ihrem Hund an Hundesportpr\u00fcfungen teilnehmen. Voraussetzung daf\u00fcr ist aber das Bestehen der Begleithundpr\u00fcfung, und deshalb lesen Sie die Bestimmungen des VDH f\u00fcr diese Pr\u00fcfung.",
  text: "F\u00fcr die Begleithundpr\u00fcfung \u2013 Auszug aus den Bestimmungen des Verbandes f\u00fcr das Deutsche Hundewesen (VDH)\n\nZugelassen sind Hunde aller Rassen und Gr\u00f6\u00dfen ab dem Alter von f\u00fcnfzehn Monaten. Um eine Begleithundpr\u00fcfung durchf\u00fchren zu k\u00f6nnen, m\u00fcssen mindestens vier Hunde an der Pr\u00fcfung teilnehmen. Eine Pr\u00fcfung kann nur durchgef\u00fchrt werden, wenn die Wetterverh\u00e4ltnisse es erlauben und die Sicherheit und Gesundheit von Mensch und Tier nicht gef\u00e4hrdet sind. Der Mindestabstand zwischen zwei Pr\u00fcfungstagen f\u00fcr einen Pr\u00fcfungsteilnehmer betr\u00e4gt sieben Tage.\n\nDer Pr\u00fcfungsteilnehmer muss den Meldeschluss der Pr\u00fcfungsveranstaltung einhalten. Mit Abgabe der Meldung verpflichten sich die Teilnehmer, die Startgeb\u00fchr zu bezahlen. Wollte ein Teilnehmer aus irgendwelchen Gr\u00fcnden am Erscheinen verhindert sein, muss er dies unverz\u00fcglich dem Pr\u00fcfungsleiter mitteilen.\n\nDie Pr\u00fcfung ist zweiteilig. Wer im Teil A (Begleithundpr\u00fcfung auf einem \u00dcbungsgel\u00e4nde) nicht die erforderlichen 70 % der Punkte erreicht, wird nicht zu Teil B (Pr\u00fcfung im Verkehr) mitgenommen. Am Schluss der Pr\u00fcfung werden keine Ergebnisse nach Punkten, sondern nur ein Werturteil \u201ebestanden\u201c oder \u201enicht bestanden\u201c vom Richter bekannt gegeben.",
  questions: [
    {
      id: 27,
      statement: "Jeder Teilnehmer muss ...",
      options: {
        a: "Mitglied in einem Tierschutzverein sein.",
        b: "Geld f\u00fcr die Teilnahme an der Pr\u00fcfung zahlen.",
        c: "vor der Pr\u00fcfung den Hund von einem Tierarzt untersuchen lassen.",
      },
      correct: "b",
    },
    {
      id: 28,
      statement: "F\u00fcr die Teilnahme an der Pr\u00fcfung im Verkehr ...",
      options: {
        a: "muss der Hund zuerst Pr\u00fcfungsteil A bestanden haben.",
        b: "kann der Hund bis zu 70 Punkte erhalten.",
        c: "kann man vor der Pr\u00fcfung mit dem Hund auf einem \u00dcbungsplatz trainieren.",
      },
      correct: "a",
    },
    {
      id: 29,
      statement: "Die Pr\u00fcfung findet ...",
      options: {
        a: "bei schlechtem Wetter nicht statt.",
        b: "nur zu bestimmten Terminen statt.",
        c: "jederzeit mit Erlaubnis des Pr\u00fcfungsleiters statt.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "F\u00fcr die Begleithundpr\u00fcfung gilt:",
      options: {
        a: "Es d\u00fcrfen nur bestimmte Hunderassen teilnehmen.",
        b: "Bei weniger als vier Teilnehmern findet die Pr\u00fcfung nicht statt.",
        c: "Es gibt kein Mindestalter f\u00fcr die Hunde.",
      },
      correct: "b",
    },
  ],
};
