"use client";

import { motion } from "framer-motion";
import { getIcon, expertiseAreas } from "@/lib/data";

export function ExpertiseSection() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-cyan-300">Why Our Experience Matters</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Expertise That Drives Results
          </h2>
          <p className="mt-4 text-slate-400">
            We do not simply develop software; we partner with institutions to build modern, efficient, and future-ready digital campuses.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={area.title} area={area} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-xl border border-white/10 bg-black p-8 text-center"
        >
          <p className="text-lg font-medium text-slate-300">
            We do not simply develop software; we partner with institutions to build modern, efficient, and future-ready digital campuses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ExpertiseCard({
  area,
  index,
}: {
  area: {
    title: string;
    icon: string;
    description: string;
  };
  index: number;
}) {
  const Icon = getIcon(area.icon);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
    >
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-cyan-400/10 text-cyan-200 transition group-hover:bg-cyan-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-base font-bold text-white">{area.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
    </motion.article>
  );
}
