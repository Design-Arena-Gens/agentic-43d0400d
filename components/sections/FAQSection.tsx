"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What if my team skips the tour?",
    answer:
      "No worries. Everyone receives contextual prompts the next time they visit a feature. You can also trigger a new tour session from the Admin console with one click."
  },
  {
    question: "Can we customize the onboarding journey?",
    answer:
      "Yes. Swap steps, add internal resources, and layer in your own use-case examples. The AI coach adapts copy and prompts to reflect your custom content automatically."
  },
  {
    question: "How do we measure adoption?",
    answer:
      "Enable the Insights dashboard to monitor activation, time-to-value, and engagement by role. Export weekly summaries or connect the data warehouse for advanced analysis."
  },
  {
    question: "Is there live support during rollout?",
    answer:
      "Absolutely. Each workspace includes office hours, guided implementation workshops, and priority support channels so you always have backup."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-900 py-24 text-slate-50">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Faq</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Still curious? We have answers.</h2>
          <p className="mt-3 text-base text-slate-300 md:text-lg">
            From rollouts to analytics, here is how teams stay confident throughout onboarding.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-200/60"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-semibold text-white md:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-brand-100">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm text-slate-300 md:text-base">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
