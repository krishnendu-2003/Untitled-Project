"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { nav } from "@/content/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation, lock page scroll while open, close on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/70"
      >
        <span
          className={`absolute h-0.5 w-5 rounded bg-ink transition-transform ${open ? "rotate-45" : "-translate-y-1.5"}`}
        />
        <span className={`absolute h-0.5 w-5 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`absolute h-0.5 w-5 rounded bg-ink transition-transform ${open ? "-rotate-45" : "translate-y-1.5"}`}
        />
      </button>

      {/* Portal to <body>: the header's backdrop-blur would otherwise clip a fixed child. */}
      {open &&
        createPortal(
          <div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[76px] z-50 lg:hidden flex flex-col overflow-y-auto border-t border-line bg-cream px-4 pb-10 pt-4"
          >
            <nav aria-label="Mobile" className="flex flex-col divide-y divide-line">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-4 font-display text-3xl font-extrabold tracking-tight ${
                      active ? "text-green-deep" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <span aria-hidden className="text-xl text-ink-soft">
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-green px-6 py-4 text-base font-semibold text-white"
            >
              Book a call
            </Link>
          </div>,
          document.body,
        )}
    </div>
  );
}
