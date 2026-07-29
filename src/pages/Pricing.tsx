import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {  type PaidPlan, type Billing } from "../services/billing";
// payWithCard
const plans = [
  {
    name: "Free",
    priceEur: "0",
    period: "",
    description: "Try the platform — limited access",
    highlight: false,
    features: [
      { label: "Model Tests", value: "1 only" },
      { label: "Vocabulary", value: "50 words" },
      { label: "AI Translation", value: "5/day" },
      { label: "Chat Messages", value: "20" },
      { label: "Progress Sync", value: false },
      { label: "Audio Recording", value: false },
      { label: "Ad-Free", value: false },
    ],
  },
  {
    name: "Silver",
    key: "silver" as PaidPlan,
    priceEur: "2.99",
    yearlyEur: "29.90",
    period: "/mo",
    description: "For regular learners",
    highlight: false,
    features: [
      { label: "Model Tests", value: "5" },
      { label: "Vocabulary", value: "500 words" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "500" },
      { label: "Progress Sync", value: true },
      { label: "Ad-Free", value: true },
    ],
  },
  {
    name: "Gold",
    key: "gold" as PaidPlan,
    priceEur: "4.99",
    yearlyEur: "49.90",
    period: "/mo",
    description: "AI-powered prep — most popular",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "Model Tests", value: "All (15)" },
      { label: "Vocabulary", value: "2,500 words" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "1,000" },
      { label: "Progress Sync", value: true },
      { label: "Audio Recording", value: true },
      { label: "Ad-Free", value: true },
    ],
  },
  {
    name: "Platinum",
    key: "platinum" as PaidPlan,
    priceEur: "6.99",
    yearlyEur: "69.90",
    period: "/mo",
    description: "Everything unlimited",
    highlight: false,
    features: [
      { label: "Model Tests", value: "All (15)" },
      { label: "Vocabulary", value: "Unlimited" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "Unlimited" },
      { label: "Progress Sync", value: true },
      { label: "Audio Recording", value: true },
      { label: "Ad-Free", value: true },
    ],
  },
  {
    name: "Lifetime",
    key: "lifetime" as PaidPlan,
    priceEur: "29.90",
    period: " once",
    description: "Pay once, use forever",
    highlight: false,
    badge: "Best Value",
    features: [
      { label: "Model Tests", value: "All (15)" },
      { label: "Vocabulary", value: "Unlimited" },
      { label: "AI Translation", value: "Unlimited" },
      { label: "Chat Messages", value: "Unlimited" },
      { label: "Progress Sync", value: true },
      { label: "Audio Recording", value: true },
      { label: "Ad-Free", value: true },
    ],
  },
];

// ─── Card Payment Modal ─────────────────────────────────────────────

// interface CardModalProps {
//   plan: PaidPlan;
//   billing: Billing;
//   priceEur: string;
//   planName: string;
//   onClose: () => void;
//   onSuccess: () => void;
// }

// function CardPaymentModal({ plan, billing, priceEur, planName, onClose, onSuccess }: CardModalProps) {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
//   const [errorMsg, setErrorMsg] = useState("");

//   const formatCardNumber = (val: string) => {
//     const digits = val.replace(/\D/g, "").slice(0, 16);
//     return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMsg("");

//     const num = cardNumber.replace(/\s/g, "");
//     if (num.length < 13) { setErrorMsg("Invalid card number"); return; }
//     if (!expiryMonth || !expiryYear) { setErrorMsg("Expiry date is required"); return; }
//     if (cvv.length < 3) { setErrorMsg("Invalid CVV"); return; }

//     setStatus("processing");

//     const expiry = `${expiryYear}-${expiryMonth.padStart(2, "0")}`;

//     const res = await payWithCard(plan, billing, {
//       number: num,
//       expiry,
//       cvv,
//     });

//     if (res.plan) {
//       setStatus("success");
//       setTimeout(() => onSuccess(), 1500);
//     } else {
//       setErrorMsg(res.error || "Payment was declined. Please check your card.");
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative" onClick={(e) => e.stopPropagation()}>
//         {/* Close */}
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="flex items-center gap-2 mb-1">
//           <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//           </svg>
//           <h2 className="text-lg font-bold text-gray-900">Pay with Card</h2>
//         </div>
//         <p className="text-sm text-gray-500 mb-5">
//           {planName} — <span className="font-semibold text-gray-900">{priceEur} EUR</span>
//           {plan !== "lifetime" && <span className="text-gray-400">/{billing === "yearly" ? "year" : "mo"}</span>}
//         </p>

//         {status === "success" ? (
//           <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center">
//             <span className="text-3xl">✓</span>
//             <p className="text-sm text-emerald-800 mt-2 font-medium">Payment successful!</p>
//             <p className="text-xs text-emerald-600 mt-1">Your {planName} plan is now active.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Card number */}
//             <div>
//               <label className="text-xs font-medium text-gray-700 block mb-1">Card number</label>
//               <input
//                 type="text"
//                 inputMode="numeric"
//                 placeholder="4032 0393 1798 4658"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 maxLength={19}
//                 autoComplete="cc-number"
//               />
//             </div>

//             {/* Expiry + CVV */}
//             <div className="grid grid-cols-3 gap-3">
//               <div>
//                 <label className="text-xs font-medium text-gray-700 block mb-1">Month</label>
//                 <select
//                   value={expiryMonth}
//                   onChange={(e) => setExpiryMonth(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">MM</option>
//                   {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map((m) => (
//                     <option key={m} value={m}>{m}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="text-xs font-medium text-gray-700 block mb-1">Year</label>
//                 <select
//                   value={expiryYear}
//                   onChange={(e) => setExpiryYear(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">YYYY</option>
//                   {Array.from({ length: 10 }, (_, i) => String(2025 + i)).map((y) => (
//                     <option key={y} value={y}>{y}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="text-xs font-medium text-gray-700 block mb-1">CVV</label>
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   placeholder="123"
//                   value={cvv}
//                   onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   maxLength={4}
//                   autoComplete="cc-csc"
//                 />
//               </div>
//             </div>

//             {errorMsg && <p className="text-xs text-red-600">{errorMsg}</p>}

//             <button
//               type="submit"
//               disabled={status === "processing"}
//               className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
//                 status === "processing"
//                   ? "bg-gray-300 text-gray-500 cursor-wait"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               {status === "processing" ? "Processing..." : `Pay ${priceEur} EUR`}
//             </button>

//             <div className="flex items-center justify-center gap-1.5 pt-1">
//               <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//               <span className="text-[10px] text-gray-400">Secure payment. Card info is sent directly to the payment processor.</span>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// ─── Main Pricing Page ──────────────────────────────────────────────

export default function Pricing() {
  const { user } = useAuth();
  const [billing, setBilling] = useState<Billing>("monthly");
  const [paymentModal, setPaymentModal] = useState<{
    plan: PaidPlan;
    priceEur: string;
    planName: string;
  } | null>(null);
  const [successPlan, ] = useState<string | null>(null);
  // setSuccessPlan
  const handleSubscribe = (planKey: PaidPlan, priceEur: string, planName: string) => {
    if (!user) {
      window.location.href = "/login?redirect=/pricing";
      return;
    }
    setPaymentModal({ plan: planKey, priceEur, planName });
  };

  const getPrice = (plan: typeof plans[number]) => {
    if (!plan.key || plan.key === "lifetime") return plan.priceEur;
    if (billing === "yearly" && plan.yearlyEur) return plan.yearlyEur;
    return plan.priceEur;
  };


  useEffect(()=>{
    setTimeout(()=>{
      setPaymentModal(null);
    },3000)
  },[paymentModal])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="text-xs text-gray-400 hover:text-gray-600 hover:underline mb-4 inline-block">
            ← Back to App
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Unlock all 15 model tests, unlimited AI tools, and cloud sync.
          </p>

          {successPlan && (
            <div className="mt-6 max-w-md mx-auto bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg px-4 py-3">
              ✓ {successPlan.charAt(0).toUpperCase() + successPlan.slice(1)} plan activated! Refresh the app to see your features.
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
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                billing === "yearly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Yearly <span className="text-emerald-600">-17%</span>
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
                  {" "}EUR{plan.key !== "lifetime" ? (billing === "yearly" && plan.yearlyEur ? "/year" : plan.period) : plan.period}
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
                      <span className="font-semibold text-[11px] text-gray-800">{f.value === "Unlimited" ? "∞" : f.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <button
                disabled={!plan.key}
                onClick={() => plan.key && handleSubscribe(plan.key, getPrice(plan), plan.name)}
                className={`w-full py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  !plan.key
                    ? "bg-gray-100 text-gray-500 cursor-default"
                    : plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                    : "bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
                }`}
              >
                {!plan.key ? "Free Plan" : user ? "Subscribe" : "Sign in to Subscribe"}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">Secure payment by credit card. Prices in EUR. Cancel anytime.</p>
         {paymentModal && (
  <p className="text-center text-sm font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mt-3">
    Coming soon
  </p>
)}
        </div>
      </div>

      {/* Payment Modal */}
      {/* {paymentModal && (
        <CardPaymentModal
          plan={paymentModal.plan}
          billing={billing}
          priceEur={paymentModal.priceEur}
          planName={paymentModal.planName}
          onClose={() => setPaymentModal(null)}
          onSuccess={() => {
            setPaymentModal(null);
            setSuccessPlan(paymentModal.plan);
          }}
        />
      )} */}
    </div>
  );
}
