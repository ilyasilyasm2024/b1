export interface SchreibenAufgabe {
  id: number;
  title: string;
  time: string;
  wordCount: number;
  instruction: string;
  points: string[];
  hints?: string[];
}

export interface SchreibenData {
  module: number;
  part: string;
  aufgaben: SchreibenAufgabe[];
}

export const module2Schreiben: SchreibenData = {
  module: 2,
  part: "Schreiben",
  aufgaben: [
    {
      id: 1,
      title: "Aufgabe 1",
      time: "20 Minuten",
      wordCount: 80,
      instruction:
        "Sie haben gestern jemanden kennengelernt. Sie fanden ihn/sie sehr nett und haben auch Handynummern ausgetauscht. Berichten Sie einem Freund / einer Freundin darüber.",
      points: [
        "Wo und wie haben Sie ihn/sie kennengelernt?",
        "Was hat Ihnen an ihm/ihr sofort gut gefallen und warum?",
        "Bitten Sie um Rat, was Sie jetzt machen sollen.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 80 Wörter).",
        "Schreiben Sie etwas zu allen drei Punkten.",
        "Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).",
      ],
    },
    {
      id: 2,
      title: "Aufgabe 2",
      time: "25 Minuten",
      wordCount: 80,
      instruction:
        'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Musik im Zeitalter des Internets" gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:',
      points: [
        "Schreiben Sie nun Ihre Meinung (circa 80 Wörter).",
      ],
      hints: [
        'Gästebuch-Eintrag: "Die Musikindustrie hat jahrelang sehr viel Geld verdient und nicht immer mit Qualitätsmusik. Original-CDs sind immer noch alles andere als preiswert. Und endlich mal bietet uns das Internet die Möglichkeit, kostenlos Musik zu hören. Warum sollte man von dieser Möglichkeit nicht Gebrauch machen?" — Markus, 03.09., 15:47 Uhr',
      ],
    },
    {
      id: 3,
      title: "Aufgabe 3",
      time: "15 Minuten",
      wordCount: 40,
      instruction:
        "An der Bushaltestelle haben Sie in einer Suchanzeige gelesen, dass das Ehepaar Börlach seinen Hund verloren hat. Heute Morgen haben Sie den Hund gefunden.",
      points: [
        "Schreiben Sie an Herrn und Frau Börlach. Berichten Sie, wo Sie den Hund gefunden haben und teilen Sie dem Ehepaar höflich mit, wie und wann Sie erreicht werden können.",
      ],
      hints: [
        "Schreiben Sie eine E-Mail (circa 40 Wörter).",
        "Vergessen Sie nicht die Anrede und den Gruß am Schluss.",
      ],
    },
  ],
};
