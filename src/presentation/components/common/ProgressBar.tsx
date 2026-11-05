interface ProgressBarProps {
  percent: number;
  answered: number;
  total: number;
}

export default function ProgressBar({ percent, answered, total }: ProgressBarProps) {
  const color = percent === 100
    ? "bg-emerald-500"
    : percent >= 50
    ? "bg-blue-500"
    : "bg-gray-400";

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-[10px] text-gray-500 font-medium shrink-0">
        {answered}/{total} ({percent}%)
      </span>
    </div>
  );
}
