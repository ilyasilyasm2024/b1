export interface LesenTeil3Situation {
  id: number;
  description: string;
  correctAd: string;
}

export interface LesenTeil3Ad {
  letter: string;
  title: string;
  description: string;
}

export interface LesenTeil3Data {
  module: number;
  part: string;
  time: string;
  instruction: string;
  context: string;
  example: LesenTeil3Situation;
  situations: LesenTeil3Situation[];
  ads: LesenTeil3Ad[];
}

export const module13LesenTeil3: LesenTeil3Data = {
  module: 13,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Die meisten Ihrer Bekannten haben ein Auto. Aber ein Auto ist nicht nur praktisch, sondern es macht auch Arbeit und manchmal hat man auch Probleme. Ihre Bekannten suchen nach L\u00f6sungen.",
  example: {
    id: 0,
    description:
      "Gerlinde muss nach Wien. Auf ihrem Programm stehen zahlreiche Gesch\u00e4ftstermine. Mit dem eigenen Auto und dauernder Parkplatzsuche schafft sie das nie.",
    correctAd: "h",
  },
  situations: [
    {
      id: 13,
      description:
        "Ehepaar Jansen bringt sein Auto zum Waschen regelm\u00e4\u00dfig in eine Autowaschanlage. Es sucht aber immer nach M\u00f6glichkeiten, dabei auch etwas Gutes f\u00fcr andere zu tun.",
      correctAd: "e",
    },
    {
      id: 14,
      description:
        "Benno hat seit Kurzem den F\u00fchrerschein, m\u00f6chte aber noch mehr \u00fcber sicheres und energiesparendes Fahren lernen.",
      correctAd: "0",
    },
    {
      id: 15,
      description:
        "Frau Wyss ist mit ihrem alten Elektro-Auto nicht mehr zufrieden und m\u00f6chte sich \u00fcber die neuesten E-Modelle der verschiedenen Automarken informieren.",
      correctAd: "j",
    },
    {
      id: 16,
      description:
        "Herr Wieser ist gehbehindert und f\u00e4hrt deshalb immer mit dem Auto ins B\u00fcro. Aber die Strecke von Klosterneuburg bis ins Zentrum von Wien ist lang und Benzin wird immer teurer.",
      correctAd: "g",
    },
    {
      id: 17,
      description:
        "Melissa hat seit drei Monaten einen F\u00fchrerschein und findet es nicht gut, dass sie noch nicht einmal einen Reifen wechseln kann.",
      correctAd: "a",
    },
    {
      id: 18,
      description:
        "Bei ihrem letzten Unfall war Frau Schulte zwei Tage ohne Auto, was ihr bei ihrer Arbeit als Versicherungsvertreterin viele Probleme verursacht hat.",
      correctAd: "d",
    },
    {
      id: 19,
      description:
        "Herr Nowak hatte leider schon wieder einen Unfall. Das letzte Mal hat er sich sehr \u00fcber die Werkstatt und die Versicherungsvertreter ge\u00e4rgert.",
      correctAd: "f",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Sicher fahren lernen",
      description:
        "Umweltschonend und energiesparend fahren lernen. Fahrtechnik und kleine Reparaturen: Reifenwechsel, Pannenhilfe. N\u00e4chster Termin 19. Oktober. Fahrschule Peter R\u00fcegg.",
    },
    {
      letter: "b",
      title: "Autohaus Hellmer",
      description:
        "Gro\u00dfer Automarkt mit Klimaberatung. Neu- und Gebrauchtwagen, individuelle Beratung, Probefahrt m\u00f6glich.",
    },
    {
      letter: "c",
      title: "autoscout24 \u2013 umweltbewusst fahren zu fairen Preisen",
      description:
        "\u00d6sterreichs gr\u00f6\u00dfter Automarkt. Finden Sie umweltfreundliche Fahrzeuge zu fairen Preisen. Mobilit\u00e4tsgarantie inklusive.",
    },
    {
      letter: "d",
      title: "Allround-Service \u2013 Auto Pro",
      description:
        "Der absolute Allround-Service rund ums Auto. Bei einem Unfall stellen wir Ihnen sofort ein Ersatzfahrzeug zur Verf\u00fcgung, damit Sie mobil bleiben. Schnell und zuverl\u00e4ssig.",
    },
    {
      letter: "e",
      title: "Autowaschen f\u00fcr einen guten Zweck",
      description:
        "Na, was machen Sie so regelm\u00e4\u00dfig am Samstag? Ab mit dem Auto in die Waschanlage! Im April k\u00f6nnen Sie das jeden Samstag bei Car Wash Royal am Kluserweg 10 in Schwerte tun und dazu noch einen guten Zweck unterst\u00fctzen. Von jeder Fahrzeugw\u00e4sche gehen 4,- \u20ac in die Spendenkasse, die anschlie\u00dfend an die Jugendfeuerwehr Schwerte \u00fcbergeben wird.",
    },
    {
      letter: "f",
      title: "Auto Pro \u2013 Werkstatt & Versicherungsservice",
      description:
        "\u00c4rger mit Werkstatt und Versicherung nach einem Unfall? Wir k\u00fcmmern uns um alles: Reparatur, Schadensabwicklung mit der Versicherung, kompetente Beratung. Alles aus einer Hand.",
    },
    {
      letter: "g",
      title: "Mitfahrgelegenheit Klosterneuburg \u2013 Wien",
      description:
        "Allein ist langweilig und teuer?! Suche t\u00e4gl. Mitfahrgelegenheit Klosterneuburg \u2013 Wien-Zentrum, B\u00fcroarbeitszeiten. Selbstverst\u00e4ndlich nicht umsonst \u2013 \u00fcbernehme meinen Teil der Benzinkosten. Kontakt: Maximilian 0630-8977234.",
    },
    {
      letter: "h",
      title: "Limousinen-Service Wien",
      description:
        "Zahlreiche Gesch\u00e4ftstermine in Wien? Kein Parkplatzstress. Wir fahren Sie zuverl\u00e4ssig von Termin zu Termin. Der komfortable Weg durch die Stadt.",
    },
    {
      letter: "i",
      title: "Auto Salon Genf",
      description:
        "Besuchen Sie den Auto Salon Genf. Dieses Jahr im Blickpunkt: neue Modelle und Technologien. Erleben Sie die Fahrzeugneuheiten der gro\u00dfen Marken.",
    },
    {
      letter: "j",
      title: "E-Auto: neue Modelle \u2013 neue Technologie",
      description:
        "Alle E-Modelle der verschiedenen Automarken an einem Ort. Neue Technologien, beste Leistungen. Informieren Sie sich \u00fcber die neuesten Elektrofahrzeuge und machen Sie eine Probefahrt.",
    },
  ],
};
