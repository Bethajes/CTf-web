"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/data";

export function ServiceCard({
  title,
  items,
  icon,
  index,
}: {
  title: string;
  items: string[];
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
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_24px_80px_-24px_rgba(6,182,212,0.25)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-cyan-400/10 text-cyan-200 transition group-hover:bg-cyan-400/20">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <ul className="mt-4 grid gap-2.5 text-sm text-slate-400">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-200 opacity-0 transition group-hover:opacity-100">
          Learn more <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
}
