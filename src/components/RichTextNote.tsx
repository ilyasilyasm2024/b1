import { useRef, useEffect, useState } from "react";
import { MdOutlinePushPin, MdPushPin } from "react-icons/md";
import { MdDragIndicator } from "react-icons/md";
import { NOTE_CONTENT_MAX, NOTE_TITLE_MAX, type NoteDir } from "../services/notes";
import { useTranslation } from "react-i18next";

export interface LinkableNote {
  _id: string;
  title: string;
  color: string;
}

interface RichTextNoteProps {
  id: string;
  title: string;
  value: string;
  dir: NoteDir;
  collapsed: boolean;
  pinned: boolean;
  canPin: boolean;
  selected: boolean;
  /** Color shared by all notes in the same linked group; undefined when not linked */
  groupColor?: string;
  /** True while this note is being highlighted because a linked note's link icon was clicked */
  flashing: boolean;
  linkedNotes: LinkableNote[];
  availableToLink: LinkableNote[];
  onToggleSelect: () => void;
  onToggleCollapse: () => void;
  onTogglePin: () => void;
  onTitleChange: (title: string) => void;
  onChange: (html: string) => void;
  onDirChange: (dir: NoteDir) => void;
  onToggleLink: (otherId: string) => void;
  /** Highlight the given linked notes in the list */
  onShowLinks: (ids: string[]) => void;
  onSave: () => void;
  onDelete: () => void;
  /** True while this note is being dragged to a new position */
  dragging: boolean;
  /** True while another note is dragged over this one (drop target) */
  dropTarget: boolean;
  /** Pointer down on the drag handle (mouse or touch) starts reordering */
  onReorderStart: (e: React.PointerEvent) => void;
}

// Simple rich-text editor built on contentEditable + execCommand.
// Supports title, bold, italic, underline, strikethrough, text color,
// highlight, bullet/numbered lists, LTR/RTL text direction, collapse to
// title only, and linking to other notes.
export default function RichTextNote({
  id,
  title,
  value,
  dir,
  collapsed,
  pinned,
  canPin,
  selected,
  groupColor,
  flashing,
  linkedNotes,
  availableToLink,
  onToggleSelect,
  onToggleCollapse,
  onTogglePin,
  onTitleChange,
  onChange,
  onDirChange,
  onToggleLink,
  onShowLinks,
  onSave,
  onDelete,
  dragging,
  dropTarget,
  onReorderStart,
}: RichTextNoteProps) {
  const { t } = useTranslation();
  const editorRef = useRef<HTMLDivElement>(null);
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showLinkMenu, setShowLinkMenu] = useState(false);
  // Last content within the length limit, restored when an edit (format, paste…) would exceed it
  const lastValid = useRef(value);
  const [limitHit, setLimitHit] = useState(false);
  const limitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Only sync incoming value into the DOM when it differs, to avoid
  // clobbering the caret while the user types. Runs when expanded (editor mounted).
  useEffect(() => {
    const el = editorRef.current;
    if (el && el.innerHTML !== value) {
      el.innerHTML = value;
    }
    lastValid.current = value;
  }, [value, collapsed]);

  const exec = (command: string, arg?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, arg);
    handleInput();
  };

  const flashLimit = () => {
    setLimitHit(true);
    if (limitTimer.current) clearTimeout(limitTimer.current);
    limitTimer.current = setTimeout(() => setLimitHit(false), 1500);
  };

  // Block typing once the stored HTML is at the limit.
  const handleBeforeInput = (e: React.FormEvent<HTMLDivElement>) => {
    const inputType = (e.nativeEvent as InputEvent).inputType || "";
    const html = editorRef.current?.innerHTML ?? "";
    if (inputType.startsWith("insert") && html.length >= NOTE_CONTENT_MAX) {
      e.preventDefault();
      flashLimit();
    }
  };

  // A paste that would go over the limit is inserted as plain text, cut to what still fits.
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const text = e.clipboardData.getData("text/plain");
    const room = NOTE_CONTENT_MAX - (editorRef.current?.innerHTML.length ?? 0);
    if (text.length <= room) return;
    e.preventDefault();
    if (room > 0) document.execCommand("insertText", false, text.slice(0, room));
    flashLimit();
  };

  const handleInput = () => {
    const el = editorRef.current;
    const html = el?.innerHTML ?? "";
    if (el && html.length > NOTE_CONTENT_MAX) {
      // Formatting/markup pushed it over: undo this edit and keep the caret at the end.
      el.innerHTML = lastValid.current;
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      flashLimit();
      return;
    }
    lastValid.current = html;
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
    <div
      data-note-id={id}
      className={`border rounded-lg bg-white transition-shadow ${selected ? "border-blue-500 ring-1 ring-blue-300" : pinned ? "border-amber-300 shadow-sm" : "border-gray-200"} ${flashing ? "note-link-flash" : ""} ${dragging ? "opacity-50" : ""} ${dropTarget ? "ring-2 ring-blue-400" : ""}`}
      style={groupColor ? ({ borderLeft: `4px solid ${groupColor}`, "--flash-color": groupColor } as React.CSSProperties) : undefined}
    >
      {/* Header row: drag handle + select + pin + collapse + title */}
      <div className="flex items-center gap-1.5 px-2 py-1.5">
        {/* Drag handle */}
        <span
          onPointerDown={onReorderStart}
          className="cursor-grab active:cursor-grabbing shrink-0 text-gray-300 hover:text-gray-500 touch-none p-1 -m-1"
          title={t("richNote.dragToReorder")}
          aria-label={t("richNote.dragToReorder")}
        >
          <MdDragIndicator className="w-5 h-5" />
        </span>
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelect}
          className="accent-blue-600 w-4 h-4 cursor-pointer shrink-0"
          title={t("richNote.select")}
        />
        {/* Pin (react-icons) */}
        <button
          onClick={onTogglePin}
          disabled={!pinned && !canPin}
          className={`p-0.5 rounded cursor-pointer shrink-0 transition-colors ${
            pinned ? "text-amber-500 hover:text-amber-600" : canPin ? "text-gray-300 hover:text-amber-500" : "text-gray-200 cursor-not-allowed"
          }`}
          title={pinned ? t("richNote.unpin") : canPin ? t("richNote.pin") : t("richNote.maxPins")}
        >
          {pinned ? <MdPushPin className="w-5 h-5" /> : <MdOutlinePushPin className="w-5 h-5" />}
        </button>
        {/* Collapse */}
        <button
          onClick={onToggleCollapse}
          className="p-0.5 hover:bg-gray-100 rounded cursor-pointer shrink-0"
          title={collapsed ? t("richNote.expand") : t("richNote.collapse")}
        >
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${collapsed ? "" : "rotate-180"}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
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
          placeholder={t("richNote.titlePlaceholder")}
          maxLength={NOTE_TITLE_MAX}
          className="flex-1 min-w-0 text-sm font-bold text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
        />
        {pinned && collapsed && (
          <MdPushPin className="w-4 h-4 text-amber-500 shrink-0" />
        )}
        {collapsed && linkedNotes.length > 0 && (
          <button
            onClick={() => onShowLinks(linkedNotes.map((n) => n._id))}
            className="shrink-0 text-[10px] text-gray-400 hover:text-blue-600 flex items-center gap-0.5 rounded px-0.5 cursor-pointer"
            title={t("richNote.showLinked", { count: linkedNotes.length })}
            style={groupColor ? { color: groupColor } : undefined}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m5.656-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
            </svg>
            {linkedNotes.length}
          </button>
        )}
      </div>

      {collapsed ? null : (
      <>
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-t border-b border-gray-100 flex-wrap">
        <ToolbarButton onClick={() => exec("bold")} title={t("richNote.bold")}>
          <span className="font-bold text-sm">B</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("italic")} title={t("richNote.italic")}>
          <span className="italic text-sm">I</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("underline")} title={t("richNote.underline")}>
          <span className="underline text-sm">U</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("strikeThrough")} title={t("richNote.strikethrough")}>
          <span className="line-through text-sm">S</span>
        </ToolbarButton>

        <div className="w-px h-4 bg-gray-200 mx-0.5" />

        {/* Text color */}
        <label className="cursor-pointer flex items-center p-1 hover:bg-gray-100 rounded" title={t("richNote.textColor")}>
          <span className="text-sm font-bold" style={{ color: "#dc2626" }}>A</span>
          <input
            type="color"
            defaultValue="#dc2626"
            onChange={(e) => exec("foreColor", e.target.value)}
            className="w-0 h-0 opacity-0 absolute"
          />
        </label>

        {/* Highlight color */}
        <label className="cursor-pointer flex items-center p-1 hover:bg-gray-100 rounded" title={t("richNote.highlight")}>
          <span className="text-sm px-0.5 rounded" style={{ backgroundColor: "#fde68a" }}>H</span>
          <input
            type="color"
            defaultValue="#fde68a"
            onChange={(e) => exec("hiliteColor", e.target.value)}
            className="w-0 h-0 opacity-0 absolute"
          />
        </label>

        <div className="w-px h-4 bg-gray-200 mx-0.5" />

        <ToolbarButton onClick={() => exec("insertUnorderedList")} title={t("richNote.bulletList")}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("insertOrderedList")} title={t("richNote.numberedList")}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h13M7 12h13M7 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
        </ToolbarButton>
        <ToolbarButton onClick={() => exec("removeFormat")} title={t("richNote.clearFormatting")}>
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
          title={dir === "rtl" ? t("richNote.ltr") : t("richNote.rtl")}
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
        onBeforeInput={handleBeforeInput}
        onPaste={handlePaste}
        data-placeholder={t("richNote.contentPlaceholder")}
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
                  <button
                    onClick={() => onShowLinks([ln._id])}
                    className="truncate max-w-[120px] cursor-pointer hover:underline"
                    title={t("richNote.showLinked", { count: 1 })}
                  >
                    {ln.title.trim() || t("richNote.untitled")}
                  </button>
                  <button
                    onClick={() => onToggleLink(ln._id)}
                    className="hover:text-red-600 cursor-pointer"
                    title={t("richNote.unlink")}
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
                <p className="text-[11px] text-gray-400 p-2">{t("richNote.nothingToLink")}</p>
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
                    <span className="truncate">{opt.title.trim() || t("richNote.untitled")}</span>
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
            title={t("common.delete")}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            {t("common.delete")}
          </button>
          <button
            onClick={() => setShowLinkMenu((v) => !v)}
            className={`flex items-center gap-1 text-xs cursor-pointer ${showLinkMenu ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}`}
            title={t("richNote.linkTitle")}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5m5.656-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
            </svg>
            {t("richNote.link")}
          </button>
        </div>
        <div className="flex items-center gap-2">
        {(limitHit || value.length >= NOTE_CONTENT_MAX * 0.8) && (
          <span
            className={`text-[10px] tabular-nums ${limitHit || value.length >= NOTE_CONTENT_MAX ? "text-red-600 font-semibold" : "text-amber-600"}`}
            title={t("richNote.limitHint")}
          >
            {value.length}/{NOTE_CONTENT_MAX}
          </span>
        )}
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
          {saved ? `✓ ${t("common.saved")}` : t("common.save")}
        </button>
        </div>
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
