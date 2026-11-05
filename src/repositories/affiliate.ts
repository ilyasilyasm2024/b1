import { api } from "./api";

export interface ReferralValidation {
  valid: boolean;
  referralCode?: string;
  discountPercent?: number;
  influencerName?: string;
}

export const affiliateRepository = {
  validateReferral: (code: string) =>
    api.get<ReferralValidation>(`/affiliate/validate/${encodeURIComponent(code)}`),
};
