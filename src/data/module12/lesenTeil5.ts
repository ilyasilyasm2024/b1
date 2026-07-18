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

export const module12LesenTeil5: LesenTeil5Data = {
  module: 12,
  part: "Lesen Teil 5",
  title: "Garantieleistung / Garantiebedingungen",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie informieren sich \u00fcber die Garantieleistungen und -bedingungen f\u00fcr einen PC, den Sie gekauft haben.",
  text: "Garantieleistung / Garantiebedingungen\n\nNachstehende Regelungen gelten f\u00fcr von uns gelieferte PC-Systeme.\n\nWird das Ger\u00e4t in der von Ihnen ausgew\u00e4hlten Garantiezeit (36 oder 60 Monate) ab Kaufdatum aufgrund von Fabrikations- oder Materialfehlern schadhaft, so beheben wir diesen Fehler ohne Berechnung durch Reparatur oder Umtausch. Alte Teile und Ger\u00e4te gehen in unser Eigentum \u00fcber. Das Ger\u00e4t wird zum Zwecke der Fehlerbeseitigung durch ein von uns beauftragtes Transportunternehmen kostenfrei abgeholt. Das System muss versandbereit verpackt sein. Verpackungsmaterial stellen wir zur Verf\u00fcgung. Die Abholung erfolgt werktags (Mo.\u2013Fr.) zwischen 8.00 Uhr und 18.00 Uhr.\n\nDie Garantie gilt nicht f\u00fcr:\na) Sch\u00e4den und Verluste, die durch das Ger\u00e4t oder seinen Gebrauch entstehen, sowie Sch\u00e4den durch \u00e4u\u00dfere Verh\u00e4ltnisse wie Fehler in der Installation, Brand, Blitzschlag, \u00e4u\u00dfere Gewalteinwirkung, Feuchtigkeit, Tabakrauch, Ablagen bildende Gase (z.B. Kunstnebel, Insektenspray) etc.\nb) Sch\u00e4den durch Eingriffe von Personen, die von uns hierzu nicht erm\u00e4chtigt sind.\nc) Sch\u00e4den durch Nichtbeachtung der Bedienungsanleitung, z.B. Anschluss an eine falsche Netzspannung oder Stromart, Sch\u00e4den durch fahrl\u00e4ssige Behandlung oder Missbrauch.\nd) Ger\u00e4te, die gewerblich genutzt werden.\n\nTritt ein Fehler auf, wenden Sie sich bitte innerhalb von 60 Monaten ab Kaufdatum an: 05 46 8738024 oder info@pc-service.com. Garantie g\u00fcltig in: Deutschland, \u00d6sterreich.",
  questions: [
    {
      id: 27,
      statement: "Die Garantie gilt nicht, wenn ...",
      options: {
        a: "man den Verlust des PCs zu sp\u00e4t bei der Firma meldet.",
        b: "der Schaden entstanden ist, weil man sich nicht an die Bedienungsanleitung gehalten hat.",
        c: "der PC \u00e4lter als ein Jahr ist.",
      },
      correct: "b",
    },
    {
      id: 28,
      statement: "Ger\u00e4te mit Fehlern ...",
      options: {
        a: "werden umsonst zur Reparatur abgeholt.",
        b: "m\u00fcssen vom K\u00e4ufer zum Verkaufsort gebracht werden.",
        c: "k\u00f6nnen zu bestimmten Zeiten am Verkaufsort abgegeben werden.",
      },
      correct: "a",
    },
    {
      id: 29,
      statement: "Wenn ein Fehler entsteht, ...",
      options: {
        a: "haben Kunden \u00fcberall auf der Welt ein Recht auf die Garantie.",
        b: "kann man bei der Firma anrufen oder eine E-Mail schreiben.",
        c: "muss man sich innerhalb von 30 Tagen bei der Firma melden.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Die Garantiezeit ...",
      options: {
        a: "betr\u00e4gt je nach Preis des PCs 36 oder 60 Monate.",
        b: "gilt f\u00fcr alle Sch\u00e4den des gekauften Ger\u00e4ts.",
        c: "kann der K\u00e4ufer ausw\u00e4hlen.",
      },
      correct: "c",
    },
  ],
};
