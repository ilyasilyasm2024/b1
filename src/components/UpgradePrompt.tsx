import { Link } from "react-router-dom";

interface UpgradePromptProps {
  feature: string;
  requiredPlan?: string;
}

export default function UpgradePrompt({ feature, requiredPlan = "Silver" }: UpgradePromptProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-5 text-center">
      <span className="text-2xl mb-2 block">🔒</span>
      <h3 className="text-sm font-bold text-gray-900 mb-1">{feature}</h3>
      <p className="text-xs text-gray-600 mb-3">
        Upgrade to {requiredPlan} or higher to unlock this feature.
      </p>
      <Link
        to="/pricing"
        className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
      >
        View Plans →
      </Link>
    </div>
  );
}
