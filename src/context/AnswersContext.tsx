import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { progressService, type ProgressData } from "../services/progress";

const STORAGE_KEY = "b1-answers";

interface SectionState {
  answers: unknown[];
  submitted: boolean;
}

interface StoredData {
  sections: Record<string, SectionState>;
  texts: Record<string, string[]>;
  done: Record<string, boolean[]>;
}

function loadFromStorage(): StoredData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return { sections: {}, texts: {}, done: {} };
}

function saveToStorage(data: StoredData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

interface AnswersContextType {
  getAnswers: <T>(sectionId: string) => T[] | undefined;
  setAnswers: <T>(sectionId: string, answers: T[]) => void;
  isSubmitted: (sectionId: string) => boolean;
  setSubmitted: (sectionId: string, value: boolean) => void;
  getTexts: (sectionId: string) => string[] | undefined;
  setTexts: (sectionId: string, texts: string[]) => void;
  getDone: (sectionId: string) => boolean[] | undefined;
  setDone: (sectionId: string, done: boolean[]) => void;
  triggerSync: () => void;
}

const AnswersContext = createContext<AnswersContextType | null>(null);

export function AnswersProvider({ children }: { children: ReactNode }) {
  const { user, token } = useAuth();
  const [sections, setSections] = useState<Record<string, SectionState>>(() => loadFromStorage().sections);
  const [textsStore, setTextsStore] = useState<Record<string, string[]>>(() => loadFromStorage().texts);
  const [doneStore, setDoneStore] = useState<Record<string, boolean[]>>(() => loadFromStorage().done);
  const [loaded, setLoaded] = useState(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from backend when user logs in
  useEffect(() => {
    if (user && token) {
      progressService.get("m1").then((res) => {
        if (res.data) {
          const { sections: s, texts: t, done: d, highlights: h } = res.data;
          if (s && Object.keys(s).length > 0) {
            setSections(s);
          } else {
            setSections({});
          }
          if (t && Object.keys(t).length > 0) {
            setTextsStore(t);
          } else {
            setTextsStore({});
          }
          if (d && Object.keys(d).length > 0) {
            setDoneStore(d);
          } else {
            setDoneStore({});
          }
          // Restore highlights from backend
          if (h && h.length > 0) {
            try {
              localStorage.setItem("b1-highlights", JSON.stringify(h));
            } catch {}
          }
        }
        setLoaded(true);
      });
    } else {
      // User logged out — clear state
      setSections({});
      setTextsStore({});
      setDoneStore({});
      setLoaded(true);
    }
  }, [user, token]);

  // Save to localStorage on every change
  useEffect(() => {
    saveToStorage({ sections, texts: textsStore, done: doneStore });
  }, [sections, textsStore, doneStore]);

  // Debounced save to backend (2 seconds after last change)
  useEffect(() => {
    if (!user || !token || !loaded) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      let highlights: { text: string; color: string }[] = [];
      try {
        const saved = localStorage.getItem("b1-highlights");
        if (saved) highlights = JSON.parse(saved);
      } catch {}
      const data: ProgressData = { sections, texts: textsStore, done: doneStore, highlights };
      progressService.save("m1", data);
    }, 2000);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [sections, textsStore, doneStore, user, token, loaded]);

  const getAnswers = useCallback(<T,>(sectionId: string): T[] | undefined => {
    return sections[sectionId]?.answers as T[] | undefined;
  }, [sections]);

  const setAnswersFunc = useCallback(<T,>(sectionId: string, answers: T[]) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: { answers: answers as unknown[], submitted: prev[sectionId]?.submitted ?? false },
    }));
  }, []);

  const isSubmitted = useCallback((sectionId: string): boolean => {
    return sections[sectionId]?.submitted ?? false;
  }, [sections]);

  const setSubmittedFunc = useCallback((sectionId: string, value: boolean) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: { answers: prev[sectionId]?.answers ?? [], submitted: value },
    }));
  }, []);

  const getTexts = useCallback((sectionId: string): string[] | undefined => {
    return textsStore[sectionId];
  }, [textsStore]);

  const setTextsFunc = useCallback((sectionId: string, texts: string[]) => {
    setTextsStore((prev) => ({ ...prev, [sectionId]: texts }));
  }, []);

  const getDone = useCallback((sectionId: string): boolean[] | undefined => {
    return doneStore[sectionId];
  }, [doneStore]);

  const setDoneFunc = useCallback((sectionId: string, done: boolean[]) => {
    setDoneStore((prev) => ({ ...prev, [sectionId]: done }));
  }, []);

  // Trigger a backend sync (used by TextHighlighter after highlight changes)
  const triggerSync = useCallback(() => {
    if (!user || !token || !loaded) return;
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      let highlights: { text: string; color: string }[] = [];
      try {
        const saved = localStorage.getItem("b1-highlights");
        if (saved) highlights = JSON.parse(saved);
      } catch {}
      const data: ProgressData = { sections, texts: textsStore, done: doneStore, highlights };
      progressService.save("m1", data);
    }, 2000);
  }, [user, token, loaded, sections, textsStore, doneStore]);

  return (
    <AnswersContext.Provider
      value={{
        getAnswers,
        setAnswers: setAnswersFunc,
        isSubmitted,
        setSubmitted: setSubmittedFunc,
        getTexts,
        setTexts: setTextsFunc,
        getDone,
        setDone: setDoneFunc,
        triggerSync,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
}

export function useAnswers() {
  const context = useContext(AnswersContext);
  if (!context) {
    throw new Error("useAnswers must be used within AnswersProvider");
  }
  return context;
}
