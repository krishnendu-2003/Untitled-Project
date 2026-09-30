"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { services } from "@/content/site";

const stages = ["Idea", "Script", "Footage"];
const field = "mt-1.5 w-full rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-green";

// Glass form over the dark panel, like the reference's "What's going on?" card.
// It carries the answers into the booking page so the call starts with context.
export default function ProjectStarter() {
  const router = useRouter();
  const [stage, setStage] = useState(stages[0]);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const params = new URLSearchParams({
      service: String(form.get("service")),
      stage,
    });
    const link = String(form.get("link") || "").trim();
    if (link) params.set("context", link);
    router.push(`/book?${params}`);
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md"
    >
      <p className="font-display text-lg font-bold">What do you need?</p>
      <label htmlFor="starter-service" className="mt-4 block text-xs text-white/70">
        Service
        <select id="starter-service" name="service" className={`${field} appearance-none`}>
          {services.map((s) => (
            <option key={s.id} value={s.title} className="text-ink">
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="starter-link" className="mt-4 block text-xs text-white/70">
        Link to your context file (optional)
        <input id="starter-link" name="link" type="url" placeholder="https://" className={field} />
      </label>
      <p className="mt-4 text-xs text-white/70">Where are you at?</p>
      <div role="radiogroup" aria-label="Stage" className="mt-1.5 grid grid-cols-3 gap-1 rounded-full bg-white/10 p-1">
        {stages.map((s) => (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={stage === s}
            onClick={() => setStage(s)}
            className={`rounded-full py-2 text-xs font-semibold transition-colors ${
              stage === s ? "bg-white/25 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <button
        type="submit"
        className="label mt-6 w-full rounded-full bg-green py-3.5 text-white transition-colors hover:bg-green-deep"
      >
        Pick a call time
      </button>
    </form>
  );
}
