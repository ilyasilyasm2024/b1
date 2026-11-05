import { authRepository, type SignupData, type LoginData } from "../repositories/auth";
import { localStore } from "../repositories/localStore";

const TOKEN_KEY = "token";
// Local data that belongs to the logged-in user and is dropped on logout.
const USER_DATA_KEYS = ["b1-answers", "b1-vocabulary", "b1-highlights", "b1-tour-seen"];

export const authService = {
  getToken: () => localStore.get(TOKEN_KEY),

  saveToken: (token: string) => localStore.set(TOKEN_KEY, token),

  clearToken: () => localStore.remove(TOKEN_KEY),

  // The referral code is only sent when the signup page validated one.
  signup: (data: Omit<SignupData, "referralCode">, referralCode?: string) =>
    authRepository.signup({ ...data, ...(referralCode ? { referralCode } : {}) }),

  login: (data: LoginData) => authRepository.login(data),

  async logout(userId?: string) {
    if (userId) await authRepository.logout(userId);
    localStore.remove(TOKEN_KEY);
    USER_DATA_KEYS.forEach(localStore.remove);
  },

  verifyEmail: (token: string) => authRepository.verifyEmail(token),

  resendVerification: (email: string) => authRepository.resendVerification(email),

  forgotPassword: (email: string) => authRepository.forgotPassword(email),

  resetPassword: (token: string, password: string) => authRepository.resetPassword(token, password),
};
