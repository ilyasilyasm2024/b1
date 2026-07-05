import { api } from "./api";

export interface ProgressData {
  sections: Record<string, { answers: unknown[]; submitted: boolean }>;
  texts: Record<string, string[]>;
  done: Record<string, boolean[]>;
  highlights: { text: string; color: string }[];
}

export const progressService = {
  get: (moduleId: string) => api.get<ProgressData>(`/progress/${moduleId}`),

  save: (moduleId: string, data: ProgressData) =>
    api.put<{ message: string }>(`/progress/${moduleId}`, data),

  getAll: () => api.get<Record<string, ProgressData>>("/progress"),
};
