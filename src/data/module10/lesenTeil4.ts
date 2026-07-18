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

export const module10LesenTeil4: LesenTeil4Data = {
  module: 10,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr den Hundef\u00fchrerschein?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber die Einf\u00fchrung eines Hundef\u00fchrerscheins und die Vor- und Nachteile davon.",
  example: {
    name: "Achim",
    answer: "nein",
  },
  persons: [
    {
      name: "Maren",
      age: 21,
      city: "Husum",
      comment:
        "Ein Hund muss in jeder Situation vom Besitzer kontrollierbar sein. Nicht dass die 80-j\u00e4hrige Oma vom 3-j\u00e4hrigen Sch\u00e4ferhund durch die Gegend gezogen wird. Aber so weit sind wir noch nicht. Deshalb finde ich den Hundef\u00fchrerschein unrealistisch. Das kommt mir doch etwas zu extrem vor.",
    },
    {
      name: "Janina",
      age: 40,
      city: "Zug",
      comment:
        "Wie w\u00e4re es, wenn wir unseren Kindern beibringen, dass nicht jeder Hund gef\u00e4hrlich ist? Heute wechseln Leute schon panisch die Stra\u00dfenseite, wenn ich ihnen mit meinem Hund an lockerer Leine entgegenkomme. Die Zeitungsberichte haben alle Leute hysterisch gemacht. Ein Hundef\u00fchrerschein wird nichts \u00e4ndern und wir Normalhundebesitzer m\u00fcssen dann darunter leiden.",
    },
    {
      name: "Andreas",
      age: 22,
      city: "Berlin",
      comment:
        "Ich habe selbst einen Hund und erlebe es immer wieder, wie auch die kleinen und mittelgro\u00dfen Hunde sich Menschen und anderen Hunden gegen\u00fcber unm\u00f6glich verhalten oder sogar bei\u00dfen. Daf\u00fcr sollte man die Besitzer bestrafen und auch hohe Bu\u00dfgelder kassieren. Es muss richtig wehtun im Portemonnaie, erst dann lernen es die Leute. Der Hundef\u00fchrerschein ist da genau richtig.",
    },
    {
      name: "Regula",
      age: 43,
      city: "Appenzell",
      comment:
        "Das ist doch nicht zu fassen, was sich die B\u00fcrokraten f\u00fcr die Hundebesitzer \u00fcberlegen! So einen dummen Vorschlag habe ich schon lange nicht mehr geh\u00f6rt. Stellen Sie sich mal vor, wie auf einer Promenade ein Polizist jemanden anh\u00e4lt und kontrollieren will, ob er einen F\u00fchrerschein hat. Unglaublich!",
    },
    {
      name: "Norris",
      age: 16,
      city: "Ratingen",
      comment:
        "Mit einer Regelung, die niemand ernst nimmt, macht der Staat sich nur noch l\u00e4cherlicher. Wer wird dann diesen Hundef\u00fchrerschein kontrollieren? So viele Polizisten gibt es doch nirgendwo, dass so etwas m\u00f6glich w\u00e4re. Ich glaube, hier wollte sich nur wieder ein Politiker wichtigmachen, der keine Ahnung hat.",
    },
    {
      name: "Konstantin",
      age: 19,
      city: "Bregenz",
      comment:
        "F\u00fcr die Hunde lohnt sich das sicher, da die Qualit\u00e4t ihrer Besitzer zunehmen w\u00fcrde. Nat\u00fcrlich w\u00e4ren es dann sicherlich einige Hundebesitzer weniger, denn ich kann mir gut vorstellen, dass nicht alle die Pr\u00fcfung schaffen, so wie beim Autofahren. Ja, ich sehe das als Hundeschutz.",
    },
    {
      name: "Hans",
      age: 45,
      city: "Kiel",
      comment:
        "Dieser Hundef\u00fchrerschein sollte schon seit Jahren da sein, denn es gibt einfach zu viele Menschen, die pers\u00f6nliche Probleme mithilfe eines Hundes l\u00f6sen m\u00f6chten: Hund als Kindersatz, als Waffe, als Ersatz f\u00fcr menschliche Kontakte. Besonders den Hunden w\u00e4re damit geholfen, wenn ihre Besitzer sich ernsthaft mit ihnen besch\u00e4ftigen.",
    },
  ],
  answers: [
    { name: "Maren", answer: "nein" },
    { name: "Janina", answer: "nein" },
    { name: "Andreas", answer: "ja" },
    { name: "Regula", answer: "nein" },
    { name: "Norris", answer: "nein" },
    { name: "Konstantin", answer: "ja" },
    { name: "Hans", answer: "ja" },
  ],
};
