import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { vocabularyService } from "../services/vocabulary";
import { useAuth } from "./AuthContext";
import { useToast } from "../components/Toast";
import { usePermissions } from "./Permissions";

export interface VocabItem {
  id: string;
  word: string;
  translation: string;
  context?: string;
  addedAt: number;
}

interface VocabularyContextType {
  vocab: VocabItem[];
  addWord: (word: string, translation: string, context?: string) => Promise<void>;
  removeWord: (id: string) => Promise<void>;
  clearAll: () => void;
  isLoading: boolean;
}

const VocabularyContext = createContext<VocabularyContextType | null>(null);

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [vocab, setVocab] = useState<VocabItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, token } = useAuth();
  const { showToast } = useToast();

  // Fetch vocab from backend when user is logged in
  const fetchVocab = useCallback(async () => {
    if (!user || !token) {
      setVocab([]);
      return;
    }
    setIsLoading(true);
    const res = await vocabularyService.getAll();
    if (res.data) {
      const items: VocabItem[] = res.data.map((v) => ({
        id: v._id,
        word: v.deutsch,
        translation: v.arabic,
        context: v.beispiel || undefined,
        addedAt: new Date(v.createdAt).getTime(),
      }));
      setVocab(items.sort((a, b) => b.addedAt - a.addedAt));
    }
    setIsLoading(false);
  }, [user, token]);

  useEffect(() => {
    fetchVocab();
  }, [fetchVocab]);

  const { canAddVocabulary } = usePermissions();

  const addWord = async (word: string, translation: string, context?: string) => {
    if (!user || !token) {
      showToast("Bitte melde dich an oder registriere dich, um Vokabeln zu speichern.", "error");
      return;
    }

    if (!canAddVocabulary(vocab.length)) {
      showToast("Vocabulary limit reached. Upgrade your plan for more.", "error");
      return;
    }

    const res = await vocabularyService.add({
      deutsch: word.trim(),
      arabic: translation.trim(),
      beispiel: context?.trim() || "",
    });

    if (res.data) {
      const newItem: VocabItem = {
        id: res.data._id,
        word: res.data.deutsch,
        translation: res.data.arabic,
        context: res.data.beispiel || undefined,
        addedAt: new Date(res.data.createdAt).getTime(),
      };
      setVocab((prev) => [newItem, ...prev]);
      showToast("Vokabel gespeichert", "success");
    } else if (res.status === 401) {
      showToast("Bitte melde dich an oder registriere dich, um Vokabeln zu speichern.", "error");
    } else {
      showToast(res.error || "Fehler beim Speichern", "error");
    }
  };

  const removeWord = async (id: string) => {
    if (!user || !token) {
      showToast("Bitte melde dich an, um Vokabeln zu verwalten.", "error");
      return;
    }

    const res = await vocabularyService.delete(id);

    if (res.data) {
      setVocab((prev) => prev.filter((item) => item.id !== id));
      showToast("Vokabel gelöscht", "success");
    } else if (res.status === 401) {
      showToast("Bitte melde dich an, um Vokabeln zu verwalten.", "error");
    } else {
      showToast(res.error || "Fehler beim Löschen", "error");
    }
  };

  const clearAll = () => {
    // For now, clear local state only (bulk delete not in backend)
    setVocab([]);
  };

  return (
    <VocabularyContext.Provider value={{ vocab, addWord, removeWord, clearAll, isLoading }}>
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
