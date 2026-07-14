export interface LesenTeil2Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil2Data {
  module: number;
  part: string;
  title: string;
  text: string;
  example: LesenTeil2Question;
  questions: LesenTeil2Question[];
}

export const module3LesenTeil2A: LesenTeil2Data = {
  module: 3,
  part: "Lesen Teil 2A",
  title: "Lange Nacht der Museen",
  text: `Die „Lange Nacht der Museen" ist eine Veranstaltung, die 1997 in Berlin erfunden wurde. Mittlerweile gibt es sie in vielen deutschen Städten. In Berlin findet sie zweimal im Jahr statt, einmal im Januar und einmal im August. An diesen besonderen Abenden öffnen die Museen ihre Türen bis zwei Uhr nachts.

Für die Besucher gibt es einen speziellen Bus-Shuttle, der sie von Museum zu Museum bringt. Eine Eintrittskarte gilt für alle teilnehmenden Museen. Studenten und Kinder bekommen ermäßigte Karten oder kommen sogar kostenlos hinein. Das Programm ist sehr vielfältig: Es gibt Führungen, Konzerte, Lesungen und sogar Nachtwanderungen durch die Ausstellungen.

Die Idee war von Anfang an ein großer Erfolg. Jedes Jahr kommen mehr Besucher. Besonders beliebt sind die Museen, die besondere Aktionen anbieten. Ein Museum organisiert zum Beispiel eine Nachtwanderung durch seine Räume, bei der die Besucher mit Taschenlampen die Kunstwerke entdecken können.`,
  example: {
    id: 0,
    statement: "In vielen deutschen Städten ...",
    options: {
      a: "sind die Museen nachts immer geöffnet.",
      b: "gibt es nur wenige Museen.",
      c: "gibt es eine Lange Nacht der Museen.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, dass ...",
      options: {
        a: "man nachts umsonst zu den Museen fahren kann.",
        b: "an zwei Tagen im Jahr die Nächte besonders lang sind.",
        c: "die Museen Berlins eine besondere Idee hatten.",
      },
      correct: "c",
    },
    {
      id: 8,
      statement: "Während der Langen Nacht der Museen ...",
      options: {
        a: "gibt es einen besonderen Busverkehr für die Museumsbesucher.",
        b: "gibt es günstige Eintrittspreise.",
        c: "dürfen keine Kinder ins Museum.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "Ein Berliner Museum ...",
      options: {
        a: "bietet in der Langen Nacht der Museen ein Open-Air-Konzert an.",
        b: "organisiert in der Langen Nacht der Museen eine Nachtwanderung.",
        c: "zeigt einmal pro Stunde einen Romy-Schneider-Film.",
      },
      correct: "b",
    },
  ],
};

export const module3LesenTeil2B: LesenTeil2Data = {
  module: 3,
  part: "Lesen Teil 2B",
  title: "Barbie – schon über ein halbes Jahrhundert alt",
  text: `Barbie ist die bekannteste Puppe der Welt und schon über ein halbes Jahrhundert alt. Im Jahr 1959 wurde sie zum ersten Mal auf der Spielzeugmesse in New York vorgestellt. Die Firma Mattel hatte damit einen riesigen Erfolg. Seitdem wurden über eine Milliarde Barbie-Puppen verkauft – damit ist Barbie die meistverkaufte Puppe aller Zeiten.

Barbie ist nicht nur ein Spielzeug, sondern auch eine Mode-Ikone. Sie trägt immer die aktuelle Mode und hat im Laufe der Jahre Hunderte verschiedene Outfits getragen. Manche ihrer Kleider wurden von berühmten Designern entworfen.

Barbies Freund Ken wurde erst zwei Jahre nach Barbie auf den Markt gebracht, im Jahr 1961. Die beiden waren lange ein Paar, haben sich aber zwischendurch auch mal getrennt. Trotz ihres Alters ist Barbie heute noch genauso beliebt wie früher. In mehr als 150 Ländern wird sie verkauft und ist ein absoluter Verkaufshit.`,
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, dass ...",
    options: {
      a: "Barbie eine teure Puppe ist.",
      b: "Mattel viele Spielzeuge herstellt.",
      c: "Barbie eine sehr erfolgreiche Puppe ist.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, dass ...",
      options: {
        a: "Barbie ein Verkaufshit ist.",
        b: "Barbie eine tolle Erfindung ist.",
        c: "Barbie zu alt ist.",
      },
      correct: "a",
    },
    {
      id: 11,
      statement: "Barbie trägt ...",
      options: {
        a: "meistens Kleider von Madonna.",
        b: "immer aktuelle Mode.",
        c: "Kleidung, die zu ihrem Auto passt.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Im Jahr 1959 ...",
      options: {
        a: "wurde Barbies Freund Ken auf den Markt gebracht.",
        b: "hatte die Firma Mattel großen Erfolg auf der Spielzeugmesse.",
        c: "gab es die erste Barbie-Puppe.",
      },
      correct: "c",
    },
  ],
};
