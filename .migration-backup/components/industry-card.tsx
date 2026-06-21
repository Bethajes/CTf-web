"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/data";

export function IndustryCard({
  title,
  description,
  solutions,
  icon,
  index,
}: {
  title: string;
  description: string;
  solutions: string[];
  icon: string;
  index: number;
}) {
  const Icon = getIcon(icon);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_24px_80px_-24px_rgba(6,182,212,0.25)]"
    >
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-cyan-400/10 text-cyan-200 transition group-hover:bg-cyan-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {solutions.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
