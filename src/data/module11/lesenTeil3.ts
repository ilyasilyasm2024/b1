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

export const module11LesenTeil3: LesenTeil3Data = {
  module: 11,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Viele Ihrer Bekannten m\u00f6chten den Valentinstag mit ihrer/ihrem Liebsten feiern und suchen nach passenden M\u00f6glichkeiten.",
  example: {
    id: 0,
    description:
      "Max liebt Klaviermusik. Paula, seine Freundin, sucht nach einem passenden Angebot f\u00fcr das gemeinsame Valentinsdinner.",
    correctAd: "i",
  },
  situations: [
    {
      id: 13,
      description:
        "Maja m\u00f6chte ihren Mann zu einem speziellen Valentinsmen\u00fc einladen, nur kommt er leider erst am 20.2. von einer beruflichen Auslandsreise zur\u00fcck.",
      correctAd: "e",
    },
    {
      id: 14,
      description:
        "Christoph m\u00f6chte seine Freundin mit roten Rosen zum Fr\u00fchst\u00fcck \u00fcberraschen. Er muss aber schon um halb neun im B\u00fcro sein.",
      correctAd: "h",
    },
    {
      id: 15,
      description:
        "Herr Seidel m\u00f6chte seine Frau zu einem Valentinskonzert mit deutschen Liebesliedern einladen.",
      correctAd: "0",
    },
    {
      id: 16,
      description:
        "Florian und Eleni trinken keinen Alkohol und wollen deshalb beim Valentinsdinner die alkoholischen Getr\u00e4nke nicht mitbezahlen.",
      correctAd: "a",
    },
    {
      id: 17,
      description:
        "Herr Martens liebt es, sich Autos anzuschauen und auszuprobieren. Frau Martens sucht nach einer Valentins\u00fcberraschung, die m\u00f6glichst umsonst sein sollte.",
      correctAd: "f",
    },
    {
      id: 18,
      description:
        "Karsten m\u00f6chte ein romantisches Essen f\u00fcr seine Freundin kochen. Er sucht aber noch nach einer guten Idee f\u00fcr ein Dessert, vielleicht etwas mit Schokolade.",
      correctAd: "d",
    },
    {
      id: 19,
      description:
        "Lutz ist am Valentinstag auf einer Konferenz in Madrid. Sonja m\u00f6chte ihm Blumen schicken.",
      correctAd: "j",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Liebesmen\u00fc \u2013 Klassik f\u00fcr Liebende",
      description:
        "14. Februar, 19.00, Neues Schloss, Dresden. \u201eSchlemmerkonzert-Dinner\u201c mit einem Dreigang-Men\u00fc vor oder nach dem Konzert. Musik zu den Opern von Mozart, Puccini und Verdi. Getr\u00e4nke werden separat und nur nach Verbrauch berechnet. www.kulturerleben.de",
    },
    {
      letter: "b",
      title: "Blumenstube M\u00e4hringer",
      description:
        "\u00dcberraschen Sie Ihre(n) Liebste(n) mit einem Blumengru\u00df zum Valentinstag! Wir versenden Ihre Blumengr\u00fc\u00dfe nach ganz Europa. Bestellung und Versand innerhalb von 24 Stunden.",
    },
    {
      letter: "c",
      title: "Blumen Bauer & S\u00f6hne \u2013 Gartencenter & G\u00e4rtnerei",
      description:
        "M\u00f6bius­stra\u00dfe 56. Telefon +41 (0)61 048. Der sch\u00f6nste Blumengru\u00df zum Valentinstag \u2013 frische Str\u00e4u\u00dfe und Pflanzen aus eigener G\u00e4rtnerei.",
    },
    {
      letter: "d",
      title: "Nachspeisen zum Valentinstag \u2013 von Karla Lange",
      description:
        "Mit den besten Rezepten f\u00fcr einen romantischen Abend zu zweit. Nachspeisen \u2013 einfach und paradiesisch gut. Jetzt bestellen bei: www.wenzel.de",
    },
    {
      letter: "e",
      title: "Restaurant \u2013 Valentinswochenende",
      description:
        "Profitieren Sie von unseren g\u00fcnstigen Angeboten am Valentinswochenende. Ein besonderes Men\u00fc f\u00fcr Verliebte \u2013 auch am Wochenende nach dem 14. Februar, am 20. und 21. Februar. Reservieren Sie rechtzeitig.",
    },
    {
      letter: "f",
      title: "Limousine Center \u2013 Probefahrt zum Valentinstag",
      description:
        "Nutzen Sie das Valentinswochenende f\u00fcr eine kostenlose Probefahrt! Bei Probefahrten erwartet Ihre andere Herzensh\u00e4lfte eine besondere \u00dcberraschung. Neu- und Gebrauchtwagen mit wenigen Kilometern zu Top-Preisen. Auch Limousinen-Service.",
    },
    {
      letter: "g",
      title: "Stanserhorn \u2013 Valentinstag auf dem Berg",
      description:
        "Genie\u00dfen Sie auf 1900 m ein Liebesmen\u00fc und den Ausblick. \u201eSchlemmerkonzert-Dinner\u201c mit einem Dreigang-Men\u00fc. Reservieren Sie Ihren Platz. www.stanserhorn.ch",
    },
    {
      letter: "h",
      title: "Fr\u00fchst\u00fccks-Blumenservice \u2013 ab 6 Uhr",
      description:
        "F\u00fcr Fr\u00fchaufsteher: Wir liefern Ihre Valentinsblumen ab 6 Uhr ge\u00f6ffnet, direkt zum Fr\u00fchst\u00fcck. Verkauf und Versand innerhalb von Kaltern bis vor die Haust\u00fcr.",
    },
    {
      letter: "i",
      title: "Klaviermusik-Dinner am Klavier",
      description:
        "Verbringen Sie einen romantischen Valentinsabend bei einem exquisiten Men\u00fc und Live-Klaviermusik. Reservieren Sie Ihren Tisch f\u00fcr zwei. Hoher Markt 35, Wien. Telefon-Bestellungen: (01) 533 47 52.",
    },
    {
      letter: "j",
      title: "Blumenversand nach ganz Europa",
      description:
        "\u00dcberraschen Sie Ihre(n) Liebste(n) am Valentinstag mit einem Blumengru\u00df \u2013 auch im Ausland! Wir versenden Ihre Blumengr\u00fc\u00dfe nach ganz Europa. Bestellen Sie online.",
    },
  ],
};
