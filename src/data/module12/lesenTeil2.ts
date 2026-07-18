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

export const module12LesenTeil2A: LesenTeil2Data = {
  module: 12,
  part: "Lesen Teil 2A",
  title: "Leben gegen die innere Uhr",
  text: "Langsam beginnt die Forschung zu verstehen, welche sch\u00e4dlichen Folgen das Leben gegen die innere Uhr hat. Schichtarbeit ist besonders gef\u00e4hrlich. Eine \u201einnere Uhr\u201c haben viele Lebewesen, wissen Chronobiologen wie Till Roenneberg, der seit Jahrzehnten zu dem Thema forscht. Sie bestimmt, wann Pflanzen ihre Bl\u00e4tter auf- und zuklappen, ob einzellige Meeresalgen sich Richtung Meeresboden oder Wasseroberfl\u00e4che bewegen oder wie und wann Menschen schlafen. Au\u00dferdem stellt sie die menschliche K\u00f6rpertemperatur ein und steuert Hormone. Sie legt auch fest, welche Tageszeiten jeder f\u00fcr Sport, Sex oder Mahlzeiten bevorzugt.\n\nAm st\u00e4rksten wird dieser innere Rhythmus durch die Sonnenzeit beeinflusst, den Wechsel zwischen Hell und Dunkel. Allerdings steht die Innenzeit eines Menschen h\u00e4ufig in Spannung zur \u201esozialen\u201c, von der Gesellschaft gemachten Zeit. Roenneberg h\u00e4lt darum auch nicht viel von der regelm\u00e4\u00dfigen Umstellung zwischen Winter- und Sommerzeit \u2013 denn dann wird auch an der inneren Uhr gedreht. \u201eIn modernen Gesellschaften leben wir selten im Einklang mit unserer inneren Uhr. Einige von uns durchqueren auf Reisen in k\u00fcrzester Zeit mehrere Zeitzonen, andere wiederum \u2013 etwa 20 Prozent der arbeitenden Bev\u00f6lkerung in industrialisierten L\u00e4ndern \u2013 arbeiten nach Schichtpl\u00e4nen.\u201c Viele Menschen leiden unter einer Art von \u201esozialem Jetlag\u201c, beschreibt Roenneberg.",
  example: {
    id: 0,
    statement: "Till Roenneberg ...",
    options: {
      a: "forscht schon lange \u00fcber die \u201einnere Uhr\u201c.",
      b: "ist Meeresbiologe.",
      c: "findet die Zeitumstellung im Winter und im Sommer gut.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "wie die \u201einnere Uhr\u201c eingestellt ist.",
        b: "welche Rolle die \u201einnere Uhr\u201c f\u00fcr die Menschen spielt.",
        c: "was die \u201einnere Uhr\u201c f\u00fcr die Tiere bedeutet.",
      },
      correct: "b",
    },
    {
      id: 8,
      statement: "Die \u201einnere Uhr\u201c ...",
      options: {
        a: "beeinflusst, wie warm ein Mensch ist.",
        b: "hat keinen Einfluss auf den Schlaf.",
        c: "legt fest, welchen Sport ein Mensch macht.",
      },
      correct: "a",
    },
    {
      id: 9,
      statement: "Die moderne Art zu leben ...",
      options: {
        a: "ver\u00e4ndert die Ess- und Schlafgewohnheiten.",
        b: "passt zur \u201einneren Uhr\u201c des Menschen.",
        c: "verhindert oft, dass Menschen nach ihrer \u201einneren Uhr\u201c leben k\u00f6nnen.",
      },
      correct: "c",
    },
  ],
};

export const module12LesenTeil2B: LesenTeil2Data = {
  module: 12,
  part: "Lesen Teil 2B",
  title: "Antike Teddyb\u00e4ren bringen ein Verm\u00f6gen ein",
  text: "Ein Teddyb\u00e4r \u2013 es gibt wohl kaum jemanden, der als Kind keinen hatte. Der B\u00e4r geht mit ins Bett, auf Reisen \u2013 einfach \u00fcberallhin. Das Pl\u00fcschtier dient als guter Freund oder Einschlafhilfe und tr\u00f6stet das Kind, wenn es traurig ist. Das ist sp\u00e4testens mit Beginn der Pubert\u00e4t, also mit 13, 14 Jahren, vorbei. Oftmals verschwinden die alten Kuscheltiere dann auf Dachb\u00f6den oder in Kellern, wo sie vergessen werden. Dabei sind viele dieser Tiere inzwischen sehr selten und sind viel Geld wert.\n\nAls historisch wertvoll gelten B\u00e4ren, die mindestens aus der Zeit vor 1990 stammen. Ihr Wert h\u00e4ngt davon ab, wie alt und gut erhalten sie sind und wie viele Exemplare davon noch existieren. Markenteddyb\u00e4ren, vor allem von der Firma Steiff, sind bei Sammlern am beliebtesten. F\u00fcr besonders seltene St\u00fccke sind Liebhaber bereit, viele Tausend Euro zu zahlen. Um das Alter der Steiff-Teddys zu erkennen, kann das Firmenzeichen, der Knopf im Ohr, genau untersucht werden. H\u00e4ufig sind allerdings Markenzeichen dieser Art verloren gegangen. Dann muss das Alter anders bestimmt werden, z.B. durch die Art und den Zustand der N\u00e4hte, die Augen oder das Gewicht des Teddys. Hier sollte dann ein Fachmann befragt werden, um zu bestimmen, ob es sich bei dem Teddyb\u00e4ren wirklich um einen kleinen oder auch gr\u00f6\u00dferen Schatz handelt.",
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "dass alle Teddys bei Kindern beliebt sind.",
      b: "dass alte Teddys sehr teuer sein k\u00f6nnen.",
      c: "dass die Firma Steiff die besten Teddys produziert.",
    },
    correct: "b",
  },
  questions: [
    {
      id: 10,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "dass alle Teddys bei Kindern beliebt sind.",
        b: "dass alte Teddys sehr teuer sein k\u00f6nnen.",
        c: "dass die Firma Steiff die besten Teddys produziert.",
      },
      correct: "b",
    },
    {
      id: 11,
      statement: "Teddyb\u00e4ren ...",
      options: {
        a: "sind f\u00fcr Kinder sehr wichtig.",
        b: "werden von Jugendlichen in den M\u00fcll geworfen.",
        c: "interessieren auch Jugendliche.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Das Alter eines Teddys ...",
      options: {
        a: "kann durch sein Ohr herausgefunden werden.",
        b: "kann man nur am Firmenzeichen feststellen.",
        c: "l\u00e4sst sich auch an seinen Augen erkennen.",
      },
      correct: "c",
    },
  ],
};
