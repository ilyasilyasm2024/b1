import { api } from "./api";

// Backend model: { _id, userId, deutsch, arabic, beispiel, viewed, isLearned, repeatNumber }
export interface VocabBackend {
  _id: string;
  userId: string;
  deutsch: string;
  arabic: string;
  beispiel: string;
  viewed: number;
  isLearned: boolean;
  repeatNumber: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateVocabData {
  deutsch: string;
  arabic: string;
  beispiel?: string;
}

export interface UpdateVocabData {
  deutsch?: string;
  arabic?: string;
  beispiel?: string;
  isLearned?: boolean;
}

export const vocabularyService = {
  getAll: () => api.get<VocabBackend[]>("/vocabulary"),

  add: (data: CreateVocabData) => api.post<VocabBackend>("/vocabulary", data),

  update: (id: string, data: UpdateVocabData) => api.put<VocabBackend>(`/vocabulary/${id}`, data),

  delete: (id: string) => api.delete<{ message: string }>(`/vocabulary/${id}`),
};
