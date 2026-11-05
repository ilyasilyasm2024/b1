import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { authService } from "../../services/auth";
import { userService, type User } from "../../services/user";

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
  const [token, setToken] = useState<string | null>(authService.getToken());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      userService.getProfile().then((res) => {
        if (res.data) {
          setUser(res.data);
        } else {
          // Token is invalid or expired
          authService.clearToken();
          setToken(null);
        }
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const login = (newToken: string, userData: User) => {
    authService.saveToken(newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = async () => {
    await authService.logout(user?._id);
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
