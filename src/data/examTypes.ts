// Shapes of one Modelltest's content. Every module's data files define the same structures;
// these come from module2 and are shared by the generic exam components.
export type { LesenTeil1Data } from "./module2/lesenTeil1";
export type { LesenTeil2Data } from "./module2/lesenTeil2";
export type { LesenTeil3Data } from "./module2/lesenTeil3";
export type { LesenTeil4Data } from "./module2/lesenTeil4";
export type { LesenTeil5Data } from "./module2/lesenTeil5";
export type { HoerenTeil1Data } from "./module2/hoerenTeil1";
export type { HoerenTeil2Data } from "./module2/hoerenTeil2";
export type { HoerenTeil3Data } from "./module2/hoerenTeil3";
import type { HoerenTeil4Data as Module2HoerenTeil4Data } from "./module2/hoerenTeil4";

// Speaker keys differ in every module, so the answers are plain strings here.
export interface HoerenTeil4Question {
  id: number;
  statement: string;
  correct: string; // a key from speakers
}
export interface HoerenTeil4Data extends Omit<Module2HoerenTeil4Data, "example" | "questions"> {
  example: HoerenTeil4Question;
  questions: HoerenTeil4Question[];
}
export type { SchreibenData } from "./module2/schreiben";
export type { SprechenData } from "./module2/sprechen";
