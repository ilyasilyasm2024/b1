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

export const module9LesenTeil1: LesenTeil1Data = {
  module: 9,
  part: "Lesen Teil 1",
  title: "Urlaub auf dem Bauernhof",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Hallo Gerd,\n\nwir sind gestern gesund und erholt aus dem Urlaub in K\u00e4rnten zur\u00fcckgekommen. Und da du mich gebeten hattest, dir von unserem \u201eUrlaub auf dem Bauernhof\u201c zu berichten, will ich dies auch gleich tun. Es war einmalig!\n\nDer Bauernhof, den wir ausgew\u00e4hlt hatten, liegt auf einer H\u00f6he von 1050 m. Fahrzeugverkehr gibt es da so gut wie gar keinen, dadurch hatten die Kinder eine sehr gro\u00dfe Bewegungsfreiheit. Ich beschreibe dir am besten mal, wie ein typischer Urlaubstag ablief.\n\nZum Fr\u00fchst\u00fcck gab es frische Milch, selbstgemachte Marmelade und frische Semmeln usw. Alles wurde direkt auf dem Hof hergestellt. Vormittags konnte man dann vieles unternehmen. Die Kinder gingen zum Beispiel zum hauseigenen Forellenteich und haben geangelt. Wenn sie Anglergl\u00fcck hatten, wurden die Forellen dann zu Mittag f\u00fcr uns zubereitet.\n\nEs gab auch ein Schwimmbad, das von allen G\u00e4sten benutzt werden durfte. Die Kinder besch\u00e4ftigten sich aber am liebsten mit den Tieren \u2013 es gab K\u00fche, H\u00fchner, Ziegen und Katzen. Manchmal haben wir auch Ausfl\u00fcge in die Umgebung gemacht. Am Abend, nach dem Abendessen, waren die Kinder meist so m\u00fcde, dass sie lieber ins Bett gingen, statt noch fernzusehen.\n\nEs war ein wunderbarer Urlaub, den wir sicher wiederholen werden.\n\nViele Gr\u00fc\u00dfe",
  example: {
    id: 0,
    statement: "Gerd war im Urlaub in K\u00e4rnten.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement: "Es gab kaum Verkehr in der N\u00e4he des Bauernhofs.",
      correct: "richtig",
    },
    {
      id: 2,
      statement:
        "Die Speisen f\u00fcr das Fr\u00fchst\u00fcck wurden von den G\u00e4sten hergestellt.",
      correct: "falsch",
    },
    {
      id: 3,
      statement: "Das Schwimmbad durfte nur von Erwachsenen benutzt werden.",
      correct: "falsch",
    },
    {
      id: 4,
      statement: "Die Kinder besch\u00e4ftigten sich h\u00e4ufig mit den Tieren.",
      correct: "richtig",
    },
    {
      id: 5,
      statement: "Die Familie hat manchmal Ausfl\u00fcge gemacht.",
      correct: "richtig",
    },
    {
      id: 6,
      statement:
        "Nach dem Abendessen haben die Kinder lieber gelesen, statt fernzusehen.",
      correct: "falsch",
    },
  ],
};
