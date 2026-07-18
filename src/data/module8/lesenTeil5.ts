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

export const module8LesenTeil5: LesenTeil5Data = {
  module: 8,
  part: "Lesen Teil 5",
  title: "Flohmarkt \u201eOttofloh\u201c",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie m\u00f6chten an dem Flohmarkt \u201eOttofloh\u201c teilnehmen und informieren sich \u00fcber die Teilnahme- und Verkaufsbedingungen.",
  text: "Flohmarkt \u201eOttofloh\u201c\n\nDer Flohmarkt \u201eOttofloh\u201c wird zweimal j\u00e4hrlich von einer privaten Elterninitiative ehrenamtlich in der Wandelhalle in 27637 Dorum organisiert.\n\nAnmeldung: Jeder Verk\u00e4ufer muss sich rechtzeitig vor jedem Flohmarkttermin anmelden und erh\u00e4lt als Best\u00e4tigung eine Verk\u00e4ufernummer. Anmeldungen werden nur auf unserer Homepage unter www.ottofloh.de oder per Telefon entgegengenommen. Bei Abgabe der Waren ist pro Verk\u00e4ufer ein Unkostenbeitrag von 1,50 Euro als Startgeld zu entrichten. Die Abgabe ist auf 30 Teile pro Verk\u00e4ufer begrenzt. Bei h\u00f6heren Anzahlen wird ein zus\u00e4tzlicher Aufpreis berechnet.\n\nWaren-Verkauf: Es werden nur Kinderbekleidungen (jeweils passend zur Saison), Kinderschuhe, Spielsachen und Schulsachen f\u00fcr Kinder angenommen. Gebrauchte und sperrige Artikel werden nur nach vorheriger R\u00fccksprache und Best\u00e4tigung angenommen. Alle Waren m\u00fcssen in einem sauberen und ordentlichen Zustand, ohne Besch\u00e4digungen und funktionst\u00fcchtig sein. Alle nicht verkauften Waren sind nach Beendigung des Flohmarkttermins abzuholen und werden ansonsten an eine Hilfsorganisation gespendet.\n\nPers\u00f6nliche Daten: Hinweis gem. \u00a7 33 BDSG: Pers\u00f6nliche Daten der Teilnehmer wie Name, Ort und Telefonnummer werden nur zum Zweck der Durchf\u00fchrung der Flohm\u00e4rkte auf elektronischen Datentr\u00e4gern gespeichert. Eine Weitergabe der pers\u00f6nlichen Daten an Dritte erfolgt zu keinem Zweck.",
  questions: [
    {
      id: 27,
      statement: "Alle nicht verkauften Waren ...",
      options: {
        a: "m\u00fcssen die Verk\u00e4ufer innerhalb einer Woche abholen.",
        b: "werden an eine Hilfsorganisation verschenkt.",
        c: "werden beim n\u00e4chsten Flohmarkt erneut zum Verkauf angeboten.",
      },
      correct: "a",
    },
    {
      id: 28,
      statement: "Die pers\u00f6nlichen Daten der Verk\u00e4ufer ...",
      options: {
        a: "werden elektronisch gesch\u00fctzt.",
        b: "k\u00f6nnen den K\u00e4ufern bei Problemen mit der gekauften Ware von der Flohmarktleitung bekannt gegeben werden.",
        c: "werden nicht an Leute weitergegeben, die nichts mit der Flohmarktorganisation zu tun haben.",
      },
      correct: "c",
    },
    {
      id: 29,
      statement: "Um sich anzumelden, ...",
      options: {
        a: "braucht man eine Verk\u00e4ufernummer.",
        b: "kann man bei der Flohmarktleitung anrufen.",
        c: "muss man 1,50 Euro bezahlen.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Als Verk\u00e4ufer darf man ...",
      options: {
        a: "auf keinen Fall mehr als 50 Teile verkaufen.",
        b: "auch alte Sachen verkaufen, wenn sie problemlos funktionieren.",
        c: "auf jedem Flohmarkt Sommer- und Winterbekleidung anbieten.",
      },
      correct: "b",
    },
  ],
};
