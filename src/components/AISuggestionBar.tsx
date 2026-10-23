import { useTranslation } from "react-i18next";
import { openAISettings } from "../services/ai";
import type { WritingSuggestions } from "../hooks/useWritingSuggestions";

/**
 * Status line under a Schreiben text field: an on/off switch for AI suggestions, what is happening
 * (waiting, writing, ready, why there is nothing, or the error) and the matching action.
 */
export default function AISuggestionBar({
  ai,
  fieldKey,
  onSuggestNow,
  onAccept,
}: {
  ai: WritingSuggestions;
  fieldKey: number;
  onSuggestNow: () => void;
  onAccept: () => void;
}) {
  const { t } = useTranslation();
  const status = ai.statusFor(fieldKey);
  const link = "text-blue-600 hover:underline cursor-pointer font-medium";

  let content: React.ReactNode;
  switch (status) {
    case "off":
      content = <span className="text-gray-400">{t("aiSuggest.off")}</span>;
      break;
    case "signed-out":
      content = <span className="text-gray-500">{t("aiSuggest.signedOut")}</span>;
      break;
    case "no-key":
      content = (
        <span className="text-amber-700">
          {t("aiSuggest.noKey")}{" "}
          <button onClick={openAISettings} className={link}>{t("aiSuggest.setUp")}</button>
        </span>
      );
      break;
    case "loading":
      content = (
        <span className="text-gray-500 inline-flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border-2 border-gray-300 border-t-gray-600 animate-spin" aria-hidden="true" />
          {t("aiSuggest.loading")}
        </span>
      );
      break;
    case "ready":
      content = (
        <span className="text-gray-600">
          {ai.suggestionFor(fieldKey).startsWith("\n") && (
            <span className="mr-1 text-blue-600">{t("aiSuggest.newLine")}</span>
          )}
          <span className="pointer-fine:inline hidden">{t("aiSuggest.readyTab")} </span>
          <button onClick={onAccept} className="ml-1 rounded-md bg-gray-900 text-white px-2 py-0.5 font-medium cursor-pointer">
            {t("aiSuggest.accept")}
          </button>
        </span>
      );
      break;
    case "none":
      content = (
        <span className="text-gray-500">
          {t(`aiSuggest.none.${ai.reasonFor(fieldKey) ?? "empty"}`)}{" "}
          {ai.reasonFor(fieldKey) === "empty" && <button onClick={onSuggestNow} className={link}>{t("aiSuggest.retry")}</button>}
        </span>
      );
      break;
    case "error":
      content = (
        <span className="text-red-600 break-words">
          ⚠️ {t("aiSuggest.error", { message: ai.messageFor(fieldKey) })}{" "}
          <button onClick={onSuggestNow} className={link}>{t("aiSuggest.retry")}</button>
          {" · "}
          <button onClick={openAISettings} className={link}>{t("aiSettings.title")}</button>
        </span>
      );
      break;
    default:
      content = (
        <span className="text-gray-400">
          {t("aiSuggest.idle")}{" "}
          <button onClick={onSuggestNow} className={link}>✨ {t("aiSuggest.suggestNow")}</button>
        </span>
      );
  }

  return (
    <div className="mt-2 flex items-start gap-2 text-xs" aria-live="polite">
      <label className="inline-flex items-center gap-1.5 shrink-0 cursor-pointer select-none">
        <button
          type="button"
          role="switch"
          aria-checked={ai.enabled}
          onClick={() => ai.setEnabled(!ai.enabled)}
          className={`relative w-8 h-[18px] rounded-full transition-colors cursor-pointer ${ai.enabled ? "bg-gray-900" : "bg-gray-300"}`}
        >
          <span className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white shadow transition-all ${ai.enabled ? "left-4" : "left-0.5"}`} />
        </button>
        <span className="font-medium text-gray-700">✨ {t("aiSuggest.label")}</span>
      </label>
      <span className="min-w-0 pt-px">{content}</span>
    </div>
  );
}
