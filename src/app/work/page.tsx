import type { Metadata } from "next";
import { Button, Footer, Header, toneBg } from "@/components/Chrome";
import { references, site } from "@/content/site";

export const metadata: Metadata = {
  title: `Recent work | ${site.name}`,
  description: "Agentic videos, in-person shoots and video production by Untitled Project.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[420px] max-w-5xl rounded-full bg-gradient-to-r from-lavender via-peach to-sage opacity-50 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">References</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] sm:text-7xl">
              Recent <em className="text-lavender-deep">work</em>
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              A sample across agentic video, on-location shoots and production.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((r) => (
          <a
            key={r.title}
            href={r.href}
            className="group overflow-hidden rounded-3xl border border-line bg-white/70 transition-transform hover:-translate-y-1"
          >
            <div className={`relative flex aspect-video items-center justify-center ${toneBg[r.tone]}`}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink">
                {r.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-2xl leading-tight">{r.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{r.client}</p>
            </div>
          </a>
          ))}
        </div>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-3xl">Want something like this?</p>
            <Button href="/book">Book a call</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
