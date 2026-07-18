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

export const module14LesenTeil3: LesenTeil3Data = {
  module: 14,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Einige Personen aus Ihrem Bekanntenkreis interessieren sich besonders f\u00fcr die Probleme unserer Zeit und m\u00f6chten aktiv Hilfe leisten. Sie suchen nach passenden M\u00f6glichkeiten.",
  example: {
    id: 0,
    description:
      "Annika hat zwei M\u00e4ntel, die ihr nicht mehr passen. Sie sind in gutem Zustand, deshalb m\u00f6chte sie sie nicht wegwerfen.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Frau Wickert hat ein Herz f\u00fcr Kinder. Sie m\u00f6chte eine Geldsumme f\u00fcr eine Organisation geben, die sich besonders um Kinder in Deutschland k\u00fcmmert.",
      correctAd: "i",
    },
    {
      id: 14,
      description:
        "Herr Geiger ist Biologielehrer. Er will das Interesse seiner Sch\u00fcler f\u00fcr die Natur und ihren Schutz wecken.",
      correctAd: "c",
    },
    {
      id: 15,
      description:
        "Tobias ist ein Tier- und Naturfreund. Weil er in zwei Wochen Geburtstag hat, sucht sein Freund Lukas nach einem Geschenk.",
      correctAd: "f",
    },
    {
      id: 16,
      description:
        "Sara hat viele ausl\u00e4ndische Freunde in der Nachbarschaft und m\u00f6chte aktiv f\u00fcr das friedliche Zusammenleben von Menschen aus verschiedenen L\u00e4ndern arbeiten.",
      correctAd: "e",
    },
    {
      id: 17,
      description:
        "Frau Anders will etwas f\u00fcr junge Familien tun, die arm sind.",
      correctAd: "0",
    },
    {
      id: 18,
      description:
        "Philipp ist Krankenpfleger. Er w\u00fcrde sein Wissen gern f\u00fcr die Hilfe behinderter Menschen einsetzen.",
      correctAd: "a",
    },
    {
      id: 19,
      description:
        "Gabriel ist vor ein paar Monaten Vater geworden. Er und seine Frau interessieren sich f\u00fcr den Umweltschutz und m\u00f6chten auch ihr Kind dazu erziehen.",
      correctAd: "h",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "ASB-GEMEINSAM GmbH \u2013 Helfende H\u00e4nde",
      description:
        "Viele alte, junge, kranke und behinderte Menschen freuen sich auf die Zeit, die Sie ihnen schenken. Bringen Sie Ihre Talente ein! Informieren Sie sich \u2013 wir freuen uns \u00fcber jede helfende Hand. Berlin.",
    },
    {
      letter: "b",
      title: "Altkleidersammlung im Auftrag des DRK",
      description:
        "Bitte daran denken: Altkleidersammlung im Auftrag des DRK \u2013 alle vier Wochen zusammen mit der blauen Tonne. Gut erhaltene Kleidung wird weiterverwendet.",
    },
    {
      letter: "c",
      title: "NAJU \u2013 Naturschutzjugend",
      description:
        "Miteinander leben? Verschenken Sie eine Naturschutz-Mitgliedschaft! Die NAJU weckt bei Kindern und Jugendlichen das Interesse f\u00fcr die Natur und ihren Schutz. Kommen Sie doch einfach mal vorbei!",
    },
    {
      letter: "d",
      title: "H\u00e4usliche Pflege",
      description:
        "Brauchen Sie Hilfe bei Ihrer K\u00f6rperpflege oder \u00e4rztlich verordnete Behandlungen? An 7 Tagen in der Woche bieten unsere Pfleger und Sozialarbeiter unseren Kunden Hilfe in jeglicher Lebenslage.",
    },
    {
      letter: "e",
      title: "B\u00fcrgerinitiative \u2013 Ausl\u00e4ndische Mitb\u00fcrgerinnen und Mitb\u00fcrger",
      description:
        "Die B\u00fcrgerinitiative setzt sich f\u00fcr ein friedliches Zusammenleben in der Nachbarschaft ein \u2013 gerade zwischen Menschen aus verschiedenen L\u00e4ndern. Wir freuen uns \u00fcber Ihre Mitarbeit.",
    },
    {
      letter: "f",
      title: "Naturschutz-Schnuppermitgliedschaft \u2013 KEKS e.V.",
      description:
        "Gesundheit ist ein Menschenrecht \u2013 auch f\u00fcr die Natur. Verschenken Sie unsere Schnuppermitgliedschaft: ein Jahr kostenlos. Ein sch\u00f6nes Geschenk f\u00fcr alle Tier- und Naturfreunde.",
    },
    {
      letter: "g",
      title: "Lieber gemeinsam statt einsam",
      description:
        "Mehr Lebensqualit\u00e4t ist machbar, lieber Nachbar! Machen Sie mit, gr\u00fcnden Sie Ihre eigene Nachbarschaftshilfe gegen Kriminalit\u00e4t. Wir helfen Ihnen dabei. Schreiben Sie uns unter dem Kennwort \u201eNachbarschaftshilfe\u201c.",
    },
    {
      letter: "h",
      title: "Umwelt und Natur \u2013 Erziehung von klein auf",
      description:
        "Ihr Baby ist uns nicht schnuppe! Deshalb gibt es f\u00fcr junge Familien unsere Angebote rund um Umwelt und Naturschutz. Bringen Sie Ihrem Kind von klein auf einen bewussten Umgang mit der Natur bei.",
    },
    {
      letter: "i",
      title: "Wenn jeder Bissen im Hals stecken bleibt \u2013 Sozialwirtschaft e.V.",
      description:
        "Wir helfen und unterst\u00fctzen bundesweit Kinder, die wegen einer kranken Speiser\u00f6hre nicht essen k\u00f6nnen. Spendenkonto: Baden-W\u00fcrttembergische Bank, Postfach 71 20, 80338 M\u00fcnchen.",
    },
    {
      letter: "j",
      title: "Caritas \u2013 Erfahrung weitergeben",
      description:
        "M\u00f6chten Sie Ihre Erfahrung aus dem Beruf an einen Sch\u00fcler weitergeben? Dann sind Sie unser Typ! Das Angebot der Caritas. www.caritas.de",
    },
  ],
};
