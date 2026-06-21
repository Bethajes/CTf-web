"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-neutral-950">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-cyan-600 dark:text-cyan-300">Development Process</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-5xl">
            From Strategy to Production
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 to-transparent lg:left-1/2 lg:block" />
          <div className="grid gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: { title: string; description: string };
  index: number;
}) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`relative flex items-center gap-6 lg:gap-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className={`flex-1 ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
        <div className={`rounded-lg border border-slate-200 bg-white p-6 transition hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/30 ${isLeft ? "lg:ml-auto" : "lg:mr-auto"} max-w-md`}>
          <div className={`mb-3 flex items-center gap-3 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
            <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan-400/30 bg-cyan-50 text-xs font-black text-cyan-700 dark:border-cyan-300/30 dark:bg-cyan-400/10 dark:text-cyan-200">
              {index + 1}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
          </div>
          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{step.description}</p>
        </div>
      </div>
      <div className="absolute left-4 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-500 lg:left-1/2 lg:block lg:-translate-x-1/2" />
      <div className="hidden flex-1 lg:block" />
    </motion.div>
  );
}
