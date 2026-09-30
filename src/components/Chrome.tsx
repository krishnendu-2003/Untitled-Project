import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/components/NavLinks";
import { nav, site, socials, type Reference } from "@/content/site";

export const toneBg: Record<Reference["tone"], string> = {
  green: "bg-gradient-to-br from-green-soft to-green/60",
  sand: "bg-gradient-to-br from-sand to-[#e9c99a]",
  cream: "bg-gradient-to-br from-cream to-sand",
  ink: "bg-gradient-to-br from-[#3a3a3a] to-ink",
};

export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="4.5" width="14" height="11" rx="2" />
      <path d="m3.5 6 6.5 5 6.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-display text-sm font-extrabold uppercase tracking-tight ${className}`}>
      Untitled Project
    </Link>
  );
}

const buttonStyles = {
  green: "bg-green text-white hover:bg-green-deep",
  outline: "border border-ink/15 bg-white/40 text-ink hover:border-ink/40",
  dark: "bg-ink text-white hover:bg-ink/85",
  soft: "bg-green-soft text-green-deep hover:bg-green-soft/70",
};

export function Button({
  href,
  children,
  variant = "green",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`label inline-flex items-center justify-center rounded-full px-6 py-3 transition-colors ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

// "LEARN MORE ↗" text link with the arrow in its own outlined circle.
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="label group inline-flex items-center gap-3 text-ink">
      {children}
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-green group-hover:bg-green group-hover:text-white">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function Chip({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "grey" }) {
  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${
        tone === "green" ? "bg-green-soft text-green-deep" : "bg-ink/5 text-ink"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  link,
  body,
}: {
  kicker?: string;
  title: React.ReactNode;
  link?: { href: string; label: string };
  body?: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      {kicker && <Chip>{kicker}</Chip>}
      <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-5 max-w-xl text-lg text-ink-soft">{body}</p>}
      {link && (
        <div className="mt-6">
          <ArrowLink href={link.href}>{link.label}</ArrowLink>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Wordmark />
        <NavLinks />
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.email}`}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink/40 sm:flex"
          >
            <MailIcon />
          </a>
          <span className="hidden sm:inline-flex">
            <Button href="/book" variant="outline">
              Book a call
            </Button>
          </span>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ label }: { label: string }) {
  const paths: Record<string, React.ReactNode> = {
    X: <path d="M4 4l12 12M16 4 4 16" strokeLinecap="round" />,
    YouTube: (
      <>
        <rect x="2.5" y="5" width="15" height="10" rx="3" />
        <path d="m8.5 8 4 2-4 2z" fill="currentColor" />
      </>
    ),
    LinkedIn: (
      <>
        <rect x="3" y="3" width="14" height="14" rx="2.5" />
        <path d="M7 9v4.5M7 6.5v.01M10 13.5V9m0 2c0-1.2.9-2 2-2s2 .8 2 2v2.5" strokeLinecap="round" />
      </>
    ),
    Instagram: (
      <>
        <rect x="3" y="3" width="14" height="14" rx="4" />
        <circle cx="10" cy="10" r="3.2" />
        <path d="M14 6v.01" strokeLinecap="round" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      {paths[label]}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cream to-sand">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-10 pt-20 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col justify-between gap-10">
          <Wordmark className="text-2xl" />
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink/40"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-ink-soft">Quick links</p>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-3">
            <Link href="/" className="label hover:text-green-deep">
              Home
            </Link>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="label hover:text-green-deep">
                {item.label}
              </Link>
            ))}
            <Link href="/book" className="label hover:text-green-deep">
              Book a call
            </Link>
          </nav>
        </div>
        <div>
          <p className="text-xs text-ink-soft">Contact us</p>
          <a href={`mailto:${site.email}`} className="label mt-4 flex items-center gap-3 hover:text-green-deep">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15">
              <MailIcon />
            </span>
            Send email
          </a>
          <Link href="/book" className="label mt-3 flex items-center gap-3 hover:text-green-deep">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15">
              <ArrowIcon />
            </span>
            Book a call
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 pb-8 sm:px-8">
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} {site.name} | All rights reserved
        </p>
        <a href="#top" className="label inline-flex items-center gap-3">
          Back to top
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15">↑</span>
        </a>
      </div>
    </footer>
  );
}
