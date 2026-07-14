import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNotes } from "../context/NotesContext";
import RichTextNote from "./RichTextNote";
import ConfirmModal from "./ConfirmModal";

interface NotesPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotesPanel({ isOpen, onClose }: NotesPanelProps) {
  const { user } = useAuth();
  const { notes, isLoading, error, addNote, updateNote, saveNote, deleteNote, deleteMany, toggleLink } = useNotes();
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [confirmBulk, setConfirmBulk] = useState(false);
  const [tickOpen, setTickOpen] = useState(true);
  const [textOpen, setTextOpen] = useState(true);

  if (!isOpen) return null;

  const textNotes = notes.filter((n) => n.type === "text");
  const tickNotes = notes.filter((n) => n.type === "tick");

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

  return (
    <>
      {/* Non-blocking left drawer: no backdrop so the test stays usable while taking notes */}
      <div data-notes-area className="fixed top-0 left-0 bottom-0 z-[55] w-full max-w-sm bg-white shadow-2xl border-r border-gray-200 flex flex-col animate-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Meine Notizen</h2>
            <p className="text-xs text-gray-500">
              {notes.length} Notiz{notes.length === 1 ? "" : "en"} · Farbnotizen sind frei verschiebbar
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            title="Schließen"
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
              Melden Sie sich an, um Ihre Notizen zur Pr&uuml;fung zu speichern.
            </p>
            <div className="flex gap-2">
              <Link to="/login" onClick={onClose} className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                Anmelden
              </Link>
              <Link to="/signup" onClick={onClose} className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Registrieren
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Add buttons */}
            <div className="px-5 py-3 border-b border-gray-100 flex gap-2">
              <button
                onClick={() => addNote("text")}
                className="flex-1 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-800 flex items-center justify-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Textnotiz
              </button>
              <button
                onClick={() => addNote("tick")}
                className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50 flex items-center justify-center gap-1.5"
              >
                <span className="w-4 h-4 rounded-sm inline-block" style={{ backgroundColor: "#fca5a5" }} />
                Farbnotiz
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</p>
              )}
              {isLoading && <p className="text-sm text-gray-400">Laden...</p>}

              {!isLoading && notes.length === 0 && (
                <p className="text-sm text-gray-400 text-center mt-8">
                  Noch keine Notizen. Erstellen Sie Ihre erste Notiz oben.
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
                      Farbnotizen ({tickNotes.length})
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
                  <p className="text-[11px] text-gray-400 mb-2">
                    Diese Notizen schweben über der App. Ziehen Sie sie an eine beliebige Stelle.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tickNotes.map((note) => (
                      <div
                        key={note._id}
                        className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-gray-800 max-w-full"
                        style={{ backgroundColor: note.color }}
                      >
                        <span className="truncate max-w-[160px]">
                          {note.title.trim() || note.content.trim() || "(leer)"}
                        </span>
                        <button
                          onClick={() => setConfirmDeleteId(note._id)}
                          className="text-gray-700/60 hover:text-red-600 cursor-pointer shrink-0"
                          title="Löschen"
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
                  <div className="flex items-center justify-between mb-2">
                    <button
                      onClick={() => setTextOpen((v) => !v)}
                      className="flex items-center gap-1 cursor-pointer group"
                    >
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform ${textOpen ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide group-hover:text-gray-600">
                        Textnotizen ({textNotes.length})
                      </h3>
                    </button>
                    {textOpen && (
                      <button
                        onClick={toggleSelectAll}
                        className="text-[11px] text-gray-500 hover:text-gray-800 cursor-pointer"
                      >
                        {allTextSelected ? "Auswahl aufheben" : "Alle auswählen"}
                      </button>
                    )}
                  </div>

                  {textOpen && (
                  <>
                  {/* Bulk action bar */}
                  {selectedIds.size > 0 && (
                    <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 mb-3">
                      <span className="text-xs text-blue-800 font-medium">
                        {selectedIds.size} ausgewählt
                      </span>
                      <button
                        onClick={() => setConfirmBulk(true)}
                        className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-red-700 cursor-pointer flex items-center gap-1"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {selectedIds.size} löschen
                      </button>
                    </div>
                  )}

                  <div className="space-y-3">
                    {textNotes.map((note) => (
                      <RichTextNote
                        key={note._id}
                        title={note.title}
                        value={note.content}
                        dir={note.dir}
                        collapsed={note.collapsed}
                        selected={selectedIds.has(note._id)}
                        linkedNotes={(note.links || [])
                          .map((lid) => notes.find((n) => n._id === lid))
                          .filter((n): n is typeof note => !!n)
                          .map((n) => ({ _id: n._id, title: n.title, color: n.color }))}
                        availableToLink={notes
                          .filter((n) => n._id !== note._id && !(note.links || []).includes(n._id))
                          .map((n) => ({ _id: n._id, title: n.title, color: n.color }))}
                        onToggleSelect={() => toggleSelect(note._id)}
                        onToggleCollapse={() => updateNote(note._id, { collapsed: !note.collapsed })}
                        onTitleChange={(title) => updateNote(note._id, { title })}
                        onChange={(html) => updateNote(note._id, { content: html })}
                        onDirChange={(d) => updateNote(note._id, { dir: d })}
                        onToggleLink={(otherId) => toggleLink(note._id, otherId)}
                        onSave={() => saveNote(note._id)}
                        onDelete={() => setConfirmDeleteId(note._id)}
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
        title="Notiz löschen"
        message="Möchten Sie diese Notiz wirklich löschen?"
        confirmText="Löschen"
        cancelText="Abbrechen"
        variant="danger"
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDeleteId(null)}
      />

      <ConfirmModal
        isOpen={confirmBulk}
        title="Notizen löschen"
        message={`Möchten Sie ${selectedIds.size} Notiz${selectedIds.size === 1 ? "" : "en"} wirklich löschen?`}
        confirmText="Löschen"
        cancelText="Abbrechen"
        variant="danger"
        onConfirm={confirmBulkDelete}
        onCancel={() => setConfirmBulk(false)}
      />
    </>
  );
}
