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

export const module2LesenTeil3: LesenTeil3Data = {
  module: 2,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "In diesem Jahr möchten einige Ihrer deutschen Bekannten den Sommerurlaub im Ausland verbringen und suchen dafür passende Möglichkeiten.",
  example: {
    id: 0,
    description:
      "Thomas, Golfliebhaber, möchte gern mit seiner Familie in den Süden.",
    correctAd: "a",
  },
  situations: [
    {
      id: 13,
      description:
        "Anna liebt das Abenteuer und hat vor, eine exotische Reise zu unternehmen.",
      correctAd: "j",
    },
    {
      id: 14,
      description:
        "Tim hat großes Interesse an alten Burgen und Schlössern.",
      correctAd: "c",
    },
    {
      id: 15,
      description:
        "Martin ist Hobbykoch, deshalb möchte er im Urlaub auch die ausländische Küche näher kennenlernen.",
      correctAd: "0",
    },
    {
      id: 16,
      description:
        "Ilse und ihre drei Freundinnen sind romantische Typen. Sie wollen gemeinsam im Juni Urlaub machen.",
      correctAd: "g",
    },
    {
      id: 17,
      description:
        "Jutta hat ein anstrengendes Jahr hinter sich und würde gern etwas Besonderes für ihre Gesundheit tun.",
      correctAd: "b",
    },
    {
      id: 18,
      description:
        "Ben verbringt seinen Urlaub am liebsten in einem Hotel, doch nicht im Süden, weil er keine Hitze mag.",
      correctAd: "i",
    },
    {
      id: 19,
      description:
        "Leonie und Andreas verreisen nie ohne ihren Hund Max.",
      correctAd: "e",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Adria Italien",
      description:
        "Lido di Jesolo, 3½ Z.-Wohnung, zweistöckig, 2 Badezimmer, 2 Balkone, 1–6 Pers., aller Komfort, 150 m vom breiten Sandstrand, 5 Min. vom 18-Loch-Golfplatz Jesolo, ab 10. Juli, Haustiere nicht möglich. +4179952142, backerlea@tour.ch",
    },
    {
      letter: "b",
      title: "MARE Vitality Hotel & Medical Spa",
      description:
        "Urlaub am Meer – bewusst.er.leben. Erholen im MARE Vitality Hotel & Medical Spa auf Teneriffa. Nachhaltiges Wohlfühlen bei Wellness unter ärztlicher Leitung: Ayurveda, Shiatsu, Akupunktur, Osteopathie, Sauerstoff-Therapie, Naturkosmetik. Tel. 089/2019704. www.mare-vitality.de",
    },
    {
      letter: "c",
      title: "Donnerbergkreis – in der Pfalz ganz oben",
      description:
        "Pfälzer Gastlichkeit genießen, Weinproben, Wandern, Radfahren, Nordic Walking, Familienspaß in Keltendorf u.v.m. Donnersberger Touristik-Verband, PF 12 20, 67145 Kirchheim. Tel. 06 78/43 85 12, Fax 71 20 65. www.donnersberg-verb.de",
    },
    {
      letter: "d",
      title: "Romantisches Bauernhaus",
      description:
        "Im Chianti: Grossen/Studios (Doppelhaushälfte) mit großem Innenhof und Umschwung. Wfl. 121 m², Grundstück 1.107 m², Bj. 1948 (sanierungsbedürftig) ideal für Handwerker. Kaufpreis: Euro 170.000,– Fax 0761-8735568",
    },
    {
      letter: "e",
      title: "www.fewo-kreta.at",
      description:
        "Urlaub mit Hund. Gemütliche FeWos auf Kreta, komfortabel eingerichtet, mit TV, Dorf und Meer i.d. Nähe.",
    },
    {
      letter: "f",
      title: "Chalet Malena",
      description:
        "Lust auf Ferien im Wallis an Ostern? Mit wunderschöner Aussicht im Unterwallis. Kontakt 07723-1470 ab 17 Uhr. s.ferien@web.de. Homepage: www.chaletmalena.de.vu – auch nur Belegungsplan.",
    },
    {
      letter: "g",
      title: "Romantisches Ferienhaus PROVENCE",
      description:
        "mit Pool, frei 07.–14. Mai und 21.–28. Juni für 990 Euro/Woche. Infos unter www.maison-de-jeanette.de. Tel. 0285 9969 1345",
    },
    {
      letter: "h",
      title: "ITALIEN AL DENTE",
      description:
        "Amalfiküste im Juni: 10 Tage HP, Erholung, Wanderungen, Koch- und Sprachkurs, Begegnungen, Zitronenernte u.v.m. 07642-7228",
    },
    {
      letter: "i",
      title: "Mosshotel – Freundlicher um ganz Island",
      description:
        '\u201EMosshotel\u201C bieten 12 gute Touristenklassehotels an den landschaftlich sch\u00F6nsten Stellen. Wo auch immer in Island Sie sich aufhalten wollen \u2013 es ist immer ein Mosshotel in Ihrer N\u00E4he. www.mosshotels.is. Mosshotel freut sich auf SIE als Gast!',
    },
    {
      letter: "j",
      title: 'Vietnam \u201EPionier-Reise\u201C',
      description:
        "Einsames Trekking im Bergland des Nordens. Bootsfahrt in der Halong Bay. Dünen von Mui Ne per Jeep. Dschungel, unturistische Märkte an der Grenze zu China u.v.m. Ganz kleine Gruppe! Termin: 17.06. bis 06.07. Tel. 07621/44067 + 43001. Fax 07621/47797",
    },
  ],
};
