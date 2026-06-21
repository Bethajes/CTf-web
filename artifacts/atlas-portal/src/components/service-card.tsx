"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-8, 8]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mouseX, [-80, 80], [0, 100]);
  const glowY = useTransform(mouseY, [-80, 80], [0, 100]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.15 + index * 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -14 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-default"
    >
      <motion.article
        className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
        animate={{
          boxShadow: hovered
            ? "0 20px 60px -16px rgba(6,182,212,0.3), 0 4px 20px -4px rgba(0,0,0,0.2)"
            : "0 1px 4px rgba(0,0,0,0.05)",
          borderColor: hovered ? "rgba(6,182,212,0.4)" : "rgba(226,232,240,1)",
        }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(180px circle at ${x}% ${y}%, rgba(6,182,212,0.12), transparent 70%)`
            ),
          }}
        />

        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          <motion.div
            className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200"
            animate={hovered ? { scale: 1.15, rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
            transition={hovered ? { duration: 0.4, ease: "easeOut" } : { duration: 0.3 }}
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
                <motion.div
                  animate={hovered ? { scale: 1.2, color: "#06b6d4" } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
                </motion.div>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-200"
            initial={{ opacity: 0, y: 6 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <motion.span
              animate={hovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
}
