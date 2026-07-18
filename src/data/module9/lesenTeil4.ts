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

export const module9LesenTeil4: LesenTeil4Data = {
  module: 9,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr Facebook?",
  topic:
    "In einer Online-Zeitung lesen Sie Kommentare zu einem Artikel \u00fcber soziale Medien, wie z.B. Facebook, und deren Einfluss auf das Leben der Nutzer.",
  example: {
    name: "Sebastian",
    answer: "nein",
  },
  persons: [
    {
      name: "Julia",
      age: 19,
      city: "Bremerhaven",
      comment:
        "Ich kann mir kaum vorstellen, wie das Leben ohne Facebook w\u00e4re. Wie k\u00f6nnte man ohne Facebook so kosteng\u00fcnstig und direkt mit allen Freunden auf der Welt kommunizieren? Ich meine, diese Erfindung ist genial. Facebook erm\u00f6glicht es uns, trotz zeitlicher und r\u00e4umlicher Distanz N\u00e4he zu haben und das zum Nulltarif.",
    },
    {
      name: "Patrick",
      age: 48,
      city: "Lausanne",
      comment:
        "Als Vater kann ich mir die Attraktivit\u00e4t von Facebook nur dadurch erkl\u00e4ren, dass auf die Jugendlichen ein Gruppendruck ausge\u00fcbt wird. Jeder will dazugeh\u00f6ren und macht deshalb mit. Dabei erzieht Facebook eine Generation von Menschen, die weder richtig kommunizieren noch zwischen wichtigen und unwichtigen Informationen unterscheiden k\u00f6nnen.",
    },
    {
      name: "Rahel",
      age: 21,
      city: "Klagenfurt",
      comment:
        "Ich bin \u00fcber Facebook immer gut informiert \u00fcber Neuigkeiten und Klatsch. Es ist einfach und \u00fcberschaubar. Man kann dadurch st\u00e4ndig gut informiert sein und das ist ja heute von gro\u00dfer Wichtigkeit. Menschen, die da nicht mitmachen, sind im Nachteil, weil sie alles mit Versp\u00e4tung erfahren und nicht wissen, was los ist.",
    },
    {
      name: "Antonia",
      age: 27,
      city: "Rostock",
      comment:
        "F\u00fcr mich ist absolut unverst\u00e4ndlich, dass die Menschen in sozialen Medien wie Facebook \u00fcber alles Private schreiben, ohne sich Gedanken zu machen. Dabei ist doch bekannt, dass es keine richtige Absicherung der Daten gibt! Wer m\u00f6chte schon, dass der neue Arbeitgeber die Fotos von der Abifeier sehen kann, auf der man zu viel getrunken hatte?",
    },
    {
      name: "Nicki",
      age: 15,
      city: "Krems",
      comment:
        "Fr\u00fcher hatte man Freundeb\u00fccher, heute gibt es Facebook. Es ist doch klar, dass sich die Technologie weiterentwickelt und man da mitmachen will. Das hei\u00dft noch lange nicht, dass ich jeden Tag viele Stunden am PC sitze. Ich gehe mit der Zeit!",
    },
    {
      name: "Olivia",
      age: 16,
      city: "Wuppertal",
      comment:
        "Wenn ich zu Hause bin, habe ich mein iPad an und kann jederzeit \u00fcber Facebook sehen, was meine Freundinnen machen. F\u00fcr mich ist das wichtig. Meine Eltern w\u00fcrden mir nie erlauben, die gleiche Zeit am Telefon zu verbringen. \u00dcber Facebook habe ich die ideale L\u00f6sung gefunden und kann auch von zu Hause bei und mit meinen Freundinnen sein.",
    },
    {
      name: "Gisela",
      age: 44,
      city: "Molde",
      comment:
        "Vor l\u00e4ngerer Zeit, als ich das erste Mal von Facebook h\u00f6rte, fand ich es idiotisch, dabei mitzumachen. Dann sagten mir Freunde, dass man \u00fcber Facebook auch alte Freundschaften wiederbeleben und Mitsch\u00fcler von fr\u00fcher finden kann. Ich habe mir dann auch ein Profil eingerichtet und seitdem schon f\u00fcnf Freundinnen aus der Schulzeit wiedergefunden!",
    },
  ],
  answers: [
    { name: "Julia", answer: "nein" },
    { name: "Patrick", answer: "ja" },
    { name: "Rahel", answer: "nein" },
    { name: "Antonia", answer: "nein" },
    { name: "Nicki", answer: "ja" },
    { name: "Olivia", answer: "ja" },
    { name: "Gisela", answer: "ja" },
  ],
};
