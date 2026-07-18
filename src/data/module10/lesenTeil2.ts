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

export const module10LesenTeil2A: LesenTeil2Data = {
  module: 10,
  part: "Lesen Teil 2A",
  title: "Mit dem Handyticket durch Berlin",
  text: "Kunden der Berliner Verkehrsbetriebe (BVG) k\u00f6nnen ihre Bus- und Bahnfahrten ab sofort bargeldlos mit dem Handy bezahlen. Das System unter dem Namen \u201eTouch & Travel\u201c lief erst als Pilotprojekt und gilt nun f\u00fcr das ganze Gebiet der BVG. Es funktioniert ganz einfach: Man braucht nur ein Handy mit der M\u00f6glichkeit, von dort Geld zu bezahlen, und schon kann man bei \u201eTouch & Travel\u201c mitmachen. Vor der Abfahrt mit dem Bus oder einem anderen Verkehrsmittel der BVG meldet man sich an der Haltestelle durch ein Funksignal als Fahrgast an, man steigt ein und f\u00e4hrt an sein Ziel. Dort meldet man sich wieder ab. Sp\u00e4ter kommt eine Rechnung \u00fcber den Betrag der Fahrkarte.\n\nExperten f\u00fcr Verkehrsprobleme gehen davon aus, dass durch dieses neue System Bus- und Bahnfahrten besonders f\u00fcr j\u00fcngere Menschen attraktiver werden. Sie hoffen, dass die Menschen ihr Auto auch mal stehen lassen, denn die l\u00e4stige Sucherei nach einem Fahrkartenautomaten und Kleingeld f\u00fcr die Fahrkarte f\u00e4llt nun weg. Wer sich mit dem Streckensystem und den verschiedenen Tarifen nicht auskennt, braucht sich auch nicht mehr den Kopf zu zerbrechen, denn \u201eTouch & Travel\u201c rechnet automatisch aus, wie teuer die Fahrt ist.",
  example: {
    id: 0,
    statement: "Verkehrsexperten ...",
    options: {
      a: "suchen nach Fahrkartenautomaten.",
      b: "vereinfachen das Streckensystem der BVG.",
      c: "hoffen auf mehr Menschen, die die Busse und Bahnen nutzen.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "die Fahrkosten bei der BVG.",
        b: "die M\u00f6glichkeit, Fahrkarten mit dem Handy zu bezahlen.",
        c: "die Verkehrsprobleme durch Busse und Bahnen.",
      },
      correct: "b",
    },
    {
      id: 8,
      statement: "\u201eTouch & Travel\u201c ...",
      options: {
        a: "gilt auf allen Strecken der BVG.",
        b: "muss man vor der ersten Fahrt \u00fcber den Computer anmelden.",
        c: "hei\u00dft eine neue Strecke bei der BVG.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "Junge Menschen ...",
      options: {
        a: "finden das System \u201eTouch & Travel\u201c sehr praktisch.",
        b: "kennen das Streckensystem der BVG nicht gut.",
        c: "sollen mit dem System \u201eTouch & Travel\u201c zu Kunden werden.",
      },
      correct: "c",
    },
  ],
};

export const module10LesenTeil2B: LesenTeil2Data = {
  module: 10,
  part: "Lesen Teil 2B",
  title: "Arbeiten im Urlaub?",
  text: "Die Deutschen wollen Urlaub nehmen, um ungest\u00f6rt arbeiten zu k\u00f6nnen. Diesen Eindruck bekommt man bei den Ergebnissen einer aktuellen Umfrage unter Besch\u00e4ftigten. Demnach arbeiten ungef\u00e4hr sechs von zehn Berufst\u00e4tigen auch im Urlaub. Und das, obwohl 71 Prozent dieser Menschen ihre Arbeit als anstrengend empfinden. Erstaunlicherweise zeigen auch die meisten Lebenspartner Verst\u00e4ndnis f\u00fcr dieses Verhalten. Nur 22 Prozent der Berufst\u00e4tigen in einer Partnerschaft bekommen deshalb Streit.\n\nTeilweise kommt der Druck zur \u201efreiwilligen\u201c Arbeit von der Firmenleitung. Von fast jedem vierten Angestellten erwartet der Arbeitgeber, dass er auch im Urlaub erreichbar ist. Au\u00dferdem geben \u00fcber die H\u00e4lfte der Berufst\u00e4tigen hierzulande an, dass sie in ihrer Freizeit von Kollegen oder von ihrem Chef kontaktiert werden.\n\nZwischen M\u00e4nnern und Frauen gibt es kaum Unterschiede. Bez\u00fcglich der Angestellten hingegen gilt: je j\u00fcnger, desto mehr. Der Anteil derer, die in der freien Zeit arbeiten, nimmt mit h\u00f6herem Alter also ab.\n\nWarum arbeiten so viele Menschen im Urlaub, in dem man sich eigentlich erholen sollte? Die meisten geben als Grund das Verantwortungsgef\u00fchl an oder \u201eweil sonst die Arbeit nicht fertig wird\u201c. Nur 28 % begr\u00fcnden ihr Verhalten damit, dass ihnen ihre Arbeit Spa\u00df mache.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "dass viele Deutsche in den Ferien arbeiten.",
      b: "dass Angestellte zu wenig Urlaub haben.",
      c: "dass die Arbeitsbedingungen in Deutschland sehr hart sind.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "dass viele Deutsche in den Ferien arbeiten.",
        b: "dass Angestellte zu wenig Urlaub haben.",
        c: "dass die Arbeitsbedingungen in Deutschland sehr hart sind.",
      },
      correct: "a",
    },
    {
      id: 11,
      statement: "Junge Berufst\u00e4tige ...",
      options: {
        a: "m\u00fcssen sich nicht so sehr von ihrer Arbeit erholen.",
        b: "arbeiten \u00f6fter im Urlaub als \u00e4ltere.",
        c: "haben mehr Verantwortungsgef\u00fchl als \u00e4ltere.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Viele Deutsche arbeiten im Urlaub, ...",
      options: {
        a: "weil ihre Lebenspartner es gut finden.",
        b: "damit sie mehr verdienen.",
        c: "weil sie etwas fertig machen wollen.",
      },
      correct: "c",
    },
  ],
};
