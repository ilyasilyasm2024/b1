// Browser localStorage access. Write and parse failures (quota, private mode, bad JSON) are ignored.
export const localStore = {
  get: (key: string): string | null => localStorage.getItem(key),

  set: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignored, see the note at the top
    }
  },

  getJSON: <T>(key: string, fallback: T): T => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw) as T;
    } catch {
      // ignored, see the note at the top
    }
    return fallback;
  },

  setJSON: (key: string, value: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignored, see the note at the top
    }
  },

  remove: (key: string): void => localStorage.removeItem(key),
};
