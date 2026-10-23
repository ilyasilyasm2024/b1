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

export const newmodule1LesenTeil1: LesenTeil1Data = {
  module: 1,
  part: "Lesen Teil 1",
  title: "Der Blick zu den Sternen",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen richtig oder falsch?",
  text: `Mein Name ist Jonas. Ich bin 16 Jahre alt und wohne mit meiner Familie in einem kleinen Dorf am Rand des Schwarzwalds. Vor drei Jahren hat mir mein Großvater sein altes Teleskop geschenkt, das er selbst schon als junger Mann benutzt hatte. Seitdem hat sich mein Leben ziemlich verändert.

Am Anfang wusste ich kaum, wie man das Teleskop überhaupt einstellt. Ich habe mir Bücher aus der Bibliothek geliehen und Videos im Internet angeschaut, um zu lernen, wie man Sterne und Planeten findet. Nach einigen Wochen konnte ich schon den Saturn mit seinen Ringen erkennen, und das hat mich total begeistert.

Weil ich in unserem Dorf niemanden kannte, der sich auch für Astronomie interessiert, habe ich im Nachbarort einen Sternenclub gefunden. Einmal im Monat treffen wir uns dort und beobachten gemeinsam den Himmel, wenn das Wetter gut ist. Die anderen Mitglieder sind viel älter als ich, aber das stört mich nicht. Sie erklären mir geduldig, wie man Sternbilder erkennt und welche Kamera man für Astrofotos braucht.

Im letzten Sommer sind wir mit dem Club zu einem Beobachtungscamp in den Bergen gefahren, weil es dort nachts viel dunkler ist als bei uns zu Hause. Wir haben drei Nächte draußen verbracht und einen Meteoritenschauer beobachtet. Das war eines der schönsten Erlebnisse meines Lebens.

Mittlerweile denke ich ernsthaft darüber nach, nach dem Abitur Physik zu studieren. Meine Eltern finden es gut, dass ich ein Hobby habe, bei dem ich so viel lerne. Manchmal sitze ich abends stundenlang mit dem Teleskop auf unserem Balkon, und die Zeit vergeht wie im Flug.`,
  example: {
    id: 0,
    statement: "Jonas hat sein Teleskop selbst gekauft.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement: "Jonas wusste von Anfang an, wie man das Teleskop benutzt.",
      correct: "falsch",
    },
    {
      id: 2,
      statement: "Nach einigen Wochen konnte Jonas den Saturn erkennen.",
      correct: "richtig",
    },
    {
      id: 3,
      statement: "Der Sternenclub trifft sich in Jonas' Heimatdorf.",
      correct: "falsch",
    },
    {
      id: 4,
      statement:
        "Die anderen Mitglieder des Clubs sind ungefähr im gleichen Alter wie Jonas.",
      correct: "falsch",
    },
    {
      id: 5,
      statement:
        "Beim Beobachtungscamp in den Bergen hat die Gruppe einen Meteoritenschauer gesehen.",
      correct: "richtig",
    },
    {
      id: 6,
      statement: "Jonas möchte nach der Schule Physik studieren.",
      correct: "richtig",
    },
  ],
};
