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

export const module6LesenTeil3: LesenTeil3Data = {
  module: 6,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Sie suchen nach Angeboten f\u00fcr Freunde und Bekannte, die w\u00e4hrend Ihres Aufenthalts an der Ostsee Verschiedenes unternehmen m\u00f6chten.",
  example: {
    id: 0,
    description:
      "Detlef macht im Oktober Urlaub an der Ostsee und sucht f\u00fcr sich und seine kleinen Kinder Attraktionen, die umsonst sind.",
    correctAd: "d",
  },
  situations: [
    {
      id: 13,
      description:
        "Mirjam und Sven sind Radelfans, m\u00f6chten aber f\u00fcr ihren Aufenthalt an der Ostsee ihre eigenen R\u00e4der nicht mitnehmen.",
      correctAd: "0",
    },
    {
      id: 14,
      description:
        "Robert m\u00f6chte im Urlaub Kitesurfen lernen und Leute kennenlernen.",
      correctAd: "j",
    },
    {
      id: 15,
      description:
        "Ehepaar Gerber f\u00e4hrt nach R\u00fcgen, um seinen Hochzeitstag, den 18. Juli, mit etwas au\u00dfergew\u00f6hnlicher Begleitung zu erleben.",
      correctAd: "h",
    },
    {
      id: 16,
      description:
        "Frau Biber und ihre Freundin m\u00f6chten ihren Urlaubsort am liebsten zu Fu\u00df kennenlernen.",
      correctAd: "e",
    },
    {
      id: 17,
      description:
        "Dieses Jahr kann Herr M\u00fcller aus Gesundheitsgr\u00fcnden keine Schiffsreise machen, m\u00f6chte aber den gro\u00dfen Kreuzfahrtschiffen so nahe wie m\u00f6glich sein.",
      correctAd: "f",
    },
    {
      id: 18,
      description:
        "Familie Deniser m\u00f6chte ihren Aufenthalt an der Ostsee mit einer kleinen Schiffsreise verbinden.",
      correctAd: "i",
    },
    {
      id: 19,
      description:
        "Frau Niederweg hat mit ihrer Klasse das Projekt \u201eTiere im Ostseeraum\u201c gemacht und sucht ein passendes Ziel f\u00fcr den Projektausflug.",
      correctAd: "a",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Naturkundemuseum Barther Bodden",
      description:
        "Ostseek\u00fcste \u2013 Landschaften und Tiere \u2013 Meerestiere der Ostsee. April\u2013Oktober tgl. 10\u201318 Uhr, November\u2013M\u00e4rz Di\u2013So 10\u201316 Uhr. Der Besuch des Naturparks ist am Eintrittspreis enthalten. www.naturkunde-barth.de",
    },
    {
      letter: "b",
      title: "Warnem\u00fcnder Sandwelt",
      description:
        "Bewundern Sie von April bis Oktober einzigartige Sandskulpturen am Ostseestrand. Im vergangenen Jahr sahen mehr als 100.000 Besucher die f\u00fcnf Meter hohen Kunstwerke aus \u00fcber 400 Tonnen Sand. Warnem\u00fcnde, Pier 7. T\u00e4glich von 8.00 Uhr bis Sonnenuntergang.",
    },
    {
      letter: "c",
      title: "Zoo Rostock & DARWINEUM",
      description:
        "Im Zoo Rostock \u2013 dem gr\u00f6\u00dften Zoo an der deutschen Ostseek\u00fcste \u2013 begegnen Sie 4.500 Tieren in 320 Arten aus aller Welt und erleben das Abenteuer Evolution im DARWINEUM. T\u00e4glich ab 9 Uhr ge\u00f6ffnet. www.zoo-rostock.de",
    },
    {
      letter: "d",
      title: "Kostenlose Spielpl\u00e4tze in Warnem\u00fcnde",
      description:
        "Auch die Kleinen kommen nicht zu kurz auf unseren kostenlosen Spielpl\u00e4tzen in Warnem\u00fcnde, Pier 7. T\u00e4glich von 8.00 Uhr bis Sonnenuntergang.",
    },
    {
      letter: "e",
      title: "Gef\u00fchrte Wanderungen auf R\u00fcgen",
      description:
        "Mit kundiger Begleitung erleben Sie Natur, Geschichte und Sagenwelt der Insel hautnah. Erleben Sie die traumhafte Landschaft der Ostsee-Insel R\u00fcgen. Bis 31. Oktober.",
    },
    {
      letter: "f",
      title: "Passagierkai Warnem\u00fcnde",
      description:
        "Die Anl\u00e4ufe der gro\u00dfen Kreuzfahrtschiffe hautnah erleben. Monitore informieren \u00fcber alle Schiffsbewegungen in der Ostsee. Am Passagierkai 1, 18119 Warnem\u00fcnde.",
    },
    {
      letter: "g",
      title: "Hafenpartys Warnem\u00fcnde",
      description:
        "Verpassen Sie nicht unsere Hafenpartys! Die Schiffe werden mit Live-Musik, B\u00fchnenprogramm und einem spektakul\u00e4ren H\u00f6henfeuerwerk gefeiert. Seien Sie dabei! 6. Mai, 4. Juni, 18. Juni, 8. Juli, 5. August, 3. September.",
    },
    {
      letter: "h",
      title: "Hubschrauber-Rundfl\u00fcge \u00fcber R\u00fcgen",
      description:
        "Sie wollen etwas Besonderes erleben oder etwas ganz Besonderes feiern? Chartern Sie uns. Helikopter-Rundfl\u00fcge \u00fcber R\u00fcgen. W\u00e4hlen Sie eine unserer verschiedenen Routen. Buchungen & Infos: Tel. 0172-1000 343.",
    },
    {
      letter: "i",
      title: "Hanse Sail \u2013 Ostsee-Schifffahrten",
      description:
        "Verein zur F\u00f6rderung traditioneller Schifffahrt in der Ostsee e.V. Tages-, Abend-, Kursfahrten und Mehrtagesfahrten. Hotels und Pensionen in und um Rostock. Stadtrundfahrten, Dinnertouren. www.hansesail.com",
    },
    {
      letter: "j",
      title: "Kitesurfen lernen \u2013 R\u00fcgen",
      description:
        "2 Tage Grundkurs und 3 Tage selbstst\u00e4ndiges Kiten unter Aufsicht, inkl. Leihausr\u00fcstung und Trainingsmaterial. \u00dcber 100 Kites & Boards aus unserer Schulung m\u00fcssen raus! Ab 1. September Lieblingspreise auf ALLES.",
    },
  ],
};
