import BookingWidget from "@/components/BookingWidget";
import {
  extraRevision,
  faqs,
  nav,
  plans,
  process,
  references,
  services,
  site,
  type Reference,
  type Service,
  whyUs,
} from "@/content/site";

const toneBg: Record<Reference["tone"], string> = {
  lavender: "bg-lavender",
  sage: "bg-sage",
  peach: "bg-peach",
  ink: "bg-ink text-paper",
};

const toneDeep: Record<Service["tone"], string> = {
  lavender: "text-lavender-deep",
  sage: "text-sage-deep",
  peach: "text-peach-deep",
};

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`font-serif text-2xl leading-none tracking-tight ${className}`}>
      Untitled <em>Project</em>
    </a>
  );
}

function Button({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const styles =
    variant === "dark"
      ? "bg-ink text-paper hover:bg-ink/85"
      : "border border-ink/15 bg-white/60 text-ink hover:bg-white";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({ kicker, title, body }: { kicker: string; title: React.ReactNode; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">{kicker}</p>
      <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-6xl">{title}</h2>
      {body && <p className="mt-5 text-lg text-ink-soft">{body}</p>}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#book">Book a call</Button>
      </div>
    </header>
  );
}

function Hero() {
  const formats = ["Reels", "YouTube Shorts", "Brand films", "Founder stories", "Product launches", "AI ad variants", "Podcasts", "Explainers"];
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[520px] max-w-5xl rounded-full bg-gradient-to-r from-lavender via-peach to-sage opacity-60 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-xs font-medium text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-lavender-deep" />
          Now booking new projects
        </p>
        <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
          You own the context.
          <br />
          <em className="text-lavender-deep">We ship the video.</em>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-ink-soft">{site.tagline}</p>
        <p className="mx-auto mt-2 max-w-xl text-lg text-ink-soft">
          No prompting, no wasted tokens, no editing on your side. Agentic video, in-person shoots and full
          production under one roof.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#book">Book a free call</Button>
          <Button href="#why" variant="light">
            Why teams use us
          </Button>
        </div>
      </div>
      <div className="relative border-y border-line bg-paper-2/60 py-5">
        <div className="flex w-max marquee gap-12 whitespace-nowrap font-serif text-2xl italic text-ink-soft">
          {[...formats, ...formats].map((f, i) => (
            <span key={i} className="flex items-center gap-12">
              {f}
              <span aria-hidden className="text-lavender-deep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Why us"
        title={
          <>
            Why pay us when you <em>have the context?</em>
          </>
        }
        body="Your team knows the product best. Turning that knowledge into video is the part that eats tokens, hours and focus. Hand over the context file and the rest is on us."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white/50 p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">Doing it yourself</p>
          <ul className="mt-6 space-y-4">
            {whyUs.yourself.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft">
                <span aria-hidden className="text-peach-deep">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-lavender p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/70">With Untitled Project</p>
          <ul className="mt-6 space-y-4">
            {whyUs.withUs.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="text-lavender-deep">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {whyUs.points.map((p) => (
          <div key={p.title} className="rounded-3xl border border-line bg-white/70 p-7">
            <h3 className="font-serif text-3xl">{p.title}</h3>
            <p className="mt-2 text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="What we make"
        title={
          <>
            Three ways to <em>tell your story</em>
          </>
        }
        body="Pick one, or combine them. Most projects mix a real shoot with agent-generated variants."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.id} className="flex flex-col rounded-3xl border border-line bg-white/70 p-7">
            <div className={`mb-8 flex h-40 items-end rounded-2xl p-5 ${toneBg[s.tone]}`}>
              <span className={`font-serif text-5xl italic ${toneDeep[s.tone]}`}>{s.kicker.split(" ")[0]}</span>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">{s.kicker}</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-ink-soft">{s.body}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className={`mt-0.5 ${toneDeep[s.tone]}`}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-paper-2/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="References"
          title={
            <>
              Recent <em>work</em>
            </>
          }
          body="A sample across agentic video, on-location shoots and production."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="How it works"
        title={
          <>
            From call to <em>cut</em>
          </>
        }
      />
      <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <li key={p.step} className="rounded-3xl border border-line bg-white/70 p-7">
            <span className="font-serif text-5xl italic text-lavender-deep">{p.step}</span>
            <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/60">Pricing</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-6xl">
            Priced by <em className="text-lavender">revisions</em>
          </h2>
          <p className="mt-5 text-lg text-paper/70">
            Every plan includes a set number of revision rounds, and each round covers a set number of changes. No
            surprise invoices.
          </p>
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured ? "bg-lavender text-ink" : "border border-paper/15 bg-paper/5"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-ink px-3 py-1 text-xs font-medium text-paper">
                  Most booked
                </span>
              )}
              <h3 className="font-serif text-3xl">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.featured ? "text-ink/70" : "text-paper/60"}`}>{plan.blurb}</p>
              <p className="mt-8 flex items-baseline gap-2">
                <span className="font-serif text-5xl">
                  {site.currency}
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? "text-ink/60" : "text-paper/50"}`}>{plan.cadence}</span>
              </p>
              <div
                className={`mt-8 grid grid-cols-2 gap-3 rounded-2xl p-4 text-center ${
                  plan.featured ? "bg-white/60" : "bg-paper/10"
                }`}
              >
                <div>
                  <p className="font-serif text-4xl">{plan.revisions}</p>
                  <p className={`text-xs ${plan.featured ? "text-ink/60" : "text-paper/60"}`}>
                    revision round{plan.revisions === "1" ? "" : "s"}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-4xl">{plan.changesPerRevision}</p>
                  <p className={`text-xs ${plan.featured ? "text-ink/60" : "text-paper/60"}`}>changes per round</p>
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className={plan.featured ? "text-lavender-deep" : "text-lavender"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-10 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  plan.featured ? "bg-ink text-paper hover:bg-ink/85" : "bg-paper text-ink hover:bg-paper/85"
                }`}
              >
                Book a call
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-paper/60">
          {extraRevision.note} Extra round: {site.currency}
          {extraRevision.price}.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="FAQ"
        title={
          <>
            Good <em>questions</em>
          </>
        }
      />
      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between gap-6 font-serif text-2xl">
              {f.q}
              <span className="faq-icon text-3xl leading-none text-ink-soft transition-transform">+</span>
            </summary>
            <p className="mt-3 text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function BookCall() {
  return (
    <section id="book" className="scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender via-paper-2 to-sage p-4 sm:p-12">
        <div className="mx-auto max-w-2xl px-2 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">Book a call</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-6xl">
            Let&apos;s make something <em>worth watching</em>
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Pick a time that works for you. Bring the idea, we bring the plan, a recommended package and a fixed
            quote.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
          <BookingWidget />
        </div>
        <p className="mt-6 text-center text-sm text-ink-soft">
          Prefer email?{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <Wordmark className="text-3xl" />
        <nav className="flex flex-wrap gap-6 text-sm text-ink-soft">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-ink-soft">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <Faq />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}
