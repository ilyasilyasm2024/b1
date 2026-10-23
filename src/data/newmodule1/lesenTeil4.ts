export interface LesenTeil4Person {
  name: string;
  age: number;
  city: string;
  comment: string;
}

export interface LesenTeil4Data {
  module: number;
  part: string;
  time: string;
  instruction: string;
  topic: string;
  example: { name: string; answer: "ja" | "nein" };
  persons: LesenTeil4Person[];
  answers: { name: string; answer: "ja" | "nein" }[];
}

export const newmodule1LesenTeil4: LesenTeil4Data = {
  module: 1,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. Würde die Person an einem Digital-Detox-Wochenende teilnehmen?",
  topic:
    "In einem Online-Forum werden Kommentare zu einem Artikel über ein 'Digital-Detox-Wochenende' gesammelt, bei dem die Teilnehmer 48 Stunden lang komplett auf ihr Handy verzichten.",
  example: {
    name: "Merve",
    answer: "ja",
  },
  persons: [
    {
      name: "Bastian",
      age: 34,
      city: "Köln",
      comment:
        "Beruflich bin ich ständig erreichbar, weil ich in einem kleinen Team arbeite und Kunden mich oft kurzfristig brauchen. 48 Stunden komplett offline zu sein, kann ich mir bei meinem Job einfach nicht leisten. So schön die Idee auch klingt, für mich ist sie im Moment nicht umsetzbar.",
    },
    {
      name: "Greta",
      age: 19,
      city: "Freiburg",
      comment:
        "Ich habe schon oft gemerkt, dass ich mein Handy aus reiner Gewohnheit in die Hand nehme, obwohl ich gar nichts Bestimmtes vorhabe. Ein ganzes Wochenende ohne diese Ablenkung würde mir bestimmt guttun, und ich würde endlich wieder mehr lesen und draußen sein.",
    },
    {
      name: "Herr Albrecht",
      age: 58,
      city: "Rostock",
      comment:
        "Meine erwachsenen Kinder leben weit weg, und wir schreiben uns fast täglich über eine Chat-App. Ein Wochenende ohne Handy würde für mich bedeuten, zwei Tage lang nichts von meiner Familie zu hören. Das möchte ich nicht riskieren.",
    },
    {
      name: "Priya",
      age: 27,
      city: "Stuttgart",
      comment:
        "Ich finde die Idee grundsätzlich sinnvoll, aber ich glaube nicht, dass ich es wirklich durchhalten würde. Schon nach ein paar Stunden ohne Handy werde ich unruhig. Deshalb überlege ich es mir lieber noch einmal gut, bevor ich mich anmelde.",
    },
    {
      name: "Tobias",
      age: 41,
      city: "Leipzig",
      comment:
        "Letztes Jahr habe ich schon einmal an so einem Wochenende teilgenommen und war überrascht, wie entspannt ich danach war. Ich habe sofort wieder einen Platz für dieses Jahr reserviert, denn für mich ist das mittlerweile ein fester Termin im Kalender.",
    },
    {
      name: "Lea",
      age: 16,
      city: "Hannover",
      comment:
        "In der Schule nutzen wir das Handy inzwischen für fast alles, von Hausaufgaben bis zum Stundenplan. Ganz ohne Handy auszukommen wäre für mich im Alltag kaum möglich, und ein Wochenende ohne würde mich eher stressen als entspannen.",
    },
    {
      name: "Daniel",
      age: 30,
      city: "Wien",
      comment:
        "Ich arbeite im Homeoffice und verbringe schon den ganzen Tag vor Bildschirmen. Am Wochenende freue ich mich deshalb sowieso, wenn ich das Handy weglegen kann. Bei so einer organisierten Aktion mitzumachen, motiviert mich zusätzlich, es wirklich durchzuziehen.",
    },
  ],
  answers: [
    { name: "Bastian", answer: "nein" },
    { name: "Greta", answer: "ja" },
    { name: "Herr Albrecht", answer: "nein" },
    { name: "Priya", answer: "nein" },
    { name: "Tobias", answer: "ja" },
    { name: "Lea", answer: "nein" },
    { name: "Daniel", answer: "ja" },
  ],
};
