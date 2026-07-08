import { useEffect, useState } from "react";
import { module1Schreiben } from "../data/module1/schreiben";
import { useProgress } from "../context/ProgressContext";
import { useAnswers } from "../context/AnswersContext";
import { useAuth } from "../context/AuthContext";
import { useToast } from "./Toast";
import { schreibenService, type SchreibenVersion } from "../services/schreiben";

const SECTION_ID = "m1-schreiben";

export default function Schreiben() {
  const data = module1Schreiben;
  const { updateProgress } = useProgress();
  const { getTexts, setTexts: setGlobalTexts, getDone, setDone: setGlobalDone } = useAnswers();
  const { user } = useAuth();
  const { showToast } = useToast();
  const [saving, setSaving] = useState<number | null>(null);
  const [versions, setVersions] = useState<Record<number, SchreibenVersion[]>>({});
  const [showVersions, setShowVersions] = useState<number | null>(null);

  const texts = getTexts(SECTION_ID) ?? Array(data.aufgaben.length).fill("");
  const done = getDone(SECTION_ID) ?? Array(data.aufgaben.length).fill(false);

  useEffect(() => {
    const answered = done.filter(Boolean).length;
    updateProgress(SECTION_ID, answered, data.aufgaben.length);
  }, [done, data.aufgaben.length, updateProgress]);

  const handleChange = (index: number, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setGlobalTexts(SECTION_ID, newTexts);
  };

  const handleSaveVersion = async (aufgabeIndex: number) => {
    if (!user) {
      showToast("Please sign in to save versions.", "error");
      return;
    }
    const text = texts[aufgabeIndex];
    if (!text.trim()) return;

    const wc = wordCount(text);
    if (wc < 80) {
      showToast("Mindestens 80 Wörter erforderlich.", "error");
      return;
    }
    if (wc > 200) {
      showToast("Maximal 200 Wörter erlaubt.", "error");
      return;
    }

    setSaving(aufgabeIndex);
    const res = await schreibenService.saveVersion("m1", aufgabeIndex + 1, text);
    if (res.data) {
      showToast("Version gespeichert ✓", "success");
      // Add to local versions
      setVersions((prev) => ({
        ...prev,
        [aufgabeIndex]: [res.data!, ...(prev[aufgabeIndex] || [])],
      }));
    } else {
      showToast(res.error || "Fehler beim Speichern", "error");
    }
    setSaving(null);
  };

  const loadVersions = async (aufgabeIndex: number) => {
    if (!user) return;
    if (showVersions === aufgabeIndex) {
      setShowVersions(null);
      return;
    }
    const res = await schreibenService.getVersions("m1", aufgabeIndex + 1);
    if (res.data) {
      setVersions((prev) => ({ ...prev, [aufgabeIndex]: res.data! }));
    }
    setShowVersions(aufgabeIndex);
  };

  const deleteVersion = async (aufgabeIndex: number, versionId: string) => {
    const res = await schreibenService.deleteVersion(versionId);
    if (res.data) {
      setVersions((prev) => ({
        ...prev,
        [aufgabeIndex]: (prev[aufgabeIndex] || []).filter((v) => v._id !== versionId),
      }));
      showToast("Version gelöscht", "success");
    }
  };

  const loadVersion = (aufgabeIndex: number, text: string) => {
    handleChange(aufgabeIndex, text);
    showToast("Version geladen", "info");
  };

  const toggleDone = (index: number) => {
    if (!done[index] && wordCount(texts[index]) < data.aufgaben[index].wordCount) {
      return;
    }
    const newDone = [...done];
    newDone[index] = !newDone[index];
    setGlobalDone(SECTION_ID, newDone);
  };

  const wordCount = (text: string) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-8">
        {data.aufgaben.map((aufgabe, index) => (
          <div
            key={aufgabe.id}
            className={`border rounded-lg p-6 bg-white transition-colors ${
              done[index] ? "border-emerald-300 bg-emerald-50/30" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">{aufgabe.title}</h3>
                {done[index] && (
                  <span className="text-emerald-600 text-sm font-medium">✓ Erledigt</span>
                )}
              </div>
              <span className="text-sm text-gray-500">
                Arbeitszeit: {aufgabe.time}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{aufgabe.instruction}</p>

            {aufgabe.points.length > 0 && (
              <ul className="list-disc ml-6 mb-4 space-y-1">
                {aufgabe.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-700">{point}</li>
                ))}
              </ul>
            )}

            {aufgabe.hints && (
              <div className="bg-gray-50 rounded p-3 mb-4">
                {aufgabe.hints.map((hint, i) => (
                  <p key={i} className="text-xs text-gray-600 italic">{hint}</p>
                ))}
              </div>
            )}

            <textarea
              value={texts[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1000}
              className="w-full border border-gray-300 rounded-lg p-4 min-h-[150px] text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder={`Schreiben Sie hier Ihren Text (circa ${aufgabe.wordCount} Wörter)...`}
            />

            <div className="flex items-center justify-between mt-3">
              <span
                className={`text-xs ${
                  wordCount(texts[index]) >= aufgabe.wordCount ? "text-green-600" : "text-gray-500"
                }`}
              >
                Wörter: {wordCount(texts[index])} / {aufgabe.wordCount}
              </span>

              <div className="flex items-center gap-2">
                {/* Save version button */}
                <button
                  onClick={() => handleSaveVersion(index)}
                  disabled={saving === index || !texts[index].trim() || !user || wordCount(texts[index]) < 80 || wordCount(texts[index]) > 200}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-blue-600 text-white hover:bg-blue-700"
                >
                  {saving === index ? "..." : "💾 Save version"}
                </button>

                {/* View versions button */}
                {user && (
                  <button
                    onClick={() => loadVersions(index)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors border ${
                      showVersions === index
                        ? "bg-gray-100 border-gray-300 text-gray-700"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    📋 Versions
                  </button>
                )}

                {/* Mark as done */}
                <button
                  onClick={() => toggleDone(index)}
                  disabled={!done[index] && wordCount(texts[index]) < aufgabe.wordCount}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                    done[index]
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {done[index] ? "✓ Erledigt" : "Als erledigt markieren"}
                </button>
              </div>
            </div>

            {/* Versions panel */}
            {showVersions === index && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <h4 className="text-xs font-bold text-gray-600 mb-3">
                  Gespeicherte Versionen ({versions[index]?.length || 0})
                </h4>
                {(!versions[index] || versions[index].length === 0) ? (
                  <p className="text-xs text-gray-400">Noch keine Versionen gespeichert.</p>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {versions[index].map((v) => (
                      <div key={v._id} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-gray-500">
                            {new Date(v.createdAt).toLocaleDateString("de-DE", {
                              day: "2-digit", month: "2-digit", year: "numeric",
                              hour: "2-digit", minute: "2-digit",
                            })} · {v.wordCount} Wörter
                          </span>
                          <div className="flex gap-1">
                            <button
                              onClick={() => loadVersion(index, v.text)}
                              className="text-[10px] text-blue-600 hover:underline cursor-pointer"
                            >
                              Laden
                            </button>
                            <button
                              onClick={() => deleteVersion(index, v._id)}
                              className="text-[10px] text-red-500 hover:underline cursor-pointer"
                            >
                              Löschen
                            </button>
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-700 line-clamp-3">{v.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
