import { createContext, useContext, useMemo, useEffect, useState, type ReactNode } from "react";
import { useAuth } from "./useAuth";
import { planService, type PlanType, type PlanLimits } from "../../services/plan";

export type { PlanType };

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
      planService.fetchPlan().then((res) => {
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
  const limits = planData?.limits || planService.getPlanLimits(plan);

  const expiresAtRaw: string | null = planData?.expiresAt || (user as any)?.subscriptionExpiresAt || null;

  // If expired, falls back to the free plan and limits
  const { plan: effectivePlan, limits: effectiveLimits, isExpired, daysRemaining, expiresAt } =
    planService.resolve(plan, limits, expiresAtRaw);

  const permissions = useMemo<PermissionsContextType>(() => ({
    plan: effectivePlan,
    limits: effectiveLimits,
    isExpired,
    daysRemaining,
    expiresAt,

    canAccessModelTest: (testNumber: number) => {
      return false
      return testNumber <= effectiveLimits.modelTests;
    },

    canAddVocabulary: (currentCount: number) => planService.canUse(effectiveLimits.vocabularyCapacity, currentCount),

    canSaveSchreiben: (currentSaves: number) => planService.canUse(effectiveLimits.schreibenSaves, currentSaves),

    canRecordSprechen: (currentRecordings: number) =>
      planService.canUse(effectiveLimits.sprechenRecordings, currentRecordings),

    canUseAI: (todayUsage: number) => planService.canUse(effectiveLimits.aiTranslationsPerDay, todayUsage),

    canSendChat: (totalSent: number) => planService.canUse(effectiveLimits.chatMessages, totalSent),

    hasFeature: (feature: keyof PlanLimits) => planService.hasFeature(effectiveLimits, feature),

    isUnlimited: (feature: keyof PlanLimits) => planService.isUnlimited(effectiveLimits, feature),
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
