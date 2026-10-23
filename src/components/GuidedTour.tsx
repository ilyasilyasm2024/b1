import { useState, useEffect } from "react";
import { Joyride, STATUS, EVENTS } from "react-joyride";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

// Tour steps are built per render so they follow the current UI language.
const buildSteps = (t: TFunction) => {
  const step = (key: string, heading: "h2" | "h3" = "h3") => {
    const Heading = heading;
    return (
      <div className={heading === "h2" ? "text-center" : undefined}>
        <Heading className={heading === "h2" ? "text-lg font-bold mb-2" : "font-bold mb-1"}>{t(`tour.${key}.title`)}</Heading>
        <p className="text-sm text-gray-600">{t(`tour.${key}.text`)}</p>
      </div>
    );
  };
  return [
    { target: "body", placement: "center" as const, content: step("welcome", "h2") },
    { target: '[data-tour="vocab-btn"]', content: step("vocabulary") },
    { target: '[data-tour="timer"]', content: step("timer") },
    { target: '[data-tour="auth-section"]', content: step("account") },
    { target: '[data-tour="module-1"]', content: step("modelTests") },
    {
      target: "body",
      placement: "center" as const,
      content: (
        <div className="text-center">
          <h3 className="font-bold mb-2">{t("tour.highlight.title")}</h3>
          <p className="text-sm text-gray-600">{t("tour.highlight.text")}</p>
        </div>
      ),
    },
    { target: "body", placement: "center" as const, content: step("ready", "h2") },
  ];
};

export default function GuidedTour() {
  const [run, setRun] = useState(false);
  const { user } = useAuth();
  const { t } = useTranslation();

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
        steps={buildSteps(t)}
        run={run}
        continuous
        onEvent={handleEvent}
        locale={{
          back: t("tour.back"),
          close: t("tour.close"),
          last: t("tour.done"),
          next: t("tour.next"),
          skip: t("tour.skip"),
        }}
      />

      {/* Help button - bottom right */}
      <button
        onClick={startTour}
        className="fixed bottom-24 sm:bottom-5 right-5 z-50 w-10 h-10 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
        title={t("tour.start")}
      >
        <span className="text-lg font-bold">?</span>
      </button>
    </>
  );
}
