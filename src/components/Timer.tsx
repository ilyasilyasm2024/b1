import { useState, useEffect, useRef } from "react";

interface TimerProps {
  timeLimit?: number;
}

export default function Timer({ timeLimit: initialTimeLimit }: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [alarmPlayed, setAlarmPlayed] = useState(false);
  const [timeLimit, setTimeLimit] = useState(initialTimeLimit || 10);
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/alarm.mp3");
    audioRef.current.volume = 0.7;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (timeLimit && !alarmPlayed) {
      const timeLimitSec = timeLimit * 60;
      if (seconds >= timeLimitSec && isRunning) {
        setAlarmPlayed(true);
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
  }, [seconds, timeLimit, alarmPlayed, isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setAlarmPlayed(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const timeLimitSeconds = timeLimit * 60;
  const isOverTime = seconds > timeLimitSeconds;
  const progress = Math.min((seconds / timeLimitSeconds) * 100, 100);

  return (
    <div className="flex items-center gap-1.5">
      {/* Time selector */}
      <select
        value={timeLimit}
        onChange={(e) => {
          setTimeLimit(Number(e.target.value));
          setAlarmPlayed(false);
        }}
        disabled={isRunning}
        className="border border-gray-300 rounded px-1 py-0.5 text-[10px] text-gray-600 bg-white w-14"
      >
        <option value={10}>10m</option>
        <option value={15}>15m</option>
        <option value={20}>20m</option>
        <option value={25}>25m</option>
        <option value={30}>30m</option>
        <option value={45}>45m</option>
        <option value={60}>60m</option>
        <option value={65}>65m</option>
      </select>

      {/* Time display */}
      <span className={`font-mono text-sm font-bold ${isOverTime ? "text-red-600" : "text-gray-800"}`}>
        {formatTime(seconds)}
      </span>

      {/* Progress bar */}
      <div className="w-12 sm:w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            isOverTime ? "bg-red-500" : progress > 75 ? "bg-yellow-500" : "bg-emerald-500"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Play/Pause */}
      {!isRunning ? (
        <button
          onClick={handleStart}
          className="p-1 rounded hover:bg-gray-100 cursor-pointer text-emerald-600"
          title="Start"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={handlePause}
          className="p-1 rounded hover:bg-gray-100 cursor-pointer text-yellow-600"
          title="Pause"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>
      )}

      {/* Reset */}
      <button
        onClick={handleReset}
        className="p-1 rounded hover:bg-gray-100 cursor-pointer text-gray-500"
        title="Reset"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>

      {/* Over time */}
      {isOverTime && (
        <span className="text-[9px] text-red-600 font-medium animate-pulse hidden sm:inline">
          Über!
        </span>
      )}
    </div>
  );
}
