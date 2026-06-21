"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-cyan-300">Development Process</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            From Strategy to Production
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/40 to-transparent lg:left-1/2 lg:block" />
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
        <div className={`rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/30 ${isLeft ? "lg:ml-auto" : "lg:mr-auto"} max-w-md`}>
          <div className={`mb-3 flex items-center gap-3 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
            <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan-300/30 bg-cyan-400/10 text-xs font-black text-cyan-200">
              {index + 1}
            </span>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
          </div>
          <p className="text-sm leading-6 text-slate-400">{step.description}</p>
        </div>
      </div>
      <div className="absolute left-4 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300 lg:left-1/2 lg:block lg:-translate-x-1/2" />
      <div className="hidden flex-1 lg:block" />
    </motion.div>
  );
}
