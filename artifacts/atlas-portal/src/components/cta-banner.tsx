import { ButtonLink } from "@/components/button-link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white dark:bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="section-shell text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-accent">Build with CTF</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black sm:text-5xl">
          Let's Build the Future Together
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Partner with a software engineering team that can design, build, launch, and scale the systems your organization needs next.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact">Schedule Consultation</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Start Your Project</ButtonLink>
        </div>
      </div>
    </section>
  );
}
