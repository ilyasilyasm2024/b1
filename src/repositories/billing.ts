import { api } from "./api";

export type PaidPlan = "silver" | "gold" | "platinum" | "lifetime";
export type Billing = "monthly" | "yearly";

// Creates a Lemon Squeezy hosted checkout session and returns its URL.
// The caller redirects the browser there; Lemon Squeezy notifies the
// backend via webhook once payment succeeds, which activates the plan.
export async function createCheckout(
  plan: PaidPlan,
  billing: Billing
): Promise<{ url?: string; error?: string }> {
  const res = await api.post<{ url: string }>("/billing/checkout", {
    plan,
    billing,
  });
  if (res.error) return { error: res.error };
  return { url: res.data?.url };
}
