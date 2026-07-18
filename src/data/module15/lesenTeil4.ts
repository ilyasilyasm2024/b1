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

export const module15LesenTeil4: LesenTeil4Data = {
  module: 15,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person daf\u00fcr, dass Gehsteige grunds\u00e4tzlich nur noch f\u00fcr Fu\u00dfg\u00e4nger sind?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber eine neue Verkehrsordnung, die nur noch Fu\u00dfg\u00e4nger auf den Gehsteigen erlaubt.",
  example: {
    name: "Olaf",
    answer: "ja",
  },
  persons: [
    {
      name: "Anke",
      age: 38,
      city: "Bern",
      comment:
        "Ich fahre h\u00e4ufig mit meinen Kindern Rad. Das ist kompliziert! Denn Kinder bis 8 Jahre m\u00fcssen auf den Gehsteigen und Kinder bis 10 Jahre d\u00fcrfen dort fahren. Ich als Erwachsene muss den Radweg oder die Stra\u00dfe benutzen. Allerdings bin ich froh, dass die Kinder auf dem Gehsteig vor Autos sicher sind, deshalb finde ich die vorgeschlagene Regelung gef\u00e4hrlich.",
    },
    {
      name: "Sven",
      age: 23,
      city: "Wittenberg",
      comment:
        "Mit 20 Jahren bin ich begeisterter Skater. Das ist nicht immer einfach, denn man kann nicht \u00fcberall gut fahren. Wenn man uns jetzt noch verbietet, auf extra Skaterbahnen zu fahren oder auf Skater-Events, wo jemand vorbeirast, auf Skatern, auf Rollern, auf Fahrr\u00e4dern gesperrt werden. Das w\u00e4re schlimm! Wenn Sie mich fragen, stimme ich der Regelung nicht zu.",
    },
    {
      name: "Paul",
      age: 26,
      city: "Ilmenau",
      comment:
        "Ich fahre gern Skateboard und Longboard. Um dahin zu kommen, muss ich auch auf dem Gehsteig fahren, denn die Fahrradfahrer lassen mich nicht auf den Radweg. Ich bin aber immer sehr vorsichtig und weiche Fu\u00dfg\u00e4ngern aus, deshalb gibt es keinen Grund, uns Skatern diese Fahrm\u00f6glichkeit wegzunehmen.",
    },
    {
      name: "Alina",
      age: 45,
      city: "Schwerin",
      comment:
        "Stellen Sie sich mal vor, ich habe zwei kleine Kinder, mit denen ich gern mal auf dem Gehsteig spaziere. Und dann kommt jemand vorbei, auf Skatern, auf Rollern, auf Fahrr\u00e4dern. Wenn Sie mich fragen, stimme ich der Regelung zu, weil sie meine Kinder sch\u00fctzt.",
    },
    {
      name: "Karen",
      age: 41,
      city: "Freiburg",
      comment:
        "Vor ein paar Tagen hat mich ein Inline-Skater angefahren. Ich humpele immer noch, dabei m\u00f6chte ich mir nicht vorstellen, wie es mir gehen w\u00fcrde, wenn ich ein alter Mann w\u00e4re. Eigentlich waren mir solche Regeln und Gesetze immer egal, aber hier habe ich nun eine Meinung. Die habe ich mir gebildet, weil ich betroffen bin. Auf die B\u00fcrgersteige sollen nur B\u00fcrger, also Fu\u00dfg\u00e4nger.",
    },
    {
      name: "Jonas",
      age: 17,
      city: "Helmstedt",
      comment:
        "Wenn ich das schon sage, dann geht es mir vor allem gegen das Verschwinden von Personen, die zu Fu\u00df gehen. Ich bewege mich ganz auf die altmodische Art, gehe zu Fu\u00df. Warum sonst gibt es h\u00e4ufig keine, und wenn, dann zu schmale Gehsteige? Warum sonst machen zunehmend mehr Radfahrer auf den Gehsteigen den Fu\u00dfg\u00e4ngern den Platz streitig? So eine Regelung w\u00fcrde uns Fu\u00dfg\u00e4ngern helfen.",
    },
    {
      name: "Ken",
      age: 30,
      city: "L\u00fcbeck",
      comment:
        "Ich meine, die vorgeschlagene Regelung ist zu streng. Velos, Skater und andere sollten nicht einfach vom Trottoir verdr\u00e4ngt werden. Wenn aber alle Passanten \u2013 egal ob mit R\u00e4dern oder nur zu Fu\u00df \u2013 aufpassen und h\u00f6flich sind, brauchen wir keine neuen Regeln. Die w\u00fcnsche ich mir nicht.",
    },
  ],
  answers: [
    { name: "Anke", answer: "nein" },
    { name: "Sven", answer: "nein" },
    { name: "Paul", answer: "ja" },
    { name: "Alina", answer: "nein" },
    { name: "Karen", answer: "ja" },
    { name: "Jonas", answer: "ja" },
    { name: "Ken", answer: "nein" },
  ],
};
