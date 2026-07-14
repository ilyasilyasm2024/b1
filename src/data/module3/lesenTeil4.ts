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

export const module3LesenTeil4: LesenTeil4Data = {
  module: 3,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für eine zweisprachige Erziehung von Kindern?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über zweisprachige Kinder und die mehrsprachige Erziehung.",
  example: {
    name: "Jana",
    answer: "ja",
  },
  persons: [
    {
      name: "Klaus",
      age: 35,
      city: "Rosenheim",
      comment:
        "Ich finde es toll, wenn Kinder zweisprachig aufwachsen. Das ist wie ein Training für das Gehirn. Außerdem lernen die Kinder gleich zwei Welten kennen – die Kultur der Mutter und die des Vaters. Das ist ein großer Vorteil für das spätere Leben.",
    },
    {
      name: "Patrizia",
      age: 17,
      city: "Uelzen",
      comment:
        "Meine beste Freundin ist zweisprachig aufgewachsen. Sie spricht Italienisch und Deutsch. Ich finde das super. Sie hatte nie Probleme mit der deutschen Sprache in der Schule und kann sich mit ihrer Familie in Italien problemlos unterhalten.",
    },
    {
      name: "Kevin",
      age: 23,
      city: "Wien",
      comment:
        "Meiner Meinung nach sollten alle, die in Österreich leben, Deutsch sprechen. Wenn man zu Hause eine andere Sprache spricht, dann lernt man Deutsch nie richtig. Außerdem ist es unpraktisch – die Kinder müssen ja sowieso in der Schule alles auf Deutsch machen.",
    },
    {
      name: "Annett",
      age: 38,
      city: "Zürich",
      comment:
        "Kinder sollten so früh wie möglich mit mehreren Sprachen in Kontakt kommen. Als Kind lernt man Sprachen noch ganz natürlich, fast wie die Muttersprache. Später ist es viel schwieriger und man hat oft einen Akzent. Also: Je früher, desto besser!",
    },
    {
      name: "Lucie",
      age: 16,
      city: "Köln",
      comment:
        "Ich bin froh, dass ich nur mit einer Sprache aufgewachsen bin. Englisch ist schon mein schwerstes Fach in der Schule. Ich stelle mir vor, dass es total verwirrend sein muss, wenn man zu Hause eine andere Sprache spricht als in der Schule.",
    },
    {
      name: "Herbert",
      age: 62,
      city: "Graz",
      comment:
        "In unserer globalisierten Welt sind Sprachen das Wichtigste. Junge Menschen, die mehrere Sprachen können, haben viel bessere Chancen auf dem Arbeitsmarkt. Ich bewundere alle Eltern, die ihren Kindern diese Möglichkeit geben.",
    },
    {
      name: "Maria",
      age: 22,
      city: "Potsdam",
      comment:
        "Ich glaube, dass ein Kind, das mit zwei Sprachen und zwei Kulturen aufwächst, irgendwann nicht mehr weiß, wohin es gehört. Man ist dann weder richtig deutsch noch richtig etwas anderes. Das Kind verliert seine Identität.",
    },
  ],
  answers: [
    { name: "Klaus", answer: "ja" },
    { name: "Patrizia", answer: "ja" },
    { name: "Kevin", answer: "nein" },
    { name: "Annett", answer: "ja" },
    { name: "Lucie", answer: "nein" },
    { name: "Herbert", answer: "ja" },
    { name: "Maria", answer: "nein" },
  ],
};
