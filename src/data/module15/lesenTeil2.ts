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

export const module15LesenTeil2A: LesenTeil2Data = {
  module: 15,
  part: "Lesen Teil 2A",
  title: "Weihnachten in Deutschland",
  text: "F\u00fcr die meisten Deutschen ist Weihnachten das wichtigste Fest des Jahres. In einer Umfrage gaben 78 Prozent aller Deutschen an, sie w\u00fcrden Weihnachten am liebsten mit der Familie verbringen. Die gro\u00dfe Mehrheit legt Wert darauf, an den Feiertagen die Familie zu sehen und die gemeinsame Zeit zu genie\u00dfen. Die Umfrage zeigte auch, dass das Weihnachtsfest f\u00fcr die Deutschen nicht unbedingt mit teuren Geschenken verbunden sein muss. Zwar spielen Geschenke eine Rolle, doch viele der Befragten sagten, es gehe eher um das gegenseitige Beisammensein.\n\nDifferenziert zeigt sich das Bild bei den Fernsehgewohnheiten: W\u00e4hrend 73 Prozent gro\u00dfen Wert auf gemeinsames Essen legen, w\u00fcrden nur 42 Prozent der Befragten unbedingt eine der weihnachtlichen Fernsehreden sehen wollen. Die gleiche Meinung haben die Deutschen \u00fcber die Reden von Bundespr\u00e4sident und Papst, die jedes Jahr im Fernsehen laufen: Die Mehrheit sieht sich die Rede des Pr\u00e4sidenten zwar an, betrachtet sie aber nicht als festen Teil des Weihnachtsprogramms.",
  example: {
    id: 0,
    statement: "Die Mehrheit der Deutschen ...",
    options: {
      a: "sieht sich die Rede des Pr\u00e4sidenten an.",
      b: "h\u00f6rt lieber den Papst als den Pr\u00e4sidenten reden.",
      c: "m\u00f6chte zu Weihnachten keine Reden h\u00f6ren.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "wie die Deutschen gern an Weihnachten feiern.",
        b: "welche Weihnachtsgeschenke zurzeit beliebt sind.",
        c: "wer in Deutschland Weihnachten feiert.",
      },
      correct: "a",
    },
    {
      id: 8,
      statement: "Die meisten Deutschen ...",
      options: {
        a: "wollen zu Weihnachten Geschenke haben.",
        b: "m\u00f6chten auf jeden Fall die Familie sehen.",
        c: "gehen an Weihnachten zu Freunden.",
      },
      correct: "b",
    },
    {
      id: 9,
      statement: "Die Familie ...",
      options: {
        a: "geh\u00f6rt f\u00fcr die Deutschen beim Weihnachtsfest dazu.",
        b: "ist f\u00fcr die Deutschen immer sehr wichtig.",
        c: "feiert in Deutschland drei Tage lang Weihnachten.",
      },
      correct: "a",
    },
  ],
};

export const module15LesenTeil2B: LesenTeil2Data = {
  module: 15,
  part: "Lesen Teil 2B",
  title: "Eltern begleiten ihre Kinder an die Uni",
  text: "\u201eViele Studienanf\u00e4nger haben heute ein sehr enges Verh\u00e4ltnis zu ihren Familien. In dieser Hinsicht hat sich einiges ver\u00e4ndert\u201c, sagt die Professorin Martina Blasberg-Kuhnke von der Universit\u00e4t Osnabr\u00fcck. Wenn die Eltern ihre Kinder zum ersten Mal zu Unibeginn verabschieden, dann ist das ein emotionaler Moment f\u00fcr sie. M\u00f6gen die Kinder inzwischen auch vollj\u00e4hrig sein \u2013 das Entlassen ihrer Spr\u00f6sslinge ins Studentenleben f\u00e4llt Eltern zunehmend schwerer.\n\nAmerikanische Eltern nehmen sich zu Semesterbeginn nicht nur ein Zimmer in der N\u00e4he der Uni, um immer f\u00fcr ihre Kinder erreichbar zu sein. Manche besuchen sogar mit ihren jungen Studenten gemeinsam die ersten Vorlesungen. Mehrere SMS-Nachrichten pro Tag und t\u00e4gliche Anrufe per Skype sind ebenfalls normal.\n\nDass sich das Verh\u00e4ltnis von Studenten und ihren Eltern in den vergangenen Jahren gewandelt hat, beobachten auch Professoren in Deutschland. Auch an deutschen Unis gibt es nun f\u00fcr die Uni-Neulinge einen Eltern- oder Familientag, an dem die Eltern ihre Kinder offiziell an der Uni \u201eabgeben\u201c. Aber nicht nur Eltern und Studenten soll mit den Familien-Veranstaltungen entgegengekommen werden. Auch die Hochschulen selbst profitieren, denn das habe einen Werbeeffekt f\u00fcr die Uni. Gerade Eltern von mehreren Kindern seien interessiert an der Hochschule und der Stadt \u2013 und empfehlen sie oft an die j\u00fcngeren Geschwister weiter.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "wie Studenten ihre Eltern besuchen.",
      b: "wie sich das Verh\u00e4ltnis von Studenten und Eltern ver\u00e4ndert hat.",
      c: "warum Eltern nicht studieren d\u00fcrfen.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "was die Eltern den neuen Studenten vorhalten.",
        b: "wie ein \u201eElterntag\u201c an einer Uni ist.",
        c: "wie die Studenten gern feiern.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "In den USA ...",
      options: {
        a: "d\u00fcrfen Eltern mit ihren Kindern studieren.",
        b: "suchen die Eltern die Unis f\u00fcr die Kinder aus.",
        c: "halten viele Eltern engen Kontakt mit ihren studierenden Kindern.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Die Universit\u00e4ten ...",
      options: {
        a: "machen mit dem \u201eElterntag\u201c auch Werbung f\u00fcr sich.",
        b: "m\u00f6chten die Eltern der Studienanf\u00e4nger kennenlernen.",
        c: "bekommen Geld von den Eltern.",
      },
      correct: "a",
    },
  ],
};
