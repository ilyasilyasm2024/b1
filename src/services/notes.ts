import { notesRepository, type NoteBackend, type NoteType, type UpdateNoteData } from "../repositories/notes";

export type { NoteBackend, NoteType, NoteDir, UpdateNoteData } from "../repositories/notes";

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

function randomColor(): string {
  return TICK_COLORS[Math.floor(Math.random() * TICK_COLORS.length)];
}

// Every editable field, sent when a note is saved as a whole.
function snapshot(n: NoteBackend): UpdateNoteData {
  return {
    title: n.title,
    content: n.content,
    color: n.color,
    dir: n.dir,
    collapsed: n.collapsed,
    pinned: n.pinned,
    order: n.order,
    links: n.links,
    x: n.x,
    y: n.y,
  };
}

export const notesService = {
  getAll: () => notesRepository.getAll(),

  isAtLimit: (notes: NoteBackend[], type: NoteType) =>
    notes.filter((n) => n.type === type).length >= NOTE_LIMITS[type],

  // New tick notes get a random color and a slightly randomized spot so they don't stack exactly.
  create(type: NoteType) {
    const payload =
      type === "tick"
        ? {
            type,
            content: "",
            color: randomColor(),
            x: Math.round(120 + Math.random() * 200),
            y: Math.round(140 + Math.random() * 160),
          }
        : { type, content: "", color: "#fde68a" };
    return notesRepository.add(payload);
  },

  save: (note: NoteBackend) => notesRepository.update(note._id, snapshot(note)),

  update: (id: string, patch: UpdateNoteData) => notesRepository.update(id, patch),

  delete: (id: string) => notesRepository.delete(id),

  // Deletes in parallel; returns the ids that failed.
  async deleteMany(ids: string[]): Promise<Set<string>> {
    const results = await Promise.all(ids.map((id) => notesRepository.delete(id)));
    return new Set(ids.filter((_, i) => results[i].error));
  },

  // New links for both notes after linking/unlinking them, or null if they can't be linked.
  // Only text notes can be linked (color notes float on the page and can't show links).
  toggleLink(a: NoteBackend | undefined, b: NoteBackend | undefined): { a: string[]; b: string[] } | null {
    if (!a || !b || a._id === b._id || a.type !== "text" || b.type !== "text") return null;
    const linked = (a.links || []).includes(b._id);
    return {
      a: linked ? (a.links || []).filter((x) => x !== b._id) : [...(a.links || []), b._id],
      b: linked ? (b.links || []).filter((x) => x !== a._id) : [...(b.links || []), a._id],
    };
  },

  // Swaps a note's order with its neighbour in the same type and pin group (pinned notes stay
  // above unpinned ones). Returns the two new orders, or null at the edge of the list.
  move(notes: NoteBackend[], id: string, direction: "up" | "down"): { id: string; order: number }[] | null {
    const current = notes.find((n) => n._id === id);
    if (!current) return null;

    const group = notes
      .filter((n) => n.type === current.type && !!n.pinned === !!current.pinned)
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a._id < b._id ? -1 : 1));

    const idx = group.findIndex((n) => n._id === id);
    const swapWith = direction === "up" ? idx - 1 : idx + 1;
    if (swapWith < 0 || swapWith >= group.length) return null;

    const a = group[idx];
    const b = group[swapWith];
    return [
      { id: a._id, order: b.order ?? 0 },
      { id: b._id, order: a.order ?? 0 },
    ];
  },

  // A note's links without the removed ids, or null when nothing changed.
  pruneLinks(note: NoteBackend, removed: Set<string>): string[] | null {
    if (!note.links || note.links.length === 0) return null;
    const filtered = note.links.filter((l) => !removed.has(l));
    return filtered.length !== note.links.length ? filtered : null;
  },
};
