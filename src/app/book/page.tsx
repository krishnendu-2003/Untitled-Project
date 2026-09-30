import type { Metadata } from "next";
import BookingWidget from "@/components/BookingWidget";
import { Footer, Header } from "@/components/Chrome";
import { booking, site } from "@/content/site";

export const metadata: Metadata = {
  title: `Book a call | ${site.name}`,
  description: booking.description,
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[420px] max-w-5xl rounded-full bg-gradient-to-r from-lavender via-peach to-sage opacity-50 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">Book a call</p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] sm:text-7xl">
              Pick a <em className="text-lavender-deep">time</em>
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              {booking.durationMinutes} minutes, free. Bring your context files and we will leave you with a plan and a
              fixed quote.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
            <BookingWidget />
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            Prefer email?{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
