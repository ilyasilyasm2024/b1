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

export const module7LesenTeil2A: LesenTeil2Data = {
  module: 7,
  part: "Lesen Teil 2A",
  title: "Schule f\u00fcr Slumkinder in Indien",
  text: "Obwohl es eine Schulpflicht gibt, gehen Millionen Kinder in Indien nicht zur Schule. Besonders die Bewohner der Slums k\u00f6nnen das Geld f\u00fcr Schuluniform, Hefte und B\u00fccher nicht aufbringen. Die Hilfsorganisation Bosceene m\u00f6chte die Bildung zu den Kindern bringen und hat daher vor einigen Jahren begonnen, in ganz einfachen H\u00fctten Schulen mit jeweils zwei Lehrern einzurichten. Die Kinder lernen Lesen, Schreiben und Rechnen und haben auch in den Bastelstunden Gelegenheit, mal wirklich Kinder zu sein.\n\nObwohl die Schulen nichts kosten, kommen l\u00e4ngst nicht alle zum Unterricht. Viele Eltern sch\u00e4men sich, dass sie so arm sind. Die Organisation versucht deshalb, den Schulbesuch m\u00f6glichst attraktiv zu machen. Der Unterricht dauert nur bis 11 Uhr, damit die Kinder den Eltern danach bei der Arbeit helfen k\u00f6nnen. Au\u00dferdem bekommen die Kinder in den Slums nach dem Unterricht noch eine warme Mahlzeit \u2013 eine zus\u00e4tzliche Motivation, die Kinder in die Schule zu schicken. Bosceene m\u00f6chte die Kinder fit f\u00fcr eine staatliche Schule machen. Und der Erfolg zeigt sich: Viele Kinder besuchen inzwischen eine h\u00f6here Schule, w\u00e4hrend andere nach Ende der Schulpflicht mit 14 Jahren eine praktische Berufsausbildung beginnen.",
  example: {
    id: 0,
    statement: "In diesem Text geht es um ...",
    options: {
      a: "Unterricht f\u00fcr Kinder in Slums.",
      b: "das staatliche Schulsystem in Indien.",
      c: "die Ern\u00e4hrung von Kindern im Slum.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "Die Hilfsorganisation ...",
      options: {
        a: "k\u00fcmmert sich auch um ein Mittagessen f\u00fcr die Kinder.",
        b: "gibt den Kindern Geld f\u00fcr Schulb\u00fccher.",
        c: "setzt sich f\u00fcr eine Verl\u00e4ngerung der Schulpflicht in Indien ein.",
      },
      correct: "a",
    },
    {
      id: 8,
      statement: "Im Unterricht ...",
      options: {
        a: "lernen die Kinder das Alphabet.",
        b: "essen die Kinder.",
        c: "basteln die Kinder auch.",
      },
      correct: "c",
    },
    {
      id: 9,
      statement: "Die Hilfsorganisation ...",
      options: {
        a: "besteht aus zwei Lehrern.",
        b: "hat zum Ziel, Slumkinder f\u00fcr die staatliche Schule vorzubereiten.",
        c: "wurde von Slum-Bewohnern gegr\u00fcndet.",
      },
      correct: "b",
    },
  ],
};

export const module7LesenTeil2B: LesenTeil2Data = {
  module: 7,
  part: "Lesen Teil 2B",
  title: "Solarium-Verbot f\u00fcr Jugendliche",
  text: "Jugendliche unter 18 Jahren d\u00fcrfen nicht mehr ins Solarium. Das verlangt nun ein Gesetz in \u00d6sterreich. Die \u00c4rzte freuen sich, die Solarienbesitzer \u00e4rgern sich. Jugendliche d\u00fcrfen ab 16 Jahren Alkohol trinken und rauchen, aber nicht ins Solarium? Dar\u00fcber wundern sich auch die Betroffenen selbst.\n\n\u00c4u\u00dferst positiv sehen nur Dermatologen dieses Gesetz. Sie wissen, dass sich Hautsch\u00e4den, die durch ultraviolette Strahlen verursacht werden, umso st\u00e4rker bemerkbar machen, je fr\u00fcher sie im Leben stattfinden. Dabei spielt es keine Rolle, ob die Strahlen von der Sonne oder vom Solarium gekommen sind. Wenn die Sonne in Kindheit und Jugend die Haut verbrannt hat, sei das der wichtigste Risikofaktor f\u00fcr die Entwicklung des Melanoms, sagen die Fachleute. Sie finden es gut, dass man die Jugendlichen vor dieser Gefahr sch\u00fctzt. Denn Jugendliche denken selten an die Folgen ihres Verhaltens und rechnen nicht damit, dass sie sp\u00e4ter krank werden und Hautkrebs bekommen k\u00f6nnten.\n\nTeenager m\u00fcssen jetzt aber nicht g\u00e4nzlich auf einen braunen Teint verzichten. Immerhin gibt es die M\u00f6glichkeit, Selbstbr\u00e4uner zu benutzen. Das ist eine Creme, die auf der Haut verteilt wird und dann br\u00e4unt, ohne Sonne oder Solarium. Der einzige Nachteil: Die Br\u00e4une aus der Tube h\u00e4lt nur einige Tage.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "was \u00f6sterreichische Jugendliche d\u00fcrfen.",
      b: "warum das Solarium f\u00fcr Jugendliche sch\u00e4dlich ist.",
      c: "wie man sich vor der Sonne sch\u00fctzen kann.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "Die \u00c4rzte ...",
      options: {
        a: "raten den Jugendlichen eine Creme, die selbst br\u00e4unt.",
        b: "meinen, dass Jugendliche nicht daran denken, was sp\u00e4ter passieren kann.",
        c: "wollen, dass alle Solarien schlie\u00dfen.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Die Sonne ...",
      options: {
        a: "tut der Haut gut.",
        b: "schadet Jugendlichen weniger als Erwachsenen.",
        c: "kann der Haut genauso schaden wie das Solarium.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Der Selbstbr\u00e4uner ...",
      options: {
        a: "wirkt nur einige Tage.",
        b: "ist genauso sch\u00e4dlich wie das Solarium.",
        c: "sch\u00fctzt vor der Sonne.",
      },
      correct: "a",
    },
  ],
};
