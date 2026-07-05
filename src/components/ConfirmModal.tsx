interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "default";
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Bestätigen",
  cancelText = "Abbrechen",
  variant = "default",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  const confirmStyle = variant === "danger"
    ? "bg-red-600 hover:bg-red-700 text-white"
    : "bg-gray-900 hover:bg-gray-800 text-white";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6 animate-in">
        <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${confirmStyle}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
