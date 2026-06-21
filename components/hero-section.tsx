"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Activity, Layers, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

const heroMetrics = [
  { value: "18,000+", label: "People Served Daily", icon: Users },
  { value: "99.97%", label: "System Availability", icon: ShieldCheck },
  { value: "14", label: "Enterprise Solutions", icon: Layers },
  { value: "100%", label: "Client Satisfaction", icon: Activity },
];

export function HeroSection() {
  return (
    <section className="subtle-grid relative overflow-hidden bg-black py-20 text-white lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
      <div className="section-shell">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs font-bold text-cyan-200 shadow-[0_0_28px_rgba(6,182,212,0.2)]"
          >
            <Sparkles className="h-4 w-4" />
            Engineering the Future Through Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-black text-white sm:text-6xl lg:text-7xl"
          >
            Global software engineering for companies building what comes next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300"
          >
            We build enterprise software, AI systems, cloud platforms, and digital solutions that help organizations operate smarter and scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact">Schedule Consultation</ButtonLink>
            <ButtonLink href="#solutions" variant="secondary">
              Explore Solutions
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <DashboardPreview />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-white/10 bg-white/[0.03] p-5 text-center transition hover:border-cyan-300/30"
            >
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-md bg-cyan-400/10 text-cyan-200">
                <metric.icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-black text-white">{metric.value}</div>
              <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const bars = [52, 76, 64, 88, 72, 96, 84, 91];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-5xl rounded-lg border border-cyan-300/20 bg-neutral-950 p-3 shadow-[0_28px_90px_-36px_rgba(6,182,212,0.5)]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 rounded-lg bg-[linear-gradient(110deg,rgba(37,99,235,0.18),transparent_34%,rgba(6,182,212,0.12)_65%,transparent)]" />
      <div className="relative rounded-md border border-white/10 bg-black/90 p-4">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Create Future Technologies</p>
            <h3 className="text-base font-bold text-white">Enterprise Command Center</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300">Live</span>
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
                animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(6,182,212,0.38)", "rgba(255,255,255,0.1)"] }}
                transition={{ duration: 4, delay: index * 0.45, repeat: Infinity }}
              >
                <span className="text-xs font-semibold text-slate-400">{stat.label}</span>
                <div className="mt-2 text-2xl font-black text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Platform Velocity</h4>
              <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300">+31%</span>
            </div>
            <div className="flex h-40 items-end gap-3">
              {bars.map((height, index) => (
                <motion.div
                  key={index}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-blue-700 via-primary to-cyan-300"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.7, delay: index * 0.06 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
