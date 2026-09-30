"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { booking, site } from "@/content/site";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatSlot(slot: string) {
  const [h, m] = slot.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
}

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function CalendlyEmbed({ url }: { url: string }) {
  const src = `${url}${url.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=ffffff&text_color=262626&primary_color=27ba57`;
  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div className="calendly-inline-widget h-[700px] w-full min-w-[320px]" data-url={src} />
    </>
  );
}

function Scheduler() {
  const [today, setToday] = useState<Date | null>(null);
  const [month, setMonth] = useState<Date | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [step, setStep] = useState<"pick" | "details" | "done">("pick");
  const [prefill, setPrefill] = useState("");

  // Dates depend on the visitor's clock, so compute them after mount.
  useEffect(() => {
    // Carry choices made elsewhere on the site (plan, service, stage) into the notes.
    const q = new URLSearchParams(window.location.search);
    const lines = [
      q.get("plan") && `Plan: ${q.get("plan")}${q.get("extra") ? ` + ${q.get("extra")} extra revision rounds` : ""}`,
      q.get("service") && `Service: ${q.get("service")}`,
      q.get("stage") && `Stage: ${q.get("stage")}`,
      q.get("context") && `Context file: ${q.get("context")}`,
    ].filter(Boolean);
    setPrefill(lines.join("\n"));
    const now = startOfDay(new Date());
    // Open on the month of the first bookable day, so month-end visitors don't land on an empty month.
    let first = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    for (let i = 0; i < 7 && !booking.workDays.includes(first.getDay()); i++) {
      first = new Date(first.getFullYear(), first.getMonth(), first.getDate() + 1);
    }
    setToday(now);
    setMonth(new Date(first.getFullYear(), first.getMonth(), 1));
  }, []);

  const lastDay = useMemo(
    () => (today ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + booking.daysAhead) : null),
    [today],
  );

  const isAvailable = (d: Date) =>
    !!today && !!lastDay && d > today && d <= lastDay && booking.workDays.includes(d.getDay());

  if (!today || !month || !lastDay) {
    return <div className="h-[520px]" aria-busy="true" />;
  }

  const firstWeekday = month.getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)),
  ];
  const canGoBack = month > new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoForward = new Date(month.getFullYear(), month.getMonth() + 1, 1) <= lastDay;

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!date || !slot) return;
    const form = new FormData(e.currentTarget);
    const when = `${formatDate(date)}, ${formatSlot(slot)} ${booking.timezone}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Company: ${form.get("company") || "-"}`,
      `Requested slot: ${when}`,
      "",
      `About the project: ${form.get("notes") || "-"}`,
    ].join("\n");
    const subject = `${booking.title} request: ${when}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStep("done");
  }

  const summary = (
    <div className="space-y-3 text-sm text-ink-soft">
      <p className="text-xs font-medium uppercase tracking-[0.2em]">{booking.host}</p>
      <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink">{booking.title}</h3>
      <p className="flex items-center gap-2">
        <span aria-hidden>◷</span> {booking.durationMinutes} min
      </p>
      <p className="flex items-center gap-2">
        <span aria-hidden>▶</span> {booking.location}
      </p>
      {date && slot && (
        <p className="flex items-start gap-2 font-medium text-green-deep">
          <span aria-hidden>▣</span>
          <span>
            {formatSlot(slot)}, {formatDate(date)}
          </span>
        </p>
      )}
      <p className="flex items-center gap-2">
        <span aria-hidden>◎</span> {booking.timezone}
      </p>
      <p className="pt-2">{booking.description}</p>
    </div>
  );

  if (step === "done" && date && slot) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-soft text-2xl text-green-deep">
          ✓
        </span>
        <h3 className="font-display text-3xl font-extrabold tracking-tight">Almost booked</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Your email app should have opened with the request for{" "}
          <strong className="text-ink">
            {formatSlot(slot)}, {formatDate(date)}
          </strong>
          . Send it and we will reply with a calendar invite. If nothing opened, email us at{" "}
          <span className="font-medium text-ink">{site.email}</span>.
        </p>
        <button
          type="button"
          onClick={() => {
            setStep("pick");
            setSlot(null);
          }}
          className="text-sm font-medium underline underline-offset-4"
        >
          Pick another time
        </button>
      </div>
    );
  }

  return (
    <div className="grid min-h-[520px] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)]">
      <aside className="border-b border-line p-6 md:border-b-0 md:border-r">{summary}</aside>

      {step === "details" && date && slot ? (
        <form onSubmit={submit} className="space-y-4 p-6">
          <button
            type="button"
            onClick={() => setStep("pick")}
            className="text-sm text-ink-soft hover:text-ink"
          >
            ← Back
          </button>
          <h4 className="font-display text-xl font-bold tracking-tight">Enter details</h4>
          {[
            { id: "name", label: "Name", type: "text", required: true },
            { id: "email", label: "Email", type: "email", required: true },
            { id: "company", label: "Company", type: "text", required: false },
          ].map((f) => (
            <label key={f.id} htmlFor={`booking-${f.id}`} className="block text-sm font-medium">
              {f.label}
              {f.required && " *"}
              <input
                id={`booking-${f.id}`}
                name={f.id}
                type={f.type}
                required={f.required}
                className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 font-normal outline-none focus:border-green focus:ring-2 focus:ring-green-soft"
              />
            </label>
          ))}
          <label htmlFor="booking-notes" className="block text-sm font-medium">
            What should the video do? Links to context files welcome.
            <textarea
              id="booking-notes"
              defaultValue={prefill}
              name="notes"
              rows={3}
              className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 font-normal outline-none focus:border-green focus:ring-2 focus:ring-green-soft"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-green px-6 py-3 text-sm font-semibold text-white hover:bg-green-deep"
          >
            Schedule call
          </button>
        </form>
      ) : (
        <div className="grid gap-6 p-6 lg:grid-cols-[minmax(0,1fr)_10rem]">
          <div>
            <h4 className="font-display text-xl font-bold tracking-tight">Select a date and time</h4>
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                disabled={!canGoBack}
                onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
                className="h-9 w-9 rounded-full text-lg hover:bg-green-soft disabled:opacity-30 disabled:hover:bg-transparent"
              >
                ‹
              </button>
              <p className="text-sm font-medium">
                {month.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </p>
              <button
                type="button"
                aria-label="Next month"
                disabled={!canGoForward}
                onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
                className="h-9 w-9 rounded-full text-lg hover:bg-green-soft disabled:opacity-30 disabled:hover:bg-transparent"
              >
                ›
              </button>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wider text-ink-soft">
              {WEEKDAYS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1">
              {cells.map((d, i) => {
                if (!d) return <span key={`blank-${i}`} />;
                const available = isAvailable(d);
                const selected = !!date && sameDay(d, date);
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    disabled={!available}
                    aria-pressed={selected}
                    aria-label={formatDate(d)}
                    onClick={() => {
                      setDate(d);
                      setSlot(null);
                    }}
                    className={`mx-auto flex aspect-square w-full max-w-11 items-center justify-center rounded-full text-sm transition-colors ${
                      selected
                        ? "bg-green font-semibold text-white"
                        : available
                          ? "bg-green-soft font-semibold text-green-deep hover:bg-green/25"
                          : "text-ink-soft/40"
                    } ${sameDay(d, today) && !selected ? "underline underline-offset-4" : ""}`}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            {date ? (
              <>
                <p className="text-sm font-medium">
                  {date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" })}
                </p>
                <div className="mt-3 flex max-h-[360px] flex-col gap-2 overflow-y-auto pr-1">
                  {booking.slots.map((s) =>
                    slot === s ? (
                      <div key={s} className="grid grid-cols-2 gap-1.5">
                        <span className="rounded-lg bg-ink/75 py-2.5 text-center text-sm font-medium text-white">
                          {formatSlot(s)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setStep("details")}
                          className="rounded-lg bg-green py-2.5 text-sm font-medium text-white"
                        >
                          Next
                        </button>
                      </div>
                    ) : (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className="rounded-lg border border-green/40 py-2.5 text-sm font-semibold text-green-deep hover:border-green"
                      >
                        {formatSlot(s)}
                      </button>
                    ),
                  )}
                </div>
              </>
            ) : (
              <p className="text-sm text-ink-soft">Pick a highlighted date to see open times.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BookingWidget() {
  return site.bookingUrl ? <CalendlyEmbed url={site.bookingUrl} /> : <Scheduler />;
}
