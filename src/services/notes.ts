import { api } from "./api";

export type NoteType = "text" | "tick";

// Backend model: { _id, userId, type, content, color, createdAt, updatedAt }
export type NoteDir = "ltr" | "rtl";

export interface NoteBackend {
  _id: string;
  userId: string;
  type: NoteType;
  title: string;
  content: string;
  color: string;
  dir: NoteDir;
  collapsed: boolean;
  links: string[];
  x: number;
  y: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteData {
  type: NoteType;
  title?: string;
  content?: string;
  color?: string;
  dir?: NoteDir;
  collapsed?: boolean;
  links?: string[];
  x?: number;
  y?: number;
}

export interface UpdateNoteData {
  type?: NoteType;
  title?: string;
  content?: string;
  color?: string;
  dir?: NoteDir;
  collapsed?: boolean;
  links?: string[];
  x?: number;
  y?: number;
}

export const notesService = {
  getAll: () => api.get<NoteBackend[]>("/notes"),

  add: (data: CreateNoteData) => api.post<NoteBackend>("/notes", data),

  update: (id: string, data: UpdateNoteData) =>
    api.put<NoteBackend>(`/notes/${id}`, data),

  delete: (id: string) => api.delete<{ message: string }>(`/notes/${id}`),
};
