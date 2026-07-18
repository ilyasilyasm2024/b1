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

export const module9LesenTeil3: LesenTeil3Data = {
  module: 9,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Weihnachten ist nahe. Deshalb m\u00f6chten einige Ihrer Freundinnen und Freunde ihren Verwandten eine Freude machen und suchen nach passenden M\u00f6glichkeiten.",
  example: {
    id: 0,
    description:
      "Torstens Onkel geht gern in Konzerte, doch hat er leider nur an Wochenenden Zeit, weil er in der Woche bis sp\u00e4t arbeitet.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Max' Schwester hat zwei Kinder. Sie ist sehr kreativ und macht die Weihnachtsgeschenke f\u00fcr ihre Kleinen und ihre Freunde am liebsten selbst in Handarbeit.",
      correctAd: "f",
    },
    {
      id: 14,
      description:
        "Janas Eltern besuchen eine Tanzschule und lieben dieses neue Hobby sehr.",
      correctAd: "a",
    },
    {
      id: 15,
      description:
        "Christina und Paul wollen ihrem Sohn etwas Besonderes schenken. Der Traumberuf des Zw\u00f6lfj\u00e4hrigen ist Pilot.",
      correctAd: "d",
    },
    {
      id: 16,
      description:
        "Sabine und Marei gehen gern zusammen einkaufen. Dieses Jahr m\u00f6chten sie f\u00fcr ihre Familie neuen Weihnachtsschmuck f\u00fcr den Tannenbaum kaufen.",
      correctAd: "0",
    },
    {
      id: 17,
      description:
        "Oskar geht jedes Jahr mit seiner Nichte in ein Weihnachtskonzert. Dieses Mal soll es aber keine klassische Weihnachtsmusik sein.",
      correctAd: "j",
    },
    {
      id: 18,
      description:
        "Bernd m\u00f6chte seine Frau zu einem Festessen zu zweit einladen, denn sie haben sich in der Adventszeit kennengelernt.",
      correctAd: "e",
    },
    {
      id: 19,
      description:
        "Luzies Gro\u00dfvater geht nicht gern aus. Er sitzt am liebsten in seinem Schaukelstuhl, trinkt sein Bier und liest.",
      correctAd: "i",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Adventsball \u2013 Tanzsportclub Altstetten",
      description:
        "Wir laden herzlich ein zu unserem Adventsball am 19. Dezember in die Stadthalle Altstetten. Beginn: 19.30 Uhr, Einlass: 18.45 Uhr. Ein festlicher Abend f\u00fcr alle, die das Tanzen lieben. Reservieren Sie Ihre Platzkarte bei ticketline.ch.",
    },
    {
      letter: "b",
      title: "Weihnachts-Oratorium I\u2013VI \u2013 J. S. Bach",
      description:
        "Sonntag, 15. Dezember, 11.00 Uhr. Johann Sebastian Bach: Weihnachts-Oratorium. Ein besonderes Konzerterlebnis am Wochenende. Kartenvorverkauf mit Platzreservierung ab 30. November.",
    },
    {
      letter: "c",
      title: "Reclams Weihnachtsbuch",
      description:
        "Hrsg. Stephan Koranyi, ill. Jochen Koch. Weihnachtliche Geschichten und Gedichte, sch\u00f6n illustriert \u2013 ein besinnliches Geschenk zum Fest.",
    },
    {
      letter: "d",
      title: "Kinderweihnachtsmarkt \u2013 Traumberufe erleben",
      description:
        "Traditioneller Kinderweihnachtsmarkt am 2. und 9. Dezember, jeweils von 10.00 bis 18.00 Uhr im CVJM-Haus, Landwehrstra\u00dfe. Kinder k\u00f6nnen viele Berufe ausprobieren, u.a. einen Flugsimulator f\u00fcr angehende Piloten.",
    },
    {
      letter: "e",
      title: "Weihnachtliches Festessen f\u00fcr zwei",
      description:
        "Das Weihnachtsballett mit Musik von Peter I. Tschaikowski und ein romantisches Men\u00fc f\u00fcr zwei Personen \u2013 der perfekte Abend f\u00fcr Verliebte in der Adventszeit.",
    },
    {
      letter: "f",
      title: "Das goldene Kreativbuch zu Weihnachten",
      description:
        "Zum Weihnachtsfest sollst du kreativ sein! Ob allein oder mit den eigenen Kindern \u2013 verwirklichen Sie Ihr handwerkliches Geschick. Mit diesem Buch bekommen Sie sch\u00f6ne Inspirationen f\u00fcr Geschenke und auch Weihnachtsschmuck. Jetzt online bestellen.",
    },
    {
      letter: "g",
      title: "Der Nussknacker \u2013 Deutsche Oper Berlin",
      description:
        "Kinder tanzen f\u00fcr Kinder. Der Nussknacker an der Deutschen Oper Berlin. Spielzeiten: 25., 26., 27. November, 6.\u201322. Dezember. Foyer der Deutschen Oper Berlin. Eintritt: Erwachsene 15 Euro, Kinder 8,50 Euro.",
    },
    {
      letter: "h",
      title: "Weihnachtliche Panfl\u00f6te",
      description:
        "Genie\u00dfen Sie besinnliche Weihnachtsmelodien auf der Panfl\u00f6te. Kartenvorverkauf mit Platzreservierung. Tel. 07443-8957.",
    },
    {
      letter: "i",
      title: "Reclams Weihnachtsbuch \u2013 zum gem\u00fctlichen Lesen",
      description:
        "Weihnachtliche Geschichten und Gedichte f\u00fcr gem\u00fctliche Stunden zu Hause. Das ideale Geschenk f\u00fcr alle, die es sich am liebsten daheim mit einem Buch bequem machen.",
    },
    {
      letter: "j",
      title: "Harlem Gospel Choir",
      description:
        "Fr. 17.12. und Sa. 18.12. in der Auferstehungs-Kirche. Der Harlem Gospel Choir pr\u00e4sentiert die sch\u00f6nsten Spirituals und Gospel in einer mitrei\u00dfenden B\u00fchnenshow. Reservieren Sie Ihre Platzkarte bei ticketline.ch.",
    },
  ],
};
