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

export const module11LesenTeil5: LesenTeil5Data = {
  module: 11,
  part: "Lesen Teil 5",
  title: "Pr\u00fcfungsordnung",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Da Sie an einer Sprachpr\u00fcfung teilnehmen wollen, lesen Sie die Pr\u00fcfungsordnung.",
  text: "Pr\u00fcfungsordnung\n\nFeststellung der Identit\u00e4t:\nVor dem Eintritt in den Pr\u00fcfungsraum m\u00fcssen alle Pr\u00fcfungsteilnehmer und -teilnehmerinnen einen Ausweis vorlegen, sodass die Namen und pers\u00f6nlichen Angaben mit der Liste der Anmeldungen zur Pr\u00fcfung abgeglichen werden k\u00f6nnen. Die Identit\u00e4t muss zweifelsfrei festgestellt werden. W\u00e4hrend der Pr\u00fcfung muss der Ausweis f\u00fcr den Lehrer jederzeit einsehbar am Platz des Teilnehmers neben der Teilnehmernummer liegen.\n\nPr\u00fcfungsunterlagen:\nAuf keinen Fall d\u00fcrfen Aufgabenhefte von Teilnehmern und Teilnehmerinnen aus dem Pr\u00fcfungsraum entfernt werden. Bevor die Teilnehmergruppe den Pr\u00fcfungsraum verl\u00e4sst, m\u00fcssen daher alle Unterlagen auf Vollst\u00e4ndigkeit \u00fcberpr\u00fcft werden.\n\nUnerlaubte Hilfsmittel:\nW\u00e4hrend der Pr\u00fcfung d\u00fcrfen sich keine unerlaubten Hilfsmittel im Verf\u00fcgungsbereich der Teilnehmer und Teilnehmerinnen befinden. Auf den Tischen sind lediglich Aufgabenhefte, Antwortbogen, Stifte und Notizpapier (einschlie\u00dflich Stempel des Pr\u00fcfungszentrums versehen) zul\u00e4ssig. Als unerlaubte Hilfsmittel gelten u.a. pers\u00f6nliche Aufzeichnungen, Druckerzeugnisse wie W\u00f6rterb\u00fccher sowie Ger\u00e4te, die zur Speicherung oder \u00dcbermittlung von Informationen geeignet sind (elektronische Kalender, Mobiltelefone, Kameras usw.).\n\nT\u00e4uschung:\nWer bei der Pr\u00fcfung unerlaubte Hilfsmittel verwendet oder anderen gew\u00e4hrt, von anderen Teilnehmern abschreibt oder abzuschreiben versucht, wird sofort von der Pr\u00fcfung ausgeschlossen. In diesem Fall werden die Pr\u00fcfungsleistungen nicht bewertet. Jeder T\u00e4uschungsversuch ist zu protokollieren. Der Ausschluss von der Pr\u00fcfung ist unter Angabe der Gr\u00fcnde, die zum Ausschluss gef\u00fchrt haben, ausf\u00fchrlich vom Lehrer auf dem Pr\u00fcfungsprotokoll zu vermerken.",
  questions: [
    {
      id: 27,
      statement: "Der Ausweis eines Pr\u00fcfungsteilnehmers ...",
      options: {
        a: "muss w\u00e4hrend der Pr\u00fcfung kontrolliert werden.",
        b: "liegt w\u00e4hrend der Pr\u00fcfung auf dem Lehrertisch.",
        c: "wird vor Pr\u00fcfungsbeginn kontrolliert.",
      },
      correct: "c",
    },
    {
      id: 28,
      statement: "F\u00fcr die Aufgabenhefte gilt:",
      options: {
        a: "Sie geh\u00f6ren zu den unerlaubten Hilfsmitteln.",
        b: "Die Teilnehmergruppe muss sie \u00fcberpr\u00fcfen und dann mitnehmen.",
        c: "Sie m\u00fcssen im Pr\u00fcfungsraum bleiben.",
      },
      correct: "c",
    },
    {
      id: 29,
      statement: "Unerlaubte Hilfsmittel ...",
      options: {
        a: "sind zum Beispiel Handys.",
        b: "d\u00fcrfen nur auf den Tischen liegen.",
        c: "bringt jeder Pr\u00fcfungsteilnehmer mit.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "Wenn man bei der Pr\u00fcfung unerlaubte Hilfsmittel benutzt, ...",
      options: {
        a: "muss man sofort den Pr\u00fcfungsraum verlassen.",
        b: "bekommt man keine Note.",
        c: "muss man es schriftlich begr\u00fcnden.",
      },
      correct: "a",
    },
  ],
};
