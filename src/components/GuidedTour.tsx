import { useState, useEffect } from "react";
import { Joyride, STATUS, EVENTS } from "react-joyride";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

const steps = [
  {
    target: "body",
    placement: "center" as const,
    content: (
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Welcome to B1 Exam Prep! 🎓</h2>
        <p className="text-sm text-gray-600">
          Let us show you how to get the most out of this app.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="vocab-btn"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">📚 Vocabulary</h3>
        <p className="text-sm text-gray-600">
          Save new words, translate with AI, and generate example sentences.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="timer"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">⏱ Timer</h3>
        <p className="text-sm text-gray-600">
          Use the timer to simulate real exam conditions.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="auth-section"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">👤 Account</h3>
        <p className="text-sm text-gray-600">
          Sign in to save your progress and sync vocabulary to the cloud.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="module-1"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">📝 Model Tests</h3>
        <p className="text-sm text-gray-600">
          Click a model test to start practicing. The ring shows your progress.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center" as const,
    content: (
      <div className="text-center">
        <h3 className="font-bold mb-2">💡 Tip: Highlight Text</h3>
        <p className="text-sm text-gray-600">
          Right-click on text in exercises to highlight it, listen to it, or save it as vocabulary.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center" as const,
    content: (
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Ready? Let's go! 🚀</h2>
        <p className="text-sm text-gray-600">
          Good luck with your B1 exam preparation!
        </p>
      </div>
    ),
  },
];

export default function GuidedTour() {
  const [run, setRun] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user && !user.firstTour) {
      const timer = setTimeout(() => setRun(true), 800);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleEvent = (data: { type: string; status: string }) => {
    if (data.type === EVENTS.TOUR_END || data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
      setRun(false);
      if (user) {
        api.post("/users/me/tour-completed", {});
      }
    }
  };

  const startTour = () => {
    setRun(true);
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        continuous
        onEvent={handleEvent}
        locale={{
          back: "Back",
          close: "Close",
          last: "Done",
          next: "Next",
          skip: "Skip",
        }}
      />

      {/* Help button - bottom right */}
      <button
        onClick={startTour}
        className="fixed bottom-5 right-5 z-50 w-10 h-10 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
        title="Tour starten"
      >
        <span className="text-lg font-bold">?</span>
      </button>
    </>
  );
}
