import type { ApiResponse } from "../repositories/api";
import { vocabularyRepository, type VocabBackend } from "../repositories/vocabulary";

export interface VocabItem {
  id: string;
  word: string;
  translation: string;
  context?: string;
  addedAt: number;
}

function toItem(v: VocabBackend): VocabItem {
  return {
    id: v._id,
    word: v.deutsch,
    translation: v.arabic,
    context: v.beispiel || undefined,
    addedAt: new Date(v.createdAt).getTime(),
  };
}

export const vocabularyService = {
  // Newest first.
  async getAll(): Promise<ApiResponse<VocabItem[]>> {
    const res = await vocabularyRepository.getAll();
    return { ...res, data: res.data?.map(toItem).sort((a, b) => b.addedAt - a.addedAt) };
  },

  async add(word: string, translation: string, context?: string): Promise<ApiResponse<VocabItem>> {
    const res = await vocabularyRepository.add({
      deutsch: word.trim(),
      arabic: translation.trim(),
      beispiel: context?.trim() || "",
    });
    return { ...res, data: res.data && toItem(res.data) };
  },

  remove: (id: string) => vocabularyRepository.delete(id),
};
