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

export const module7LesenTeil1: LesenTeil1Data = {
  module: 7,
  part: "Lesen Teil 1",
  title: "Urs Merz \u2013 Betriebsausflug",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Gr\u00fcezi, Facebook-Freunde!\n\nLetzten Freitag fand unser Betriebsausflug statt. Ziel war der Freizeitpark am Atzm\u00e4nnig in der N\u00e4he von Z\u00fcrich. Als ich das h\u00f6rte, war ich ehrlich gesagt nicht besonders begeistert davon. Und weil ich neu im Betrieb bin, habe ich mich mit meiner Meinung zur\u00fcckgehalten. Teilnehmen wollte ich auf jeden Fall, um die Kollegen besser kennenzulernen.\n\nVon Z\u00fcrich aus erreichten wir den Vergn\u00fcgungspark in nur 45 Minuten. Er liegt am Fu\u00dfe eines Berges. Eine Seilbahn bef\u00f6rderte uns in die H\u00f6he. Oben angekommen bot sich uns ein atemberaubendes Panorama. Da das Wetter mitspielte, konnten wir \u00fcber den Z\u00fcrichsee sehen. In der Ferne waren sogar die Berner Alpen zu erkennen. Dann begann das eigentliche Programm. Wir konnten zwischen zwei Alternativen w\u00e4hlen. Entweder eine dreist\u00fcndige Wanderung ins Tal oder auf der Sommerrodelbahn bergab und dann einen Parcours im Seilpark. Ich entschied mich f\u00fcr Letzteres.\n\nDie Rutschbahn war ziemlich lang, 700 Meter mit 17 Kurven. Es ging sehr schnell abw\u00e4rts. Was f\u00fcr eine Adrenalin-Spritze! Schade nur, dass man so viel von der sch\u00f6nen Natur verpasste.\n\nNachdem wir unten angekommen waren, ging es dann zum Kletterpark. Insgesamt gab es 7 Parcours mit unterschiedlichen Schwierigkeitsgraden. Meine Gruppe w\u00e4hlte einen mittleren Schwierigkeitsgrad, da alle (au\u00dfer mir) schon etwas Erfahrung damit hatten. Dass es f\u00fcr mich das erste Mal war, sagte ich nicht.\n\nEs war wirklich ein tolles Erlebnis. Man muss aber geschickt sein und sich gut miteinander koordinieren k\u00f6nnen. An einer Stelle habe ich nicht aufgepasst und w\u00e4re fast gefallen, wenn ein Kollege mich nicht gehalten h\u00e4tte. Ich habe mir den Arm leicht verletzt. Nichts Schlimmes.\n\nAm Schluss, als auch die Wandergruppe im Tal angekommen war, gab es im Restaurant ein warmes Men\u00fc (das Z\u00fcrcher Geschnetzelte ist jedem zu empfehlen!). Dann gab's noch Kaffee und Kuchen mit frischem Rahm auf der Sonnenterrasse.\n\nEin wunderbarer Tag! Kommenden Samstag bin ich mit drei Kollegen wieder dort verabredet. Seid ihr auch da?",
  example: {
    id: 0,
    statement: "Der Ausflug fand an einem Arbeitstag statt.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement: "Urs fand das Ausflugsziel zuerst nicht besonders gut.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "Der Freizeitpark ist nicht weit von der Gro\u00dfstadt entfernt.",
      correct: "richtig",
    },
    {
      id: 3,
      statement: "Sie wanderten drei Stunden den Berg hoch.",
      correct: "falsch",
    },
    {
      id: 4,
      statement: "Urs hatte schon mal Parcours gemacht.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "Als Urs fiel, half ihm ein Kollege aufzustehen.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Urs wird den Freizeitpark bald wieder besuchen.",
      correct: "richtig",
    },
  ],
};
