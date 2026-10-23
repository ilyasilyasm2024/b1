import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createCheckout, type PaidPlan, type Billing } from "../services/billing";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

// Built per render so plan texts follow the UI language. Values stay numbers/flags; labels come from i18n.
const buildPlans = (t: TFunction) => {
  const unlimited = t("pricing.unlimited");
  const all = t("pricing.allTests", { count: 15 });
  const feature = (key: string, value: string | boolean) => ({ label: t(`pricing.features.${key}`), value });
  return [
    {
      name: "Free",
      key: undefined as PaidPlan | undefined,
      priceEur: "0",
      yearlyEur: undefined as string | undefined,
      period: "",
      description: t("pricing.plans.free"),
      highlight: false,
      badge: undefined as string | undefined,
      features: [
        feature("modelTests", t("pricing.onlyOne")),
        feature("vocabulary", t("pricing.words", { count: 50 })),
        feature("aiTranslation", t("pricing.perDay", { count: 5 })),
        feature("chatMessages", "20"),
        feature("progressSync", false),
        feature("audioRecording", false),
        feature("adFree", false),
      ],
    },
    {
      name: "Silver",
      key: "silver" as PaidPlan,
      priceEur: "2.99",
      yearlyEur: "29.90",
      period: t("pricing.perMonth"),
      description: t("pricing.plans.silver"),
      highlight: false,
      badge: undefined,
      features: [
        feature("modelTests", "5"),
        feature("vocabulary", t("pricing.words", { count: 500 })),
        feature("aiTranslation", unlimited),
        feature("chatMessages", "500"),
        feature("progressSync", true),
        feature("adFree", true),
      ],
    },
    {
      name: "Gold",
      key: "gold" as PaidPlan,
      priceEur: "4.99",
      yearlyEur: "49.90",
      period: t("pricing.perMonth"),
      description: t("pricing.plans.gold"),
      highlight: true,
      badge: t("pricing.mostPopular"),
      features: [
        feature("modelTests", all),
        feature("vocabulary", t("pricing.words", { count: 2500 })),
        feature("aiTranslation", unlimited),
        feature("chatMessages", "1,000"),
        feature("progressSync", true),
        feature("audioRecording", true),
        feature("adFree", true),
      ],
    },
    {
      name: "Platinum",
      key: "platinum" as PaidPlan,
      priceEur: "6.99",
      yearlyEur: "69.90",
      period: t("pricing.perMonth"),
      description: t("pricing.plans.platinum"),
      highlight: false,
      badge: undefined,
      features: [
        feature("modelTests", all),
        feature("vocabulary", unlimited),
        feature("aiTranslation", unlimited),
        feature("chatMessages", unlimited),
        feature("progressSync", true),
        feature("audioRecording", true),
        feature("adFree", true),
      ],
    },
    {
      name: "Lifetime",
      key: "lifetime" as PaidPlan,
      priceEur: "29.90",
      yearlyEur: undefined,
      period: ` ${t("pricing.once")}`,
      description: t("pricing.plans.lifetime"),
      highlight: false,
      badge: t("pricing.bestValue"),
      features: [
        feature("modelTests", all),
        feature("vocabulary", unlimited),
        feature("aiTranslation", unlimited),
        feature("chatMessages", unlimited),
        feature("progressSync", true),
        feature("audioRecording", true),
        feature("adFree", true),
      ],
    },
  ];
};

export default function Pricing() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const plans = buildPlans(t);
  const [billing, setBilling] = useState<Billing>("monthly");
  const [loadingPlan, setLoadingPlan] = useState<PaidPlan | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [checkoutSuccess] = useState(
    () => new URLSearchParams(window.location.search).get("checkout") === "success"
  );

  const handleSubscribe = async (planKey: PaidPlan) => {
    if (!user) {
      window.location.href = "/login?redirect=/pricing";
      return;
    }
    setCheckoutError(null);
    setLoadingPlan(planKey);

    const res = await createCheckout(planKey, billing);

    if (res.url) {
      window.location.href = res.url;
    } else {
      setCheckoutError(res.error || t("apiErrors.CHECKOUT_FAILED"));
      setLoadingPlan(null);
    }
  };

  const getPrice = (plan: (typeof plans)[number]) => {
    if (!plan.key || plan.key === "lifetime") return plan.priceEur;
    if (billing === "yearly" && plan.yearlyEur) return plan.yearlyEur;
    return plan.priceEur;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="text-xs text-gray-400 hover:text-gray-600 hover:underline mb-4 inline-block">
            ← {t("pricing.backToApp")}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("pricing.title")}</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            {t("pricing.subtitle")}
          </p>

          {checkoutSuccess && (
            <div className="mt-6 max-w-md mx-auto bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg px-4 py-3">
              ✓ {t("pricing.paymentReceived")}
            </div>
          )}
          {checkoutError && (
            <div className="mt-6 max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
              {checkoutError}
            </div>
          )}

          {/* Billing toggle */}
          <div className="mt-6 inline-flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                billing === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                billing === "yearly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              {t("pricing.yearly")} <span className="text-emerald-600">-17%</span>
            </button>
          </div>
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
                <span className="text-2xl font-black text-gray-900">{getPrice(plan)}</span>
                <span className="text-xs text-gray-500">
                  {" "}EUR{plan.key !== "lifetime" ? (billing === "yearly" && plan.yearlyEur ? t("pricing.perYear") : plan.period) : plan.period}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mb-4">{plan.description}</p>

              <div className="flex-1 space-y-2 mb-5">
                {plan.features.map((f) => (
                  <div key={f.label} className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-600">{f.label}</span>
                    {typeof f.value === "boolean" ? (
                      f.value ? <span className="text-emerald-500 text-xs">✓</span> : <span className="text-red-400 text-xs">✕</span>
                    ) : (
                      <span className="font-semibold text-[11px] text-gray-800">{f.value === t("pricing.unlimited") ? "∞" : f.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <button
                disabled={!plan.key || loadingPlan === plan.key}
                onClick={() => plan.key && handleSubscribe(plan.key)}
                className={`w-full py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  !plan.key
                    ? "bg-gray-100 text-gray-500 cursor-default"
                    : loadingPlan === plan.key
                    ? "bg-gray-300 text-gray-500 cursor-wait"
                    : plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                    : "bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
                }`}
              >
                {!plan.key
                  ? t("pricing.freePlan")
                  : loadingPlan === plan.key
                  ? t("pricing.redirecting")
                  : user
                  ? t("pricing.subscribe")
                  : t("pricing.signInToSubscribe")}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">{t("pricing.footer")}</p>
        </div>
      </div>
    </div>
  );
}
