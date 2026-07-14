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

export const module2LesenTeil4: LesenTeil4Data = {
  module: 2,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für Autobahngebühren?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über die Idee, auch in Deutschland für die Nutzung der Autobahn Geld zu verlangen.",
  example: {
    name: "Peter",
    answer: "ja",
  },
  persons: [
    {
      name: "Jörg",
      age: 69,
      city: "Freiburg",
      comment:
        "Autofahrer zahlen schon genug Steuern. Es gibt eine Umweltsteuer, eine Benzinsteuer und eine Pkw-Steuer. Irgendwann reicht's. Jetzt noch extra für die Autobahnen zu bezahlen finde ich unfair. Das wird einfach zu viel.",
    },
    {
      name: "Katharina",
      age: 30,
      city: "Linz",
      comment:
        "Ich freue mich immer, wenn ich in Deutschland, ohne extra zu zahlen, auf die Autobahn fahre. Wir müssen in Österreich schon lange zahlen. Aber ehrlich gesagt finde ich es richtig, für die Autobahn noch mal eine Gebühr zu verlangen. Es kostet schließlich viel, sie zu bauen und instand zu halten.",
    },
    {
      name: "Chris",
      age: 25,
      city: "Bern",
      comment:
        "Hier in der Schweiz ist das schon lange so. Wir besorgen uns die Autobahn-Plakette für ein Jahr, bezahlen und wissen, dass alles O.K. ist. So kann der Staat auch dafür sorgen, dass die Straßen stets in Ordnung sind. Für mich ist das sehr logisch. Ich wundere mich sogar, dass es nicht schon länger in Deutschland eine Gebühr gibt.",
    },
    {
      name: "Micha",
      age: 51,
      city: "Münster",
      comment:
        "Da haben sich die Politiker mal wieder etwas Neues ausgedacht. Die brauchen Geld und versuchen einfach, es von irgendwo zu bekommen. So viele Jahre fahren wir, ohne extra zu zahlen und jetzt auf einmal soll sich das ändern! Ich sehe dafür keinen Grund.",
    },
    {
      name: "Jan",
      age: 26,
      city: "Stralsund",
      comment:
        "Ich sehe diese Frage vorwiegend von der Umwelt her. Ziel ist doch, dass immer mehr Menschen ihr Auto stehen lassen und möglichst selten benutzen. Dann sinkt die Umweltverschmutzung. Solange die Autobahnmaut umsonst sind, überlegt man doch nicht lange und fährt los. Gebühren würden viel mehr Autofahrer zum Nachdenken bringen. Sie würden seltener Auto fahren. Das ist gut für die Umwelt und gut für uns.",
    },
    {
      name: "Iris",
      age: 18,
      city: "Passau",
      comment:
        "Ich habe gerade erst meinen Führerschein gemacht und kenne mich noch nicht so gut aus. Meine Meinung ist eigentlich, dass Autofahren sowieso teuer ist, man braucht Benzin, eine Versicherung usw. Das ist alles schon viel Geld. Auch noch für die Autobahnen zu zahlen, kommt mir übertrieben vor.",
    },
    {
      name: "Sofia",
      age: 15,
      city: "Erfurt",
      comment:
        "Wenn ich mal Auto fahre, möchte ich die Autobahnen auch benutzen. Wichtig ist für mich, dass dort alles gut organisiert ist, ich meine, die Straßen sollen sicher sein, gut gepflegt usw. Ich verstehe, dass man dafür bezahlen muss. Es macht die Autofahrer zwar nicht froh, aber es ist richtig. Wie soll das Ganze sonst finanziert werden?",
    },
  ],
  answers: [
    { name: "Jörg", answer: "nein" },
    { name: "Katharina", answer: "ja" },
    { name: "Chris", answer: "ja" },
    { name: "Micha", answer: "nein" },
    { name: "Jan", answer: "ja" },
    { name: "Iris", answer: "nein" },
    { name: "Sofia", answer: "ja" },
  ],
};
