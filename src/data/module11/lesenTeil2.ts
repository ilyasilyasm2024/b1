export interface LesenTeil2Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil2Data {
  module: number;
  part: string;
  title: string;
  text: string;
  example: LesenTeil2Question;
  questions: LesenTeil2Question[];
}

export const module11LesenTeil2A: LesenTeil2Data = {
  module: 11,
  part: "Lesen Teil 2A",
  title: "Deutsche m\u00f6gen gedruckte B\u00fccher lieber",
  text: "Mit dem E-Book ist es ein bisschen wie mit dem Bezahlfernsehen in Deutschland, das schon Mitte der Neunzigerjahre angeblich gro\u00dfen Erfolg haben sollte \u2013 aber auf den man bis heute vergeblich wartet. Dennoch hat sich auf dem noch recht \u00fcberschaubaren deutschen Markt der elektronischen B\u00fccher einiges getan. Erw\u00e4hnenswert ist der im Interneth\u00e4ndler Amazon.de er\u00f6ffnete deutsche \u201eKindle\u201c-Laden. Die Bezeichnung steht bei diesem Unternehmen f\u00fcr die Zukunft des Buches. Der Name \u201eKindle\u201c steht f\u00fcr die E-Book-Reader von Amazon, also die Leseger\u00e4te f\u00fcr elektronische B\u00fccher, ebenso wie das sogenannte \u201eKindle-Edition\u201c.\n\nAllerdings sind die E-Book-Verkaufszahlen hierzulande noch nicht besonders hoch. Ob es daran liegt, dass die meisten digitalen B\u00fccher in Deutschland in vielen F\u00e4llen fast genauso teuer sind wie das gedruckte Buch? Immer mehr deutsche Buchtitel erscheinen mittlerweile auch gleich als E-Book. Doch viele Leser str\u00e4uben sich noch gegen die Innovation.\n\nDas Thema E-Books ist auch f\u00fcr die Autoren nicht unwichtig, denn sie m\u00fcssen sich \u00fcberlegen, wie sie auch bei diesem elektronischen Medium ihren Anteil verdienen k\u00f6nnen. Es ist n\u00e4mlich l\u00e4ngst nicht immer garantiert, dass sie an E-Books auch verdienen. Bei einigen Verlagen ist es \u00fcblich, dass die E-Book-Rechte zus\u00e4tzlich bezahlt werden, aber andere Verlage haben dagegen noch keine einheitliche Regelung mit ihren Autoren gefunden.",
  example: {
    id: 0,
    statement: "Die Autoren ...",
    options: {
      a: "verdienen nicht automatisch am Verkauf von E-Books.",
      b: "m\u00fcssen neue Preise f\u00fcr E-Books festlegen.",
      c: "sind nicht mit der Politik der Verlage einverstanden.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "wie sich E-Books in Deutschland entwickeln.",
        b: "welche B\u00fccher auch als E-Books erscheinen.",
        c: "welche Verlage E-Books anbieten.",
      },
      correct: "a",
    },
    {
      id: 8,
      statement: "E-Books ...",
      options: {
        a: "sind in Deutschland nicht sehr beliebt.",
        b: "entwickeln sich wie das Fernsehen.",
        c: "sind teurer als gedruckte B\u00fccher.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "\u201eKindle-Edition\u201c hei\u00dft ...",
      options: {
        a: "ein g\u00fcnstiges Angebot des Internetbuchh\u00e4ndlers Amazon.",
        b: "das Leseger\u00e4t im Internet.",
        c: "das Angebot an E-Books von Amazon.",
      },
      correct: "c",
    },
  ],
};

export const module11LesenTeil2B: LesenTeil2Data = {
  module: 11,
  part: "Lesen Teil 2B",
  title: "M\u00fcde Jugendliche",
  text: "Jugendliche essen nach Erkenntnis von US-Forschern ungesünder, wenn sie nicht genug schlafen. Eine fortlaufende Studie an amerikanischen Teenagern im Alter von 16 bis 19 Jahren verr\u00e4t, dass die Knabberei und der Griff zu Fettigem bei Schlafmangel zunimmt. Ein derartiges Verhalten hat nat\u00fcrlich Auswirkungen auf die Gesundheit der Jugendlichen. Damit steigt ihr Risiko zu Fettleibigkeit und langfristig zu Herz- und Kreislaufst\u00f6rungen, warnen die Experten.\n\nBetroffen von dem Effekt sind junge Leute, die unter der Woche weniger als acht Stunden pro Nacht schlafen, denn das gilt allgemein als Schlafmangel. Wer jedoch acht Stunden oder mehr schl\u00e4ft, gilt statistisch gesehen als ausgeruht und ern\u00e4hrt sich auch besser.\n\n\u00dcberrascht stellten die Forscher auch fest, vor allem M\u00e4dchen ihre Ern\u00e4hrung \u00e4ndern, wenn sie wegen Schularbeiten oder einer Fernsehsendung nicht so fr\u00fch ins Bett gehen. Der Grund liege wohl darin, dass heranwachsende Frauen mehr zu \u201eemotionalem Essen\u201c neigen als junge M\u00e4nner. Statistisch wirkte sich der Effekt der k\u00fcrzeren N\u00e4chte an den 240 Studienteilnehmern mit einem Plus an Fett-Kalorien von 2,2 Prozent aus. Das klingt zwar nicht nach viel, k\u00f6nnte aber auf Dauer durchaus zu Fettpolstern f\u00fchren, hei\u00dft es in der Studie.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "was Jugendliche gern am Abend essen.",
      b: "wie sich die Essgewohnheiten von Jugendlichen bei zu wenig Schlaf \u00e4ndern.",
      c: "aus welchem Grund Jugendliche sich gern schlecht ern\u00e4hren.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "was Jugendliche gern am Abend essen.",
        b: "wie sich die Essgewohnheiten von Jugendlichen bei zu wenig Schlaf \u00e4ndern.",
        c: "aus welchem Grund Jugendliche sich gern schlecht ern\u00e4hren.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "M\u00e4dchen ...",
      options: {
        a: "ver\u00e4ndern ihre Essgewohnheiten h\u00e4ufiger als Jungen, wenn sie sp\u00e4t schlafen.",
        b: "werden schneller dick als Jungen.",
        c: "bleiben abends oft zu lange wach.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Fettige Nahrungsmittel ...",
      options: {
        a: "k\u00f6nnen dazu f\u00fchren, dass man zu wenig schl\u00e4ft.",
        b: "verhindern, dass man Herzprobleme bekommt.",
        c: "k\u00f6nnen langfristig zu Gesundheitsproblemen f\u00fchren.",
      },
      correct: "c",
    },
  ],
};
