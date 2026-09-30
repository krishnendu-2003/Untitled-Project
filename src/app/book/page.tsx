import type { Metadata } from "next";
import BookingWidget from "@/components/BookingWidget";
import { Chip, Footer, Header } from "@/components/Chrome";
import { booking, site } from "@/content/site";

export const metadata: Metadata = {
  title: `Book a call | ${site.name}`,
  description: booking.description,
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-cream to-sand px-4 pb-24 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Chip>Book a call</Chip>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1] tracking-[-0.03em] sm:text-7xl">
              Pick A Time
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              {booking.durationMinutes} minutes, free. Bring your context files and we will leave you with a plan and a
              fixed quote.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[28px] border border-ink/10 bg-paper shadow-[0_20px_60px_-30px_rgba(38,38,38,0.35)]">
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
