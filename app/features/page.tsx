import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { moduleDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Create Future Technologies software engineering services and platform capabilities.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase text-accent">Platform capabilities</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">Software systems engineered for scale</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              CTF gives organizations the engineering capacity to design, build, deploy, and support serious software products across industries.
            </p>
          </div>
          <DashboardMockup title="Module Overview" />
        </div>
      </section>
      <AnimatedSection className="py-20">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {moduleDetails.map(({ title, icon: Icon, benefit }) => (
            <article key={title} className="glass rounded-md p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-blue-50 text-primary dark:bg-blue-500/10">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{benefit}</p>
              <div className="mt-6 rounded-md border border-slate-200 p-4 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Workflow
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600 dark:text-slate-300">
                  <span className="rounded-md bg-slate-100 px-2 py-3 dark:bg-white/10">Capture</span>
                  <span className="rounded-md bg-blue-50 px-2 py-3 text-primary dark:bg-blue-500/10">Approve</span>
                  <span className="rounded-md bg-cyan-50 px-2 py-3 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200">Report</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
