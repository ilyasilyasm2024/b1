// Official answer key for Modelltest 11.
// Source: Zertifikat B1 neu, 15 Übungsprüfungen, Lösungen, © 2014 Hueber Verlag, München.

export interface Module11AnswerKey {
  lesen: Record<number, string>;
  hoeren: Record<number, string>;
}

export const module11AnswerKey: Module11AnswerKey = {
  lesen: {
    1: "richtig", 2: "richtig", 3: "falsch", 4: "richtig", 5: "falsch", 6: "richtig",
    7: "a", 8: "a", 9: "c", 10: "b", 11: "a", 12: "c",
    13: "e", 14: "h", 15: "0", 16: "a", 17: "f", 18: "d", 19: "j",
    20: "nein", 21: "ja", 22: "nein", 23: "nein", 24: "ja", 25: "ja", 26: "ja",
    27: "c", 28: "c", 29: "b", 30: "a",
  },
  hoeren: {
    1: "falsch", 2: "c", 3: "falsch", 4: "b", 5: "falsch", 6: "b", 7: "richtig", 8: "a", 9: "falsch", 10: "a",
    11: "c", 12: "b", 13: "a", 14: "c", 15: "b",
    16: "richtig", 17: "falsch", 18: "falsch", 19: "falsch", 20: "falsch", 21: "richtig", 22: "richtig",
    23: "c", 24: "a", 25: "a", 26: "a", 27: "b", 28: "c", 29: "a", 30: "c",
  },
};
