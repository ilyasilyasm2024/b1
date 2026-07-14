import { useState, useRef, useEffect, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { usePermissions } from "../context/Permissions";

const CHAT_WS_URL = import.meta.env.VITE_CHAT_WS_URL || "ws://localhost:4000";

interface ChatMessage {
  id: string;
  username: string;
  text: string;
  timestamp: number;
}

interface GlobalChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalChat({ isOpen, onClose }: GlobalChatProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);
  const [messagesSent, setMessagesSent] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const { canSendChat, limits } = usePermissions();

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;
    if (!user) return; // Must be logged in

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // Normalize URL scheme from http/https to ws/wss if misconfigured
      let wsUrl = CHAT_WS_URL;
      if (wsUrl.startsWith("http://")) {
        wsUrl = wsUrl.replace("http://", "ws://");
      } else if (wsUrl.startsWith("https://")) {
        wsUrl = wsUrl.replace("https://", "wss://");
      }
      const ws = new WebSocket(`${wsUrl}?token=${token}`);

      ws.onopen = () => {
        setConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "clientCount") {
            setOnlineCount(data.count);
          } else if (data.id) {
            setMessages((prev) => [...prev.slice(-100), data as ChatMessage]);
          }
        } catch {}
      };

      ws.onclose = () => {
        setConnected(false);
        // Reconnect after 3 seconds
        setTimeout(connect, 3000);
      };

      ws.onerror = () => {
        ws.close();
      };

      wsRef.current = ws;
    } catch {}
  }, [user]);

  useEffect(() => {
    if (user) connect();
    return () => {
      wsRef.current?.close();
    };
  }, [connect, user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !user || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

    if (!canSendChat(messagesSent)) {
      alert(`Chat limit reached (${limits.chatMessages} messages). Upgrade for more.`);
      return;
    }

    wsRef.current.send(JSON.stringify({
      text: input.trim(),
    }));

    setMessagesSent((prev) => prev + 1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-sm bg-white shadow-xl flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
              💬 Global Chat
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${
                connected ? "bg-gray-200 text-gray-700" : "bg-red-100 text-red-600"
              }`}>
                {connected ? "Online" : "Offline"}
              </span>
            </h2>
            <p className="text-[10px] text-gray-500">
              {onlineCount > 0 ? `${onlineCount} online` : "0 online"}{limits.chatMessages !== -1 ? ` · ${messagesSent}/${limits.chatMessages} sent` : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400 text-xs">Noch keine Nachrichten. Sei der Erste! 🎉</p>
            </div>
          )}
          {messages.map((msg) => {
            const isMe = msg.username === user?.username;

            return (
              <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[80%]">
                  <p className={`text-[10px] font-medium mb-0.5 ${isMe ? "text-right text-gray-900" : "text-gray-500"}`}>
                    @{msg.username}
                  </p>
                  <div className={`px-3 py-2 rounded-xl text-xs ${
                    isMe
                      ? "bg-gray-900 text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}>
                    {msg.text}
                  </div>
                  <p className={`text-[8px] text-gray-400 mt-0.5 ${isMe ? "text-right" : ""}`}>
                    {new Date(msg.timestamp).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Umlaut letters */}
        <div className="px-4 py-1.5 border-t border-gray-100 flex items-center gap-1 flex-wrap">
          {["ä", "ö", "ü", "ß", "Ä", "Ö", "Ü"].map((ch) => (
            <button
              key={ch}
              onClick={() => {
                navigator.clipboard.writeText(ch);
                setInput((prev) => prev + ch);
              }}
              className="w-7 h-7 text-xs font-bold border border-gray-200 rounded bg-white hover:bg-gray-100 cursor-pointer transition-colors"
              title={`${ch} kopieren & einfügen`}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 px-4 py-3">
          {user ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={200}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder={connected ? "Nachricht schreiben..." : "Verbindung wird hergestellt..."}
                disabled={!connected}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || !connected}
                className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-medium cursor-pointer hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ↑
              </button>
            </div>
          ) : (
            <p className="text-xs text-gray-400 text-center">
              Melde dich an, um im Chat zu schreiben.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
