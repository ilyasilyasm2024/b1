import { useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../context/AuthContext";

export default function StreakCalendar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const streak = user.streak || 0;
  const loginDates = new Set(user.loginDates || []);

  // Get current month info
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun
  const monthName = new Date(viewYear, viewMonth).toLocaleDateString("de-DE", { month: "long", year: "numeric" });

  const todayStr = today.toISOString().slice(0, 10);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  return (
    <>
      {/* Streak badge — clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold hidden sm:inline-flex items-center gap-1 cursor-pointer hover:bg-orange-200 transition-colors"
        title={`${streak} Tage in Folge — Kalender anzeigen`}
      >
        🔥 {streak}
      </button>

      {/* Calendar popup — rendered via portal to escape header's backdrop-filter containing block */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-xs p-5">
            {/* Close button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded cursor-pointer">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-sm font-bold text-gray-900 capitalize">{monthName}</h3>
              <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Streak info */}
            <div className="text-center mb-3">
              <span className="text-2xl">🔥</span>
              <p className="text-xs font-bold text-gray-800 mt-1">{streak} Tage in Folge</p>
              <p className="text-[10px] text-gray-400">Insgesamt {loginDates.size} Tage aktiv</p>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((d) => (
                <div key={d} className="text-center text-[9px] text-gray-400 font-medium">{d}</div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-0.5">
              {/* Empty cells for offset (adjust for Monday start) */}
              {Array.from({ length: (firstDayOfWeek + 6) % 7 }).map((_, i) => (
                <div key={`empty-${i}`} className="w-8 h-8" />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isLogged = loginDates.has(dateStr);
                const isToday = dateStr === todayStr;

                return (
                  <div
                    key={day}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-[10px] font-medium mx-auto ${
                      isLogged
                        ? "bg-gray-900 text-white"
                        : isToday
                        ? "border-2 border-gray-900 text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gray-900" />
                <span className="text-[9px] text-gray-500">Aktiv</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-gray-900" />
                <span className="text-[9px] text-gray-500">Heute</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
