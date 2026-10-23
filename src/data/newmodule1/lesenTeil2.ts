export interface LesenTeil2Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil2Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  example: LesenTeil2Question;
  questions: LesenTeil2Question[];
}

export const newmodule1LesenTeil2A: LesenTeil2Data = {
  module: 1,
  part: "Lesen Teil 2 - Text A",
  title: "Reparieren statt wegwerfen",
  time: "20 Minuten",
  instruction:
    "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Wenn bei Familie Reuter zu Hause ein Toaster kaputtgeht oder die Nähmaschine nicht mehr funktioniert, landet das Gerät schon lange nicht mehr im Müll. Stattdessen packt Herr Reuter es ein und geht damit zum Repair-Café im Gemeindezentrum, das an jedem zweiten Samstag im Monat öffnet. Dort treffen sich ehrenamtliche Helfer, die gerne reparieren, mit Leuten aus der Nachbarschaft, deren Geräte kaputt sind.

Die Idee dahinter ist einfach: Viele Dinge werden weggeworfen, obwohl sie mit ein wenig Geschick noch zu retten wären. Gleichzeitig gibt es immer weniger Menschen, die wissen, wie man einen Stecker austauscht oder einen Reißverschluss näht. Im Repair-Café treffen genau diese beiden Gruppen aufeinander: Menschen mit technischem Wissen und Menschen, die es lernen möchten.

Wer sein Gerät bringt, muss selbst mit anpacken und beim Reparieren zusehen oder sogar mithelfen, denn die Helfer reparieren nicht für die Besucher, sondern gemeinsam mit ihnen. So lernt man nebenbei etwas über Elektronik oder Nähen. Bezahlt wird nichts, es gibt lediglich eine Spendendose für Kaffee und Ersatzteile.

Seit die Reparaturtreffen vor vier Jahren begonnen haben, kommen immer mehr Besucher. Manche bringen inzwischen sogar Freunde und Nachbarn mit, deren Geräte auch kaputt sind. Herr Reuter selbst hat mittlerweile gelernt, kleinere Reparaturen an Haushaltsgeräten allein durchzuführen.`,
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "wie man ein Repair-Café selbst gründet.",
      b: "dass man kaputte Geräte gemeinsam reparieren kann, statt sie wegzuwerfen.",
      c: "welche Werkzeuge man zum Reparieren braucht.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 7,
      statement: "Das Repair-Café im Gemeindezentrum ...",
      options: {
        a: "öffnet jeden Samstag.",
        b: "findet zweimal im Monat statt.",
        c: "trifft sich einmal im Monat.",
      },
      correct: "c",
    },
    {
      id: 8,
      statement: "Die Besucher des Repair-Cafés ...",
      options: {
        a: "bezahlen für jede Reparatur eine feste Gebühr.",
        b: "reparieren ihre Geräte gemeinsam mit den Helfern.",
        c: "lassen ihre Geräte von den Helfern reparieren, ohne selbst mitzuhelfen.",
      },
      correct: "b",
    },
    {
      id: 9,
      statement: "Herr Reuter ...",
      options: {
        a: "kann inzwischen einfache Reparaturen selbst erledigen.",
        b: "arbeitet als ehrenamtlicher Helfer im Repair-Café.",
        c: "hat das Repair-Café vor vier Jahren gegründet.",
      },
      correct: "a",
    },
  ],
};

export const newmodule1LesenTeil2B: LesenTeil2Data = {
  module: 1,
  part: "Lesen Teil 2 - Text B",
  title: "Leihräder für die ganze Stadt",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `In immer mehr deutschen Städten sieht man sie an jeder Ecke: bunte Leihräder, die man sich mit einer App ausleihen kann. Das System heißt in vielen Städten unterschiedlich, funktioniert aber überall ähnlich. Man lädt sich eine App aufs Handy, registriert sich einmal mit seinen Daten und kann danach jederzeit ein freies Rad in der Nähe finden.

Um ein Rad auszuleihen, scannt man einfach den Code am Lenker mit dem Handy. Das Schloss öffnet sich automatisch, und schon kann man losfahren. Bezahlt wird nach Minuten: Die erste halbe Stunde kostet meist nur einen Euro, danach wird es etwas teurer. Am Ziel stellt man das Rad einfach an einer beliebigen Straßenecke ab und beendet die Fahrt in der App.

Besonders praktisch ist das System für kurze Strecken, zum Beispiel von der U-Bahn-Station zur Arbeit oder zum Einkaufen in der Innenstadt. Viele Pendler nutzen die Räder inzwischen regelmäßig, weil sie dadurch nicht immer ihr eigenes Fahrrad mitnehmen müssen und trotzdem flexibel bleiben.

Kritiker bemängeln allerdings, dass die Räder oft mitten auf dem Gehweg abgestellt werden und dort andere Menschen behindern. Manche Städte haben deshalb feste Abstellzonen eingeführt, in denen die Räder stehen müssen. Wer sein Rad woanders abstellt, muss inzwischen mit einer zusätzlichen Gebühr rechnen.`,
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "wie ein modernes Fahrrad-Verleihsystem funktioniert.",
      b: "warum Fahrradfahren gesünder ist als Autofahren.",
      c: "wo man in der Stadt am besten Fahrrad fährt.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 10,
      statement: "Um ein Leihrad zu nutzen, muss man ...",
      options: {
        a: "einen Schlüssel bei einer Station abholen.",
        b: "sich einmalig mit einer App registrieren.",
        c: "eine Jahresgebühr im Voraus bezahlen.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Nach der Fahrt ...",
      options: {
        a: "muss man das Rad an einer festen Station zurückgeben.",
        b: "kann man das Rad an jeder Straßenecke abstellen.",
        c: "muss man das Schloss mit einem Schlüssel abschließen.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Manche Städte ...",
      options: {
        a: "haben das Leihrad-System komplett verboten.",
        b: "verlangen eine Strafe, wenn man das Rad falsch abstellt.",
        c: "bezahlen den Nutzern eine Prämie fürs Radfahren.",
      },
      correct: "b",
    },
  ],
};
