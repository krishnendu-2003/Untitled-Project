import Link from "next/link";
import { nav, site } from "@/content/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-serif text-2xl leading-none tracking-tight ${className}`}>
      Untitled <em>Project</em>
    </Link>
  );
}

export function Button({
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
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Wordmark />
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/book">Book a call</Button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <Wordmark className="text-3xl" />
        <nav className="flex flex-wrap gap-6 text-sm text-ink-soft">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-ink-soft">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
