import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind The Roselyn Method and our mission to support modern families.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-primary pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="font-playfair text-5xl font-semibold text-white mb-4">About Us</h1>
            <p className="font-cormorant text-xl text-white/60 max-w-2xl mx-auto">
              Born from personal experience. Built for every family.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="font-playfair text-3xl font-semibold text-primary mb-6">
                Every Family Deserves Expert Support
              </h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-4">
                The Roselyn Method was born from a simple belief: every parent deserves access to the kind of expert newborn guidance that was once reserved for the most privileged families.
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed">
                Our founder, Dr. Roselyn Carter, spent over a decade as a night nurse, watching exhausted families struggle alone when a little expert guidance could have changed everything. She created this platform to bridge that gap — bringing compassionate, evidence-based care to modern parents everywhere.
              </p>
            </div>
            <div className="bg-gradient-to-br from-muted to-accent/30 rounded-2xl h-72 flex items-center justify-center">
              <span className="text-8xl">🌙</span>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-playfair text-3xl font-semibold text-primary mb-10 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { emoji: "💛", title: "Compassionate", desc: "We meet families where they are, with zero judgment and total warmth." },
                { emoji: "🔬", title: "Evidence-Based", desc: "Every recommendation is grounded in current pediatric science and best practices." },
                { emoji: "🤝", title: "Inclusive", desc: "We celebrate and support families of all backgrounds, structures, and feeding choices." },
              ].map((v) => (
                <div key={v.title} className="text-center p-6 rounded-xl border border-border">
                  <span className="text-4xl mb-4 block">{v.emoji}</span>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2">{v.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary rounded-2xl p-12 text-center grid sm:grid-cols-3 gap-8">
            {[
              { value: "2,000+", label: "Families Supported" },
              { value: "15+", label: "Certified Specialists" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-4xl font-semibold text-secondary mb-2">{stat.value}</p>
                <p className="font-inter text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
