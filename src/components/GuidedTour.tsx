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
        <h2 className="text-lg font-bold mb-2">Willkommen bei B1 Prüfungsvorbereitung! 🎓</h2>
        <p className="text-sm text-gray-600">
          Wir zeigen dir kurz, wie du die App nutzen kannst.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="vocab-btn"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">📚 Vokabeln</h3>
        <p className="text-sm text-gray-600">
          Hier kannst du neue Wörter speichern, mit KI übersetzen und Beispielsätze generieren.
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
          Nutze den Timer, um die Arbeitszeit wie in der echten Prüfung zu simulieren.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="auth-section"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">👤 Konto</h3>
        <p className="text-sm text-gray-600">
          Melde dich an, um deinen Fortschritt zu speichern und Vokabeln in der Cloud zu sichern.
        </p>
      </div>
    ),
  },
  {
    target: '[data-tour="module-1"]',
    content: (
      <div>
        <h3 className="font-bold mb-1">📝 Modelltests</h3>
        <p className="text-sm text-gray-600">
          Klicke auf einen Modelltest, um mit dem Üben zu beginnen. Der Ring zeigt deinen Fortschritt.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center" as const,
    content: (
      <div className="text-center">
        <h3 className="font-bold mb-2">💡 Tipp: Text markieren</h3>
        <p className="text-sm text-gray-600">
          Markiere Text in den Übungen mit der rechten Maustaste, um ihn farbig hervorzuheben, vorlesen zu lassen oder als Vokabel zu speichern.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center" as const,
    content: (
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Bereit? Los geht's! 🚀</h2>
        <p className="text-sm text-gray-600">
          Viel Erfolg bei deiner B1-Prüfungsvorbereitung!
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
          back: "Zurück",
          close: "Schließen",
          last: "Fertig",
          next: "Weiter",
          skip: "Überspringen",
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
