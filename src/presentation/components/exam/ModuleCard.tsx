import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface ModuleCardProps {
  badge: string; // shown in the progress ring
  title: string;
  progress: { percent: number; answered: number; total: number };
  isOpen: boolean;
  onToggle: () => void;
  dataTour?: string;
  children: ReactNode; // the module, rendered only while open
}

const RING = 2 * Math.PI * 17;

// Collapsible card of one Modelltest with its progress ring (green once complete).
export default function ModuleCard({ badge, title, progress, isOpen, onToggle, dataTour, children }: ModuleCardProps) {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm" data-tour={dataTour}>
      <button onClick={onToggle} className="w-full px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="17" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                <circle
                  cx="20" cy="20" r="17"
                  fill="none"
                  stroke={progress.percent === 100 ? "#10b981" : "#3b82f6"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${RING}`}
                  strokeDashoffset={`${RING * (1 - progress.percent / 100)}`}
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900">{badge}</span>
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-gray-800 block">{title}</span>
              <span className="text-[10px] text-gray-400">
                {t("app.questionsCount", { answered: progress.answered, total: progress.total })}
              </span>
            </div>
          </div>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && <div className="border-t border-gray-100 px-4 py-4">{children}</div>}
    </div>
  );
}
