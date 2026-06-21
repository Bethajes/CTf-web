"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export function AnimatedSection({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={className}
      {...props}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
