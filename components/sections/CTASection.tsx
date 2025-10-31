import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-brand-200/60 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 px-8 py-16 text-white shadow-2xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">You are ready</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Launch your first playbook and invite the team today.
            </h2>
            <p className="mt-3 text-base text-white/80 md:text-lg">
              The guided onboarding is ready when you are. Kick off where you left, capture insights,
              and keep momentum going with automated nudges.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="#quick-start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-600 shadow-lg shadow-black/20 transition hover:bg-slate-100"
            >
              Run the quick start
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Talk with rollout coach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
