import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { IndustryCard } from "@/components/industry-card";
import { PortfolioSection } from "@/components/portfolio-section";
import { TimelineSection } from "@/components/timeline-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { TechSection } from "@/components/tech-section";
import { ProcessSection } from "@/components/process-section";
import { FinalCta } from "@/components/final-cta";
import { AnimatedSection } from "@/components/animated-section";
import { TestimonialCard } from "@/components/testimonial-card";
import { clientLogos, metrics, services, industries, testimonials, reasons, getIcon } from "@/lib/data";
import { LockKeyhole, Cpu, Globe as Globe2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AnimatedSection className="border-y border-white/10 bg-neutral-950 py-14 text-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-300">Trusted by future-focused teams</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Partner marks and operating metrics for a company built to serve enterprise, startup, public-sector, and education teams.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((logo) => (
                <div key={logo} className="grid h-16 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-sm font-black text-slate-300">
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-cyan-300/15 bg-cyan-400/[0.04] p-5">
                <div className="text-3xl font-black text-white">{metric.value}</div>
                <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section id="services" className="bg-black py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-cyan-300">Services</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">What We Build</h2>
            <p className="mt-4 text-slate-400">
              End-to-end software capabilities for organizations that demand quality.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      <section id="industries" className="bg-black py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-cyan-300">Industries</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">Industries We Serve</h2>
            <p className="mt-4 text-slate-400">
              Deep domain expertise across sectors where software is mission-critical.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} {...industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />

      <ExpertiseSection />

      <TechSection />

      <ProcessSection />

      <AnimatedSection className="bg-neutral-950 py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Why choose CTF" title="Enterprise-grade thinking with product-speed execution" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {reasons.map(({ title, text, icon }) => {
              const Icon = getIcon(icon);
              return (
                <article key={title} className="rounded-md border border-white/10 bg-black p-6">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-blue-500/10 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
<AnimatedSection className="bg-black py-20 text-white">
        {/* Changed grid layout to a max-w-3xl centered container */}
        <div className="section-shell mx-auto max-w-3xl text-center">
          <div>
            <SectionHeader align="center" eyebrow="Enterprise UI" title="Animated statistics, secure architecture, and operational clarity" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
              <Signal icon={LockKeyhole} label="Secure by design" />
              <Signal icon={Cpu} label="AI-ready systems" />
              <Signal icon={Globe2} label="Global delivery" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-neutral-950 py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Testimonials" title="Trusted by leaders building serious software" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <FinalCta />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-bold uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">{title}</h2>
    </div>
  );
}

function Signal({ icon: Icon, label }: { icon: typeof LockKeyhole; label: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
      <Icon className="h-5 w-5 text-cyan-300" />
      <p className="mt-3 text-sm font-bold text-slate-200">{label}</p>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg rounded-lg border border-cyan-300/20 bg-neutral-950 p-3 shadow-[0_28px_90px_-36px_rgba(6,182,212,0.5)]">
      <div className="absolute inset-0 rounded-lg bg-[linear-gradient(110deg,rgba(37,99,235,0.18),transparent_34%,rgba(6,182,212,0.12)_65%,transparent)]" />
      <div className="relative rounded-md border border-white/10 bg-black/90 p-4">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Create Future Technologies</p>
            <h3 className="text-base font-bold text-white">Atlas Portfolio Intelligence</h3>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="h-24 rounded-md border border-white/10 bg-white/[0.04]" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-md border border-white/10 bg-white/[0.04]" />
            <div className="h-16 rounded-md border border-white/10 bg-white/[0.04]" />
            <div className="h-16 rounded-md border border-white/10 bg-white/[0.04]" />
          </div>
          <div className="h-20 rounded-md border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}
