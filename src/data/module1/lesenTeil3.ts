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
  example: LesenTeil3Situation;
  situations: LesenTeil3Situation[];
  ads: LesenTeil3Ad[];
}

export const module1LesenTeil3: LesenTeil3Data = {
  module: 1,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  example: {
    id: 0,
    description:
      "Ilse lebt auf einem Bauernhof. Sie hat einen Hund, zwei Katzen, Kaninchen und sogar ein Pferd. Trotzdem hätte sie gern auch noch einen Esel.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Ihre Bekannten sind Tierliebhaber. Sie haben bestimmte Wünsche und suchen nach passenden Anzeigen.",
      correctAd: "g",
    },
    {
      id: 14,
      description:
        "Susanne möchte im Urlaub verreisen und weiß nicht, wer in dieser Zeit auf ihre kleine, weiße Maus aufpassen kann.",
      correctAd: "h",
    },
    {
      id: 15,
      description:
        "Thomas ist Single und hält einen Dackel. Die Nachbarn haben sich beschwert, weil der Hund in der Wohnung laut wird, wenn Thomas tagsüber im Büro ist. Er möchte das Problem lösen.",
      correctAd: "a",
    },
    {
      id: 16,
      description:
        "Die Familie Schmidt hat einen großen Garten und eine Bernhardiner-Hündin. Damit ihr Haustier nicht allein ist, wäre sie bereit, einen zweiten Hund aufzunehmen. Er soll aber nicht zu groß sein.",
      correctAd: "0",
    },
    {
      id: 17,
      description:
        "Herr Albrecht muss aus beruflichen Gründen umziehen und kann seinen Hund nicht mitnehmen. Er sucht ein neues Zuhause für ihn.",
      correctAd: "j",
    },
    {
      id: 18,
      description:
        "Für ihr neues, großes Aquarium möchte Eva noch einige Fische kaufen.",
      correctAd: "c",
    },
    {
      id: 19,
      description:
        "Karl will sich eine Katze anschaffen. Er mag diese Tiere, weil sie nicht viel Pflege brauchen und sehr selbstständig sind.",
      correctAd: "e",
    },
    {
      id: 20,
      description:
        "Frau Bach mag Vögel. Sie sucht zurzeit einen Papagei.",
      correctAd: "d",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Dringend gesucht!",
      description:
        'Frauchen u./od. Herrchen, die armen, roten Cockerspaniel (Rüde, kastriert, 5 1/2 J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben. Tel. 089/3095486',
    },
    {
      letter: "b",
      title: "Exotische Vögel",
      description:
        'Edelpapageien, Alexandersittiche, Ziegensittiche 21/6, zu verkaufen. Fam. Diethelm, D-79397 Müllheim, Tel. 07631-7192, Fax 7820.',
    },
    {
      letter: "c",
      title: 'Arme Katze "Blacky"',
      description:
        '4J., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen! Wer nimmt sie liebevoll auf? Tel. 0 38 62/32 681',
    },
    {
      letter: "d",
      title: 'Gesucht wird der Graupapagei "Bubi"',
      description:
        'der am 1. Juni aus Wien 21. Bezirk entflogen ist! Er ist sehr zahm. Tel. 01/290 60 43. Bel. 2000,-',
    },
    {
      letter: "e",
      title: "Graupapageienbabys",
      description: 'liebevoll u. Hl. aufgezogen zu verk. Tel. 02163/3635',
    },
    {
      letter: "f",
      title: "Nehme Ihren Hund / Ihre Katze",
      description:
        'während Ihres Urlaubs in Pflege! Tel. 08084/529763',
    },
    {
      letter: "g",
      title: 'Unser Wissen für Ihr Tier! ARCHE NOAH',
      description:
        'Die etwas "andere" TIERKLINIK. 5020 Salzburg, Alpenstraße 141. Tel. 0662/682374. Sie wollen Ihren Urlaub ohne Sorgen um das Haustier genießen? Wir versorgen Kleintiere liebevoll während dieser Zeit!',
    },
    {
      letter: "h",
      title: "Nehme Ihren Hund in Pflege",
      description:
        'bei Urlaub oder am Tag. Nur Hunde, die für die Wohnung geeignet sind. Tel. 01 73-28 85 11 99 o. 02 31-7 2 848 98',
    },
    {
      letter: "i",
      title: "Nehme/Suche gebrauchtes",
      description:
        'oder neues Aquarium kostenlos, 30 l - 320 l mit Zubehör. Tel. 07831/18357',
    },
    {
      letter: "j",
      title: "05.03. Fisch- & Korallentag",
      description:
        '11-16 Uhr Schauaquarium Munderhof. Verkauf von Fischen, Pflanzen, Garnelen, Korallenablegern, Makroalgen u. Zubehör',
    },
  ],
};
