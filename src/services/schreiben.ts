import { api } from "./api";

export interface SchreibenVersion {
  _id: string;
  moduleId: string;
  aufgabeId: number;
  text: string;
  wordCount: number;
  createdAt: string;
}

export const schreibenService = {
  saveVersion: (moduleId: string, aufgabeId: number, text: string) =>
    api.post<SchreibenVersion>("/schreiben", { moduleId, aufgabeId, text }),

  getVersions: (moduleId: string, aufgabeId: number) =>
    api.get<SchreibenVersion[]>(`/schreiben/${moduleId}/${aufgabeId}`),

  deleteVersion: (id: string) =>
    api.delete<{ message: string }>(`/schreiben/${id}`),
};
