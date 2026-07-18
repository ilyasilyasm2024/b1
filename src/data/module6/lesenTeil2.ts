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

export const module6LesenTeil2A: LesenTeil2Data = {
  module: 6,
  part: "Lesen Teil 2A",
  title: "Die beliebtesten Sehensw\u00fcrdigkeiten der Deutschen",
  text: "Der K\u00f6lner Dom bleibt nach wie vor die beliebteste Sehensw\u00fcrdigkeit der Deutschen. Das ist das Ergebnis einer Online-Umfrage des Deutschen Tourismusverbandes und des St\u00e4dteportals meinestadt.de. In der Umfrage unter 1600 Internetnutzern konnte Deutschlands gr\u00f6\u00dfte Kirche mit 15 Prozent der Stimmen bereits zum vierten Mal diesen Platz klar halten.\n\nAuf Platz zwei verbesserte sich die Dresdner Frauenkirche mit 7,1 Prozent, das Brandenburger Tor in der Hauptstadt sank mit 6,6 Prozent um einen Rang auf Platz drei. Auf Platz vier und f\u00fcnf im Ranking folgen Schloss Neuschwanstein und der Dresdner Zwinger. Erstmals in den Top 15 der beliebtesten Sehensw\u00fcrdigkeiten sind drei Attraktionen: Die Zeche Zollverein (Essen) kommt im Jahr der Kulturhauptstadt 2010 auf Platz zw\u00f6lf, die Residenz W\u00fcrzburg und das Schweriner Schloss teilen sich Platz 14. Nach vier Jahren landeten die Wuppertaler Schwebebahn (Platz sieben) und der Berliner Reichstag (Platz neun) erneut in den Top 15.\n\nSehensw\u00fcrdigkeiten stehen bei den Deutschen allgemein hoch im Kurs: 82 Prozent der Umfrageteilnehmer best\u00e4tigten gro\u00dfes Interesse an touristischen und kulturellen Attraktionen. Dabei assoziieren sie vor allem historische Denkm\u00e4ler, imposante Schl\u00f6sser sowie Burgen und Kirchen. 90 Prozent der Befragten haben ihre Lieblingsattraktion bereits einmal besucht.",
  example: {
    id: 0,
    statement: "Die Deutschen ...",
    options: {
      a: "sehen sich gern touristische Attraktionen an.",
      b: "interessieren sich relativ wenig f\u00fcr Kultur.",
      c: "leben besonders in St\u00e4dten mit Sehensw\u00fcrdigkeiten.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "welche Sehensw\u00fcrdigkeiten es in Deutschland gibt.",
        b: "welche deutschen Sehensw\u00fcrdigkeiten die Deutschen am meisten m\u00f6gen.",
        c: "welche Sehensw\u00fcrdigkeiten Touristen in Deutschland unbedingt besichtigen sollten.",
      },
      correct: "b",
    },
    {
      id: 8,
      statement: "Der K\u00f6lner Dom ...",
      options: {
        a: "ist schon mehrere Jahre lang die beliebteste Sehensw\u00fcrdigkeit Deutschlands.",
        b: "war bei 1600 Befragten auf Platz eins.",
        c: "war 15 % der Befragten bekannt.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "Berlin ...",
      options: {
        a: "hat keine beliebten Sehensw\u00fcrdigkeiten.",
        b: "wurde zur beliebtesten kulturellen Stadt Deutschlands gew\u00e4hlt.",
        c: "hat zwei Sehensw\u00fcrdigkeiten unter den Top 15.",
      },
      correct: "c",
    },
  ],
};

export const module6LesenTeil2B: LesenTeil2Data = {
  module: 6,
  part: "Lesen Teil 2B",
  title: "Johnny, der Paukerschreck",
  text: "\u201eWir sind ein Haufen angehender junger Piraten und haben Probleme bei einem Streit mit den Lehrern. Wir finden es ganz toll, wenn Sie kommen und uns helfen k\u00f6nnten!\u201c Mit diesen Worten wandte sich eine Sch\u00fclerin aus dem Londoner Stadtteil Greenwich an Johnny Depp. Als gro\u00dfer Fan seiner Piratenfilme \u201eFluch der Karibik\u201c bat die neunj\u00e4hrige Beatrice Chappell Jack Sparrow, Depps Alter Ego aus den Filmen, um Verst\u00e4rkung. Mit ihren Mitsch\u00fclern plante sie eine \u201eMeuterei\u201c, also einen Piraten-Streik, damit m\u00f6glichst viele Unterrichtsstunden nicht stattfinden w\u00fcrden.\n\nSie konnte ihr Gl\u00fcck kaum glauben, als ihr Wunsch tats\u00e4chlich in Erf\u00fcllung ging: Als Kapit\u00e4n Jack Sparrow erschien der Hollywood-Star in der Londoner Grundschule und sang und tanzte mit vier Schauspielkollegen zu Piratenliedern. Zuvor begr\u00fc\u00dften die Sch\u00fcler den Star mit gro\u00dfem Applaus und ihrem eigenen Song, hei\u00dft es auf der Webseite der Schule.\n\nZu der geplanten Meuterei kam es am Ende dann doch nicht \u2013 vielmehr zu ihrem Widerstand. Der Schauspieler sorgte f\u00fcr so viel Aufregung, dass ein normaler Schulunterricht an dem Tag unm\u00f6glich wurde.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "dass Johnny Depp in einem Piratenfilm mitgespielt hat.",
      b: "dass ein Hollywood-Star eine Schule besucht hat.",
      c: "dass Sch\u00fcler einen Piratenfilm sehen wollten.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "dass Johnny Depp in einem Piratenfilm mitgespielt hat.",
        b: "dass ein Hollywood-Star eine Schule besucht hat.",
        c: "dass Sch\u00fcler einen Piratenfilm sehen wollten.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Johnny Depp ...",
      options: {
        a: "antwortete auf den Brief der Sch\u00fclerin.",
        b: "schrieb auf der Webseite der Schule.",
        c: "sang und tanzte f\u00fcr die Sch\u00fcler.",
      },
      correct: "c",
    },
    {
      id: 12,
      statement: "Beatrice ...",
      options: {
        a: "wollte keinen Unterricht machen.",
        b: "wollte einen wirklichen Piraten sehen.",
        c: "war erschrocken, als Johnny Depp kam.",
      },
      correct: "a",
    },
  ],
};
