import { ClipboardCheck, Download, FolderCheck, Users } from "lucide-react";

const tasks = [
  {
    icon: Download,
    title: "Install the browser companion",
    description:
      "Add the Chrome or Edge extension so you can capture ideas and surface in-app prompts anywhere."
  },
  {
    icon: Users,
    title: "Invite your collaborators",
    description:
      "Send invites to stakeholders and assign roles. Everyone receives a tailored onboarding path."
  },
  {
    icon: FolderCheck,
    title: "Connect your data sources",
    description:
      "Securely link Notion, Google Drive, or Slack to unlock contextual insights and AI summarization."
  },
  {
    icon: ClipboardCheck,
    title: "Kick off your first playbook",
    description:
      "Launch the ‘First-Week Momentum’ playbook to trigger automated nudges for your team."
  }
];

export function QuickStartSection() {
  return (
    <section
      id="quick-start"
      className="relative -mt-16 scroll-mt-24 rounded-[3rem] border border-slate-100 bg-white px-6 py-20 shadow-2xl shadow-brand-200/30 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Start here
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-slate-900 md:text-4xl">
              Quick start checklist
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-600 md:text-lg">
              Run through these 4 actions to unlock your personalized workspace and the guided tour.
              Each task includes inline prompts and progress is saved automatically.
            </p>
          </div>
          <span className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
            Average completion 6 min
          </span>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tasks.map((task) => {
            const Icon = task.icon;
            return (
              <div
                key={task.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-lg transition hover:border-brand-200 hover:shadow-brand-200/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 shadow-inner">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{task.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{task.description}</p>
                <span className="mt-auto pt-4 text-sm font-semibold text-brand-600 opacity-0 transition group-hover:opacity-100">
                  View step-by-step instructions →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
