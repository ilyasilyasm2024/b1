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

export const module15LesenTeil5: LesenTeil5Data = {
  module: 15,
  part: "Lesen Teil 5",
  title: "Anmeldeinformationen der SommerKinderUni Graz",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie informieren sich \u00fcber die Anmeldeinformationen der SommerKinderUni Graz, weil Sie im Programm der Universit\u00e4t interessante Angebote gefunden haben.",
  text: "Anmeldeinformationen der SommerKinderUni Graz\n\nAufnahme und Anmeldung\nDie SommerKinderUni Graz ist f\u00fcr Kinder und Jugendliche im Alter von 9 bis 15 Jahren gedacht. Sie beginnt am 22. Juni. Die Anmeldung ist nur f\u00fcr ganze Wochen \u00fcber die Homepage der KinderUni Graz m\u00f6glich. Insgesamt werden f\u00fcr die einzelnen Veranstaltungen (Workshops) bis zu max. 60 Kinder \u00fcber die 6 Wochen aufgenommen.\n\nKinderUniBeitrag\nWir bieten die SommerKinderUni Graz zum Kostenbeitrag in H\u00f6he von 45,00 \u20ac an. Dieser Beitrag wird jeweils am Montag in der Fr\u00fch, am allgemeinen Treffpunkt, um 9 Uhr f\u00fcr die laufende Woche eingehoben. Er inkludiert Fr\u00fchst\u00fcck, Jause, Mittagessen und Getr\u00e4nke.\n\nErkrankung / Fernbleiben\nErkrankt ein Kind, oder ist es verhindert, die SommerKinderUni Graz zu besuchen, so ist dies umgehend im KinderUniB\u00fcro bekannt zu geben. Den Betreuerinnen und Betreuern ist es nicht gestattet, Medikamente zu verabreichen. Bei Vorliegen einer chronischen Erkrankung bitten wir Sie, diese sowie entsprechende Notfallmedikamente bekannt zu geben. Es liegt in der Verantwortung der Eltern, die entsprechenden Notfallmedikamente zur SommerKinderUni Graz mitzugeben.\n\n\u00dcbergabe und Abholung Ihres Kindes\nDie Eltern haben daf\u00fcr zu sorgen, dass Jugendliche unter 9 Jahren von den Eltern selbst, und Jugendliche im Alter von 9 bis 15 Jahren von deren Eltern selbst oder deren bevollm\u00e4chtigten Vertretern ordnungsgem\u00e4\u00df in die Obhut der Betreuer der SommerKinderUni Graz \u00fcbergeben und von dort wieder abgeholt werden. Alleiniges Nach-Hause-Gehen muss von den Eltern im Vorhinein mitgeteilt werden.\n\n\u00d6ffnungszeiten\nDie SommerKinderUni Graz ist von Montag bis Freitag von 8.00 bis 17.00 Uhr ganzt\u00e4gig m\u00f6glich. Gemeinsamer Treffpunkt aller Teilnehmerinnen und Teilnehmer ist immer Montag um 9.15 Uhr im Seminarraum, Universit\u00e4tsplatz 15, Erdgeschoss, Karl-Franzens-Universit\u00e4t.",
  questions: [
    {
      id: 27,
      statement: "Eltern k\u00f6nnen schriftlich erkl\u00e4ren, dass ...",
      options: {
        a: "ihr Kind von einem Betreuer abgeholt wird.",
        b: "sie selbst ihr Kind zur Uni bringen.",
        c: "ihr Kind selbstst\u00e4ndig nach Hause geht.",
      },
      correct: "c",
    },
    {
      id: 28,
      statement: "F\u00fcr das Essen der Kinder ...",
      options: {
        a: "m\u00fcssen die Eltern selbst sorgen.",
        b: "zahlen die Eltern w\u00f6chentlich eine bestimmte Summe.",
        c: "m\u00fcssen die Eltern ihren Kindern t\u00e4glich Geld mitgeben.",
      },
      correct: "b",
    },
    {
      id: 29,
      statement: "Medikamente ...",
      options: {
        a: "d\u00fcrfen die Betreuer den Kindern nicht geben.",
        b: "kann man im Notfall im KinderUniB\u00fcro bekommen.",
        c: "f\u00fcr Allergiker m\u00fcssen im KinderUniB\u00fcro abgegeben werden.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "F\u00fcr die Anmeldung gilt: ...",
      options: {
        a: "Es k\u00f6nnen nur Kinder und Jugendliche zwischen 9 und 15 Jahren angemeldet werden.",
        b: "Man kann sich jeweils nur f\u00fcr einen Workshop anmelden.",
        c: "Die Teilnehmerzahl ist begrenzt.",
      },
      correct: "c",
    },
  ],
};
