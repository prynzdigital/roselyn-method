import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

const sampleContent = `
<p>This is a comprehensive guide written by our certified specialists to help you navigate one of the most common challenges new parents face.</p>

<h2>Understanding the Basics</h2>
<p>Before diving into strategies, it's important to understand the science behind newborn sleep patterns. Unlike adults who cycle through sleep stages every 90 minutes, newborns have much shorter cycles — typically 45–50 minutes long. This is completely normal and developmentally appropriate.</p>

<h2>Week-by-Week Breakdown</h2>
<p>During the first few weeks, your newborn will sleep 16–18 hours per day in 2–4 hour stretches. This is not a schedule — it's a biological necessity. Your baby's stomach is tiny and needs frequent refills.</p>

<h3>Weeks 1–2: Survival Mode</h3>
<p>Focus on keeping your baby fed, warm, and held. Don't worry about schedules yet. Your primary job is to establish your milk supply (if breastfeeding) and help your baby recover from the birth process.</p>

<h3>Weeks 3–4: Watching for Patterns</h3>
<p>Around 3–4 weeks, you may start to notice subtle patterns in your baby's wake/sleep cycles. Begin tracking feeds and sleep to identify natural rhythms you can gently reinforce.</p>

<h2>Practical Tips</h2>
<ul>
<li><strong>Watch wake windows:</strong> Newborns can typically only stay awake 45–60 minutes before needing sleep again. Overtiredness makes settling harder.</li>
<li><strong>Create a drowsy sleep environment:</strong> White noise, darkness, and a comfortable temperature (68–72°F) signal sleep time.</li>
<li><strong>Learn your baby's sleep cues:</strong> Yawning, eye rubbing, and decreased activity are early cues. Acting on these before full meltdown mode makes settling easier.</li>
</ul>

<h2>When to Seek Help</h2>
<p>If your baby is consistently unable to complete full sleep cycles, waking every 30–45 minutes around the clock, or seems excessively fussy during wake windows, consider booking a consultation with one of our certified specialists.</p>
`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <div className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-inter text-sm text-white/60 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
            <Badge variant="secondary" className="mb-4">Sleep</Badge>
            <h1 className="font-playfair text-4xl font-semibold text-white mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/50 font-inter text-sm">
              <span className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-secondary/30 flex items-center justify-center text-xs text-secondary">R</div>
                By Dr. Roselyn Carter
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                June 16, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                8 min read
              </span>
            </div>
          </div>
        </div>

        {/* Article */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            {/* Content */}
            <article
              className="prose-roselyn"
              dangerouslySetInnerHTML={{ __html: sampleContent }}
            />

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-6 sticky top-24">
                <p className="font-inter text-xs text-secondary uppercase tracking-widest mb-3">
                  Get Expert Help
                </p>
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Book a Consultation
                </h3>
                <p className="font-inter text-sm text-white/60 mb-4">
                  Get personalized guidance from a certified newborn specialist.
                </p>
                <Link
                  href="/booking"
                  className="block bg-secondary text-primary text-center py-3 rounded-lg font-inter text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Book Now
                </Link>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-playfair text-base font-semibold text-primary mb-3">
                  Related Guide
                </h4>
                <p className="font-inter text-sm text-muted-foreground mb-3">
                  Ultimate Sleep Guide for New Parents
                </p>
                <Link
                  href="/store/ultimate-sleep-guide"
                  className="font-inter text-sm text-secondary hover:text-primary font-medium transition-colors"
                >
                  View Guide →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
