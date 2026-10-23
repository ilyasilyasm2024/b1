import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { authService } from "../services/auth";
import { useTranslation } from "react-i18next";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const token = searchParams.get("token") || "";
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");
  // Fallback i18n key, translated at render time so switching language never re-runs the verification
  const [messageKey, setMessageKey] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessageKey("auth.verify.missingToken");
      return;
    }

    authService.verifyEmail(token).then((res) => {
      if (res.data) {
        setStatus("success");
        setMessage(res.data.message);
      } else {
        setStatus("error");
        if (res.error) setMessage(res.error);
        else setMessageKey("auth.verify.failedMessage");
      }
    });
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
          {status === "loading" && (
            <>
              <div className="mx-auto w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <div className="animate-spin rounded-full h-7 w-7 border-2 border-gray-900 border-t-transparent"></div>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t("auth.verify.verifying")}</h2>
              <p className="text-sm text-gray-500">{t("auth.verify.wait")}</p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t("auth.verify.success")}</h2>
              <p className="text-sm text-gray-600 mb-6">{message || (messageKey && t(messageKey))}</p>
              <Link
                to="/login"
                className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {t("common.toLogin")}
              </Link>
            </>
          )}

          {status === "error" && (
            <>
              <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{t("auth.verify.failed")}</h2>
              <p className="text-sm text-red-600 mb-6">{message || (messageKey && t(messageKey))}</p>
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {t("common.toLogin")}
                </Link>
                <p className="text-xs text-gray-400">
                  {t("auth.verify.requestNewHint")}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
