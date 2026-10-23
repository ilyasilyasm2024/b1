import { Fragment } from "react";

/**
 * The grey suggestion text shown after what the student wrote. Line breaks the suggestion would
 * add (e.g. after "Liebe Sara," in an email) are shown as ↵ so it's clear Tab also presses Enter.
 */
export default function SuggestionGhost({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <span className="text-gray-400 italic">
      {" "}
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <span className="not-italic font-semibold text-blue-500" aria-label="Enter">↵</span>
              {"\n"}
            </>
          )}
          {line}
        </Fragment>
      ))}
    </span>
  );
}
