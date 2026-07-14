import { useRef, useState } from "react";
import { useNotes } from "../context/NotesContext";
import type { NoteBackend } from "../services/notes";

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

  return (
    <div
      className="absolute pointer-events-auto w-44 rounded-lg shadow-lg flex flex-col select-none"
      style={{
        left: note.x,
        top: note.y,
        backgroundColor: note.color,
        boxShadow: dragging ? "0 8px 24px rgba(0,0,0,0.25)" : "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* Drag handle / toolbar */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="flex items-center justify-between px-2 py-1 cursor-move rounded-t-lg"
        style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
      >
        <svg className="w-3.5 h-3.5 text-gray-700/70" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="5" cy="5" r="1.5" /><circle cx="10" cy="5" r="1.5" /><circle cx="15" cy="5" r="1.5" />
          <circle cx="5" cy="10" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle cx="15" cy="10" r="1.5" />
        </svg>
        <div className="flex items-center gap-1">
          <label className="cursor-pointer flex items-center" title="Farbe ändern">
            <span className="sr-only">Farbe ändern</span>
            <input
              type="color"
              value={note.color}
              onChange={(e) => onChange(note._id, { color: e.target.value })}
              className="w-4 h-4 rounded cursor-pointer border-0 bg-transparent p-0"
            />
          </label>
          <button
            onClick={() => onDelete(note._id)}
            className="text-gray-700/60 hover:text-red-600 cursor-pointer"
            title="Löschen"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Title */}
      <input
        type="text"
        value={note.title}
        onChange={(e) => onChange(note._id, { title: e.target.value })}
        placeholder="Titel..."
        className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder-gray-700/40 focus:outline-none px-2 pt-1.5"
      />

      {/* Editable content */}
      <textarea
        value={note.content}
        onChange={(e) => onChange(note._id, { content: e.target.value })}
        placeholder="Kurze Notiz..."
        className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-700/40 resize-none focus:outline-none px-2 pb-2 pt-1 min-h-[70px]"
      />
    </div>
  );
}
