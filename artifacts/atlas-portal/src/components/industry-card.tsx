"use client";

import { getIcon } from "@/lib/data";
import { AnimatedCard } from "@/components/animated-card";

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
    <AnimatedCard index={index}>
      <article className="group h-full rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-cyan-400/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/30">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-100 dark:bg-cyan-400/10 dark:text-cyan-200 dark:group-hover:bg-cyan-400/20">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {solutions.map((s) => (
            <span
              key={s}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
      </article>
    </AnimatedCard>
  );
}
