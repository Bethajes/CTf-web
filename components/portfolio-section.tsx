"use client";

import { motion } from "framer-motion";
import { CircleCheck as CheckCircle2 } from "lucide-react";
import { featuredProjects, additionalSolutions, getIcon } from "@/lib/data";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-neutral-950 py-20 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-cyan-300">Portfolio</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Our Portfolio & Proven Solutions
          </h2>
          <p className="mt-4 text-slate-400">
            Real-world platforms built for real operational impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-cyan-300">Solutions Under Development</p>
            <h3 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              Expanding the Atlas Ecosystem
            </h3>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {additionalSolutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    badge?: string;
    icon: string;
  };
  index: number;
}) {
  const Icon = getIcon(project.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="overflow-hidden rounded-xl border border-white/10 bg-black"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 lg:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-cyan-400/10 text-cyan-200">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">{project.title}</h3>
              {project.badge ? (
                <span className="mt-1 inline-block rounded-md border border-cyan-300/20 bg-cyan-400/10 px-2 py-0.5 text-xs font-bold text-cyan-200">
                  {project.badge}
                </span>
              ) : null}
            </div>
          </div>
          <p className="text-sm leading-6 text-slate-400">{project.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">Features</h4>
              <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                {project.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">Benefits</h4>
              <ul className="mt-3 grid gap-2 text-sm text-slate-300">
                {project.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative grid place-items-center border-t border-white/10 bg-white/[0.02] p-6 lg:border-t-0 lg:border-l">
          <div className="relative w-full max-w-md">
            <div className="rounded-lg border border-white/10 bg-neutral-950 p-4 shadow-2xl">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-500">Dashboard Preview</span>
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
            <motion.div
              className="absolute -right-4 -top-4 hidden rounded-lg border border-cyan-300/20 bg-black p-3 shadow-xl sm:block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-xs font-bold text-slate-400">Efficiency</p>
              <p className="text-lg font-black text-white">+42%</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionCard({
  solution,
  index,
}: {
  solution: {
    title: string;
    description: string;
    features: string[];
    icon: string;
    status: string;
  };
  index: number;
}) {
  const Icon = getIcon(solution.icon);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-cyan-400/10 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">
          {solution.status}
        </span>
      </div>
      <h4 className="text-sm font-bold text-white">{solution.title}</h4>
      <p className="mt-2 text-xs leading-5 text-slate-400">{solution.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {solution.features.map((f) => (
          <span key={f} className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-slate-300">
            {f}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
