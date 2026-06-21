"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/data";
import { AnimatedCard } from "@/components/animated-card";

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

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
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedCard index={index}>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/30 dark:hover:shadow-[0_24px_80px_-24px_rgba(6,182,212,0.2)]"
      >
        <motion.div
          className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200"
          animate={hovered ? { scale: 1.12, rotate: [0, -7, 7, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>

        <motion.ul
          className="mt-4 grid gap-2.5 text-sm text-slate-500 dark:text-slate-400"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.li key={item} variants={itemVariants} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300"
          initial={{ opacity: 0, y: 5 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.18 }}
        >
          Learn more
          <motion.span animate={hovered ? { x: 4 } : { x: 0 }} transition={{ duration: 0.18 }}>
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </article>
    </AnimatedCard>
  );
}
