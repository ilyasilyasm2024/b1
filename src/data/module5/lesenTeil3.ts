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

export const module5LesenTeil3: LesenTeil3Data = {
  module: 5,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Musik spielt f\u00fcr Ihre Freundinnen und Freunde eine wichtige Rolle. Immer wieder suchen sie nach Gelegenheiten, ihrem Hobby nachzugehen.",
  example: {
    id: 0,
    description:
      "Sebastian ist ein gro\u00dfer Opernfan. Er hat viele CDs mit Arien und geht auch in entsprechende Veranstaltungen, wenn er kann.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Niklas spielt schon vier Jahre lang klassische Gitarre. Er m\u00f6chte gern mit anderen Musik machen. Bisher hatte er leider kein Gl\u00fcck.",
      correctAd: "e",
    },
    {
      id: 14,
      description:
        "Ela hat als Kind Klavier gelernt und singt gern. Sie will jetzt ihre Klavierkenntnisse auffrischen und gleichzeitig das Singen \u00fcben.",
      correctAd: "i",
    },
    {
      id: 15,
      description:
        "Susanne bekommt seit drei Jahren Gesangsunterricht und ist auch Mitglied im Schulchor. Sie tr\u00e4umt davon, als Chors\u00e4ngerin um die Welt zu reisen.",
      correctAd: "d",
    },
    {
      id: 16,
      description:
        "Alex m\u00f6chte in der Sch\u00fclerband mitmachen, die seine Mitsch\u00fcler gegr\u00fcndet haben. Es fehlt nur noch der Bassist, deshalb muss Alex relativ schnell das Instrument spielen lernen.",
      correctAd: "h",
    },
    {
      id: 17,
      description:
        "Ira will gemeinsam mit ihrer sechsj\u00e4hrigen Tochter Klavierspielen lernen. Der Unterricht darf aber nicht zu lange dauern, weil das Kind schnell m\u00fcde wird.",
      correctAd: "j",
    },
    {
      id: 18,
      description:
        "Marei m\u00f6chte ein Instrument lernen, am liebsten E-Gitarre. Ihre Mutter ist einverstanden, meint aber, dass Musiktheorie im Unterricht nicht fehlen darf.",
      correctAd: "f",
    },
    {
      id: 19,
      description:
        "Leo spielt E-Gitarre. Er w\u00fcrde gern in einer Rock-Band mitmachen und an Konzerten teilnehmen.",
      correctAd: "0",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Benefizkonzert f\u00fcr UNICEF",
      description:
        "14. Dezember, 20.00 Uhr, Philharmonie im Gasteig. Es spielen die M\u00fcnchner Philharmoniker unter der Leitung von Zubin Mehta. Auf dem Programm stehen von F. Mendelssohn Bartholdy das Konzert f\u00fcr Violine und Orchester e-Moll sowie die Symphonie Nr. 5 cis-Moll.",
    },
    {
      letter: "b",
      title: "16. SOMMERFESTSPIELE im arch\u00e4ologischen Park Xanten",
      description:
        "Gro\u00dfe Opern-Neuinszenierungen in der r\u00f6mischen Arena. Fr. 24. Juli / Sa. 25. Juli / So. 26. Juli: Wolfgang Amadeus Mozart \u201eDie Zauberfl\u00f6te\u201c. Eintrittskarten telefonisch bestellen.",
    },
    {
      letter: "c",
      title: "Gesangsunterricht und Stimmbildung (Gesangslehrerin)",
      description:
        "Ort: L\u00fcbeck. Erfahrene S\u00e4ngerin am Opernhaus L\u00fcbeck erteilt Gesangsunterricht. Geeignet f\u00fcr Jugendliche und Erwachsene, Anf\u00e4nger und Fortgeschrittene. Einzelunterricht, \u00fcblicherweise einmal oder zweimal w\u00f6chentlich.",
    },
    {
      letter: "d",
      title: "BACH CHOR",
      description:
        "Mit Beginn der Konzertsaison sucht der Bach-Chor neue Mitglieder. Wir freuen uns auf Konzertreisen und regelm\u00e4\u00dfige Auftritte im In- und Ausland. Aufnahme mit kleiner Pr\u00fcfung. Sie erhalten n\u00e4here Informationen unter Tel. 98 61 66.",
    },
    {
      letter: "e",
      title: "Gemeinsam musizieren",
      description:
        "Wir suchen einen Fl\u00f6ten, anklingen lassen \u2013 und ganz \u00fcberraschend eine Serenade verf\u00fchren. Meine Fl\u00f6te (8 Jahre Konservatorium) sucht Begleitung: klassische Gitarre, Fagott, Oboe, Streicher, Klavier ... Ich freue mich auf ein Kammermusik-Ensemble. Anfragen unter Chiffre C 472 809 A.",
    },
    {
      letter: "f",
      title: "Gitarrenunterricht in Br\u00fchl",
      description:
        "Der Unterricht richtet sich an Anf\u00e4nger, Wiedereinsteiger und Fortgeschrittene. Ich m\u00f6chte sowohl Akustik- als auch E-Gitarre unterrichten und dabei ein verst\u00e4ndliches \u00dcbungs- und Lernverfahren einsetzen. Musiktheorie geh\u00f6rt ebenfalls dazu.",
    },
    {
      letter: "g",
      title: "PenAir im Park \u2013 Bad Kreuzingen",
      description:
        "Sa. 30. Juli: Roger Hodgson & Band, Ehemaliger Supertramp-Frontmann mit vielen Welthits wie \u201eB. Dreamer\u201c oder \u201eGive A Little Bit\u201c. Fr. 5. August: Uriah Heep, Hardrock-Bone mit Hits wie \u201eLady In Black\u201c und \u201eEasy Livin'\u201c. Tickets unter www.penairimpark.info",
    },
    {
      letter: "h",
      title: "Profi erteilt modernen Gitarrenunterricht in Mainz",
      description:
        "Unterricht f\u00fcr E-Gitarre und Bass-Gitarre nach eigener erfolgreicher Methode. Erfolg schon nach kurzer Zeit. Unterricht begleitendes Noten- und Audiomaterial gratis. F\u00fcr Kinder, Jugendliche und Erwachsene. Weitere Infos unter www.guitaronly.de",
    },
    {
      letter: "i",
      title: "Freude am Musizieren!",
      description:
        "Wir suchen qualifizierte, individuelle Klavier- & Gesangslehrer/innen zur Verst\u00e4rkung. Auch Kinder & Gesang in angenehmer Atmosph\u00e4re. Anfragen und weitere Ausk\u00fcnfte bei Peter Steiner, Tel. 0387 651223.",
    },
    {
      letter: "j",
      title: "Musikschule Allegro M\u00fcnster",
      description:
        "Unsere Musikschule bietet Ihnen eine gro\u00dfe Auswahl an Instrumentalunterricht wie Klavier / Blockfl\u00f6te und Gitarre / Querfl\u00f6te / Akkordeon / Klarinette & Saxofon. Sowohl Einzel- als auch Gruppenunterricht ist m\u00f6glich. Eine Unterrichtsstunde kann je nach Wunsch 30, 45 oder 90 Minuten dauern. Tel. 0251.44150750.",
    },
  ],
};
