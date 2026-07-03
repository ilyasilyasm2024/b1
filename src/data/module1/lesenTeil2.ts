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
  time: string;
  instruction: string;
  text: string;
  example: LesenTeil2Question;
  questions: LesenTeil2Question[];
}

export const module1LesenTeil2A: LesenTeil2Data = {
  module: 1,
  part: "Lesen Teil 2 - Text A",
  title: "Ni Hao, Mama!",
  time: "20 Minuten",
  instruction:
    "Lesen Sie den Text aus der Presse und die Aufgaben 7 bis 9 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Wenn Tongchun lang von seiner „Mama" schwärmt, denken die anderen Studenten manchmal, der Student rede von seiner Mutter in Shanghai. Dabei meint er Rita Jakobson aus Offenburg, bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst. Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten" mit und sind so etwas wie Leihomas – für Tongchun aus China und drei andere Gaststudenten.

Was die Jakobsons mit ihren Schützlingen machen, könnte man einen Crashkurs nennen – in der Kunst des schnörkellosen normalen deutschen Familienlebens. Sie unternehmen Wanderungen, Sie sitzen im Wohnzimmer und spielen Karten. Und sie fragen Tongchun alles, was Eltern studierende Kinder nun einmal fragen: Wie läuft es an der Uni? Wie machen die Noten? „Wenn ich eine gute Note bekomme, ruft sie auch meiner Mama an!", sagt Tongchun.

Für die Jakobsons in der Informationsbroschüre das Anschauen des Ersten am Schauplatz ist Zeit. „Als unsere eigenen Kinder aus dem Haus waren, wollten wir uns um andere kümmern. Dazu gehört alles, von Weihnachten bis bin zum gemeinsamen Silvesterabend", sagt Rita Jakobson.

Die Offenburger Senioren sind Gaststudenten attraktiv, weil Sie in die Senioren Partys in Berlin, sorgen die Statistiker. Am Anfang des Aufenthalts wollten nur acht Studenten auch deutsche Abschluss in Deutschland bleiben. Am Ende sind es 80 Prozent. Die sagt alles.`,
  example: {
    id: 0,
    statement: "Tongchun ...",
    options: {
      a: "telefoniert immer mit Rita Jakobson, wenn er eine gute Note hat.",
      b: "ruft seine Mutter in Shanghai nur selten an.",
      c: "findet das normale deutsche Familienleben schrecklich.",
    },
    correct: "a",
  },
  questions: [
    {
      id: 7,
      statement: "In diesem Text geht es darum, ...",
      options: {
        a: "wie gut das Verhältnis zwischen ausländischen Studenten und Deutschen ist.",
        b: "welche Probleme Studenten aus China in Deutschland hat.",
        c: 'was das Projekt „Senioren für ausländische Studenten" ist.',
      },
      correct: "c",
    },
    {
      id: 8,
      statement: "Das Ehepaar Jakobson ...",
      options: {
        a: "wollte nicht, dass die eigenen Kinder das Haus verlassen.",
        b: "sieht seine Gaststudenten regelmäßig.",
        c: "machte erst einmal einen Crashkurs in deutscher Kultur.",
      },
      correct: "b",
    },
    {
      id: 9,
      statement: "Viele Gaststudenten aus Offenburg ...",
      options: {
        a: "würden gern in Deutschland bleiben.",
        b: "feiern gern Partys in Berlin.",
        c: "haben schlechte Erfahrungen in Deutschland gemacht.",
      },
      correct: "a",
    },
  ],
};

export const module1LesenTeil2B: LesenTeil2Data = {
  module: 1,
  part: "Lesen Teil 2 - Text B",
  title: "WebStamp: persönliche Briefmarken",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text aus der Presse und die Aufgaben 10 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
  text: `Die Schweizerische Post hatte mit der WebStamp, der elektronischen Briefmarke, eine neue, kreative Idee. WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken. Besonders interessant ist diese innovative Online-Franken-Lösung für Firmen, da Briefe und Mailings mit individuellen Marken auffallen und beim Empfänger für Interesse sorgen. So sendet man auf und mit der Briefmarke auch eine Mini-Reklame und bleibt den Kunden auf jeden Fall in Erinnerung.

Die Vorteile von WebStamp lassen sich ganz einfach nutzen. Nach der Anmeldung auf der Webseite der Schweizerischen Post kann's losgehen mit dem Gestalten einer individuellen Briefmarke. Als Sujet ist alles möglich: Fotos, Firmen- und Produktlogos, Grafiken oder sogar Reklamebotschaften. WebStamp funktioniert online und ist kostenlos. Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken. Diese neuartigen Briefmarken gelten sowohl im Inland als auch im Ausland.

Da das alles über Computerprogramme läuft, sind auch verschiedene Druckformate möglich, falls man beispielsweise die Empfängeradresse in die eigene WebStamp integrieren möchte. Adressen können direkt aus Excel importiert werden.

Genaue Informationen und Ideen zur Gestaltung erhält man in der Info-Broschüre der Schweizerischen Post unter www.post.ch/webstamp.`,
  example: {
    id: 0,
    statement: "In diesem Text geht es darum, ...",
    options: {
      a: "wie die Schweizerische Post funktioniert.",
      b: "dass die Schweizerische Post eine interessante Webseite hat.",
      c: "dass man eine Briefmarke selbst machen kann.",
    },
    correct: "c",
  },
  questions: [
    {
      id: 10,
      statement: "Die WebStamp ...",
      options: {
        a: "hat denselben Preis wie eine normale Briefmarke.",
        b: "gilt nur in der Schweiz.",
        c: "wurde von einer Werbefirma erfunden.",
      },
      correct: "c",
    },
    {
      id: 11,
      statement: "Die Adresse des Empfängers ...",
      options: {
        a: "muss auf der WebStamp stehen.",
        b: "kann man aus dem Excel-Programm übernehmen.",
        c: "wird mit einem extra Programm gedruckt.",
      },
      correct: "a",
    },
    {
      id: 12,
      statement: "Das Museum erreicht man ...",
      options: {
        a: "am besten mit dem Auto.",
        b: "mit dem Bus Linie 17.",
        c: "mit jeder S-Bahn.",
      },
      correct: "b",
    },
  ],
};
