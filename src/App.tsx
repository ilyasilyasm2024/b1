import { useState } from "react";
import { Link } from "react-router-dom";
import Module1 from "./components/Module1";
import Module2 from "./components/Module2";
import Module3 from "./components/Module3";
import Module4 from "./components/Module4";
import Module5 from "./components/Module5";
import Module6 from "./components/Module6";
import Module7 from "./components/Module7";
import Module8 from "./components/Module8";
import Module9 from "./components/Module9";
import Module10 from "./components/Module10";
import Timer from "./components/Timer";
import VocabularyPanel from "./components/Vocabulary";
import NotesPanel from "./components/NotesPanel";
import FloatingNotes from "./components/FloatingNotes";
import { NotesProvider } from "./context/NotesContext";
import ThemePicker from "./components/ThemePicker";
import BackgroundStickers from "./components/BackgroundStickers";
import { ThemeProvider } from "./context/ThemeContext";
import TextHighlighter from "./components/TextHighlighter";
import { VocabularyProvider } from "./context/VocabularyContext";
import { useAuth } from "./context/AuthContext";
import { ToastProvider } from "./components/Toast";
import { ProgressProvider, useProgress } from "./context/ProgressContext";
import { AnswersProvider } from "./context/AnswersContext";
import { PermissionsProvider, usePermissions } from "./context/Permissions";
import { AIUsageProvider } from "./context/AIUsageContext";
import GuidedTour from "./components/GuidedTour";
import ComingSoon from "./components/ComingSoon";
import GlobalChat from "./components/GlobalChat";
import StreakCalendar from "./components/StreakCalendar";

function AppContent() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [vocabOpen, setVocabOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getModuleProgress } = useProgress();
  const { canAccessModelTest, plan } = usePermissions();
  const m1Progress = getModuleProgress("m1");
  const m2Progress = getModuleProgress("m2");
  const m3Progress = getModuleProgress("m3");
  const m4Progress = getModuleProgress("m4");
  const m5Progress = getModuleProgress("m5");
  const m6Progress = getModuleProgress("m6");
  const m7Progress = getModuleProgress("m7");
  const m8Progress = getModuleProgress("m8");
  const m9Progress = getModuleProgress("m9");
  const m10Progress = getModuleProgress("m10");

  const toggleModule = (key: string) => {
    setOpenModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen pt-16 pb-8 relative" style={{ backgroundColor: "var(--theme-page-bg)", color: "var(--theme-page-text)" }}>
      <BackgroundStickers />
      <GuidedTour />
      <ComingSoon onOpenChat={() => setChatOpen(true)} />
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm border-b px-3 py-2" style={{ backgroundColor: "var(--theme-bar-bg)", borderColor: "var(--theme-bar-border)" }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 shrink-0">
            {user && (
              <button
                onClick={() => setNotesOpen(true)}
                className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
                title="Meine Notizen"
                data-tour="notes-btn"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-xs font-medium text-gray-700 hidden sm:inline">Notizen</span>
              </button>
            )}
            <button
              onClick={() => setVocabOpen(true)}
              className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
              title="Meine Vokabeln"
              data-tour="vocab-btn"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs font-medium text-gray-700 hidden sm:inline">Vokabeln</span>
            </button>
            <ThemePicker />
          </div>

          <div data-tour="timer">
            <Timer />
          </div>

          {/* Auth section */}
          <div className="flex items-center gap-2 shrink-0" data-tour="auth-section">
            {user ? (
              <>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  Hallo, {user.firstName}
                </span>
                {user.streak > 0 && (
                  <StreakCalendar />
                )}
                <button
                  onClick={logout}
                  className="bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors"
                  title="Abmelden"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="text-xs font-medium text-gray-700 hidden sm:inline">Abmelden</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-gray-900 text-white rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-gray-800 transition-colors"
                >
                  Anmelden
                </Link>
                <Link
                  to="/signup"
                  className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors hidden sm:inline-block"
                >
                  Registrieren
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Text Highlighter */}
      <TextHighlighter />

      {/* Vocabulary Panel */}
      <VocabularyPanel isOpen={vocabOpen} onClose={() => setVocabOpen(false)} />

      {/* Notes Panel (left, non-blocking) */}
      <NotesPanel isOpen={notesOpen} onClose={() => setNotesOpen(false)} />

      {/* Floating draggable color notes over the whole app */}
      <FloatingNotes />

      {/* Global Chat Panel */}
      <GlobalChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            B1 Prüfungsvorbereitung
            <span className={`ml-2 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full align-middle ${
              plan === "beta" ? "bg-amber-100 text-amber-800" :
              plan === "free" ? "bg-gray-100 text-gray-600" :
              plan === "silver" ? "bg-gray-200 text-gray-700" :
              plan === "gold" ? "bg-yellow-100 text-yellow-800" :
              plan === "platinum" ? "bg-purple-100 text-purple-800" :
              plan === "lifetime" ? "bg-emerald-100 text-emerald-800" :
              "bg-gray-100 text-gray-600"
            }`}>
              {plan.toUpperCase()}
            </span>
          </h1>
          <p className="text-gray-500 text-sm">Zertifikat B1 neu</p>
          <p className="text-gray-400 text-[10px] mt-1">
            v0.0.1-beta · 05.07.2026 ·{" "}
            {/* <Link to="/pricing" className="text-blue-500 hover:underline">Pricing</Link> */}
          </p>
        </div>

        {/* Modules */}
        <div className="space-y-3">
          {/* Module 1 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm" data-tour="module-1">
            <button
              onClick={() => toggleModule("m1")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Circular progress ring */}
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle
                        cx="20" cy="20" r="17"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <circle
                        cx="20" cy="20" r="17"
                        fill="none"
                        stroke={m1Progress.percent === 100 ? "#10b981" : "#3b82f6"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m1Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">
                      1
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 1</span>
                    <span className="text-[10px] text-gray-400">
                      {m1Progress.answered}/{m1Progress.total} Fragen
                    </span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m1"] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m1"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module1 />
              </div>
            )}
          </div>

          {/* Module 2 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm" data-tour="module-2">
            <button
              onClick={() => toggleModule("m2")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m2Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">2</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 2</span>
                    <span className="text-[10px] text-gray-400">{m2Progress.answered}/{m2Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m2"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m2"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module2 />
              </div>
            )}
          </div>

          {/* Module 3 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m3")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m3Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">3</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 3</span>
                    <span className="text-[10px] text-gray-400">{m3Progress.answered}/{m3Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m3"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m3"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module3 />
              </div>
            )}
          </div>

          {/* Module 4 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m4")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m4Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">4</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 4</span>
                    <span className="text-[10px] text-gray-400">{m4Progress.answered}/{m4Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m4"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m4"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module4 />
              </div>
            )}
          </div>

          {/* Module 5 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m5")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m5Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">5</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 5</span>
                    <span className="text-[10px] text-gray-400">{m5Progress.answered}/{m5Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m5"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m5"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module5 />
              </div>
            )}
          </div>

          {/* Module 6 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m6")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m6Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">6</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 6</span>
                    <span className="text-[10px] text-gray-400">{m6Progress.answered}/{m6Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m6"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m6"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module6 />
              </div>
            )}
          </div>

          {/* Module 7 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m7")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m7Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">7</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 7</span>
                    <span className="text-[10px] text-gray-400">{m7Progress.answered}/{m7Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m7"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m7"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module7 />
              </div>
            )}
          </div>

          {/* Module 8 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m8")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m8Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">8</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 8</span>
                    <span className="text-[10px] text-gray-400">{m8Progress.answered}/{m8Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m8"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m8"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module8 />
              </div>
            )}
          </div>

          {/* Module 9 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m9")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m9Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">9</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 9</span>
                    <span className="text-[10px] text-gray-400">{m9Progress.answered}/{m9Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m9"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m9"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module9 />
              </div>
            )}
          </div>

          {/* Module 10 */}
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleModule("m10")}
              className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 17}`}
                        strokeDashoffset={`${2 * Math.PI * 17 * (1 - m10Progress.percent / 100)}`}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">10</span>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-gray-800 block">Modelltest 10</span>
                    <span className="text-[10px] text-gray-400">{m10Progress.answered}/{m10Progress.total} Fragen</span>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openModules["m10"] ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openModules["m10"] && (
              <div className="border-t border-gray-100 px-4 py-4">
                <Module10 />
              </div>
            )}
          </div>

          {/* Future modules — gated by plan */}
          {[11, 12, 13, 14, 15].map((num) => {
            const locked = !canAccessModelTest(num);
            return (
              <div
                key={num}
                className={`rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm ${locked ? "opacity-50" : ""}`}
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className={`${locked ? "bg-gray-400" : "bg-gray-900"} text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold`}>
                      {num}
                    </span>
                    <span className={`text-sm font-semibold ${locked ? "text-gray-500" : "text-gray-800"}`}>Modelltest {num}</span>
                  </div>
                  {locked ? (
                    <Link to="/pricing" className="text-[10px] text-blue-500 hover:underline">
                      🔒 Upgrade
                    </Link>
                  ) : (
                    <span className="text-[10px] text-gray-400 italic">Bald verfügbar</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
    <ToastProvider>
      <PermissionsProvider>
        <AIUsageProvider>
          <VocabularyProvider>
          <NotesProvider>
          <AnswersProvider>
            <ProgressProvider>
              <AppContent />
            </ProgressProvider>
          </AnswersProvider>
        </NotesProvider>
        </VocabularyProvider>
        </AIUsageProvider>
      </PermissionsProvider>
    </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
