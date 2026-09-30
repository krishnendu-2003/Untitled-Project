"use client";

import { useEffect, useState } from "react";
import { Chip } from "@/components/Chrome";
import { stats } from "@/content/site";

// Rotating promise counter. The ground flips between white and cream on each
// step, with a curved horizon at the bottom, like the reference's impact block.
export default function StatCounter() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % stats.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const light = i % 2 === 0;
  const stat = stats[i];

  return (
    <div className={`relative overflow-hidden pt-24 transition-colors duration-700 ${light ? "bg-paper" : "bg-cream"}`}>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <Chip tone="grey">Why Us</Chip>
        <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Why Pay Us When You Already Have The Context?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          Your team knows the product best. Turning that knowledge into video is what eats tokens, hours and focus.
        </p>
        <div aria-live="polite" className="mt-10 flex min-h-[190px] flex-col items-center sm:min-h-[230px]">
          <p
            key={`v-${i}`}
            className="stat-in font-display text-[7rem] font-extrabold leading-none tracking-[-0.04em] text-green sm:text-[10rem]"
          >
            {stat.value}
          </p>
          <p key={`l-${i}`} className="stat-in mt-3 font-display text-lg font-bold tracking-tight">
            {stat.label}
          </p>
        </div>
        <div className="mt-2 flex gap-2" role="tablist" aria-label="Promises">
          {stats.map((s, n) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              aria-selected={n === i}
              aria-label={s.label}
              onClick={() => setI(n)}
              className={`h-2 rounded-full transition-all ${n === i ? "w-6 bg-green" : "w-2 bg-ink/20"}`}
            />
          ))}
        </div>
      </div>
      {/* Curved horizon into the section below. */}
      <div
        aria-hidden
        className="relative -mb-px mt-12 h-24 w-full rounded-t-[50%] bg-sand sm:h-36"
      />
    </div>
  );
}
