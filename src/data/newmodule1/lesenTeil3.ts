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

export const newmodule1LesenTeil3: LesenTeil3Data = {
  module: 1,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis h aus einer Kleinanzeigen-Webseite für Sport und Freizeit. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  example: {
    id: 0,
    description:
      "Paul möchte im Sommer eine Radtour durch die Alpen machen, hat aber kein passendes Fahrrad und auch keine Ausrüstung dafür.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Frau Krüger sucht jemanden, der zusammen mit ihr zweimal pro Woche joggen geht, weil sie allein nicht motiviert genug ist.",
      correctAd: "a",
    },
    {
      id: 14,
      description:
        "Tim spielt seit Jahren Tennis, findet aber in seinem Verein keinen Trainingspartner mehr, der auf seinem Niveau spielt.",
      correctAd: "c",
    },
    {
      id: 15,
      description:
        "Die Familie Ahrens möchte im Winter zum ersten Mal Ski fahren und braucht dafür komplette Ausrüstung für zwei Erwachsene und zwei Kinder.",
      correctAd: "d",
    },
    {
      id: 16,
      description:
        "Sabine hat vor Kurzem mit dem Klettern angefangen und sucht einen Kurs für Anfänger in ihrer Nähe.",
      correctAd: "e",
    },
    {
      id: 17,
      description:
        "Herr Weiss möchte gern ein gebrauchtes Rudergerät für zu Hause kaufen, hat aber bisher nichts Passendes gefunden.",
      correctAd: "0",
    },
    {
      id: 18,
      description:
        "Laura sucht ein günstiges gebrauchtes Mountainbike für ihre Tochter, die gerade das Radfahren lernt.",
      correctAd: "f",
    },
    {
      id: 19,
      description:
        "Herr und Frau Böhm möchten am Wochenende gemeinsam Yoga im Freien ausprobieren und suchen einen passenden Kurs.",
      correctAd: "g",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "Lauftreff Sonntagmorgen",
      description:
        "Wir treffen uns jeden Sonntag um 9 Uhr am Stadtpark zum gemeinsamen Joggen. Alle Levels willkommen, Tempo passen wir an die Gruppe an. Einfach vorbeikommen!",
    },
    {
      letter: "b",
      title: "Tourenräder zu vermieten",
      description:
        "Wir verleihen Tourenräder inkl. Gepäcktaschen und Werkzeugset, ideal für mehrtägige Touren in den Bergen. Verleih tage- oder wochenweise. Tel. 0761/554213",
    },
    {
      letter: "c",
      title: "Tennispartner/in gesucht",
      description:
        "Fortgeschrittener Spieler (Leistungsklasse 4) sucht regelmäßigen Trainingspartner für Einzeltraining, gern zweimal wöchentlich abends. TC Waldstadt.",
    },
    {
      letter: "d",
      title: "Ski- und Snowboardverleih für die ganze Familie",
      description:
        "Komplette Ausrüstung für Erwachsene und Kinder ab Größe 22, inkl. Anprobe und Beratung. Frühbucherrabatt bis Ende Oktober. www.schneeverleih-nord.de",
    },
    {
      letter: "e",
      title: "Kletterkurs für Einsteiger",
      description:
        "6-wöchiger Kurs in unserer Kletterhalle, keine Vorkenntnisse nötig, Ausrüstung wird gestellt. Start jeden ersten Montag im Monat. Anmeldung an der Info.",
    },
    {
      letter: "f",
      title: "Mountainbike, Kindergröße, zu verkaufen",
      description:
        "26-Zoll-Mountainbike, kaum benutzt, top Zustand, für Kinder ab ca. 10 Jahren geeignet. VB 90 €. Abholung in Neustadt. Tel. 0170/8834021",
    },
    {
      letter: "g",
      title: "Yoga unter freiem Himmel",
      description:
        "Jeden Samstag um 10 Uhr im Stadtpark, für Anfänger und Fortgeschrittene geeignet. Matte bitte selbst mitbringen. Erste Stunde kostenlos.",
    },
    {
      letter: "h",
      title: "Second-Hand-Sportbörse",
      description:
        "Zweimal im Jahr verkaufen wir gebrauchte Sportartikel wie Skier, Bälle, Schläger und Trikots. Nächster Termin: siehe Aushang am Vereinsheim.",
    },
  ],
};
