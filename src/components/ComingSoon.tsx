interface ComingSoonProps {
  onOpenChat: () => void;
}

export default function ComingSoon({ onOpenChat }: ComingSoonProps) {
  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={onOpenChat}
        className="w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all"
        title="Global Chat"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
}
