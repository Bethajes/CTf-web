"use client";

import { useRef, useState, useEffect } from "react";
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
  index?: number;
  baseDelay?: number;
  noTilt?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.88, rotate: -2 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.7,
      type: "spring",
      stiffness: 320,
      damping: 18,
    },
  }),
};

const wiggleKeyframes = [0, -7, 7, -5, 5, -3, 3, -1, 1, 0];
const wiggleTimes     = [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.58, 0.68, 0.82, 1];

export function AnimatedCard({
  children,
  className,
  index = 0,
  baseDelay = 0,
  noTilt = false,
}: AnimatedCardProps) {
  const ref        = useRef<HTMLDivElement>(null);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hovered,  setHovered]  = useState(false);
  const [settled,  setSettled]  = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { stiffness: 200, damping: 20 };
  const rotateX   = useSpring(useTransform(mouseY, [-60, 60], [5, -5]), springCfg);
  const rotateY   = useSpring(useTransform(mouseX, [-60, 60], [-5, 5]), springCfg);
  const glowX     = useTransform(mouseX, [-60, 60], [10, 90]);
  const glowY     = useTransform(mouseY, [-60, 60], [10, 90]);
  const glowOpacity       = useMotionValue(0);
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

  function onMouseEnter() {
    setHovered(true);
    setSettled(false);
    timerRef.current = setTimeout(() => setSettled(true), 2000);
  }

  function onMouseLeave() {
    if (timerRef.current) clearTimeout(timerRef.current);
    mouseX.set(0);
    mouseY.set(0);
    glowOpacity.set(0);
    setHovered(false);
    setSettled(false);
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const isWiggling = hovered && !settled;
  const isCalm     = hovered && settled;

  return (
    <motion.div
      ref={ref}
      custom={index + baseDelay / 0.09}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={noTilt ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn("relative", className)}
    >
      <motion.div
        animate={
          isWiggling
            ? {
                y: [0, -14, -8, -12, -7, -10, -6, -9, -5, -8],
                rotate: wiggleKeyframes,
                scale: [1, 1.06, 1.04, 1.06, 1.04, 1.05, 1.04, 1.05, 1.04, 1.05],
              }
            : isCalm
            ? { y: -5, rotate: 0, scale: 1.02 }
            : { y: 0, rotate: 0, scale: 1 }
        }
        transition={
          isWiggling
            ? {
                duration: 0.55,
                times: wiggleTimes,
                ease: "easeInOut",
                y:      { repeat: Infinity, repeatType: "reverse", duration: 0.9, ease: "easeInOut" },
                rotate: { repeat: Infinity, repeatType: "mirror",  duration: 0.7, ease: "easeInOut" },
                scale:  { repeat: Infinity, repeatType: "reverse", duration: 0.9, ease: "easeInOut" },
              }
            : { type: "spring", stiffness: 260, damping: 24 }
        }
      >
        {!noTilt && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              opacity: glowOpacitySpring,
              background: useTransform(
                [glowX, glowY],
                ([x, y]: number[]) =>
                  `radial-gradient(140px circle at ${x}% ${y}%, rgba(6,182,212,0.14), transparent 70%)`
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
    </motion.div>
  );
}
