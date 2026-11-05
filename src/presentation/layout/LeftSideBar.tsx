import NotesPanel from "../components/notes/NotesPanel";
import GlobalChat from "../components/chat/GlobalChat";

interface LeftSideBarProps {
  notesOpen: boolean;
  onCloseNotes: () => void;
  // Phones open color notes on their own board instead of floating over the page
  onOpenColorNote?: (focusId?: string) => void;
  chatOpen: boolean;
  onCloseChat: () => void;
}

// Panels that slide in from the left: notes (non-blocking) and the global chat.
export default function LeftSideBar({ notesOpen, onCloseNotes, onOpenColorNote, chatOpen, onCloseChat }: LeftSideBarProps) {
  return (
    <>
      <NotesPanel isOpen={notesOpen} onClose={onCloseNotes} onOpenColorNote={onOpenColorNote} />
      <GlobalChat isOpen={chatOpen} onClose={onCloseChat} />
    </>
  );
}
