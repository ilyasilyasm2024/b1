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

export const module8LesenTeil3: LesenTeil3Data = {
  module: 8,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. W\u00e4hlen Sie: Welche Anzeige passt zu welcher Situation? Sie k\u00f6nnen jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel k\u00f6nnen Sie nicht mehr verwenden. F\u00fcr eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Bekannte von Ihnen m\u00f6chten ihre Fremdsprachenkenntnisse erweitern und suchen daf\u00fcr passende Angebote.",
  example: {
    id: 0,
    description:
      "Sandra und Nicole planen dieses Jahr eine Reise nach Griechenland und m\u00f6chten dabei auch ein wenig Griechisch lernen.",
    correctAd: "e",
  },
  situations: [
    {
      id: 13,
      description:
        "Steffi war als Austauschsch\u00fclerin ein Jahr lang in Frankreich. Sie m\u00f6chte nun in ihrer Freizeit ihre Sprachkenntnisse pflegen und Kontakt zu Land und Kultur halten.",
      correctAd: "f",
    },
    {
      id: 14,
      description:
        "Natalie will schnell Franz\u00f6sisch lernen, weil sie ab September mit ihrem Ehemann nach Paris zieht.",
      correctAd: "a",
    },
    {
      id: 15,
      description:
        "Erik muss sein Deutsch \u00fcben. Er sucht Muttersprachler, die Lust haben, sich mit ihm zu treffen und einfach zu sprechen.",
      correctAd: "0",
    },
    {
      id: 16,
      description:
        "Almas Englisch ist nicht so gut. Sie meint, man lernt eine Fremdsprache am besten im Land, in dem sie gesprochen wird.",
      correctAd: "d",
    },
    {
      id: 17,
      description:
        "Urs m\u00f6chte Spanisch lernen. Er lernt aber nicht gern mit anderen zusammen.",
      correctAd: "i",
    },
    {
      id: 18,
      description:
        "Frau K\u00fclmer hat in der Schule Franz\u00f6sisch gelernt. Wegen ihres Berufs muss sie nun ihren m\u00fcndlichen Ausdruck verbessern.",
      correctAd: "g",
    },
    {
      id: 19,
      description:
        "Ben und Ali haben in der Schule als Wahlfach Spanisch. Sie haben sich entschlossen, im Sommer gemeinsam eine Sprachreise nach Spanien zu unternehmen.",
      correctAd: "j",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Learn & Fun-Sprachreisen",
      description:
        "Ein Sprachkurs in einem englisch- oder franz\u00f6sischsprachigen Land bietet die einzigartige Gelegenheit, die Sprache richtig zu sprechen und sich in sie \u201eeinzuleben\u201c. Alle unsere Reiseziele sind sorgf\u00e4ltig ausgew\u00e4hlt. Rufen Sie uns an, wir beraten Sie gerne ausf\u00fchrlich.",
    },
    {
      letter: "b",
      title: "Englisch lernen mit Gymnasiallehrerin",
      description:
        "Nummer eins, wenn es Sie sich fit \u00fcber und sich in der englischen Sprache verst\u00e4ndlich machen k\u00f6nnen. Nachhilfeunterricht in Englisch/Franz\u00f6sisch (Gymnasium, Realschule). Tel. 0761-6102292.",
    },
    {
      letter: "c",
      title: "Neue Sprachenschule K\u00f6ln",
      description:
        "Kurse f\u00fcr alle Stufen. Spezial- und Einzelunterricht. Ferienkurse f\u00fcr Erwachsene, Jugendliche, f\u00fcr die ganze Familie. Intensiv-Tageskurse in Englisch/Franz\u00f6sisch/Italienisch, 2 Wochen, t\u00e4gl. 6 Stunden. Am B\u00fcchel 24, 50678 K\u00f6ln. www.sprachenschule-koeln.de",
    },
    {
      letter: "d",
      title: "Weimer Sprachreisen",
      description:
        "Sch\u00fclerkurse in den Sommerferien nach Frankreich, Spanien, Polen, Russland. 2 Wochen, t\u00e4glich 4 Stunden, 03.07.\u201314.07. Emser Str. 34, 60599 Frankfurt. Tel. (069) 97 68 10 00.",
    },
    {
      letter: "e",
      title: "Griechisch lernen im Urlaub \u2013 ellinikamani.com",
      description:
        "Lernen Sie Griechisch, w\u00e4hrend Sie in Ihrer Traum-Ferienwohnung leben, alles Griechische genie\u00dfen \u2013 die Menschen, das Essen, das Meer und die Natur \u2013 und dabei die Sprache mit allen Sinnen aufnehmen. Erholen Sie sich im Land der G\u00f6tter. www.ellinikamani.com",
    },
    {
      letter: "f",
      title: "Franz\u00f6sische Online-Videos \u2013 Bonjour",
      description:
        "Das Online-Magazin Bonjour erm\u00f6glicht es fortgeschrittenen Franz\u00f6sischlernenden, ihre Kenntnisse zu perfektionieren, indem sie \u00fcber untertitelte Kurzvideos in die Sprache eintauchen. Es erscheinen jeden Tag neue Videos von Muttersprachlern: Interviews, Reportagen, Reiseberichte und Musikvideos. www.bonjour-online.com",
    },
    {
      letter: "g",
      title: "Franz\u00f6sisch-Konversation mit Muttersprachlerin",
      description:
        "Ich suche einen Nachhilfelehrer/in f\u00fcr meinen Sohn (6. Klasse Gymnasium) f\u00fcr das Fach Franz\u00f6sisch. Vorzugsweise Studentinnen bzw. Lehrerinnen. Unterricht bei uns zu Hause. Kontakt bitte per Mail. E-Mail-Adresse: andrea.weber@yahoo.de",
    },
    {
      letter: "h",
      title: "Brieffreunde gesucht \u2013 Meike aus \u00d6sterreich",
      description:
        "Hallo, ich bin Meike und komme aus \u00d6sterreich (Villach). Ich h\u00e4tte gerne Brieffreunde aus anderen L\u00e4ndern. Ich interessiere mich f\u00fcr Fremdsprachen, spreche Franz\u00f6sisch und ein wenig Englisch. Ich schreibe entweder auf Deutsch oder Franz\u00f6sisch.",
    },
    {
      letter: "i",
      title: "Spanisch im Einzelunterricht",
      description:
        "Sie m\u00f6chten allein und in Ihrem eigenen Tempo lernen? Individueller Einzelunterricht Spanisch f\u00fcr alle Stufen. Flexibel: vormittags, abends, samstags. Kontakt: Tel. 0671-29 54 6.",
    },
    {
      letter: "j",
      title: "Gemeinsame Sprachreise nach Spanien",
      description:
        "Neue faszinierende Sprachreise \u2013 allein oder mit Freunden. Eine Sprache lernen und dabei ein Land entdecken. Kurse f\u00fcr Sch\u00fcler und Jugendliche in Spanien.",
    },
  ],
};
