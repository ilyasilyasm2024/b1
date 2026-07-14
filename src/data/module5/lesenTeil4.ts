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

export const module5LesenTeil4: LesenTeil4Data = {
  module: 5,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person daf\u00fcr, wieder aufs Land zu ziehen?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber den neuen Trend, von der Stadt wieder aufs Land zu ziehen.",
  example: {
    name: "Sandra",
    answer: "nein",
  },
  persons: [
    {
      name: "D\u00f6rthe",
      age: 14,
      city: "Augsburg",
      comment:
        "Ich wohne in einer St\u00e4dt. Zwar ist Augsburg nicht so gro\u00df, aber es ist doch eine Stadt. Um Augsburg gibt es viele sch\u00f6ne D\u00f6rfer. Ab und zu fahren wir da mal hin, um zu wandern oder ein Picknick zu machen. Das ist ehrlich gut. Unsuhaltele w\u00e4re aber eine andere Sache. Trotz aller Pluspunkte kann mich das Land als Wohnort nicht \u00fcberzeugen.",
    },
    {
      name: "Alexander",
      age: 40,
      city: "Hamburg",
      comment:
        "Das kann ich mir f\u00fcr mich gut vorstellen. Denn dort kann man die Seele \u201ebaumeln\u201c lassen, wie man so sch\u00f6n sagt. Es gibt keinen L\u00e4rm, kaum Verbrechen, keine Staus \u2013 Ja, ich stelle mir das paradiesisch vor. Ich w\u00fcrde es sofort tun.",
    },
    {
      name: "Norbert",
      age: 19,
      city: "Essen",
      comment:
        "Dar\u00fcber habe ich noch nie nachgedacht. Warum sollte man das eigentlich machen? Dann wird ja der Weg zur Arbeit viel l\u00e4nger. Das f\u00e4nde ich unpraktisch. Aber sicher ist es in einem kleineren Ort auch sch\u00f6ner, denn man kann die Natur erleben und Ausfl\u00fcge zu machen; das Gr\u00fcn liegt ja direkt vor der T\u00fcr. Da k\u00f6nnte sich lohnen, zumal man dort auch gesund lebt. Die Argumente daf\u00fcr haben mehr Gewicht.",
    },
    {
      name: "Julius",
      age: 30,
      city: "Weimar",
      comment:
        "Also, das ruhige Landleben finde ich unertr\u00e4glich. Es passiert zu wenig. Nat\u00fcrlich kann man ab und zu in eine Stadt fahren, aber trotzdem verpasst man einfach zu viel. Sicher ist die Luft dort besser, aber ich halte es f\u00fcr einen Fehler wegzuziehen. Das w\u00fcrde ich niemandem raten.",
    },
    {
      name: "Laura",
      age: 17,
      city: "Chur",
      comment:
        "Mit meiner Frau habe ich schon oft dar\u00fcber diskutiert. So eine Entscheidung will wohl \u00fcberlegt sein. Bis jetzt tendieren wir aber zur Stadt, besonders auch wegen der Schulen, die unsere Kinder hier besuchen k\u00f6nnen. Und sie k\u00f6nnen allein zu Fu\u00df hinlaufen. Das w\u00e4re ja vom Dorf aus nicht m\u00f6glich. Unser Alltag w\u00fcrde komplizierter werden. Ich denke, das kommt im Moment nicht in Frage.",
    },
    {
      name: "Yvette",
      age: 22,
      city: "Trier",
      comment:
        "Schwierige Frage. Ich w\u00fcrde mal denken, das kommt darauf an, wo man arbeitet. Wenn ich das nun entscheiden m\u00fcsste, w\u00fcrde es mir sehr schwer fallen. Letztendlich sehe ich meine Zukunft aber eher in einer st\u00e4dtischen Gegend. Ich brauche eine gewisse Lebendigkeit um mich herum, vielleicht auch den Stress, der mit so einem Leben einhergeht.",
    },
    {
      name: "Nicola",
      age: 55,
      city: "Lugano",
      comment:
        "Also da kann ich einfach nur zustimmen. Das kommt mir sehr logisch und gut vor. Bei mir liegt es nur an den Finanzen, denn das Land ist auch nicht so billig, wie alle immer denken. Im Tessin sind g\u00fcnstige Wohnungen in der Natur extrem selten. Sollte ich so etwas mal finden, w\u00fcrde ich sofort meine Sachen packen, ist doch klar.",
    },
  ],
  answers: [
    { name: "D\u00f6rthe", answer: "nein" },
    { name: "Alexander", answer: "ja" },
    { name: "Norbert", answer: "ja" },
    { name: "Julius", answer: "nein" },
    { name: "Laura", answer: "nein" },
    { name: "Yvette", answer: "nein" },
    { name: "Nicola", answer: "ja" },
  ],
};
