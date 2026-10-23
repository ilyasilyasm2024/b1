import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNotes } from "../context/NotesContext";
import RichTextNote from "./RichTextNote";
import ConfirmModal from "./ConfirmModal";
import { useTranslation } from "react-i18next";
import { NOTE_LIMITS } from "../services/notes";

// Colors for groups of linked notes (one color per group of notes connected through links)
const LINK_GROUP_COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444", "#06b6d4", "#ec4899", "#84cc16"];
const FLASH_MS = 2000;

interface NotesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  /** Phones: open the swipeable color-note board, optionally on a given note */
  onOpenColorNote?: (id?: string) => void;
}

export default function NotesPanel({ isOpen, onClose, onOpenColorNote }: NotesPanelProps) {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { notes, isLoading, error, addNote, updateNote, saveNote, deleteNote, deleteMany, toggleLink } = useNotes();
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [confirmBulk, setConfirmBulk] = useState(false);
  const [tickOpen, setTickOpen] = useState(true);
  const [textOpen, setTextOpen] = useState(true);
  const [flashIds, setFlashIds] = useState<Set<string>>(new Set());
  const [reorder, setReorder] = useState<{ dragId: string; overId: string | null } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!isOpen) return null;

  // Pinned first, then by manual order, then newest first as a stable fallback.
  const sortNotes = (list: typeof notes) =>
    list.slice().sort((a, b) => {
      if (!!b.pinned !== !!a.pinned) return b.pinned ? 1 : -1;
      const ao = a.order ?? 0;
      const bo = b.order ?? 0;
      if (ao !== bo) return ao - bo;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const textNotes = sortNotes(notes.filter((n) => n.type === "text"));
  const tickNotes = notes.filter((n) => n.type === "tick");

  // Group notes connected through links (A–B and B–C are one group) and give each group a color,
  // assigned in list order so the colors read top to bottom.
  const groupColor = new Map<string, string>();
  {
    const ids = new Set(textNotes.map((n) => n._id));
    const adj = new Map(textNotes.map((n) => [n._id, (n.links || []).filter((l) => ids.has(l))]));
    let next = 0;
    for (const start of textNotes) {
      if (groupColor.has(start._id) || !adj.get(start._id)?.length) continue;
      const color = LINK_GROUP_COLORS[next++ % LINK_GROUP_COLORS.length];
      const stack = [start._id];
      while (stack.length) {
        const id = stack.pop()!;
        if (groupColor.has(id)) continue;
        groupColor.set(id, color);
        stack.push(...(adj.get(id) || []));
      }
    }
  }

  // Swap the manual order of two text notes (falls back to list positions when their order values are equal).
  const swapOrder = (draggedId: string, targetId: string) => {
    const draggedIdx = textNotes.findIndex((n) => n._id === draggedId);
    const targetIdx = textNotes.findIndex((n) => n._id === targetId);
    if (draggedIdx < 0 || targetIdx < 0) return;
    const draggedOrder = textNotes[draggedIdx].order ?? 0;
    const targetOrder = textNotes[targetIdx].order ?? 0;
    if (draggedOrder === targetOrder) {
      updateNote(draggedId, { order: targetIdx });
      updateNote(targetId, { order: draggedIdx });
    } else {
      updateNote(draggedId, { order: targetOrder });
      updateNote(targetId, { order: draggedOrder });
    }
  };

  // Reorder by dragging the ⋮⋮ handle. Pointer events (not HTML5 drag & drop) so it works with touch too.
  const startReorder = (e: React.PointerEvent, id: string) => {
    if (e.button !== 0) return;
    e.preventDefault();
    let over: string | null = null;
    setReorder({ dragId: id, overId: null });
    const onMove = (ev: PointerEvent) => {
      const el = document.elementFromPoint(ev.clientX, ev.clientY)?.closest("[data-note-id]");
      const hit = el?.getAttribute("data-note-id") ?? null;
      over = hit && hit !== id ? hit : null;
      setReorder({ dragId: id, overId: over });
      // Auto-scroll the list when dragging near its top or bottom edge
      const box = listRef.current?.getBoundingClientRect();
      if (box && ev.clientY < box.top + 40) listRef.current?.scrollBy(0, -12);
      else if (box && ev.clientY > box.bottom - 40) listRef.current?.scrollBy(0, 12);
    };
    const onEnd = (ev: PointerEvent) => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onEnd);
      window.removeEventListener("pointercancel", onEnd);
      if (ev.type === "pointerup" && over) swapOrder(id, over);
      setReorder(null);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onEnd);
    window.addEventListener("pointercancel", onEnd);
  };

  // Briefly flash the given notes (restarting the animation on repeated clicks) and scroll to the first one.
  const flashNotes = (ids: string[]) => {
    if (flashTimer.current) clearTimeout(flashTimer.current);
    setFlashIds(new Set());
    requestAnimationFrame(() => {
      setFlashIds(new Set(ids));
      document.querySelector(`[data-note-id="${ids[0]}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    flashTimer.current = setTimeout(() => setFlashIds(new Set()), FLASH_MS);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allTextSelected = textNotes.length > 0 && textNotes.every((n) => selectedIds.has(n._id));
  const toggleSelectAll = () => {
    if (allTextSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(textNotes.map((n) => n._id)));
    }
  };

  const confirmDelete = () => {
    if (!confirmDeleteId) return;
    const id = confirmDeleteId;
    setConfirmDeleteId(null);
    deleteNote(id);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const confirmBulkDelete = () => {
    setConfirmBulk(false);
    deleteMany([...selectedIds]);
    setSelectedIds(new Set());
  };

  const MAX_PINS = 5;
  const pinnedCount = textNotes.filter((n) => n.pinned).length;

  const togglePin = (id: string) => {
    const note = notes.find((n) => n._id === id);
    if (!note) return;
    if (!note.pinned && pinnedCount >= MAX_PINS) return; // enforce max 5
    updateNote(id, { pinned: !note.pinned });
  };

  return (
    <>
      {/* Non-blocking left drawer: no backdrop so the test stays usable while taking notes */}
      <div data-notes-area className="fixed top-0 left-0 bottom-0 z-[55] w-full max-w-sm bg-white shadow-2xl border-r border-gray-200 flex flex-col animate-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{t("app.myNotes")}</h2>
            <p className="text-xs text-gray-500">
              {t("notes.count", { count: notes.length })}
              {/* Color notes only float (and move) on larger screens */}
              {!onOpenColorNote && <> · {t("notes.colorNotesMovable")}</>}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            title={t("common.close")}
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!user ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <p className="text-sm text-gray-600">
              {t("notes.loginToSave")}
            </p>
            <div className="flex gap-2">
              <Link to="/login" onClick={onClose} className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                {t("common.signIn")}
              </Link>
              <Link to="/signup" onClick={onClose} className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                {t("common.signUp")}
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Add buttons */}
            <div className="px-5 py-3 border-b border-gray-100 flex gap-2">
              <button
                onClick={() => addNote("text")}
                disabled={textNotes.length >= NOTE_LIMITS.text}
                title={textNotes.length >= NOTE_LIMITS.text ? t("apiErrors.MAX_TEXT_NOTES") : undefined}
                className="flex-1 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-800 flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                {t("notes.textNote")}
              </button>
              <button
                onClick={() => addNote("tick")}
                disabled={tickNotes.length >= NOTE_LIMITS.tick}
                title={tickNotes.length >= NOTE_LIMITS.tick ? t("apiErrors.MAX_COLOR_NOTES") : undefined}
                className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50 flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span className="w-4 h-4 rounded-sm inline-block" style={{ backgroundColor: "#fca5a5" }} />
                {t("notes.colorNote")}
              </button>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</p>
              )}
              {isLoading && <p className="text-sm text-gray-400">{t("common.loading")}</p>}

              {!isLoading && notes.length === 0 && (
                <p className="text-sm text-gray-400 text-center mt-8">
                  {t("notes.empty")}
                </p>
              )}

              {/* Tick notes: hint + list (the notes themselves float on the page) */}
              {tickNotes.length > 0 && (
                <div>
                  <button
                    onClick={() => setTickOpen((v) => !v)}
                    className="w-full flex items-center justify-between mb-2 cursor-pointer group"
                  >
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide group-hover:text-gray-600">
                      {t("notes.colorNotes", { count: tickNotes.length, max: NOTE_LIMITS.tick })}
                    </h3>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${tickOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {tickOpen && (
                  <>
                  {onOpenColorNote ? (
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-[11px] text-gray-400">{t("notes.colorNotesHintMobile")}</p>
                      <button
                        onClick={() => onOpenColorNote()}
                        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gray-900 text-white px-3 py-1.5 text-[11px] font-medium cursor-pointer active:bg-gray-700"
                      >
                        <span className="relative w-3.5 h-3.5" aria-hidden="true">
                          <span className="absolute inset-0 rounded-sm bg-amber-300 rotate-[-12deg]" />
                          <span className="absolute inset-0 rounded-sm bg-pink-300 rotate-[8deg]" />
                        </span>
                        {t("notes.openCards")}
                      </button>
                    </div>
                  ) : (
                  <p className="text-[11px] text-gray-400 mb-2">
                    {t("notes.colorNotesHint")}
                  </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {tickNotes.map((note) => (
                      <div
                        key={note._id}
                        className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-gray-800 max-w-full"
                        style={{ backgroundColor: note.color }}
                      >
                        {onOpenColorNote ? (
                          <button
                            onClick={() => onOpenColorNote(note._id)}
                            className="truncate max-w-[160px] inline-flex items-center gap-1 cursor-pointer underline decoration-gray-700/30 underline-offset-2"
                            title={t("notes.openCard")}
                          >
                            <span className="truncate">{note.title.trim() || note.content.trim() || t("notes.emptyNote")}</span>
                            <svg className="w-3 h-3 shrink-0 text-gray-700/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5v5M19 5l-8 8M10 5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-4" />
                            </svg>
                          </button>
                        ) : (
                        <span className="truncate max-w-[160px]">
                          {note.title.trim() || note.content.trim() || t("notes.emptyNote")}
                        </span>
                        )}
                        <button
                          onClick={() => setConfirmDeleteId(note._id)}
                          className="text-gray-700/60 hover:text-red-600 cursor-pointer shrink-0"
                          title={t("common.delete")}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  </>
                  )}
                </div>
              )}

              {/* Text notes */}
              {textNotes.length > 0 && (
                <div>
                  <button
                    onClick={() => setTextOpen((v) => !v)}
                    className="w-full flex items-center justify-between mb-2 cursor-pointer group"
                  >
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide group-hover:text-gray-600">
                      {t("notes.textNotes", { count: textNotes.length, max: NOTE_LIMITS.text })}
                    </h3>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${textOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {textOpen && (
                  <>
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={toggleSelectAll}
                      className="text-[11px] text-gray-500 hover:text-gray-800 cursor-pointer"
                    >
                      {allTextSelected ? t("notes.deselectAll") : t("notes.selectAll")}
                    </button>
                  </div>
                  {/* Bulk action bar */}
                  {selectedIds.size > 0 && (
                    <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 mb-3">
                      <span className="text-xs text-blue-800 font-medium">
                        {t("notes.selected", { count: selectedIds.size })}
                      </span>
                      <button
                        onClick={() => setConfirmBulk(true)}
                        className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-red-700 cursor-pointer flex items-center gap-1"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {t("notes.deleteSelected", { count: selectedIds.size })}
                      </button>
                    </div>
                  )}

                  <div className="space-y-2">
                    {textNotes.map((note) => (
                      <RichTextNote
                        key={note._id}
                        id={note._id}
                        title={note.title}
                        value={note.content}
                        dir={note.dir}
                        collapsed={note.collapsed}
                        pinned={note.pinned}
                        canPin={note.pinned || pinnedCount < MAX_PINS}
                        selected={selectedIds.has(note._id)}
                        groupColor={groupColor.get(note._id)}
                        flashing={flashIds.has(note._id)}
                        onShowLinks={flashNotes}
                        linkedNotes={(note.links || [])
                          .map((lid) => textNotes.find((n) => n._id === lid))
                          .filter((n): n is typeof note => !!n)
                          .map((n) => ({ _id: n._id, title: n.title, color: n.color }))}
                        availableToLink={textNotes
                          .filter((n) => n._id !== note._id && !(note.links || []).includes(n._id))
                          .map((n) => ({ _id: n._id, title: n.title, color: n.color }))}
                        onToggleSelect={() => toggleSelect(note._id)}
                        onToggleCollapse={() => updateNote(note._id, { collapsed: !note.collapsed })}
                        onTogglePin={() => togglePin(note._id)}
                        onTitleChange={(title) => updateNote(note._id, { title })}
                        onChange={(html) => updateNote(note._id, { content: html })}
                        onDirChange={(d) => updateNote(note._id, { dir: d })}
                        onToggleLink={(otherId) => toggleLink(note._id, otherId)}
                        onSave={() => saveNote(note._id)}
                        onDelete={() => setConfirmDeleteId(note._id)}
                        dragging={reorder?.dragId === note._id}
                        dropTarget={reorder?.overId === note._id}
                        onReorderStart={(e) => startReorder(e, note._id)}
                      />
                    ))}
                  </div>
                  </>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <ConfirmModal
        isOpen={confirmDeleteId !== null}
        title={t("notes.deleteTitle")}
        message={t("notes.deleteConfirm")}
        confirmText={t("common.delete")}
        variant="danger"
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDeleteId(null)}
      />

      <ConfirmModal
        isOpen={confirmBulk}
        title={t("notes.deleteManyTitle")}
        message={t("notes.deleteManyConfirm", { count: selectedIds.size })}
        confirmText={t("common.delete")}
        variant="danger"
        onConfirm={confirmBulkDelete}
        onCancel={() => setConfirmBulk(false)}
      />
    </>
  );
}
