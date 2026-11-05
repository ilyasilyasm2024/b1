import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

const STORAGE_KEY = "b1-ai-usage";

interface DailyUsage {
  date: string; // YYYY-MM-DD
  count: number;
}

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadUsage(): DailyUsage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data: DailyUsage = JSON.parse(saved);
      if (data.date === getToday()) return data;
    }
  } catch {}
  return { date: getToday(), count: 0 };
}

function saveUsage(usage: DailyUsage) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
}

interface AIUsageContextType {
  todayUsage: number;
  increment: () => void;
}

const AIUsageContext = createContext<AIUsageContextType | null>(null);

export function AIUsageProvider({ children }: { children: ReactNode }) {
  const [usage, setUsage] = useState<DailyUsage>(loadUsage);

  const increment = useCallback(() => {
    setUsage((prev) => {
      const today = getToday();
      const updated = prev.date === today
        ? { date: today, count: prev.count + 1 }
        : { date: today, count: 1 };
      saveUsage(updated);
      return updated;
    });
  }, []);

  // Reset if day changed
  const todayUsage = usage.date === getToday() ? usage.count : 0;

  return (
    <AIUsageContext.Provider value={{ todayUsage, increment }}>
      {children}
    </AIUsageContext.Provider>
  );
}

export function useAIUsage() {
  const context = useContext(AIUsageContext);
  if (!context) {
    throw new Error("useAIUsage must be used within AIUsageProvider");
  }
  return context;
}
