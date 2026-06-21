import { CalendarCheck, ShieldCheck, UsersRound } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function DemoPage() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase text-accent">Schedule consultation</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Map your next software platform with CTF</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Tell us about your organization, and we will discuss the architecture, product roadmap, AI opportunities, delivery plan, and launch path.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              ["30-minute discovery call", CalendarCheck],
              ["Module walkthrough for your team", UsersRound],
              ["Security and rollout discussion", ShieldCheck],
            ].map(([label, Icon]) => (
              <div key={String(label)} className="flex items-center gap-3 font-semibold">
                {/* @ts-ignore */}
                <Icon className="h-5 w-5 text-primary" />
                {label as string}
              </div>
            ))}
          </div>
        </div>
        <ContactForm demo />
      </div>
    </section>
  );
}
