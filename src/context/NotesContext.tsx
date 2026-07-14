import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { notesService, type NoteBackend, type NoteType, type UpdateNoteData } from "../services/notes";
import { useAuth } from "./AuthContext";

interface NotesContextType {
  notes: NoteBackend[];
  isLoading: boolean;
  error: string;
  addNote: (type: NoteType) => Promise<void>;
  updateNote: (id: string, patch: UpdateNoteData) => void;
  saveNote: (id: string) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  deleteMany: (ids: string[]) => Promise<void>;
  reload: () => Promise<void>;
}

const NotesContext = createContext<NotesContextType | null>(null);

const TICK_COLORS = [
  "#fca5a5", "#fdba74", "#fde68a", "#bef264", "#86efac",
  "#7dd3fc", "#a5b4fc", "#d8b4fe", "#f9a8d4",
];

function randomColor(): string {
  return TICK_COLORS[Math.floor(Math.random() * TICK_COLORS.length)];
}

export function NotesProvider({ children }: { children: ReactNode }) {
  const { user, token } = useAuth();
  const [notes, setNotes] = useState<NoteBackend[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const notesRef = useRef<NoteBackend[]>([]);
  useEffect(() => {
    notesRef.current = notes;
  }, [notes]);

  const reload = useCallback(async () => {
    if (!user || !token) {
      setNotes([]);
      return;
    }
    setIsLoading(true);
    setError("");
    const res = await notesService.getAll();
    if (res.data) {
      setNotes(res.data);
    } else {
      setError(res.error || "Notizen konnten nicht geladen werden.");
    }
    setIsLoading(false);
  }, [user, token]);

  useEffect(() => {
    reload();
  }, [reload]);

  const addNote = async (type: NoteType) => {
    if (!user) return;
    // Place new tick notes at a slightly randomized spot so they don't stack exactly.
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
    const res = await notesService.add(payload);
    if (res.data) {
      setNotes((prev) => [res.data as NoteBackend, ...prev]);
    } else {
      setError(res.error || "Notiz konnte nicht erstellt werden.");
    }
  };

  // Optimistic local update + debounced persistence
  const updateNote = useCallback((id: string, patch: UpdateNoteData) => {
    setNotes((prev) => prev.map((n) => (n._id === id ? { ...n, ...patch } : n)));

    if (saveTimers.current[id]) clearTimeout(saveTimers.current[id]);
    saveTimers.current[id] = setTimeout(async () => {
      const current = notesRef.current.find((n) => n._id === id);
      if (!current) return;
      await notesService.update(id, {
        content: current.content,
        color: current.color,
        x: current.x,
        y: current.y,
      });
    }, 500);
  }, []);

  // Flush any pending debounce and persist immediately (used by the Save button).
  const saveNote = useCallback(async (id: string) => {
    if (saveTimers.current[id]) {
      clearTimeout(saveTimers.current[id]);
      delete saveTimers.current[id];
    }
    const current = notesRef.current.find((n) => n._id === id);
    if (!current) return;
    await notesService.update(id, {
      content: current.content,
      color: current.color,
      x: current.x,
      y: current.y,
    });
  }, []);

  const deleteNote = async (id: string) => {
    const res = await notesService.delete(id);
    if (!res.error) {
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } else {
      setError(res.error);
    }
  };

  const deleteMany = async (ids: string[]) => {
    const results = await Promise.all(ids.map((id) => notesService.delete(id)));
    const failed = new Set(
      ids.filter((_, i) => results[i].error)
    );
    setNotes((prev) => prev.filter((n) => failed.has(n._id) || !ids.includes(n._id)));
    if (failed.size > 0) setError("Einige Notizen konnten nicht gelöscht werden.");
  };

  return (
    <NotesContext.Provider value={{ notes, isLoading, error, addNote, updateNote, saveNote, deleteNote, deleteMany, reload }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}
