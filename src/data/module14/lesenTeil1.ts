export interface LesenTeil1Question {
  id: number;
  statement: string;
  correct: "richtig" | "falsch";
}

export interface LesenTeil1Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  example: LesenTeil1Question;
  questions: LesenTeil1Question[];
}

export const module14LesenTeil1: LesenTeil1Data = {
  module: 14,
  part: "Lesen Teil 1",
  title: "Meine Erlebnisse \u2013 Michelst\u00e4dter Altstadtfest",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Letzten August war ich zu Besuch bei meinem Onkel in Michelstadt. Michelstadt ist ein kleines, mittelalterliches St\u00e4dtchen im Odenwald. Es ist sehr malerisch und da ist meistens nicht viel los. Hinzu kam, dass der letzte Sommer ziemlich verregnet war. Die meiste Zeit verbrachte ich mit Stubenhocken. Nicht gerade anregend!\n\nDoch an einem Samstag schlug meine Tante vor, dass wir abends zum Michelst\u00e4dter Altstadtfest gehen. Ich machte mir zwar keine gro\u00dfe Hoffnung auf gute Unterhaltung, aber da ich nichts Besseres zu tun hatte und das Wetter ausnahmsweise gut war, stimmte ich zu.\n\nDas Fest fand im Zentrum statt, das f\u00fcr den Verkehr gesperrt war. Wir konnten also nicht mit dem Auto in die Innenstadt fahren und mussten zu Fu\u00df gehen. Unterwegs erlebte ich schon die erste \u00dcberraschung: Die Gesch\u00e4fte waren alle auf, Stra\u00dfen und Gassen waren mit Kerzen erleuchtet. Es war \u201elange Einkaufsnacht\u201c. Wir bummelten durch die Stra\u00dfen, sahen uns die Attraktionen an, die der Gewerbeverein organisiert hatte, und lie\u00dfen uns ein-zwei Schn\u00e4ppchen nicht entgehen.\n\nSchlie\u00dflich kamen wir auf den Hof der Michelst\u00e4dter Burg-Kellerei, den Ort, wo das Herz des Altstadtfests schlug. Hier waren Tische und B\u00e4nke aufgestellt, an denen schon viele Leute sa\u00dfen. Man gr\u00fc\u00dfte sich, sa\u00df beisammen, am\u00fcsierte sich \u2013 eine tolle Stimmung. F\u00fcr das leibliche Wohl war bestens gesorgt: Bratwurst, Currywurst, Pommes, Erbsensuppe mit Bockwurst \u2013 und nat\u00fcrlich Bier von der heimischen Brauerei. Und ab 21.00 Uhr spielte eine Rock-'n'-Roll-Band live. In Michelstadt war wirklich was los.\n\nDoch das war nicht alles. Meine Tante dr\u00e4ngte uns, wir sollten weiter zum \u201eSchwiegermutterbrunnen\u201c, denn da gab eine Gruppe, die Ars Artistica, eine Show. Eigentlich wollte ich nicht weg, weil die Musikband super spielte. Aber sie bestand so sehr darauf, dass wir nachgaben. Und sie hatte recht.\n\nDie Artistengruppe bot eine Show mit Feuer-Acts. Es war sehr eindrucksvoll. In der sommerlichen Nacht sah man die Artisten ihre Kunstst\u00fccke vorf\u00fchren und man h\u00f6rte nur das Knistern und Zischen des Feuers. Es war ein einmaliges Schauspiel.\n\nZu Fu\u00df kehrten wir in der mondhellen Nacht langsam nach Hause zur\u00fcck. Ich werde dieses Fest nie vergessen und kann nur jedem empfehlen: Auch Michelstadt im Odenwald ist eine Reise wert (besonders im August!).\n\nEure Nicole",
  example: {
    id: 0,
    statement: "In Michelstadt kann man oft etwas erleben.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement:
        "Auf dem Fest konnte man sich trotz des schlechten Wetters gut unterhalten.",
      correct: "falsch",
    },
    {
      id: 2,
      statement:
        "Im Stadtzentrum durften w\u00e4hrend des Fests keine Privatwagen fahren.",
      correct: "richtig",
    },
    {
      id: 3,
      statement:
        "In der \u201elangen Einkaufsnacht\u201c waren nur wenige L\u00e4den geschlossen.",
      correct: "falsch",
    },
    {
      id: 4,
      statement: "Die Speisen bot die heimische Brauerei umsonst an.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "Die Artisten zeigten ihre Feuer-Show zu lauter Musik.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Nicole meint, es lohnt sich, Michelstadt zu besuchen.",
      correct: "richtig",
    },
  ],
};
