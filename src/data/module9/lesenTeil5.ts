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

export const module9LesenTeil5: LesenTeil5Data = {
  module: 9,
  part: "Lesen Teil 5",
  title: "Benutzungsordnung f\u00fcr das CORPUS FITNESS STUDIO",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie m\u00f6chten im CORPUS Fitness Studio trainieren und lesen die Benutzungsordnung.",
  text: "Benutzungsordnung f\u00fcr das CORPUS FITNESS STUDIO\n\nVor Trainingsbeginn sind Einzel- sowie Monatskarten den Trainern vorzuzeigen. Sie gelten nur f\u00fcr die eingetragene Person.\n\nBitte beachten Sie, dass die Benutzung des CORPUS FITNESS STUDIO auf eigene Gefahr erfolgt. Auch haftet der Verein nicht f\u00fcr Wertsachen, Bargeld und Verm\u00f6genssch\u00e4den. Gleiches gilt f\u00fcr die Zerst\u00f6rung, Besch\u00e4digung und das Abhandenkommen von mitgebrachten Gegenst\u00e4nden.\n\nDer Trainingsbereich ist nur mit festen, sauberen Sportschuhen zu benutzen. Das Training ohne jegliches Schuhwerk ist aus Sicherheits- und Hygienegr\u00fcnden nicht gestattet.\n\nTraining ist in Sportkleidung durchzuf\u00fchren. Die Trainingskleidung soll den Hautkontakt mit den Polstern verhindern. Es wird aus hygienischen Gr\u00fcnden vorausgesetzt, dass stark verschwitzte T-Shirts o.\u00c4. gewechselt werden. Training darf nur mit einem ausreichend gro\u00dfen Handtuch durchgef\u00fchrt werden. Handt\u00fccher k\u00f6nnen am InfoCenter gemietet werden.\n\nNach der Benutzung sind die Ger\u00e4te sauber zu machen und die Griffl\u00e4chen mit Desinfektionsmittel zu reinigen. Die Benutzung der Stellpl\u00e4tze vor dem Studio erfolgt auf eigene Gefahr.",
  questions: [
    {
      id: 27,
      statement: "Im Trainingsbereich ...",
      options: {
        a: "darf man auch ohne Schuhe trainieren.",
        b: "muss man die Griffe der Ger\u00e4te nach der Benutzung sauber machen.",
        c: "d\u00fcrfen nur bestimmte Ger\u00e4te benutzt werden.",
      },
      correct: "b",
    },
    {
      id: 28,
      statement: "Die Benutzer m\u00fcssen ...",
      options: {
        a: "selbst auf ihre Sachen aufpassen.",
        b: "ihr Auto auf den Stellpl\u00e4tzen parken.",
        c: "nicht alle gef\u00e4hrlichen Trainingsger\u00e4te benutzen.",
      },
      correct: "a",
    },
    {
      id: 29,
      statement: "Die Trainingskarten ...",
      options: {
        a: "gelten nur f\u00fcr eine Person.",
        b: "kann man bei Verlust melden.",
        c: "geben die Trainer den Benutzern als Monatskarte.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "F\u00fcr die Sportkleidung gilt:",
      options: {
        a: "Man darf nicht ohne Sportkleidung trainieren.",
        b: "Man soll immer ein neues T-Shirt anziehen.",
        c: "Man soll keine Haut sehen k\u00f6nnen.",
      },
      correct: "a",
    },
  ],
};
