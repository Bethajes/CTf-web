"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — controls per-card entrance delay in a grid */
  index?: number;
  /** Extra delay (seconds) on top of the stagger */
  baseDelay?: number;
  /** Disable the 3-D tilt / glow on hover */
  noTilt?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

export function AnimatedCard({
  children,
  className,
  index = 0,
  baseDelay = 0,
  noTilt = false,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 22 };
  const rotateX = useSpring(useTransform(mouseY, [-60, 60], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-60, 60], [-6, 6]), springConfig);
  const glowX = useTransform(mouseX, [-60, 60], [10, 90]);
  const glowY = useTransform(mouseY, [-60, 60], [10, 90]);
  const glowOpacity = useMotionValue(0);
  const glowOpacitySpring = useSpring(glowOpacity, { stiffness: 120, damping: 18 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (noTilt) return;
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
    glowOpacity.set(1);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    glowOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      custom={index + baseDelay / 0.08}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ y: { type: "spring", stiffness: 260, damping: 22 } }}
      style={noTilt ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("relative", className)}
    >
      {!noTilt && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: glowOpacitySpring,
            background: useTransform(
              [glowX, glowY],
              ([x, y]: number[]) =>
                `radial-gradient(140px circle at ${x}% ${y}%, rgba(6,182,212,0.13), transparent 70%)`
            ),
          }}
        />
      )}

      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] rounded-t-[inherit] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{ opacity: glowOpacitySpring }}
      />

      {children}
    </motion.div>
  );
}
