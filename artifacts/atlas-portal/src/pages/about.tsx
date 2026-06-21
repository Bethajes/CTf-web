import { Compass, Rocket, Target, UserRound } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";

export default function AboutPage() {
  return (
    <>
      <section className="subtle-grid py-20">
        <div className="section-shell max-w-4xl text-center">
          <p className="text-sm font-bold uppercase text-accent">Our story</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Built to engineer the future through software</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Create Future Technologies builds enterprise platforms, AI systems, cloud products, and the Atlas software portfolio for organizations ready to operate at a higher level.
          </p>
        </div>
      </section>
      <AnimatedSection className="py-20">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <StoryCard icon={Target} title="Mission" text="Help companies move faster with secure, scalable, AI-ready software that solves real operational problems." />
          <StoryCard icon={Compass} title="Vision" text="Become a trusted global engineering partner for organizations building the digital infrastructure of the future." />
          <StoryCard icon={UserRound} title="Founder Section" text="CTF is led by builders who combine product taste, engineering discipline, and deep attention to business outcomes." />
          <StoryCard icon={Rocket} title="Future Roadmap" text="Upcoming capabilities include deeper Atlas products, AI copilots, analytics platforms, cloud automation, and industry-specific software systems." />
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}

function StoryCard({ icon: Icon, title, text }: { icon: typeof Target; title: string; text: string }) {
  return (
    <article className="glass rounded-md p-7">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-blue-50 text-primary dark:bg-blue-500/10">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </article>
  );
}
