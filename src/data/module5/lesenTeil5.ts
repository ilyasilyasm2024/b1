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

export const module5LesenTeil5: LesenTeil5Data = {
  module: 5,
  part: "Lesen Teil 5",
  title: "Mobil mit dem Citybike",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c.",
  text: "Mobil mit dem Citybike\n\nDas Citybike-Wien-System ist ein innovatives und umweltfreundliches \u00f6ffentliches Verkehrsmittel und kein traditionaler Fahrradverleih. Die R\u00e4der k\u00f6nnen an \u00fcber 120 Bikestationen in ganz Wien entliehen werden. Die R\u00fcckgabe ist an jeder beliebigen Station m\u00f6glich, unabh\u00e4ngig davon, wo die Fahrt begonnen wurde. Und das 24 Stunden lang, 7 Tage die Woche. Also mobil sein, wann immer Sie wollen.\n\nUm Citybiker / Citybikerin zu werden, bedarf es einer einmaligen Anmeldung. Melden Sie sich jetzt im Internet an, um einen Terminal Zeit zu sparen! (Sie k\u00f6nnen die Anmeldung auch an jedem Citybike-Terminal vornehmen.)\n\nF\u00fcr jede Anmeldung ben\u00f6tigen Sie eine der unten angef\u00fchrten Karten. M\u00f6chten Sie mehrere Personen anmelden, ben\u00f6tigen Sie mehrere Karten.\n\nDie jeweils erste Stunde f\u00e4hrt man mit dem Citybike gratis. Jede weitere Stunde ist kostenpflichtig. Das Prozedere der Anmeldung erfordert eine einmalige Geb\u00fchr von \u20ac 1,00. Diese wird Ihnen nach erfolgter Anmeldung f\u00fcr Ihre Fahrten gutgeschrieben.\n\nCitybike-Card:\nSie erhalten eine eigene Karte f\u00fcr Ihren Zugang zu Citybike. Die Abrechnung erfolgt \u00fcber Bankeinzug von einem \u00f6sterreichischen Konto. Die Zusendung der Karte dauert ca. 3 Wochen. F\u00fcr Angeh\u00f6rige k\u00f6nnen Sie zus\u00e4tzliche Partnerkarten beantragen.\n\nAndere Karten:\n\u00d6sterreichische Bankomatkarten und alle Kreditkarten lassen sich ganz unkompliziert um die Funktion einer Citybike-Card erweitern.\n\nWeitere Informationen und Tarife unter: http://www.citybikewien.at/",
  questions: [
    {
      id: 27,
      statement: "Mit dem Citybike ...",
      options: {
        a: "kann man h\u00f6chstens 60 Minuten pro Tag fahren.",
        b: "kann man umsonst fahren, solange man m\u00f6chte.",
        c: "kann man fahren, sooft man will.",
      },
      correct: "c",
    },
    {
      id: 28,
      statement: "Ausl\u00e4ndische Touristen ...",
      options: {
        a: "k\u00f6nnen sich keine R\u00e4der entleihen.",
        b: "brauchen f\u00fcr die Citybike-Card eine Bankomatkarte.",
        c: "k\u00f6nnen ihre Kreditkarte zur Citybike-Card erweitern.",
      },
      correct: "b",
    },
    {
      id: 29,
      statement: "Um ein Citybike fahren zu k\u00f6nnen, ...",
      options: {
        a: "kann man sich auch an einem Terminal anmelden.",
        b: "muss man sich f\u00fcr das Rad, das man entleihen will, im Internet anmelden.",
        c: "braucht man unbedingt die Citybike-Card.",
      },
      correct: "a",
    },
    {
      id: 30,
      statement: "Die Fahrr\u00e4der des Citybike-Wien-Systems ...",
      options: {
        a: "sind umweltfreundlicher als traditionelle R\u00e4der.",
        b: "m\u00fcssen an der Startstation zur\u00fcckgegeben werden.",
        c: "k\u00f6nnen an mehr als 80 Bikestationen abgeholt und abgegeben werden.",
      },
      correct: "c",
    },
  ],
};
