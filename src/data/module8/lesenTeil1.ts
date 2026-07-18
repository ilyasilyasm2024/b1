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

export const module8LesenTeil1: LesenTeil1Data = {
  module: 8,
  part: "Lesen Teil 1",
  title: "AloisBlog.at \u2013 Job-Coaching",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Servus, Blogfans!\n\nWeil viele von euch vor dem Problem der Jobsuche stehen, interessiert euch sicherlich, was mein Freund Herbert dar\u00fcber zu berichten hat. Herbert ist leicht gehbehindert und nahm an einem Job-Coaching-Projekt teil.\n\n\u201eMein Name ist Herbert Ziegler, ich bin 24 Jahre alt und wohne in Innsbruck. Nach dem Hauptschulabschluss versuchte ich mich in einigen Lehrstellen, alle drei Lehrlingsverh\u00e4ltnisse wurden aber aufgel\u00f6st.\n\nIn das Job-Coaching kam ich vor 18 Monaten. Nach einigen Gespr\u00e4chen lernte ich meinen jetzigen Job-Coach kennen. Ich startete mit einem Schnupperpraktikum in einer Werkstatt f\u00fcr Fahrr\u00e4der. Das war mein Wunsch, denn ich hatte ein Interesse an einem Arbeitsplatz in Richtung Reparatur oder Mechanik. Nach diesen drei Wochen war ich aber nicht mehr \u00fcberzeugt, dass ich in diesem Bereich arbeiten wollte. Ich war in dieser Zeit sehr verunsichert, aber mein Job-Coach und ich sa\u00dfen in vielen Gespr\u00e4chen zusammen und er motivierte mich, neue Arbeitsgebiete auszuprobieren. Schlie\u00dflich begann ich ein Schnupperpraktikum in einem Veranstaltungshaus als Hausmeisterhilfskraft. Ich wurde zur Unterst\u00fctzung des Hausmeisters Markus gebraucht.\n\nIn einem Veranstaltungshaus geht die Arbeit nie aus. Die abwechslungsreichen T\u00e4tigkeiten haben mir gut gefallen, alle Angestellten im Haus waren sehr freundlich zu mir. Im Anschluss an das Praktikum sa\u00dfen Markus, die Hausleitung Manuela, mein Job-Coach und ich zusammen und besprachen die Schnupperzeit und ich wurde eingestellt.\n\nZusammen haben wir meine Arbeitsauftr\u00e4ge ganz genau beschrieben und einige Ziele vereinbart, die wir bis Ende des ersten Arbeitsjahres erreichen wollen. Ich m\u00f6chte zum Beispiel bis dahin die komplizierte Heiztechnik im Keller so weit kennenlernen, dass ich auch ohne die direkte Hilfe von Markus kleinere Probleme weitgehend selbstst\u00e4ndig l\u00f6sen kann.\n\nDie Arbeit im Ganzen ist nicht immer einfach, manchmal auch richtig stressig. Aber mit Unterst\u00fctzung von Markus und dem Job-Coach lerne ich, diese kritischen Situationen immer besser zu bew\u00e4ltigen.\n\nMeine jetzige Arbeit gef\u00e4llt mir sehr gut, besonders die technischen Aufgaben interessieren mich und ich will in diesem Bereich noch viel lernen und weiterkommen. Wichtig ist mir auch das geregelte Einkommen, denn mit dem verdienten Geld kann ich mir endlich einige meiner W\u00fcnsche erf\u00fcllen.\u201c\n\nPrima Idee, das Job-Coaching, oder?\n\nEuer Alois",
  example: {
    id: 0,
    statement: "Alois ist mit Herbert verwandt.",
    correct: "falsch",
  },
  questions: [
    {
      id: 1,
      statement:
        "Herberts erste Versuche, eine Ausbildung zu machen, hatten keinen Erfolg.",
      correct: "richtig",
    },
    {
      id: 2,
      statement:
        "Herbert machte ein Praktikum in einer Fahrradwerkstatt, da er gern Rad f\u00e4hrt.",
      correct: "falsch",
    },
    {
      id: 3,
      statement:
        "Nach dem Praktikum im Veranstaltungshaus bekam Herbert eine Arbeitsstelle.",
      correct: "richtig",
    },
    {
      id: 4,
      statement:
        "Die Aufgaben, die Herbert erledigen muss, sind ziemlich leicht.",
      correct: "falsch",
    },
    {
      id: 5,
      statement: "Die Arbeit im Veranstaltungshaus findet Herbert interessant.",
      correct: "richtig",
    },
    {
      id: 6,
      statement: "Der Lohn spielt f\u00fcr Herbert eine geringe Rolle.",
      correct: "falsch",
    },
  ],
};
