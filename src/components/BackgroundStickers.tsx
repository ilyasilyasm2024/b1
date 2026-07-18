import { useRef } from "react";
import { useTheme, type Sticker } from "../context/ThemeContext";

/**
 * Renders decorative background stickers that users can drag to personalize
 * their study space. Sits behind the main content (z-index 0, pointer-events
 * only on the stickers themselves).
 */
export default function BackgroundStickers() {
  const { stickers, moveSticker, removeSticker } = useTheme();

  if (stickers.length === 0) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stickers.map((sticker) => (
        <DraggableSticker
          key={sticker.id}
          sticker={sticker}
          onMove={(x, y) => moveSticker(sticker.id, x, y)}
          onRemove={() => removeSticker(sticker.id)}
        />
      ))}
    </div>
  );
}

function DraggableSticker({
  sticker,
  onMove,
  onRemove,
}: {
  sticker: Sticker;
  onMove: (x: number, y: number) => void;
  onRemove: () => void;
}) {
  const dragState = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: sticker.x,
      originY: sticker.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    const x = Math.max(0, Math.min(window.innerWidth - 40, dragState.current.originX + dx));
    const y = Math.max(0, Math.min(window.innerHeight - 40, dragState.current.originY + dy));
    onMove(x, y);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).hasPointerCapture?.(e.pointerId)) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    }
    dragState.current = null;
  };

  return (
    <div
      className="absolute pointer-events-auto cursor-grab active:cursor-grabbing select-none group"
      style={{
        left: sticker.x,
        top: sticker.y,
        fontSize: sticker.size,
        transform: `rotate(${sticker.rotation}deg)`,
        opacity: 0.6,
        transition: "opacity 0.2s",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <span className="group-hover:opacity-100 opacity-60 transition-opacity">{sticker.emoji}</span>
      {/* Remove button on hover */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white rounded-full text-[8px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        title="Entfernen"
      >
        ×
      </button>
    </div>
  );
}
