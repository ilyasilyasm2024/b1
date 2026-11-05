import type { ReactNode } from "react";

// Item of the phone bottom dock: icon above a short label, highlighted while its panel is open.
export default function DockButton({
  label,
  active,
  onClick,
  icon,
  tour,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
  icon: ReactNode;
  tour?: string;
}) {
  return (
    <button
      onClick={onClick}
      data-tour={tour}
      aria-pressed={active}
      className={`flex-1 min-w-0 flex flex-col items-center gap-0.5 py-1.5 rounded-xl cursor-pointer transition-colors ${
        active ? "bg-gray-900 text-white" : "text-gray-600 active:bg-gray-100"
      }`}
    >
      {icon}
      <span className="text-[10px] font-medium leading-none truncate max-w-full px-1">{label}</span>
    </button>
  );
}
