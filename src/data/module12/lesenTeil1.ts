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

export const module12LesenTeil1: LesenTeil1Data = {
  module: 12,
  part: "Lesen Teil 1",
  title: "Nachbarschaftsstreit",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Guten Abend,\n\nNachbarschaftsstreit kannte ich bis vor wenigen Monaten nicht. In der Wohnung gegen\u00fcber wohnten nette, ruhige Mieter.\n\nDie neuen Mieter, ein Paar, haben mir direkt beim ersten Treffen im Flur vorschreiben wollen, wann ich meiner Pflicht zur Treppenreinigung nachkommen m\u00fcsse! Ich wohne seit 1984 dort und putze regelm\u00e4\u00dfig alle vierzehn Tage. Da die Waschmaschine in der allgemeinen Waschk\u00fcche nur \u00fcber einen Z\u00e4hler l\u00e4uft, behaupteten sie, ich w\u00fcrde vielleicht auf ihre Kosten waschen, wenn ich \u00f6fters die Maschine nutze. Au\u00dferdem h\u00e4tten sie dort, wo sie vorher wohnten, immer ein gutes Verh\u00e4ltnis zu den anderen Bewohnern gehabt.\n\nNach dem Einzug klopfte und klingelte die Frau immer und immer wieder an meiner T\u00fcr, sie w\u00fcrde samstags putzen und ich m\u00fcsste das auch tun.\n\nEinige Tage sp\u00e4ter stand im gemeinsam genutzten Flur ein Schrank, der so breit war, dass ich kaum vorbeikam, zumal ich gehbehindert bin. Ich habe mehr als eine Woche abgewartet, weil ich dachte, dass sie das M\u00f6belst\u00fcck noch reinstellen w\u00fcrden. Als dies nicht geschah, klingelte ich bei den Nachbarn und erkl\u00e4rte, dass ich gerne vorher gefragt worden w\u00e4re wegen der M\u00f6belaufstellung. Der Mann schrie mich daraufhin an: \u201eWer sind Sie \u00fcberhaupt? Der Schrank bleibt stehen.\u201c Zweimal musste der Vermieter schriftlich auffordern, das M\u00f6belst\u00fcck zu entfernen.\n\nTagelang wurde in der Wohnung gegen\u00fcber selbst in den Ruhezeiten geh\u00e4mmert, gebohrt und gegen die Wand \u2013 offenbar mit F\u00e4usten \u2013 geklopft. Oft standen sie vor meiner Wohnungst\u00fcr und sprachen laut mit derben, beleidigenden Worten. Jeden Tag wird die Wohnungst\u00fcr mehrfach heftig zugeschlagen, auch bzw. gerade nach 23.00 Uhr.\n\nIch bin \u2013 da nicht gesund \u2013 inzwischen mit den Nerven fertig, bekomme Herzrasen, schon wenn ich die Nachbarn kommen oder gehen h\u00f6re.\n\nWas kann ich tun? Ich kann mich doch nicht noch kr\u00e4nker terrorisieren lassen, als ich schon bin. Kann mir jemand einen guten Rat geben?\n\nHerzliche Gr\u00fc\u00dfe, Jutta",
  example: {
    id: 0,
    statement: "Jutta hat die neuen Mieter vor vierzehn Tagen getroffen.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement: "Die Treppe wird von den Hausbewohnern geputzt.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "Im Haus gibt es eine Waschmaschine f\u00fcr alle.",
      correct: "richtig",
    },
    {
      id: 3,
      statement: "Jutta kann nicht gut gehen.",
      correct: "richtig",
    },
    {
      id: 4,
      statement:
        "Nach einer Woche stellte der Vermieter den Schrank wieder in die Wohnung.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "Die neuen Mieter machen oft L\u00e4rm, aber nicht in den Ruhezeiten.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Jutta hat weder Probleme mit den Nerven noch mit dem Herzen.",
      correct: "falsch",
    },
  ],
};
