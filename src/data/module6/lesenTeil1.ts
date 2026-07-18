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

export const module6LesenTeil1: LesenTeil1Data = {
  module: 6,
  part: "Lesen Teil 1",
  title: "AloisBlog.at",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Ich m\u00f6chte heute von meinem gestrigen Erlebnis berichten, das mich sehr beeindruckt hat. Vor ein paar Tagen lernte ich eine \u00e4ltere Dame, Frau Mohlau, in der Stra\u00dfenbahn kennen. Ich bot ihr meinen Sitzplatz an und so kamen wir ins Gespr\u00e4ch. Es stellte sich heraus, dass sie an derselben Station ausstieg wie ich. Sie wohnt n\u00e4mlich, seit sie in Pension gegangen ist, im Generationen-Wohnheim bei uns in der N\u00e4he. Beim Abschied lud sie mich mit Familie zum Kaffeetrinken zu sich ein.\n\nGestern bin ich also mit Gertrud und den Buben hin. Frau Mohlau wohnt in einem geschmackvoll eingerichteten Appartement im Parterre. In den Wohnungen nebenan leben zwei Lehrlinge und eine alleinerziehende Mutter. Zum Kaffee gab es selbstgemachte Topfentorte. Wir sa\u00dfen gem\u00fctlich beisammen und sie erz\u00e4hlte uns vom Leben im Wohnheim. Frau Mohlau traf die Entscheidung, dorthin zu ziehen, weil sie hier betreut wird, wenn sie es braucht, ohne ihre Selbstst\u00e4ndigkeit aufgeben zu m\u00fcssen. Doch der gr\u00f6\u00dfte Vorteil ist zweifellos das Zusammenleben der verschiedenen Generationen. Ein Beispiel hierzu: Da Frau Mohlau noch gesundheitlich gut drauf ist und viel Zeit zur Verf\u00fcgung hat, passt sie zweimal die Woche auf das Kind ihrer Nachbarin auf. Das sei ihr keineswegs zu anstrengend, es mache ihr gro\u00dfe Freude, \u201eGro\u00dfmutter\u201c zu sein. So sei sie n\u00fctzlich und das gebe ihrem Leben Sinn.\n\nNach dem Kaffeetrinken schauten wir uns dann ein wenig die Anlage an. Den Buben gefiel besonders der Garten mit dem Spielplatz im hinteren Teil des Wohnheims. Es waren auch andere Kinder da, mit denen sie herumtollen konnten, w\u00e4hrend wir auf einer Bank sa\u00dfen. Frau Mohlau erz\u00e4hlte uns, dass das Zusammenleben hier nicht nur in den gemeinschaftlich genutzten R\u00e4umen und Gr\u00fcnfl\u00e4chen stattfindet. Regelm\u00e4\u00dfig werden auch gemeinsame Ausfl\u00fcge organisiert. Der letzte ging ins Burgenland. Sie selbst nimmt zurzeit an einer Kochgruppe teil, wo Jung und Alt voneinander lernen.\n\nIch hatte den Eindruck, eine sehr lebensfrohe, aktive Frau vor mir zu haben, die gar nicht meiner bisherigen Vorstellung von \u201ealt\u201c entsprach. Liegt das an der Wohnform??\n\nAm Sonntag kommt Frau Mohlau zum Mittagessen zu uns. Wir freuen uns alle schon drauf.\n\nEuer Alois",
  example: {
    id: 0,
    statement: "Alois lernte Frau Mohlau gestern kennen.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement: "Frau Mohlau wohnt nicht weit von Alois entfernt.",
      correct: "richtig",
    },
    {
      id: 2,
      statement: "In Frau Mohlaus Wohnung wohnt auch eine Mutter mit ihrem Kind.",
      correct: "falsch",
    },
    {
      id: 3,
      statement:
        "Das Generationen-Wohnheim erm\u00f6glicht der Dame, selbstst\u00e4ndig zu leben.",
      correct: "richtig",
    },
    {
      id: 4,
      statement:
        "Frau Mohlau k\u00fcmmert sich regelm\u00e4\u00dfig um das Kind ihrer Nachbarin.",
      correct: "richtig",
    },
    {
      id: 5,
      statement: "Den Spielplatz des Wohnheimes benutzen nur seine Bewohner.",
      correct: "falsch",
    },
    {
      id: 6,
      statement: "Frau Mohlau nahm an einem Ausflug ins Burgenland teil.",
      correct: "falsch",
    },
  ],
};
