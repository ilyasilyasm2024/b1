import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { suggestNextWords, type NoSuggestionReason } from "../services/ai";
import useAIConfig from "./useAIConfig";

const ENABLED_KEY = "b1-ai-suggestions";

export type SuggestionStatus =
  | "off" // turned off by the user
  | "signed-out"
  | "no-key" // AI not set up
  | "idle"
  | "loading"
  | "ready"
  | "none" // nothing to suggest (see reason)
  | "error";

interface State {
  key: number | null;
  status: "idle" | "loading" | "ready" | "none" | "error";
  suggestion: string;
  reason?: NoSuggestionReason;
  message?: string;
}

const IDLE: State = { key: null, status: "idle", suggestion: "" };

/**
 * AI writing suggestions for Schreiben tasks, with an explicit status for the UI instead of failing
 * silently. One suggestion at a time; `key` identifies the text field (task index) it belongs to.
 */
export default function useWritingSuggestions() {
  const { user } = useAuth();
  const aiConfig = useAIConfig();
  const [enabled, setEnabledState] = useState(() => {
    try {
      return localStorage.getItem(ENABLED_KEY) !== "off";
    } catch {
      return true;
    }
  });
  const [state, setState] = useState<State>(IDLE);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Bumped on every new request/clear so late answers for old text are ignored
  const requestId = useRef(0);

  // Available on every plan: suggestions run on the user's own Gemini key, so the plan
  // (and the backend's advancedSuggestions flag) no longer matters here.
  const blocked: SuggestionStatus | null = !enabled ? "off" : !user ? "signed-out" : !aiConfig ? "no-key" : null;

  const cancel = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    requestId.current++;
  }, []);

  useEffect(() => cancel, [cancel]);

  const clear = useCallback(() => {
    cancel();
    setState(IDLE);
  }, [cancel]);

  /** Ask for the next words of `text` after `delay` ms (debounced: a new call replaces the pending one). */
  const request = useCallback(
    (key: number, context: string, text: string, wordCount: number, delay = 1500) => {
      cancel();
      setState({ key, status: "idle", suggestion: "" });
      if (blocked || !text.trim()) return;
      const id = requestId.current;
      timer.current = setTimeout(async () => {
        setState({ key, status: "loading", suggestion: "" });
        try {
          const result = await suggestNextWords(context, text, wordCount);
          if (id !== requestId.current) return;
          setState(
            result.text
              ? { key, status: "ready", suggestion: result.text }
              : { key, status: "none", suggestion: "", reason: result.reason }
          );
        } catch (e) {
          if (id !== requestId.current) return;
          setState({ key, status: "error", suggestion: "", message: (e as Error).message });
        }
      }, delay);
    },
    [blocked, cancel]
  );

  const setEnabled = (on: boolean) => {
    try {
      localStorage.setItem(ENABLED_KEY, on ? "on" : "off");
    } catch {
      // not persisted
    }
    setEnabledState(on);
    if (!on) clear();
  };

  return {
    enabled,
    setEnabled,
    request,
    clear,
    /** Suggestion for this field ("" when none) */
    suggestionFor: (key: number) => (!blocked && state.key === key ? state.suggestion : ""),
    /** What the status bar of this field should show */
    statusFor: (key: number): SuggestionStatus => blocked ?? (state.key === key ? state.status : "idle"),
    reasonFor: (key: number) => (state.key === key ? state.reason : undefined),
    messageFor: (key: number) => (state.key === key ? state.message : undefined),
  };
}

export type WritingSuggestions = ReturnType<typeof useWritingSuggestions>;
