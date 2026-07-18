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

export const module11LesenTeil4: LesenTeil4Data = {
  module: 11,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr Biolebensmittel?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber die Vor- und Nachteile von Biolebensmitteln.",
  example: {
    name: "Lena",
    answer: "ja",
  },
  persons: [
    {
      name: "Lorenz",
      age: 31,
      city: "Berlin",
      comment:
        "Das ist etwas f\u00fcr Wohlhabende, die so viel Geld f\u00fcr Lebensmittel ausgeben k\u00f6nnen, wie sie wollen. Es mag ja sein, dass Bio-Essen ges\u00fcnder ist, aber solange es viel teurer als die anderen Lebensmittel ist, kann man dar\u00fcber gar nicht diskutieren. Zurzeit bin ich deshalb nicht daf\u00fcr.",
    },
    {
      name: "Kea",
      age: 38,
      city: "Wien",
      comment:
        "Wenn ich das Wort schon h\u00f6re, stelle ich mir diese langweiligen, depressiven Menschen vor, die nie mit der Mode gehen, nur biologische Nahrungsmittel kaufen und essen und \u00fcberhaupt das Leben nicht genie\u00dfen k\u00f6nnen. Wozu das Ganze? Es reicht, wenn man qualitativ gute Lebensmittel kauft. Man sollte sich an die bekannten Marken halten und immer in Fachgesch\u00e4ften einkaufen.",
    },
    {
      name: "Ilvo",
      age: 29,
      city: "Graz",
      comment:
        "Kann jemand beweisen, dass Menschen, die nur Biolebensmittel essen, wirklich eine bessere Gesundheit haben als die anderen? So etwas sollte erstmal untersucht werden, danach kann man ja immer noch \u00fcberlegen, was man selbst will. Ansonsten verstehe ich nicht, warum ich so viel Geld f\u00fcr Essen zahlen soll.",
    },
    {
      name: "Inge",
      age: 19,
      city: "L\u00fcbeck",
      comment:
        "Bio ist eine Modewelle, die einem aufgezwungen wird und die nichts bringt. Nur Landwirte, die auf dieser Bio-Welle reiten, machen Gewinn. Wer wei\u00df denn, ob sie ihre Felder wirklich frei von Chemikalien halten und alle Regeln beachten? Da gibt es ja keine Garantie. Gerade gab es doch so einen Skandal, bei dem Biolebensmittel Krankheiten hervorgerufen haben. So etwas mache ich nicht mit.",
    },
    {
      name: "Marius",
      age: 22,
      city: "Kramsach",
      comment:
        "Ich muss sagen, bei Paradeisern oder Erd\u00e4pfeln kann man den Unterschied schon sp\u00fcren. Biologisches Obst und Gem\u00fcse ist zwar oft kleiner und unansehnlicher als herk\u00f6mmliches, aber der Geschmack ist doch das, was uns interessiert. Ich habe es satt, diese geschmacklosen Dinge zu essen. Bei biologischem Gem\u00fcse schmeckt man noch, was man isst!",
    },
    {
      name: "Nick",
      age: 16,
      city: "S\u00f6lden",
      comment:
        "So etwas kam mir immer unwichtig vor, aber neulich war ich mal in so einem Restaurant, da waren alle Speisen aus biologischem oder organischem Anbau. Hat ganz anders geschmeckt als sonst, aber nicht schlecht. Es ist gut, dass man w\u00e4hlen kann und so zwischen verschiedenen Geschmacksvarianten variieren kann.",
    },
    {
      name: "Oskar",
      age: 14,
      city: "W\u00fcrzburg",
      comment:
        "Sogar in den normalen Superm\u00e4rkten gibt es jetzt schon Bio-Waren: Bio-Gem\u00fcse, Bio-Obst, Bio-Fleisch usw. Wenn das wirklich so viel besser f\u00fcr uns und die Umwelt ist, warum ist dann nicht allgemein alles \u201eBio\u201c? Das w\u00e4re doch am besten. Nat\u00fcrlich m\u00f6chte ich dann, dass alle Lebensmittel von der Qualit\u00e4t her biologisch sind.",
    },
  ],
  answers: [
    { name: "Lorenz", answer: "nein" },
    { name: "Kea", answer: "ja" },
    { name: "Ilvo", answer: "nein" },
    { name: "Inge", answer: "nein" },
    { name: "Marius", answer: "ja" },
    { name: "Nick", answer: "ja" },
    { name: "Oskar", answer: "ja" },
  ],
};
