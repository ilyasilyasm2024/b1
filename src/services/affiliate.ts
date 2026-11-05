import { affiliateRepository, type ReferralValidation } from "../repositories/affiliate";

export type { ReferralValidation };

export const affiliateService = {
  // Returns the referral only when the code is valid, otherwise null.
  async validateReferral(code: string): Promise<ReferralValidation | null> {
    const res = await affiliateRepository.validateReferral(code);
    return res.data?.valid ? res.data : null;
  },
};
