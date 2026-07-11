import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "",
    description: "Try the platform — limited access",
    highlight: false,
    features: [
      { label: "Model Tests", value: "1 only" },
      { label: "Vocabulary", value: "50 words" },
      { label: "Schreiben/Sprechen Saves", value: "—" },
      { label: "AI Translation", value: "5/day" },
      { label: "Chat Messages", value: "20" },
      { label: "Progress Sync", value: false },
      { label: "Text Highlighting", value: false },
      { label: "Audio Recording", value: false },
      { label: "Ad-Free", value: false },
    ],
  },
  {
    name: "Silver",
    price: "30",
    period: "/mo",
    description: "For regular learners — full exam access",
    highlight: false,
    features: [
      { label: "Model Tests", value: "5" },
      { label: "Vocabulary", value: "500 words" },
      { label: "Schreiben/Sprechen Saves", value: "3 per task" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "500" },
      { label: "Progress Sync", value: true },
      { label: "Text Highlighting", value: true },
      { label: "Audio Recording", value: false },
      { label: "Ad-Free", value: true },
    ],
    yearlyPrice: "300",
    yearlySave: "Save 17%",
  },
  {
    name: "Gold",
    price: "50",
    period: "/mo",
    description: "For serious learners — AI-powered prep",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Model Tests", value: "All (15)" },
      { label: "Vocabulary", value: "2,500 words" },
      { label: "Schreiben/Sprechen Saves", value: "15 per task" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "1,000" },
      { label: "Progress Sync", value: true },
      { label: "Text Highlighting", value: true },
      { label: "Audio Recording", value: true },
      { label: "Ad-Free", value: true },
    ],
    yearlyPrice: "500",
    yearlySave: "Save 17%",
  },
  {
    name: "Platinum",
    price: "70",
    period: "/mo",
    description: "Everything unlimited — no limits",
    highlight: false,
    features: [
      { label: "Model Tests", value: "All (15)" },
      { label: "Vocabulary", value: "Unlimited" },
      { label: "Schreiben/Sprechen Saves", value: "Unlimited" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "Unlimited" },
      { label: "Progress Sync", value: true },
      { label: "Text Highlighting", value: true },
      { label: "Audio Recording", value: true },
      { label: "Ad-Free", value: true },
    ],
    yearlyPrice: "700",
    yearlySave: "Save 17%",
  },
  {
    name: "Lifetime",
    price: "300",
    period: " one-time",
    description: "Pay once, use forever — best deal",
    highlight: false,
    badge: "Best Value",
    features: [
      { label: "Model Tests", value: "All (15)" },
      { label: "Vocabulary", value: "Unlimited" },
      { label: "Schreiben/Sprechen Saves", value: "Unlimited" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "Unlimited" },
      { label: "Progress Sync", value: true },
      { label: "Text Highlighting", value: true },
      { label: "Audio Recording", value: true },
      { label: "Ad-Free", value: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="text-xs text-gray-400 hover:text-gray-600 hover:underline mb-4 inline-block">
            ← Back to App
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Start free with limited access. Upgrade to unlock all 15 model tests, unlimited AI tools, audio recording, and cloud sync.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-5 flex flex-col ${
                plan.highlight
                  ? "border-blue-500 bg-white shadow-lg ring-2 ring-blue-100"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {plan.badge && (
                <span className={`absolute -top-2.5 left-4 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  plan.highlight ? "bg-blue-600 text-white" : "bg-gray-900 text-white"
                }`}>
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-2 mb-1">
                <span className="text-2xl font-black text-gray-900">{plan.price}</span>
                <span className="text-xs text-gray-500"> MAD{plan.period}</span>
              </div>
              <p className="text-[11px] text-gray-500 mb-1">{plan.description}</p>
              {plan.yearlyPrice && (
                <p className="text-[10px] text-emerald-600 font-medium mb-3">
                  or {plan.yearlyPrice} MAD/year — {plan.yearlySave}
                </p>
              )}
              {!plan.yearlyPrice && <div className="mb-3" />}

              <div className="flex-1 space-y-2.5 mb-5">
                {plan.features.map((f) => (
                  <div key={f.label} className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-600">{f.label}</span>
                    {typeof f.value === "boolean" ? (
                      f.value ? (
                        <span className="text-emerald-500 text-xs">✓</span>
                      ) : (
                        <span className="text-red-400 text-xs">✕</span>
                      )
                    ) : (
                      <span className={`font-semibold text-gray-800 ${f.value === "Unlimited" || f.value === "∞" ? "text-sm" : "text-[11px]"}`}>{f.value === "Unlimited" ? "∞" : f.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-2.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : plan.name === "Free"
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.name === "Free" ? "Current Plan" : "Coming Soon"}
              </button>
            </div>
          ))}
        </div>

        {/* Why upgrade section */}
        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Why Upgrade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-2xl">📝</span>
              <h3 className="text-sm font-bold text-gray-800 mt-2">All 15 Model Tests</h3>
              <p className="text-xs text-gray-500 mt-1">Free only gives you 1 test. Unlock all 15 real B1 exam simulations.</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">🎙️</span>
              <h3 className="text-sm font-bold text-gray-800 mt-2">Record & Compare</h3>
              <p className="text-xs text-gray-500 mt-1">Record your Sprechen, save multiple versions, and track improvement.</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">🤖</span>
              <h3 className="text-sm font-bold text-gray-800 mt-2">Unlimited AI Tools</h3>
              <p className="text-xs text-gray-500 mt-1">Translate, generate examples, verify words — no daily limits.</p>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Full Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700">Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} className={`text-center py-3 px-2 font-semibold ${p.highlight ? "text-blue-600" : "text-gray-700"}`}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Price (MAD)", values: ["0", "30/mo", "50/mo", "70/mo", "300 once"] },
                  { label: "Model Tests", values: ["1", "5", "All 15", "All 15", "All 15"] },
                  { label: "Vocabulary", values: ["50", "500", "2,500", "∞", "∞"] },
                  { label: "Schreiben/Sprechen Saves", values: ["—", "3", "15", "∞", "∞"] },
                  { label: "AI Translation", values: ["5/day", "∞", "∞", "∞", "∞"] },
                  { label: "Chat Messages", values: ["20", "500", "1,000", "∞", "∞"] },
                  { label: "Progress Sync", values: [false, true, true, true, true] },
                  { label: "Text Highlighting", values: [false, true, true, true, true] },
                  { label: "Audio Recording", values: [false, false, true, true, true] },
                  { label: "Ad-Free", values: [false, true, true, true, true] },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100">
                    <td className="py-3 px-3 text-gray-700 font-medium">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="text-center py-3 px-2">
                        {typeof v === "boolean" ? (
                          v ? <span className="text-emerald-500">✓</span> : <span className="text-red-400">✕</span>
                        ) : (
                          <span className={`text-gray-800 ${v === "∞" ? "text-base font-bold" : ""}`}>{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          {/* <Link
            to="/pricing/full"
            className="inline-block mb-4 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Teacher & Center Plans →
          </Link> */}
          <p className="text-xs text-gray-400">
            All prices in MAD. Payment integration coming soon. Currently all features available in beta.
          </p>
        </div>
      </div>
    </div>
  );
}
