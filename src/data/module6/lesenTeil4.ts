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

export const module6LesenTeil4: LesenTeil4Data = {
  module: 6,
  part: "Lesen Teil 4",
  time: "15 Minuten",
  instruction:
    "Lesen Sie die Texte 20 bis 26. W\u00e4hlen Sie: Ist die Person f\u00fcr n\u00e4chtliches Skifahren?",
  topic:
    "In einer Zeitschrift lesen Sie Kommentare zu einem Artikel \u00fcber das Angebot, auch nachts bei k\u00fcnstlichem Licht Ski zu fahren.",
  example: {
    name: "Jens",
    answer: "ja",
  },
  persons: [
    {
      name: "Lara",
      age: 34,
      city: "M\u00fcnchen",
      comment:
        "Ich muss hier ehrlich sagen, dass ich immer gegen so etwas war. Aber vor Kurzem hatte ich das Angebot, mit Kollegen so eine Nachttour zu machen. Dieses einmalige Erlebnis hat meine Einstellung zum n\u00e4chtlichen Skifahren total ge\u00e4ndert. Es ist so, dass ich auf jeden Fall noch mal fahren will. Da es mich so begeistert, kann ich einfach nicht mehr dagegen sein.",
    },
    {
      name: "Kevin",
      age: 19,
      city: "Solothurn",
      comment:
        "Diese Idee hat meiner Meinung nach zwei Seiten. Einerseits bringen Skifahrer, die nachts fahren, mehr Geld in die Region und dar\u00fcber freuen sich alle. Andererseits st\u00f6rt das starke Licht in der Nacht die Tiere und ist einfach unnat\u00fcrlich. Weil ich nicht Ski fahre und die Natur sch\u00fctzen m\u00f6chte, finde ich so ein Angebot unattraktiv. Das brauchen wir nicht.",
    },
    {
      name: "Karl",
      age: 50,
      city: "Hildesheim",
      comment:
        "In der letzten Zeit h\u00f6ren wir immer h\u00e4ufiger, wie gro\u00df das Umweltproblem in den Alpen ist und wie viel Schaden der Mensch dem Berg antut, wenn er Seilbahnen baut, Pisten anlegt oder Ski f\u00e4hrt. Es ist doch klar, dass die Berge ab sofort m\u00f6glichst in Ruhe gelassen werden sollen. Wir haben als Menschen schon genug dort oben kaputt gemacht. Versuchen wir lieber, das noch nicht Zerst\u00f6rte zu sch\u00fctzen, statt noch mehr in die Natur einzugreifen.",
    },
    {
      name: "Susanne",
      age: 16,
      city: "Kiel",
      comment:
        "Ich bin aus dem Norden und kann selbst nicht Ski fahren. Aber bei uns gehen wir auch im Sommer nachts gern mal am Meer spazieren, an der K\u00fcste oder auch in den beleuchteten Stra\u00dfen. Warum sollen die Menschen in den Bergen nicht auch die M\u00f6glichkeit haben, nachts ihr Hobby auszu\u00fcben?",
    },
    {
      name: "Martin",
      age: 40,
      city: "Dresden",
      comment:
        "Was sich die Liftbesitzer und Bergh\u00fctteneigent\u00fcmer alles ausdenken! Das kann ja wohl nicht Ihr Ernst sein, auch nachts die Pisten zu \u00f6ffnen und Menschen Ski fahren zu lassen. Das ist ja wohl das Letzte.",
    },
    {
      name: "Marc",
      age: 36,
      city: "Obertauern",
      comment:
        "Niemand denkt an die Beisl-Besitzer! Wir m\u00fcssen da oben auf den Bergen ganz sch\u00f6n um unsere Kundschaft k\u00e4mpfen. Es kommen sowieso jedes Jahr weniger Skifahrer. Das bedeutet auch, dass wir weniger verdienen. Nun haben wir einmal die M\u00f6glichkeit, noch ein bisschen l\u00e4nger offen zu sein, um die Kunden der Nacht-Pisten-Gaudi zu bedienen, schon fangen die Umweltsch\u00fctzer an zu schreien. Das finde ich einfach nur unfair.",
    },
    {
      name: "Otto",
      age: 47,
      city: "Salzburg",
      comment:
        "Ich erinnere mich noch an meine Kindheit. Als Bub war ich regelm\u00e4\u00dfig zum Skifahren in den Bergen. Einmal im Monat gab es dort einen \u201eFackellauf\u201c, da sind die Skilehrer bei Nacht mit den brennenden Fackeln in der Hand die zentrale Piste hinuntergefahren. Das hat mich zwar damals beeindruckt, aber jede Nacht Skifahren mit k\u00fcnstlichem Licht? So viele Skifahrer? Die Nacht zum Tag machen? Das st\u00f6rt doch die sch\u00f6ne Stille, die nachts in den Bergen herrscht.",
    },
  ],
  answers: [
    { name: "Lara", answer: "ja" },
    { name: "Kevin", answer: "nein" },
    { name: "Karl", answer: "nein" },
    { name: "Susanne", answer: "ja" },
    { name: "Martin", answer: "nein" },
    { name: "Marc", answer: "ja" },
    { name: "Otto", answer: "nein" },
  ],
  // Official key (Modelltest 6): 20 Ja, 21 Nein, 22 Nein, 23 Ja, 24 Nein, 25 Ja, 26 Nein
  // Mapping: 20=Lara Ja, 21=Kevin Nein, 22=Karl Nein, 23=Susanne Ja, 24=Martin Nein, 25=Marc Ja, 26=Otto Nein ✓
};
