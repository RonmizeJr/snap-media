export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description:
        "Perfect for individuals getting started with media optimization.",
      features: ["1 GB storage", "Basic optimizations", "Community support"],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$19",
      description:
        "Ideal for professionals needing advanced features and optimizations.",
      features: [
        "100 GB storage",
        "Advanced optimizations",
        "Priority support",
        "Custom presets",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for businesses with specific needs.",
      features: [
        "Unlimited storage",
        "Team collaboration tools",
        "Dedicated account manager",
        "Custom SLAs",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <div className="bg-background py-16">
      {/* Page Header */}
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-primary">Pricing Plans</h1>
        <p className="mt-4 text-lg text-foreground">
          Choose a plan that fits your needs and start optimizing your media
          today.
        </p>
      </header>

      {/* Pricing Cards */}
      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg border bg-background p-6 shadow-lg ${
              idx === 1 ? "border-blue-600" : "border-gray-200"
            } transition hover:shadow-xl`}
          >
            <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
            <p className="mt-2 text-foreground">{plan.description}</p>
            <div className="mt-4 text-4xl font-bold text-gray-800">
              {plan.price}
              <span className="text-lg text-gray-600">/mo</span>
            </div>
            <ul className="mt-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={idx === 2 ? "/contact-sales" : "/get-started"}
              className={`mt-6 block rounded-lg px-4 py-2 text-center font-semibold ${
                idx === 1
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mt-20 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Have questions? We’ve got answers.
        </p>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Can I change my plan later?
            </h3>
            <p className="mt-2 text-gray-600">
              Absolutely! You can upgrade or downgrade your plan at any time
              from your account settings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Do you offer a free trial?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, our Pro plan includes a 14-day free trial with no credit card
              required.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Optimize Your Media?</h2>
        <p className="mt-4 text-lg">
          Sign up today and get started with a free plan or explore our Pro
          features.
        </p>
        <div className="mt-6">
          <a
            href="/get-started"
            className="rounded-lg bg-white px-6 py-3 font-bold text-blue-600 hover:bg-gray-100"
          >
            Get Started for Free
          </a>
        </div>
      </section>
    </div>
  );
}
