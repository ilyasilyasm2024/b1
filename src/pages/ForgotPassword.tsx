import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { authService } from "../services/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    const res = await authService.forgotPassword(email);

    if (res.data) {
      setSuccess(res.data.message);
    } else {
      setError(res.error || "Something went wrong");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Passwort vergessen?</h1>
          <p className="text-gray-500 mt-2">
            Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          {success ? (
            <div className="text-center py-4">
              <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">E-Mail gesendet!</h2>
              <p className="text-sm text-gray-600 mb-1">{success}</p>
              <p className="text-xs text-gray-500 mb-6">
                Überprüfe dein Postfach (auch den Spam-Ordner).
              </p>
              <Link
                to="/login"
                className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Zurück zur Anmeldung
              </Link>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail-Adresse
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                    placeholder="dein@email.de"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? "Wird gesendet..." : "Link senden"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                <Link to="/login" className="font-medium text-gray-900 hover:underline">
                  ← Zurück zur Anmeldung
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
