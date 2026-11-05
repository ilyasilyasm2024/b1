import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

// Standalone pages (login, signup, pricing…) have no app header, so they get a corner language switcher.
export default function PageLanguageSwitcher() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return (
    <div className="fixed top-3 right-3 z-50">
      <LanguageSwitcher />
    </div>
  );
}
