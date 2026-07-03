import { useState } from "react";
import LesenTeil1 from "./LesenTeil1";
import LesenTeil2 from "./LesenTeil2";
import LesenTeil3 from "./LesenTeil3";
import LesenTeil4 from "./LesenTeil4";
import LesenTeil5 from "./LesenTeil5";
import HoerenTeil1 from "./HoerenTeil1";
import HoerenTeil2 from "./HoerenTeil2";
import HoerenTeil3 from "./HoerenTeil3";
import HoerenTeil4 from "./HoerenTeil4";
import Schreiben from "./Schreiben";
import Sprechen from "./Sprechen";

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function Accordion({ title, icon, isOpen, onToggle, children }: AccordionProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        {icon}
        <span className="text-sm font-semibold text-gray-800 flex-1 text-left">{title}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="border-t border-gray-100">{children}</div>}
    </div>
  );
}

interface SubItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function SubItem({ title, isOpen, onToggle, children }: SubItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-7 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="text-xs font-medium text-gray-600">{title}</span>
        <svg
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default function Module1() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSub = (key: string) => {
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-3">
      {/* LESEN */}
      <Accordion
        title="Lesen"
        icon={
          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        }
        isOpen={!!openSections["lesen"]}
        onToggle={() => toggleSection("lesen")}
      >
        <SubItem title="Teil 1 – Richtig oder Falsch" isOpen={!!openSubs["l1"]} onToggle={() => toggleSub("l1")}>
          <LesenTeil1 />
        </SubItem>
        <SubItem title="Teil 2 – Multiple Choice" isOpen={!!openSubs["l2"]} onToggle={() => toggleSub("l2")}>
          <LesenTeil2 />
        </SubItem>
        <SubItem title="Teil 3 – Anzeigen zuordnen" isOpen={!!openSubs["l3"]} onToggle={() => toggleSub("l3")}>
          <LesenTeil3 />
        </SubItem>
        <SubItem title="Teil 4 – Ja oder Nein" isOpen={!!openSubs["l4"]} onToggle={() => toggleSub("l4")}>
          <LesenTeil4 />
        </SubItem>
        <SubItem title="Teil 5 – Informationstext" isOpen={!!openSubs["l5"]} onToggle={() => toggleSub("l5")}>
          <LesenTeil5 />
        </SubItem>
      </Accordion>

      {/* HÖREN */}
      <Accordion
        title="Hören"
        icon={
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        }
        isOpen={!!openSections["hoeren"]}
        onToggle={() => toggleSection("hoeren")}
      >
        <SubItem title="Teil 1 – Kurze Texte" isOpen={!!openSubs["h1"]} onToggle={() => toggleSub("h1")}>
          <HoerenTeil1 />
        </SubItem>
        <SubItem title="Teil 2 – Langer Text" isOpen={!!openSubs["h2"]} onToggle={() => toggleSub("h2")}>
          <HoerenTeil2 />
        </SubItem>
        <SubItem title="Teil 3 – Gespräch" isOpen={!!openSubs["h3"]} onToggle={() => toggleSub("h3")}>
          <HoerenTeil3 />
        </SubItem>
        <SubItem title="Teil 4 – Diskussion" isOpen={!!openSubs["h4"]} onToggle={() => toggleSub("h4")}>
          <HoerenTeil4 />
        </SubItem>
      </Accordion>

      {/* SCHREIBEN */}
      <Accordion
        title="Schreiben"
        icon={
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        }
        isOpen={!!openSections["schreiben"]}
        onToggle={() => toggleSection("schreiben")}
      >
        <Schreiben />
      </Accordion>

      {/* SPRECHEN */}
      <Accordion
        title="Sprechen"
        icon={
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        }
        isOpen={!!openSections["sprechen"]}
        onToggle={() => toggleSection("sprechen")}
      >
        <Sprechen />
      </Accordion>
    </div>
  );
}
