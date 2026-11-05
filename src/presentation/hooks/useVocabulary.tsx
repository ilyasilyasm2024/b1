import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { vocabularyService, type VocabItem } from "../../services/vocabulary";
import { useAuth } from "./useAuth";
import { useToast } from "../components/common/Toast";
import { usePermissions } from "./usePermissions";
import i18n from "../../i18n";

export type { VocabItem };

interface VocabularyContextType {
  vocab: VocabItem[];
  addWord: (word: string, translation: string, context?: string) => Promise<void>;
  removeWord: (id: string) => Promise<void>;
  clearAll: () => Promise<void>;
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
      setVocab(res.data);
    }
    setIsLoading(false);
  }, [user, token]);

  useEffect(() => {
    fetchVocab();
  }, [fetchVocab]);

  const { canAddVocabulary } = usePermissions();

  const addWord = async (word: string, translation: string, context?: string) => {
    if (!user || !token) {
      showToast(i18n.t("vocab.loginRequiredText"), "error");
      return;
    }

    if (!canAddVocabulary(vocab.length)) {
      showToast(i18n.t("vocab.limitReached"), "error");
      return;
    }

    const res = await vocabularyService.add(word, translation, context);

    if (res.data) {
      const newItem = res.data;
      setVocab((prev) => [newItem, ...prev]);
      showToast(i18n.t("vocab.saved"), "success");
    } else if (res.status === 401) {
      showToast(i18n.t("vocab.loginRequiredText"), "error");
    } else {
      showToast(res.error || i18n.t("vocab.saveFailed"), "error");
    }
  };

  const removeWord = async (id: string) => {
    if (!user || !token) {
      showToast(i18n.t("vocab.loginToManage"), "error");
      return;
    }

    const res = await vocabularyService.remove(id);

    if (res.data) {
      setVocab((prev) => prev.filter((item) => item.id !== id));
      showToast(i18n.t("apiMessages.VOCABULARY_DELETED"), "success");
    } else if (res.status === 401) {
      showToast(i18n.t("vocab.loginToManage"), "error");
    } else {
      showToast(res.error || i18n.t("vocab.deleteFailed"), "error");
    }
  };

  // Deletes every word on the server; only the words the server really deleted leave the list.
  const clearAll = async () => {
    if (!user || !token) {
      showToast(i18n.t("vocab.loginToManage"), "error");
      return;
    }
    const ids = vocab.map((item) => item.id);
    const results = await Promise.all(ids.map((id) => vocabularyService.remove(id)));
    const deleted = new Set(ids.filter((_, i) => !results[i].error));
    setVocab((prev) => prev.filter((item) => !deleted.has(item.id)));
    if (deleted.size === ids.length) {
      showToast(i18n.t("apiMessages.VOCABULARY_DELETED"), "success");
    } else {
      showToast(i18n.t("vocab.someDeleteFailed", { count: ids.length - deleted.size }), "error");
    }
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
