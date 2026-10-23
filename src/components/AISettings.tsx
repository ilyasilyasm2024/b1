import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { listGeminiModels, probeGeminiModel, saveAIConfig, testGemini, type GeminiModel, type ProbeResult } from "../services/ai";
import useAIConfig from "../hooks/useAIConfig";

// Preferred default when the user hasn't picked a model yet: Google's current Flash-Lite model.
// Free tier and answers in ~1-2 s (suggestions need speed); "flash-latest" was much slower in tests.
const PREFERRED_MODELS = ["gemini-flash-lite-latest", "gemini-flash-latest"];

// Highest version first, e.g. gemini-3.8-flash before gemini-3.5-flash
const byVersionDesc = (a: GeminiModel, b: GeminiModel) =>
  b.id.localeCompare(a.id, undefined, { numeric: true });

// How many models are checked at the same time (each model has its own free quota)
const PROBE_CONCURRENCY = 3;

type Probe = ProbeResult | { checking: true };
const isWorking = (p?: Probe): p is { ok: true; ms: number } => !!p && "ok" in p && p.ok;
const isFailed = (p?: Probe) => !!p && "ok" in p && !p.ok;

type TestState = { status: "idle" } | { status: "running" } | { status: "ok"; answer: string; ms: number } | { status: "error"; message: string };

/**
 * "Bring your own key": the user pastes a Google Gemini API key, loads the models it can use,
 * tests one and saves. Key and model stay in this browser only (see services/ai.ts).
 */
export default function AISettings({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  const config = useAIConfig();
  const [apiKey, setApiKey] = useState(config?.apiKey ?? "");
  const [showKey, setShowKey] = useState(false);
  const [models, setModels] = useState<GeminiModel[]>([]);
  const [model, setModel] = useState(config?.model ?? "");
  const [loadingModels, setLoadingModels] = useState(false);
  const [modelsError, setModelsError] = useState("");
  const [test, setTest] = useState<TestState>({ status: "idle" });
  // Pro models have no free tier: hidden unless the user asks for them
  const [showPaid, setShowPaid] = useState(false);
  // Result of a tiny real request per model, so only models that answer can be picked
  const [probes, setProbes] = useState<Record<string, Probe>>({});
  // Bumped when the key or list changes so an older check run stops updating
  const probeRun = useRef(0);

  // Close with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const key = apiKey.trim();

  // Check every model one by one (a few at a time), preferred and newest first. When the
  // selected model turns out not to work, switch to the best working free one.
  const probeAll = async (list: GeminiModel[]) => {
    const run = ++probeRun.current;
    const order = [
      ...PREFERRED_MODELS.flatMap((id) => list.filter((m) => m.id === id)),
      ...list.filter((m) => !PREFERRED_MODELS.includes(m.id) && !m.paid).sort(byVersionDesc),
      ...list.filter((m) => m.paid),
    ];
    setProbes(Object.fromEntries(order.map((m) => [m.id, { checking: true }])));
    const results: Record<string, ProbeResult> = {};
    let next = 0;
    const worker = async () => {
      while (next < order.length && run === probeRun.current) {
        const m = order[next++];
        const result = await probeGeminiModel(key, m.id);
        if (run !== probeRun.current) return;
        results[m.id] = result;
        setProbes((prev) => ({ ...prev, [m.id]: result }));
      }
    };
    await Promise.all(Array.from({ length: PROBE_CONCURRENCY }, worker));
    if (run !== probeRun.current) return;
    setModel((current) => {
      if (results[current]?.ok) return current;
      const preferred = PREFERRED_MODELS.find((id) => results[id]?.ok);
      const fastest = list
        .filter((m) => !m.paid && results[m.id]?.ok)
        .sort((a, b) => (results[a.id] as { ms: number }).ms - (results[b.id] as { ms: number }).ms)[0];
      return preferred ?? fastest?.id ?? current;
    });
  };

  const loadModels = async () => {
    setLoadingModels(true);
    setModelsError("");
    setTest({ status: "idle" });
    probeRun.current++;
    setProbes({});
    try {
      const list = await listGeminiModels(key);
      setModels(list);
      const free = list.filter((m) => !m.paid);
      if (!free.some((m) => m.id === model) && !(showPaid && list.some((m) => m.id === model))) {
        const preferred = PREFERRED_MODELS.find((id) => free.some((m) => m.id === id));
        const newestFlash = free.filter((m) => /flash/.test(m.id)).sort(byVersionDesc)[0];
        setModel(preferred ?? newestFlash?.id ?? free[0]?.id ?? "");
      }
      if (list.length === 0) setModelsError(t("aiSettings.noModels"));
      setLoadingModels(false);
      if (list.length > 0) await probeAll(list);
    } catch (e) {
      setModels([]);
      setModelsError(t("aiSettings.keyRejected", { message: (e as Error).message }));
      setLoadingModels(false);
    }
  };

  const runTest = async () => {
    setTest({ status: "running" });
    try {
      const { answer, ms } = await testGemini({ apiKey: key, model });
      setTest({ status: "ok", answer, ms });
    } catch (e) {
      setTest({ status: "error", message: (e as Error).message });
    }
  };

  const save = () => {
    saveAIConfig({ apiKey: key, model });
    onClose();
  };

  const remove = () => {
    probeRun.current++;
    setProbes({});
    saveAIConfig(null);
    setApiKey("");
    setModels([]);
    setModel("");
    setTest({ status: "idle" });
  };

  // The saved model is shown even before the list is (re)loaded
  const visible = models.filter((m) => showPaid || !m.paid || m.id === model);
  const modelOptions = models.length > 0 ? visible : model ? [{ id: model, displayName: model, description: "", paid: false }] : [];
  const paidCount = models.filter((m) => m.paid).length;
  // Working models first (fastest on top), then the ones still being checked, then the failed ones
  const rank = (m: GeminiModel) => {
    const p = probes[m.id];
    return isWorking(p) ? p.ms : p && "checking" in p ? 1e6 : isFailed(p) ? 2e6 : 1.5e6;
  };
  const sortedOptions = [...modelOptions].sort((a, b) => rank(a) - rank(b));
  const probed = Object.values(probes).filter((p) => !("checking" in p)).length;
  const working = Object.values(probes).filter(isWorking).length;
  const checking = Object.values(probes).some((p) => "checking" in p);
  const selectedFailed = isFailed(probes[model]);

  const badge = (p?: Probe) => {
    if (!p) return null;
    if ("checking" in p)
      return (
        <span className="inline-flex items-center gap-1 text-gray-400">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-gray-300 border-t-gray-500 animate-spin" aria-hidden="true" />
          {t("aiSettings.checking")}
        </span>
      );
    if (p.ok) return <span className="text-emerald-700 font-medium">✓ {t("aiSettings.works", { s: (p.ms / 1000).toFixed(1) })}</span>;
    const label = { quota: `💰 ${t("aiSettings.noQuota")}`, retired: `⛔ ${t("aiSettings.retired")}`, slow: `⌛ ${t("aiSettings.tooSlow")}`, error: `⚠️ ${t("aiSettings.failed")}` }[p.kind];
    return <span className={p.kind === "quota" || p.kind === "slow" ? "text-amber-700" : "text-red-600"} title={p.message}>{label}</span>;
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="ai-settings-title">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto p-5">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h2 id="ai-settings-title" className="text-lg font-bold text-gray-900">✨ {t("aiSettings.title")}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer" aria-label={t("common.close")}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-4">{t("aiSettings.intro")}</p>

        {config && (
          <p className="mb-4 text-xs rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2">
            ✓ {t("aiSettings.active", { model: config.model })}
          </p>
        )}

        {/* Step 1: key */}
        <label htmlFor="ai-key" className="block text-sm font-medium text-gray-700 mb-1">1. {t("aiSettings.keyLabel")}</label>
        <p className="text-[11px] text-gray-500 mb-1.5">
          {t("aiSettings.keyHelp")}{" "}
          <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Google AI Studio →
          </a>
        </p>
        <div className="flex gap-2 mb-1">
          <div className="relative flex-1">
            <input
              id="ai-key"
              type={showKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setModels([]);
                setTest({ status: "idle" });
              }}
              autoComplete="off"
              spellCheck={false}
              placeholder="AIza…"
              className="w-full px-3 py-2 pr-9 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="button"
              onClick={() => setShowKey((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer text-xs"
              aria-label={showKey ? t("common.hidePassword") : t("common.showPassword")}
            >
              {showKey ? "🙈" : "👁"}
            </button>
          </div>
          <button
            onClick={loadModels}
            disabled={!key || loadingModels}
            className="shrink-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-medium cursor-pointer hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loadingModels ? t("common.loading") : t("aiSettings.loadModels")}
          </button>
        </div>
        <p className="text-[10px] text-gray-400 mb-4">🔒 {t("aiSettings.privacy")}</p>
        {modelsError && <p className="mb-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{modelsError}</p>}

        {/* Step 2: model */}
        <label htmlFor="ai-model" className="block text-sm font-medium text-gray-700 mb-1">2. {t("aiSettings.modelLabel")}</label>
        {sortedOptions.length === 0 ? (
          <p className="mb-1 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-400">{t("aiSettings.loadFirst")}</p>
        ) : (
          <>
            {Object.keys(probes).length > 0 && (
              <p className="text-[11px] text-gray-500 mb-1.5" aria-live="polite">
                {checking ? t("aiSettings.checkProgress", { done: probed, total: Object.keys(probes).length }) : t("aiSettings.checkDone", { count: working })}
              </p>
            )}
            <div id="ai-model" role="radiogroup" className="mb-1 max-h-60 overflow-y-auto border border-gray-200 rounded-lg divide-y divide-gray-100">
              {sortedOptions.map((m) => {
                const p = probes[m.id];
                const failed = isFailed(p);
                const selected = m.id === model;
                return (
                  <button
                    key={m.id}
                    role="radio"
                    aria-checked={selected}
                    disabled={failed}
                    onClick={() => {
                      setModel(m.id);
                      setTest({ status: "idle" });
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-left cursor-pointer transition-colors disabled:cursor-not-allowed ${
                      selected ? "bg-gray-900/5" : failed ? "bg-gray-50 opacity-60" : "hover:bg-gray-50"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 shrink-0 rounded-full border-2 ${selected ? "border-gray-900 bg-gray-900 shadow-[inset_0_0_0_2px_white]" : "border-gray-300"}`} aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm truncate ${failed ? "text-gray-500" : "text-gray-900"}`}>
                        {m.displayName}
                        {m.paid && <span className="ml-1.5 text-[10px] rounded bg-amber-100 text-amber-800 px-1 py-px">{t("aiSettings.paid")}</span>}
                      </span>
                      <span className="block text-[10px] text-gray-400 font-mono truncate">{m.id}</span>
                    </span>
                    <span className="shrink-0 text-[11px]">{badge(p)}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}
        <div className="flex items-center justify-between gap-2 mb-4">
          <p className="text-[10px] text-gray-400">{t("aiSettings.modelHint")}</p>
          {paidCount > 0 && (
            <label className="shrink-0 inline-flex items-center gap-1 text-[10px] text-gray-500 cursor-pointer">
              <input type="checkbox" checked={showPaid} onChange={(e) => setShowPaid(e.target.checked)} className="accent-gray-900" />
              {t("aiSettings.showPaid", { count: paidCount })}
            </label>
          )}
        </div>

        {/* Step 3: test */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-700">3.</span>
          <button
            onClick={runTest}
            disabled={!key || !model || test.status === "running"}
            className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {test.status === "running" ? t("aiSettings.testing") : t("aiSettings.test")}
          </button>
        </div>
        {test.status === "ok" && (
          <p className="mb-4 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            ✓ {t("aiSettings.testOk", { ms: test.ms })} — „Haus“ → <strong>{test.answer || "…"}</strong>
          </p>
        )}
        {test.status === "error" && (
          <p className="mb-4 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2 break-words">
            ✕ {t("aiSettings.testFailed")}: {test.message}
          </p>
        )}

        <div className="flex items-center justify-between gap-2 mt-5 pt-4 border-t border-gray-100">
          {config ? (
            <button onClick={remove} className="text-xs text-red-600 hover:text-red-700 cursor-pointer">
              {t("aiSettings.remove")}
            </button>
          ) : (
            <span />
          )}
          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
              {t("common.cancel")}
            </button>
            <button
              onClick={save}
              disabled={!key || !model || selectedFailed}
              className="px-4 py-2 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {t("common.save")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
