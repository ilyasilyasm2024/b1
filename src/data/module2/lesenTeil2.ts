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

export const module2LesenTeil2A: LesenTeil2Data = {
  module: 2,
  part: "Lesen Teil 2A",
  title: "Japaner als beste Touristen",
  text: `Eine internationale Studie, bei der tausend Hotelmanager befragt wurden, hat gezeigt, dass Japaner die beliebtesten Touristen auf der ganzen Welt sind. Um diesen ersten Platz zu gewinnen, muss man als Tourist höflich und freundlich sein sowie Trinkgeld geben. Es hilft auch, wenn man sich bemüht, die Landessprache ein bisschen zu sprechen. Offensichtlich erfüllen die Japaner all diese Voraussetzungen. Als Volk reisen sie viel, gern und weit. Fast jeder Hotelier eines großen Hauses hatte schon einmal japanische Gäste.

Außerdem stellte sich bei der Studie heraus, dass deutsche Touristen für ihre Sauberkeit gelobt wurden und viele Berufstätige im Tourismusbereich sich über die lauten Gäste aus Südeuropa beschwerten. Besonders bemerkt wurde auch, dass Amerikaner und Deutsche sich oft geschmacklos kleideten. Als klassisches Beispiel für diese Angewohnheit der Deutschen wurde erwähnt, dass sie auch im Hochsommer zu Sommerschuhen weiße Socken tragen. Mit dieser nationalen Besonderheit können sie leicht von anderen Touristen unterschieden werden. Ganz im Gegensatz dazu die Österreicher. Sie machen nämlich nicht besonders auf sich aufmerksam, weder positiv noch negativ. Hätte sie einfach als Nation mit intensivem Tourismus aus den Fehlern der anderen gelernt? Das wissen wir nicht.`,
  example: {
    id: 0,
    statement: "Hotelmanager wurden gefragt, ...",
    options: {
      a: "wohin sie am liebsten reisen.",
      b: "welche Touristen sie am sympathischsten finden.",
      c: "wo sie gern arbeiten würden.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "was für Touristen in verschiedenen Ländern typisch ist.",
        b: "warum die Japaner gern reisen.",
        c: "welche Sprache man als Tourist lernen sollte.",
      },
      correct: "a",
    },
    {
      id: 8,
      statement: "Die Deutschen erkennt man ...",
      options: {
        a: "an ihrer amerikanischen Kleidung.",
        b: "an ihren Sommerschuhen.",
        c: "an der Kombination von Socken und Sommerschuhen.",
      },
      correct: "c",
    },
    {
      id: 9,
      statement: "Österreicher ...",
      options: {
        a: "sind bei Hotelmanagern beliebter als Deutsche und Amerikaner.",
        b: "machen keinen besonderen Eindruck auf die Hotelmanager.",
        c: "haben das Reisen besser gelernt.",
      },
      correct: "b",
    },
  ],
};

export const module2LesenTeil2B: LesenTeil2Data = {
  module: 2,
  part: "Lesen Teil 2B",
  title: "Neugierige Mädchen",
  text: `Mädchen und Technik? Interessieren sich Mädchen überhaupt dafür? Diese Frage lässt sich nur bejahen, denn schon seit 9 Jahren wird für Mädchen ab Klasse 5 der „Girl's Day" durchgeführt. Dieser Tag stößt bei ihnen auf großes Interesse. Der „Girl's Day" ist dazu gedacht, dass Mädchen für einen Tag in verschiedene Firmen gehen können, um sich dort Berufe anzuschauen, in denen typische „Jungenfächer" wie Naturwissenschaften, Technik oder Informatik wichtig sind. Ziel ist, dass die Schülerinnen herausfinden können, ob sie vielleicht später als Ingenieurin, Physikerin oder Programmiererin arbeiten wollen. Immer noch ist die Realität, dass in Deutschland viel weniger Mädchen als Jungen diese Berufe wählen.

Gerade in diesen Bereichen wird nach guten Fachleuten gesucht, also auch nach Frauen, die sich mit Technik auskennen und diese Ausbildung gewählt haben.

Um sich über das Programm zu informieren, wurde eine Internetseite eingerichtet, sie lautet: www.girls-day.de. Dort findet man Informationen zu den Unternehmen, die sich an der Aktion beteiligen, Arbeitskreise dazu, Erfahrungsberichte und vieles mehr. Auf einer Deutschlandkarte kann man sehen, wo es Aktionen für den „Mädchen-Zukunftstag" gibt, wie dieser Tag auch genannt wird.`,
  example: {
    id: 0,
    statement: "In diesem Text steht, dass ...",
    options: {
      a: "Mädchen in technischen Fächern besser als Jungen sind.",
      b: "es in Deutschland gute Ingenieurinnen gibt.",
      c: 'der \u201EGirl\u2019s Day\u201C Sch\u00FClerinnen mit technischen Berufen bekannt machen will.',
    },
    correct: "c",
  },
  questions: [
    {
      id: 10,
      statement: 'Auf der Internetseite von \u201EGirl\u2019s Day\u201C ...',
      options: {
        a: "kann man sich über Einzelheiten dieses Tages informieren.",
        b: "gibt es Informationen zum Studium technischer Fächer.",
        c: "werden Arbeitsstellen angeboten.",
      },
      correct: "a",
    },
    {
      id: 11,
      statement: "In Deutschland ...",
      options: {
        a: "studieren viele Mädchen technische Fächer.",
        b: "braucht man mehr Menschen mit technischer Berufsausbildung.",
        c: 'möchte man, dass Jungen und Mädchen beim \u201EGirl\u2019s Day\u201C mitmachen.',
      },
      correct: "b",
    },
    {
      id: 12,
      statement: 'Der \u201EGirl\u2019s Day\u201C ...',
      options: {
        a: "findet nur in großen Städten statt.",
        b: "wird von den Schulen organisiert.",
        c: "existiert schon seit mehreren Jahren.",
      },
      correct: "c",
    },
  ],
};
