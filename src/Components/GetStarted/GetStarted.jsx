import { FiUser, FiBox, FiZap } from "react-icons/fi";

const steps = [
  {
    id: "01",
    icon: <FiUser size={28} />,
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    icon: <FiBox size={28} />,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    icon: <FiZap size={28} />,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

export default function GetStarted() {
  return (
    <section className="bg-base-200 py-20 px-4">
      {/* Header */}
      <div className="card-body text-center items-center mb-12">
        <h2 className="text-4xl font-bold text-base-content mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-base-content/50 text-sm font-semibold max-w-lg ">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="card-body flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto items-stretch h-full">
        {steps.map((step) => (
          <div
            key={step.id}
            className="card bg-base-100 shadow-sm w-72 relative hover:shadow-md transition-shadow duration-300"
          >
            {/* Step badge */}
            <span className="badge badge-primary absolute top-3 right-4 text-xs font-semibold px-2 py-3 rounded-full">
              {step.id}
            </span>

            <div className="card-body gap-4 pt-8 items-center text-center">
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {step.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-bold text-base-content text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-base-content/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
