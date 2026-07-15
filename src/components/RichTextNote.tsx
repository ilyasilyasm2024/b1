import { useRef, useEffect, useState } from "react";
import type { NoteDir } from "../services/notes";

export interface LinkableNote {
  _id: string;
  title: string;
  color: string;
}

interface RichTextNoteProps {
  title: string;
  value: string;
  dir: NoteDir;
  collapsed: boolean;
  pinned: boolean;
  canPin: boolean;
  isFirst: boolean;
  isLast: boolean;
  selected: boolean;
  linkedNotes: LinkableNote[];
  availableToLink: LinkableNote[];
  onToggleSelect: () => void;
  onToggleCollapse: () => void;
  onTogglePin: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onTitleChange: (title: string) => void;
  onChange: (html: string) => void;
  onDirChange: (dir: NoteDir) => void;
  onToggleLink: (otherId: string) => void;
  onSave: () => void;
  onDelete: () => void;
}

// Simple rich-text editor built on contentEditable + execCommand.
// Supports title, bold, italic, underline, strikethrough, text color,
// highlight, bullet/numbered lists, LTR/RTL text direction, collapse to
// title only, and linking to other notes.
export default function RichTextNote({
  title,
  value,
  dir,
  collapsed,
  pinned,
  canPin,
  isFirst,
  isLast,
  selected,
  linkedNotes,
  availableToLink,
  onToggleSelect,
  onToggleCollapse,
  onTogglePin,
  onMoveUp,
  onMoveDown,
  onTitleChange,
  onChange,
  onDirChange,
  onToggleLink,
  onSave,
  onDelete,
}: RichTextNoteProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showLinkMenu, setShowLinkMenu] = useState(false);

  // Only sync incoming value into the DOM when it differs, to avoid
  // clobbering the caret while the user types. Runs when expanded (editor mounted).
  useEffect(() => {
    const el = editorRef.current;
    if (el && el.innerHTML !== value) {
      el.innerHTML = value;
    }
  }, [value, collapsed]);

  const exec = (command: string, arg?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, arg);
    handleInput();
  };

  const handleInput = () => {
    const html = editorRef.current?.innerHTML ?? "";
    onChange(html);
    setDirty(true);
    setSaved(false);
  };

  const handleSave = () => {
    onSave();
    setDirty(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className={`border rounded-lg bg-white ${selected ? "border-blue-500 ring-1 ring-blue-300" : pinned ? "border-amber-300" : "border-gray-200"}`}>
      {/* Header row: select + pin + collapse + move + title (always visible) */}
      <div className="flex items-center gap-1 px-2 py-1.5">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelect}
          className="accent-blue-600 w-4 h-4 cursor-pointer shrink-0"
          title="Auswählen"
        />
        {/* Pin */}
        <button
          onClick={onTogglePin}
          disabled={!pinned && !canPin}
          className={`p-1 rounded cursor-pointer shrink-0 transition-colors ${
            pinned ? "text-amber-500 hover:text-amber-600" : canPin ? "text-gray-400 hover:text-amber-500" : "text-gray-200 cursor-not-allowed"
          }`}
          title={pinned ? "Anpinnen aufheben" : canPin ? "Anpinnen" : "Max. 5 Pins erreicht"}
        >
          <svg className="w-4 h-4" fill={pinned ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
        {/* Collapse */}
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-gray-100 rounded cursor-pointer shrink-0"
          title={collapsed ? "Öffnen" : "Schließen"}
        >
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform ${collapsed ? "" : "rotate-180"}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Move up/down */}
        <button
          onClick={onMoveUp}
          disabled={isFirst}
          className={`p-1 rounded shrink-0 ${isFirst ? "text-gray-200 cursor-not-allowed" : "text-gray-400 hover:text-gray-700 cursor-pointer"}`}
          title="Nach oben"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button
          onClick={onMoveDown}
          disabled={isLast}
          className={`p-1 rounded shrink-0 ${isLast ? "text-gray-200 cursor-not-allowed" : "text-gray-400 hover:text-gray-700 cursor-pointer"}`}
          title="Nach unten"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Title */}
        <input
          type="text"
          value={title}
          dir={dir}
          onChange={(e) => {
            onTitleChange(e.target.value);
            setDirty(true);
            setSaved(false);
          }}
          placeholder="Titel..."
          className="flex-1 min-w-0 text-sm font-bold text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
        />
        {pinned && (
          <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 24 24" title="Angeheftet">
            <path d="M9 4h6l-1 6 3 3H7l3-3-1-6z" />
          </svg>
        )}
        {collapsed && linkedNotes.length > 0 && (
          <span className="shrink-0 text-[10px] text-gray-400 flex items-center gap-0.5" title={`${linkedNotes.length} verknüpft`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m5.656-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
            </svg>
            {linkedNotes.length}
          </span>
        )}
      </div>

      {collapsed ? null : (
      <>
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-t border-b border-gray-100 flex-wrap">
        <ToolbarButton onClick={() => exec("bold")} title="Fett">
          <span className="font-bold text-sm">B</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("italic")} title="Kursiv">
          <span className="italic text-sm">I</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("underline")} title="Unterstrichen">
          <span className="underline text-sm">U</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("strikeThrough")} title="Durchgestrichen">
          <span className="line-through text-sm">S</span>
        </ToolbarButton>

        <div className="w-px h-4 bg-gray-200 mx-0.5" />

        {/* Text color */}
        <label className="cursor-pointer flex items-center p-1 hover:bg-gray-100 rounded" title="Textfarbe">
          <span className="text-sm font-bold" style={{ color: "#dc2626" }}>A</span>
          <input
            type="color"
            defaultValue="#dc2626"
            onChange={(e) => exec("foreColor", e.target.value)}
            className="w-0 h-0 opacity-0 absolute"
          />
        </label>

        {/* Highlight color */}
        <label className="cursor-pointer flex items-center p-1 hover:bg-gray-100 rounded" title="Markieren">
          <span className="text-sm px-0.5 rounded" style={{ backgroundColor: "#fde68a" }}>H</span>
          <input
            type="color"
            defaultValue="#fde68a"
            onChange={(e) => exec("hiliteColor", e.target.value)}
            className="w-0 h-0 opacity-0 absolute"
          />
        </label>

        <div className="w-px h-4 bg-gray-200 mx-0.5" />

        <ToolbarButton onClick={() => exec("insertUnorderedList")} title="Aufzählung">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("insertOrderedList")} title="Nummerierte Liste">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h13M7 12h13M7 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("removeFormat")} title="Formatierung entfernen">
          <span className="text-xs">✕ᴬ</span>
        </ToolbarButton>

        <div className="w-px h-4 bg-gray-200 mx-0.5" />

        {/* Text direction toggle */}
        <ToolbarButton
          onClick={() => {
            onDirChange(dir === "rtl" ? "ltr" : "rtl");
            setDirty(true);
            setSaved(false);
          }}
          title={dir === "rtl" ? "Links nach rechts (LTR)" : "Rechts nach links (RTL)"}
        >
          {dir === "rtl" ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l-4 4 4 4M5 9h11a4 4 0 010 8h-1" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5l4 4-4 4M19 9H8a4 4 0 000 8h1" />
            </svg>
          )}
        </ToolbarButton>
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        dir={dir}
        onInput={handleInput}
        data-placeholder="Ihre Notiz zur Prüfung..."
        className={`rich-note-editor min-h-[110px] px-3 py-2 text-sm text-gray-800 focus:outline-none ${dir === "rtl" ? "text-right" : "text-left"}`}
        suppressContentEditableWarning
      />

      {/* Linked notes */}
      {(linkedNotes.length > 0 || showLinkMenu) && (
        <div className="px-3 py-2 border-t border-gray-100">
          {linkedNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {linkedNotes.map((ln) => (
                <span
                  key={ln._id}
                  className="inline-flex items-center gap-1 rounded-full pl-2 pr-1 py-0.5 text-[11px] text-gray-800"
                  style={{ backgroundColor: ln.color }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m5.656-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
                  </svg>
                  <span className="truncate max-w-[120px]">{ln.title.trim() || "(ohne Titel)"}</span>
                  <button
                    onClick={() => onToggleLink(ln._id)}
                    className="hover:text-red-600 cursor-pointer"
                    title="Verknüpfung entfernen"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
          {showLinkMenu && (
            <div className="border border-gray-200 rounded-lg max-h-40 overflow-y-auto">
              {availableToLink.length === 0 ? (
                <p className="text-[11px] text-gray-400 p-2">Keine anderen Notizen zum Verknüpfen.</p>
              ) : (
                availableToLink.map((opt) => (
                  <button
                    key={opt._id}
                    onClick={() => {
                      onToggleLink(opt._id);
                      setShowLinkMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: opt.color }} />
                    <span className="truncate">{opt.title.trim() || "(ohne Titel)"}</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* Footer: link + save + delete */}
      <div className="flex items-center justify-between px-2 py-1.5 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-red-600 cursor-pointer flex items-center gap-1 text-xs"
            title="Löschen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Löschen
          </button>
          <button
            onClick={() => setShowLinkMenu((v) => !v)}
            className={`flex items-center gap-1 text-xs cursor-pointer ${showLinkMenu ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}`}
            title="Mit anderer Notiz verknüpfen"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m5.656-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
            </svg>
            Verknüpfen
          </button>
        </div>
        <button
          onClick={handleSave}
          className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
            saved
              ? "bg-green-600 text-white"
              : dirty
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          {saved ? "✓ Gespeichert" : "Speichern"}
        </button>
      </div>
      </>
      )}
    </div>
  );
}

function ToolbarButton({
  onClick,
  title,
  children,
}: {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      title={title}
      className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 cursor-pointer"
    >
      {children}
    </button>
  );
}
