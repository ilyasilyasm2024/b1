// Lets a help guide open or close the app's panels while it shows the user around.
// Home listens for these events and owns the panel state.

export type HelpAction = "closePanels" | "openNotes" | "openVocab" | "openModule1";

export const HELP_ACTION_EVENT = "b1-help-action";

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** Runs an action, then waits for the panel animation so the next step can find its target. */
export async function runHelpAction(action: HelpAction): Promise<void> {
  window.dispatchEvent(new CustomEvent<HelpAction>(HELP_ACTION_EVENT, { detail: action }));
  await wait(350);
}

/** Clicks `opener` when `target` isn't on screen yet (e.g. opens the "new word" form). */
export async function clickIfMissing(opener: string, target: string): Promise<void> {
  if (document.querySelector(target)) return;
  document.querySelector<HTMLElement>(opener)?.click();
  await wait(250);
}
