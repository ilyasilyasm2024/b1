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

export const module15LesenTeil3: LesenTeil3Data = {
  module: 15,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Eine Familie zu haben ist sch\u00f6n, bringt aber manchmal auch Sorgen und Probleme. Ihre Bekannten suchen nach L\u00f6sungen.",
  example: {
    id: 0,
    description:
      "Es ist Ostersonntag. Aber anstatt Ostereier zu suchen, liegt Alinas Tochter m\u00fcde auf dem Sofa und hat pl\u00f6tzlich hohes Fieber.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Eriks Tante ist psychisch krank. Er sucht nach einem Seminar, wo er lernen kann, sie besser zu verstehen und ihr zu helfen.",
      correctAd: "0",
    },
    {
      id: 14,
      description:
        "Klaras Vater hat wieder geheiratet und Klara mag ihre neue \u201eMama\u201c \u00fcberhaupt nicht. Sie will ausziehen und allein wohnen. Sie ist aber erst 16 und wei\u00df nicht, ob sie das darf.",
      correctAd: "a",
    },
    {
      id: 15,
      description:
        "Herr Lenz wollte sich letzte Woche noch einmal bei der Elternberatung wegen der Di\u00e4t seines Sohnes Rat holen, aber es war niemand da.",
      correctAd: "d",
    },
    {
      id: 16,
      description:
        "Daniel steht kurz vor dem Realschulabschluss, wei\u00df aber noch immer nicht, was er danach machen m\u00f6chte. Seine Eltern m\u00f6chten mit ihm zu einer Beratung gehen.",
      correctAd: "e",
    },
    {
      id: 17,
      description:
        "Alexia und Gregor planen, sich eine neue K\u00fcche anzuschaffen. Heute wollen sie in die Stadt, um sich in verschiedenen Gesch\u00e4ften zu informieren. Da wird pl\u00f6tzlich die Babysitterin krank.",
      correctAd: "c",
    },
    {
      id: 18,
      description:
        "Die Mutter von Simon ist krank und sehr alt und manchmal wird das Zusammenleben schwierig. Er m\u00f6chte gern von den Erfahrungen anderer lernen.",
      correctAd: "j",
    },
    {
      id: 19,
      description:
        "Antonia erwartet ihr erstes Kind und m\u00f6chte sich nicht nur darauf verlassen, was sie in B\u00fcchern gelesen hat.",
      correctAd: "g",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Rechtsberatung \u2013 anonym, vertraulich, kostenfrei",
      description:
        "Wir beraten in allen Rechtsgebieten, egal ob Strafrecht, Familienrecht, Arbeitsrecht oder Vertragsrecht. Jeden 1. und 3. Mittwoch im Monat von 16.00 bis 19.00 Uhr in der Gartenstr. 35. In dringenden F\u00e4llen kannst du eine Nachricht hinterlassen.",
    },
    {
      letter: "b",
      title: "Kantonales Arbeitsamt Basel-Stadt \u2013 \u00c4rztlicher Bereitschaftsdienst",
      description:
        "Neu! \u00c4rztlicher Bereitschaftsdienst f\u00fcr Notf\u00e4lle. Notfalldienst samstags/sonntags und an Feiertagen. Tel.: 081-2 54 34 00, Basel-Stadt, Utengasse 12.",
    },
    {
      letter: "c",
      title: "Familien- und Jugendhilfe \u2013 Kinderbetreuung",
      description:
        "Wird Ihre Babysitterin krank oder brauchen Sie kurzfristig eine Betreuung f\u00fcr Ihre Kinder? Wir vermitteln zuverl\u00e4ssige Betreuerinnen \u2013 auch spontan und stundenweise. Tel. (0731) 370 400.",
    },
    {
      letter: "d",
      title: "Elternberatung \u2013 GET Erfurt",
      description:
        "B\u00fcrozeiten f\u00fcr die Elternberatung \u00e4ndern sich ab 1. M\u00e4rz. Mo u. Do: 15.00\u201317.00 Uhr, Erziehungsberatung; Di u. Mi: 16.00\u201318.00 Uhr, Gesundheitsberatung. Friedrichstr. 18, Erfurt, Tel.: 0361-2244567.",
    },
    {
      letter: "e",
      title: "ELTERN-KIND-INITIATIVE \u2013 Beratung zur Berufswahl",
      description:
        "Sie wissen nicht, wie es nach der Schule weitergeht? Wir beraten Jugendliche und Eltern rund um Ausbildung, Studium und Berufswahl. Vereinbaren Sie einen Termin.",
    },
    {
      letter: "f",
      title: "GET-Messe Freiburg \u2013 Geb\u00e4ude + Energie + Technik",
      description:
        "Vom 25. bis 27. Februar, 10.00 Uhr bis 18.00 Uhr, GET-Messe Freiburg, Europaplatz. Rund ums Haus, Heizen, Technik. Informationen unter www.get-freiburg.de.",
    },
    {
      letter: "g",
      title: "Verein Hilfe f\u00fcr Kinder und Eltern e.V.",
      description:
        "Sie erwarten ein Kind und m\u00f6chten sich vorbereiten? Wir bieten Kurse und Erfahrungsaustausch f\u00fcr werdende Eltern. Kompetent begleitet von Fachleuten. Tel. 0355-803513.",
    },
    {
      letter: "h",
      title: "Kinder- und Jugendhilfe Kassel",
      description:
        "Wir bieten Freizeitangebote und Ferienbetreuung f\u00fcr Kinder und Jugendliche. Melden Sie Ihr Kind rechtzeitig an. Informationen im B\u00fcro der Kinder- und Jugendhilfe Kassel.",
    },
    {
      letter: "i",
      title: "Freie Alten-, Kranken- und Behindertenhilfe",
      description:
        "Wir suchen Auftr\u00e4ge in den Bereichen Montage-, Versand-, Sortier- oder Verpackungsarbeiten, die wir preisg\u00fcnstig f\u00fcr Sie ausf\u00fchren. Verein Gemeinsam e.V.",
    },
    {
      letter: "j",
      title: "Verein Gemeinsam e.V. \u2013 Angeh\u00f6rige pflegen",
      description:
        "Caf\u00e9 f\u00fcr pflegende Angeh\u00f6rige alter Menschen. Erfahrungsaustausch und gegenseitige Unterst\u00fctzung. Donnerstag um 9 Uhr, Petersstra\u00dfe 2. Tel. 0355-803513.",
    },
  ],
};
