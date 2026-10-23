import { api } from "./api";

export type NoteType = "text" | "tick";

/** Same limits as the backend validation (notes.validation.js); content is HTML for text notes */
export const NOTE_TITLE_MAX = 200;
export const NOTE_CONTENT_MAX = 5000;
/** Color notes are small post-its: their text is kept short so the card never needs to scroll */
export const COLOR_NOTE_CONTENT_MAX = 60;
export const COLOR_NOTE_TITLE_MAX = 25;

/** Max notes per user and type, same as the backend (notes.service.js) */
export const NOTE_LIMITS: Record<NoteType, number> = { text: 20, tick: 10 };

/** Palette for color (tick) notes */
export const TICK_COLORS = [
  "#fca5a5", "#fdba74", "#fde68a", "#bef264", "#86efac",
  "#7dd3fc", "#a5b4fc", "#d8b4fe", "#f9a8d4",
];

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
  pinned: boolean;
  order: number;
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
  pinned?: boolean;
  order?: number;
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
  pinned?: boolean;
  order?: number;
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
