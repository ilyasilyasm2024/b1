import Home from "./presentation/pages/Home";
import { NotesProvider } from "./presentation/hooks/useNotes";
import { ThemeProvider } from "./presentation/hooks/useTheme";
import { VocabularyProvider } from "./presentation/hooks/useVocabulary";
import { ToastProvider } from "./presentation/components/common/Toast";
import { ProgressProvider } from "./presentation/hooks/useProgress";
import { AnswersProvider } from "./presentation/hooks/useAnswers";
import { PermissionsProvider } from "./presentation/hooks/usePermissions";
import { AIUsageProvider } from "./presentation/hooks/useAIUsage";

function App() {
  return (
    <ThemeProvider>
    <ToastProvider>
      <PermissionsProvider>
        <AIUsageProvider>
          <VocabularyProvider>
          <NotesProvider>
          <AnswersProvider>
            <ProgressProvider>
              <Home />
            </ProgressProvider>
          </AnswersProvider>
        </NotesProvider>
        </VocabularyProvider>
        </AIUsageProvider>
      </PermissionsProvider>
    </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
