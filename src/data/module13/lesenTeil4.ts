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

export const module13LesenTeil4: LesenTeil4Data = {
  module: 13,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr ein Verbot?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber Graffiti an den W\u00e4nden der Stadt und die M\u00f6glichkeit, dies zu verbieten.",
  example: {
    name: "Ernst",
    answer: "ja",
  },
  persons: [
    {
      name: "Anton",
      age: 14,
      city: "Nienhausen",
      comment:
        "Meine \u00e4ltere Schwester hat schon mal mit Freunden gespr\u00fcht. Die sind da am Sonntagmorgen zu einem Industriegel\u00e4nde gegangen. Ich war am n\u00e4chsten Tag auch da, aber mir hat ihr Kunstwerk nicht gefallen, weil es nicht so gut war. Als unsere Eltern das h\u00f6rten, sind sie ausgerastet. Sie waren richtig b\u00f6se und haben meine Schwester auch bestraft. Aber trotzdem, ich finde Graffiti gut, das geh\u00f6rt einfach dazu.",
    },
    {
      name: "Britta",
      age: 48,
      city: "Heidelberg",
      comment:
        "Ich mag es gern, wenn alles gepflegt und sch\u00f6n ist. Wenn \u00fcberall Graffiti sind, sieht es unordentlich und chaotisch aus \u2013 schrecklich! Mich st\u00f6rt das. Wie soll man diesen Anblick nur tagein, tagaus ertragen? Kommen Sie mal zu mir, in meine Stra\u00dfe, und sehen Sie sich das an, dann verstehen Sie sofort, was ich meine.",
    },
    {
      name: "Gabriele",
      age: 40,
      city: "M\u00fcnchen",
      comment:
        "Was ich zu Graffiti meine? Schwer zu sagen. Es gab fr\u00fcher schon Fassadenmalereien an gro\u00dfen Mietsh\u00e4usern in der Stadt, aber das war nicht ganz so unruhig, und nat\u00fcrlich hatte es jemand gegen Geld gemacht. Graffiti hat immer etwas Illegales und ich denke auch, es w\u00e4re besser, so etwas nicht zu dulden. Schlie\u00dflich, wenn jeder machen kann, was er will, dann h\u00e4tten wir hier ein Chaos.",
    },
    {
      name: "Torben",
      age: 22,
      city: "Bremen",
      comment:
        "Die Frage er\u00fcbrigt sich. Stellt euch doch mal vor, wie monoton unsere Stra\u00dfen w\u00e4ren. Mich nervt das Geordnete und \u00fcberm\u00e4\u00dfig Saubere. Man muss doch mal etwas anderes sehen k\u00f6nnen. Wenn ich mir Farbe an den W\u00e4nden anschaue, das gef\u00e4llt bestimmt jedem. Jedoch einfach graue Fassaden \u00fcberall \u2013 das finde ich unvorstellbar langweilig und nichtssagend.",
    },
    {
      name: "Inge",
      age: 55,
      city: "Kassel",
      comment:
        "Graffiti ist \u00fcberall. Wir \u00c4lteren wurden nie gefragt, ob wir das wollen oder nicht. So kann doch eine Demokratie nicht funktionieren. Da haben die Lehrer und Eltern versagt. Es ist geradezu so, dass die Erziehungsberechtigten einfach alles durchgehen lassen. Ihnen allen sollte ein Denkzettel verpasst werden. Die richtige Ma\u00dfnahme w\u00e4re, hart durchzugreifen.",
    },
    {
      name: "Mara",
      age: 19,
      city: "Wien",
      comment:
        "Kaum hat sich mal jemand etwas Aufregendes ausgedacht, schon m\u00fcssen alle dar\u00fcber schimpfen. Das ist immer so. Es war genauso mit Piercing, Tattoo und allen Dingen, die Jugendlichen gefallen. Haben junge Leute in unserer Gesellschaft nie etwas zu sagen, k\u00f6nnen sie sich nie ausdr\u00fccken? Ich lehne eine solche Bevormundung ab.",
    },
    {
      name: "Coni",
      age: 37,
      city: "Basel",
      comment:
        "Ich mag es gern, wenn alles ordentlich ist. Kaum hat jemand eine Wand besch\u00fctzt, kommt schon der N\u00e4chste. Ich finde, das muss aufh\u00f6ren. Ein Verbot w\u00e4re gut, denn dann k\u00f6nnte man endlich gegen diese Schmierereien vorgehen. So etwas geh\u00f6rt einfach nicht in eine saubere Stadt.",
    },
  ],
  answers: [
    { name: "Anton", answer: "nein" },
    { name: "Britta", answer: "ja" },
    { name: "Gabriele", answer: "ja" },
    { name: "Torben", answer: "nein" },
    { name: "Inge", answer: "ja" },
    { name: "Mara", answer: "nein" },
    { name: "Coni", answer: "ja" },
  ],
};
