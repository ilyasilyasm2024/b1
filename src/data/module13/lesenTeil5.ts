export interface LesenTeil5Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil5Data {
  module: number;
  part: string;
  title: string;
  time: string;
  instruction: string;
  text: string;
  questions: LesenTeil5Question[];
}

export const module13LesenTeil5: LesenTeil5Data = {
  module: 13,
  part: "Lesen Teil 5",
  title: "Packungsbeilage: Fenchelhonig gegen Husten und Heiserkeit",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie informieren sich mithilfe der Packungsbeilage \u00fcber den Fenchelhonig, weil Ihr kleiner Cousin krank ist.",
  text: "Gebrauchsinformation: Information f\u00fcr den Anwender\nFenchelhonig gegen Husten und Heiserkeit \u2013 F\u00fcr Kinder ab 1 Jahr\nWirkstoff: 100 g Sirup enthalten 50 mg bitteres Fenchel\u00f6l.\n\nWas ist Fenchelhonig gegen Husten und Heiserkeit?\nFenchelhonig gegen Husten und Heiserkeit ist ein pflanzlicher und dickfl\u00fcssiger Sirup mit angenehmem Geschmack gegen Erk\u00e4ltungskrankheiten der oberen Atemwege bei Kindern.\n\nWie ist Fenchelhonig einzunehmen?\nSoweit nicht anders verordnet, ist die \u00fcbliche Dosis: Kinder ab 1 Jahr bis 5 Jahre: 3-mal t\u00e4glich einen halben Messl\u00f6ffel (3 ml / 6,3 g) Fenchelhonig. F\u00fcr gr\u00f6\u00dfere und \u00e4ltere Kinder kann die Dosis auf einen ganzen Messl\u00f6ffel erh\u00f6ht werden. Der Sirup kann mit jedem Getr\u00e4nk eingenommen werden.\n\nHinweise zur Aufbewahrung:\nBei h\u00f6heren Temperaturen im Kunststoffbeh\u00e4lter kann sich die Farbe des Sirups ver\u00e4ndern; die Wirkung wird dadurch nicht beeintr\u00e4chtigt. Verwenden Sie das Medikament nicht mehr nach dem auf dem Etikett angegebenen Verfallsdatum. Nach dem ersten \u00d6ffnen der Flasche ist das Medikament bei geschlossenen Aufbewahrungsbedingungen 6 Monate haltbar. Bewahren Sie Fenchelhonig gegen Husten und Heiserkeit kindersicher auf.\n\nWelche Nebenwirkungen sind m\u00f6glich?\nWie alle Arzneimittel kann Fenchelhonig gegen Husten und Heiserkeit Nebenwirkungen haben, die aber nicht bei jedem auftreten m\u00fcssen. In sehr seltenen F\u00e4llen k\u00f6nnen allergische Reaktionen der Haut und der Atemwege auftreten.",
  questions: [
    {
      id: 27,
      statement: "M\u00f6gliche Nebenwirkungen:",
      options: {
        a: "Fenchelhonig zeigt keine Nebenwirkungen.",
        b: "Bei Allergikern kommt es in sehr seltenen F\u00e4llen zu Hautreaktionen.",
        c: "Es kann zu Zahnsch\u00e4den kommen.",
      },
      correct: "b",
    },
    {
      id: 28,
      statement: "Kinder k\u00f6nnen Fenchelhonig nehmen, ...",
      options: {
        a: "obwohl er sehr bitter schmeckt.",
        b: "obwohl das Medikament nur k\u00fcnstliche Wirkstoffe enth\u00e4lt.",
        c: "wenn sie mindestens zw\u00f6lf Monate alt sind.",
      },
      correct: "c",
    },
    {
      id: 29,
      statement: "Man muss wissen, dass ...",
      options: {
        a: "der Sirup nach dem \u00d6ffnen noch ein halbes Jahr verwendet werden kann.",
        b: "der Sirup vor der Verwendung warm gemacht werden muss.",
        c: "der Sirup immer im K\u00fchlschrank stehen muss.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "Die \u00fcbliche Dosis ...",
      options: {
        a: "bestimmt der Arzt.",
        b: "kann man mit jedem Getr\u00e4nk einnehmen.",
        c: "ist f\u00fcr j\u00fcngere und \u00e4ltere Kinder unterschiedlich.",
      },
      correct: "c",
    },
  ],
};
