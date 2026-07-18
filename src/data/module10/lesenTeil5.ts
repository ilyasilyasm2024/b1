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

export const module10LesenTeil5: LesenTeil5Data = {
  module: 10,
  part: "Lesen Teil 5",
  title: "Service Civil International (SCI) \u2013 Freiwilligendienst",
  time: "10 Minuten",
  instruction:
    "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. W\u00e4hlen Sie bei jeder Aufgabe die richtige L\u00f6sung a, b oder c. Sie interessieren sich f\u00fcr den Freiwilligendienst und informieren sich \u00fcber die Aktivit\u00e4ten des SCI.",
  text: "Erst-Info f\u00fcr Neugierige\n\nService Civil International (SCI) organisiert internationale Freiwilligeneins\u00e4tze im Rahmen von Workcamps.\n\nWann? Von Juni bis Oktober, einige im Fr\u00fchling oder Winter.\n\nWie lange? Zwei, drei oder vier Wochen.\n\nWo? In fast allen L\u00e4ndern Europas, in Nordamerika, Japan, Mongolei, S\u00fckorea und Australien. Au\u00dferdem in vielen L\u00e4ndern der \u201eDritten Welt\u201c.\n\nF\u00fcr wen? Jede/r kann mitmachen: ab 16 Jahren im Inland (Deutschland), ab 18 Jahren im Ausland (Afrika, Asien und Lateinamerika ab 21). Eine Altersbegrenzung nach oben gibt es nur in Einzelf\u00e4llen.\n\nMit wem? Zusammen mit acht bis zwanzig anderen Freiwilligen aus den unterschiedlichsten L\u00e4ndern. Auch in Camps in Deutschland sind die Gruppen international. Campsprache ist in der Regel Englisch. Englische Grundkenntnisse reichen aus.\n\nDas Camp: Man arbeitet ungef\u00e4hr sechs bis sieben Stunden am Tag. Als Freiwillige/r solltest du engagiert sein, aber niemand erwartet Profis. Im Studienteil des Camps besch\u00e4ftigst du dich mit einem Thema. Im Arbeitsteil wirst du angeleitet. Deine Campgruppe erh\u00e4lt eine meist einfache Unterkunft mit Selbstversorgerk\u00fcche. In vielen Camps stehen dir und den anderen Freiwilligen SCI-Campleiter/innen zur Seite.\n\nWas kostet das alles? Die Vermittlung in ein Inlandcamp kostet 82 \u20ac, in ein Auslandcamp 110 \u20ac. Deine An- und R\u00fcckreise organisierst und finanzierst du selber. F\u00fcr manche L\u00e4nder musst du ein geb\u00fchrenpflichtiges Visum beantragen. Unterkunft und Verpflegung vor Ort sind frei.",
  questions: [
    {
      id: 27,
      statement: "In den Camps ...",
      options: {
        a: "d\u00fcrfen Freiwillige, die \u00e4lter als 21 sind, nicht mitmachen.",
        b: "arbeiten meistens Freiwillige aus demselben Land zusammen.",
        c: "findet die Kommunikation unter den Freiwilligen normalerweise auf Englisch statt.",
      },
      correct: "c",
    },
    {
      id: 28,
      statement: "Der Freiwilligendienst ...",
      options: {
        a: "ist zu allen Jahreszeiten m\u00f6glich.",
        b: "dauert mindestens einen Monat.",
        c: "ist eine Sache f\u00fcr Profis.",
      },
      correct: "a",
    },
    {
      id: 29,
      statement: "Die Freiwilligen sollten ...",
      options: {
        a: "sich um eine Unterkunft k\u00fcmmern.",
        b: "sich auch theoretisch mit dem Thema des Projekts besch\u00e4ftigen.",
        c: "unbedingt den Campleitern helfen.",
      },
      correct: "b",
    },
    {
      id: 30,
      statement: "Selbst bezahlen muss man ...",
      options: {
        a: "vielleicht f\u00fcr ein Visum.",
        b: "auf jeden Fall f\u00fcr die Organisation der Reise.",
        c: "seine Hinreise nur, wenn man ins Ausland f\u00e4hrt.",
      },
      correct: "a",
    },
  ],
};
