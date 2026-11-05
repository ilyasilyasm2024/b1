import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { notesService, type NoteBackend, type NoteType, type UpdateNoteData } from "../../services/notes";
import { useAuth } from "./useAuth";
import i18n from "../../i18n";

/** "saving": a change is waiting to be sent or is on its way; "saved": the server just confirmed it */
export type NoteSaveStatus = "saving" | "saved";

interface NotesContextType {
  notes: NoteBackend[];
  saveStatus: Record<string, NoteSaveStatus>;
  isLoading: boolean;
  error: string;
  addNote: (type: NoteType) => Promise<void>;
  updateNote: (id: string, patch: UpdateNoteData) => void;
  /** Resolves to true only when the server confirmed the save */
  saveNote: (id: string) => Promise<boolean>;
  deleteNote: (id: string) => Promise<void>;
  deleteMany: (ids: string[]) => Promise<void>;
  toggleLink: (idA: string, idB: string) => void;
  togglePin: (id: string) => void;
  moveNote: (id: string, direction: "up" | "down") => void;
  reload: () => Promise<void>;
}

const NotesContext = createContext<NotesContextType | null>(null);

export function NotesProvider({ children }: { children: ReactNode }) {
  const { user, token } = useAuth();
  const [notes, setNotes] = useState<NoteBackend[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [saveStatus, setSaveStatus] = useState<Record<string, NoteSaveStatus>>({});
  // Requests still running per note, so "saved" only shows once the last one answered.
  const inFlight = useRef<Record<string, number>>({});
  const savedTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const setStatus = useCallback((id: string, status: NoteSaveStatus | null) => {
    if (savedTimers.current[id]) {
      clearTimeout(savedTimers.current[id]);
      delete savedTimers.current[id];
    }
    setSaveStatus((prev) => {
      const next = { ...prev };
      if (status) next[id] = status;
      else delete next[id];
      return next;
    });
    if (status === "saved") {
      savedTimers.current[id] = setTimeout(() => {
        delete savedTimers.current[id];
        setSaveStatus((prev) => {
          if (prev[id] !== "saved") return prev;
          const next = { ...prev };
          delete next[id];
          return next;
        });
      }, 1500);
    }
  }, []);

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
      setError(res.error || i18n.t("notes.loadFailed"));
    }
    setIsLoading(false);
  }, [user, token]);

  useEffect(() => {
    reload();
  }, [reload]);

  // Changes are shown right away, then sent to the server. If the server refuses one,
  // tell the user and reload the notes so the screen matches what is really saved.
  const persist = useCallback(
    async (id: string, request: Promise<{ error?: string }>): Promise<boolean> => {
      inFlight.current[id] = (inFlight.current[id] || 0) + 1;
      setStatus(id, "saving");
      const res = await request;
      inFlight.current[id] -= 1;
      const done = inFlight.current[id] === 0 && !saveTimers.current[id];
      if (!res.error) {
        if (done) setStatus(id, "saved");
        return true;
      }
      if (done) setStatus(id, null);
      setError(res.error || i18n.t("notes.saveFailed"));
      const fresh = await notesService.getAll();
      if (fresh.data) setNotes(fresh.data);
      return false;
    },
    [setStatus]
  );

  const addNote = async (type: NoteType) => {
    if (!user) return;
    if (notesService.isAtLimit(notesRef.current, type)) {
      setError(i18n.t(type === "text" ? "apiErrors.MAX_TEXT_NOTES" : "apiErrors.MAX_COLOR_NOTES"));
      return;
    }
    const res = await notesService.create(type);
    if (res.data) {
      setNotes((prev) => [res.data as NoteBackend, ...prev]);
    } else {
      setError(res.error || i18n.t("notes.createFailed"));
    }
  };

  // Optimistic local update + debounced persistence
  const updateNote = useCallback((id: string, patch: UpdateNoteData) => {
    setNotes((prev) => prev.map((n) => (n._id === id ? { ...n, ...patch } : n)));

    if (saveTimers.current[id]) clearTimeout(saveTimers.current[id]);
    setStatus(id, "saving"); // shown while the debounce waits, too: the change isn't saved yet
    saveTimers.current[id] = setTimeout(async () => {
      delete saveTimers.current[id];
      const current = notesRef.current.find((n) => n._id === id);
      if (!current) {
        setStatus(id, null);
        return;
      }
      await persist(id, notesService.save(current));
    }, 500);
  }, [persist, setStatus]);

  // Flush any pending debounce and persist immediately (used by the Save button).
  const saveNote = useCallback(async (id: string) => {
    if (saveTimers.current[id]) {
      clearTimeout(saveTimers.current[id]);
      delete saveTimers.current[id];
    }
    const current = notesRef.current.find((n) => n._id === id);
    if (!current) return false;
    setError("");
    return persist(id, notesService.save(current));
  }, [persist]);

  // Toggle pin and persist. Newly pinned notes float to the top of the list.
  const togglePin = useCallback((id: string) => {
    const current = notesRef.current.find((n) => n._id === id);
    if (!current) return;
    const pinned = !current.pinned;
    setNotes((prev) => prev.map((n) => (n._id === id ? { ...n, pinned } : n)));
    persist(id, notesService.update(id, { pinned }));
  }, [persist]);

  // Reorder a text note up/down within the text-note ordering, persisting both
  // affected notes' order values.
  const moveNote = useCallback((id: string, direction: "up" | "down") => {
    const swap = notesService.move(notesRef.current, id, direction);
    if (!swap) return;

    const orders = new Map(swap.map((s) => [s.id, s.order]));
    setNotes((prev) => prev.map((n) => (orders.has(n._id) ? { ...n, order: orders.get(n._id)! } : n)));
    swap.forEach((s) => persist(s.id, notesService.update(s.id, { order: s.order })));
  }, [persist]);

  // Link/unlink two notes bidirectionally and persist both.
  const toggleLink = useCallback((idA: string, idB: string) => {
    const a = notesRef.current.find((n) => n._id === idA);
    const b = notesRef.current.find((n) => n._id === idB);
    const links = notesService.toggleLink(a, b);
    if (!links) return;
    const newALinks = links.a;
    const newBLinks = links.b;

    setNotes((prev) =>
      prev.map((n) =>
        n._id === idA ? { ...n, links: newALinks } : n._id === idB ? { ...n, links: newBLinks } : n
      )
    );

    persist(idA, notesService.update(idA, { links: newALinks }));
    persist(idB, notesService.update(idB, { links: newBLinks }));
  }, [persist]);

  // Remove an id from any other note's links, persisting the ones that changed.
  const pruneLinks = (removedIds: string[]) => {
    const removed = new Set(removedIds);
    setNotes((prev) =>
      prev.map((n) => {
        const filtered = notesService.pruneLinks(n, removed);
        if (!filtered) return n;
        persist(n._id, notesService.update(n._id, { links: filtered }));
        return { ...n, links: filtered };
      })
    );
  };

  const deleteNote = async (id: string) => {
    const res = await notesService.delete(id);
    if (!res.error) {
      setNotes((prev) => prev.filter((n) => n._id !== id));
      pruneLinks([id]);
    } else {
      setError(res.error);
    }
  };

  const deleteMany = async (ids: string[]) => {
    const failed = await notesService.deleteMany(ids);
    const deleted = ids.filter((id) => !failed.has(id));
    setNotes((prev) => prev.filter((n) => failed.has(n._id) || !ids.includes(n._id)));
    pruneLinks(deleted);
    if (failed.size > 0) setError(i18n.t("notes.someDeleteFailed"));
  };

  return (
    <NotesContext.Provider value={{ notes, saveStatus, isLoading, error, addNote, updateNote, saveNote, deleteNote, deleteMany, toggleLink, togglePin, moveNote, reload }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}
