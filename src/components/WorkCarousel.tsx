"use client";

import { useState } from "react";
import { toneBg } from "@/components/Chrome";
import { references } from "@/content/site";

function Play() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l10.5-6.5z" />
    </svg>
  );
}

// Center card in colour with its details below; neighbours in greyscale,
// like the reference's "Inspiring Journeys" row.
export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const n = references.length;
  const at = (offset: number) => references[(active + offset + n) % n];
  const offsets = [-2, -1, 0, 1, 2];

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-end justify-center gap-3 overflow-hidden px-4 sm:gap-4">
        {offsets.map((o) => {
          const r = at(o);
          const center = o === 0;
          return (
            <button
              key={`${o}-${r.title}`}
              type="button"
              onClick={() => setActive((active + o + n) % n)}
              aria-label={center ? r.title : `Show ${r.title}`}
              className={`relative shrink-0 overflow-hidden rounded-[28px] transition-all duration-500 ${
                center
                  ? "h-56 w-72 sm:h-72 sm:w-96"
                  : `h-44 w-44 grayscale sm:h-56 sm:w-60 ${Math.abs(o) === 2 ? "hidden md:block" : "hidden sm:block"}`
              } ${toneBg[r.tone]}`}
            >
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-ink">
                {r.category}
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-ink shadow-sm">
                  <Play />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <a
        href={at(0).href}
        className="mt-4 w-72 rounded-3xl border border-ink/10 bg-paper p-5 text-left shadow-sm transition-colors hover:border-green sm:w-96"
      >
        <p className="font-display text-lg font-bold tracking-tight">{at(0).title}</p>
        <p className="mt-1 text-sm text-ink-soft">
          {at(0).client} · {at(0).category}
        </p>
        <div className="mt-4 h-1.5 rounded-full bg-ink/10">
          <div
            className="h-1.5 rounded-full bg-green transition-all duration-500"
            style={{ width: `${((active + 1) / n) * 100}%` }}
          />
        </div>
        <p className="mt-2 flex justify-between text-xs font-semibold">
          <span>Watch</span>
          <span className="tabular-nums">
            {active + 1} / {n}
          </span>
        </p>
      </a>

      <div className="mt-6 flex gap-2">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => setActive((active - 1 + n) % n)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-ink/40"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => setActive((active + 1) % n)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-green text-white transition-colors hover:bg-green-deep"
        >
          →
        </button>
      </div>
    </div>
  );
}
