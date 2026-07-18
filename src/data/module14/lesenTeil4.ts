export interface LesenTeil4Person {
  name: string;
  age: number;
  city: string;
  comment: string;
}

export interface LesenTeil4Data {
  module: number;
  part: string;
  time: string;
  instruction: string;
  topic: string;
  example: { name: string; answer: "ja" | "nein" };
  persons: LesenTeil4Person[];
  answers: { name: string; answer: "ja" | "nein" }[];
}

export const module14LesenTeil4: LesenTeil4Data = {
  module: 14,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person daf\u00fcr, dass Sch\u00fcler unter 18 Jahren schon studieren d\u00fcrfen?",
  topic:
    "In Ihrer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber Fr\u00fchstudenten, die schon vor dem Schulabschluss studieren, obwohl sie noch nicht erwachsen sind.",
  example: {
    name: "Petra",
    answer: "ja",
  },
  persons: [
    {
      name: "Andrea",
      age: 42,
      city: "Berlin",
      comment:
        "Die einen m\u00fcssen Wartesemester in Kauf nehmen, um einen Studienplatz zu bekommen, und werden dabei \u00e4lter und \u00e4lter. Die anderen hingegen d\u00fcrfen schon als Sch\u00fcler studieren. Wie kann das sein? So eine ungerechte Regelung erscheint mir eine verkehrte Welt zu sein. Und grunds\u00e4tzlich sehe ich noch ein Problem: Die Universit\u00e4ten sind auf einmal verantwortlich f\u00fcr Minderj\u00e4hrige. Wer soll sich denn um diese Jugendlichen k\u00fcmmern und auf sie aufpassen? Ein Gl\u00fcck, dass ich die Schule eben erst vor Kurzem verlassen habe.",
    },
    {
      name: "Torsten",
      age: 38,
      city: "Innsbruck",
      comment:
        "Selbst den Bibliotheksausweis kann ich als Sch\u00fcler unter 18 nicht einfach so beantragen. Ich brauche daf\u00fcr die Unterschrift meiner Mutter oder die meines Vaters. Besonders umst\u00e4ndlich ist, dass ich mich nicht \u00fcber das Online-System der Uni f\u00fcr Pr\u00fcfungen anmelden kann. Stattdessen muss ich pers\u00f6nlich bei der Professorin vorbeigehen. Trotzdem lohnt es sich, fr\u00fcher im Leben mit dem Studium anzufangen.",
    },
    {
      name: "Chiara",
      age: 30,
      city: "Klosters",
      comment:
        "Bei uns gibt es das noch nicht. Ich kann mir aber vorstellen, dass es besonders f\u00fcr begabte Sch\u00fcler ein gutes Angebot ist. Diese jungen Leute werden in der Schule sowieso unterfordert und m\u00fcssen sich kaum einmal anstrengen. Dabei brauchen sie eine Herausforderung, um viel zu leisten. Unsere Gesellschaft braucht solche Menschen. Warum sollen sie dann bis zur Matura mit dem Studium warten?",
    },
    {
      name: "Reiner",
      age: 51,
      city: "Hamburg",
      comment:
        "Mit 16 oder 17 sind die Jugendlichen ja noch in der Pubert\u00e4t. Die interessieren sich doch nur daf\u00fcr, ob sie cool sind. In dem Alter ist man noch nicht reif f\u00fcr ein Studium. Ich kann nicht glauben, dass junge Menschen schon ernsthaft dabei sind. Wenn \u00fcberhaupt, sollte man daf\u00fcr erwachsen sein.",
    },
    {
      name: "Ferdinand",
      age: 16,
      city: "Andermatt",
      comment:
        "Bei mir ist das Studium schon l\u00e4nger her. Ich kann sagen, das war eine sch\u00f6ne Zeit, auch weil man mit anderen zusammenarbeitete, die \u00e4hnliche Interessen hatten. Das motiviert und erweitert den eigenen Horizont. Wenn diese Erfahrung nun schon fr\u00fcher im Leben gemacht wird, umso besser.",
    },
    {
      name: "Iwa",
      age: 17,
      city: "Stuttgart",
      comment:
        "Die wichtigsten Erfahrungen macht man doch in der Praxis. Viel richtiger w\u00e4re, dass alle jungen Leute ein Praktikum machen, ein konkretes Wissen erwerben, auch bevor sie studieren. Die Praxis wird sie im Leben weiterbringen, nicht die Theorie. Egal wie alt sie sind, es bringt nichts, dass sie nur studieren. Dieses Programm ist diesem Gedanken genau entgegengesetzt.",
    },
    {
      name: "Nelen",
      age: 45,
      city: "Braunschweig",
      comment:
        "Hier in der N\u00e4he gibt es das nicht. Scheint mir aber wert zu sein, es zu testen. Ich wei\u00df nur nicht, wie man dann nebenbei noch die Verpflichtungen des Gymnasiums zeitlich schafft. Oder bekommen diese Sch\u00fcler schulfrei? Bei uns interessiert man sich jedenfalls neben dem Schulstunden auch f\u00fcr anderes.",
    },
  ],
  answers: [
    { name: "Andrea", answer: "nein" },
    { name: "Torsten", answer: "ja" },
    { name: "Chiara", answer: "nein" },
    { name: "Reiner", answer: "ja" },
    { name: "Ferdinand", answer: "nein" },
    { name: "Iwa", answer: "ja" },
    { name: "Nelen", answer: "ja" },
  ],
};
