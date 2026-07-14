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

export const module4LesenTeil3: LesenTeil3Data = {
  module: 4,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Schule, gute Noten, Nachhilfeunterricht: Das alles sind Themen, die Ihre Bekannten zurzeit aus verschiedenen Gr\u00fcnden sehr besch\u00e4ftigen \u2013 und sie suchen nach L\u00f6sungen.",
  example: {
    id: 0,
    description:
      "Laura Ramazzotti studiert in Graz. Sie will Nachhilfeunterricht in Italienisch geben, denn sie braucht Geld, weil sie \u00f6fter zu ihren Eltern nach S\u00fcditalien fahren m\u00f6chte.",
    correctAd: "a",
  },
  situations: [
    {
      id: 13,
      description:
        "Emmas Sohn Ferdinand hat keine schlechten Noten, aber sie macht sich Sorgen, weil er sich nicht gut konzentrieren kann.",
      correctAd: "j",
    },
    {
      id: 14,
      description:
        "Wegen ihrer Arbeit kann Frau Beiste ihrem Sohn nicht bei den Hausaufgaben helfen. Doch ein Nachhilfeinstitut oder einen Privatlehrer kann sie sich nicht leisten.",
      correctAd: "f",
    },
    {
      id: 15,
      description:
        "Herr und Frau Horn \u00fcberlegen, ob ihre Tochter aufs Gymnasium oder lieber auf die Realschule gehen sollte.",
      correctAd: "h",
    },
    {
      id: 16,
      description:
        "Alexander macht n\u00e4chstes Jahr Abitur und braucht unbedingt Nachhilfe in Chemie und Physik. Er sucht einen Lehrer, der zu ihm nach Hause kommt.",
      correctAd: "0",
    },
    {
      id: 17,
      description:
        "Corinna hat gerade ihr Mathematikstudium abgeschlossen und sucht Arbeit in einem Nachhilfeinstitut.",
      correctAd: "e",
    },
    {
      id: 18,
      description:
        "Markus braucht unbedingt bessere Noten, wenn er das Abitur schaffen will. Aber bevor er sich f\u00fcr ein Nachhilfeinstitut entscheidet, m\u00f6chte er gucken, ob die Lehrer dort gut erkl\u00e4ren k\u00f6nnen.",
      correctAd: "g",
    },
    {
      id: 19,
      description:
        "Lena geht in Klasse 9 und hat schlechte Noten in Mathe. Sie sucht ein Computerprogramm, das ihr helfen kann.",
      correctAd: "b",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Nachhilfelehrer/in gesucht",
      description:
        "Sprachschule Lingua sucht Studenten/Studentinnen f\u00fcr Nachhilfe in Fremdsprachen (Italienisch, Spanisch, Franz\u00f6sisch). Flexible Arbeitszeiten, gute Bezahlung. Bewerbung an: lingua@mail.at",
    },
    {
      letter: "b",
      title: "MatheMaster \u2013 Lernsoftware",
      description:
        "Das Computerprogramm f\u00fcr bessere Mathenoten! F\u00fcr Klasse 5 bis 10. Individuelles Training, sofortige R\u00fcckmeldung. Jetzt 14 Tage kostenlos testen: www.mathemaster.de",
    },
    {
      letter: "c",
      title: "Nachhilfe online \u2013 StudyNet",
      description:
        "Nachhilfe per Videochat. Alle F\u00e4cher, alle Klassen. Flexible Termine, erfahrene Tutoren. Ab 15 Euro pro Stunde. Anmeldung auf www.studynet.de",
    },
    {
      letter: "d",
      title: "Feriencamp Lernwelt",
      description:
        "In den Sommerferien lernen und Spa\u00df haben! Nachhilfe am Vormittag, Sport und Spiel am Nachmittag. F\u00fcr Sch\u00fcler von 10 bis 16 Jahren. 2 Wochen, 490 Euro.",
    },
    {
      letter: "e",
      title: "Lernzentrum Plus sucht Mitarbeiter",
      description:
        "Wir suchen Absolventen der F\u00e4cher Mathematik, Physik und Deutsch f\u00fcr unser Nachhilfeinstitut. Festanstellung, gute Konditionen. Bewerbung an: jobs@lernzentrum-plus.de",
    },
    {
      letter: "f",
      title: "Kostenlose Hausaufgabenhilfe",
      description:
        "Ehrenamtliche Studenten helfen Ihrem Kind bei den Hausaufgaben \u2013 kostenlos! Montag bis Freitag, 14-17 Uhr im Jugendzentrum. Keine Anmeldung n\u00f6tig.",
    },
    {
      letter: "g",
      title: "Sch\u00fclerhilfe Zentrum",
      description:
        "Kostenlose Probestunde! \u00dcberzeugen Sie sich von unserer Qualit\u00e4t. Nachhilfe in allen F\u00e4chern, Klasse 5 bis Abitur. Kleine Gruppen, erfahrene Lehrer. Jetzt testen!",
    },
    {
      letter: "h",
      title: "Schulberatung Meier",
      description:
        "Welche Schule ist die richtige f\u00fcr Ihr Kind? Wir beraten Sie individuell. Gymnasium, Realschule oder Gesamtschule? Vereinbaren Sie einen Termin! Tel. 0800-555123.",
    },
    {
      letter: "i",
      title: "Musikschule Harmonie",
      description:
        "Klavier, Gitarre oder Geige lernen? Bei uns sind Sie richtig! Einzel- und Gruppenunterricht f\u00fcr alle Altersgruppen. Erste Probestunde gratis. Tel. 030-2211445.",
    },
    {
      letter: "j",
      title: "Konzentrationstraining f\u00fcr Kinder",
      description:
        "Ihr Kind kann sich schlecht konzentrieren? Unser spezielles Training hilft! 8 Wochen, einmal pro Woche. Kleine Gruppen. Krankenkasse zahlt Zuschuss. Info: 030-8876543.",
    },
  ],
};
