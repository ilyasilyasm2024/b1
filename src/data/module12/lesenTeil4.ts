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

export const module12LesenTeil4: LesenTeil4Data = {
  module: 12,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr eine Geldstrafe wegen Schulschw\u00e4nzen?",
  topic:
    "In einer Zeitung lesen Sie Kommentare zu einem Artikel \u00fcber die Idee, dass Sch\u00fcler, die unerlaubt in der Schule fehlen, eine Geldstrafe von 440 Euro bekommen sollen.",
  example: {
    name: "Hartmuth",
    answer: "ja",
  },
  persons: [
    {
      name: "Steffi",
      age: 52,
      city: "Schwyz",
      comment:
        "Das kann nicht m\u00f6glich sein, weil Kinder unter 14 Jahren generell nicht vom Staat bestraft werden k\u00f6nnen. Den Eltern wird man nachweisen und beweisen m\u00fcssen, dass sie die Kinder nicht gezwungen haben, in die Schule zu gehen. Das ist alles sehr kompliziert. Ich meine, eine Strafe muss einfach und direkt sein, in diesem Fall bringen Geldstrafen gar nichts.",
    },
    {
      name: "Robert",
      age: 20,
      city: "Gossau",
      comment:
        "Grunds\u00e4tzlich geht es hier um die ersten neun Schuljahre. Sie fallen unter die Schulpflicht. Ob sich jemand durch Schulschw\u00e4nzen die Matura verbaut, ist seine Sache, aber f\u00fcr diese Sch\u00fcler gleich eine Strafe zu verlangen finde ich auch wieder zu extrem. K\u00f6nnte es da nicht eine bessere Methode geben? Sollte man die Sch\u00fcler nicht lieber mehr motivieren statt bestrafen?",
    },
    {
      name: "Martina",
      age: 35,
      city: "Villach",
      comment:
        "Warum sollen die Eltern bestraft werden, wenn die Jugendlichen hinter ihrem R\u00fccken schw\u00e4nzen? Ich selbst habe in der 7. und 8. Klasse Gymnasium sehr oft geschw\u00e4nzt und die Matura trotzdem geschafft. Geldstrafen gegen die Eltern bringen gar nichts. Die Jugendlichen sollten selbst mit \u201eHilfsdiensten\u201c bestraft werden, z.B. Stra\u00dfen oder Parks sauber machen. Das w\u00fcrde mehr Wirkung haben als alles andere!",
    },
    {
      name: "Konrad",
      age: 33,
      city: "Interlaken",
      comment:
        "Hat jemand eine Vorstellung, wie viel 79.000 nichtstuende junge Menschen unser Sozialsystem kosten? Schon allein aus diesem Grund sind solche Strafen absolut gerechtfertigt. Ich w\u00e4re da nicht so zimperlich mit den Herrschaften Schulschw\u00e4nzern und deren Eltern.",
    },
    {
      name: "Zwontje",
      age: 16,
      city: "Leipzig",
      comment:
        "Das kann doch wohl nicht ernst gemeint sein. Ein Sch\u00fcler muss doch ab und zu mal schw\u00e4nzen, sonst finden alle ihn langweilig. Ich verstehe nicht, warum sich die Politiker mit ihren Gesetzen einmischen m\u00fcssen. Das geht sie doch gar nichts an. Das ist ein Thema f\u00fcr die Lehrer, die Sch\u00fcler und die Eltern, nicht f\u00fcr die Gesetzgeber.",
    },
    {
      name: "Christian",
      age: 29,
      city: "Rotenburg",
      comment:
        "Das ist eine Ma\u00dfnahme, die alle aufwecken wird. Wir k\u00f6nnen doch als Gesellschaft nicht zusehen, wie wichtige Regeln missachtet werden. Ich bin sicher, dass die Sch\u00fcler dann von zu Hause auch Druck bekommen, immer in die Schule zu gehen. Wenn junge Leute schon in der Schule anfangen, sich nicht an Regeln zu halten, werden sie sp\u00e4ter auch zu einem Problem f\u00fcr die Gesellschaft. Deshalb ist es richtig, fr\u00fch etwas dagegen zu unternehmen.",
    },
    {
      name: "Ole",
      age: 17,
      city: "Dortmund",
      comment:
        "Es gibt Leute, die es mit dem Schw\u00e4nzen wirklich \u00fcbertreiben. Die driften total ab, keiner kann die mehr kontrollieren, die Eltern nicht, die Lehrer nicht, keiner. Ich kann mir aber vorstellen, dass so eine Strafe sie zum Nachdenken zwingen w\u00fcrde. Das w\u00e4re doch gut, denn dann w\u00fcrden sie vielleicht den Weg zur\u00fcck in die Schule finden.",
    },
  ],
  answers: [
    { name: "Steffi", answer: "nein" },
    { name: "Robert", answer: "nein" },
    { name: "Martina", answer: "nein" },
    { name: "Konrad", answer: "ja" },
    { name: "Zwontje", answer: "nein" },
    { name: "Christian", answer: "ja" },
    { name: "Ole", answer: "ja" },
  ],
};
