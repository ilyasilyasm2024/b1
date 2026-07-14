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

export const module3LesenTeil5: LesenTeil5Data = {
  module: 3,
  part: "Lesen Teil 5",
  title: "Hausordnung für Jugendherbergen",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Hausordnung für Jugendherbergen

Sie möchten in einer Jugendherberge im Burgenland übernachten und informieren sich über die Hausordnung für Jugendherbergen in Österreich.

Allgemeines:
Die Jugendherbergen bieten preiswerte Übernachtungsmöglichkeiten für junge Menschen und Familien. Die Unterbringung erfolgt in Mehrbettzimmern. Einzelzimmer stehen nicht zur Verfügung. Familien mit Kindern unter 14 Jahren können auf Anfrage ein eigenes Zimmer bekommen, müssen sich aber den Raum eventuell mit einer anderen Familie teilen.

Ankunft und Abreise:
Gäste, die einen Herbergsplatz reserviert haben, müssen bis spätestens 18 Uhr in der Herberge eintreffen. Bei späterer Ankunft wird der Platz anderweitig vergeben. Die Abreise hat bis 10 Uhr zu erfolgen. Am Abreisetag sind die Zimmer bis spätestens 9:30 Uhr zu räumen.

Ordnung und Sauberkeit:
Jeder Gast ist verpflichtet, sein Zimmer ordentlich zu halten und vor der Abreise aufzuräumen. Betten sind abzuziehen und die Bettwäsche an der Rezeption abzugeben. Müll ist in die entsprechenden Behälter zu entsorgen. Es darf kein Abfall im Zimmer zurückgelassen werden.

Ruhezeiten und Regeln:
Ab 22 Uhr gilt Nachtruhe. In den Schlafräumen ist das Rauchen strengstens verboten. Elektrische Geräte wie Laptops und Handys dürfen benutzt werden, aber nur mit Kopfhörern. Das Essen in den Schlafräumen ist nicht gestattet – dafür steht der Gemeinschaftsraum zur Verfügung.

Tagesaufenthalt:
Zwischen 10 und 15 Uhr sind die Schlafräume für Gäste geschlossen. In dieser Zeit können der Gemeinschaftsraum, der Garten und die Sportanlagen genutzt werden.`,
  questions: [
    {
      id: 27,
      statement: "In den Jugendherbergen ...",
      options: {
        a: "gibt es keine Einzelzimmer.",
        b: "schlafen Familien immer in einem Raum.",
        c: "darf man keinen Abfall lassen.",
      },
      correct: "a",
    },
    {
      id: 28,
      statement: "Wenn man sich für einen Herbergsplatz angemeldet hat, ...",
      options: {
        a: "erhält man eine Mitgliedskarte.",
        b: "kann man kommen, wann man will.",
        c: "muss man bis 18 Uhr in der Herberge ankommen.",
      },
      correct: "c",
    },
    {
      id: 29,
      statement: "Die Gäste sollten ...",
      options: {
        a: "ihre Zimmer aufräumen.",
        b: "am Tag nicht in der Jugendherberge schlafen.",
        c: "ihr Zimmer am Abreisetag um 7 Uhr verlassen.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "In den Schlafräumen ...",
      options: {
        a: "sind alle elektrischen Geräte verboten.",
        b: "ist Rauchen nicht erlaubt.",
        c: "darf gegessen werden.",
      },
      correct: "b",
    },
  ],
};
