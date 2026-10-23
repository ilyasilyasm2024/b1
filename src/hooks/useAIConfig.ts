import { useMemo, useSyncExternalStore } from "react";
import { getAIConfig, getAIConfigSnapshot, subscribeAIConfig, type AIConfig } from "../services/ai";

/** The user's Gemini key + model (null when AI isn't set up); re-renders when it changes. */
export default function useAIConfig(): AIConfig | null {
  const raw = useSyncExternalStore(subscribeAIConfig, getAIConfigSnapshot, () => null);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- re-read only when the stored value changes
  return useMemo(() => getAIConfig(), [raw]);
}
