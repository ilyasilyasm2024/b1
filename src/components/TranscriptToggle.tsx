import { useState, useEffect, useRef, useCallback } from "react";
import { loadTranscript, type Transcript, type TranscriptSegment } from "../services/transcripts";

interface TranscriptToggleProps {
  /** e.g. "module1" */
  module: string;
  /** e.g. "model1-tail1-text1" (no .mp3 extension) */
  fileName: string;
  /** Optional: pass the audio element to enable time-synced highlighting.
   *  If not provided, the component auto-discovers the nearest sibling audio. */
  audioRef?: React.RefObject<HTMLAudioElement | null>;
}

/**
 * A toggle button that shows/hides the transcript of an audio file.
 * When an audioRef is provided, highlights the current segment in sync
 * with playback and allows clicking a segment to seek.
 */
export default function TranscriptToggle({ module, fileName, audioRef }: TranscriptToggleProps) {
  const [open, setOpen] = useState(false);
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<"segment" | "full">("segment");
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLSpanElement>(null);
  const selfRef = useRef<HTMLDivElement>(null);

  // Auto-discover sibling audio element if no audioRef prop
  const getAudio = useCallback((): HTMLAudioElement | null => {
    if (audioRef?.current) return audioRef.current;
    // Walk up to parent container and find the closest preceding audio element
    const el = selfRef.current;
    if (!el) return null;
    const parent = el.parentElement;
    if (!parent) return null;
    // Find the last audio before this toggle in the parent
    const audios = parent.querySelectorAll("audio");
    if (audios.length > 0) return audios[audios.length - 1] as HTMLAudioElement;
    // Also check grandparent
    const grandparent = parent.parentElement;
    if (grandparent) {
      const gpAudios = grandparent.querySelectorAll("audio");
      if (gpAudios.length > 0) return gpAudios[gpAudios.length - 1] as HTMLAudioElement;
    }
    return null;
  }, [audioRef]);

  // Load transcript on first open
  useEffect(() => {
    if (open && !transcript && !loading) {
      setLoading(true);
      loadTranscript(module, fileName).then((t) => {
        if (t) {
          setTranscript(t);
        } else {
          setError(true);
        }
        setLoading(false);
      });
    }
  }, [open, transcript, loading, module, fileName]);

  // Sync currentTime with audio element
  useEffect(() => {
    if (!open) return;
    const audio = getAudio();
    if (!audio) return;

    const handleTime = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTime);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause);

    // Init state
    setCurrentTime(audio.currentTime);
    setIsPlaying(!audio.paused);

    return () => {
      audio.removeEventListener("timeupdate", handleTime);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handlePause);
    };
  }, [getAudio, open]);

  // Auto-scroll to active segment
  useEffect(() => {
    if (activeRef.current && containerRef.current && isPlaying) {
      const container = containerRef.current;
      const el = activeRef.current;
      const elTop = el.offsetTop - container.offsetTop;
      const elBottom = elTop + el.offsetHeight;
      const scrollTop = container.scrollTop;
      const visibleBottom = scrollTop + container.clientHeight;

      if (elTop < scrollTop || elBottom > visibleBottom) {
        container.scrollTo({ top: elTop - 40, behavior: "smooth" });
      }
    }
  }, [currentTime, isPlaying]);

  // Find the active segment index
  const getActiveIndex = useCallback(
    (segments: TranscriptSegment[]) => {
      if (!getAudio()) return -1;
      for (let i = segments.length - 1; i >= 0; i--) {
        if (currentTime >= segments[i].start) return i;
      }
      return -1;
    },
    [currentTime, getAudio]
  );

  // Seek to a segment start
  const seekTo = (time: number) => {
    const audio = getAudio();
    if (audio) {
      audio.currentTime = time;
      if (audio.paused) audio.play();
    }
  };

  return (
    <div ref={selfRef} className="mt-1">
      <button
        onClick={() => setOpen((v) => !v)}
        className="text-[11px] text-blue-600 hover:text-blue-800 cursor-pointer flex items-center gap-1"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {open ? "Transkript ausblenden" : "Transkript anzeigen"}
      </button>

      {open && (
        <div
          ref={containerRef}
          className="mt-2 border border-gray-200 rounded-lg bg-gray-50 overflow-hidden"
        >
          {loading && <p className="text-xs text-gray-400 p-3">Laden...</p>}
          {error && <p className="text-xs text-red-500 p-3">Transkript nicht verfügbar.</p>}
          {transcript && transcript.segments.length > 0 ? (
            <>
              {/* Mode switcher */}
              <div className="flex items-center gap-1 px-3 pt-2 pb-1">
                <button
                  onClick={() => setViewMode("segment")}
                  className={`text-[10px] px-2 py-0.5 rounded-full cursor-pointer transition-colors ${
                    viewMode === "segment"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  Nur aktuell
                </button>
                <button
                  onClick={() => setViewMode("full")}
                  className={`text-[10px] px-2 py-0.5 rounded-full cursor-pointer transition-colors ${
                    viewMode === "full"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  Volltext
                </button>
              </div>

              {viewMode === "segment" ? (
                /* Single-segment view: shows only the active segment large and centered */
                <div className="px-4 py-3 min-h-[60px] flex items-center justify-center">
                  {(() => {
                    const idx = getActiveIndex(transcript.segments);
                    const seg = idx >= 0 ? transcript.segments[idx] : null;
                    if (!seg) {
                      return (
                        <p className="text-xs text-gray-400 italic text-center">
                          Audio abspielen, um das Transkript zu sehen...
                        </p>
                      );
                    }
                    return (
                      <div className="text-center">
                        <p className="text-sm text-gray-900 font-medium leading-relaxed">
                          {seg.text}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">
                          {formatTime(seg.start)} – {formatTime(seg.end)}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                /* Full-text view with highlight */
                <div className="px-3 py-2 max-h-60 overflow-y-auto text-xs leading-relaxed">
                  {transcript.segments.map((seg, i) => {
                    const isActive = getActiveIndex(transcript.segments) === i;
                    return (
                      <span
                        key={i}
                        ref={isActive ? activeRef : undefined}
                        onClick={() => seekTo(seg.start)}
                        className={`inline cursor-pointer transition-colors rounded px-0.5 ${
                          isActive
                            ? "bg-blue-200 text-blue-900 font-medium"
                            : "text-gray-700 hover:bg-blue-100"
                        }`}
                        title={`${formatTime(seg.start)} – ${formatTime(seg.end)}`}
                      >
                        {seg.text}
                      </span>
                    );
                  })}
                </div>
              )}
            </>
          ) : transcript ? (
            <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap p-3">
              {transcript.text}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
