import { api } from "./api";

export type PaidPlan = "silver" | "gold" | "platinum" | "lifetime";
export type Billing = "monthly" | "yearly";

export interface CardDetails {
  number: string;
  expiry: string; // "YYYY-MM"
  cvv: string;
}

// Process a card payment directly via the backend (PayPal server-side).
export async function payWithCard(
  plan: PaidPlan,
  billing: Billing,
  card: CardDetails
): Promise<{ plan?: string; error?: string }> {
  const res = await api.post<{ plan: string; subscriptionExpiresAt: string }>("/billing/pay-card", {
    plan,
    billing,
    card,
  });
  if (res.error) return { error: res.error };
  return { plan: res.data?.plan };
}
