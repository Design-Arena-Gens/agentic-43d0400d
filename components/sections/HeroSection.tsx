import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const highlights = [
  { label: "5 min setup", description: "Complete onboarding in minutes" },
  { label: "Team ready", description: "Invite teammates instantly" },
  { label: "Guided tips", description: "Contextual prompts everywhere" }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 lg:flex lg:items-center lg:gap-12 lg:pb-28 lg:pt-24">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Guided onboarding journey
          </span>
          <h1 className="mt-6 font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            How to use it — go from first click to confident in under 10 minutes.
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            Follow the guided workflow, explore interactive tours, and unlock advanced features
            when you are ready. This playbook keeps your team aligned in every step.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#quick-start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Start with the quick checklist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#guided-tour"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700"
            >
              <PlayCircle className="h-5 w-5" />
              Launch the guided tour
            </Link>
          </div>
        </div>
        <aside className="mt-12 w-full rounded-3xl border border-white/80 bg-white/70 p-6 shadow-xl shadow-brand-900/5 backdrop-blur-md lg:mt-0 lg:w-[28rem]">
          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-100 bg-gradient-to-tr from-white via-white to-slate-50/70 p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-brand-600">{item.label}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
