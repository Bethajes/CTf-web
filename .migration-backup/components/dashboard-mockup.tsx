"use client";

import { motion } from "framer-motion";
import { Activity, Bell, Bot, CloudCog, GitBranch, ShieldCheck } from "lucide-react";
import { heroStats } from "@/lib/data";

export function DashboardMockup({ title = "CTF Delivery Command Center" }: { title?: string }) {
  const bars = [52, 76, 64, 88, 72, 96, 84, 91];
  const lanes = ["Discovery", "Design", "Build", "Launch"];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-6xl rounded-md border border-cyan-300/20 bg-neutral-950 p-3 shadow-[0_28px_90px_-36px_rgba(6,182,212,0.65)]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 rounded-md bg-[linear-gradient(110deg,rgba(37,99,235,0.22),transparent_34%,rgba(6,182,212,0.14)_65%,transparent)]" />
      <div className="relative rounded-md border border-white/10 bg-black/90 p-4">
        <div className="mb-4 flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Create Future Technologies</p>
            <h3 className="text-base font-bold text-white">{title}</h3>
          </div>
          <div className="flex items-center gap-2">
            {[Bell, CloudCog, ShieldCheck].map((Icon, index) => (
              <div key={index} className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(6,182,212,0.38)", "rgba(255,255,255,0.1)"] }}
                transition={{ duration: 4, delay: index * 0.45, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">{stat.label}</span>
                  <Activity className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="mt-2 text-2xl font-black text-white">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-5 flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">Portfolio Velocity</h4>
                <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300">+31%</span>
              </div>
              <div className="flex h-40 items-end gap-3">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-blue-700 via-primary to-cyan-300"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.06 }}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {lanes.map((lane, index) => (
                <motion.div
                  key={lane}
                  className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-300">
                    <GitBranch className="h-3.5 w-3.5 text-cyan-300" />
                    {lane}
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-2 rounded-full bg-cyan-300"
                      initial={{ width: "18%" }}
                      whileInView={{ width: `${45 + index * 13}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute -right-3 top-20 hidden rounded-md border border-cyan-300/20 bg-black p-4 shadow-xl shadow-cyan-500/10 sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <p className="text-xs font-bold text-slate-400">AI copilots active</p>
        <p className="flex items-center gap-2 text-2xl font-black text-white">
          <Bot className="h-5 w-5 text-cyan-300" /> 12
        </p>
      </motion.div>
    </motion.div>
  );
}
