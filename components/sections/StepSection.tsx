"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Compass, Layers, Play } from "lucide-react";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  duration: string;
  actions: { label: string; description: string }[];
  proTip: string;
};

const icons = [Compass, Play, Layers, CheckCircle2];

const steps: Step[] = [
  {
    id: 1,
    title: "Kick-off briefing",
    subtitle: "Gather context & tailor your workspace",
    icon: Compass,
    duration: "2 min",
    actions: [
      { label: "Pick a template", description: "Choose from product, marketing, or ops packs." },
      { label: "Set your goals", description: "Add 1-2 outcomes to personalize prompts." },
      {
        label: "Invite teammates",
        description: "Send collaborative invites directly from the welcome dialog."
      }
    ],
    proTip: "Use the AI setup assistant to auto-configure workflows from existing docs."
  },
  {
    id: 2,
    title: "Guided tour",
    subtitle: "Learn the essentials with the spotlight coach",
    icon: Play,
    duration: "3 min",
    actions: [
      {
        label: "Follow the tour",
        description: "Walk through key views with progressive disclosure that adapts to you."
      },
      {
        label: "Complete micro-tasks",
        description: "Finish interactive challenges to unlock contextual best practices."
      },
      {
        label: "Capture notes",
        description: "Keep discoveries in the scratchpad that auto-syncs to your docs."
      }
    ],
    proTip: "Pause anytime — the tour resumes exactly where you left off."
  },
  {
    id: 3,
    title: "Launch workflows",
    subtitle: "Ship your first automated workflow live",
    icon: Layers,
    duration: "4 min",
    actions: [
      {
        label: "Drag & connect",
        description: "Use the canvas to build flows with AI-suggested connectors."
      },
      {
        label: "Generate test data",
        description: "Leverage sandbox personas to validate how outcomes look."
      },
      {
        label: "Enable channels",
        description: "Publish to email, Slack, or webhooks with one toggle."
      }
    ],
    proTip: "Switch to split view to monitor metrics while editing automations."
  },
  {
    id: 4,
    title: "Celebrate momentum",
    subtitle: "Share wins & schedule your next milestone",
    icon: CheckCircle2,
    duration: "1 min",
    actions: [
      {
        label: "Review highlights",
        description: "Snapshot key metrics to share in your kickoff recap."
      },
      {
        label: "Automate reporting",
        description: "Turn any dashboard into a recurring digest with one click."
      },
      {
        label: "Plan next sprint",
        description: "Lock in your next playbook in the outcomes planner."
      }
    ],
    proTip: "Record quick video walkthroughs directly from the success modal."
  }
];

export function StepSection() {
  const [activeStep, setActiveStep] = useState(steps[0]?.id ?? 1);

  const selected = useMemo(
    () => steps.find((step) => step.id === activeStep) ?? steps[0],
    [activeStep]
  );

  return (
    <section id="guided-tour" className="relative overflow-hidden bg-slate-900 py-20 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.5),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Interactive guidance
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Follow the guided path, or jump directly to what you need next.
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Each milestone includes micro-actions, on-screen prompts, and automatically generated
            context so your team can self‑serve without waiting for a live training.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon ?? icons[idx % icons.length];
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-start gap-4 rounded-3xl border px-5 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                    isActive
                      ? "border-brand-300 bg-white/10 shadow-lg"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border ${
                      isActive
                        ? "border-brand-300 bg-brand-500/20 text-brand-100"
                        : "border-white/20 bg-white/5 text-slate-200"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="flex items-center gap-3">
                      <span className="font-semibold text-white">{step.title}</span>
                      <span className="text-xs font-medium uppercase tracking-wide text-brand-200">
                        {step.duration}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-slate-300">{step.subtitle}</span>
                  </span>
                  <ArrowRight
                    className={`ml-auto mt-2 h-4 w-4 flex-shrink-0 ${
                      isActive ? "text-brand-200" : "text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="glass relative rounded-[2.5rem] border-white/20 bg-slate-950/60 p-8 shadow-2xl">
          <div className="absolute -top-12 right-8 hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 lg:block">
            Step {selected?.id} of {steps.length}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            {selected?.duration} focus block
          </p>
          <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">{selected?.title}</h3>
          <p className="mt-2 text-sm text-slate-300 md:text-base">{selected?.subtitle}</p>
          <div className="mt-6 space-y-4">
            {selected?.actions.map((action) => (
              <div
                key={action.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-brand-300/60"
              >
                <p className="text-sm font-semibold text-white">{action.label}</p>
                <p className="mt-2 text-sm text-slate-300">{action.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-brand-300/40 bg-brand-500/10 p-5 text-sm text-brand-100">
            <p className="font-semibold uppercase tracking-wide text-brand-100/80">Pro tip</p>
            <p className="mt-2 text-brand-50">{selected?.proTip}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
