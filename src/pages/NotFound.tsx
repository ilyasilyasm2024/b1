import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-900">404</p>
        <h1 className="mt-4 text-xl font-semibold text-gray-800">
          Seite nicht gefunden
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
