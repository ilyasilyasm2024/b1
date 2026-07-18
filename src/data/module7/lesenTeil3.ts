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

export const module7LesenTeil3: LesenTeil3Data = {
  module: 7,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Sie haben einige \u00e4ltere Bekannte, die Hilfe brauchen und nach passenden Angeboten suchen.",
  example: {
    id: 0,
    description:
      "Frau Walters N\u00e4hmaschine ist kaputt. Doch kann sie die Maschine nicht selbst zur Reparatur bringen, denn sie ist zu schwer.",
    correctAd: "j",
  },
  situations: [
    {
      id: 13,
      description:
        "Die Lampe im Wohnzimmer von Herrn Rathenau funktioniert nicht mehr. Allein schafft er es leider nicht, den Schaden zu reparieren.",
      correctAd: "c",
    },
    {
      id: 14,
      description:
        "Frau Eggers war Mathematiklehrerin und ist jetzt in Pension. Sie w\u00fcrde gern ab und zu wieder Unterricht geben.",
      correctAd: "d",
    },
    {
      id: 15,
      description:
        "Frau B\u00e4uerle hat oft R\u00fcckenschmerzen. Sie braucht jemanden, der ihre Eink\u00e4ufe erledigt, weil sie nichts Schweres tragen darf.",
      correctAd: "j",
    },
    {
      id: 16,
      description:
        "Das Ehepaar Sch\u00fctte liebt seinen Garten \u00fcber alles. Die zwei k\u00f6nnen ihn aber nicht mehr allein pflegen.",
      correctAd: "f",
    },
    {
      id: 17,
      description:
        "Die Haushaltshilfe von Herrn Reuter ist in eine andere Stadt gezogen. Deshalb sucht er eine neue Haushaltshilfe.",
      correctAd: "0",
    },
    {
      id: 18,
      description:
        "Herr Mayer war fr\u00fcher Brieftr\u00e4ger. Er bekommt jetzt zwar eine gute Rente, aber er langweilt sich zu Hause und sucht einen Teilzeitjob.",
      correctAd: "a",
    },
    {
      id: 19,
      description:
        "Frau Hetzel m\u00f6chte f\u00fcr ihre Enkelkinder Pullover stricken. Sie braucht daf\u00fcr blaue und wei\u00dfe Mohair-Wolle.",
      correctAd: "h",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Wir suchen Zusteller",
      description:
        "F\u00fcr die Zustellung von Tageszeitungen und Werbe-Prospekten. Nur f\u00fcr Schulen, Rentner. Verteilung im Wohngebiet. Abholservice. Rufen Sie uns bitte an. S. Stuchmann Zeitungs- und Prospektvertrieb.",
    },
    {
      letter: "b",
      title: "Rentner aus einer Hand",
      description:
        "Pensionierte Ingenieure, Techniker, Informatiker \u2013 komplette Ausf\u00fchrung aller Arbeiten von Fachleuten. \u00dcbrigens: Wir sind auch f\u00fcr Ihre kleinen Probleme da. Telefon 089/33 13 06.",
    },
    {
      letter: "c",
      title: "Fliesen- und Malerarbeiten \u2013 kleine Reparaturen",
      description:
        "Wandanstriche, Renovierung, wackelnde Schr\u00e4nke, Lampenwechsel usw. Wie weit auch immer entfernt \u2013 wir sind f\u00fcr Sie da. Telefon 07153/83633.",
    },
    {
      letter: "d",
      title: "Nachhilfeunterricht (Mittel- und Oberstufe)",
      description:
        "M\u00f6chten Sie gerne unterrichten? Wir freuen uns auf Sie. Telefon: Montag bis Freitag 14 bis 17 Uhr.",
    },
    {
      letter: "e",
      title: "Gartenhilfe gesucht",
      description:
        "Mit entsprechender Erfahrung, ab sofort, flexible Arbeitszeit, deutsche Sprache erw\u00fcnscht. Kontakt: 0160 909 6947 oder bbnk@gmx.de",
    },
    {
      letter: "f",
      title: "G\u00e4rtner \u00fcbernimmt",
      description:
        "Ich \u00fcbernehme die Pflege Ihres Gartens: R\u00e4umen, Schneiden, Pflanzen und mehr. Zuverl\u00e4ssig und preiswert. Kontakt unter bbnk@gmx.de",
    },
    {
      letter: "g",
      title: "Haushaltshilfe gesucht",
      description:
        "F\u00fcr \u00e4lteres Ehepaar, ab sofort, deutsche Sprachkenntnisse, 3 x pro Woche je 4\u20135 Std. Kontakt unter llk19@gmx.de oder Zuschrift unter 2901133902 an diese Zeitung.",
    },
    {
      letter: "h",
      title: "B\u00e4ckers N\u00e4hstudio \u2013 Wolle & Stoffe",
      description:
        "Das Handarbeitsgesch\u00e4ft der besonderen Art. Wolle, Stickgarne und Stoffe in gro\u00dfer Auswahl. Kurse in allen Stick- und Stricktechniken. Salzburger Stra\u00dfe 37\u201339, 79106 Freiburg. Tel. 0761/2712153.",
    },
    {
      letter: "i",
      title: "Strickkurs \u2013 Wir f\u00fchren Sie am langen Faden",
      description:
        "Lernen Sie unter fachlicher Leitung die Grundbegriffe des Strickens: verschiedene Anschl\u00e4ge, Musterstricken, Pullover und Socken stricken usw. Treten Sie ein in die faszinierende Welt der modischen Garne. 8.11., 15.11., 22.11., 29.11. von 14\u201318 Uhr.",
    },
    {
      letter: "j",
      title: "Suche Job in Privathaushalt",
      description:
        "Betreuung \u00e4lterer Menschen, Einkaufen, Spazieren, leichte Pflege. 1\u20132 mal pro Woche. Bergisch Gladbach-City, Tel. 0176-36880948 oder 0761-42997472.",
    },
  ],
};
