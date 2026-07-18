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

export const module13LesenTeil1: LesenTeil1Data = {
  module: 13,
  part: "Lesen Teil 1",
  title: "Forum: Werbetricks",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Ich m\u00f6chte auch von meiner Erfahrung mit Werbetricks berichten. Meine Freundin und ich haben uns schon immer f\u00fcr eine ausgewogene Ern\u00e4hrungsweise interessiert. Deswegen a\u00dfen wir zum Fr\u00fchst\u00fcck gern und oft Getreideflocken der Marke \u201eFit\u201c mit Milch oder Joghurt. Ab und zu gab es sie bei uns sogar zu Abend.\n\nNicht nur versprachen sie dem Werbetext zufolge einen hohen Anteil an Vollkorn, sondern auch \u201eeinen leichten Genuss f\u00fcr die Linie\u201c, da wenig Fett und Zucker darin enthalten seien. Gutgl\u00e4ubig, wie wir nun mal waren, konsumierten wir immer mehr von dem Produkt und meinten, etwas Gutes f\u00fcr unseren K\u00f6rper zu tun.\n\nNach einiger Zeit stellten wir allerdings fest, dass wir beide zugenommen hatten. Wir f\u00fchrten dies anfangs auf einen Mangel an Bewegung zur\u00fcck. Meine Partnerin und ich sind n\u00e4mlich beide voll berufst\u00e4tig und verbringen viele Stunden im B\u00fcro. Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben. Doch das f\u00fchrte auf die Dauer nicht zum erw\u00fcnschten Ergebnis. Wir waren zwar k\u00f6rperlich fitter, aber abgenommen hatte keiner von uns.\n\nDa stie\u00df ich zuf\u00e4llig im Internet auf eine Website zum Thema Werbetricks. Und siehe da: Unsere \u201egesunden\u201c Fit-Cerealien waren dort ein Paradebeispiel daf\u00fcr, wie durch falsche Informationen die Konsumenten zum Kauf eines Produkts verlockt werden. Ich erfuhr, dass die meisten Cornflakes viel zu viel Zucker enthalten. Bei der Marke unserer Wahl waren es ganze 35 %. Ich holte schnell die Fit-Packung aus der K\u00fcche und las tats\u00e4chlich: 35 Gramm Zucker pro 100 Gramm. Und die t\u00e4gliche Verzehrsempfehlung: 40 Gramm! Wer wird davon eigentlich satt? Ich konnte den Vormittag danach ohne Magenknurren nicht \u00fcberstehen. Wir haben immer mindestens die doppelte Menge gegessen.\n\nUnd was das Vollkorn betrifft, ist auch alles Schwindel. 20 Prozent Vollkornanteil ist kein echtes Vollkornprodukt. In Vollkornbrot beispielsweise m\u00fcssen mindestens 90 Prozent Vollkorn stecken. Kein Wunder also, dass wir zugenommen haben, obwohl wir dachten, uns leicht und gesund zu ern\u00e4hren.\n\nSeitdem essen wir zum Fr\u00fchst\u00fcck eine Scheibe Vollkornbrot mit Margarine, K\u00e4se und Marmelade. Das kommt auf deutlich weniger Zucker pro 100 Gramm, trotz Marmelade. Und wir haben auch schon etwas abgenommen.\n\nBernd Geissner",
  example: {
    id: 0,
    statement: "Bernd und seine Freundin a\u00dfen ab und zu zum Fr\u00fchst\u00fcck \u201eFit\u201c-Flocken.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement: "\u201eFit\u201c-Flocken hielt Bernd f\u00fcr gesund.",
      correct: "richtig",
    },
    {
      id: 2,
      statement:
        "Obwohl Bernd viele Stunden arbeitete, fand er t\u00e4glich Zeit f\u00fcr Fitness\u00fcbungen.",
      correct: "falsch",
    },
    {
      id: 3,
      statement:
        "Die \u201eFit\u201c-Flocken werden fast ausschlie\u00dflich aus Zucker hergestellt.",
      correct: "falsch",
    },
    {
      id: 4,
      statement: "Auf der \u201eFit\u201c-Packung stehen nur L\u00fcgen.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "Bernd nahm zu, da er zu viel von den Flocken a\u00df.",
      correct: "richtig",
    },
    {
      id: 6,
      statement: "Die \u201eFit\u201c-Flocken sind eigentlich kein Vollkornprodukt.",
      correct: "richtig",
    },
  ],
};
