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

export const module6LesenTeil5: LesenTeil5Data = {
  module: 6,
  part: "Lesen Teil 5",
  title: "Tipps f\u00fcr einen Restaurantbesuch",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie informieren sich dar\u00fcber, wie man sich bei einem Restaurantbesuch richtig verh\u00e4lt, denn Sie sind zu einem wichtigen Arbeitsessen eingeladen.",
  text: "Tipps f\u00fcr einen Restaurantbesuch\n\nBeim Betreten des Lokals ist es nicht mehr zwingend vorgeschrieben, dass der Mann die T\u00fcr f\u00fcr die Frau aufh\u00e4lt. Es ist ebenso in Ordnung, wenn die Frau selbst die T\u00fcr aufmacht.\n\nUm den Kellner auf sich aufmerksam zu machen, gen\u00fcgt schon ein kleines Handzeichen. Sollte er Sie nicht sehen, wenden Sie sich an einen seiner Kollegen und bitten Sie ihn, Ihren Wunsch weiterzugeben. Lautes Rufen sollten Sie unterlassen.\n\nHeute gibt es in den meisten Gastst\u00e4tten einen Raucher- und Nichtraucherbereich. Empfehlenswert ist es, die G\u00e4ste vor dem Betreten des Lokals zu fragen, wo sie gerne sitzen wollen. Aus H\u00f6flichkeit s\u00fcssen Raucher anbieten, in den Nichtraucherbereich zu gehen. Auf jeden Fall sollten Raucher vor dem Anz\u00fcnden einer Zigarette fragen, ob es die anderen G\u00e4ste st\u00f6rt.\n\nIm Restaurant ist es ratsam, das Handy stumm oder ganz auszuschalten. Wenn Sie dringend telefonieren m\u00fcssen, tun Sie dies bitte nicht am Tisch. Gehen Sie in eine ruhige Ecke des Lokals und erledigen Sie dort nur die allernotwendigsten Anrufe, da es unh\u00f6flich ist, die G\u00e4ste lange auf sich warten zu lassen.\n\nDas Bezahlen wird heute in der Regel am Tisch erledigt. Empfehlenswerter, weil diskreter, ist die Benutzung einer Kreditkarte. Es ist in Deutschland nicht zwingend vorgeschrieben, ein Trinkgeld zu geben. Sind Sie aber mit der Bedienung zufrieden gewesen, ist es \u00fcblich, ein kleines Trinkgeld (5 bis 10 % des Rechnungsbetrags) zu geben.",
  questions: [
    {
      id: 27,
      statement: "Rauchen im Restaurant ...",
      options: {
        a: "ist nicht erlaubt.",
        b: "sollte man nur, wenn es die anderen G\u00e4ste nicht st\u00f6rt.",
        c: "d\u00fcrfen die G\u00e4ste nur vor dem Eintritt ins Restaurant.",
      },
      correct: "b",
    },
    {
      id: 28,
      statement: "Um den Kellner auf sich aufmerksam zu machen, ...",
      options: {
        a: "muss man den Kellner laut rufen.",
        b: "muss man sich beim Kellner erkundigen, welcher Kollege an diesem Tisch die G\u00e4ste bedient.",
        c: "sollte man dem Kellner ein Zeichen mit der Hand machen.",
      },
      correct: "c",
    },
    {
      id: 29,
      statement: "Es ist unh\u00f6flich, ...",
      options: {
        a: "das Handy ins Restaurant mitzunehmen.",
        b: "in einer Ecke des Restaurants zu telefonieren.",
        c: "lange am Handy zu reden, w\u00e4hrend die G\u00e4ste warten.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Nach dem Essen ...",
      options: {
        a: "sollte man ein Trinkgeld geben, wenn die Bedienung zufrieden war.",
        b: "ist es besser, mit einer Kreditkarte zu bezahlen.",
        c: "zahlt jeder Gast ein Trinkgeld.",
      },
      correct: "c",
    },
  ],
};
