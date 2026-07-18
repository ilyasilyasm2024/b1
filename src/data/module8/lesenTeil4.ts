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

export const module8LesenTeil4: LesenTeil4Data = {
  module: 8,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person daf\u00fcr, dass 16-J\u00e4hrige w\u00e4hlen d\u00fcrfen?",
  topic:
    "In einem Online-Magazin lesen Sie Kommentare zu einem Artikel \u00fcber das Wahlrecht schon f\u00fcr 16-J\u00e4hrige.",
  example: {
    name: "Sonja",
    answer: "ja",
  },
  persons: [
    {
      name: "Magnus",
      age: 37,
      city: "Biel",
      comment:
        "Jugendliche lassen sich viel zu sehr von der Meinung anderer beeinflussen. Die w\u00e4hlen dann das, was der beste Freund w\u00e4hlt. Ich kann mir nicht vorstellen, dass sie die Programme von Parteien kritisch durchlesen oder sich ernsthaft mit der Politik besch\u00e4ftigen. 16 ist zu fr\u00fch.",
    },
    {
      name: "Cornelius",
      age: 24,
      city: "Traiskirchen",
      comment:
        "Man hat doch schon ganz gute Erfahrungen mit dem Wahlrecht bei Kommunalwahlen gemacht, also f\u00fcr B\u00fcrgermeister usw. Warum sollte das nicht genauso gut bei den Regierungswahlen funktionieren? Ich denke, die Zeit daf\u00fcr ist gekommen.",
    },
    {
      name: "Imani",
      age: 16,
      city: "Frankfurt",
      comment:
        "Das bedeutet, dass ich ab jetzt auch eine Regierung w\u00e4hlen d\u00fcrfte. Dadurch w\u00e4re ich auch irgendwie verpflichtet, mich mit Politik zu besch\u00e4ftigen, um informiert zu sein. Nat\u00fcrlich w\u00e4re das eine gro\u00dfe Motivation, mal ein bisschen genauer bei den politischen Diskussionen zuzuh\u00f6ren, was ich im Moment nicht mache. Ich h\u00e4tte dann auch eher das Gef\u00fchl, ernst genommen zu werden, und das ist mir wichtig.",
    },
    {
      name: "Caroline",
      age: 38,
      city: "Cuxhaven",
      comment:
        "Wenn ich \u00fcber das Wahlrecht nachdenke, meine ich, es sollte wieder auf 21 hochgesetzt werden. Die Gr\u00fcnde liegen auf der Hand. Mit 21 ist man voll strafm\u00fcndig, also f\u00fcr alle Taten von dem Gesetz verantwortlich, und mit 21 ist der junge Mensch sicher mit der Schule fertig und studiert oder lernt einen Beruf, befindet sich also auch in einem \u201eerwachsenen\u201c Umfeld. Das ist das richtige Alter.",
    },
    {
      name: "Christoph",
      age: 30,
      city: "Saarbr\u00fccken",
      comment:
        "Es gibt einen Grund, warum schon seit so vielen Jahren das Wahlrecht erst ab 18 gilt. Vorher fehlt es den Menschen einfach an Lebenserfahrung, um bei so einer wichtigen Sache mitzumachen. Ich glaube nicht, dass ein Jugendlicher schon genug von komplexen, politischen Entscheidungen verstehen kann, besonders wenn es sich um die Wahl auf nationaler Ebene handelt.",
    },
    {
      name: "Michelle",
      age: 18,
      city: "Kloten",
      comment:
        "In der Schweiz wird die Bev\u00f6lkerung immer \u00e4lter. Die Statistik sagt, dass die \u00fcber 55-J\u00e4hrigen bald \u00fcber die H\u00e4lfte der W\u00e4hler ausmachen. Aber wir k\u00f6nnen doch nicht alles nur von \u00e4lteren Menschen bestimmen lassen! Die Jungen brauchen auch eine Stimme. Ein richtiger Schritt w\u00e4re f\u00fcr mich das Wahlrecht ab 16.",
    },
    {
      name: "Karsten",
      age: 24,
      city: "Neum\u00fcnster",
      comment:
        "Damit w\u00fcrde man ein falsches Signal geben, denn wenn die jungen Leute erstmal mit 16 w\u00e4hlen d\u00fcrfen, wollen sie dann bestimmt auch Auto fahren und andere Dinge mit 16 machen d\u00fcrfen. Viel wichtiger w\u00e4re, dass die Menschen, die schon 18 sind, sich wieder mehr f\u00fcr Politik interessieren und w\u00e4hlen gehen.",
    },
  ],
  answers: [
    { name: "Magnus", answer: "nein" },
    { name: "Cornelius", answer: "ja" },
    { name: "Imani", answer: "ja" },
    { name: "Caroline", answer: "nein" },
    { name: "Christoph", answer: "nein" },
    { name: "Michelle", answer: "ja" },
    { name: "Karsten", answer: "nein" },
  ],
};
