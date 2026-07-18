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

export const module9LesenTeil2A: LesenTeil2Data = {
  module: 9,
  part: "Lesen Teil 2A",
  title: "Im Labyrinth der Buchstaben",
  text: "Vier Millionen Menschen in Deutschland k\u00f6nnen diesen Text nicht richtig lesen, weil sie Analphabeten sind. Sie sind arm, isoliert und von anderen abh\u00e4ngig. Wirtschaftliche Sch\u00e4den in Milliardenh\u00f6he sind die Folgen. Denn wer nicht lesen und schreiben kann, ist eher arbeitslos. Er zahlt also keine Steuern und bezieht Sozialleistungen.\n\nWenn Analphabeten einen Job finden, dann meist einen schlecht bezahlten. Doch das Angebot in diesem Bereich wird immer kleiner. Einfache Arbeitspl\u00e4tze werden wegrationalisiert und mit Robotern besetzt. Schreiben und Lesen ist mittlerweile auch bei einfachen Jobs n\u00f6tig. Formulare m\u00fcssen ausgef\u00fcllt, Rechnungen geschrieben, Arbeitsabl\u00e4ufe dokumentiert und Sicherheits- oder Arbeitsanweisungen gelesen werden.\n\nWer es schafft, trotz der Lese- und Schreibschw\u00e4che das Internet zu benutzen, kann dort spezielle Lern-Seiten besuchen. Etwa 250.000 Menschen nutzen ein Online-Lernportal des Deutschen Volkshochschul-Verbandes, wo sie sich per Bild und Ton die Buchstaben erschlie\u00dfen k\u00f6nnen. F\u00fcr Fortgeschrittene gibt es ein soziales Netzwerk namens \u201eAlpha VZ\u201c. Hier k\u00f6nnen Analphabeten \u00e4hnlich wie auf Facebook Kontakt kn\u00fcpfen.\n\nMehr als 3000 Lese- und Schreibkurse pro Jahr bieten zudem die Volkshochschulen an. Doch zu wenige Analphabeten nehmen daran teil. Auch wegen des Geldes: Zwei Unterrichtsstunden kosten bis zu f\u00fcnf Euro \u2013 das ist f\u00fcr viele der oft arbeitslosen Analphabeten zu teuer.",
  example: {
    id: 0,
    statement: "Im Netzwerk \u201eAlpha VZ\u201c ...",
    options: {
      a: "kann man lesen lernen.",
      b: "kann man sich \u00fcber Facebook informieren.",
      c: "lernen sich Analphabeten kennen.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "die Situation von Analphabeten.",
        b: "die Kurse der Volkshochschule.",
        c: "die Gr\u00fcnde f\u00fcr Analphabetismus.",
      },
      correct: "a",
    },
    {
      id: 8,
      statement: "Analphabeten ...",
      options: {
        a: "werden immer schlecht bezahlt.",
        b: "m\u00fcssen die Arbeit von Robotern machen.",
        c: "finden nicht so leicht einen Arbeitsplatz.",
      },
      correct: "c",
    },
    {
      id: 9,
      statement: "\u00dcber das Online-Lernportal ...",
      options: {
        a: "kann man auch als Analphabet bequem surfen.",
        b: "gibt es 250.000 Menschen, die nicht lesen k\u00f6nnen.",
        c: "gibt es die M\u00f6glichkeit, lesen und schreiben zu lernen.",
      },
      correct: "c",
    },
  ],
};

export const module9LesenTeil2B: LesenTeil2Data = {
  module: 9,
  part: "Lesen Teil 2B",
  title: "Kino-Ninjas",
  text: "Viele Cineasten haben unter r\u00fccksichtslosen Kinog\u00e4ngern zu leiden, die sich w\u00e4hrend Filmvorf\u00fchrungen st\u00e4ndig lauthals unterhalten, ungefragt Szenen kommentieren \u2013 oder Pointen vorwegnehmen \u2013 und l\u00e4ssig SMS checken und beantworten.\n\nDas Prince Charles Cinema am Leicester Square in London hat jetzt eine eigenwillige Ma\u00dfnahme gegen diese Kino-Ruhest\u00f6rer eingef\u00fchrt, die nicht nur filmreif klingt, sondern ein wahrer Segen f\u00fcr leidgeplagte Filmfans sein d\u00fcrfte: Freiwillige verkleiden sich als Kino-\u201eNinjas\u201c in hautengen, pechschwarzen Ganzk\u00f6rperanz\u00fcgen und beobachten die Zuschauer w\u00e4hrend der Vorf\u00fchrungen. Im Dunkel des Kinosaals sind sie praktisch unsichtbar \u2013 doch fallen ihnen St\u00f6renfriede auf, schleichen sich die Ninjas blitzschnell durch die Sitzreihen und weisen die Miset\u00e4ter zurecht \u2013 allerdings sprechen sie nur. Von Wurfsternen oder Handkantenschl\u00e4gen echter Ninjas machen die Kinow\u00e4chter nicht Gebrauch.\n\nDie Idee f\u00fcr diese ungew\u00f6hnliche Taskforce \u2013 bei der ehrenamtliche Kinobesucher im Austausch f\u00fcr freien Eintritt aktiv werden \u2013 hatte Gregor Lawson, Mitbegr\u00fcnder von \u201eMorphsuits\u201c, dem Hersteller der hautengen Ninja-\u201eArbeitskleidung\u201c. Er \u00e4rgerte sich immer wieder \u00fcber telefonierende G\u00e4ste und SMS-Junkies im Kino. Als er selbst aber einmal einen Anruf im Kino annahm, warnten ihn zwei Kinog\u00e4ste aus der Schweiz leise, doch endlich ruhig zu sein. Er bekam erst Angst, gab den Leuten dann aber recht. Und so erfand er die Kino-Ninjas.",
  example: {
    id: 0,
    statement: "In diesem Text geht es um ...",
    options: {
      a: "einen neuen japanischen Film.",
      b: "eine Aktion in einem englischen Kino.",
      c: "einen Sicherheitsservice in Kinos.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es um ...",
      options: {
        a: "einen neuen japanischen Film.",
        b: "eine Aktion in einem englischen Kino.",
        c: "einen Sicherheitsservice in Kinos.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Die Kino-Ninjas ...",
      options: {
        a: "bekommen f\u00fcr ihre Arbeit Freikarten f\u00fcr das Kino.",
        b: "wollen Kinobesucher erschrecken.",
        c: "schicken st\u00f6renden Besuchern eine SMS.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Gregor Lawson ...",
      options: {
        a: "spricht oft am Handy, wenn er im Kino ist.",
        b: "ist auch ein Kino-Ninja.",
        c: "bekam seine Idee durch einen eigenen Kinobesuch.",
      },
      correct: "c",
    },
  ],
};
