import { api } from "./api";

export interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isConnected: boolean;
  isVerified: boolean;
  firstTour: boolean;
  streak: number;
  loginDates: string[];
  imageUrl: string;
  timeSpentInOurApp: number;
}

export type PlanType = "beta" | "free" | "silver" | "gold" | "platinum" | "lifetime";

// Backend: GET /users/me/plan (config/plans.js PLAN_LIMITS, -1 = unlimited)
export interface PlanResponse {
  plan: PlanType;
  limits: Record<string, number | boolean>;
  subscriptionExpiresAt: string | null;
}

export const userRepository = {
  getProfile: () => api.get<User>("/users/me"),

  getPlan: () => api.get<PlanResponse>("/users/me/plan"),

  completeTour: () => api.post<{ message: string }>("/users/me/tour-completed", {}),
};
