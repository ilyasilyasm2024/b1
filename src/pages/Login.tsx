import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { authService } from "../services/auth";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const { t } = useTranslation();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [needsVerification, setNeedsVerification] = useState(false);
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setNeedsVerification(false);
    setIsLoading(true);

    const res = await authService.login({ identifier, password });

    if (res.data) {
      login(res.data.token, res.data.user);
      const redirect = searchParams.get("redirect") || "/";
      navigate(redirect);
    } else {
      setError(res.error || t("auth.login.failed"));
      // Show resend option if it's a verification issue
      // Older backends send no code: fall back to the English message
      setNeedsVerification(res.code === "EMAIL_NOT_VERIFIED" || (!res.code && /verify/i.test(res.error || "")));
    }

    setIsLoading(false);
  };

  const handleResendVerification = async () => {
    if (!identifier) {
      setError(t("auth.login.resendNeedsIdentifier"));
      return;
    }
    setIsResending(true);
    setInfo("");

    const res = await authService.resendVerification(identifier);

    if (res.data) {
      setInfo(res.data.message);
      setError("");
      setNeedsVerification(false);
    } else {
      setError(res.error || t("auth.login.resendFailed"));
    }

    setIsResending(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t("auth.login.title")}</h1>
          <p className="text-gray-500 mt-2">
            {t("auth.login.subtitle")}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              <p>{error}</p>
              {needsVerification && (
                <>
                  <p className="mt-2 text-[10px] text-red-600">
                    {t("auth.login.spamTip")}
                  </p>
                  <button
                    type="button"
                    onClick={handleResendVerification}
                    disabled={isResending}
                    className="mt-1 text-xs font-medium text-red-800 underline hover:text-red-900 cursor-pointer disabled:opacity-50"
                  >
                    {isResending ? t("common.sending") : t("auth.login.resend")}
                  </button>
                </>
              )}
            </div>
          )}

          {info && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm flex items-start gap-2">
              <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p>{info}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
                {t("auth.login.identifier")}
              </label>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                minLength={3}
                maxLength={128}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                placeholder={t("auth.login.identifierPlaceholder")}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {t("common.password")}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  maxLength={128}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  aria-label={showPassword ? t("common.hidePassword") : t("common.showPassword")}
                >
                  {showPassword ? (
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? t("auth.login.submitting") : t("common.signIn")}
            </button>
          </form>

          <div className="mt-4 text-right">
            <Link to="/forgot-password" className="text-xs text-gray-500 hover:text-gray-700 hover:underline">
              {t("auth.login.forgotPassword")}
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            {t("auth.login.noAccount")}{" "}
            <Link to="/signup" className="font-medium text-gray-900 hover:underline">
              {t("common.signUp")}
            </Link>
          </div>

          <div className="mt-3 text-center">
            <Link to="/" className="text-xs text-gray-400 hover:text-gray-600 hover:underline">
              {t("common.continueWithoutAccount")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
