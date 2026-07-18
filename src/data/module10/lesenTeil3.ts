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

export const module10LesenTeil3: LesenTeil3Data = {
  module: 10,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Viele Ihrer Bekannten haben einen Garten und suchen immer nach M\u00f6glichkeiten, ihn besser zu pflegen oder noch mehr Freude an ihm zu haben.",
  example: {
    id: 0,
    description:
      "Familie Schwarz ist gl\u00fccklich \u00fcber ihr neues Haus mit Garten. Aber die B\u00e4ume sind noch sehr klein und die Kinder haben nichts zum Klettern.",
    correctAd: "c",
  },
  situations: [
    {
      id: 13,
      description:
        "Charlotte und Jan Kaiser suchen einen Sch\u00fcler oder Studenten, der ihren Garten pflegt, wenn sie in Urlaub sind.",
      correctAd: "0",
    },
    {
      id: 14,
      description:
        "Hanna Gruber hat alte Gartenm\u00f6bel aus Eisen; sie m\u00f6chte sie reparieren lassen.",
      correctAd: "g",
    },
    {
      id: 15,
      description:
        "Benjamin Koch findet es nicht lustig, wenn seine Freunde Witze \u00fcber seine selbst gebauten Gartenm\u00f6bel machen. Jetzt will er ihnen zeigen, dass er damit auch einen Preis gewinnen kann.",
      correctAd: "h",
    },
    {
      id: 16,
      description:
        "Fabian Kunz sucht jemanden, der seine Apfelb\u00e4ume schneidet, damit seine Apfelernte n\u00e4chstes Jahr besser wird.",
      correctAd: "i",
    },
    {
      id: 17,
      description:
        "Der junge Mann, der im 1. Stock gewohnt und sich auch um den Garten gek\u00fcmmert hat, ist ausgezogen. Frau Jansen, der das Haus geh\u00f6rt, sucht wieder nach einer \u00e4hnlichen L\u00f6sung.",
      correctAd: "d",
    },
    {
      id: 18,
      description:
        "In Rafaels und Janas Garten sind viele B\u00e4ume kaputt. Doch bevor sie neue B\u00e4ume kaufen, m\u00f6chten sie einen Experten fragen.",
      correctAd: "b",
    },
    {
      id: 19,
      description:
        "F\u00fcr das Hochzeitsfest ihrer Tochter m\u00f6chten Anna und Hans Moser ihren Garten besonders sch\u00f6n dekorieren und suchen nach Ideen.",
      correctAd: "j",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Fr\u00fcchtehof \u2013 Obstbau",
      description:
        "Knackfrisch genie\u00dfen: Birnen, \u00c4pfel. Am Stutz 27, 8254 Sebnen. Mo\u2013Fr 15\u201319 Uhr, Sa 9\u201313 Uhr. Tel. 065 660 1776. www.fruechtehof.ch",
    },
    {
      letter: "b",
      title: "Gartenarbeiter.de",
      description:
        "Wir schneiden Obstb\u00e4ume, f\u00e4llen B\u00e4ume, s\u00e4ubern Gartenteiche und \u00fcbernehmen s\u00e4mtliche Gartenarbeiten. G\u00fcnstig \u2013 schnell \u2013 professionell. Auch Beratung, bevor Sie neue B\u00e4ume kaufen. Tel. 0251-172889.",
    },
    {
      letter: "c",
      title: "Spielger\u00fcst zum Selbstaufbauen",
      description:
        "Super Fr\u00fchlingsangebot: Spielger\u00fcst mit Kletternetz, Reckstange, Kletterwand und Sandkasten \u2013 20% reduziert! F\u00fcr Kinder bis zur Alter von 14 Jahren geeignet.",
    },
    {
      letter: "d",
      title: "Wohnung gegen Gartenpflege",
      description:
        "Seri\u00f6se, ruhige Dame (Mitte 50) mit kl. Hund sucht zum 1.8. o. fr\u00fcher ruhige 2-Zi.-Wohnung, ca. 50 m\u00b2, mit Balkon, Terrasse o. kl. Garten, bis ca. 400 \u20ac warm, bevorzugt l\u00e4ndlich. Gerne \u00dcbernahme von Gartenpflege. Tel. 0351/7909 7166",
    },
    {
      letter: "e",
      title: "Neuerbau.de \u2013 Baumarkt-Center",
      description:
        "Alles f\u00fcrs Heimwerken, Reparieren, Basteln! Besuchen Sie uns in unserem neuen Baumarkt-Center. Neue Spezialabteilung: Gartenm\u00f6bel (Kunststoff, Holz, Eisen, Rattan) selbst reparieren. www.neuerbau.de",
    },
    {
      letter: "f",
      title: "Giardina \u2013 Erlebnis Garten",
      description:
        "Schaug\u00e4rten, Pflanzen, Floristik, Garten, Accessoires, D\u00fcfte, Gartentechnik, Bade- und Wasserwelt. \u00dcber 100 Aussteller, Gartenseminare und Vortr\u00e4ge.",
    },
    {
      letter: "g",
      title: "Garmo \u2013 Gartenm\u00f6bel reparieren",
      description:
        "Repariere und pflege Gartenm\u00f6bel im Raum Linz, auch Antiquit\u00e4ten, g\u00fcnstige Preise, Anfahrt inkl., auch Wochenende. Tel. 0732 783245, E-Mail garmo@gmx.at",
    },
    {
      letter: "h",
      title: "Gartenwettbewerb \u2013 selbst gebaute M\u00f6bel",
      description:
        "Basteln Sie sch\u00f6ne Dekoration f\u00fcr den Garten, bauen Sie individuelle Gartenm\u00f6bel oder konstruieren Sie praktisches Gartenzubeh\u00f6r? Das alles k\u00f6nnen Sie dokumentieren und als Anleitung bei unserem neuen Gartenwettbewerb miteinschicken. Tolle Preise zu gewinnen! Teilnahme kostenlos.",
    },
    {
      letter: "i",
      title: "Baumschnitt vom Fachmann",
      description:
        "Wir schneiden Ihre Obstb\u00e4ume fachgerecht, damit die Ernte im n\u00e4chsten Jahr besser wird. Auch Pflege von \u00c4pfel- und Birnenb\u00e4umen. Zuverl\u00e4ssig und g\u00fcnstig.",
    },
    {
      letter: "j",
      title: "Der Sommer ist die bunteste Jahreszeit \u2013 Foto-Wettbewerb",
      description:
        "Schnappen Sie sich eine Kamera und machen Sie Fotos von Ihrem Blumenparadies. Als Preise f\u00fcr die sch\u00f6nsten Blumenparadiese winken Gutscheine von 50 EUR bis 150 EUR f\u00fcr Ihre Eink\u00e4ufe bei der G\u00e4rtnerei Zimmermann. Auch Ideen f\u00fcr die Gartendekoration.",
    },
  ],
};
