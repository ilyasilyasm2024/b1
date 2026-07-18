import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useAnswers } from "./AnswersContext";

// Total questions per module
const MODULE_TOTALS: Record<string, number> = {
  "m1": 68, // Lesen: 6+6+8+7+4=31, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m2": 68, // Same structure as m1
  "m3": 68, // Same structure as m1
  "m4": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m5": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m6": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m7": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m8": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m9": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m10": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m11": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m12": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m13": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m14": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
  "m15": 67, // Lesen: 6+3+3+7+7+4=30, Hören: 10+5+7+8=30, Schreiben: 3, Sprechen: 4
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
  // Module 2
  "m2-lesen-teil1": 6,
  "m2-lesen-teil2a": 3,
  "m2-lesen-teil2b": 3,
  "m2-lesen-teil3": 7,
  "m2-lesen-teil4": 7,
  "m2-lesen-teil5": 4,
  "m2-hoeren-teil1-rf": 5,
  "m2-hoeren-teil1-mc": 5,
  "m2-hoeren-teil2": 5,
  "m2-hoeren-teil3": 7,
  "m2-hoeren-teil4": 8,
  "m2-schreiben": 3,
  "m2-sprechen": 4,
  // Module 3
  "m3-lesen-teil1": 6,
  "m3-lesen-teil2a": 3,
  "m3-lesen-teil2b": 3,
  "m3-lesen-teil3": 7,
  "m3-lesen-teil4": 7,
  "m3-lesen-teil5": 4,
  "m3-hoeren-teil1-rf": 5,
  "m3-hoeren-teil1-mc": 5,
  "m3-hoeren-teil2": 5,
  "m3-hoeren-teil3": 7,
  "m3-hoeren-teil4": 8,
  "m3-schreiben": 3,
  "m3-sprechen": 4,
  // Module 4
  "m4-lesen-teil1": 6,
  "m4-lesen-teil2a": 3,
  "m4-lesen-teil2b": 3,
  "m4-lesen-teil3": 7,
  "m4-lesen-teil4": 7,
  "m4-lesen-teil5": 4,
  "m4-hoeren-teil1-rf": 5,
  "m4-hoeren-teil1-mc": 5,
  "m4-hoeren-teil2": 5,
  "m4-hoeren-teil3": 7,
  "m4-hoeren-teil4": 8,
  "m4-schreiben": 3,
  "m4-sprechen": 4,
  // Module 5
  "m5-lesen-teil1": 6,
  "m5-lesen-teil2a": 3,
  "m5-lesen-teil2b": 3,
  "m5-lesen-teil3": 7,
  "m5-lesen-teil4": 7,
  "m5-lesen-teil5": 4,
  "m5-hoeren-teil1-rf": 5,
  "m5-hoeren-teil1-mc": 5,
  "m5-hoeren-teil2": 5,
  "m5-hoeren-teil3": 7,
  "m5-hoeren-teil4": 8,
  "m5-schreiben": 3,
  "m5-sprechen": 4,
  // Module 6
  "m6-lesen-teil1": 6,
  "m6-lesen-teil2a": 3,
  "m6-lesen-teil2b": 3,
  "m6-lesen-teil3": 7,
  "m6-lesen-teil4": 7,
  "m6-lesen-teil5": 4,
  "m6-hoeren-teil1-rf": 5,
  "m6-hoeren-teil1-mc": 5,
  "m6-hoeren-teil2": 5,
  "m6-hoeren-teil3": 7,
  "m6-hoeren-teil4": 8,
  "m6-schreiben": 3,
  "m6-sprechen": 4,
  // Module 7
  "m7-lesen-teil1": 6,
  "m7-lesen-teil2a": 3,
  "m7-lesen-teil2b": 3,
  "m7-lesen-teil3": 7,
  "m7-lesen-teil4": 7,
  "m7-lesen-teil5": 4,
  "m7-hoeren-teil1-rf": 5,
  "m7-hoeren-teil1-mc": 5,
  "m7-hoeren-teil2": 5,
  "m7-hoeren-teil3": 7,
  "m7-hoeren-teil4": 8,
  "m7-schreiben": 3,
  "m7-sprechen": 4,
  // Module 8
  "m8-lesen-teil1": 6,
  "m8-lesen-teil2a": 3,
  "m8-lesen-teil2b": 3,
  "m8-lesen-teil3": 7,
  "m8-lesen-teil4": 7,
  "m8-lesen-teil5": 4,
  "m8-hoeren-teil1-rf": 5,
  "m8-hoeren-teil1-mc": 5,
  "m8-hoeren-teil2": 5,
  "m8-hoeren-teil3": 7,
  "m8-hoeren-teil4": 8,
  "m8-schreiben": 3,
  "m8-sprechen": 4,
  // Module 9
  "m9-lesen-teil1": 6,
  "m9-lesen-teil2a": 3,
  "m9-lesen-teil2b": 3,
  "m9-lesen-teil3": 7,
  "m9-lesen-teil4": 7,
  "m9-lesen-teil5": 4,
  "m9-hoeren-teil1-rf": 5,
  "m9-hoeren-teil1-mc": 5,
  "m9-hoeren-teil2": 5,
  "m9-hoeren-teil3": 7,
  "m9-hoeren-teil4": 8,
  "m9-schreiben": 3,
  "m9-sprechen": 4,
  // Module 10
  "m10-lesen-teil1": 6,
  "m10-lesen-teil2a": 3,
  "m10-lesen-teil2b": 3,
  "m10-lesen-teil3": 7,
  "m10-lesen-teil4": 7,
  "m10-lesen-teil5": 4,
  "m10-hoeren-teil1-rf": 5,
  "m10-hoeren-teil1-mc": 5,
  "m10-hoeren-teil2": 5,
  "m10-hoeren-teil3": 7,
  "m10-hoeren-teil4": 8,
  "m10-schreiben": 3,
  "m10-sprechen": 4,
  // Module 11
  "m11-lesen-teil1": 6,
  "m11-lesen-teil2a": 3,
  "m11-lesen-teil2b": 3,
  "m11-lesen-teil3": 7,
  "m11-lesen-teil4": 7,
  "m11-lesen-teil5": 4,
  "m11-hoeren-teil1-rf": 5,
  "m11-hoeren-teil1-mc": 5,
  "m11-hoeren-teil2": 5,
  "m11-hoeren-teil3": 7,
  "m11-hoeren-teil4": 8,
  "m11-schreiben": 3,
  "m11-sprechen": 4,
  // Module 12
  "m12-lesen-teil1": 6,
  "m12-lesen-teil2a": 3,
  "m12-lesen-teil2b": 3,
  "m12-lesen-teil3": 7,
  "m12-lesen-teil4": 7,
  "m12-lesen-teil5": 4,
  "m12-hoeren-teil1-rf": 5,
  "m12-hoeren-teil1-mc": 5,
  "m12-hoeren-teil2": 5,
  "m12-hoeren-teil3": 7,
  "m12-hoeren-teil4": 8,
  "m12-schreiben": 3,
  "m12-sprechen": 4,
  // Module 13
  "m13-lesen-teil1": 6,
  "m13-lesen-teil2a": 3,
  "m13-lesen-teil2b": 3,
  "m13-lesen-teil3": 7,
  "m13-lesen-teil4": 7,
  "m13-lesen-teil5": 4,
  "m13-hoeren-teil1-rf": 5,
  "m13-hoeren-teil1-mc": 5,
  "m13-hoeren-teil2": 5,
  "m13-hoeren-teil3": 7,
  "m13-hoeren-teil4": 8,
  "m13-schreiben": 3,
  "m13-sprechen": 4,
  // Module 14
  "m14-lesen-teil1": 6,
  "m14-lesen-teil2a": 3,
  "m14-lesen-teil2b": 3,
  "m14-lesen-teil3": 7,
  "m14-lesen-teil4": 7,
  "m14-lesen-teil5": 4,
  "m14-hoeren-teil1-rf": 5,
  "m14-hoeren-teil1-mc": 5,
  "m14-hoeren-teil2": 5,
  "m14-hoeren-teil3": 7,
  "m14-hoeren-teil4": 8,
  "m14-schreiben": 3,
  "m14-sprechen": 4,
  // Module 15
  "m15-lesen-teil1": 6,
  "m15-lesen-teil2a": 3,
  "m15-lesen-teil2b": 3,
  "m15-lesen-teil3": 7,
  "m15-lesen-teil4": 7,
  "m15-lesen-teil5": 4,
  "m15-hoeren-teil1-rf": 5,
  "m15-hoeren-teil1-mc": 5,
  "m15-hoeren-teil2": 5,
  "m15-hoeren-teil3": 7,
  "m15-hoeren-teil4": 8,
  "m15-schreiben": 3,
  "m15-sprechen": 4,
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
