import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/useAuth";
import useIsMobile from "../hooks/ui/useIsMobile";
import Timer from "../components/exam/shared/Timer";
import ThemePicker from "../components/theme/ThemePicker";
import LanguageSwitcher from "../components/common/LanguageSwitcher";
import StreakCalendar from "../components/common/StreakCalendar";

interface NavBarProps {
  onOpenNotes: () => void;
  onOpenVocab: () => void;
  onOpenAI: () => void;
  aiReady: boolean; // the user's AI key is set up
}

// Fixed top bar. On phones the notes, vocabulary, theme and AI buttons move to the bottom dock.
export default function NavBar({ onOpenNotes, onOpenVocab, onOpenAI, aiReady }: NavBarProps) {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm border-b px-3 py-2" style={{ backgroundColor: "var(--theme-bar-bg)", borderColor: "var(--theme-bar-border)" }}>
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 shrink-0">
          {/* On phones these move to the bottom dock */}
          {!isMobile && user && (
            <button
              onClick={onOpenNotes}
              className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
              title={t("app.myNotes")}
              data-tour="notes-btn"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="text-xs font-medium text-gray-700 hidden sm:inline">{t("app.notes")}</span>
            </button>
          )}
          {!isMobile && (
          <button
            onClick={onOpenVocab}
            className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
            title={t("app.myVocabulary")}
            data-tour="vocab-btn"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-medium text-gray-700 hidden sm:inline">{t("app.vocabulary")}</span>
          </button>
          )}
          {!isMobile && <ThemePicker />}
          <LanguageSwitcher />
          {!isMobile && (
            <button
              onClick={onOpenAI}
              className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
              title={t("aiSettings.title")}
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              <span className="text-xs font-medium text-gray-700">AI</span>
              {/* Status dot: green when the user's key is set up */}
              <span className={`w-1.5 h-1.5 rounded-full ${aiReady ? "bg-emerald-500" : "bg-gray-300"}`} aria-hidden="true" />
            </button>
          )}
        </div>

        <div data-tour="timer">
          <Timer />
        </div>

        {/* Auth section */}
        <div className="flex items-center gap-2 shrink-0" data-tour="auth-section">
          {user ? (
            <>
              <span className="text-xs hidden sm:inline" style={{ color: "var(--theme-page-muted)" }}>
                {t("app.hello", { name: user.firstName })}
              </span>
              {user.streak > 0 && (
                <StreakCalendar />
              )}
              <button
                onClick={logout}
                className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
                title={t("common.signOut")}
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-xs font-medium text-gray-700 hidden sm:inline">{t("common.signOut")}</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-gray-900 text-white rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-gray-800 transition-colors"
              >
                {t("common.signIn")}
              </Link>
              <Link
                to="/signup"
                className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors hidden sm:inline-block"
              >
                {t("common.signUp")}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
