import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export interface VocabItem {
  id: string;
  word: string;
  translation: string;
  context?: string;
  addedAt: number;
}

const STORAGE_KEY = "b1-vocabulary";

function loadVocab(): VocabItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveVocab(items: VocabItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

interface VocabularyContextType {
  vocab: VocabItem[];
  addWord: (word: string, translation: string, context?: string) => void;
  removeWord: (id: string) => void;
  clearAll: () => void;
}

const VocabularyContext = createContext<VocabularyContextType | null>(null);

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [vocab, setVocab] = useState<VocabItem[]>(loadVocab);

  useEffect(() => {
    saveVocab(vocab);
  }, [vocab]);

  const addWord = (word: string, translation: string, context?: string) => {
    const newItem: VocabItem = {
      id: Date.now().toString(),
      word: word.trim(),
      translation: translation.trim(),
      context: context?.trim(),
      addedAt: Date.now(),
    };
    setVocab((prev) => [newItem, ...prev]);
  };

  const removeWord = (id: string) => {
    setVocab((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setVocab([]);
  };

  return (
    <VocabularyContext.Provider value={{ vocab, addWord, removeWord, clearAll }}>
      {children}
    </VocabularyContext.Provider>
  );
}

export function useVocabulary() {
  const context = useContext(VocabularyContext);
  if (!context) {
    throw new Error("useVocabulary must be used within VocabularyProvider");
  }
  return context;
}
