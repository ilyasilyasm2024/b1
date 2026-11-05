import { createCheckout, type PaidPlan, type Billing } from "../repositories/billing";

export type { PaidPlan, Billing };

export const billingService = {
  createCheckout: (plan: PaidPlan, billing: Billing) => createCheckout(plan, billing),
};
