import type { Metadata } from "next";
import { ArrowLink, Button, Chip, Footer, Header, toneBg } from "@/components/Chrome";
import WorkCarousel from "@/components/WorkCarousel";
import { references, site } from "@/content/site";

export const metadata: Metadata = {
  title: `Recent work | ${site.name}`,
  description: "Agentic videos, in-person shoots and video production by Untitled Project.",
};

// Staggered card heights, like the reference's news row.
const heights = ["h-64", "h-52", "h-44"];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-cream to-paper pb-20 pt-14 sm:pt-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
            <Chip>Recent Work</Chip>
            <h1 className="mt-4 text-balance font-display text-5xl font-extrabold leading-[1] tracking-[-0.03em] sm:text-7xl">
              Videos That Did The Talking
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Agentic video, on-location shoots and full productions. Tap a card to bring it to the front.
            </p>
          </div>
          <div className="mt-14">
            <WorkCarousel />
          </div>
        </section>

        <section className="bg-paper pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-ink/10 pt-12">
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">All projects</h2>
              <ArrowLink href="/book">Start yours</ArrowLink>
            </div>
            <div className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
              {references.map((r, i) => (
                <a key={r.title} href={r.href} className="group flex min-w-0 flex-col">
                  <div
                    className={`relative flex w-full items-center justify-center overflow-hidden rounded-[28px] grayscale transition-all duration-500 group-hover:grayscale-0 ${
                      heights[i % heights.length]
                    } ${toneBg[r.tone]}`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-ink shadow-sm transition-transform group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current" aria-hidden>
                        <path d="M8 5.5v13l10.5-6.5z" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-ink-soft">
                    {r.category} · {r.client}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug tracking-tight">{r.title}</h3>
                </a>
              ))}
            </div>
            <div className="mt-20 flex flex-col items-center gap-5 text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight">Want something like this?</p>
              <Button href="/book">Book a call</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
