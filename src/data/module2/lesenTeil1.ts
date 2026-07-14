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

export const module2LesenTeil1: LesenTeil1Data = {
  module: 2,
  part: "Lesen Teil 1",
  title: "Mein Berufswechsel",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
  text: `4. Februar

Wäre die Mauer nicht gefallen, dann würde ich wahrscheinlich immer noch im Klassenzimmer stehen. Fünf Jahre lang war ich Grundschullehrerin für Deutsch und Sport in Ost-Berlin. Dann kam die Wende, die Mauer war weg – und plötzlich war mein DDR-Examen wertlos.
Meine Tochter war gerade geboren. Ich war alleinerziehend und deshalb für ein Jahr zu Hause. Als ich wieder in den Beruf einsteigen wollte, gab es nicht nur einen neuen Staat, sondern auch viel zu viele Lehrer für viel zu wenige Stellen.
Zufällig hatte in Berlin gerade die ITB eröffnet, die größte Reisemesse der Welt. Ich bin sofort hin und war so begeistert, dass ich eine Umschulung zur Reiseverkehrskauffrau begann. Nach zwei Jahren hatte ich das Diplom in der Tasche – und einen Job bei einer Reiseagentur für Arabien und Südostasien. Ich bin mit dem Jeep durch die Wahiba-Wüste in Oman gefahren, habe Routen geplant und in Malaysia Dutzende Hotels getestet. Doch allmählich ließ die Begeisterung für den Job nach. Bis ich wusste, was ich wirklich wollte, sind mehr als fünf Jahre vergangen. Irgendwann fiel mir auf, dass ich in Kundengesprächen immer abdriftete. Statt dem Kunden zuzuhören, habe ich ihn gemustert: Welchen Anzug trägt der? Passt die Krawatte zu den Schuhen? Dann fand ich in der Zeitung ein Porträt über eine Stilberaterin. Ich wusste sofort: Das ist es. Für Mode und Farben hatte ich mich immer schon interessiert. Jetzt fehlte nur noch die passende Ausbildung.
Bei einer Hamburger Fernakademie machte ich die Weiterbildung zur Stilberaterin. Das war stressig: Tagsüber war ich bei der Arbeit, abends bei meiner Tochter, an den Wochenenden und im Urlaub habe ich mich in die Ausbildung gekniet. Zwei anstrengende Jahre später hatte ich mein Diplom. Vor vier Jahren habe ich mich dann selbstständig gemacht. Jetzt bin ich Stilberaterin, gebe Kurse an Volkshochschulen, bekomme Aufträge für Modenschauen und Fotoshootings.
Ich weiß, ich bin angekommen. Mode, Farben, Stoffe, das ist mein Zuhause. Wenn ich einer Kundin zeigen kann, welche Farben ihr stehen, wie sie sich perfekt in Szene setzt, dann macht mich das glücklich.`,
  example: {
    id: 0,
    statement: "Marita war Lehrerin in der DDR.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement:
      "Marita war ein Jahr lang nicht berufstätig, um sich um ihr Kind zu kümmern.",
      correct: "richtig",
    },
    {
      id: 2,
      statement:
        "Marita musste als Reiseverkehrskauffrau auch im Ausland arbeiten.",
      correct: "richtig",
    },
    {
      id: 3,
      statement:
        "Die Kunden, mit denen Marita sprach, waren oft nicht gut angezogen.",
      correct: "falsch",
    },
    {
      id: 4,
      statement:
        "Marita machte eine Ausbildung zur Stilberaterin, während sie arbeitete.",
      correct: "richtig",
    },
    {
      id: 5,
      statement:
        "Die Ausbildung zur Stilberaterin dauerte insgesamt vier Jahre.",
      correct: "falsch",
    },
    {
      id: 6,
      statement:
        "Marita freut sich, wenn eine Kundin mit ihrer Hilfe ihren Stil findet.",
      correct: "richtig",
    },
  ],
};
