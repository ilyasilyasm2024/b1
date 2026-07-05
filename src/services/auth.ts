import { api } from "./api";

export interface SignupData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginData {
  identifier: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  isConnected: boolean;
  isVerified: boolean;
  imageUrl: string;
  timeSpentInOurApp: number;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface MessageResponse {
  message: string;
}

export const authService = {
  signup: (data: SignupData) => api.post<MessageResponse>("/auth/signup", data),

  login: (data: LoginData) => api.post<LoginResponse>("/auth/login", data),

  logout: (userId: string) => api.post<MessageResponse>("/auth/logout", { userId }),

  verifyEmail: (token: string) => api.get<MessageResponse>(`/auth/verify-email?token=${token}`),

  resendVerification: (email: string) =>
    api.post<MessageResponse>("/auth/resend-verification", { email }),

  forgotPassword: (email: string) =>
    api.post<MessageResponse>("/auth/forgot-password", { email }),

  resetPassword: (token: string, password: string) =>
    api.post<MessageResponse>("/auth/reset-password", { token, password }),

  getProfile: () => api.get<User>("/users/me"),
};
