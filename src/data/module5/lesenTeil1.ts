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

export const module5LesenTeil1: LesenTeil1Data = {
  module: 5,
  part: "Lesen Teil 1",
  title: "Der Sportblog",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Hallo,\n\nich hei\u00dfe Sandra, bin 17 Jahre alt und spiele nicht nur gern Fu\u00dfball, sondern trainiere ein Jugend-Team und neuerdings bin ich auch noch als Schiedsrichterin t\u00e4tig. Von dieser letzten Erfahrung m\u00f6chte ich berichten, damit besonders die Jungen unter euch einsehen, dass Fu\u00dfball nicht mehr reine M\u00e4nnersache ist.\n\nF\u00fcr den Schein musste ich drei Tage lang bei einem Lehrgang das gesamte Regelwerk lernen. Dann kam die Pr\u00fcfung und schon war ich Schiedsrichterin. Zumindest auf dem Papier.\n\nAber auf meinen ersten Einsatz musste ich nicht lange warten. Schon am n\u00e4chsten Wochenende sollte ich ran, ein Jugend-Spiel, gleich bei den Jungs.\n\nEine Stunde vor Spielbeginn bin ich am Platz angekommen. Als Schiedsrichterin hat mich dort nat\u00fcrlich erstmal niemand erkannt. Wahrscheinlich dachten die Leute eher, ich sei die gro\u00dfe Schwester eines Spielers. Nachdem ich mich vorgestellt hatte, konnte ich mich in einer kleinen Kabine umziehen. Ich bin dann raus auf den Platz, um alles zu kontrollieren. Das habe ich extra so fr\u00fch gemacht, damit der Verein noch Zeit hat, Fehler zu beseitigen.\n\nBei der Passkontrolle haben die kleinen Jungs fast alle etwas komisch geguckt. Die wurden wohl noch nie von einer Frau gepfiffen. Ich kenne hier im Kreis aber bis jetzt auch nur drei andere Schiedsrichterinnen.\n\nDann konnte ich das Spiel endlich anpfeifen. Hinter einer Bande haben etwa 25 Eltern das Spiel verfolgt. Ich hatte eigentlich fest damit gerechnet, dass es da ganz sch\u00f6n laut werden w\u00fcrde \u2013 aber nichts. Kein Geschreie, keine Beschwerden und keine dummen Spr\u00fcche.\n\nVon den Jungs auf dem Spielfeld habe ich mich v\u00f6llig ernst genommen gef\u00fchlt. Die haben wahnsinnig fair gespielt, trotzdem musste ich ziemlich oft pfeifen. Da habe ich immer an den Lehrgang gedacht. Dort haben sie uns ganz oft gezeigt, wie wir kr\u00e4ftig in die Pfeife pusten m\u00fcssen, damit wir die Spieler auf uns aufmerksam machen.\n\nAm Schluss stand es 8:0. Die Zeit ging viel schneller rum, als ich dachte. Als ich gegangen bin, hat mich keiner mehr wegen Fehlentscheidungen oder meiner Leistung angesprochen. Eine sch\u00f6ne Premiere.\n\nMein n\u00e4chstes Spiel wird im Februar oder M\u00e4rz stattfinden. Ob Jungs oder M\u00e4dchen ist mir eigentlich egal.\n\n\u00b9 Der Schiedsrichter passt bei einem Fu\u00dfballspiel auf, dass die Spieler die Regeln beachten.",
  example: {
    id: 0,
    statement: "Sandra ist Trainerin bei einer Fu\u00dfball-Mannschaft.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement:
        "Sie musste zuerst eine Pr\u00fcfung machen, bevor sie Schiedsrichterin wurde.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "Sandra ist die Schwester eines jungen Fu\u00dfballspielers.",
      correct: "falsch",
    },
    {
      id: 3,
      statement: "Die Jungen kennen noch drei andere Schiedsrichterinnen.",
      correct: "falsch",
    },
    {
      id: 4,
      statement: "Weil Eltern zuschauten, gab es keine Schwierigkeiten.",
      correct: "falsch",
    },
    {
      id: 5,
      statement:
        "Sandra wei\u00df, was sie tun muss, damit die Spieler sie beachten.",
      correct: "richtig",
    },
    {
      id: 6,
      statement:
        "Sie ist mit ihrer ersten Leistung als Schiedsrichterin zufrieden.",
      correct: "richtig",
    },
  ],
};
