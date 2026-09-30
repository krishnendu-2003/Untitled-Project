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
    <nav aria-label="Main" className="hidden items-center gap-6 text-ink lg:flex">
      {nav.map((item) => {
        const active = pathname === item.href;
        return isPage(item.href) ? (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`label rounded-full px-4 py-2 transition-colors ${
              active ? "bg-green text-white" : "bg-green-soft text-green-deep hover:bg-green hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ) : (
          <Link key={item.href} href={item.href} className="label hover:text-green-deep">
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
