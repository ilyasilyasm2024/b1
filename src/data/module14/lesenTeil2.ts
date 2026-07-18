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

export const module14LesenTeil2A: LesenTeil2Data = {
  module: 14,
  part: "Lesen Teil 2A",
  title: "Die Alten wollen kein Internet",
  text: "\u00c4ltere B\u00fcrger der Schweiz verzichten gern und h\u00e4ufig auf das Internet. Laut Bundesamt f\u00fcr Statistik geh\u00f6rt die Schweiz \u2013 hinter den skandinavischen L\u00e4ndern und den Niederlanden, wo insgesamt mehr Nutzer online sind \u2013 zu den europ\u00e4ischen Spitzenreitern. Private Haushalte mit Internet gibt es viele. Und dennoch: Rund 30 Prozent der \u00e4lteren B\u00fcrger, die zu einer gewissen Statistik der Online-Muffel geh\u00f6ren, wollen partout nicht online gehen.\n\nWie l\u00e4sst sich das erkl\u00e4ren? Viele \u00e4ltere Menschen haben Angst, dass etwas schiefgeht, oder die Furcht, in die Fallen von Kriminellen zu tappen, die pers\u00f6nliche Informationen missbrauchen. Andere haben schlicht kein Interesse. Von denen, die das Internet nutzen, haben allerdings viele ein Sicherheitsprogramm auf ihrem Computer installiert. Nur etwa 30 Prozent der Haushalte haben kein Schutzprogramm gegen Viren.\n\nDie Statistik zeigt jedoch auch: Die Zahl der Online-Haushalte in der Schweiz steigt weiter. Immer mehr Senioren entdecken die Vorteile des Internets f\u00fcr sich, auch wenn sie noch etwas vorsichtiger sind als j\u00fcngere Nutzer.",
  example: {
    id: 0,
    statement: "In der Schweiz ...",
    options: {
      a: "haben 80 Prozent der Haushalte Internet.",
      b: "haben nur wenige Internetnutzer Schutzprogramme.",
      c: "surfen \u00e4ltere Menschen gern im Internet.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "wie sich die Schweizer im Internet vor allem sch\u00fctzen.",
        b: "wie sich die Zahl der Online-Haushalte in der Schweiz \u00e4ndert.",
        c: "warum Kinder vor dem Internet gesch\u00fctzt werden m\u00fcssen.",
      },
      correct: "b",
    },
    {
      id: 8,
      statement: "Senioren ...",
      options: {
        a: "haben oft Angst vor Computerviren.",
        b: "haben selten Computerkenntnisse.",
        c: "benutzen Schutzprogramme f\u00fcr ihren Computer.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "In den Niederlanden ...",
      options: {
        a: "gibt es die gleichen Probleme mit dem Internet wie in der Schweiz.",
        b: "sind mehr Nutzer online als in der Schweiz.",
        c: "spielen \u00e4ltere Leute viel im Internet.",
      },
      correct: "b",
    },
  ],
};

export const module14LesenTeil2B: LesenTeil2Data = {
  module: 14,
  part: "Lesen Teil 2B",
  title: "Essen als Medizin",
  text: "Stark im Trend liegt zurzeit Functional Food. Das ist Essen, das nicht nur satt macht, sondern auch f\u00fcr die Gesundheit sorgt. Dazu geh\u00f6ren beispielsweise cholesterinsenkende Drinks, mit Omega-3-Fetts\u00e4uren versetzte Margarine oder Fertiggerichte mit Vitaminzus\u00e4tzen. Der Weltmarkt f\u00fcr Functional-Food-Produkte wird derzeit auf \u00fcber 80 Milliarden Euro gesch\u00e4tzt. In Deutschland und in \u00d6sterreich d\u00fcrfte der Anteil funktioneller Lebensmittel rund drei Prozent des Gesamtabsatzes beitragen, und das ist nicht wenig.\n\nWie l\u00e4sst sich der zunehmende Konsum von Functional Food begr\u00fcnden? Immer mehr Menschen erkl\u00e4ren die Gesundheit zu ihrem h\u00f6chsten Gut: Sie wollen vorbeugen oder reparieren, ohne auf Genuss zu verzichten. Auf diesen Wunsch setzt die Werbung, um den Verkauf solcher Produkte zu erh\u00f6hen. Sie betont in ihren Anzeigen und Werbespots, dass Functional Food der Gesundheit n\u00fctzt. Die K\u00e4ufer bekommen das Gef\u00fchl, durch Essen ges\u00fcnder zu leben.\n\nAllerdings zwingen die Gesetze der Europ\u00e4ischen Union die Firmen, die in der Werbung genannte gesundheitsf\u00f6rdernde Wirkung auch wissenschaftlich zu beweisen. Und sollte sich bei Tests herausstellen, dass zum Beispiel versprochene zus\u00e4tzliche Vitamine nicht in den Lebensmitteln zu finden sind, wird dieser Firma verboten, weiterhin damit zu werben.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "dass man sich gesund ern\u00e4hren sollte.",
      b: "dass die Menschen immer viel essen als Medikamente.",
      c: "warum Functional Food beliebt ist.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "dass man sich gesund ern\u00e4hren sollte.",
        b: "dass die Menschen Medikamente durch Essen ersetzen.",
        c: "warum Functional Food beliebt ist.",
      },
      correct: "c",
    },
    {
      id: 11,
      statement: "Functional Food ...",
      options: {
        a: "interessiert nur sehr wenige Menschen.",
        b: "macht satt und soll der Gesundheit n\u00fctzen.",
        c: "zwingt manche Personen, es zu essen.",
      },
      correct: "b",
    },
    {
      id: 12,
      statement: "Die Werbung f\u00fcr Functional Food ...",
      options: {
        a: "muss die versprochene Wirkung wissenschaftlich beweisen.",
        b: "ist in Deutschland ohne jede Werbung.",
        c: "ist nicht wirklich gesund.",
      },
      correct: "a",
    },
  ],
};
