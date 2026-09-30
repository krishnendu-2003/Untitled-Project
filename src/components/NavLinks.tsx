"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

// Items that are their own page (not a home-page section) render as pill buttons.
export function isPage(href: string) {
  return !href.includes("#");
}

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
      {nav.map((item) => {
        const active = pathname === item.href;
        return isPage(item.href) ? (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full border px-4 py-1.5 font-medium transition-colors ${
              active ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
