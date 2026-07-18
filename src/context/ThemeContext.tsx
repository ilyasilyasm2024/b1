import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type ThemePreset = "default" | "girls" | "boys";

export interface ThemeColors {
  // Page
  pageBg: string;
  pageText: string;
  // Cards / modules
  cardBg: string;
  cardBorder: string;
  // Accent
  accent: string;
  accentHover: string;
  accentText: string;
  // Top bar
  barBg: string;
  barBorder: string;
  // Module header
  moduleRing: string;
  moduleBadge: string;
}

export interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

interface ThemeContextType {
  preset: ThemePreset;
  colors: ThemeColors;
  stickers: Sticker[];
  setPreset: (p: ThemePreset) => void;
  addSticker: (emoji: string) => void;
  removeSticker: (id: string) => void;
  moveSticker: (id: string, x: number, y: number) => void;
  clearStickers: () => void;
}

const PRESETS: Record<ThemePreset, ThemeColors> = {
  default: {
    pageBg: "#f9fafb",
    pageText: "#111827",
    cardBg: "#ffffff",
    cardBorder: "#e5e7eb",
    accent: "#111827",
    accentHover: "#374151",
    accentText: "#ffffff",
    barBg: "rgba(255,255,255,0.9)",
    barBorder: "#e5e7eb",
    moduleRing: "#3b82f6",
    moduleBadge: "#111827",
  },
  girls: {
    pageBg: "#fdf2f8",
    pageText: "#831843",
    cardBg: "#ffffff",
    cardBorder: "#fbcfe8",
    accent: "#db2777",
    accentHover: "#be185d",
    accentText: "#ffffff",
    barBg: "rgba(253,242,248,0.95)",
    barBorder: "#fbcfe8",
    moduleRing: "#ec4899",
    moduleBadge: "#9d174d",
  },
  boys: {
    pageBg: "#0f172a",
    pageText: "#e2e8f0",
    cardBg: "#1e293b",
    cardBorder: "#334155",
    accent: "#3b82f6",
    accentHover: "#2563eb",
    accentText: "#ffffff",
    barBg: "rgba(15,23,42,0.95)",
    barBorder: "#334155",
    moduleRing: "#3b82f6",
    moduleBadge: "#e2e8f0",
  },
};

const STORAGE_KEY = "b1-theme";
const STICKERS_KEY = "b1-stickers";

function loadPreset(): ThemePreset {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in PRESETS) return saved as ThemePreset;
  } catch {}
  return "default";
}

function loadStickers(): Sticker[] {
  try {
    const saved = localStorage.getItem(STICKERS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preset, setPresetState] = useState<ThemePreset>(loadPreset);
  const [stickers, setStickers] = useState<Sticker[]>(loadStickers);

  const colors = PRESETS[preset];

  // Apply CSS variables to document root whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-page-bg", colors.pageBg);
    root.style.setProperty("--theme-page-text", colors.pageText);
    root.style.setProperty("--theme-card-bg", colors.cardBg);
    root.style.setProperty("--theme-card-border", colors.cardBorder);
    root.style.setProperty("--theme-accent", colors.accent);
    root.style.setProperty("--theme-accent-hover", colors.accentHover);
    root.style.setProperty("--theme-accent-text", colors.accentText);
    root.style.setProperty("--theme-bar-bg", colors.barBg);
    root.style.setProperty("--theme-bar-border", colors.barBorder);
    root.style.setProperty("--theme-module-ring", colors.moduleRing);
    root.style.setProperty("--theme-module-badge", colors.moduleBadge);
  }, [colors]);

  const setPreset = (p: ThemePreset) => {
    setPresetState(p);
    localStorage.setItem(STORAGE_KEY, p);
  };

  // Sticker management
  useEffect(() => {
    localStorage.setItem(STICKERS_KEY, JSON.stringify(stickers));
  }, [stickers]);

  const addSticker = (emoji: string) => {
    const sticker: Sticker = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      emoji,
      x: Math.round(100 + Math.random() * 300),
      y: Math.round(200 + Math.random() * 400),
      size: 32 + Math.floor(Math.random() * 24),
      rotation: Math.round(Math.random() * 30 - 15),
    };
    setStickers((prev) => [...prev, sticker]);
  };

  const removeSticker = (id: string) => {
    setStickers((prev) => prev.filter((s) => s.id !== id));
  };

  const moveSticker = (id: string, x: number, y: number) => {
    setStickers((prev) => prev.map((s) => (s.id === id ? { ...s, x, y } : s)));
  };

  const clearStickers = () => setStickers([]);

  return (
    <ThemeContext.Provider value={{ preset, colors, stickers, setPreset, addSticker, removeSticker, moveSticker, clearStickers }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export { PRESETS };
