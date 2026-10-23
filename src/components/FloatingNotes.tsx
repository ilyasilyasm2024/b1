import { useRef, useState } from "react";
import { useNotes } from "../context/NotesContext";
import { COLOR_NOTE_CONTENT_MAX, COLOR_NOTE_TITLE_MAX, TICK_COLORS, type NoteBackend } from "../services/notes";
import { useTranslation } from "react-i18next";

/**
 * Renders all "tick" (color) notes as floating, draggable sticky notes
 * that live on top of the whole app. The container itself is click-through
 * (pointer-events-none); only the notes capture pointer events.
 */
export default function FloatingNotes() {
  const { notes, updateNote, deleteNote } = useNotes();
  const tickNotes = notes.filter((n) => n.type === "tick");

  if (tickNotes.length === 0) return null;

  return (
    <div data-notes-area className="fixed inset-0 z-[60] pointer-events-none">
      {tickNotes.map((note) => (
        <FloatingNote key={note._id} note={note} onChange={updateNote} onDelete={deleteNote} />
      ))}
    </div>
  );
}

function FloatingNote({
  note,
  onChange,
  onDelete,
}: {
  note: NoteBackend;
  onChange: (id: string, patch: Partial<NoteBackend>) => void;
  onDelete: (id: string) => void;
}) {
  const { t } = useTranslation();
  const dragState = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const clamp = (x: number, y: number) => {
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 60;
    return { x: Math.max(0, Math.min(x, maxX)), y: Math.max(0, Math.min(y, maxY)) };
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only start dragging from the handle (this element), not the textarea
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: note.x,
      originY: note.y,
    };
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    const { x, y } = clamp(dragState.current.originX + dx, dragState.current.originY + dy);
    onChange(note._id, { x, y });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).hasPointerCapture?.(e.pointerId)) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    }
    dragState.current = null;
    setDragging(false);
  };

  // Small stable tilt per note (same post-it look as the phone board); straightens while dragging.
  const tilt = [...note._id].reduce((a, c) => a + c.charCodeAt(0), 0) % 2 === 0 ? -1.5 : 1.5;

  return (
    <div
      className="absolute pointer-events-auto w-48 rounded-xl flex flex-col select-none transition-transform"
      style={{
        left: note.x,
        top: note.y,
        backgroundColor: note.color,
        transform: dragging ? "rotate(0deg) scale(1.03)" : `rotate(${tilt}deg)`,
        boxShadow: dragging ? "0 12px 28px rgba(0,0,0,0.25)" : "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      {/* Tape strip */}
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 rounded-sm bg-white/60 shadow-sm rotate-[-3deg] pointer-events-none" aria-hidden="true" />

      {/* Drag handle / toolbar */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="flex items-center justify-between px-2.5 pt-3 pb-0.5 cursor-move touch-none"
      >
        <svg className="w-3.5 h-3.5 text-gray-700/50" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="5" cy="5" r="1.5" /><circle cx="10" cy="5" r="1.5" /><circle cx="15" cy="5" r="1.5" />
          <circle cx="5" cy="10" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle cx="15" cy="10" r="1.5" />
        </svg>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => onDelete(note._id)}
          className="p-0.5 text-gray-700/60 hover:text-red-600 cursor-pointer"
          title={t("common.delete")}
          aria-label={t("common.delete")}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <textarea
        value={note.title}
        // A title stays one paragraph: Enter does nothing, and pasted line breaks become spaces
        onChange={(e) => onChange(note._id, { title: e.target.value.replace(/\s*\n\s*/g, " ") })}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        placeholder={t("richNote.titlePlaceholder")}
        maxLength={COLOR_NOTE_TITLE_MAX}
        rows={1}
        // Wraps to a second line for wide letters instead of scrolling sideways
        ref={(el) => {
          if (!el) return;
          el.style.height = "auto";
          el.style.height = `${el.scrollHeight}px`;
        }}
        className="w-full bg-transparent text-sm font-bold leading-snug text-gray-800 placeholder-gray-700/40 resize-none overflow-hidden focus:outline-none px-2.5 pt-0.5"
      />

      {/* Editable content */}
      <textarea
        value={note.content}
        onChange={(e) => onChange(note._id, { content: e.target.value })}
        placeholder={t("floatingNote.placeholder")}
        maxLength={COLOR_NOTE_CONTENT_MAX}
        rows={2}
        // Grow with the text instead of scrolling inside the card
        ref={(el) => {
          if (!el) return;
          el.style.height = "auto";
          el.style.height = `${el.scrollHeight}px`;
        }}
        className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-700/40 resize-none overflow-hidden focus:outline-none px-2.5 pb-1 pt-1"
      />

      {/* Color palette */}
      <div className="flex items-center justify-center gap-1 px-2 pb-2" role="radiogroup" aria-label={t("floatingNote.changeColor")}>
        {TICK_COLORS.map((c) => (
          <button
            key={c}
            role="radio"
            aria-checked={note.color === c}
            aria-label={c}
            onClick={() => onChange(note._id, { color: c })}
            className={`w-3.5 h-3.5 rounded-full border cursor-pointer transition-transform hover:scale-125 ${note.color === c ? "border-gray-800 border-2 scale-110" : "border-black/10"}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}
