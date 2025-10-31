import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { StepSection } from "@/components/sections/StepSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ResourceSection } from "@/components/sections/ResourceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How to Use It | Guided Onboarding",
  description:
    "A guided experience that shows how to start, explore, and master your workspace in minutes."
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-slate-50">
      <HeroSection />
      <QuickStartSection />
      <StepSection />
      <ExperienceSection />
      <ResourceSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
