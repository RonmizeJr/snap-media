import { Button } from "~/components/ui/button";

export default function HomePage() {
  const features = [
    {
      title: "Fast",
      description: "Quick media optimization for any platform.",
    },
    { title: "Easy", description: "Developer-friendly APIs and SDKs." },
    {
      title: "Customizable",
      description: "Adjust settings to meet your needs.",
    },
  ];
  return (
    <main className="">
      <div className="border-b border-foreground bg-background py-20 text-center text-foreground">
        <h1 className="text-5xl font-bold">
          Optimize Media for the Web, Effortlessly.
        </h1>
        <p className="mt-4 text-lg">
          Compress, scale, and deliver high-quality images and videos faster.
        </p>
        <div className="mt-6 gap-4">
          <Button className="rounded-lg bg-primary px-6 py-3 font-bold text-accent">
            Get Started
          </Button>
        </div>
      </div>
      <div className="border-b border-foreground bg-background py-20 text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-lg border p-6 shadow-md">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-foreground bg-background py-20 text-center">
        <h2 className="text-3xl font-bold">Affordable Pricing</h2>
        <p className="mt-4">Start for free, scale as you grow.</p>
        <Button className="mt-6 rounded-lg px-6 py-3 text-accent">
          View Pricing
        </Button>
      </div>
      <div className="bg-background py-20 text-center">
        <h2 className="text-3xl font-bold">Get Started Today</h2>
        <Button className="mt-6 rounded-lg px-6 py-3 text-purple-600">
          Sign Up Now
        </Button>
      </div>
    </main>
  );
}
