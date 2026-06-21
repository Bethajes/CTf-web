"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

const categories = ["Frontend", "Backend", "Databases", "Cloud", "AI"] as const;

export function TechSection() {
  return (
    <section id="technologies" className="bg-white py-20 dark:bg-black">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-cyan-600 dark:text-cyan-300">Technologies</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-5xl">
            Modern Tools for Modern Problems
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {categories.map((category, idx) => (
            <TechCategory key={category} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCategory({
  category,
  index,
}: {
  category: string;
  index: number;
}) {
  const items = techStack.filter((t) => t.category === category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]"
    >
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
        {category}
      </h3>
      <div className="grid gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-400/50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
          >
            {item.label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
