import { useState, useEffect, useRef } from "react";
import { translateWord, generateExample, openAISettings } from "../services/ai";
import useAIConfig from "../hooks/useAIConfig";
import { useVocabulary } from "../context/VocabularyContext";
import { useAnswers } from "../context/AnswersContext";
import { usePermissions } from "../context/Permissions";
import { useTranslation } from "react-i18next";

const HIGHLIGHT_COLORS = [
  { key: "yellow", value: "#fef08a" },
  { key: "green", value: "#bbf7d0" },
  { key: "blue", value: "#bfdbfe" },
  { key: "pink", value: "#fbcfe8" },
  { key: "orange", value: "#fed7aa" },
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

// Viewport coordinates of what the popup points at: horizontal center, plus the top and
// bottom of the selection (equal for a right-click point).
interface PopupPosition {
  x: number;
  top: number;
  bottom: number;
}

const POPUP_HEIGHT = 44;
// Room kept free at the bottom of a phone screen for the dock
const MOBILE_BOTTOM_SPACE = 96;
// Upper estimate of the popup height on a phone (buttons wrap to two rows, plus a translation)
const MOBILE_POPUP_ESTIMATE = 150;

const isTouch = () => window.matchMedia("(pointer: coarse)").matches;

// Mouse: a small bar above the anchor. Touch: a full-width bar right under the last selected
// line (the phone's own copy/paste bar sits above the selection), or above the selection when
// there's no room below. Always inside the viewport.
function popupStyle(pos: PopupPosition): React.CSSProperties {
  if (isTouch()) {
    const edges = { left: 8, right: 8 };
    if (pos.bottom + 10 + MOBILE_POPUP_ESTIMATE < window.innerHeight - MOBILE_BOTTOM_SPACE) return { ...edges, top: pos.bottom + 10 };
    if (pos.top - 10 - MOBILE_POPUP_ESTIMATE > 10) return { ...edges, bottom: window.innerHeight - pos.top + 10 };
    return { ...edges, bottom: MOBILE_BOTTOM_SPACE };
  }
  const above = pos.top - POPUP_HEIGHT - 8;
  const top = above < 10 ? pos.bottom + 10 : above;
  return {
    left: Math.max(8, Math.min(pos.x, window.innerWidth - 280)),
    top: Math.max(10, Math.min(top, window.innerHeight - POPUP_HEIGHT - 10)),
  };
}

// Position of the current selection: top of its first line, bottom and center of its last line.
// null when there is no usable selection (empty, inside the notes editor or the guided tour).
function selectionAnchor(isExcluded: (node: Node | null) => boolean): PopupPosition | null {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !selection.toString().trim() || selection.rangeCount === 0) return null;
  if (isExcluded(selection.anchorNode)) return null;
  const rects = [...selection.getRangeAt(0).getClientRects()].filter((r) => r.width > 0 && r.height > 0);
  if (rects.length === 0) return null;
  const first = rects[0];
  const last = rects[rects.length - 1];
  return { x: last.left + last.width / 2, top: first.top, bottom: last.bottom };
}

export default function TextHighlighter() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [popupPos, setPopupPos] = useState<PopupPosition>({ x: 0, top: 0, bottom: 0 });
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
  // Without the user's own AI key, AI buttons open the AI settings instead of doing nothing
  const aiConfig = useAIConfig();

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
        setPopupPos({ x: e.clientX, top: e.clientY, bottom: e.clientY });
        setShowPopup(true);
      }
    };

    // Selections in the guided tour or the notes area (notes have their own editor) don't get the popup.
    const isExcluded = (node: Node | null) => {
      const el = node?.nodeType === 3 ? node.parentElement : (node as HTMLElement | null);
      return !!el?.closest?.('[data-testid^="joyride"], .react-joyride, .__react-joyride, [class*="joyride"]') || isInsideNotes(node);
    };

    // While a finger is down (dragging selection handles or scrolling) the popup stays hidden;
    // it reappears under the final selection when the finger is lifted.
    let touching = false;

    const showForSelection = () => {
      const anchor = selectionAnchor(isExcluded);
      if (!anchor) return;
      setPopupPos(anchor);
      setShowPopup(true);
    };

    const handleSelectionChange = () => {
      if (!touching) showForSelection();
    };

    // Keep the fixed popup next to the selection when the page scrolls.
    const handleScroll = () => {
      if (!touching && popupRef.current) showForSelection();
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (popupRef.current?.contains(target)) return;
      if (e.type === "touchstart") touching = true;
      setShowPopup(false);
      setTranslation(null);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touching || e.touches.length > 0) return;
      touching = false;
      // Let the browser finish updating the selection first
      setTimeout(showForSelection, 50);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);
    window.addEventListener("scroll", handleScroll, { capture: true, passive: true });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  const applyHighlight = (color: string) => {
    if (!hasFeature("textHighlighting")) {
      alert(t("highlighter.needsSilver"));
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
          className="fixed z-[999] bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex items-center gap-1.5 flex-wrap max-w-[90vw] pointer-coarse:max-w-none pointer-coarse:justify-center pointer-coarse:gap-2.5"
          style={popupStyle(popupPos)}
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
              title={hasFeature("textHighlighting") ? t(`highlighter.colors.${c.key}`) : `🔒 ${t("highlighter.silverRequired")}`}
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
            title={t("highlighter.readAloud")}
          >
            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          {/* Translate to Arabic */}
          <button
            onClick={async () => {
              if (!aiConfig) return openAISettings();
              const selection = window.getSelection();
              if (selection && selection.toString().trim()) {
                setTranslating(true);
                try {
                  const result = await translateWord(selection.toString(), "arabic");
                  setTranslation(result);
                } catch (e) {
                  setTranslation(`⚠️ ${(e as Error).message}`);
                }
                setTranslating(false);
              }
            }}
            disabled={translating}
            className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center bg-white disabled:opacity-40"
            title={t("highlighter.translateArabic")}
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
            title={t("highlighter.saveAsVocab")}
          >
            <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {/* Remove highlight */}
          <button
            onClick={removeHighlight}
            className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform flex items-center justify-center bg-white"
            title={t("highlighter.removeHighlight")}
          >
            <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Translation (inside the popup so tapping it doesn't close the popup) */}
          {translation && (
            <div className="basis-full flex items-center justify-between gap-2 bg-gray-900 text-white text-sm rounded-md px-3 py-2">
              <span dir="rtl" className="font-medium">{translation}</span>
              <button
                onClick={() => setTranslation(null)}
                className="text-gray-400 hover:text-white cursor-pointer"
                aria-label={t("common.close")}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Vocab modal */}
      {showVocabModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowVocabModal(false)} />
          <div className="relative bg-white rounded-xl shadow-2xl p-5 w-full max-w-sm mx-4">
            <h3 className="text-sm font-bold text-gray-800 mb-4">{t("highlighter.newVocab")}</h3>

            {/* Word */}
            <div className="mb-3">
              <label className="text-[10px] font-medium text-gray-500 mb-1 block">{t("highlighter.word")}</label>
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
                  title={t("highlighter.readAloud")}
                >
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Translation */}
            <div className="mb-3">
              <label className="text-[10px] font-medium text-gray-500 mb-1 block">{t("vocab.translationPlaceholder")}</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={vocabTranslation}
                  onChange={(e) => setVocabTranslation(e.target.value)}
                  placeholder={t("highlighter.translationPlaceholder")}
                  maxLength={150}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={async () => {
                    if (!aiConfig) return openAISettings();
                    if (!vocabWord) return;
                    setAiLoading("translate");
                    try {
                      const result = await translateWord(vocabWord, "arabic");
                      setVocabTranslation(result);
                    } catch { /* ignore */ }
                    setAiLoading(null);
                  }}
                  disabled={!vocabWord || aiLoading !== null}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg text-[10px] font-medium cursor-pointer hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                  title={t("highlighter.aiTranslateArabic")}
                >
                  {aiLoading === "translate" ? "..." : "AI 🇸🇦"}
                </button>
              </div>
            </div>

            {/* Example */}
            <div className="mb-4">
              <label className="text-[10px] font-medium text-gray-500 mb-1 block">{t("highlighter.exampleSentence")}</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={vocabExample}
                  onChange={(e) => setVocabExample(e.target.value)}
                  placeholder={t("highlighter.examplePlaceholder")}
                  maxLength={150}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  onClick={async () => {
                    if (!aiConfig) return openAISettings();
                    if (!vocabWord) return;
                    if (!hasFeature("contextSentences")) {
                      alert(t("vocab.exampleNeedsGold"));
                      return;
                    }
                    setAiLoading("example");
                    try {
                      const result = await generateExample(vocabWord);
                      setVocabExample(result);
                    } catch { /* ignore */ }
                    setAiLoading(null);
                  }}
                  disabled={!vocabWord || aiLoading !== null || !hasFeature("contextSentences")}
                  className={`px-3 py-2 rounded-lg text-[10px] font-medium cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                    hasFeature("contextSentences") ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-300 text-gray-500"
                  }`}
                  title={hasFeature("contextSentences") ? t("vocab.generateExample") : `🔒 ${t("vocab.goldRequired")}`}
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
                {t("common.save")}
              </button>
              <button
                onClick={() => setShowVocabModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-pointer hover:bg-gray-50"
              >
                {t("common.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
