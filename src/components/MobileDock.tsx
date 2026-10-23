import { useTranslation } from "react-i18next";
import DockButton from "./DockButton";
import ThemePicker from "./ThemePicker";

interface MobileDockProps {
  showNotes: boolean;
  notesOpen: boolean;
  vocabOpen: boolean;
  chatOpen: boolean;
  onNotes: () => void;
  onVocab: () => void;
  onChat: () => void;
}

const iconClass = "w-5 h-5";

// Phone-only bottom navigation: the header buttons that don't fit on a small screen live here.
export default function MobileDock({ showNotes, notesOpen, vocabOpen, chatOpen, onNotes, onVocab, onChat }: MobileDockProps) {
  const { t } = useTranslation();
  return (
    <nav
      aria-label={t("app.navigation")}
      className="fixed inset-x-3 z-40 bg-white/95 backdrop-blur border border-gray-200 rounded-2xl shadow-lg p-1 flex items-stretch gap-1"
      style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      {showNotes && (
        <DockButton
          label={t("app.notes")}
          active={notesOpen}
          onClick={onNotes}
          tour="notes-btn"
          icon={
            <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          }
        />
      )}
      <DockButton
        label={t("app.vocabulary")}
        active={vocabOpen}
        onClick={onVocab}
        tour="vocab-btn"
        icon={
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        }
      />
      <DockButton
        label={t("app.chat")}
        active={chatOpen}
        onClick={onChat}
        icon={
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        }
      />
      <ThemePicker variant="dock" />
    </nav>
  );
}
