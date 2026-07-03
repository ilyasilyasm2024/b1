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

export const module1LesenTeil1: LesenTeil1Data = {
  module: 1,
  part: "Lesen Teil 1",
  title: "So lebe ich",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
  text: `Mein Name ist Clemens. Ich bin 12 Jahre alt und mein Vater ist Diplomat. Alle drei bis vier Jahre ziehen wir deshalb in ein anderes Land. Ich wurde in Deutschland geboren, aber schon als ich zwei Wochen alt war, bin ich mit meiner Mutter nach Beirut geflogen. Das ist die Hauptstadt des Libanon. Aus den ersten Jahren weiß ich nicht mehr viel.

Das erste Land, an das ich mich erinnere, ist Portugal. Wir hatten ein pinkfarbenes Haus mit einem großen Garten. Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon. Das Meer, eigentlich muss ich sagen „der Ozean", war dort herrlich blau und ich habe sehr gern im Sand gespielt.

Englisch musste ich schon ganz früh lernen. Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen. Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen. Am Anfang hat es mir dort gar nicht gefallen – einfach zu kalt, fand ich. Und kein Meer und keine großen schwarzen Oliven zum Frühstück. Aber dann gewöhnt man sich wieder an das Neue und plötzlich wurde Deutschland zu meiner Heimat. Ich dachte: Jetzt bleiben wir hier für immer. Falsch gedacht. Immerhin sieben Jahre sind wir in Berlin geblieben, dann mussten wir wieder die Koffer packen.

Seit einem halben Jahr lebe ich mit meiner Familie in New York. Jetzt bin ich froh darüber, dass ich Englisch sprechen kann. New York ist eine der aufregendsten Städte der Welt. Es ist in den meisten Dingen ganz anders als Berlin: In manche Stadtviertel gehen die Leute nur, um zu arbeiten, in anderen leben sie, und in manche gehen sie gar nicht – weil sie zu gefährlich sind.

Mittlerweile habe ich gemerkt, dass es einfach Zeit braucht, sich an ein neues Land zu gewöhnen. Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen. Manchmal denke ich, es wäre toll, immer nur an einem Ort zu leben. Doch wenn ich es mir recht überlege, ist es schon ziemlich aufregend, die Welt kennenzulernen.`,
  example: {
    id: 0,
    statement: "Clemens' Mutter kommt aus dem Libanon.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement:
        "Clemens kann sich kaum noch an die Zeit im Libanon erinnern.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "Clemens' Haus in Portugal lag am Meer.",
      correct: "falsch",
    },
    {
      id: 3,
      statement: "Clemens besuchte einen englischsprachigen Kindergarten.",
      correct: "richtig",
    },
    {
      id: 4,
      statement:
        "In Berlin wohnte Clemens bis zu seinem siebten Lebensjahr.",
      correct: "falsch",
    },
    {
      id: 5,
      statement:
        "Clemens meint, es gibt große Unterschiede zwischen Berlin und New York.",
      correct: "richtig",
    },
    {
      id: 6,
      statement: "In New York fühlt sich Clemens jetzt wie zu Hause.",
      correct: "falsch",
    },
  ],
};
