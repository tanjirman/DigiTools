import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    popular: false,
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    popular: false,
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-base-100">
      {/* Header */}
      <div className="text-center mb-12 rounded-xl py-6 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-base-content mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base-content/50 font-semibold text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card flex-1 relative border flex flex-col ${
              plan.highlighted
                ? "bg-linear-to-r from-[#4F39F6] to-purple-500 text-white border-transparent"
                : "bg-base-100 border-base-300"
            } shadow-sm hover:shadow-md transition-shadow duration-300`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div className="card-body gap-4 pt-8 flex flex-col flex-1">
              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <h3
                    className={`font-bold text-lg ${plan.highlighted ? "text-white" : "text-base-content"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${plan.highlighted ? "text-white/70" : "text-base-content/50"}`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="flex items-end gap-1">
                  <span
                    className={`text-5xl font-extrabold ${plan.highlighted ? "text-white" : "text-base-content"}`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${plan.highlighted ? "text-white/70" : "text-base-content/50"}`}
                  >
                    /Month
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <FiCheck
                        className={
                          plan.highlighted ? "text-white" : "text-primary"
                        }
                      />
                      <span
                        className={
                          plan.highlighted
                            ? "text-white/90"
                            : "text-base-content/70"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`btn w-full rounded-full ${plan.highlighted ? "bg-white  hover:bg-white/90 border-none" : "btn-primary bg-linear-to-r from-[#4F39F6] to-purple-500 border-none"}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
