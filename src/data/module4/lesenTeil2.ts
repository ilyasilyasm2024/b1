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

export const module4LesenTeil2A: LesenTeil2Data = {
  module: 4,
  part: "Lesen Teil 2A",
  title: "K\u00f6nnen Tiere tr\u00e4umen?",
  text: "Wissenschaftler besch\u00e4ftigen sich schon lange mit der Frage, ob Tiere \u00e4hnlich wie Menschen tr\u00e4umen k\u00f6nnen. Bekannt ist, dass viele Tiere eine sogenannte REM-Phase im Schlaf haben. REM steht f\u00fcr \u201eRapid Eye Movement\u201c \u2013 in dieser Phase bewegen sich die Augen schnell hin und her, obwohl die Augen geschlossen sind. Beim Menschen ist diese Phase mit Tr\u00e4umen verbunden.\n\nBei Katzen hat man beobachtet, dass sie im Schlaf ihre Augen bewegen und manchmal auch ihre Pfoten zucken, als w\u00fcrden sie jagen. Forscher haben sogar Gorillas untersucht und festgestellt, dass deren REM-Phase prozentual genauso lang ist wie beim Menschen. Eine Gorilla-Dame namens Koko, die Zeichensprache gelernt hatte, beschrieb einmal Bilder, die sie im Schlaf gesehen hatte.\n\nAll das deutet darauf hin, dass Tiere tats\u00e4chlich tr\u00e4umen k\u00f6nnen \u2013 auch wenn wir nie genau wissen werden, was sie in ihren Tr\u00e4umen erleben.",
  example: {
    id: 0,
    statement: "Katzen ...",
    options: {
      a: "schlafen nie tief.",
      b: "jagen im Schlaf andere Tiere.",
      c: "bewegen im Schlaf ihre Augen.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es um die Frage ...",
      options: {
        a: "ob Tiere wie Menschen tr\u00e4umen.",
        b: "ob Tiere besser schlafen als Menschen.",
        c: "warum Tiere auch eine REM-Phase im Schlaf haben.",
      },
      correct: "a",
    },
    {
      id: 8,
      statement: "In der REM-Phase ...",
      options: {
        a: "bewegen sich immer alle K\u00f6rperteile.",
        b: "bewegen sich die Augen.",
        c: "schl\u00e4ft man nicht so gut.",
      },
      correct: "b",
    },
    {
      id: 9,
      statement: "Gorillas ...",
      options: {
        a: "schlafen unruhiger als die Menschen.",
        b: "haben prozentual eine genauso lange REM-Phase wie die Menschen.",
        c: "lassen sich nicht untersuchen.",
      },
      correct: "b",
    },
  ],
};

export const module4LesenTeil2B: LesenTeil2Data = {
  module: 4,
  part: "Lesen Teil 2B",
  title: "In der Schule schwitzen!",
  text: "Eine finnische Schule in der Stadt Oulu hat einen ungew\u00f6hnlichen Versuch gemacht: Die Sch\u00fcler durften in der Pause in die Sauna gehen. Das Experiment dauerte ein halbes Jahr und die Ergebnisse waren erstaunlich.\n\nDie Sch\u00fcler, die regelm\u00e4\u00dfig in der Pause die Sauna benutzten, konnten sich danach viel besser konzentrieren. Ihre Noten verbesserten sich deutlich. Die Lehrer berichteten, dass die Sch\u00fcler nach dem Saunabesuch ruhiger und aufmerksamer waren.\n\nDer Versuch best\u00e4tigte eine Theorie, die Wissenschaftler schon l\u00e4nger hatten: W\u00e4rme und Entspannung f\u00f6rdern die Konzentration. In Finnland ist die Sauna ein fester Bestandteil der Kultur \u2013 fast jede Familie hat eine eigene. Jetzt \u00fcberlegen andere Schulen in Finnland, ob sie das Modell \u00fcbernehmen sollen.",
  example: {
    id: 0,
    statement: "Der Text handelt von ...",
    options: {
      a: "finnischen Schulen im Allgemeinen.",
      b: "einem Schulexperiment mit Sauna.",
      c: "der Geschichte der Sauna.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "warum finnische Sch\u00fcler so gute Noten haben.",
        b: "wie die Wirkung der Sauna auf Sch\u00fcler ist.",
        c: "warum Sch\u00fcler gern in die Sauna gehen.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Die Sch\u00fcler in Oulu ...",
      options: {
        a: "konnten sich nach der Sauna besser konzentrieren.",
        b: "hatten wegen der Sauna weniger Probleme.",
        c: "mussten mindestens 15 Minuten in der Sauna bleiben.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Der Versuch ...",
      options: {
        a: "hat eine Theorie bewiesen.",
        b: "beeinflusste die Noten der Sch\u00fcler nur wenig.",
        c: "dauerte ein halbes Jahr lang.",
      },
      correct: "c",
    },
  ],
};
