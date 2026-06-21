import {
  ArrowRight,
  Cpu,
  Globe2,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  clientLogos,
  industries,
  metrics,
  processSteps,
  products,
  qualitySignals,
  reasons,
  services,
  techStack,
  testimonials,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="subtle-grid relative overflow-hidden bg-black py-20 text-white lg:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
        <div className="section-shell">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-200 shadow-[0_0_28px_rgba(6,182,212,0.2)]">
              <Sparkles className="h-4 w-4" />
              Engineering the Future Through Software
            </div>
            <h1 className="text-4xl font-black text-white sm:text-6xl lg:text-7xl">
              Global software engineering for companies building what comes next.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Create Future Technologies designs, builds, and scales enterprise platforms, AI systems, cloud infrastructure, mobile applications, and digital products for ambitious organizations.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact">Schedule Consultation</ButtonLink>
              <ButtonLink href="#products" variant="secondary">
                Explore Products
              </ButtonLink>
            </div>
          </div>
          <div className="mt-16">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <AnimatedSection className="border-y border-white/10 bg-neutral-950 py-14 text-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-cyan-300">Trusted by future-focused teams</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Placeholder partner marks and operating metrics for a company built to serve enterprise, startup, public-sector, and education teams.
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

      <AnimatedSection id="services" className="bg-black py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Services" title="Software services for the modern enterprise" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="products" className="bg-neutral-950 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeader align="left" eyebrow="Products" title="The Atlas portfolio is one part of a broader software company" />
            <p className="max-w-2xl text-sm leading-6 text-slate-400 lg:justify-self-end">
              Atlas Portal remains a flagship education product, but CTF is structured as a full software solutions company with products for operations, revenue, intelligence, and AI automation.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {products.map((product) => (
              <article key={product.name} className="rounded-md border border-white/10 bg-black p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <p className="text-xs font-bold uppercase text-cyan-300">{product.signal}</p>
                <h3 className="mt-4 text-xl font-black text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{product.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-cyan-200">
                  Product system <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="industries" className="bg-black py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Industries" title="Built for organizations where software is mission-critical" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {industries.map(({ title, icon: Icon }) => (
              <IconTile key={title} title={title} icon={Icon} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="process" className="bg-neutral-950 py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Development process" title="From strategy to production with disciplined execution" />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-md border border-white/10 bg-black p-5">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-md border border-cyan-300/30 bg-cyan-400/10 text-sm font-black text-cyan-200">
                  {index + 1}
                </div>
                <h3 className="font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-black py-20 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Technology stack" title="Modern tools for secure, scalable products" />
            <div className="mt-8 grid gap-3">
              {qualitySignals.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                  <Icon className="h-5 w-5 text-cyan-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {techStack.map((tool) => (
              <div key={tool} className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm font-black text-white">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-neutral-950 py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Why choose CTF" title="Enterprise-grade thinking with product-speed execution" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {reasons.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-md border border-white/10 bg-black p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-blue-500/10 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-black py-20 text-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Enterprise UI" title="Animated statistics, secure architecture, and operational clarity" />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Signal icon={LockKeyhole} label="Secure by design" />
              <Signal icon={Cpu} label="AI-ready systems" />
              <Signal icon={Globe2} label="Global delivery" />
            </div>
          </div>
          <DashboardMockup title="Atlas Portfolio Intelligence" />
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

      <CtaBanner />
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

function IconTile({ title, icon: Icon }: { title: string; icon: LucideIcon }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-md bg-cyan-400/10 text-cyan-200">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-sm font-black text-white">{title}</h3>
    </article>
  );
}

function Signal({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
      <Icon className="h-5 w-5 text-cyan-300" />
      <p className="mt-3 text-sm font-bold text-slate-200">{label}</p>
    </div>
  );
}
