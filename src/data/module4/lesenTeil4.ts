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

export const module4LesenTeil4: LesenTeil4Data = {
  module: 4,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Findet die Person, dass es Einzelkindern besser geht?",
  topic:
    "In einer Zeitung lesen Sie Kommentare \u00fcber Geschwister und moderne Familien.",
  example: {
    name: "Tim",
    answer: "nein",
  },
  persons: [
    {
      name: "Angela",
      age: 34,
      city: "Hamburg",
      comment:
        "Ich bin selbst Einzelkind und hatte eine wunderbare Kindheit. Meine Eltern hatten immer Zeit f\u00fcr mich und konnten mir viel bieten. Ich glaube, dass Einzelkinder mehr Aufmerksamkeit bekommen und sich deshalb besser entwickeln k\u00f6nnen.",
    },
    {
      name: "Frank",
      age: 42,
      city: "M\u00fcnchen",
      comment:
        "Ich habe drei Geschwister und ehrlich gesagt war es oft anstrengend. St\u00e4ndig musste man alles teilen und um die Aufmerksamkeit der Eltern k\u00e4mpfen. Einzelkinder haben es da wirklich besser \u2013 sie bekommen mehr F\u00f6rderung und m\u00fcssen sich nicht dauernd durchsetzen.",
    },
    {
      name: "Zoe",
      age: 19,
      city: "Berlin",
      comment:
        "Als Einzelkind war mir oft langweilig. Ich h\u00e4tte gern Geschwister gehabt, mit denen ich spielen konnte. Freunde sind nicht dasselbe wie Br\u00fcder oder Schwestern.",
    },
    {
      name: "Nikolaus",
      age: 55,
      city: "Wien",
      comment:
        "Viele glauben, Einzelkinder h\u00e4tten es besser, weil sie alles allein bekommen. Ich sehe das anders. Ohne Geschwister fehlt einem etwas Wichtiges: Man lernt sp\u00e4ter zu teilen, ist oft einsamer und im Alter allein mit der Sorge um die Eltern. Nein, Einzelkindern geht es nicht besser.",
    },
    {
      name: "Andi",
      age: 28,
      city: "Graz",
      comment:
        "Ich bin Einzelkind und m\u00f6chte es nicht anders haben. Meine Eltern konnten mir viel bieten und ich hatte immer meine Ruhe zum Lernen und f\u00fcr meine Hobbys. Ich glaube wirklich, dass Einzelkinder sich freier entwickeln k\u00f6nnen. Uns geht es besser.",
    },
    {
      name: "Doris",
      age: 47,
      city: "K\u00f6ln",
      comment:
        "Ich glaube nicht, dass Einzelkinder gl\u00fccklicher sind. Geschwister geben einem Halt und Sicherheit. Wenn die Eltern alt werden, ist man nicht allein mit der Verantwortung.",
    },
    {
      name: "Lukas",
      age: 31,
      city: "Z\u00fcrich",
      comment:
        "Studien zeigen, dass Einzelkinder oft kreativer und selbstst\u00e4ndiger sind. Sie lernen fr\u00fch, sich allein zu besch\u00e4ftigen, und entwickeln eine starke Pers\u00f6nlichkeit. Das ist doch ein Vorteil!",
    },
  ],
  answers: [
    { name: "Angela", answer: "ja" },
    { name: "Frank", answer: "ja" },
    { name: "Zoe", answer: "nein" },
    { name: "Nikolaus", answer: "nein" },
    { name: "Andi", answer: "ja" },
    { name: "Doris", answer: "nein" },
    { name: "Lukas", answer: "ja" },
  ],
};
