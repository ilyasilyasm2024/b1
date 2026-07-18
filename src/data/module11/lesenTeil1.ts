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

export const module11LesenTeil1: LesenTeil1Data = {
  module: 11,
  part: "Lesen Teil 1",
  title: "Ein neues Haustier",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Hallo Marie,\n\nich schreibe dir diese E-Mail noch schnell vorm Schlafengehen, weil ich dir unbedingt von unserem neuen Haustier erz\u00e4hlen will. Seit vorgestern haben wir n\u00e4mlich ein K\u00e4tzchen. Genauer gesagt ist es ein junger Kater, Felix. Im Anhang findest du ein Foto. Da kannst du ihn bewundern. Ist er nicht s\u00fc\u00df?\n\nDu fragst dich sicherlich, wie es dazu gekommen ist. Nun, ich fuhr mit dem Velo heim, da h\u00f6rte ich es in den B\u00fcschen vor unserem Haus laut miauen. Ich bin abgestiegen, musste aber sehr geduldig sein, bis das Tierchen mir vertraute und sein Versteck verlie\u00df. Das Arme war ganz ausgehungert, schien jedoch ansonsten gesund zu sein.\n\nWas sollte ich tun? Ich habe das K\u00e4tzchen einfach mitgenommen, ich konnte es doch nicht verhungern lassen! Und au\u00dferdem ist es zurzeit hier in Z\u00fcrich ziemlich k\u00fchl. Du wei\u00dft ja, dass wir schon einen Hund haben, Muckel. Und du wei\u00dft auch, wie Hunde, besonders die kleinw\u00fcchsigen, nun mal so sind. Er hat anfangs gebellt und Felix ordentlich Angst gemacht. Und selbstverst\u00e4ndlich hat er an dem K\u00e4tzchen rumgeschnuppert. Als er aber merkte, dass der Neuank\u00f6mmling nicht aggressiv, sondern verschmust und verspielt ist, hat er sich beruhigt. Und jetzt, w\u00e4hrend ich dir schreibe, schl\u00e4ft Felix, satt und zufrieden, neben meinem Pult auf Muckels Bauch. Ich h\u00e4tte nie gedacht, dass Hund und Katze sich so schnell vertragen k\u00f6nnen.\n\nIch w\u00fcrde Felix gern behalten, aber ich wei\u00df nicht, ob das geht. Eine Katze ist zwar ein sehr selbstst\u00e4ndiges Tier und nimmt nicht viel Zeit in Anspruch. Das w\u00e4re also f\u00fcr mich zu schaffen. Aber werden die Nachbarn zwei Tiere in der Wohnung dulden? Auch habe ich geh\u00f6rt, dass Katzen nicht gern verreisen. Mit Muckel hatten wir keine Probleme, den nehmen wir in den Ferien immer mit. Geht das aber auch mit einem Kater? Und wenn nicht \u2013 wer passt auf Felix auf, wenn wir weg sind?\n\nMorgen bringen wir Felix zum Tierarzt und werden ihn um Rat bitten. Doch du hattest auch eine Weile lang eine Katze. Was meinst du denn dazu? Sollte ich vielleicht doch lieber eine Annonce in die Zeitung setzen und ein anderes Zuhause f\u00fcr Felix finden? Bitte antworte mir schnell.\n\nJan",
  example: {
    id: 0,
    statement: "Jan schreibt Marie immer, bevor er ins Bett geht.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement: "Das K\u00e4tzchen fand Jan in der N\u00e4he seines Hauses.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "Das Tier hatte lange nichts gegessen.",
      correct: "richtig",
    },
    {
      id: 3,
      statement: "Jans Hund f\u00fcrchtete sich anfangs vor dem K\u00e4tzchen.",
      correct: "falsch",
    },
    {
      id: 4,
      statement: "Eine Katze braucht nicht viel Zeit.",
      correct: "richtig",
    },
    {
      id: 5,
      statement: "Jan hat schon einen Termin beim Tierarzt f\u00fcr Felix.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Jan k\u00f6nnte eine Anzeige in der Zeitung aufgeben.",
      correct: "richtig",
    },
  ],
};
