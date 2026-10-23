import { useState } from "react";
import { useTheme, PRESETS, type ThemePreset } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import DockButton from "./DockButton";

const STICKER_OPTIONS = [
  // Neutral / study
  "⭐", "📚", "✏️", "🎯", "💡", "🎓", "📝", "🏆",
  // Girls
  "🌸", "🦋", "💖", "🌈", "🦄", "🌺", "💎", "🎀",
  // Boys
  "⚽", "🏀", "🎮", "🚀", "⚡", "🔥", "🦁", "🏎️",
  // Creative
  "🎵", "🎨", "☁️", "🌟", "🍀", "🎉", "🐱", "🐶",
];

// "toolbar": header button with a dropdown; "dock": phone bottom-bar item whose panel opens above the dock.
export default function ThemePicker({ variant = "toolbar" }: { variant?: "toolbar" | "dock" }) {
  const { preset, setPreset, addSticker, clearStickers, stickers } = useTheme();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const themes: { key: ThemePreset; label: string; emoji: string; description: string }[] = [
    { key: "default", label: t("theme.default"), emoji: "⚪", description: t("theme.defaultDescription") },
    { key: "girls", label: "Pink Dream", emoji: "🌸", description: t("theme.girlsDescription") },
    { key: "boys", label: "Ocean Blue", emoji: "🌊", description: t("theme.boysDescription") },
  ];

  return (
    <div className={variant === "dock" ? "flex-1 min-w-0 flex" : "relative"}>
      {variant === "dock" ? (
        <DockButton
          label={t("theme.button")}
          active={open}
          onClick={() => setOpen((v) => !v)}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          }
        />
      ) : (
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
        title={t("theme.customize")}
        style={{ borderColor: "var(--theme-card-border)" }}
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <span className="text-xs font-medium text-gray-700 hidden sm:inline">{t("theme.button")}</span>
      </button>
      )}

      {open && (
        <div
          className={`${variant === "dock" ? "fixed inset-x-3 max-h-[70vh] overflow-y-auto" : "absolute right-0 top-full mt-2 w-72"} bg-white border border-gray-200 rounded-xl shadow-xl z-[100] p-4`}
          style={variant === "dock" ? { bottom: "calc(5.5rem + env(safe-area-inset-bottom))" } : undefined}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-800">🎨 {t("theme.customize")}</h3>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Theme presets */}
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-2">{t("theme.colorScheme")}</p>
          <div className="space-y-2 mb-4">
            {themes.map((theme) => (
              <button
                key={theme.key}
                onClick={() => setPreset(theme.key)}
                className={`w-full flex items-center gap-3 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  preset === theme.key
                    ? "border-blue-500 bg-blue-50 ring-1 ring-blue-200"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="text-xl">{theme.emoji}</span>
                <div className="text-left flex-1">
                  <p className="text-xs font-semibold text-gray-800">{theme.label}</p>
                  <p className="text-[10px] text-gray-500">{theme.description}</p>
                </div>
                {/* Color preview dots */}
                <div className="flex gap-0.5">
                  <span className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: PRESETS[theme.key].accent }} />
                  <span className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: PRESETS[theme.key].pageBg }} />
                  <span className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: PRESETS[theme.key].moduleRing }} />
                </div>
              </button>
            ))}
          </div>

          {/* Stickers (not available in the plain Standard theme) */}
          {preset === "default" ? (
            <p className="text-[11px] text-gray-500">{t("theme.stickersNotInStandard")}</p>
          ) : (
          <>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-2">
            {t("theme.stickers", { count: stickers.length })}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {STICKER_OPTIONS.map((emoji) => (
              <button
                key={emoji}
                onClick={() => addSticker(emoji)}
                className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 cursor-pointer text-base transition-transform hover:scale-125"
                title={t("theme.addSticker", { emoji })}
              >
                {emoji}
              </button>
            ))}
          </div>
          {stickers.length > 0 && (
            <button
              onClick={clearStickers}
              className="text-[10px] text-red-500 hover:text-red-700 cursor-pointer"
            >
              {t("theme.removeStickers")}
            </button>
          )}
          </>
          )}
        </div>
      )}
    </div>
  );
}
