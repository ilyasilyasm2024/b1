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

export const module12LesenTeil3: LesenTeil3Data = {
  module: 12,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Sch\u00fcler und Lehrer aus Ihrem Bekanntenkreis suchen nach interessanten Angeboten f\u00fcr Klassenfahrten im April oder Mai.",
  example: {
    id: 0,
    description:
      "Frau Klein sucht f\u00fcr ihre 6. Klasse ein Angebot, das ein interessantes Umweltthema hat und hilft, die Beziehungen unter den Sch\u00fclern zu verbessern.",
    correctAd: "e",
  },
  situations: [
    {
      id: 13,
      description:
        "Tim und Melina helfen ihrer Lehrerin bei der Organisation der Klassenfahrt. Sie suchen ein Angebot f\u00fcr London.",
      correctAd: "0",
    },
    {
      id: 14,
      description:
        "Die Sch\u00fcler der Neugriechischklasse am Einstein-Gymnasium waren letztes Jahr in Athen und m\u00f6chten dieses Mal einen anderen Teil von Griechenland kennenlernen.",
      correctAd: "e",
    },
    {
      id: 15,
      description:
        "Benno Pohl m\u00f6chte dieses Jahr mit seiner 5. Klasse eine Klassenfahrt machen, die den Kindern die M\u00f6glichkeit gibt, sportlich aktiv zu sein.",
      correctAd: "d",
    },
    {
      id: 16,
      description:
        "Frau Keller ist Lehrerin in Z\u00fcrich. Sie findet, dass eine Klassenfahrt eine gute Gelegenheit ist, damit die Kinder das Leben auf dem Land kennenlernen.",
      correctAd: "j",
    },
    {
      id: 17,
      description:
        "Die Sch\u00fcler der letzten Klasse des Keppler-Gymnasiums Linz haben beschlossen, nach Berlin zu fahren. Eine Flugreise ist aber f\u00fcr alle zu teuer.",
      correctAd: "c",
    },
    {
      id: 18,
      description:
        "Herr Moser unterrichtet Alte Geschichte und m\u00f6chte dieses Jahr mit seinen Sch\u00fclern nach Griechenland. Er sucht ein Angebot f\u00fcr Flug und Unterkunft.",
      correctAd: "a",
    },
    {
      id: 19,
      description:
        "Die Sch\u00fcler der Glattal-Schule in Z\u00fcrich m\u00f6chten nach Berlin fahren. Wegen der Entfernung kommt aber eine Bahnreise f\u00fcr sie nicht in Frage.",
      correctAd: "h",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Athen \u2013 Flugreise",
      description:
        "Klassenfahrt nach Athen: Flug- und R\u00fcckflug, 4 x \u00dcbernachtung in einem Jugendhotel im Zentrum von Athen inkl. Fr\u00fchst\u00fcck, Bustransfer Flughafen \u2013 Hotel \u2013 Flughafen. Ideal f\u00fcr Geschichtsklassen. www.klassenfahrtensuper.de",
    },
    {
      letter: "b",
      title: "London \u2013 Busreise",
      description:
        "Klassenfahrt nach London. 3 x \u00dcbernachtung/Fr\u00fchst\u00fcck. St\u00e4dtef\u00fchrung, Museumsbesuche und vieles mehr. Beratung & Buchung.",
    },
    {
      letter: "c",
      title: "Berlin \u2013 Busreise",
      description:
        "Prima Klima-Klassenfahrt nach Berlin. G\u00fcnstige Busreise statt teurer Flugreise. Aufenthalt: 3 Tage, inkl. \u00dcbernachtung, Fr\u00fchst\u00fcck, St\u00e4dtef\u00fchrung. Ab \u20ac 99,- pro Person. www.primaklassenreisen.at",
    },
    {
      letter: "d",
      title: "Klassenfahrt ins Skigebiet \u2013 Steibis",
      description:
        "5 Tage \u2013 die beliebteste Klassenreise, besonders beliebt bei den Klassen 4\u20137. Das Skiparadies f\u00fcr Kinder. Kinderskikurse f\u00fcr Anf\u00e4nger und Fortgeschrittene. 4 x \u00dcbernachtung mit Vollpension, 4-Tage-Skipass. Ab \u20ac 177,-.",
    },
    {
      letter: "e",
      title: "Prima Klima-Klassenfahrt \u2013 Lehrerinformationsreise",
      description:
        "Aufenthalt: 3 Tage. \u00d6kologische und biologische Beobachtungen und Erlebnisse, um das Verh\u00e4ltnis der Sch\u00fcler zueinander und zur Natur zu verbessern. Umweltbildung, die Sch\u00fcler zusammenbringt.",
    },
    {
      letter: "f",
      title: "M\u00f6hnesee \u2013 Stausee in landschaftlich reizvoller Umgebung",
      description:
        "Berlin \u2013 Bahn: 5 Tage M\u00f6hnesee. Klassenfahrt in reizvolle Umgebung. \u00dcbernachtung/Fr\u00fchst\u00fcck. Wanderungen mit fachkundiger Begleitung. St\u00e4dtef\u00fchrung und Programm.",
    },
    {
      letter: "g",
      title: "Marthalen im Z\u00fcricher Weinland \u2013 Busreise",
      description:
        "Klassenfahrt nach Marthalen. Weinland-Erlebnis, Wanderungen und Natur. \u00dcbernachtung/Fr\u00fchst\u00fcck. Beratung & Buchung.",
    },
    {
      letter: "h",
      title: "Berlin \u2013 Flugreise, 4 Tage",
      description:
        "Klassenfahrt nach Berlin mit dem Flugzeug \u2013 schnell und bequem trotz gro\u00dfer Entfernung. Stadtf\u00fchrung, Freizeitprogramm, 3 x \u00dcbernachtung. www.klassenfahrtensuper.de",
    },
    {
      letter: "i",
      title: "Griechenland \u2013 5 Tage, die beliebteste Klassenreise",
      description:
        "Klassenfahrt in Griechenland. Verschiedene Zimmer, Vollpension. Stadtf\u00fchrung, Ausfl\u00fcge. Nur November bis Februar.",
    },
    {
      letter: "j",
      title: "Bauernhof als Unterkunft \u2013 5 Tage mit tollen Projekten",
      description:
        "Oberstaufen: Bauernhof als Unterkunft mit tollen Projekten. Themenkreise: Lebensmittelproduktion, Weinberge, Feld und Garten, Tiere. Reise, 4 x \u00dcbernachten, Vollpension, Projektbetreuung inkl. Besonders beliebt bei den Klassen 4\u20137.",
    },
  ],
};
