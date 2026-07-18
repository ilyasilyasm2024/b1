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
  text: string;
  example: LesenTeil2Question;
  questions: LesenTeil2Question[];
}

export const module13LesenTeil2A: LesenTeil2Data = {
  module: 13,
  part: "Lesen Teil 2A",
  title: "\u201eVelo\u201c-Abenteuer \u2013 mit dem Mountainbike durch die Alpen",
  text: "Beim Stichwort \u201eAlpentransit\u201c denken die meisten an Verkehrspolitik und Staus. Nicht so die Mountainbiker. F\u00fcr sie sind die Alpen das unbestrittene Highlight, eine willkommene Gelegenheit, die eigenen Grenzen auszuprobieren; eins der letzten gro\u00dfen Gebiete im sonst weitgehend erschlossenen Europa. Von Wien bis Nizza sind die Alpen nicht nur eine Klima- und Wasserscheide. Abseits gro\u00dfer Ballungsr\u00e4ume und Autobahnen geht hier alles einen etwas ruhigeren Gang. Die Alpen bieten f\u00fcr jeden Geschmack passende Routen, das reicht von der vier Meter breiten Schotterstra\u00dfe bis zu schmalen Rad- und Alpwegen oberhalb von Bergseen.\n\nLandschaftlich wie historisch lohnen sich besonders die Dolomiten. Wer innert f\u00fcnf Tagen von Innsbruck zum italienischen Skiort Cortina d'Ampezzo radelt, bekommt unterwegs eine Menge geboten. Zuerst f\u00e4hrt man oberhalb der Brenner Autobahn und hat einen herrlichen Panoramablick, vorbei an Apfelplantagen. Das erste Highlight ist ein Bergweg an der Steilwand des Kreuzkofels entlang, direkt an der Baumgrenze mit Ausblick auf weitere Dolomitenberge. Am Ende der Tour erreicht man den Fanes-Kessel, das absolute Highlight. Dort gibt es rundum steile Bergflanken, unten Bergseen, gespeist von Wasserf\u00e4llen, und nat\u00fcrlich auch Bergh\u00fctten, in denen man sich bei Apfelschorle und leckerer Pasta st\u00e4rken kann. Einfach unvergesslich.",
  example: {
    id: 0,
    statement: "In den Alpen gibt es viele unterschiedliche Reisewege.",
    options: {
      a: "In den Alpen gibt es viele unterschiedliche Reisewege.",
      b: "Oberhalb der Baumgrenze gibt es keine Wege.",
      c: "Es gibt Essen f\u00fcr jeden Geschmack.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "Umweltprobleme in den Alpen.",
        b: "Velofahren in der Schweiz.",
        c: "Velo-Touren in den Alpen.",
      },
      correct: "c",
    },
    {
      id: 8,
      statement: "Auf der Tour von Innsbruck nach Cortina d'Ampezzo ...",
      options: {
        a: "gibt es sch\u00f6ne Desserts.",
        b: "kann man viel sehen.",
        c: "reisen die Mountainbiker sehr gern.",
      },
      correct: "b",
    },
    {
      id: 9,
      statement: "In den Bergh\u00fctten des Fanes-Kessels ...",
      options: {
        a: "gibt es nur Getr\u00e4nke.",
        b: "kann man schlafen.",
        c: "kann man lecker essen.",
      },
      correct: "c",
    },
  ],
};

export const module13LesenTeil2B: LesenTeil2Data = {
  module: 13,
  part: "Lesen Teil 2B",
  title: "Eine virtuelle Reise",
  text: "Eine Reise um die Welt zu bedeutenden Orten, Bauwerken oder Denkm\u00e4lern muss heute nicht anstrengend oder teuer sein. Waren Sie schon auf dem schiefen Turm von Pisa? Nein. Zu viele Touristen in der Warteschlange? Zu teuer? Keine Zeit? Oder nicht mehr gut zu Fu\u00df? Alles kein Problem. Der Digitalisierung sei Dank \u2013 sogenannte Apps konservieren die Kunstsch\u00e4tze und Denkm\u00e4ler der Welt f\u00fcr die n\u00e4chsten Generationen.\n\nWenn man nicht zu den Denkm\u00e4lern kommt, dann kommen diese eben zu Ihnen. Eine Weltreise kann einfach am iPad oder am Computer erfolgen. B\u00fccher, Denkm\u00e4ler oder Museumsbesuche sind als virtuelle Touren im Internet verf\u00fcgbar. Ein Rundgang durch den Pariser Louvre ist somit ebenso m\u00f6glich wie ein Flug um die Freiheitsstatue oder der Grand Canyon.\n\nMittlerweile sind virtuelle Reisen zu Denkm\u00e4lern quer durch Kontinente und rund um die Welt kein Problem mehr. Auch zahlreiche Anwendungen f\u00fcr Smartphones \u2013 sogenannte Apps \u2013 konservieren die Kunstsch\u00e4tze und Denkm\u00e4ler der Welt f\u00fcr die n\u00e4chsten Generationen. In der \u00d6sterreichischen Nationalbibliothek werden die bedeutenden Werke digitalisiert, und auch Google macht seit Jahren mehr oder weniger bekannte, aber auf jeden Fall erhaltenswerte Werke der digitalen Welt zug\u00e4nglich.",
  example: {
    id: 0,
    statement: "In diesem Text geht es um ...",
    options: {
      a: "viele M\u00f6glichkeiten, eine Reise zu machen.",
      b: "eine neue Art, Sehensw\u00fcrdigkeiten kennenzulernen.",
      c: "\u00f6sterreichische Denkm\u00e4ler.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "viele M\u00f6glichkeiten, eine Reise zu machen.",
        b: "eine neue Art, Sehensw\u00fcrdigkeiten kennenzulernen.",
        c: "\u00f6sterreichische Denkm\u00e4ler.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Google ...",
      options: {
        a: "sorgt daf\u00fcr, dass Internetnutzer Sch\u00e4tze aus Museen sehen und lesen k\u00f6nnen.",
        b: "arbeitet mit der \u00d6sterreichischen Nationalbibliothek zusammen.",
        c: "sammelt bekannte Werke aus Museen.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Weite Reisen ...",
      options: {
        a: "kosten immer viel Geld.",
        b: "werden von vielen Touristen unternommen.",
        c: "k\u00f6nnen m\u00fcde machen.",
      },
      correct: "c",
    },
  ],
};
