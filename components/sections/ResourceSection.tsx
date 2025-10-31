import Link from "next/link";
import { BookOpen, BrainCircuit, Headset, Kanban, ShieldCheck } from "lucide-react";

const resources = [
  {
    title: "Playbook library",
    description: "Launch ready-to-use playbooks curated by role, outcome, and industry.",
    href: "#",
    icon: Kanban,
    cta: "Browse templates"
  },
  {
    title: "AI prompt studio",
    description: "Design prompts, share collections, and automate answers across channels.",
    href: "#",
    icon: BrainCircuit,
    cta: "Open studio"
  },
  {
    title: "Security trust center",
    description: "Review compliance docs, data handling practices, and security controls.",
    href: "#",
    icon: ShieldCheck,
    cta: "View policies"
  },
  {
    title: "Learning hub",
    description: "Join live workshops, watch expert classes, and explore product deep dives.",
    href: "#",
    icon: BookOpen,
    cta: "See upcoming events"
  },
  {
    title: "Priority support",
    description: "Get 24/7 access to specialists, live office hours, and rollout partners.",
    href: "#",
    icon: Headset,
    cta: "Contact support"
  }
];

export function ResourceSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">Resources</p>
          <h2 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">
            Explore the resource hub.
          </h2>
          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Everything you need to guide your rollout, train your team, and become an expert power
            user is just a click away.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.title}
                href={resource.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-brand-200/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-inner">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-brand-600 transition group-hover:text-brand-700">
                  {resource.cta} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
