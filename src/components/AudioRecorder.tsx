import { useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "./Toast";
import { uploadAudioToCloudinary, sprechenService, type SprechenRecording } from "../services/sprechen";

interface AudioRecorderProps {
  moduleId: string;
  teil: string;
}

export default function AudioRecorder({ moduleId, teil }: AudioRecorderProps) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [recordings, setRecordings] = useState<SprechenRecording[]>([]);
  const [showRecordings, setShowRecordings] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const MAX_DURATION = 300; // 5 minutes

  const startRecording = async () => {
    if (!user) {
      showToast("Please sign in to record.", "error");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setIsPaused(false);
      setElapsed(0);

      timerRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= MAX_DURATION - 1) {
            stopRecording();
            return MAX_DURATION;
          }
          return prev + 1;
        });
      }, 1000);
    } catch {
      showToast("Microphone access denied.", "error");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRecording(false);
    setIsPaused(false);

    // Upload after a short delay to collect all chunks
    setTimeout(() => handleUpload(), 200);
  };

  const handleUpload = async () => {
    if (chunksRef.current.length === 0) return;

    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    setUploading(true);

    const result = await uploadAudioToCloudinary(blob);
    if (!result) {
      showToast("Upload failed.", "error");
      setUploading(false);
      return;
    }

    const res = await sprechenService.save(moduleId, teil, result.url, result.publicId, result.duration || elapsed);
    if (res.data) {
      showToast("Recording saved ✓", "success");
      setRecordings((prev) => [res.data!, ...prev]);
    } else {
      showToast(res.error || "Failed to save recording.", "error");
    }
    setUploading(false);
  };

  const loadRecordings = async () => {
    if (!user) return;
    if (showRecordings) {
      setShowRecordings(false);
      return;
    }
    if (!loaded) {
      const res = await sprechenService.getRecordings(moduleId, teil);
      if (res.data) setRecordings(res.data);
      setLoaded(true);
    }
    setShowRecordings(true);
  };

  const deleteRecording = async (id: string) => {
    const res = await sprechenService.delete(id);
    if (res.data) {
      setRecordings((prev) => prev.filter((r) => r._id !== id));
      showToast("Recording deleted.", "success");
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-bold text-gray-600">🎙️ Aufnahme</h4>
        {user && (
          <button
            onClick={loadRecordings}
            className="text-[10px] text-blue-600 hover:underline cursor-pointer"
          >
            {showRecordings ? "Ausblenden" : `Meine Aufnahmen (${recordings.length})`}
          </button>
        )}
      </div>

      {/* Recorder controls */}
      <div className="flex items-center gap-3">
        {!isRecording ? (
          <button
            onClick={startRecording}
            disabled={uploading}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-medium cursor-pointer hover:bg-red-700 disabled:opacity-50"
          >
            <span className="w-2.5 h-2.5 bg-white rounded-full" />
            Aufnahme starten
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-medium cursor-pointer hover:bg-gray-700"
          >
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
            Stoppen
          </button>
        )}

        {isRecording && (
          <span className="text-xs text-red-600 font-mono animate-pulse">
            ● {formatTime(elapsed)} / {formatTime(MAX_DURATION)}
          </span>
        )}

        {uploading && (
          <span className="text-xs text-gray-500">Wird hochgeladen...</span>
        )}
      </div>

      {/* Recordings list */}
      {showRecordings && (
        <div className="mt-4 space-y-2">
          {recordings.length === 0 ? (
            <p className="text-xs text-gray-400">Noch keine Aufnahmen.</p>
          ) : (
            recordings.map((rec) => (
              <div key={rec._id} className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg bg-gray-50">
                <audio controls className="h-8 flex-1" src={rec.audioUrl} />
                <span className="text-[10px] text-gray-500 shrink-0">
                  {formatTime(rec.duration)} · {new Date(rec.createdAt).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })}
                </span>
                <button
                  onClick={() => deleteRecording(rec._id)}
                  className="text-[10px] text-red-500 hover:underline cursor-pointer shrink-0"
                >
                  Löschen
                </button>
              </div>
            ))
          )}
          {recordings.length >= 5 && (
            <p className="text-[10px] text-amber-600">Max. 5 Aufnahmen erreicht. Lösche eine, um eine neue zu speichern.</p>
          )}
        </div>
      )}
    </div>
  );
}
