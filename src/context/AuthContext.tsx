import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { authService, type User } from "../services/auth";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      authService.getProfile().then((res) => {
        if (res.data) {
          setUser(res.data);
        } else {
          // Token is invalid or expired
          localStorage.removeItem("token");
          setToken(null);
        }
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const login = (newToken: string, userData: User) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = async () => {
    if (user) {
      await authService.logout(user._id);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("b1-answers");
    localStorage.removeItem("b1-vocabulary");
    localStorage.removeItem("b1-highlights");
    localStorage.removeItem("b1-tour-seen");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
