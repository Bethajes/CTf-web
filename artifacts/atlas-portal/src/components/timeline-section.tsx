"use client";

import { motion } from "framer-motion";
import { getIcon, timeline } from "@/lib/data";

export function TimelineSection() {
  return (
    <section className="bg-white py-20 dark:bg-black">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-cyan-600 dark:text-cyan-300">Our Innovation Journey</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-5xl">
            From Idea to Impact
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: {
    year: string;
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}) {
  const Icon = getIcon(item.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative z-10 mb-4 grid h-14 w-14 place-items-center rounded-full border border-cyan-400/30 bg-cyan-50 text-cyan-700 dark:border-cyan-300/30 dark:bg-cyan-400/10 dark:text-cyan-200 shadow-[0_0_28px_rgba(6,182,212,0.12)] dark:shadow-[0_0_28px_rgba(6,182,212,0.25)]">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-md border border-cyan-400/30 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200">
          {item.year}
        </span>
        <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>
      </div>
    </motion.div>
  );
}
