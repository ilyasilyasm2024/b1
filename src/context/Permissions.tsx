import { createContext, useContext, useMemo, useEffect, useState, type ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { api } from "../services/api";

// Plan types
export type PlanType = "beta" | "free" | "silver" | "gold" | "platinum" | "lifetime";

// Plan limits configuration
const PLAN_LIMITS = {
  beta: {
    modelTests: 15,
    vocabularyCapacity: -1,
    schreibenSaves: -1,
    sprechenRecordings: -1,
    aiTranslationsPerDay: -1,
    chatMessages: -1,
    progressSync: true,
    textHighlighting: true,
    audioRecording: true,
    audioTranscript: true,
    adFree: true,
    contextSentences: true,
    advancedSuggestions: true,
  },
  free: {
    modelTests: 1,
    vocabularyCapacity: 50,
    schreibenSaves: 2,
    sprechenRecordings: 2,
    aiTranslationsPerDay: 50,
    chatMessages: 20,
    progressSync: false,
    textHighlighting: false,
    audioRecording: true,
    audioTranscript: false,
    adFree: false,
    contextSentences: false,
    advancedSuggestions: false,
  },
  silver: {
    modelTests: 5,
    vocabularyCapacity: 500,
    schreibenSaves: 4,
    sprechenRecordings: 4,
    aiTranslationsPerDay: -1,
    chatMessages: 500,
    progressSync: true,
    textHighlighting: true,
    audioRecording: true,
    audioTranscript: false,
    adFree: true,
    contextSentences: false,
    advancedSuggestions: false,
  },
  gold: {
    modelTests: 15,
    vocabularyCapacity: 2500,
    schreibenSaves: 15,
    sprechenRecordings: 15,
    aiTranslationsPerDay: -1,
    chatMessages: 1000,
    progressSync: true,
    textHighlighting: true,
    audioRecording: true,
    audioTranscript: false,
    adFree: true,
    contextSentences: true,
    advancedSuggestions: false,
  },
  platinum: {
    modelTests: 15,
    vocabularyCapacity: -1,
    schreibenSaves: 60,
    sprechenRecordings: 60,
    aiTranslationsPerDay: -1,
    chatMessages: -1,
    progressSync: true,
    textHighlighting: true,
    audioRecording: true,
    audioTranscript: true,
    adFree: true,
    contextSentences: true,
    advancedSuggestions: true,
  },
  lifetime: {
    modelTests: 15,
    vocabularyCapacity: -1,
    schreibenSaves: 60,
    sprechenRecordings: 60,
    aiTranslationsPerDay: -1,
    chatMessages: -1,
    progressSync: true,
    textHighlighting: true,
    audioRecording: true,
    audioTranscript: true,
    adFree: true,
    contextSentences: true,
    advancedSuggestions: true,
  },
} as const;

type PlanLimits = typeof PLAN_LIMITS[PlanType];

interface PermissionsContextType {
  plan: PlanType;
  limits: PlanLimits;
  isExpired: boolean;
  daysRemaining: number | null; // null for free/lifetime
  expiresAt: Date | null;
  // Quick permission checks
  canAccessModelTest: (testNumber: number) => boolean;
  canAddVocabulary: (currentCount: number) => boolean;
  canSaveSchreiben: (currentSaves: number) => boolean;
  canRecordSprechen: (currentRecordings: number) => boolean;
  canUseAI: (todayUsage: number) => boolean;
  canSendChat: (totalSent: number) => boolean;
  hasFeature: (feature: keyof PlanLimits) => boolean;
  isUnlimited: (feature: keyof PlanLimits) => boolean;
}

const PermissionsContext = createContext<PermissionsContextType | null>(null);

export function PermissionsProvider({ children }: { children: ReactNode }) {
  const { user, token } = useAuth();
  const [planData, setPlanData] = useState<{ plan: PlanType; limits: PlanLimits; expiresAt: string | null } | null>(null);

  // Fetch plan from backend when user is logged in
  useEffect(() => {
    if (user && token) {
      api.get<{ plan: PlanType; limits: PlanLimits; subscriptionExpiresAt: string | null }>("/users/me/plan").then((res) => {
        if (res.data) {
          setPlanData({
            plan: res.data.plan,
            limits: res.data.limits as unknown as PlanLimits,
            expiresAt: res.data.subscriptionExpiresAt,
          });
        }
      });
    } else {
      setPlanData(null);
    }
  }, [user, token]);

  // Use backend data if available, otherwise fall back to local defaults
  const plan: PlanType = planData?.plan || (user as any)?.plan || "beta";
  const limits = (planData?.limits || PLAN_LIMITS[plan]) as PlanLimits;

  const expiresAtRaw: string | null = planData?.expiresAt || (user as any)?.subscriptionExpiresAt || null;
  const expiresAt = expiresAtRaw ? new Date(expiresAtRaw) : null;

  const isExpired = (() => {
    if (plan === "free" || plan === "lifetime") return false;
    if (!expiresAt) return false;
    return expiresAt < new Date();
  })();

  const daysRemaining = (() => {
    if (plan === "free" || plan === "lifetime") return null;
    if (!expiresAt) return null;
    const diff = expiresAt.getTime() - Date.now();
    if (diff <= 0) return 0;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  })();

  // If expired, fall back to free limits
  const effectiveLimits = isExpired ? PLAN_LIMITS.free : limits;
  const effectivePlan = isExpired ? "free" : plan;

  const permissions = useMemo<PermissionsContextType>(() => ({
    plan: effectivePlan,
    limits: effectiveLimits,
    isExpired,
    daysRemaining,
    expiresAt,

    canAccessModelTest: (testNumber: number) => {
      return testNumber <= effectiveLimits.modelTests;
    },

    canAddVocabulary: (currentCount: number) => {
      if (effectiveLimits.vocabularyCapacity === -1) return true;
      return currentCount < effectiveLimits.vocabularyCapacity;
    },

    canSaveSchreiben: (currentSaves: number) => {
      if (effectiveLimits.schreibenSaves === -1) return true;
      return currentSaves < effectiveLimits.schreibenSaves;
    },

    canRecordSprechen: (currentRecordings: number) => {
      if (effectiveLimits.sprechenRecordings === -1) return true;
      return currentRecordings < effectiveLimits.sprechenRecordings;
    },

    canUseAI: (todayUsage: number) => {
      if (effectiveLimits.aiTranslationsPerDay === -1) return true;
      return todayUsage < effectiveLimits.aiTranslationsPerDay;
    },

    canSendChat: (totalSent: number) => {
      if (effectiveLimits.chatMessages === -1) return true;
      return totalSent < effectiveLimits.chatMessages;
    },

    hasFeature: (feature: keyof PlanLimits) => {
      const value = effectiveLimits[feature];
      if (typeof value === "boolean") return value;
      if (typeof value === "number") return (value as number) !== 0;
      return false;
    },

    isUnlimited: (feature: keyof PlanLimits) => {
      return effectiveLimits[feature] === -1;
    },
  }), [effectivePlan, effectiveLimits, isExpired, daysRemaining, expiresAt]);

  return (
    <PermissionsContext.Provider value={permissions}>
      {children}
    </PermissionsContext.Provider>
  );
}

export function usePermissions() {
  const context = useContext(PermissionsContext);
  if (!context) {
    throw new Error("usePermissions must be used within PermissionsProvider");
  }
  return context;
}

// Helper: Get limits for a specific plan (useful for pricing page comparisons)
export function getPlanLimits(plan: PlanType) {
  return PLAN_LIMITS[plan];
}

// Helper: Get all plan names
export function getAllPlans(): PlanType[] {
  return ["beta", "free", "silver", "gold", "platinum", "lifetime"];
}
