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

export const newmodule1LesenTeil5: LesenTeil5Data = {
  module: 1,
  part: "Lesen Teil 5",
  title: "Stadtbibliothek Lindenau",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Stadtbibliothek Lindenau

Öffnungszeiten
Montag bis Freitag: 10:00 - 19:00 Uhr
Samstag: 10:00 - 14:00 Uhr
Sonn- und Feiertage: geschlossen

Anmeldung
Die Anmeldung ist für Kinder und Jugendliche bis 18 Jahre kostenlos. Erwachsene zahlen einen Jahresbeitrag von 18 Euro, ermäßigt (Studierende, Rentner, Arbeitslose) 9 Euro. Für die Anmeldung wird ein gültiger Ausweis mit aktueller Adresse benötigt.

Ausleihe
Bücher können für vier Wochen ausgeliehen werden, Zeitschriften und Hörbücher für zwei Wochen. Eine Verlängerung ist zweimal möglich, sofern das Medium nicht von einer anderen Person vorgemerkt wurde. Wird ein Medium zu spät zurückgebracht, wird eine Gebühr von 50 Cent pro Woche und Medium fällig.

Barrierefreier Zugang
Die Bibliothek ist über einen Aufzug am Seiteneingang barrierefrei erreichbar. Rollstühle können an der Information ausgeliehen werden. Im Erdgeschoss gibt es eine behindertengerechte Toilette.

Gastronomie
Im Lesecafé im Erdgeschoss gibt es Getränke und kleine Snacks. Eigene Speisen und Getränke dürfen nicht mit in die Lesesäle im Obergeschoss genommen werden.

Veranstaltungen
Jeden ersten Mittwoch im Monat findet um 16:00 Uhr eine Vorlesestunde für Kinder ab vier Jahren statt. Einmal im Monat lädt die Bibliothek außerdem zu einem Autorengespräch ein, der Eintritt ist frei, eine Anmeldung wird jedoch empfohlen.

Anfahrt
Straßenbahn Linie 4 und 9 (Haltestelle Lindenau Bibliothek), Buslinie 22 (Haltestelle Rathausplatz). Parkplätze stehen nur begrenzt zur Verfügung, das nächste Parkhaus liegt fünf Minuten zu Fuß entfernt.

Bibliotheksshop
Am Empfang gibt es ausgemusterte Bücher aus dem Bestand sowie Lesezeichen und Taschen mit dem Logo der Bibliothek zu kaufen.`,
  questions: [
    {
      id: 27,
      statement: "Die Anmeldung in der Bibliothek ...",
      options: {
        a: "ist für alle Altersgruppen kostenlos.",
        b: "kostet für Erwachsene ohne Ermäßigung 18 Euro im Jahr.",
        c: "ist nur mit einer Empfehlung möglich.",
      },
      correct: "b",
    },
    {
      id: 28,
      statement: "Wenn man ein Buch zu spät zurückbringt, ...",
      options: {
        a: "darf man sich für ein Jahr nicht mehr anmelden.",
        b: "muss man eine Gebühr von 50 Cent pro Woche zahlen.",
        c: "verliert man automatisch die Mitgliedschaft.",
      },
      correct: "b",
    },
    {
      id: 29,
      statement: "In der Bibliothek ...",
      options: {
        a: "darf man überall essen und trinken.",
        b: "gibt es einen Aufzug für Rollstuhlfahrer.",
        c: "sind eigene Getränke im Lesecafé erlaubt.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Die Vorlesestunde für Kinder ...",
      options: {
        a: "findet einmal pro Woche statt.",
        b: "kostet Eintritt.",
        c: "findet einmal im Monat statt.",
      },
      correct: "c",
    },
  ],
};
