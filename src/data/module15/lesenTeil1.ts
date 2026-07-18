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

export const module15LesenTeil1: LesenTeil1Data = {
  module: 15,
  part: "Lesen Teil 1",
  title: "Meine Erlebnisse \u2013 Mein Handy-Unfall",
  time: "10 Minuten",
  instruction:
    "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. W\u00e4hlen Sie: Sind die Aussagen richtig oder falsch?",
  text: "Mein Handy-Unfall ereignete sich im Sommerurlaub in Griechenland. Ich hatte das Handy in der Tasche meiner Badehose und bin damit ins Meer gelaufen. Dort habe ich nat\u00fcrlich relativ schnell festgestellt, dass mein Handy noch in der Tasche ist. Leider stand ich schon h\u00fcfttief im Wasser.\n\nIch bin sofort zur\u00fcck an den Strand gelaufen und habe das Handy aus meiner Tasche geholt. Meine erste Reaktion war, das Handy mit dem Handtuch trocken zu wischen. Danach habe ich es auseinandergebaut und die einzelnen Teile ebenfalls mit dem Handtuch getrocknet. Doch bereits da wurde mir klar, dass mein Handy nur eine geringe \u00dcberlebenschance hatte.\n\nIch habe es dann f\u00fcr den Rest des Strandtages in die Sonne gelegt. Im Hotel habe ich das Handy trocken gef\u00f6hnt, doch auch das sollte nicht helfen. Es ging zwar an, aber der Bildschirm hat nur wirre Pixel angezeigt. Ich hatte keinen Zugriff aufs Men\u00fc und konnte weder telefonieren noch SMS schreiben.\n\nAuf einer Online-Plattform erfuhr ich, das Beste sei es, das Handy ein paar Tage ausgeschaltet zu lassen. Ein nicht ganz leicht zu befolgender Hinweis, wenn man im Urlaub ist. Schlie\u00dflich wollte ich Kontakt zu meiner Familie und meinen Freunden aufnehmen. Es war der erste Urlaubstag, somit war es doppelt \u00e4rgerlich. Aber einen guten Aspekt hatte es dann doch: Ich habe Geld gespart, da teure Auslandsgespr\u00e4che und SMS aus dem Ausland nicht mehr m\u00f6glich waren.\n\nZu Hause kam dann die gro\u00dfe Erleichterung: Die SIM-Karte war gl\u00fccklicherweise noch zu gebrauchen und so hatte ich weder Nummern noch Nachrichten verloren. H\u00e4tte ich ein neueres Modell gehabt, w\u00e4ren die wohl weg gewesen, denn da speichert sich fast alles auf dem Mobilfunkger\u00e4t selber und nicht auf der SIM-Karte. Finanziell hielt sich der Schaden in Grenzen, da es kein ganz neues Handy war. Leider konnte ich keine Garantieanspr\u00fcche geltend machen. Ein Wasserschaden l\u00e4uft nie auf Garantie. Aber ich habe das Handy meiner Oma bekommen, das war das gleiche Modell.\n\nNoch einmal wird mir so etwas nicht passieren. Ich ziehe nur noch Badehosen ohne Taschen an, damit ich gar nicht erst auf die Idee komme, ein Handy in die Hosentasche zu stecken.",
  example: {
    id: 0,
    statement: "Sven ist mit seinem Handy schwimmen gegangen.",
    correct: "richtig",
  },
  questions: [
    {
      id: 1,
      statement:
        "Svens Handy ging kaputt, als er es mit dem Handtuch zu trocknen versuchte.",
      correct: "falsch",
    },
    {
      id: 2,
      statement: "Den Rest des Tages verbrachte Sven am Strand in der Sonne.",
      correct: "falsch",
    },
    {
      id: 3,
      statement:
        "Sven informierte sich im Internet dar\u00fcber, was er tun soll.",
      correct: "richtig",
    },
    {
      id: 4,
      statement: "Sven \u00e4rgerte sich zwar sehr, doch er konnte Geld sparen.",
      correct: "richtig",
    },
    {
      id: 5,
      statement:
        "Weil die SIM-Karte in Ordnung war, blieben sowohl Nummern als auch Nachrichten gespeichert.",
      correct: "richtig",
    },
    {
      id: 6,
      statement:
        "Sven hat sich das gleiche Modell wie seine Oma angeschafft.",
      correct: "falsch",
    },
  ],
};
