import { progressRepository } from "../repositories/progress";
import { localStore } from "../repositories/localStore";

const ANSWERS_KEY = "b1-answers";
const HIGHLIGHTS_KEY = "b1-highlights";

export interface SectionState {
  answers: unknown[];
  submitted: boolean;
}

export interface ModuleProgress {
  sections: Record<string, SectionState>;
  texts: Record<string, string[]>;
  done: Record<string, boolean[]>;
}

const EMPTY: ModuleProgress = { sections: {}, texts: {}, done: {} };

const orEmpty = <T extends object>(value: T | undefined): T =>
  value && Object.keys(value).length > 0 ? value : ({} as T);

export const progressService = {
  // Answers kept in the browser (works offline and for plans without cloud sync).
  loadLocal: (): ModuleProgress => localStore.getJSON(ANSWERS_KEY, EMPTY),

  saveLocal: (data: ModuleProgress) => localStore.setJSON(ANSWERS_KEY, data),

  // Loads a module from the backend and restores its highlights locally. Null if the request failed.
  async load(moduleId: string): Promise<ModuleProgress | null> {
    const res = await progressRepository.get(moduleId);
    if (!res.data) return null;
    const { sections, texts, done, highlights } = res.data;
    if (highlights && highlights.length > 0) localStore.setJSON(HIGHLIGHTS_KEY, highlights);
    return { sections: orEmpty(sections), texts: orEmpty(texts), done: orEmpty(done) };
  },

  // Saves a module to the backend together with the locally stored highlights.
  save(moduleId: string, data: ModuleProgress) {
    const highlights = localStore.getJSON<{ text: string; color: string }[]>(HIGHLIGHTS_KEY, []);
    return progressRepository.save(moduleId, { ...data, highlights });
  },
};
