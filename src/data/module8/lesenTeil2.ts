export interface LesenTeil2Question {
  id: number;
  statement: string;
  options: { a: string; b: string; c: string };
  correct: "a" | "b" | "c";
}

export interface LesenTeil2Data {
  module: number;
  part: string;
  title: string;
  text: string;
  example: LesenTeil2Question;
  questions: LesenTeil2Question[];
}

export const module8LesenTeil2A: LesenTeil2Data = {
  module: 8,
  part: "Lesen Teil 2A",
  title: "Regeln der Freundschaft",
  text: "Das soziale Medium Facebook \u00e4ndert die Regeln der Kommunikation und der Freundschaft. Allein in Deutschland will Facebook 20 Millionen aktive Nutzer haben: Eine Generation w\u00e4chst mit der Plattform auf. Auch in den Lehrerzimmern sitzen technikbegeisterte P\u00e4dagogen, die sich mit Facebook besch\u00e4ftigen. Es ist sicher, dass sich Lehrer und Sch\u00fcler nicht nur in der Schule, sondern auch in Facebook treffen. Das wirft neue Fragen auf: Wie wollen Sch\u00fcler und Lehrer im Netz miteinander umgehen? D\u00fcrfen sie sich virtuell befreunden? D\u00fcrfen Lehrer erfahren, was ihre Sch\u00fcler in ihrer Freizeit in dem sozialen Netzwerk ver\u00f6ffentlichen? Und wie ist es umgekehrt? Dazu gibt es bisher kaum Empfehlungen.\n\nEine Hauptschule in Hamm (Nordrhein-Westfalen) hat Regeln f\u00fcr die Facebook-Nutzung ihrer Lehrer festgelegt. Wenn ein Lehrer der Schule mit seinen Sch\u00fclern interagiert, muss er daf\u00fcr ein zweites Profil anlegen. Nicht jeder im Kollegium ist damit gl\u00fccklich, denn das ist umst\u00e4ndlich und zeitaufwendig. Woanders haben manche Lehrer selbst entschieden, dass sie Facebook nur als Kommunikations- und Unterhaltungsmedium benutzen, nicht um private Probleme zu diskutieren. So k\u00f6nnen auch Sch\u00fcler die neutralen Inhalte des Lehrerprofils lesen. Lehrer sind sich einig dar\u00fcber, dass sich Facebook besonders eignet, um mit Sch\u00fclern, die die Schule abgeschlossen haben, in Kontakt zu bleiben.",
  example: {
    id: 0,
    statement: "Facebook ...",
    options: {
      a: "ver\u00e4ndert Freundschaften.",
      b: "wird auch von Lehrern genutzt.",
      c: "verschlechtert den sozialen Kontakt.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "Verhaltensregeln zwischen Freunden.",
        b: "die Kommunikation in sozialen Medien.",
        c: "die Kommunikation zwischen Sch\u00fclern und Lehrern auf Facebook.",
      },
      correct: "c",
    },
    {
      id: 8,
      statement: "Manche Lehrer ...",
      options: {
        a: "finden Facebook anstrengend.",
        b: "wollen auf Facebook keine pers\u00f6nlichen Probleme diskutieren.",
        c: "wollen mehr \u00fcber die Freizeitaktivit\u00e4ten der Sch\u00fcler wissen.",
      },
      correct: "b",
    },
    {
      id: 9,
      statement: "Eine Schule in Hamm ...",
      options: {
        a: "hat Vorschriften f\u00fcr die Facebook-Kommunikation der Lehrer gemacht.",
        b: "verbietet den Lehrern, Facebook zu benutzen.",
        c: "erlaubt nur ein Facebook-Profil pro Lehrer.",
      },
      correct: "a",
    },
  ],
};

export const module8LesenTeil2B: LesenTeil2Data = {
  module: 8,
  part: "Lesen Teil 2B",
  title: "Gesund mit dem ROBO-DOKTOR",
  text: "Nao, ein neuer Roboter aus Frankreich, kann weder die Stirn runzeln noch l\u00e4cheln oder Grimassen schneiden, denn er hat ein Gesicht aus Plastik. Aber Nao kann Menschen wiedererkennen, mit denen er schon mal zu tun hatte. Au\u00dferdem merkt er, wie ihre Stimmung ist, und reagiert darauf. Wenn er zum Beispiel angel\u00e4chelt wird, hebt er den Kopf und breitet die Arme aus: ein Zeichen f\u00fcr Freude. Der Roboter kann sich recht gut bewegen. Es f\u00e4llt ihm auch nicht schwer, etwas vom Boden aufzuheben und wegzuschmei\u00dfen, so gelenkig ist er.\n\nWissenschaftler haben den Roboter weiterentwickelt, um ihn in Spit\u00e4lern einzusetzen \u2013 als Robo-Doktor. Die Forscher glauben, dass Nao kranke Kinder aufmuntern kann, weil viele Kinder einen Roboter als Spielzeug sehen, etwas Sch\u00f6nes zur Unterhaltung, vor dem sie keine Angst haben. Nao soll au\u00dferdem den Kindern die Behandlung ihrer Krankheit erkl\u00e4ren, denn sprechen kann er sogar gut und geduldig ist er auch. Eine andere seiner Aufgaben ist, den kranken Kleinen die Angst vor Operationen zu nehmen. Der neue Robo-Doktor ist nur 58 cm gro\u00df und wiegt gerade mal 5,2 kg. Seine Ma\u00dfe sind f\u00fcr die kleinen Patienten angenehm, sie erinnern sie an ein \u00fcbergro\u00dfes Stofftier.",
  example: {
    id: 0,
    statement: "In diesem Text geht es um ...",
    options: {
      a: "einen Roboter, der l\u00e4cheln kann.",
      b: "die Therapie kranker Kinder.",
      c: "einen Roboter, der im Spital benutzt werden soll.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 10,
      statement: "Nao kann ...",
      options: {
        a: "mit Menschen sprechen.",
        b: "ein Kind gesund machen.",
        c: "mit Kindern spielen.",
      },
      correct: "a",
    },
    {
      id: 11,
      statement: "Die kranken Kinder ...",
      options: {
        a: "sehen in Nao ein Spielzeug, vor dem sie keine Angst haben.",
        b: "haben Angst vor dem Roboter.",
        c: "lieben Stofftiere.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Der Robo-Doktor ...",
      options: {
        a: "ist so gro\u00df wie ein Kind.",
        b: "erinnert die Kinder an ein gro\u00dfes Stofftier.",
        c: "kann Operationen durchf\u00fchren.",
      },
      correct: "b",
    },
  ],
};
