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

export const module1LesenTeil4: LesenTeil4Data = {
  module: 1,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. Wählen Sie: Würde die Person bei einer Kettenmail mitmachen?",
  topic:
    "In einer Online-Zeitung lesen Sie Kommentare zu einem Artikel über Kettenmails.",
  example: {
    name: "Henriette",
    answer: "ja",
  },
  persons: [
    {
      name: "Henriette",
      age: 24,
      city: "Magdeburg",
      comment:
        "Wenn du eine Mail geschickt bekommst, in der du aufgefordert wirst, sie an alle Freunde weiterzuschicken – dann lass es bleiben. Du machst dich nur zum Gespött. Denn bei solchen Kettenmails handelt es sich fast immer um blöde Spriße. Oft haben diese Mails sogar Viren und machen etwas am PC kaputt.",
    },
    {
      name: "Alexandra",
      age: 28,
      city: "Ludwigshafen",
      comment:
        "Kettenmails sind für mich einfach ein Teil der Kommunikation mit anderen. Mir ist es noch nie passiert, dass eine Kettenmail etwas kaputt gemacht hat. Ich mache auch nicht immer, was da steht, z.B. an mindestens 10 Personen schicken oder so. Ich sehe das einfach als einen Teil meiner Kommunikation und wenn die Mail lustig oder interessant ist, schicke ich sie auch weiter. Ich sehe keinen Grund, die dagegen spricht.",
    },
    {
      name: "Nils",
      age: 41,
      city: "Hamburg",
      comment:
        "Wenn ich etwas bekomme, das auch nur entfernt an eine Kettenmail erinnert, lösche ich es sofort. Da kann man sich nie sicher sein, ob da nicht irgendeine Verbrecherfarma dahinter steckt und auf diese Weise versucht, möglichst viele E-Mail-Adressen zu sammeln. Die Adressen könnte man dann für Web-Seiten oder Spam benutzen. Deshalb wird man danach nur mit Werbung bombardiert.",
    },
    {
      name: "Wiebke",
      age: 18,
      city: "Gelsenkirchen",
      comment:
        "Ich freue mich immer über Post, egal ob es sich um viele, ob zum Weiterschicken oder nicht. Allgemein bin ich der Meinung, dass man Wichtiges und Interessantes grundsätzlich immer an alle weiterleiten muss. Das ist doch das Gute am Internet und das gilt auch für Kettenmails.",
    },
    {
      name: "Stefan",
      age: 30,
      city: "Freistadt",
      comment:
        "Die Frage ist immer, was eigentlich drin steht. Wenn es ein Aufruf in der Art ist, z.B. ein Blut zu spenden, würde ich es auf jeden Fall einmal ausprobieren. Bei diesen Mails müsste dann auch stehen, was man telefonisch erkunden kann. Erst macht man ja und danach niert sich. Ich mache also immer erstmal eine Mail auf. Aber ehrlich gesagt: würde ich nie etwas weiterschicken, dann verlängert lügen mir die anderen damit nie.",
    },
    {
      name: "Charlotte",
      age: 48,
      city: "Göttingen",
      comment:
        "Vor ein paar Tagen habe ich mal so eine Mail bekommen. Es ging um Rezepte. Ich sollte ein Rezept an jemanden schicken und dann die Mail an alle Freunde. Vorher habe ich einen Namen von der Liste der Mitspielenden genommen und nicht selbst das geschickt. Nun werde ich ganz viele Rezepte von mir Unbekannten erhalten. Zwei Rezepte habe ich schon und ich freue mich auf die nächsten.",
    },
    {
      name: "Victor",
      age: 26,
      city: "Zürich",
      comment:
        "Die E-Mail ist nicht für Spiele erfunden worden, sondern um die Kommunikation zu erleichtern. Deshalb kann ich nicht verstehen, dass es Leute gibt, die eine Kettenmail nützen wollen. So eine Zeitverschwendung! Da könnte man doch etwas Besseres mit dem Computer anstellen, zum Beispiel häufiger an Freunde schreiben.",
    },
    {
      name: "Katia",
      age: 34,
      city: "Wien",
      comment:
        "Das schlimmste sind diese Kettenmails, in denen steht, dass man ganz viel Unglück haben wird, wenn man nicht sofort alles an 10 Freunde weiterschickt. Nein, so einen Psychoterror kann ich echt nicht unterstützen! Mir hat das alles Kettenmail vergrault, ich will bei keiner mehr mitmachen.",
    },
  ],
  answers: [
    { name: "Henriette", answer: "ja" },
    { name: "Alexandra", answer: "nein" },
    { name: "Nils", answer: "ja" },
    { name: "Wiebke", answer: "nein" },
    { name: "Stefan", answer: "ja" },
    { name: "Charlotte", answer: "nein" },
    { name: "Victor", answer: "nein" },
    { name: "Katia", answer: "nein" },
  ],
};
