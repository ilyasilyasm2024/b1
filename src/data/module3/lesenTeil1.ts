export interface LesenTeil1Question {
  id: number;
  statement: string;
  correct: "richtig" | "falsch";
}

export interface LesenTeil1Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  example: LesenTeil1Question;
  questions: LesenTeil1Question[];
}

export const module3LesenTeil1: LesenTeil1Data = {
  module: 3,
  part: "Lesen Teil 1",
  title: "Reisebericht London (für Teenager)",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
  text: `von Mia Baumgartner, 16

Letzten Sommer waren meine zwei besten Freundinnen und ich in London. Wir haben uns vorher lange darauf gefreut und viel geplant. Am ersten Tag haben wir eine Bustour durch die Stadt gemacht. Wir haben eine Tageskarte gekauft, die war nicht billig, aber dafür konnten wir den ganzen Tag fahren. Der Verkehr in London ist wirklich verrückt – überall Autos, Busse und Taxis!

Am Nachmittag sind wir nach Covent Garden gefahren. Dort wollten wir shoppen gehen, aber die Geschäfte waren viel zu teuer für uns. Wir haben nur geschaut und nichts gekauft. Danach sind wir zur Tower Bridge gegangen. Man muss Eintritt bezahlen, um oben auf die Brücke zu gehen, aber es hat sich total gelohnt! Es gibt einen Glasweg, durch den man nach unten auf die Themse schauen kann. Das war ein bisschen gruselig, aber super cool. Uns hat der Besuch richtig gut gefallen.

Am nächsten Tag waren wir in Notting Hill. Das Viertel ist wirklich cool – bunte Häuser, kleine Läden und nette Cafés. Wir haben ein paar Souvenirs für unsere Familien gekauft. Am letzten Tag waren wir im Hyde Park. Vorher haben wir bei McDonald's gegessen, weil wir nicht mehr so viel Geld hatten. Dann haben wir uns auf die Wiese gelegt und einfach ausgeruht. Ein perfekter Abschluss für unsere Reise!`,
  example: {
    id: 0,
    statement: "Die drei Teenager sind mit dem Bus durch London gefahren.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement: "Die Tageskarte hat nichts gekostet.",
      correct: "falsch",
    },
    {
      id: 2,
      statement: "In London war viel Verkehr.",
      correct: "richtig",
    },
    {
      id: 3,
      statement:
        "In Covent Garden wollten die Jugendlichen einkaufen, aber alles war zu teuer.",
      correct: "richtig",
    },
    {
      id: 4,
      statement:
        "Der Besuch der Tower Bridge hat den Mädchen nicht gefallen.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "In Notting Hill haben sie Obst gekauft.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Im Hyde-Park haben sie sich ausgeruht.",
      correct: "richtig",
    },
  ],
};
