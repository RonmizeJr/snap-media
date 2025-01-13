import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="">
      <div className="bg-background py-20 text-center text-foreground">
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
    </main>
  );
}
