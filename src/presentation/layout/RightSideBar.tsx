import VocabularyPanel from "../components/vocabulary/Vocabulary";

interface RightSideBarProps {
  vocabOpen: boolean;
  onCloseVocab: () => void;
}

// Panels that slide in from the right: the vocabulary list.
export default function RightSideBar({ vocabOpen, onCloseVocab }: RightSideBarProps) {
  return <VocabularyPanel isOpen={vocabOpen} onClose={onCloseVocab} />;
}
