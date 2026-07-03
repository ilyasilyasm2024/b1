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

export const module1LesenTeil5: LesenTeil5Data = {
  module: 1,
  part: "Lesen Teil 5",
  title: "Deutsches Museum",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Deutsches Museum

Führungen
Sonderausstellungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen. Anmeldung schriftlich sechs Wochen vorher.
Führungen und Vorführungen für Einzelpersonen und Familien und kostenlos (außer Planetarium und Sternwarte). Fotografieren (auch Blitz und Video, jedoch ohne Stativ) ist für den persönlichen Gebrauch erlaubt.
Täglich 09:00 - 21:00

Behindertengerechter Zugang
Rollstuhlfahrer können fast alle Ausstellungen über Rampen und Aufzüge erreichen, das Restaurant über Aufzüge am Innenhof. Das Personal hilft Ihnen gerne. Die Behinderten-toiletten sich im Erdgeschoss und im 1. Obergeschoss.

Gastronomie
Restaurant: 1. Obergeschoss, 9:00 - 17:00 Uhr (Sonn- und Feiertage: Mo. - Fr. 9:00 - 13:00 Uhr, Sa/So 10:30 - 13:30 Uhr)
Cafeteria, Erdgeschoss 9:00 - 15:00 Uhr (Mo-Fr)
Mitgebrachtes mitgenehm

Öffnungszeiten
Geöffnet täglich 9:00 bis 17:00 Uhr.
Einlass bis 16:00 Uhr.

Eintrittspreise
Erwachsene................6,50 €
Ermäßigt...................2,50 €
Schüler und Studenten.....1,50 €
Übernachtungsticket........1,00 €
Planetarium zusätzlich.....2,00 €
Frei für Mitglieder und Kinder unter 6 Jahren (frei).

Werden Sie Mitglied!
Mit einem Jahresbeitrag von 52,- € können Sie mit einer Begleitperson und 2 (und Kinder (oder allen eigenen Kindern unter 16 Jahren) das Deutsche Museum besuchen. Jahresbeitrag für Schüler-/innen und Studierende bis 30 Jahre, ohne Begleitung: 32,- €.

Öffentliche Verkehrsmittel
S-Bahnen (Isartor),
U-Bahnen Linie 1 und 2 (Fraunhoferstr.),
Straßenbahn Linie 18 (Deutsches Museum),
Linie 17 (Isartor).
Parkplätze sind nicht verfügbar.

Deutsches Museum Shop
Führen Kataloge und sonstige Veröffentlichungen des Deutschen Museums, großes Sortiment an technisch und wissenschaftsgeschichtlicher Literatur.
Verzeichnis der lieferbaren Publikationen im Museum-Shop erhältlich.`,
  questions: [
    {
      id: 27,
      statement: "Führungen ...",
      options: {
        a: "sind für Schulklassen gratis.",
        b: "sollten vorher telefonisch gemeldet werden.",
        c: "finden nicht nur auf Deutsch statt.",
      },
      correct: "c",
    },
    {
      id: 28,
      statement: "Wer Mitglied ist, ...",
      options: {
        a: "ist auf jeden Fall erwachsen.",
        b: "braucht keinen Eintritt zu bezahlen.",
        c: "darf nicht allein das Museum besuchen.",
      },
      correct: "b",
    },
    {
      id: 29,
      statement: "Im Museum kann man ...",
      options: {
        a: "als Behinderter alle Ausstellungen besichtigen.",
        b: "auch Bücher kaufen.",
        c: "auch etwas essen.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Das Museum erreicht man ...",
      options: {
        a: "am besten mit dem Auto.",
        b: "mit dem Bus Linie 17.",
        c: "mit jeder S-Bahn.",
      },
      correct: "c",
    },
  ],
};
