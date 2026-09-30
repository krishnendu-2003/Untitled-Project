"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLink } from "@/components/Chrome";
import { extraRevision, plans, site } from "@/content/site";

// Plan picker styled after the reference's "Choose amount" card.
export default function PricingPicker() {
  const [index, setIndex] = useState(Math.max(0, plans.findIndex((p) => p.featured)));
  const [extra, setExtra] = useState(0);
  const plan = plans[index];
  const bookHref = `/book?plan=${encodeURIComponent(plan.name)}${extra ? `&extra=${extra}` : ""}`;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg rounded-[32px] bg-paper p-5 shadow-[0_20px_60px_-30px_rgba(38,38,38,0.35)] sm:p-7">
        <h3 className="text-center font-display text-xl font-bold tracking-tight">Choose your plan</h3>
        <p className="mt-1 text-center text-sm text-ink-soft">{plan.blurb}</p>

        <div role="radiogroup" aria-label="Plan" className="mt-5 grid grid-cols-3 gap-2">
          {plans.map((p, n) => (
            <button
              key={p.name}
              type="button"
              role="radio"
              aria-checked={n === index}
              onClick={() => setIndex(n)}
              className={`relative rounded-full border py-2.5 text-sm font-semibold transition-colors ${
                n === index ? "border-green bg-green text-white" : "border-ink/10 text-ink hover:border-ink/30"
              }`}
            >
              {p.name}
              {p.featured && (
                <span className="absolute -top-2 right-2 rounded-full bg-ink px-1.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                  Top
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-cream px-5 py-4">
          <span className="font-display text-3xl font-extrabold tracking-tight">
            {site.currency}
            {plan.price}
          </span>
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold">{plan.cadence}</span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-ink/10 px-4 py-3">
            <p className="font-display text-2xl font-extrabold text-green">{plan.revisions}</p>
            <p className="text-xs text-ink-soft">revision round{plan.revisions === "1" ? "" : "s"}</p>
          </div>
          <div className="rounded-2xl border border-ink/10 px-4 py-3">
            <p className="font-display text-2xl font-extrabold text-green">{plan.changesPerRevision}</p>
            <p className="text-xs text-ink-soft">changes per round</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-ink/10 px-4 py-3">
          <div>
            <p className="text-sm font-semibold">Extra revision rounds</p>
            <p className="text-xs text-ink-soft">
              {site.currency}
              {extraRevision.price} each
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Remove an extra round"
              disabled={extra === 0}
              onClick={() => setExtra((e) => Math.max(0, e - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-lg disabled:opacity-30"
            >
              −
            </button>
            <span aria-live="polite" className="w-6 text-center font-display text-lg font-bold tabular-nums">
              {extra}
            </span>
            <button
              type="button"
              aria-label="Add an extra round"
              onClick={() => setExtra((e) => Math.min(10, e + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-lg"
            >
              +
            </button>
          </div>
        </div>

        <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-0.5 text-green">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <Link
            href={bookHref}
            className="label flex items-center justify-center rounded-full bg-green py-3.5 text-white transition-colors hover:bg-green-deep"
          >
            Book this plan
          </Link>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`${plan.name} plan`)}`}
            className="label flex items-center justify-center rounded-full bg-green-soft py-3.5 text-green-deep transition-colors hover:bg-green-soft/70"
          >
            Email us
          </a>
        </div>
      </div>
      <div className="mt-8">
        <ArrowLink href="/book">Need a custom quote?</ArrowLink>
      </div>
    </div>
  );
}
