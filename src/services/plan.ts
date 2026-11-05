import { userRepository, type PlanType } from "../repositories/user";

export type { PlanType };

// Plan limits configuration
const PLAN_LIMITS = {
  beta: {
    modelTests: 0,
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
    modelTests: 0,
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
    advancedSuggestions: true,
  },
  silver: {
    modelTests: 0,
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
    advancedSuggestions: true,
  },
  gold: {
    modelTests: 0,
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
    advancedSuggestions: true,
  },
  platinum: {
    modelTests: 0,
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
    modelTests: 0,
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

export type PlanLimits = typeof PLAN_LIMITS[PlanType];

export interface PlanState {
  plan: PlanType;
  limits: PlanLimits;
  isExpired: boolean;
  daysRemaining: number | null; // null for free/lifetime
  expiresAt: Date | null;
}

const ALL_PLANS: PlanType[] = ["beta", "free", "silver", "gold", "platinum", "lifetime"];

export const planService = {
  fetchPlan: () => userRepository.getPlan(),

  getPlanLimits: (plan: PlanType): PlanLimits => PLAN_LIMITS[plan],

  getAllPlans: (): PlanType[] => ALL_PLANS,

  // Effective plan: an expired paid plan falls back to the free limits.
  resolve(plan: PlanType, limits: PlanLimits, expiresAtRaw: string | null): PlanState {
    const expiresAt = expiresAtRaw ? new Date(expiresAtRaw) : null;
    const hasExpiry = plan !== "free" && plan !== "lifetime" && expiresAt !== null;

    const isExpired = hasExpiry && expiresAt! < new Date();

    let daysRemaining: number | null = null;
    if (hasExpiry) {
      const diff = expiresAt!.getTime() - Date.now();
      daysRemaining = diff <= 0 ? 0 : Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    return {
      plan: isExpired ? "free" : plan,
      limits: isExpired ? PLAN_LIMITS.free : limits,
      isExpired,
      daysRemaining,
      expiresAt,
    };
  },

  // -1 means unlimited.
  canUse: (limit: number, current: number) => limit === -1 || current < limit,

  hasFeature(limits: PlanLimits, feature: keyof PlanLimits): boolean {
    const value = limits[feature];
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return (value as number) !== 0;
    return false;
  },

  isUnlimited: (limits: PlanLimits, feature: keyof PlanLimits) => limits[feature] === -1,
};
