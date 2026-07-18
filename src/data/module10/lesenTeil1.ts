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

export const module10LesenTeil1: LesenTeil1Data = {
  module: 10,
  part: "Lesen Teil 1",
  title: "Gru\u00df aus Frankfurt",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Wie geht es euch allen daheim? Tut mir leid, dass ich mich jetzt erst melde, aber ich hatte letztens richtig viel um die Ohren. Mit der Einschreibung an der Uni hat alles geklappt, mein erstes Wintersemester hat vor drei Wochen begonnen und ich bin nun t\u00e4glich ca. 5 Stunden an der Uni.\n\nDer eigentliche Grund aber, weswegen ich eine Weile nichts von mir habe h\u00f6ren lassen, war die Wohnungssuche. In ein Studentenheim wollte ich von vornherein nicht. Mein Fehler?! Auf jeden Fall hab ich mich erst mal nach einer m\u00f6blierten 1-Zimmer-Wohnung umgeschaut. Aber die Mietpreise sind horrend! Wie ich festgestellt habe, suchen n\u00e4mlich nicht nur Studenten nach solchen Wohnungen, sondern auch Bankkaufleute und so. Frankfurt ist ja die Bankmetropole von Europa \u2013 Mainhattan, wie es so sch\u00f6n hei\u00dft.\n\nNach langem Suchen bin ich schlie\u00dflich in einer Wohngemeinschaft gelandet. Ich habe mir die allernotwendigsten M\u00f6bel angeschafft, gebraucht, versteht sich, doch in gutem Zustand. Jetzt fehlt mir nur noch ein Schrank.\n\nAu\u00dfer mir wohnen noch drei Studenten in der WG. Jeder hat sein Zimmer und wir teilen uns K\u00fcche, Bad und einen kleinen Abstellraum. Ich wohne erst zehn Tage hier, aber wir verstehen uns schon sehr gut. Und mit K\u00fcchen- und Putzdienst scheint es auch zu klappen, obwohl ich anfangs ein wenig skeptisch war.\n\nDie Wohnung liegt in einem Altbau: hohe W\u00e4nde, gro\u00dfe Fenster, Holzfu\u00dfboden \u2013 echt super. Mein Zimmer blickt auf den Hinterhof, ist also ruhig und hell. Ich f\u00fchle mich f\u00fcrs Erste sehr wohl. Ihr k\u00f6nnt mich gern besuchen und bei mir in der WG \u00fcbernachten, wann immer ihr wollt.\n\nLiebe Gr\u00fc\u00dfe, Lutz",
  example: {
    id: 0,
    statement: "Lutz hatte in letzter Zeit viel zu tun.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement: "Lutz ist Studienanf\u00e4nger.",
      correct: "richtig",
    },
    {
      id: 2,
      statement:
        "In Frankfurt ist die Wohnungssuche in der Regel eine einfache Sache.",
      correct: "falsch",
    },
    {
      id: 3,
      statement: "Lutz' Zimmer ist noch nicht ganz eingerichtet.",
      correct: "richtig",
    },
    {
      id: 4,
      statement: "Bisher hatte Lutz keine Probleme mit seinen Mitbewohnern.",
      correct: "richtig",
    },
    {
      id: 5,
      statement: "Ein Nachteil der Wohnung ist, dass sie laut ist.",
      correct: "falsch",
    },
    {
      id: 6,
      statement:
        "Die Freunde k\u00f6nnen bei Lutz in der WG \u00fcbernachten, wann immer sie wollen.",
      correct: "richtig",
    },
  ],
};
