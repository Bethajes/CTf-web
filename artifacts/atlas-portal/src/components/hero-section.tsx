"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Sparkles, Users, Activity, Layers, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { AnimatedCard } from "@/components/animated-card";

const heroMetrics = [
  { value: 3000, display: "3,000+", label: "People Served Daily", icon: Users },
  { value: 9997, display: "99.97%", label: "System Availability", icon: ShieldCheck },
  { value: 14, display: "14", label: "Enterprise Solutions", icon: Layers },
  { value: 100, display: "100%", label: "Client Satisfaction", icon: Activity },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedMetric({
  value,
  display,
  label,
  icon: Icon,
  delay,
  index,
}: {
  value: number;
  display: string;
  label: string;
  icon: typeof Users;
  delay: number;
  index: number;
}) {
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1600, started);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay * 1000 + 400);
    return () => clearTimeout(t);
  }, [delay]);

  const isPercent = display.includes("%");
  const isPlus = display.includes("+");

  const formatted = isPercent
    ? display.includes(".")
      ? (count / 100).toFixed(2) + "%"
      : count + "%"
    : isPlus
    ? count.toLocaleString() + "+"
    : count.toString();

  return (
    <AnimatedCard index={index} baseDelay={delay}>
      <div className="rounded-md border border-slate-200 bg-slate-50 p-5 text-center dark:border-white/10 dark:bg-white/[0.05]">
        <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-md bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-2xl font-black tabular-nums text-slate-900 dark:text-white">
          {started ? formatted : "0"}
        </div>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    </AnimatedCard>
  );
}

const WORDS = "Global software engineering for companies building what comes next.".split(" ");

function AnimatedHeading() {
  return (
    <motion.h1 className="text-4xl font-black text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
      {WORDS.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: 0.15 + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="subtle-grid relative overflow-hidden bg-white py-20 lg:py-28 dark:bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent dark:via-cyan-300/80" />

      <FloatingParticles />

      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(6,182,212,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-shell relative">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-50 px-3 py-2 text-xs font-bold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200 dark:shadow-[0_0_28px_rgba(6,182,212,0.2)]"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            Engineering the Future Through Software
          </motion.div>

          <AnimatedHeading />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            We build enterprise software, AI systems, cloud platforms, and digital solutions that help
            organizations operate smarter and scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <ButtonLink href="/contact">Schedule Consultation</ButtonLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <ButtonLink href="#solutions" variant="secondary">
                Explore Solutions
              </ButtonLink>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <DashboardPreview />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric, i) => (
            <AnimatedMetric key={metric.label} {...metric} index={i} delay={1.3 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const bars = [52, 76, 64, 88, 72, 96, 84, 91];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-5xl rounded-lg border border-slate-200 bg-slate-900 p-3 shadow-xl dark:border-cyan-300/20 dark:bg-neutral-950 dark:shadow-[0_28px_90px_-36px_rgba(6,182,212,0.5)]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 rounded-lg bg-[linear-gradient(110deg,rgba(37,99,235,0.18),transparent_34%,rgba(6,182,212,0.12)_65%,transparent)]" />

      <div className="relative overflow-hidden rounded-md border border-white/10 bg-black/90 p-4">
        <ScanLine />

        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Create Future Technologies</p>
            <h3 className="text-base font-bold text-white">Enterprise Command Center</h3>
          </div>
          <div className="flex items-center gap-2">
            <motion.span
              className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Live
            </motion.span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="grid gap-3">
            {[
              { label: "Active Users", value: "2,847" },
              { label: "System Health", value: "99.97%" },
              { label: "Requests/min", value: "1,247" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                animate={{
                  borderColor: [
                    "rgba(255,255,255,0.1)",
                    "rgba(6,182,212,0.38)",
                    "rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{ duration: 4, delay: index * 0.45, repeat: Infinity }}
              >
                <span className="text-xs font-semibold text-slate-400">{stat.label}</span>
                <motion.div
                  className="mt-2 text-2xl font-black text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.15 }}
                >
                  {stat.value}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Platform Velocity</h4>
              <motion.span
                className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.4, type: "spring" }}
              >
                +31%
              </motion.span>
            </div>
            <div className="flex h-40 items-end gap-3">
              {bars.map((height, index) => (
                <motion.div
                  key={index}
                  className="relative flex-1 overflow-hidden rounded-t-md bg-gradient-to-t from-blue-700 via-primary to-cyan-300"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2 + index * 0.07 + 0.4,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ScanLine() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      initial={{ top: "0%" }}
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  );
}
