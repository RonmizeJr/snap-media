import Image from "next/image";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      title: "Fast Media Optimization",
      description:
        "Quickly resize, compress, and convert media to deliver optimized assets at lightning speed.",
      icon: (
        <svg
          className="h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Developer-Friendly APIs",
      description:
        "Integrate seamlessly with our robust APIs, making it easy to add optimization to your apps.",
      icon: (
        <svg
          className="h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16l-4-4m0 0l4-4m-4 4h16"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Options",
      description:
        "Control quality, formats, and dimensions to match your specific needs and use cases.",
      icon: (
        <svg
          className="h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 12c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-background py-16">
      {/* Page Header */}
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-foreground">Features</h1>
        <p className="mt-4 text-lg text-foreground">
          Explore the powerful features that make MediaOptimizer the best
          solution for optimizing your media.
        </p>
      </header>

      {/* Feature Cards */}
      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-foreground bg-background p-6 shadow-lg transition hover:shadow-xl"
          >
            <div className="flex items-center space-x-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-primary">
                {feature.title}
              </h3>
            </div>
            <p className="mt-4 text-foreground">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Visual Example */}
      <section className="mt-20 bg-background py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground">
            See the Difference
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Experience the magic of optimization with our before-and-after
            example.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-6">
            <div>
              <Image
                src="/example-before.jpg"
                alt="Before Optimization"
                className="h-64 w-64 rounded-lg object-cover shadow-md"
                width={256}
                height={256}
              />
              <p className="mt-2 text-foreground">Before</p>
            </div>
            <div>
              <Image
                src="/example-after.jpg"
                alt="After Optimization"
                className="h-64 w-64 rounded-lg object-cover shadow-md"
                width={256}
                height={256}
              />
              <p className="mt-2 text-foreground">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">
          Sign up today and start optimizing your media in minutes.
        </p>
        <div className="mt-6">
          <Link
            href="/get-started"
            className="rounded-lg bg-primary px-6 py-3 font-bold text-accent hover:bg-gray-100"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
