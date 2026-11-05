import { useState, useEffect, useMemo, useRef } from "react";
import { Joyride, STATUS, EVENTS, type EventData } from "react-joyride";
import { useAuth } from "../../hooks/useAuth";
import useIsMobile from "../../hooks/ui/useIsMobile";
import { userService } from "../../../services/user";
import { useTranslation } from "react-i18next";
import { HELP_GUIDES, signInSteps } from "./help/guides";
import { runHelpAction } from "./help/helpActions";

// The "?" button opens a help menu: questions about the app's features. Picking one starts a
// step-by-step guide that opens the right panels and points at what to click.
// New users get the general tour ("tour") once, automatically.
export default function GuidedTour() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  // runKey restarts Joyride from step 1 each time a guide is picked
  const [active, setActive] = useState<{ id: string; runKey: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user && !user.firstTour) {
      const timer = setTimeout(() => setActive((prev) => ({ id: "tour", runKey: (prev?.runKey ?? 0) + 1 })), 800);
      return () => clearTimeout(timer);
    }
  }, [user]);

  // Close the menu on outside click or Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const guide = HELP_GUIDES.find((g) => g.id === active?.id);
  const steps = useMemo(() => {
    if (!guide) return [];
    if (guide.needsAccount && !user) return signInSteps(t);
    return guide.steps({ t, isMobile, signedIn: !!user });
  }, [guide, user, t, isMobile]);

  const startGuide = (id: string) => {
    setMenuOpen(false);
    setQuery("");
    setActive((prev) => ({ id, runKey: (prev?.runKey ?? 0) + 1 }));
  };

  const handleEvent = (data: EventData) => {
    if (data.type === EVENTS.TOUR_END || data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
      const finished = active?.id;
      setActive(null);
      runHelpAction("closePanels");
      if (finished === "tour" && user && !user.firstTour) {
        userService.completeTour();
      }
    }
  };

  const q = query.trim().toLowerCase();
  const visibleGuides = HELP_GUIDES.filter((g) => {
    if (!q) return true;
    return `${t(`help.questions.${g.id}`)} ${t(`help.answers.${g.id}`)}`.toLowerCase().includes(q);
  });

  return (
    <>
      {active && steps.length > 0 && (
        <Joyride
          key={active.runKey}
          steps={steps}
          run
          continuous
          onEvent={handleEvent}
          options={{
            skipBeacon: true,
            showProgress: steps.length > 1,
            targetWaitTimeout: 3000,
            primaryColor: "#111827",
            zIndex: 10000,
            buttons: ["back", "skip", "primary"],
          }}
          locale={{
            back: t("tour.back"),
            close: t("tour.close"),
            last: t("tour.done"),
            next: t("tour.next"),
            skip: t("tour.skip"),
          }}
        />
      )}

      <div ref={menuRef} className="fixed bottom-24 sm:bottom-5 right-5 z-50 flex flex-col items-end">
        {menuOpen && (
          <div
            role="dialog"
            aria-label={t("help.title")}
            className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in"
          >
            <div className="px-4 pt-4 pb-3 border-b border-gray-100">
              <h2 className="text-sm font-bold text-gray-900">{t("help.title")}</h2>
              <p className="text-xs text-gray-500 mt-0.5">{t("help.subtitle")}</p>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("help.search")}
                autoFocus={!isMobile}
                className="mt-3 w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <ul className="overflow-y-auto py-1">
              {visibleGuides.map((g) => (
                <li key={g.id}>
                  <button
                    onClick={() => startGuide(g.id)}
                    className="w-full text-left px-4 py-2.5 flex items-start gap-3 hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="text-lg leading-none mt-0.5" aria-hidden="true">{g.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-gray-900">{t(`help.questions.${g.id}`)}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">{t(`help.answers.${g.id}`)}</span>
                      {g.needsAccount && !user && (
                        <span className="inline-block mt-1 text-[10px] font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5">
                          {t("help.needsAccount")}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
              {visibleGuides.length === 0 && (
                <li className="px-4 py-6 text-center text-xs text-gray-400">{t("help.noResults")}</li>
              )}
            </ul>
          </div>
        )}

        {/* Help button - bottom right */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          className="w-10 h-10 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
          title={t("help.title")}
          aria-label={t("help.title")}
        >
          <span className="text-lg font-bold">{menuOpen ? "×" : "?"}</span>
        </button>
      </div>
    </>
  );
}
