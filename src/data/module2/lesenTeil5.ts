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

export const module2LesenTeil5: LesenTeil5Data = {
  module: 2,
  part: "Lesen Teil 5",
  title: "Tagesablauf der Mittel- und Oberstufe (Klassen 8-13)",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Tagesablauf der Mittel- und Oberstufe (Klassen 8-13)

Sie informieren sich über den Tagesablauf in der Internatsschule Frühbergen, in die Ihr Cousin ab nächstes Jahr gehen wird.

6.45  Aufstehen, Waschen, Duschen, Zimmer aufräumen, Betten machen
7.25  Gemeinsames Frühstück im Speisesaal
8.00  Unterrichtsbeginn (1. und 2. Unterrichtsblock mit je 45 Minuten)
      Bei den Mahlzeiten werden mit den Schülern und Schülerinnen wichtige Gespräche geführt, aktuelle Themen der verschiedenen Bereiche ausgetauscht, die das Leben in Internat, Schule und Freizeit betreffen.
14.15 Große Pause (20 Minuten)
      Die Schülerinnen und Schüler verteilen sich auf die verschiedenen Terrassen und Gärten der Schule.
      Am Pausenbuffet werden Brote und Brötchen mit Marmelade, Wurst und Käse sowie Obst angeboten und es steht eine Saftsprudlerstation zur Verfügung (angetrennt können in Frauensachen täglich frische Salate und Getränke gekauft werden – Leitlinien aus Umweltgründen natürlich in Mehrwegflaschen).
9.35  (3.,4. und 5. Unterrichtsblock mit 10-minütiger Pause)
14.35 Gemeinsames Mittagessen im Speisesaal
      beim Mittagessen haben die Schülerinnen und Schüler feste Sitzplätze. Jeder Tisch wird von einem pädagogischen Mitarbeiter betreut.
      Wir beginnen und beenden das Essen gemeinsam.
      Zwei Schüler an jedem Tisch sind eine Woche für den Tischdienst verantwortlich. Sie sorgen für die Milch, holen das Essen und räumen das Geschirr ab.
14.45 Stöberarbeit (Natur- und Übungsaufgaben, Vokabeln)
15.15 Fächer / Pflichten / Vesper
15.30 Arbeitsgemeinschaften (Ma, Deu, Indie, Lernzeit) (Mi, Fr, gg. Nutzung der Lernberatung) Fachlehrer für Fragen in allen Fächern stehen bereit.
17.20 Hausversammlungen (klarisch Aussprache)
17.45 Gemeinsames Abendessen im Speisesaal
19.00-20.30 Betreute Abendfreizeit:
      Sport / Musikzimmer (üben / Spielen / Lesen / …)
      Dienstags ist Hausabnehmend, den alle Schülerinnen und Schüler im Internatsalltag verbringen und noch einmal eine gute Stunde lernen können.
22.00 Nachtruhe
      Schüler der Klassen 11 bis 13 können bei Bedarf noch länger arbeiten. Dies ist mit dem Hausvorstand vorher abzusprechen.`,
  questions: [
    {
      id: 27,
      statement: "Abends ...",
      options: {
        a: "können sich die Schüler mit ihren Hobbys beschäftigen.",
        b: "müssen die Schüler immer noch eine Stunde lernen.",
        c: "können die älteren Schüler selbstständig bestimmen, wann sie ins Bett gehen.",
      },
      correct: "a",
    },
    {
      id: 28,
      statement: "In der großen Pause ...",
      options: {
        a: "bekommen von der Schule täglich frisches Gebäck.",
        b: "können die Schüler Wurst- und Käsebrötchen kaufen.",
        c: "verlassen die Schüler das Schulgebäude.",
      },
      correct: "c",
    },
    {
      id: 29,
      statement: "Mittags essen alle Schüler gemeinsam, ...",
      options: {
        a: "damit sie sich an den Tischdienst gewöhnen.",
        b: "weil bei Tisch über viele wichtige Sachen gesprochen wird.",
        c: "obwohl sie dadurch weniger Freizeit haben.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Im Speisesaal gilt mittags:",
      options: {
        a: "Jeder Schüler holt sich sein Essen und räumt sein Geschirr ab.",
        b: "Die Lehrer bestimmen jeden Tag, wo die Schüler sitzen.",
        c: "An jedem Tisch sitzt auch ein erwachsener Betreuer.",
      },
      correct: "c",
    },
  ],
};
