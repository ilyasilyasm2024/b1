/** @format */

// Content of every Modelltest rendered by the generic exam components (presentation/components/exam/parts).
import type {
  LesenTeil1Data,
  LesenTeil2Data,
  LesenTeil3Data,
  LesenTeil4Data,
  LesenTeil5Data,
  HoerenTeil1Data,
  HoerenTeil2Data,
  HoerenTeil3Data,
  HoerenTeil4Data,
  SchreibenData,
  SprechenData,
} from "./examTypes";
import { module1LesenTeil1 } from "./module1/lesenTeil1";
import { module1LesenTeil2A, module1LesenTeil2B } from "./module1/lesenTeil2";
import { module1LesenTeil3 } from "./module1/lesenTeil3";
import { module1LesenTeil4 } from "./module1/lesenTeil4";
import { module1LesenTeil5 } from "./module1/lesenTeil5";
import { module1HoerenTeil1 } from "./module1/hoerenTeil1";
import { module1HoerenTeil2 } from "./module1/hoerenTeil2";
import { module1HoerenTeil3 } from "./module1/hoerenTeil3";
import { module1HoerenTeil4 } from "./module1/hoerenTeil4";
import { module1Schreiben } from "./module1/schreiben";
import { module1Sprechen } from "./module1/sprechen";
import { module2LesenTeil1 } from "./module2/lesenTeil1";
import { module2LesenTeil2A, module2LesenTeil2B } from "./module2/lesenTeil2";
import { module2LesenTeil3 } from "./module2/lesenTeil3";
import { module2LesenTeil4 } from "./module2/lesenTeil4";
import { module2LesenTeil5 } from "./module2/lesenTeil5";
import { module2HoerenTeil1 } from "./module2/hoerenTeil1";
import { module2HoerenTeil2 } from "./module2/hoerenTeil2";
import { module2HoerenTeil3 } from "./module2/hoerenTeil3";
import { module2HoerenTeil4 } from "./module2/hoerenTeil4";
import { module2Schreiben } from "./module2/schreiben";
import { module2Sprechen } from "./module2/sprechen";
import { module3LesenTeil1 } from "./module3/lesenTeil1";
import { module3LesenTeil2A, module3LesenTeil2B } from "./module3/lesenTeil2";
import { module3LesenTeil3 } from "./module3/lesenTeil3";
import { module3LesenTeil4 } from "./module3/lesenTeil4";
import { module3LesenTeil5 } from "./module3/lesenTeil5";
import { module3HoerenTeil1 } from "./module3/hoerenTeil1";
import { module3HoerenTeil2 } from "./module3/hoerenTeil2";
import { module3HoerenTeil3 } from "./module3/hoerenTeil3";
import { module3HoerenTeil4 } from "./module3/hoerenTeil4";
import { module3Schreiben } from "./module3/schreiben";
import { module3Sprechen } from "./module3/sprechen";
import { module4LesenTeil1 } from "./module4/lesenTeil1";
import { module4LesenTeil2A, module4LesenTeil2B } from "./module4/lesenTeil2";
import { module4LesenTeil3 } from "./module4/lesenTeil3";
import { module4LesenTeil4 } from "./module4/lesenTeil4";
import { module4LesenTeil5 } from "./module4/lesenTeil5";
import { module4HoerenTeil1 } from "./module4/hoerenTeil1";
import { module4HoerenTeil2 } from "./module4/hoerenTeil2";
import { module4HoerenTeil3 } from "./module4/hoerenTeil3";
import { module4HoerenTeil4 } from "./module4/hoerenTeil4";
import { module4Schreiben } from "./module4/schreiben";
import { module4Sprechen } from "./module4/sprechen";
import { module5LesenTeil1 } from "./module5/lesenTeil1";
import { module5LesenTeil2A, module5LesenTeil2B } from "./module5/lesenTeil2";
import { module5LesenTeil3 } from "./module5/lesenTeil3";
import { module5LesenTeil4 } from "./module5/lesenTeil4";
import { module5LesenTeil5 } from "./module5/lesenTeil5";
import { module5HoerenTeil1 } from "./module5/hoerenTeil1";
import { module5HoerenTeil2 } from "./module5/hoerenTeil2";
import { module5HoerenTeil3 } from "./module5/hoerenTeil3";
import { module5HoerenTeil4 } from "./module5/hoerenTeil4";
import { module5Schreiben } from "./module5/schreiben";
import { module5Sprechen } from "./module5/sprechen";
import { module6LesenTeil1 } from "./module6/lesenTeil1";
import { module6LesenTeil2A, module6LesenTeil2B } from "./module6/lesenTeil2";
import { module6LesenTeil3 } from "./module6/lesenTeil3";
import { module6LesenTeil4 } from "./module6/lesenTeil4";
import { module6LesenTeil5 } from "./module6/lesenTeil5";
import { module6HoerenTeil1 } from "./module6/hoerenTeil1";
import { module6HoerenTeil2 } from "./module6/hoerenTeil2";
import { module6HoerenTeil3 } from "./module6/hoerenTeil3";
import { module6HoerenTeil4 } from "./module6/hoerenTeil4";
import { module6Schreiben } from "./module6/schreiben";
import { module6Sprechen } from "./module6/sprechen";
import { module7LesenTeil1 } from "./module7/lesenTeil1";
import { module7LesenTeil2A, module7LesenTeil2B } from "./module7/lesenTeil2";
import { module7LesenTeil3 } from "./module7/lesenTeil3";
import { module7LesenTeil4 } from "./module7/lesenTeil4";
import { module7LesenTeil5 } from "./module7/lesenTeil5";
import { module7HoerenTeil1 } from "./module7/hoerenTeil1";
import { module7HoerenTeil2 } from "./module7/hoerenTeil2";
import { module7HoerenTeil3 } from "./module7/hoerenTeil3";
import { module7HoerenTeil4 } from "./module7/hoerenTeil4";
import { module7Schreiben } from "./module7/schreiben";
import { module7Sprechen } from "./module7/sprechen";
import { module8LesenTeil1 } from "./module8/lesenTeil1";
import { module8LesenTeil2A, module8LesenTeil2B } from "./module8/lesenTeil2";
import { module8LesenTeil3 } from "./module8/lesenTeil3";
import { module8LesenTeil4 } from "./module8/lesenTeil4";
import { module8LesenTeil5 } from "./module8/lesenTeil5";
import { module8HoerenTeil1 } from "./module8/hoerenTeil1";
import { module8HoerenTeil2 } from "./module8/hoerenTeil2";
import { module8HoerenTeil3 } from "./module8/hoerenTeil3";
import { module8HoerenTeil4 } from "./module8/hoerenTeil4";
import { module8Schreiben } from "./module8/schreiben";
import { module8Sprechen } from "./module8/sprechen";
import { module9LesenTeil1 } from "./module9/lesenTeil1";
import { module9LesenTeil2A, module9LesenTeil2B } from "./module9/lesenTeil2";
import { module9LesenTeil3 } from "./module9/lesenTeil3";
import { module9LesenTeil4 } from "./module9/lesenTeil4";
import { module9LesenTeil5 } from "./module9/lesenTeil5";
import { module9HoerenTeil1 } from "./module9/hoerenTeil1";
import { module9HoerenTeil2 } from "./module9/hoerenTeil2";
import { module9HoerenTeil3 } from "./module9/hoerenTeil3";
import { module9HoerenTeil4 } from "./module9/hoerenTeil4";
import { module9Schreiben } from "./module9/schreiben";
import { module9Sprechen } from "./module9/sprechen";
import { module10LesenTeil1 } from "./module10/lesenTeil1";
import {
  module10LesenTeil2A,
  module10LesenTeil2B,
} from "./module10/lesenTeil2";
import { module10LesenTeil3 } from "./module10/lesenTeil3";
import { module10LesenTeil4 } from "./module10/lesenTeil4";
import { module10LesenTeil5 } from "./module10/lesenTeil5";
import { module10HoerenTeil1 } from "./module10/hoerenTeil1";
import { module10HoerenTeil2 } from "./module10/hoerenTeil2";
import { module10HoerenTeil3 } from "./module10/hoerenTeil3";
import { module10HoerenTeil4 } from "./module10/hoerenTeil4";
import { module10Schreiben } from "./module10/schreiben";
import { module10Sprechen } from "./module10/sprechen";
import { module11LesenTeil1 } from "./module11/lesenTeil1";
import {
  module11LesenTeil2A,
  module11LesenTeil2B,
} from "./module11/lesenTeil2";
import { module11LesenTeil3 } from "./module11/lesenTeil3";
import { module11LesenTeil4 } from "./module11/lesenTeil4";
import { module11LesenTeil5 } from "./module11/lesenTeil5";
import { module11HoerenTeil1 } from "./module11/hoerenTeil1";
import { module11HoerenTeil2 } from "./module11/hoerenTeil2";
import { module11HoerenTeil3 } from "./module11/hoerenTeil3";
import { module11HoerenTeil4 } from "./module11/hoerenTeil4";
import { module11Schreiben } from "./module11/schreiben";
import { module11Sprechen } from "./module11/sprechen";
import { module12LesenTeil1 } from "./module12/lesenTeil1";
import {
  module12LesenTeil2A,
  module12LesenTeil2B,
} from "./module12/lesenTeil2";
import { module12LesenTeil3 } from "./module12/lesenTeil3";
import { module12LesenTeil4 } from "./module12/lesenTeil4";
import { module12LesenTeil5 } from "./module12/lesenTeil5";
import { module12HoerenTeil1 } from "./module12/hoerenTeil1";
import { module12HoerenTeil2 } from "./module12/hoerenTeil2";
import { module12HoerenTeil3 } from "./module12/hoerenTeil3";
import { module12HoerenTeil4 } from "./module12/hoerenTeil4";
import { module12Schreiben } from "./module12/schreiben";
import { module12Sprechen } from "./module12/sprechen";
import { module13LesenTeil1 } from "./module13/lesenTeil1";
import {
  module13LesenTeil2A,
  module13LesenTeil2B,
} from "./module13/lesenTeil2";
import { module13LesenTeil3 } from "./module13/lesenTeil3";
import { module13LesenTeil4 } from "./module13/lesenTeil4";
import { module13LesenTeil5 } from "./module13/lesenTeil5";
import { module13HoerenTeil1 } from "./module13/hoerenTeil1";
import { module13HoerenTeil2 } from "./module13/hoerenTeil2";
import { module13HoerenTeil3 } from "./module13/hoerenTeil3";
import { module13HoerenTeil4 } from "./module13/hoerenTeil4";
import { module13Schreiben } from "./module13/schreiben";
import { module13Sprechen } from "./module13/sprechen";
import { module14LesenTeil1 } from "./module14/lesenTeil1";
import {
  module14LesenTeil2A,
  module14LesenTeil2B,
} from "./module14/lesenTeil2";
import { module14LesenTeil3 } from "./module14/lesenTeil3";
import { module14LesenTeil4 } from "./module14/lesenTeil4";
import { module14LesenTeil5 } from "./module14/lesenTeil5";
import { module14HoerenTeil1 } from "./module14/hoerenTeil1";
import { module14HoerenTeil2 } from "./module14/hoerenTeil2";
import { module14HoerenTeil3 } from "./module14/hoerenTeil3";
import { module14HoerenTeil4 } from "./module14/hoerenTeil4";
import { module14Schreiben } from "./module14/schreiben";
import { module14Sprechen } from "./module14/sprechen";
import { module15LesenTeil1 } from "./module15/lesenTeil1";
import {
  module15LesenTeil2A,
  module15LesenTeil2B,
} from "./module15/lesenTeil2";
import { module15LesenTeil3 } from "./module15/lesenTeil3";
import { module15LesenTeil4 } from "./module15/lesenTeil4";
import { module15LesenTeil5 } from "./module15/lesenTeil5";
import { module15HoerenTeil1 } from "./module15/hoerenTeil1";
import { module15HoerenTeil2 } from "./module15/hoerenTeil2";
import { module15HoerenTeil3 } from "./module15/hoerenTeil3";
import { module15HoerenTeil4 } from "./module15/hoerenTeil4";
import { module15Schreiben } from "./module15/schreiben";
import { module15Sprechen } from "./module15/sprechen";

export interface ExamModule {
  id: string; // "m2": prefix of every section id and saved answer
  badge: string; // shown in the progress ring of the module card
  folder: string; // "module2": audio and transcript folder
  lesen: {
    teil1: LesenTeil1Data;
    teil2A: LesenTeil2Data;
    teil2B: LesenTeil2Data;
    teil2Source: string;
    teil3: LesenTeil3Data;
    teil4: LesenTeil4Data;
    teil4ExampleAnswer: "ja" | "nein";
    teil4Heading: string;
    teil5: LesenTeil5Data;
    teil5Instruction: string;
  };
  hoeren: {
    teil1: HoerenTeil1Data;
    teil2: HoerenTeil2Data;
    teil3: HoerenTeil3Data;
    teil4: HoerenTeil4Data;
  };
  schreiben: SchreibenData;
  sprechen: SprechenData;
}

export const examModules: ExamModule[] = [
  {
    id: "m1",
    badge: "1",
    folder: "module1",
    lesen: {
      teil1: module1LesenTeil1,
      teil2A: module1LesenTeil2A,
      teil2B: module1LesenTeil2B,
      teil2Source: "aus einer deutschen Zeitung",
      teil3: module1LesenTeil3,
      teil4: module1LesenTeil4,
      teil4ExampleAnswer: "ja",
      teil4Heading: "Kommentare",
      teil5: module1LesenTeil5,
      teil5Instruction:
        "Sie informieren sich über das Deutsche Museum, weil Sie es besuchen wollen.",
    },
    hoeren: {
      teil1: module1HoerenTeil1,
      teil2: module1HoerenTeil2,
      teil3: module1HoerenTeil3,
      teil4: module1HoerenTeil4,
    },
    schreiben: module1Schreiben,
    sprechen: module1Sprechen,
  },
  {
    id: "m2",
    badge: "2",
    folder: "module2",
    lesen: {
      teil1: module2LesenTeil1,
      teil2A: module2LesenTeil2A,
      teil2B: module2LesenTeil2B,
      teil2Source: "aus einer deutschen Zeitung",
      teil3: module2LesenTeil3,
      teil4: module2LesenTeil4,
      teil4ExampleAnswer: "ja",
      teil4Heading: "Kommentare",
      teil5: module2LesenTeil5,
      teil5Instruction: `Sie informieren sich über den ${module2LesenTeil5.title}, weil Sie es besuchen wollen.`,
    },
    hoeren: {
      teil1: module2HoerenTeil1,
      teil2: module2HoerenTeil2,
      teil3: module2HoerenTeil3,
      teil4: module2HoerenTeil4,
    },
    schreiben: module2Schreiben,
    sprechen: module2Sprechen,
  },
  {
    id: "m3",
    badge: "3",
    folder: "module3",
    lesen: {
      teil1: module3LesenTeil1,
      teil2A: module3LesenTeil2A,
      teil2B: module3LesenTeil2B,
      teil2Source: "aus einer deutschen Zeitung",
      teil3: module3LesenTeil3,
      teil4: module3LesenTeil4,
      teil4ExampleAnswer: "ja",
      teil4Heading: "Kommentare",
      teil5: module3LesenTeil5,
      teil5Instruction:
        "Sie möchten in einer Jugendherberge im Burgenland übernachten und informieren sich über die Hausordnung für Jugendherbergen in Österreich.",
    },
    hoeren: {
      teil1: module3HoerenTeil1,
      teil2: module3HoerenTeil2,
      teil3: module3HoerenTeil3,
      teil4: module3HoerenTeil4,
    },
    schreiben: module3Schreiben,
    sprechen: module3Sprechen,
  },
  {
    id: "m4",
    badge: "4",
    folder: "module4",
    lesen: {
      teil1: module4LesenTeil1,
      teil2A: module4LesenTeil2A,
      teil2B: module4LesenTeil2B,
      teil2Source: "aus einer deutschen Zeitung",
      teil3: module4LesenTeil3,
      teil4: module4LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Kommentare",
      teil5: module4LesenTeil5,
      teil5Instruction:
        "Sie möchten auf einem Campingplatz übernachten und informieren sich über die Nutzungsordnung.",
    },
    hoeren: {
      teil1: module4HoerenTeil1,
      teil2: module4HoerenTeil2,
      teil3: module4HoerenTeil3,
      teil4: module4HoerenTeil4,
    },
    schreiben: module4Schreiben,
    sprechen: module4Sprechen,
  },
  {
    id: "m5",
    badge: "5",
    folder: "module5",
    lesen: {
      teil1: module5LesenTeil1,
      teil2A: module5LesenTeil2A,
      teil2B: module5LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module5LesenTeil3,
      teil4: module5LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module5LesenTeil5,
      teil5Instruction:
        "Sie lesen eine Informationsbroschüre über das Citybike Wien, da Sie bald nach Wien fahren werden und ein begeisterter Radfahrer sind.",
    },
    hoeren: {
      teil1: module5HoerenTeil1,
      teil2: module5HoerenTeil2,
      teil3: module5HoerenTeil3,
      teil4: module5HoerenTeil4,
    },
    schreiben: module5Schreiben,
    sprechen: module5Sprechen,
  },
  {
    id: "m6",
    badge: "6",
    folder: "module6",
    lesen: {
      teil1: module6LesenTeil1,
      teil2A: module6LesenTeil2A,
      teil2B: module6LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module6LesenTeil3,
      teil4: module6LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module6LesenTeil5,
      teil5Instruction:
        "Sie informieren sich darüber, wie man sich bei einem Restaurantbesuch richtig verhält, denn Sie sind zu einem wichtigen Arbeitsessen eingeladen.",
    },
    hoeren: {
      teil1: module6HoerenTeil1,
      teil2: module6HoerenTeil2,
      teil3: module6HoerenTeil3,
      teil4: module6HoerenTeil4,
    },
    schreiben: module6Schreiben,
    sprechen: module6Sprechen,
  },
  {
    id: "m7",
    badge: "7",
    folder: "module7",
    lesen: {
      teil1: module7LesenTeil1,
      teil2A: module7LesenTeil2A,
      teil2B: module7LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module7LesenTeil3,
      teil4: module7LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module7LesenTeil5,
      teil5Instruction:
        "Sie möchten mit Ihrem Hund an Hundesportprüfungen teilnehmen und lesen die Bestimmungen des VDH für die Begleithundprüfung.",
    },
    hoeren: {
      teil1: module7HoerenTeil1,
      teil2: module7HoerenTeil2,
      teil3: module7HoerenTeil3,
      teil4: module7HoerenTeil4,
    },
    schreiben: module7Schreiben,
    sprechen: module7Sprechen,
  },
  {
    id: "m8",
    badge: "8",
    folder: "module8",
    lesen: {
      teil1: module8LesenTeil1,
      teil2A: module8LesenTeil2A,
      teil2B: module8LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module8LesenTeil3,
      teil4: module8LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module8LesenTeil5,
      teil5Instruction:
        "Sie möchten an dem Flohmarkt „Ottofloh“ teilnehmen und informieren sich über die Teilnahme- und Verkaufsbedingungen.",
    },
    hoeren: {
      teil1: module8HoerenTeil1,
      teil2: module8HoerenTeil2,
      teil3: module8HoerenTeil3,
      teil4: module8HoerenTeil4,
    },
    schreiben: module8Schreiben,
    sprechen: module8Sprechen,
  },
  {
    id: "m9",
    badge: "9",
    folder: "module9",
    lesen: {
      teil1: module9LesenTeil1,
      teil2A: module9LesenTeil2A,
      teil2B: module9LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module9LesenTeil3,
      teil4: module9LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module9LesenTeil5,
      teil5Instruction:
        "Sie möchten im CORPUS Fitness Studio trainieren und lesen die Benutzungsordnung.",
    },
    hoeren: {
      teil1: module9HoerenTeil1,
      teil2: module9HoerenTeil2,
      teil3: module9HoerenTeil3,
      teil4: module9HoerenTeil4,
    },
    schreiben: module9Schreiben,
    sprechen: module9Sprechen,
  },
  {
    id: "m10",
    badge: "10",
    folder: "module10",
    lesen: {
      teil1: module10LesenTeil1,
      teil2A: module10LesenTeil2A,
      teil2B: module10LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module10LesenTeil3,
      teil4: module10LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module10LesenTeil5,
      teil5Instruction:
        "Sie interessieren sich für den Freiwilligendienst und informieren sich über die Aktivitäten des SCI.",
    },
    hoeren: {
      teil1: module10HoerenTeil1,
      teil2: module10HoerenTeil2,
      teil3: module10HoerenTeil3,
      teil4: module10HoerenTeil4,
    },
    schreiben: module10Schreiben,
    sprechen: module10Sprechen,
  },
  {
    id: "m11",
    badge: "11",
    folder: "module11",
    lesen: {
      teil1: module11LesenTeil1,
      teil2A: module11LesenTeil2A,
      teil2B: module11LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module11LesenTeil3,
      teil4: module11LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module11LesenTeil5,
      teil5Instruction:
        "Da Sie an einer Sprachprüfung teilnehmen wollen, lesen Sie die Prüfungsordnung.",
    },
    hoeren: {
      teil1: module11HoerenTeil1,
      teil2: module11HoerenTeil2,
      teil3: module11HoerenTeil3,
      teil4: module11HoerenTeil4,
    },
    schreiben: module11Schreiben,
    sprechen: module11Sprechen,
  },
  {
    id: "m12",
    badge: "12",
    folder: "module12",
    lesen: {
      teil1: module12LesenTeil1,
      teil2A: module12LesenTeil2A,
      teil2B: module12LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module12LesenTeil3,
      teil4: module12LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module12LesenTeil5,
      teil5Instruction:
        "Sie informieren sich über die Garantieleistungen und -bedingungen für einen PC, den Sie gekauft haben.",
    },
    hoeren: {
      teil1: module12HoerenTeil1,
      teil2: module12HoerenTeil2,
      teil3: module12HoerenTeil3,
      teil4: module12HoerenTeil4,
    },
    schreiben: module12Schreiben,
    sprechen: module12Sprechen,
  },
  {
    id: "m13",
    badge: "13",
    folder: "module13",
    lesen: {
      teil1: module13LesenTeil1,
      teil2A: module13LesenTeil2A,
      teil2B: module13LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module13LesenTeil3,
      teil4: module13LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module13LesenTeil5,
      teil5Instruction:
        "Sie informieren sich mithilfe der Packungsbeilage über den Fenchelhonig, weil Ihr kleiner Cousin krank ist.",
    },
    hoeren: {
      teil1: module13HoerenTeil1,
      teil2: module13HoerenTeil2,
      teil3: module13HoerenTeil3,
      teil4: module13HoerenTeil4,
    },
    schreiben: module13Schreiben,
    sprechen: module13Sprechen,
  },
  {
    id: "m14",
    badge: "14",
    folder: "module14",
    lesen: {
      teil1: module14LesenTeil1,
      teil2A: module14LesenTeil2A,
      teil2B: module14LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module14LesenTeil3,
      teil4: module14LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module14LesenTeil5,
      teil5Instruction:
        "Sie informieren sich über die Benutzungsordnung der Pestalozzi-Bibliothek Zürich, da Sie bald für einige Zeit in Zürich leben werden.",
    },
    hoeren: {
      teil1: module14HoerenTeil1,
      teil2: module14HoerenTeil2,
      teil3: module14HoerenTeil3,
      teil4: module14HoerenTeil4,
    },
    schreiben: module14Schreiben,
    sprechen: module14Sprechen,
  },
  {
    id: "m15",
    badge: "15",
    folder: "module15",
    lesen: {
      teil1: module15LesenTeil1,
      teil2A: module15LesenTeil2A,
      teil2B: module15LesenTeil2B,
      teil2Source: "aus einer Schweizer Zeitung",
      teil3: module15LesenTeil3,
      teil4: module15LesenTeil4,
      teil4ExampleAnswer: "nein",
      teil4Heading: "Leserbriefe",
      teil5: module15LesenTeil5,
      teil5Instruction:
        "Sie informieren sich über die Anmeldeinformationen der SommerKinderUni Graz, weil Sie im Programm der Universität interessante Angebote gefunden haben.",
    },
    hoeren: {
      teil1: module15HoerenTeil1,
      teil2: module15HoerenTeil2,
      teil3: module15HoerenTeil3,
      teil4: module15HoerenTeil4,
    },
    schreiben: module15Schreiben,
    sprechen: module15Sprechen,
  },
];
