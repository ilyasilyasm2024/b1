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

export const module5LesenTeil2A: LesenTeil2Data = {
  module: 5,
  part: "Lesen Teil 2A",
  title: "Die Tandemfamilie",
  text: "Die Tandemfamilie ist ein Kinderbetreuungsmodell, das einst insbesondere in l\u00e4ndlichen Gegenden selbstverst\u00e4ndlich war. Es bedeutet, dass benachbarte Familien gegenseitig auf die Kinder aufpassen. Prominentestes Beispiel aus der Literatur ist wohl die Kinderbuchreihe \u201eWir Kinder aus Bullerb\u00fc\u201c von Astrid Lindgren. Diese Freundschaft spielt in einem schwedischen Weiler, wo sich die insgesamt sieben Kinder frei zwischen den drei elterlichen H\u00f6fen bewegen und \u00fcberall willkommen sind.\n\nNun hat das reisidelte schweizerische Mittelland des 21. Jahrhunderts nicht viel gemein mit dem Bullerb\u00fc vergangener Zeiten. Nichtsdestotrotz ist eine verl\u00e4ssliche Tandemfamilie zeitgem\u00e4sser denn je: Oft wohnen die Grosseltern und andere Verwandte zu weit weg, um auf die Kinder aufzupassen. Und selbst wenn Grossm\u00fctter kleiner Kinder in der N\u00e4he wohnen, sind sie h\u00e4ufig noch berufst\u00e4tig und haben daher nur wenig Zeit, ihre Enkel zu beaufsichtigen. Kinderg\u00e4rten- oder Hortpl\u00e4tze als Alternative sind selten, kosten Geld und haben oft zu kurze \u00d6ffnungszeiten. Die Vorteile eines Betreuungstandems sind klar: Die Betreuungszeiten sind flexibler und je l\u00e4nger man sich kennt, desto grosser wird das gegenseitige Vertrauen. Familien, die sich so gegenseitig helfen, wachsen zusammen. Im Idealfall entsteht eine jahrelange Freundschaft, von der Eltern und Kinder gleichermassen profitieren. Darum: H\u00f6chste Zeit f\u00fcr die Wiederentdeckung der Tandemfamilie!",
  example: {
    id: 0,
    statement: "In \u201eWir Kinder aus Bullerb\u00fc\u201c ...",
    options: {
      a: "gibt es sieben Kinder.",
      b: "sind die Kinder im Sommer auf dem Land.",
      c: "haben Eltern keine Zeit f\u00fcr ihre Kinder.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "Kinderb\u00fccher von Astrid Lindgren.",
        b: "eine M\u00f6glichkeit der Kinderbetreuung.",
        c: "Probleme der Menschen, die auf dem Land wohnen.",
      },
      correct: "b",
    },
    {
      id: 8,
      statement: "In der l\u00e4ndlichen Schweiz ...",
      options: {
        a: "wohnen Familien oft nicht in der N\u00e4he der Grosseltern.",
        b: "haben die Familien kaum Kontakte zu anderen.",
        c: "arbeiten die Grossm\u00fctter noch in hohem Alter.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "Der Kindergarten ist in der Schweiz ...",
      options: {
        a: "nicht sehr beliebt.",
        b: "nur f\u00fcr reiche Familien.",
        c: "nicht umsonst.",
      },
      correct: "c",
    },
  ],
};

export const module5LesenTeil2B: LesenTeil2Data = {
  module: 5,
  part: "Lesen Teil 2B",
  title: "Spiel mit!",
  text: "Spielen geh\u00f6rt zum Menschen dazu, seit es Menschen gibt. Und so manches Spiel, das wir heute noch lieben, haben die Menschen schon vor 4000 Jahren gespielt. Philosophen behaupten gar, erst das Spielen mache den Menschen zum Menschen. Da ist es kein Wunder, dass schon unsere Urahnen begeisterte Spieler waren. Selbst die kleinen Tierfiguren, die man in Steinzeith\u00f6hlen gefunden hat, sehen wie Spielzeug aus. Das zeigt uns eindeutig: Unsere Spiele sind oft schon sehr alt. Sie haben sich \u00fcber Jahrtausende zu dem entwickelt, was wir heute noch spielen. Bretter f\u00fcr M\u00fchle und andere Spiele wurden von Spiele-Forschern schon in Gr\u00e4bern in China, Troja, Sri Lanka und antiken \u00c4gypten gefunden. Daher wissen wir, dass sich diese Spiele schon vor tausenden von Jahren verbreitet hatten. Bilder auf antiken Vasen beweisen: Mit Jo-Jos haben vor 2500 Jahren schon die alten Griechen gespielt.\n\nDer Spieltrieb ist uns genau wie den Tieren angeboren. Tiere spielen, um sich auf den Ernstfall vorzubereiten: K\u00e4mpfen oder Jagen zum Beispiel. Auch Kinder spielen, um sich auf ihr sp\u00e4teres Leben vorzubereiten. Spielen ist \u00e4usserst wichtig f\u00fcr die kindliche Entwicklung. Wir umsorgen eine Puppe und lernen dabei, ein Baby zu pflegen. Wir spielen mit Baukl\u00f6tzchen oder einem Ball und lernen komplizierte Bewegungsabl\u00e4ufe. Ohne Spiel sind die Menschen einfach nicht f\u00fcr ihr Leben gewappnet.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "dass Spiele schon sehr lange existieren.",
      b: "dass Kinder heute zu wenig spielen.",
      c: "welche Spiele f\u00fcr Kinder am besten sind.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "dass Spiele schon sehr lange existieren.",
        b: "dass Kinder heute zu wenig spielen.",
        c: "welche Spiele f\u00fcr Kinder am besten sind.",
      },
      correct: "a",
    },
    {
      id: 11,
      statement: "Tierkinder spielen, ...",
      options: {
        a: "um sich auf das Leben vorzubereiten.",
        b: "damit ihre Eltern sich freuen.",
        c: "um sich zu unterhalten.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Antike Vasen ...",
      options: {
        a: "dienten auch zum Spielen.",
        b: "zeigen, dass fr\u00fcher gespielt wurde.",
        c: "hatten immer ein Spiel als Schmuck.",
      },
      correct: "b",
    },
  ],
};
