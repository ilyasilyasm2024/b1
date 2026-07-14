import { useRef, useEffect, useState } from "react";

interface RichTextNoteProps {
  value: string;
  selected: boolean;
  onToggleSelect: () => void;
  onChange: (html: string) => void;
  onSave: () => void;
  onDelete: () => void;
}

// Simple rich-text editor built on contentEditable + execCommand.
// Supports bold, italic, underline, strikethrough, text color, highlight,
// and bullet/numbered lists.
export default function RichTextNote({
  value,
  selected,
  onToggleSelect,
  onChange,
  onSave,
  onDelete,
}: RichTextNoteProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);

  // Only sync incoming value into the DOM when it differs, to avoid
  // clobbering the caret while the user types.
  useEffect(() => {
    const el = editorRef.current;
    if (el && el.innerHTML !== value) {
      el.innerHTML = value;
    }
  }, [value]);

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
    <div className={`border rounded-lg bg-white ${selected ? "border-blue-500 ring-1 ring-blue-300" : "border-gray-200"}`}>
      {/* Top row: select checkbox + toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gray-100 flex-wrap">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelect}
          className="accent-blue-600 w-4 h-4 mr-1 cursor-pointer"
          title="Auswählen"
        />

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
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        data-placeholder="Ihre Notiz zur Prüfung..."
        className="rich-note-editor min-h-[110px] px-3 py-2 text-sm text-gray-800 focus:outline-none"
        suppressContentEditableWarning
      />

      {/* Footer: save + delete */}
      <div className="flex items-center justify-between px-2 py-1.5 border-t border-gray-100">
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
