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

export const module3LesenTeil3: LesenTeil3Data = {
  module: 3,
  part: "Lesen Teil 3",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j aus verschiedenen deutschsprachigen Medien. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Die Anzeige aus dem Beispiel können Sie nicht mehr verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie 0.",
  context:
    "Wegen der günstigen Angebote ziehen einige Ihrer Freundinnen und Freunde für ihre Anschaffungen Gebrauchtwaren vor. Deswegen suchen sie immer nach entsprechenden Anzeigen.",
  example: {
    id: 0,
    description:
      "Miriam ist in eine neue Wohnung umgezogen und braucht einen Spiegel für ihr Wohnzimmer.",
    correctAd: "b",
  },
  situations: [
    {
      id: 13,
      description:
        "Lea und Jana sammeln seit Jahren alte Spielpuppen.",
      correctAd: "a",
    },
    {
      id: 14,
      description:
        "Monika liest sehr gern. Ihrer Meinung nach müssen es nicht immer Neuerscheinungen sein.",
      correctAd: "0",
    },
    {
      id: 15,
      description:
        "Dennis beschäftigt sich in seiner Freizeit meistens mit seinem Laptop. Seine Freunde suchen nach einem Geschenk für ihn.",
      correctAd: "h",
    },
    {
      id: 16,
      description:
        "Andy und Luzie haben einen Sohn bekommen und brauchen dringend einen Kinderwagen.",
      correctAd: "f",
    },
    {
      id: 17,
      description:
        "Sascha liebt Disco-Musik aus den 70er Jahren. Er freut sich immer über solche Musik-CDs.",
      correctAd: "i",
    },
    {
      id: 18,
      description:
        "Jutta möchte nicht mehr so viel Auto fahren. Sie sucht ein gebrauchtes Fahrrad in gutem Zustand.",
      correctAd: "d",
    },
    {
      id: 19,
      description:
        "Stefan verbringt seine Sonntage gern auf Flohmärkten. Dort kann er nämlich nicht nur billig einkaufen, sondern auch spazieren gehen und etwas Kleines essen.",
      correctAd: "g",
    },
  ],
  ads: [
    {
      letter: "a",
      title: "58-jähriges Kleinkind kauft altes Spielzeug",
      description:
        "Sammler sucht altes Spielzeug: Puppen, Teddybären, Blechspielzeug, Puppenstuben. Zahle gute Preise! Auch größere Sammlungen. Tel. 030-7742891, abends ab 19 Uhr.",
    },
    {
      letter: "b",
      title: "Flohmarktartikel",
      description:
        "Spiegel (antik, 80x120cm), Bollerwagen, alte Möbel, Geschirr und vieles mehr. Samstag 9-14 Uhr, Bergstr. 12, Hinterhof.",
    },
    {
      letter: "c",
      title: "Kleiderflohmarkt Schöneberg",
      description:
        "Jeden Sonntag 8-16 Uhr in der Rathaushalle. Über 50 Stände mit Second-Hand-Kleidung für die ganze Familie. Eintritt frei!",
    },
    {
      letter: "d",
      title: "Secondhand-Börse",
      description:
        "Große Secondhand-Börse mit Fahrradmarkt! Gebrauchte Fahrräder in allen Größen und Preisklassen. Sonntag 10-16 Uhr, Messegelände Halle 3. Eintritt 2 Euro.",
    },
    {
      letter: "e",
      title: "Hi-Fi-Schallplatten-Flohmarkt",
      description:
        "Samstag 11-17 Uhr, Kulturzentrum. Vinyl-Schallplatten, Plattenspieler, Verstärker. Für Sammler und Musikliebhaber. Eintritt 3 Euro.",
    },
    {
      letter: "f",
      title: "Kinderwagen Teutonia",
      description:
        "Verkaufe gut erhaltenen Teutonia-Kinderwagen, Farbe blau, mit Regenschutz und Sonnendach. 2 Jahre alt, wenig benutzt. VB 200 Euro. Tel. 0176-4423891.",
    },
    {
      letter: "g",
      title: "Flohmarkt am Mauerpark",
      description:
        "Jeden Sonntag 9-18 Uhr. Über 200 Stände, Streetfood, Live-Musik und Karaoke. Der beliebteste Flohmarkt Berlins! Spazieren, stöbern, essen. Eintritt frei.",
    },
    {
      letter: "h",
      title: "Computer-Flohmarkt",
      description:
        "Hardware, Software, Spiele, Konsolen und Zubehör. Samstag 10-16 Uhr, Stadthalle. Über 80 Aussteller. Eintritt 4 Euro. Auch Reparaturservice vor Ort!",
    },
    {
      letter: "i",
      title: "Stereo-Anlage komplett",
      description:
        "Verkaufe meine komplette Stereoanlage (Verstärker, CD-Player, Boxen). Dazu über 200 Original-CDs, hauptsächlich Disco und Pop aus den 60er bis 80er Jahren. Alles zusammen 150 Euro. Tel. 040-8891234.",
    },
    {
      letter: "j",
      title: "Baby-Flohmarkt Ahlerstedt",
      description:
        "Am 15. November, 10-14 Uhr in der Turnhalle. Babykleidung, Spielzeug, Kinderbücher, Hochstühle und mehr. Kaffee und Kuchen. Standgebühr 10 Euro. Anmeldung: baby-flohmarkt@web.de",
    },
  ],
};
