import { useState, useEffect, useRef } from "react";
import { translateWord, generateExample, isApiKeyConfigured } from "../services/ai";
import { useVocabulary } from "../context/VocabularyContext";
import { useAnswers } from "../context/AnswersContext";
import { usePermissions } from "../context/Permissions";

const HIGHLIGHT_COLORS = [
  { name: "Gelb", value: "#fef08a" },
  { name: "Grün", value: "#bbf7d0" },
  { name: "Blau", value: "#bfdbfe" },
  { name: "Rosa", value: "#fbcfe8" },
  { name: "Orange", value: "#fed7aa" },
];

const HIGHLIGHTS_STORAGE_KEY = "b1-highlights";

interface HighlightEntry {
  text: string;
  color: string;
}

function loadHighlights(): HighlightEntry[] {
  try {
    const saved = localStorage.getItem(HIGHLIGHTS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveHighlights(entries: HighlightEntry[]) {
  try {
    localStorage.setItem(HIGHLIGHTS_STORAGE_KEY, JSON.stringify(entries));
  } catch {}
}

interface PopupPosition {
  x: number;
  y: number;
}

export default function TextHighlighter() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPos, setPopupPos] = useState<PopupPosition>({ x: 0, y: 0 });
  const [translation, setTranslation] = useState<string | null>(null);
  const [translating, setTranslating] = useState(false);
  const [showVocabModal, setShowVocabModal] = useState(false);
  const [vocabWord, setVocabWord] = useState("");
  const [vocabTranslation, setVocabTranslation] = useState("");
  const [vocabExample, setVocabExample] = useState("");
  const [aiLoading, setAiLoading] = useState<"translate" | "example" | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const { addWord } = useVocabulary();
  const { triggerSync } = useAnswers();
  const { hasFeature } = usePermissions();

  useEffect(() => {
    const isInsideJoyride = (target: EventTarget | null): boolean => {
      const el = target as HTMLElement | null;
      if (!el) return false;
      return !!el.closest('[data-testid^="joyride"], .react-joyride, .__react-joyride, [class*="joyride"]');
    };

    // The highlighter must not trigger inside the notes area (it has its own editor).
    const isInsideNotes = (node: Node | EventTarget | null): boolean => {
      let el: HTMLElement | null = null;
      if (node instanceof HTMLElement) {
        el = node;
      } else if (node && (node as Node).nodeType === 3) {
        el = (node as Node).parentElement;
      } else if (node instanceof Node) {
        el = node as HTMLElement;
      }
      if (!el || typeof el.closest !== "function") return false;
      return !!el.closest("[data-notes-area]");
    };

    const handleContextMenu = (e: MouseEvent) => {
      if (isInsideJoyride(e.target)) return;
      if (isInsideNotes(e.target)) return;
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed && selection.toString().trim()) {
        e.preventDefault();
        setPopupPos({ x: e.clientX, y: e.clientY });
        setShowPopup(true);
      }
    };

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed && selection.toString().trim()) {
        // Check if selection is inside joyride
        const anchorEl = selection.anchorNode?.parentElement;
        if (anchorEl?.closest('[data-testid^="joyride"], .react-joyride, .__react-joyride, [class*="joyride"]')) return;

        // Ignore selections inside the notes area (notes have their own editor)
        if (isInsideNotes(selection.anchorNode)) return;

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (rect.width > 0) {
          setPopupPos({
            x: rect.left + rect.width / 2,
            y: rect.top + window.scrollY,
          });
          setShowPopup(true);
        }
      }
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (popupRef.current && !popupRef.current.contains(target)) {
        setShowPopup(false);
        setTranslation(null);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);

  const applyHighlight = (color: string) => {
    if (!hasFeature("textHighlighting")) {
      alert("Text highlighting requires Silver plan or higher.");
      setShowPopup(false);
      return;
    }
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setShowPopup(false);
      return;
    }

    const selectedText = selection.toString().trim();
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.backgroundColor = color;
    span.style.borderRadius = "2px";
    span.style.padding = "0 1px";
    span.setAttribute("data-highlight", "true");

    try {
      range.surroundContents(span);
    } catch {
      const fragment = range.extractContents();
      span.appendChild(fragment);
      range.insertNode(span);
    }

    // Save to localStorage
    if (selectedText) {
      const highlights = loadHighlights();
      highlights.push({ text: selectedText, color });
      saveHighlights(highlights);
      triggerSync();
    }

    selection.removeAllRanges();
    setShowPopup(false);
  };

  const removeHighlight = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setShowPopup(false);
      return;
    }

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const parentEl = container.nodeType === 3 ? container.parentElement : (container as HTMLElement);

    if (parentEl && parentEl.tagName === "SPAN" && parentEl.style.backgroundColor) {
      const removedText = parentEl.textContent || "";
      const text = document.createTextNode(removedText);
      parentEl.parentNode?.replaceChild(text, parentEl);

      // Remove from localStorage
      const highlights = loadHighlights();
      const idx = highlights.findIndex((h) => h.text === removedText);
      if (idx !== -1) {
        highlights.splice(idx, 1);
        saveHighlights(highlights);
        triggerSync();
      }
    }

    selection.removeAllRanges();
    setShowPopup(false);
  };

  // Restore highlights from localStorage whenever DOM updates (sections open/close)
  useEffect(() => {
    const restoreHighlights = () => {
      const highlights = loadHighlights();
      if (highlights.length === 0) return;

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      let node: Node | null;
      while ((node = walker.nextNode())) {
        textNodes.push(node as Text);
      }

      for (const entry of highlights) {
        // Check if this highlight is already applied
        const existing = document.querySelectorAll('span[data-highlight="true"]');
        let alreadyApplied = false;
        existing.forEach((el) => {
          if (el.textContent === entry.text && (el as HTMLElement).style.backgroundColor === entry.color) {
            alreadyApplied = true;
          }
        });
        if (alreadyApplied) continue;

        for (const textNode of textNodes) {
          if (textNode.parentElement?.getAttribute("data-highlight") === "true") continue;

          const content = textNode.textContent || "";
          const idx = content.indexOf(entry.text);
          if (idx === -1) continue;

          const range = document.createRange();
          range.setStart(textNode, idx);
          range.setEnd(textNode, idx + entry.text.length);

          const span = document.createElement("span");
          span.style.backgroundColor = entry.color;
          span.style.borderRadius = "2px";
          span.style.padding = "0 1px";
          span.setAttribute("data-highlight", "true");

          try {
            range.surroundContents(span);
          } catch {
            // Skip if can't wrap cleanly
          }
          break;
        }
      }
    };

    // Run on initial load
    const timer = setTimeout(restoreHighlights, 300);

    // Observe DOM changes to re-apply highlights when sections open
    const observer = new MutationObserver(() => {
      setTimeout(restoreHighlights, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const openVocabModal = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      setVocabWord(selection.toString().trim());
      setVocabTranslation("");
      setVocabExample("");
      setShowVocabModal(true);
      setShowPopup(false);
    }
  };

  const handleSaveVocab = () => {
    if (vocabWord && vocabTranslation) {
      addWord(vocabWord, vocabTranslation, vocabExample || undefined);
      setShowVocabModal(false);
    }
  };

  return (
    <>
      {/* Context menu popup */}
      {showPopup && (
        <div
          ref={popupRef}
          className="fixed z-[999] bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex items-center gap-1.5 flex-wrap max-w-[90vw]"
          style={{
            left: `${Math.min(popupPos.x, window.innerWidth - 280)}px`,
            top: `${Math.max(popupPos.y - 50, 10)}px`,
          }}
        >
          {HIGHLIGHT_COLORS.map((c) => (
            <button
              key={c.value}
              onClick={() => applyHighlight(c.value)}
              disabled={!hasFeature("textHighlighting")}
              className={`w-6 h-6 rounded-full border border-gray-300 transition-transform ${
                hasFeature("textHighlighting") ? "cursor-pointer hover:scale-110" : "opacity-40 cursor-not-allowed"
              }`}
              style={{ backgroundColor: c.value }}
              title={hasFeature("textHighlighting") ? c.name : "🔒 Silver plan required"}
            />
          ))}
          {/* Read aloud */}
          <button
            onClick={() => {
              const selection = window.getSelection();
              if (selection && selection.toString().trim()) {
                const utterance = new SpeechSynthesisUtterance(selection.toString());
                utterance.lang = "de-DE";
                utterance.rate = 0.85;
                speechSynthesis.speak(utterance);
              }
              setShowPopup(false);
            }}
            className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center bg-white"
            title="Vorlesen"
          >
            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          {/* Translate to Arabic */}
          <button
            onClick={async () => {
              const selection = window.getSelection();
              if (selection && selection.toString().trim() && isApiKeyConfigured()) {
                setTranslating(true);
                try {
                  const result = await translateWord(selection.toString(), "arabic");
                  setTranslation(result);
                } catch {
                  setTranslation("Fehler");
                }
                setTranslating(false);
              }
            }}
            disabled={!isApiKeyConfigured() || translating}
            className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center bg-white disabled:opacity-40"
            title="Ins Arabische übersetzen"
          >
            {translating ? (
              <span className="text-[8px] animate-spin">⟳</span>
            ) : (
              <span className="text-[9px] font-bold text-green-700">ع</span>
            )}
          </button>
          {/* Add to vocabulary */}
          <button
            onClick={openVocabModal}
            className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center bg-white"
            title="Als Vokabel speichern"
          >
            <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {/* Remove highlight */}
          <button
            onClick={removeHighlight}
            className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center bg-white"
            title="Markierung entfernen"
          >
            <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Translation tooltip */}
      {translation && showPopup && (
        <div
          className="fixed z-[999] bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg max-w-xs"
          style={{
            left: `${popupPos.x}px`,
            top: `${popupPos.y + 5}px`,
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <span dir="rtl" className="font-medium">{translation}</span>
            <button
              onClick={() => setTranslation(null)}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Vocab modal */}
      {showVocabModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowVocabModal(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl p-5 w-full max-w-sm mx-4">
            <h3 className="text-sm font-bold text-gray-800 mb-4">Neue Vokabel speichern</h3>

            {/* Word */}
            <div className="mb-3">
              <label className="text-[10px] font-medium text-gray-500 mb-1 block">Wort</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={vocabWord}
                  onChange={(e) => setVocabWord(e.target.value)}
                  maxLength={150}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(vocabWord);
                    utterance.lang = "de-DE";
                    utterance.rate = 0.85;
                    speechSynthesis.speak(utterance);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                  title="Vorlesen"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Translation */}
            <div className="mb-3">
              <label className="text-[10px] font-medium text-gray-500 mb-1 block">Übersetzung</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={vocabTranslation}
                  onChange={(e) => setVocabTranslation(e.target.value)}
                  placeholder="Übersetzung eingeben oder AI nutzen"
                  maxLength={150}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={async () => {
                    if (!vocabWord || !isApiKeyConfigured()) return;
                    setAiLoading("translate");
                    try {
                      const result = await translateWord(vocabWord, "arabic");
                      setVocabTranslation(result);
                    } catch { /* ignore */ }
                    setAiLoading(null);
                  }}
                  disabled={!vocabWord || aiLoading !== null || !isApiKeyConfigured()}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg text-[10px] font-medium cursor-pointer hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                  title="AI Übersetzung (Arabisch)"
                >
                  {aiLoading === "translate" ? "..." : "AI 🇸🇦"}
                </button>
              </div>
            </div>

            {/* Example */}
            <div className="mb-4">
              <label className="text-[10px] font-medium text-gray-500 mb-1 block">Beispielsatz</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={vocabExample}
                  onChange={(e) => setVocabExample(e.target.value)}
                  placeholder="Beispielsatz oder AI generieren"
                  maxLength={150}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={async () => {
                    if (!vocabWord || !isApiKeyConfigured()) return;
                    if (!hasFeature("contextSentences")) {
                      alert("AI example sentences require Gold plan or higher.");
                      return;
                    }
                    setAiLoading("example");
                    try {
                      const result = await generateExample(vocabWord);
                      setVocabExample(result);
                    } catch { /* ignore */ }
                    setAiLoading(null);
                  }}
                  disabled={!vocabWord || aiLoading !== null || !isApiKeyConfigured() || !hasFeature("contextSentences")}
                  className={`px-3 py-2 rounded-lg text-[10px] font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                    hasFeature("contextSentences") ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-300 text-gray-500"
                  }`}
                  title={hasFeature("contextSentences") ? "Beispiel generieren" : "🔒 Gold plan required"}
                >
                  {aiLoading === "example" ? "..." : hasFeature("contextSentences") ? "AI ✍️" : "🔒 AI"}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleSaveVocab}
                disabled={!vocabWord || !vocabTranslation}
                className="flex-1 bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Speichern
              </button>
              <button
                onClick={() => setShowVocabModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-pointer hover:bg-gray-50"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
