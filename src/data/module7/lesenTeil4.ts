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

export const module7LesenTeil4: LesenTeil4Data = {
  module: 7,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr ein Verbot von Plastikt\u00fcten?",
  topic:
    "In einer Zeitung lesen Sie Kommentare zum Umweltschutz und der Verschmutzung, die durch Plastik entsteht.",
  example: {
    name: "Franz",
    answer: "ja",
  },
  persons: [
    {
      name: "Sven",
      age: 32,
      city: "Berlin",
      comment:
        "Menschen, die Plastikt\u00fcten benutzen oder rauchen, haben etwas gemeinsam: Sie wollen zu ihrem Gl\u00fcck gezwungen werden. Schon vor dem Rauchverbot freuten sich viele Nikotinabh\u00e4ngige darauf, weil sie vom Gesetz in ihrem Vorhaben, weniger zu rauchen, unterst\u00fctzt werden. Dann frage ich mich konsequent: Warum sollten nicht auch Plastikt\u00fctentr\u00e4ger zu ihrem Gl\u00fcck gezwungen werden? Erscheint mir logisch.",
    },
    {
      name: "Aiso",
      age: 26,
      city: "Hameln",
      comment:
        "Verbieten der T\u00fcten ist nicht die beste L\u00f6sung. Allerdings k\u00f6nnte man die Gesch\u00e4fte dazu zwingen, sie nicht mehr kostenlos zu geben, so wie es in Superm\u00e4rkten ist. Dann werden sich viele Leute genau \u00fcberlegen, ob jede T\u00fcte in jedem Gesch\u00e4ft wirklich sein muss oder ob sie lieber darauf verzichten. Auch so k\u00f6nnte man die Plastikt\u00fcten reduzieren.",
    },
    {
      name: "Miriam",
      age: 22,
      city: "St. Gallen",
      comment:
        "Ich habe immer eine Tasche dabei, die sich sehr klein zusammenfalten l\u00e4sst. Darin lassen sich B\u00fccher aus der Bibliothek genauso wie Eink\u00e4ufe oder anderes transportieren. Ich meine, Plastikt\u00fcten sehen schrecklich aus. Au\u00dferdem schmei\u00dft man sie dann auch irgendwann in den M\u00fcll. Diese T\u00fcten sind nicht nur unn\u00f6tig, sondern auch umweltsch\u00e4dlich.",
    },
    {
      name: "Sarah",
      age: 17,
      city: "M\u00fcnchen",
      comment:
        "Aber was w\u00fcrden wir dann nehmen? Ich denke, dass auch Papiert\u00fcten schlecht f\u00fcr die Umwelt sind, weil daf\u00fcr B\u00e4ume gef\u00e4llt werden. Meiner Meinung nach sind Plastikt\u00fcten in Deutschland kein Problem mehr. Die Leute gehen damit sparsam um und benutzen sie immer wieder, bis sie auseinanderfallen. Danach werden sie recycelt. Was soll daran sch\u00e4dlich sein?",
    },
    {
      name: "Maiken",
      age: 50,
      city: "Erlangen",
      comment:
        "Fr\u00fcher wurden die Supermarktplastikt\u00fcten praktisch vollst\u00e4ndig als M\u00fcllt\u00fcten weiterverwendet. Seit es sie nicht mehr kostenlos gibt, kauft man sich nun M\u00fcllt\u00fcten, weil sie einfach gebraucht werden. Im Vergleich zu dem ganzen anderen Plastikm\u00fcll sind die T\u00fcten \u00fcbrigens nur ein relativ geringer Teil. Darum sollte nicht so viel Wirbel gemacht werden. Die paar Gesch\u00e4fte, die sie noch so geben, k\u00f6nnen das meiner Meinung nach weiterhin tun.",
    },
    {
      name: "Frederike",
      age: 27,
      city: "Gera",
      comment:
        "Vor ein paar Tagen habe ich gelesen, dass es Leute gibt, die das Plastik ganz aus ihrem Leben verbannt haben. Die haben also zu Hause keinen einzigen Gegenstand mehr aus Plastik. Ich meine, das ist unser Ziel. So k\u00f6nnen wir sowohl die Umwelt sch\u00fctzen als auch die Rohstoffe der Erde sparen. Ein Verbot von Plastikt\u00fcten w\u00e4re ein erster Schritt in die richtige Richtung.",
    },
    {
      name: "Luisa",
      age: 19,
      city: "Salzburg",
      comment:
        "Habt ihr schon mal die Fotos von Delfinen und Wasserschildkr\u00f6ten gesehen, die an Plastikt\u00fcten erstickt sind? Sp\u00e4testens dann sollte jedem klar sein, dass wir umstellen m\u00fcssen und andere Formen der Verpackung benutzen sollten. Plastikt\u00fcten tragen nicht nur dazu bei, dass wir viel mehr M\u00fcll haben, sie bringen auch den Tod.",
    },
  ],
  answers: [
    { name: "Sven", answer: "nein" },
    { name: "Aiso", answer: "ja" },
    { name: "Miriam", answer: "nein" },
    { name: "Sarah", answer: "ja" },
    { name: "Maiken", answer: "nein" },
    { name: "Frederike", answer: "nein" },
    { name: "Luisa", answer: "ja" },
  ],
};
