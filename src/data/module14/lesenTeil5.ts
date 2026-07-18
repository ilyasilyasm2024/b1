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

export const module14LesenTeil5: LesenTeil5Data = {
  module: 14,
  part: "Lesen Teil 5",
  title: "Benutzungsordnung der Pestalozzi-Bibliothek Z\u00fcrich (PBZ)",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie informieren sich \u00fcber die Benutzungsordnung der Pestalozzi-Bibliothek Z\u00fcrich, da Sie bald f\u00fcr einige Zeit in Z\u00fcrich leben werden.",
  text: "Benutzungsordnung der Pestalozzi-Bibliothek Z\u00fcrich (PBZ)\n\nEinschreibung\nDie Bibliotheken der Pestalozzi-Bibliothek Z\u00fcrich (PBZ) stehen allen Interessierten zur Benutzung offen. Gegen Vorlage eines amtlichen Ausweises wird eine pers\u00f6nliche Bibliothekskarte ausgestellt, die bei jeder Ausleihe mitzubringen ist. Die Bibliothekskarte ist nicht \u00fcbertragbar, auch nicht innerhalb der Familie oder des Haushalts. Bei Personen ohne dauerhaften Wohnsitz in der Schweiz kann die Ausleihe eingeschr\u00e4nkt werden. Adress- und Namens\u00e4nderungen sowie der Verlust der Bibliothekskarte sind umgehend zu melden. Ein Ersatzausweis kann gegen eine Geb\u00fchr bezogen werden.\n\nBenutzung\nEs k\u00f6nnen maximal 24 Artikel (B\u00fccher, Zeitschriften, CDs oder DVDs) gleichzeitig ausgeliehen werden. Die Ausleihdauer betr\u00e4gt in der Regel 4 Wochen. F\u00fcr bestimmte Artikel (wie beispielsweise DVDs) kann die Bibliothek abweichende Ausleihfristen festlegen. Eine Verl\u00e4ngerung ist m\u00f6glich, ausgenommen reservierte Artikel. Die Verl\u00e4ngerung kann in der Bibliothek, telefonisch oder online via Internet erfolgen.\n\nArtikel k\u00f6nnen reserviert werden. Sobald ein reservierter Artikel bereitsteht, wird der Benutzer per Telefon oder per SMS benachrichtigt. Die Artikel sind dann innerhalb einer Woche abzuholen. F\u00fcr Reservationen wird eine Geb\u00fchr erhoben. Ebenso k\u00f6nnen gegen Geb\u00fchr Artikel, die nicht im lokalen Bestand der PBZ vorhanden sind, bei einer anderen Bibliothek zur Ausleihe besorgt werden, mit Ausnahme von DVDs.\n\nHaftung\nBenutzerinnen und Benutzer sind f\u00fcr die ausgeliehenen Artikel verantwortlich und zum schonenden Umgang mit dem Bibliothekseigentum verpflichtet. Bei Besch\u00e4digung oder Verlust werden neben den Kosten f\u00fcr Reparatur oder Ersatz auch Bearbeitungsgeb\u00fchren erhoben. Sch\u00e4den d\u00fcrfen nicht selbst repariert werden. Wer die Bestimmungen der Bibliothek nicht beachtet oder sich ungeb\u00fchrlich verh\u00e4lt, kann vor\u00fcbergehend oder g\u00e4nzlich von der Benutzung ausgeschlossen werden.",
  questions: [
    {
      id: 27,
      statement: "Wenn man etwas reservieren l\u00e4sst, ...",
      options: {
        a: "muss man die Artikel eine Woche nach Reservierung abholen.",
        b: "muss man die Artikel bei einer anderen Bibliothek der PBZ abholen.",
        c: "muss man daf\u00fcr einen Geldbetrag zahlen.",
      },
      correct: "c",
    },
    {
      id: 28,
      statement: "Bei Nichtbeachtung der Bibliotheksbestimmungen ...",
      options: {
        a: "muss man eine Strafgeb\u00fchr zahlen.",
        b: "kann es sein, dass man die PBZ nicht mehr benutzen darf.",
        c: "muss man sofort alle ausgeliehenen Artikel zur\u00fcckgeben.",
      },
      correct: "b",
    },
    {
      id: 29,
      statement: "Man kann ...",
      options: {
        a: "auch DVDs reservieren lassen.",
        b: "einmal im Monat bis zu 25 Artikel ausleihen.",
        c: "auch reservierte Artikel verl\u00e4ngern lassen.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "Um die PBZ benutzen zu k\u00f6nnen, ...",
      options: {
        a: "muss man in Z\u00fcrich wohnen.",
        b: "muss man jedes Mal die Bibliothekskarte bei sich haben.",
        c: "braucht man eine Bibliothekskarte pro Familie oder Haushalt.",
      },
      correct: "b",
    },
  ],
};
