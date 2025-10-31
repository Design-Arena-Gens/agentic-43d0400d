import { CalendarCheck, Globe2, LineChart, MessageSquare, Shuffle } from "lucide-react";

const milestones = [
  {
    label: "Day 1",
    title: "Activate the core workspace",
    description:
      "Import your existing docs, sync calendars, and let the AI map your routines into actionable nudges.",
    icon: Shuffle
  },
  {
    label: "Day 3",
    title: "Launch your first automation",
    description:
      "Use the visual builder to orchestrate a cross-channel sequence and monitor responses in real time.",
    icon: MessageSquare
  },
  {
    label: "Day 7",
    title: "Share insights with stakeholders",
    description:
      "Publish a progress board, collect async feedback, and schedule a recap using built-in templates.",
    icon: CalendarCheck
  },
  {
    label: "Day 14",
    title: "Scale with advanced analytics",
    description:
      "Track adoption trends, surface blockers automatically, and run experiments powered by predictive insights.",
    icon: LineChart
  },
  {
    label: "Day 30",
    title: "Expand to the broader org",
    description:
      "Roll out best-practice playbooks, launch the resource hub, and open external access in one click.",
    icon: Globe2
  }
];

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-100/40 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Momentum roadmap
          </p>
          <h2 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">
            Build momentum across the first month with confidence.
          </h2>
          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Stay on track with the guided roadmap. Each milestone unlocks curated prompts, recommended
            playbooks, and insights you can share with leadership.
          </p>
        </div>
        <div className="relative grid gap-8 md:grid-cols-2">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <div
                key={milestone.label}
                className="group rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-brand-900/5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                  {milestone.label}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{milestone.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
                <span className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-inner">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
