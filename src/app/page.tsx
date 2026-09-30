import BookingWidget from "@/components/BookingWidget";
import { ArrowIcon, ArrowLink, Button, Chip, Footer, Header, SectionHeading } from "@/components/Chrome";
import PricingPicker from "@/components/PricingPicker";
import ProjectStarter from "@/components/ProjectStarter";
import StatCounter from "@/components/StatCounter";
import WorkCarousel from "@/components/WorkCarousel";
import { faqs, platforms, process, services, site, whyUs } from "@/content/site";

function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l10.5-6.5z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-gradient-to-b from-cream via-cream to-sand">
      <div className="mx-auto max-w-7xl px-4 pt-14 text-center sm:px-8 sm:pt-20">
        <h1 className="font-display text-[15vw] font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-[9.5vw] xl:text-[8.5rem]">
          <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.18em]">
            Untitled
            {/* Pill-shaped media inside the headline. Swap for a real clip once you have one. */}
            <span
              aria-hidden
              className="relative inline-flex h-[0.78em] w-[1.55em] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-green via-[#8fd9a6] to-sand align-middle shadow-inner"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_55%)]" />
              <span className="relative flex h-[0.34em] w-[0.34em] items-center justify-center rounded-full bg-white/90 text-ink shadow">
                <PlayIcon className="ml-[0.03em] h-[0.16em] w-[0.16em]" />
              </span>
            </span>
            Project
          </span>
          <br />
          ships video
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base text-ink-soft sm:text-lg">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/book">Book a call</Button>
          <ArrowLink href="#why">Why teams use us</ArrowLink>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 border-t border-ink/10 py-6">
          <a href="/book" className="label flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15">
              <ArrowIcon />
            </span>
            Quick book
          </a>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="text-xs text-ink-soft">Made for</span>
            {platforms.map((p) => (
              <span key={p} className="font-display text-xl font-extrabold tracking-tight text-ink/80">
                {p}
              </span>
            ))}
          </div>
          <a href="#services" className="label hidden items-center gap-3 md:flex">
            Scroll down
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const serviceIcons = [
  // Agentic: sparkle
  <path key="a" d="M10 3v4M10 13v4M3 10h4M13 10h4M5.5 5.5l2 2M12.5 12.5l2 2M14.5 5.5l-2 2M7.5 12.5l-2 2" />,
  // Shoot: camera
  <g key="s">
    <rect x="2.5" y="6" width="11" height="8" rx="2" />
    <path d="m13.5 9 4-2v6l-4-2" />
  </g>,
  // Production: film strip
  <g key="p">
    <rect x="3" y="3" width="14" height="14" rx="2" />
    <path d="M7 3v14M13 3v14M3 7.5h4M3 12.5h4M13 7.5h4M13 12.5h4" />
  </g>,
];

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-gradient-to-b from-paper to-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          kicker="What We Do"
          title={
            <>
              Video Without The
              <br className="hidden sm:block" /> Heavy Lifting
            </>
          }
          link={{ href: "/book", label: "Start a project" }}
        />
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <a
              key={s.id}
              href="/book"
              className="group flex min-w-0 flex-col rounded-[28px] border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-b hover:from-sand hover:to-cream hover:shadow-lg sm:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5">
                <svg
                  viewBox="0 0 20 20"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {serviceIcons[i]}
                </svg>
              </span>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between gap-3 pt-2">
                <span className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-ink-soft">
                  {s.tags.map((t) => (
                    <span key={t}># {t}</span>
                  ))}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-green group-hover:bg-green group-hover:text-white">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="scroll-mt-20">
      <StatCounter />
      <div className="bg-sand pb-24">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 sm:px-8 md:grid-cols-2">
          <div className="rounded-[28px] bg-paper/60 p-7 sm:p-8">
            <Chip tone="grey">Doing it yourself</Chip>
            <ul className="mt-6 space-y-4">
              {whyUs.yourself.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft">
                  <span aria-hidden className="font-bold text-ink/40">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-paper p-7 shadow-sm sm:p-8">
            <Chip>With Untitled Project</Chip>
            <ul className="mt-6 space-y-4">
              {whyUs.withUs.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="font-bold text-green">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-sand to-cream py-24">
      {/* Soft cloud shapes behind the card, echoing the reference's donation section. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-40 h-[420px] w-[420px] -translate-x-[85%] rounded-full bg-white/45 blur-2xl" />
        <div className="absolute left-1/2 top-32 h-[460px] w-[460px] -translate-x-[15%] rounded-full bg-white/45 blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          kicker="Pricing"
          title={
            <>
              Pay For The Revisions
              <br className="hidden sm:block" /> You Actually Need
            </>
          }
        />
        <div className="mt-12">
          <PricingPicker />
        </div>
      </div>
    </section>
  );
}

function WorkTeaser() {
  return (
    <section id="work" className="scroll-mt-20 overflow-hidden bg-gradient-to-b from-cream to-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          title={
            <>
              Videos That Did
              <br className="hidden sm:block" /> The Talking
            </>
          }
          link={{ href: "/work", label: "See all work" }}
        />
      </div>
      <div className="mt-14">
        <WorkCarousel />
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-paper px-3 py-3 sm:px-6 sm:py-6">
      <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(ellipse_at_70%_40%,#3d6b4f_0%,#1f2a24_55%,#161816_100%)] text-white">
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-20">
          <div className="text-center">
            <span className="inline-block rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80">
              How It Works
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              We&apos;re With You From Context File To Final Cut
            </h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-end">
            <ProjectStarter />
            <ol className="grid gap-4 sm:grid-cols-2">
              {process.map((p) => (
                <li key={p.step} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="font-display text-sm font-bold text-green">{p.step}</span>
                  <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <SectionHeading kicker="FAQ" title="Good Questions" />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl border border-ink/10 bg-paper px-6 py-5 open:bg-cream">
              <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-lg font-bold tracking-tight">
                {f.q}
                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-xl leading-none transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const bubbles = [
  "left-[6%] top-[14%] h-16 w-16 from-green-soft to-green/50",
  "left-[2%] top-[38%] h-32 w-32 from-sand to-[#e7c48f]",
  "left-[10%] bottom-[6%] h-40 w-40 from-[#3a3a3a] to-ink",
  "right-[8%] top-[8%] h-36 w-36 from-green/70 to-green-deep",
  "right-[2%] top-[48%] h-28 w-28 from-sand to-cream",
  "right-[12%] bottom-[10%] h-14 w-14 from-green-soft to-green/60",
];

function FinalCta() {
  return (
    <section id="book" className="scroll-mt-20 overflow-hidden bg-cream pb-28">
      <div className="relative py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
          {bubbles.map((b) => (
            <span
              key={b}
              className={`absolute flex items-center justify-center rounded-full bg-gradient-to-br shadow-sm ${b}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-ink">
                <PlayIcon className="ml-0.5 h-3.5 w-3.5" />
              </span>
            </span>
          ))}
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <Chip>Take Action</Chip>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Hand Us The Context. We&apos;ll Ship The Video.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book">Book a call</Button>
            <ArrowLink href="/work">See the work</ArrowLink>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-paper shadow-sm">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <WorkTeaser />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
