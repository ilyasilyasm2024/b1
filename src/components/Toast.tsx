import { useState, useEffect, createContext, useContext, useCallback, type ReactNode } from "react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const bgColor = toast.type === "success"
    ? "bg-emerald-600"
    : toast.type === "error"
    ? "bg-red-600"
    : "bg-gray-800";

  const icon = toast.type === "success"
    ? "✓"
    : toast.type === "error"
    ? "✕"
    : "ℹ";

  return (
    <div
      className={`pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all duration-300 ${bgColor} ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      <span className="text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
        {icon}
      </span>
      {toast.message}
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
