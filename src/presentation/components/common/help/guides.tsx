import type { Step } from "react-joyride";
import type { TFunction } from "i18next";
import { clickIfMissing, runHelpAction, type HelpAction } from "./helpActions";

export interface GuideContext {
  t: TFunction;
  isMobile: boolean;
  signedIn: boolean;
}

export interface HelpGuide {
  id: string;
  icon: string;
  /** The feature only exists for signed-in users (the guide then asks to sign in first). */
  needsAccount?: boolean;
  steps: (ctx: GuideContext) => Step[];
}

const card = (title: string, text: string) => (
  <div>
    <h3 className="font-bold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const center = (content: Step["content"]): Step => ({ target: "body", placement: "center", content });

const before = (action: HelpAction) => () => runHelpAction(action);

// Text for a step lives under help.guides.<guide>.<step>.title / .text
const s = (t: TFunction, guide: string, step: string) =>
  card(t(`help.guides.${guide}.${step}.title`), t(`help.guides.${guide}.${step}.text`));

export const HELP_GUIDES: HelpGuide[] = [
  {
    id: "tour",
    icon: "🎓",
    steps: ({ t }) => [
      center(
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">{t("tour.welcome.title")}</h2>
          <p className="text-sm text-gray-600">{t("tour.welcome.text")}</p>
        </div>
      ),
      { target: '[data-tour="vocab-btn"]', content: card(t("tour.vocabulary.title"), t("tour.vocabulary.text")), before: before("closePanels") },
      { target: '[data-tour="timer"]', content: card(t("tour.timer.title"), t("tour.timer.text")) },
      { target: '[data-tour="auth-section"]', content: card(t("tour.account.title"), t("tour.account.text")) },
      { target: '[data-tour="module-1"]', content: card(t("tour.modelTests.title"), t("tour.modelTests.text")) },
      center(card(t("tour.highlight.title"), t("tour.highlight.text"))),
      center(
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">{t("tour.ready.title")}</h2>
          <p className="text-sm text-gray-600">{t("tour.ready.text")}</p>
        </div>
      ),
    ],
  },
  {
    id: "modelTest",
    icon: "📝",
    needsAccount: true,
    steps: ({ t }) => [
      { target: '[data-tour="module-1"]', content: s(t, "modelTest", "open"), before: before("closePanels") },
      { target: '[data-tour="module-1"]', content: s(t, "modelTest", "parts"), before: before("openModule1"), placement: "top" },
      { target: '[data-tour="timer"]', content: s(t, "modelTest", "timer") },
    ],
  },
  {
    id: "textNote",
    icon: "🗒️",
    needsAccount: true,
    steps: ({ t }) => [
      { target: '[data-tour="notes-btn"]', content: s(t, "textNote", "open"), before: before("closePanels") },
      { target: '[data-tour="note-add-text"]', content: s(t, "textNote", "add"), before: before("openNotes") },
      center(s(t, "textNote", "write")),
      center(s(t, "textNote", "link")),
    ],
  },
  {
    id: "colorNote",
    icon: "🟨",
    needsAccount: true,
    steps: ({ t, isMobile }) => [
      { target: '[data-tour="notes-btn"]', content: s(t, "colorNote", "open"), before: before("closePanels") },
      { target: '[data-tour="note-add-color"]', content: s(t, "colorNote", "add"), before: before("openNotes") },
      center(s(t, "colorNote", isMobile ? "useMobile" : "use")),
    ],
  },
  {
    id: "vocab",
    icon: "📚",
    steps: ({ t, signedIn }) => [
      { target: '[data-tour="vocab-btn"]', content: s(t, "vocab", "open"), before: before("closePanels") },
      { target: '[data-tour="vocab-new"]', content: s(t, "vocab", "new"), before: before("openVocab") },
      ...(signedIn
        ? [
            {
              target: '[data-tour="vocab-form"]',
              content: s(t, "vocab", "form"),
              before: () => clickIfMissing('[data-tour="vocab-new"]', '[data-tour="vocab-form"]'),
            } satisfies Step,
            center(s(t, "vocab", "import")),
          ]
        : [center(s(t, "vocab", "signIn"))]),
    ],
  },
  {
    id: "highlight",
    icon: "🖍️",
    needsAccount: true,
    steps: ({ t, isMobile }) => [
      { target: '[data-tour="module-1"]', content: s(t, "highlight", "open"), before: before("closePanels") },
      center(s(t, "highlight", isMobile ? "selectMobile" : "select")),
      center(s(t, "highlight", "tools")),
    ],
  },
  {
    id: "ai",
    icon: "✨",
    steps: ({ t }) => [
      { target: '[data-tour="ai-btn"]', content: s(t, "ai", "open"), before: before("closePanels") },
      center(s(t, "ai", "key")),
      center(s(t, "ai", "use")),
    ],
  },
  {
    id: "personalize",
    icon: "🎨",
    steps: ({ t }) => [
      { target: '[data-tour="language-btn"]', content: s(t, "personalize", "language"), before: before("closePanels") },
      { target: '[data-tour="theme-btn"]', content: s(t, "personalize", "theme") },
    ],
  },
];

/** Shown instead of a guide's steps when it needs an account and the user isn't signed in. */
export const signInSteps = (t: TFunction): Step[] => [
  {
    target: '[data-tour="auth-section"]',
    content: card(t("help.signIn.title"), t("help.signIn.text")),
    before: before("closePanels"),
  },
];
