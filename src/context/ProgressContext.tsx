import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useAnswers } from "./AnswersContext";

// Total questions per module
const MODULE_TOTALS: Record<string, number> = {
  "m1": 68, // Lesen: 6+6+8+7+4=31, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
};

// Map of section IDs to their question counts for calculating progress from stored answers
const SECTION_QUESTION_COUNTS: Record<string, number> = {
  "m1-lesen-teil1": 6,
  "m1-lesen-teil2a": 3,
  "m1-lesen-teil2b": 3,
  "m1-lesen-teil3": 8,
  "m1-lesen-teil4": 7,
  "m1-lesen-teil5": 4,
  "m1-hoeren-teil1-rf": 5,
  "m1-hoeren-teil1-mc": 5,
  "m1-hoeren-teil2": 5,
  "m1-hoeren-teil3": 7,
  "m1-hoeren-teil4": 8,
  "m1-schreiben": 3,
  "m1-sprechen": 4,
};

interface ProgressContextType {
  updateProgress: (sectionId: string, answered: number, total: number) => void;
  getModuleProgress: (modulePrefix: string) => { answered: number; total: number; percent: number };
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { getAnswers, getDone } = useAnswers();

  // Calculate progress directly from stored answers — no need to wait for components to mount
  const getModuleProgress = useCallback((modulePrefix: string) => {
    const totalQuestions = MODULE_TOTALS[modulePrefix] || 0;
    let totalAnswered = 0;

    for (const [sectionId] of Object.entries(SECTION_QUESTION_COUNTS)) {
      if (!sectionId.startsWith(modulePrefix)) continue;

      // Schreiben and Sprechen use "done" arrays
      if (sectionId === `${modulePrefix}-schreiben` || sectionId === `${modulePrefix}-sprechen`) {
        const doneArr = getDone(sectionId);
        if (doneArr) {
          totalAnswered += doneArr.filter(Boolean).length;
        }
      } else {
        // Regular answer arrays
        const answers = getAnswers<unknown>(sectionId);
        if (answers) {
          totalAnswered += answers.filter((a) => a !== null && a !== "").length;
        }
      }
    }

    const percent = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;
    return { answered: totalAnswered, total: totalQuestions, percent };
  }, [getAnswers, getDone]);

  // Keep updateProgress for backward compat but it's now a no-op
  const updateProgress = useCallback(() => {}, []);

  return (
    <ProgressContext.Provider value={{ updateProgress, getModuleProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
}
