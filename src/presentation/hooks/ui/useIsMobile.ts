import { useSyncExternalStore } from "react";

// Matches Tailwind's `sm` breakpoint: below 640px we use the phone layout.
const QUERY = "(max-width: 639px)";

const subscribe = (onChange: () => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

export default function useIsMobile() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
}
