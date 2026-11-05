/** @format */

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../layout/NavBar";
import LeftSideBar from "../layout/LeftSideBar";
import RightSideBar from "../layout/RightSideBar";
import MobileDock from "../layout/MobileDock";
import ModuleCard from "../components/exam/ModuleCard";
import ExamModule from "../components/exam/ExamModule";
import FloatingNotes from "../components/notes/FloatingNotes";
import MobileStickyNotes from "../components/notes/MobileStickyNotes";
import BackgroundStickers from "../components/theme/BackgroundStickers";
import TextHighlighter from "../components/exam/shared/TextHighlighter";
import GuidedTour from "../components/common/GuidedTour";
import ComingSoon from "../components/common/ComingSoon";
import AISettings from "../components/ai/AISettings";
import { useAuth } from "../hooks/useAuth";
import { useProgress } from "../hooks/useProgress";
import { usePermissions } from "../hooks/usePermissions";
import useAIConfig from "../hooks/useAIConfig";
import useIsMobile from "../hooks/ui/useIsMobile";
import { OPEN_AI_SETTINGS_EVENT } from "../../services/ai";
import { examModules } from "../../data/examModules";

export default function Home() {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [vocabOpen, setVocabOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const aiConfig = useAIConfig();
  // Any component can ask for the AI settings (e.g. "Set up AI" links) via openAISettings()
  useEffect(() => {
    const open = () => setAiOpen(true);
    window.addEventListener(OPEN_AI_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_AI_SETTINGS_EVENT, open);
  }, []);
  // Phone color-note board: opened from its stack button or from a note in the notes panel
  const [stickyBoard, setStickyBoard] = useState<{
    open: boolean;
    focusId?: string;
  }>({ open: false });
  const { user } = useAuth();
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const { getModuleProgress } = useProgress();
  const { plan } = usePermissions();

  const toggleModule = (key: string) => {
    // All Modelltests require a signed-in account.
    if (!user) return;
    setOpenModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const modules = examModules.map((m) => ({
    id: m.id,
    badge: m.badge,
    content: <ExamModule module={m} />,
  }));

  // Text stays dark by default: cards, inputs and panels are white in every theme. Only the
  // text drawn directly on the page background (header) uses the theme's page text colors.
  return (
    <div
      className="min-h-screen pt-16 pb-28 sm:pb-8 relative text-gray-900"
      style={{ backgroundColor: "var(--theme-page-bg)" }}
    >
      <BackgroundStickers />
      <GuidedTour />
      <ComingSoon onOpenChat={() => setChatOpen(true)} />
      <NavBar
        onOpenNotes={() => setNotesOpen(true)}
        onOpenVocab={() => setVocabOpen(true)}
        onOpenAI={() => setAiOpen(true)}
        aiReady={!!aiConfig}
      />

      {isMobile && (
        <MobileDock
          showNotes={!!user}
          notesOpen={notesOpen}
          vocabOpen={vocabOpen}
          chatOpen={chatOpen}
          onNotes={() => setNotesOpen((v) => !v)}
          onVocab={() => setVocabOpen((v) => !v)}
          onChat={() => setChatOpen((v) => !v)}
          aiReady={!!aiConfig}
          onAI={() => setAiOpen(true)}
        />
      )}

      {/* Mounted only while open so it starts from the saved settings each time */}
      {aiOpen && <AISettings isOpen onClose={() => setAiOpen(false)} />}

      {/* Text Highlighter */}
      <TextHighlighter />

      <RightSideBar
        vocabOpen={vocabOpen}
        onCloseVocab={() => setVocabOpen(false)}
      />

      <LeftSideBar
        notesOpen={notesOpen}
        onCloseNotes={() => setNotesOpen(false)}
        onOpenColorNote={
          isMobile
            ? (focusId) => setStickyBoard({ open: true, focusId })
            : undefined
        }
        chatOpen={chatOpen}
        onCloseChat={() => setChatOpen(false)}
      />

      {/* Floating draggable color notes over the whole app */}
      {/* Phones get a swipeable board instead of notes floating over the page */}
      {isMobile ? (
        user && (
          <MobileStickyNotes
            open={stickyBoard.open}
            focusId={stickyBoard.focusId}
            onOpenChange={(open) => setStickyBoard({ open })}
          />
        )
      ) : (
        <FloatingNotes />
      )}

      {/* relative z-10: page content always stays above the background stickers.
          pointer-events-none on the wrapper, header and module list (only the module cards take
          input) so stickers around the cards can still be dragged, also with touch. */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pointer-events-none">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: "var(--theme-page-text)" }}
          >
            {t("app.title")}
            <span
              className={`ml-2 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full align-middle ${
                plan === "beta"
                  ? "bg-amber-100 text-amber-800"
                  : plan === "free"
                    ? "bg-gray-100 text-gray-600"
                    : plan === "silver"
                      ? "bg-gray-200 text-gray-700"
                      : plan === "gold"
                        ? "bg-yellow-100 text-yellow-800"
                        : plan === "platinum"
                          ? "bg-purple-100 text-purple-800"
                          : plan === "lifetime"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-600"
              }`}
            >
              {plan.toUpperCase()}
            </span>
          </h1>
          <p className="text-sm" style={{ color: "var(--theme-page-muted)" }}>
            Zertifikat B1 neu
          </p>
          <p
            className="text-[10px] mt-1 opacity-80"
            style={{ color: "var(--theme-page-muted)" }}
          >
            v0.0.1-beta · {t("app.testingMode")} ·{" "}
            {/* <Link to="/pricing" className="text-blue-500 hover:underline">Pricing</Link> */}
          </p>
        </div>

        {/* Modules — locked (grayed) until the user signs in */}
        <div
          className={`space-y-3 ${!user ? "opacity-50 grayscale select-none" : "[&>*]:pointer-events-auto"}`}
        >
          {modules.map((m) => (
            <ModuleCard
              key={m.id}
              badge={m.badge}
              title={`Modelltest ${m.badge}`}
              progress={getModuleProgress(m.id)}
              isOpen={!!openModules[m.id]}
              onToggle={() => toggleModule(m.id)}
              dataTour={m.id === "m1" ? "module-1" : undefined}
            >
              {m.content}
            </ModuleCard>
          ))}
        </div>
      </div>
    </div>
  );
}
