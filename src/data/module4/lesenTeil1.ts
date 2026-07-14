export interface LesenTeil1Question {
  id: number;
  statement: string;
  correct: "richtig" | "falsch";
}

export interface LesenTeil1Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  example: LesenTeil1Question;
  questions: LesenTeil1Question[];
}

export const module4LesenTeil1: LesenTeil1Data = {
  module: 4,
  part: "Lesen Teil 1",
  title: "Tokio Hotel Konzert",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Hallo TH-Fans!\n\nvon Klara Wenzel\n\nIch muss euch unbedingt von dem Tokio-Hotel-Konzert in Erfurt erz\u00e4hlen! Meine Freundin Lisa und ich hatten schon Wochen vorher Karten gekauft. Am Tag des Konzerts sind wir um 6 Uhr morgens aus dem Th\u00fcringer Wald losgefahren. Um 8 Uhr waren wir schon da und haben Pl\u00e4tze im vorderen Block bekommen.\n\nWir mussten viele Stunden warten, aber es war nicht langweilig. Ein Fernsehteam kam und hat Fans interviewt \u2013 aber nicht die Band! Um 16:45 Uhr \u00f6ffneten sich die T\u00fcren und alle rannten rein. Lisa und ich haben es geschafft, ganz vorn an der B\u00fchne zu stehen.\n\nDann wurde es dunkel in der Halle und alle haben geschrien \u2013 vor Begeisterung nat\u00fcrlich! Dann kam Bill auf die B\u00fchne und hat fantastisch gesungen. Georg und Tom kamen ganz nah an den Rand der B\u00fchne. Am Ende des Konzerts haben wir allen vier Bandmitgliedern die Hand gegeben. Das war das beste Konzert meines Lebens!",
  example: {
    id: 0,
    statement: "Klara ist nicht allein ins Konzert gegangen.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement: "Klara musste lange vor der Konzerthalle warten.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "Die Band wurde von Fernsehreportern interviewt.",
      correct: "falsch",
    },
    {
      id: 3,
      statement: "Klara schaffte es schliesslich, ganz vorn zu stehen.",
      correct: "richtig",
    },
    {
      id: 4,
      statement: "Als es in der Halle dunkel wurde, schrien alle vor Angst.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "Bill kam und schrie am lautesten.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Die Bandmitglieder haben Klara die Hand gegeben.",
      correct: "richtig",
    },
  ],
};
