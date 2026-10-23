import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotes } from "../context/NotesContext";
import { COLOR_NOTE_CONTENT_MAX, COLOR_NOTE_TITLE_MAX, NOTE_LIMITS, TICK_COLORS, type NoteBackend } from "../services/notes";

/**
 * Phone version of the color (tick) notes. Instead of floating over the page, they sit in a
 * small "stack" button above the dock; tapping it opens a bottom sheet where the notes are
 * swipeable post-it cards (scroll-snap carousel) with a color palette and an "add" card.
 * Open state lives in the parent so the notes panel can open the board on a given note.
 */
export default function MobileStickyNotes({
  open,
  focusId,
  onOpenChange,
}: {
  open: boolean;
  /** Note to show first when the board opens */
  focusId?: string;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useTranslation();
  const { notes, addNote, updateNote, deleteNote } = useNotes();
  const tickNotes = notes.filter((n) => n.type === "tick");
  const setOpen = onOpenChange;
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const prevCount = useRef(tickNotes.length);

  // A new note is added at the front of the list: bring it into view.
  useEffect(() => {
    if (tickNotes.length > prevCount.current) {
      trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    }
    prevCount.current = tickNotes.length;
  }, [tickNotes.length]);

  // Opening on a specific note: jump straight to its card.
  const focusIndex = focusId ? tickNotes.findIndex((n) => n._id === focusId) : -1;
  useEffect(() => {
    if (!open || focusIndex < 0) return;
    const frame = requestAnimationFrame(() => {
      const card = trackRef.current?.children[focusIndex] as HTMLElement | undefined;
      card?.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" });
    });
    return () => cancelAnimationFrame(frame);
  }, [open, focusIndex]);

  // Close the sheet with the Escape key (keyboard / desktop emulators).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const cardCount = tickNotes.length + 1; // + the "add" card
  const onScroll = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const step = (el.firstElementChild as HTMLElement).offsetWidth + 16; // card width + gap-4
    setActive(Math.min(cardCount - 1, Math.round(el.scrollLeft / step)));
  };
  const goTo = (i: number) => {
    const card = trackRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const stack = tickNotes.slice(0, 3);

  return (
    <>
      {/* Stack button: up to three fanned post-its + count */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 z-40 w-14 h-14 cursor-pointer"
        style={{ bottom: "calc(5.75rem + env(safe-area-inset-bottom))" }}
        title={t("stickyBoard.open")}
        aria-label={t("stickyBoard.open")}
      >
        {stack.length === 0 ? (
          <span className="absolute inset-1 rounded-md border-2 border-dashed border-gray-400 bg-white/80 flex items-center justify-center text-gray-500 text-xl">+</span>
        ) : (
          stack.map((n, i) => (
            <span
              key={n._id}
              className="absolute inset-1 rounded-md shadow-md border border-black/5"
              style={{ backgroundColor: n.color, transform: `rotate(${(i - (stack.length - 1) / 2) * 10}deg) translateY(${-i * 2}px)`, zIndex: 3 - i }}
            />
          ))
        )}
        {tickNotes.length > 0 && (
          <span className="absolute -top-1 -right-1 z-10 min-w-5 h-5 px-1 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">
            {tickNotes.length}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-[65]" role="dialog" aria-modal="true" aria-label={t("stickyBoard.title")}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div
            className="absolute inset-x-0 bottom-0 bg-gray-50 rounded-t-3xl shadow-2xl pt-2 animate-in"
            style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
          >
            <div className="mx-auto w-10 h-1.5 rounded-full bg-gray-300 mb-3" />
            <div className="flex items-center justify-between px-5 mb-3">
              <h2 className="text-base font-bold text-gray-800">
                {t("stickyBoard.title")} <span className="text-gray-400 font-medium">({tickNotes.length}/{NOTE_LIMITS.tick})</span>
              </h2>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-200 cursor-pointer" aria-label={t("common.close")}>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Swipeable cards */}
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-[11vw] py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {tickNotes.map((note, i) => (
                <StickyCard key={note._id} note={note} tilt={i % 2 === 0 ? -1.5 : 1.5} onChange={updateNote} onDelete={deleteNote} />
              ))}
              <button
                onClick={() => addNote("tick")}
                disabled={tickNotes.length >= NOTE_LIMITS.tick}
                className="snap-center shrink-0 w-[78vw] min-h-[260px] rounded-2xl border-2 border-dashed border-gray-300 text-gray-500 flex flex-col items-center justify-center gap-2 cursor-pointer active:bg-gray-100 disabled:cursor-not-allowed disabled:active:bg-transparent"
              >
                {tickNotes.length >= NOTE_LIMITS.tick ? (
                  <span className="text-sm font-medium text-center px-6">{t("apiErrors.MAX_COLOR_NOTES")}</span>
                ) : (
                  <>
                    <span className="text-4xl leading-none">+</span>
                    <span className="text-sm font-medium">{t("stickyBoard.add")}</span>
                  </>
                )}
              </button>
            </div>

            {/* Position dots */}
            <div className="flex justify-center gap-1.5 mt-1">
              {Array.from({ length: cardCount }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={t("stickyBoard.goTo", { n: i + 1 })}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${i === active ? "w-5 bg-gray-800" : "w-1.5 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StickyCard({
  note,
  tilt,
  onChange,
  onDelete,
}: {
  note: NoteBackend;
  tilt: number;
  onChange: (id: string, patch: Partial<NoteBackend>) => void;
  onDelete: (id: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div
      className="snap-center shrink-0 w-[78vw] min-h-[260px] rounded-2xl shadow-lg flex flex-col relative"
      style={{ backgroundColor: note.color, transform: `rotate(${tilt}deg)` }}
    >
      {/* Tape strip */}
      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rounded-sm bg-white/60 shadow-sm rotate-[-3deg]" aria-hidden="true" />

      <div className="flex items-center justify-between px-4 pt-5">
        <input
          type="text"
          value={note.title}
          onChange={(e) => onChange(note._id, { title: e.target.value })}
          placeholder={t("richNote.titlePlaceholder")}
          maxLength={COLOR_NOTE_TITLE_MAX}
          className="flex-1 min-w-0 bg-transparent text-base font-bold text-gray-800 placeholder-gray-700/40 focus:outline-none"
        />
        <button
          onClick={() => onDelete(note._id)}
          className="p-1 -mr-1 text-gray-700/60 active:text-red-600 cursor-pointer"
          aria-label={t("common.delete")}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <textarea
        value={note.content}
        onChange={(e) => onChange(note._id, { content: e.target.value })}
        placeholder={t("floatingNote.placeholder")}
        maxLength={COLOR_NOTE_CONTENT_MAX}
        className="flex-1 w-full bg-transparent text-[15px] leading-relaxed text-gray-800 placeholder-gray-700/40 resize-none focus:outline-none px-4 py-2 min-h-[150px]"
      />

      {note.content.length >= COLOR_NOTE_CONTENT_MAX * 0.8 && (
        <p className={`px-4 -mt-1 mb-1 text-right text-[10px] tabular-nums ${note.content.length >= COLOR_NOTE_CONTENT_MAX ? "text-red-600 font-semibold" : "text-gray-700/70"}`}>
          {note.content.length}/{COLOR_NOTE_CONTENT_MAX}
        </p>
      )}

      {/* Color palette */}
      <div className="flex items-center justify-center gap-2 px-3 pb-3" role="radiogroup" aria-label={t("floatingNote.changeColor")}>
        {TICK_COLORS.map((c) => (
          <button
            key={c}
            role="radio"
            aria-checked={note.color === c}
            aria-label={c}
            onClick={() => onChange(note._id, { color: c })}
            className={`w-6 h-6 rounded-full border cursor-pointer transition-transform ${note.color === c ? "border-gray-800 border-2 scale-110" : "border-black/10"}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}
