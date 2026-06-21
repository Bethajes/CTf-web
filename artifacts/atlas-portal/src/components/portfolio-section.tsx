"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheck as CheckCircle2 } from "lucide-react";
import { featuredProjects, additionalSolutions, getIcon } from "@/lib/data";
import { AnimatedCard } from "@/components/animated-card";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-slate-50 py-20 dark:bg-neutral-950">
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-bold uppercase text-cyan-600 dark:text-cyan-300">Portfolio</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-5xl">
            Our Portfolio & Proven Solutions
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Real-world platforms built for real operational impact.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm font-bold uppercase text-cyan-600 dark:text-cyan-300">Solutions Under Development</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white sm:text-4xl">
              Expanding the University Management Ecosystem
            </h3>
          </motion.div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {additionalSolutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const featureListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};
const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function FeaturedProjectCard({
  project,
  index,
}: {
  project: {
    title: string;
    description: string;
    image?: string[];
    features: string[];
    benefits: string[];
    badge?: string;
    icon: string;
  };
  index: number;
}) {
  const Icon = getIcon(project.icon);
  const [hovered, setHovered] = useState(false);
  const imagesTrack =
    project.image && project.image.length > 0
      ? [...project.image, ...project.image, ...project.image]
      : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-cyan-400/30 hover:shadow-xl dark:border-white/10 dark:bg-black dark:hover:border-cyan-300/25 dark:hover:shadow-[0_20px_60px_-20px_rgba(6,182,212,0.2)]"
    >
      <motion.div
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 lg:p-8">
          <div className="mb-4 flex items-center gap-3">
            <motion.div
              className="grid h-10 w-10 place-items-center rounded-md bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200"
              animate={hovered ? { scale: 1.12, rotate: [0, -6, 6, 0] } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">{project.title}</h3>
              {project.badge ? (
                <span className="mt-1 inline-block rounded-md border border-cyan-400/30 bg-cyan-50 px-2 py-0.5 text-xs font-bold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                  {project.badge}
                </span>
              ) : null}
            </div>
          </div>

          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{project.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Features</h4>
              <motion.ul
                className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300"
                variants={featureListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.features.slice(0, 5).map((f) => (
                  <motion.li key={f} variants={featureItemVariants} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-500 dark:text-cyan-300" />
                    {f}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Benefits</h4>
              <motion.ul
                className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300"
                variants={featureListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.benefits.map((b) => (
                  <motion.li key={b} variants={featureItemVariants} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        <div className="relative grid place-items-center border-t border-slate-200 bg-slate-50 p-6 lg:border-t-0 lg:border-l dark:border-white/10 dark:bg-white/[0.02]">
          <div className="relative w-full max-w-md">
            <motion.div
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-neutral-950"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-400">Dashboard Preview</span>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
                {imagesTrack.length > 0 ? (
                  <motion.div
                    className="flex h-full w-max"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                  >
                    {imagesTrack.map((imgUrl, imgIdx) => (
                      <div key={imgIdx} className="relative h-full shrink-0 aspect-[16/10]" style={{ width: "352px" }}>
                        <img
                          src={imgUrl}
                          alt="Live Showcase Stream"
                          className="absolute inset-0 h-full w-full object-cover object-top p-0.5 rounded-md"
                        />
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="grid h-full p-3 gap-3">
                    <div className="h-12 rounded bg-slate-100 dark:bg-white/[0.03]" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-slate-100 dark:bg-white/[0.03]" />
                      <div className="h-10 rounded bg-slate-100 dark:bg-white/[0.03]" />
                      <div className="h-10 rounded bg-slate-100 dark:bg-white/[0.03]" />
                    </div>
                    <div className="h-10 rounded bg-slate-100 dark:bg-white/[0.03]" />
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 -top-4 hidden rounded-lg border border-slate-200 bg-white p-3 shadow-xl dark:border-cyan-300/20 dark:bg-black sm:block"
              initial={{ opacity: 0, x: 10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              animate={{ y: [0, -6, 0] }}
            >
              <p className="text-xs font-bold text-slate-400">Efficiency</p>
              <p className="text-lg font-black text-slate-900 dark:text-white">+42%</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionCard({
  solution,
  index,
}: {
  solution: {
    title: string;
    description: string;
    features: string[];
    icon: string;
    status: string;
  };
  index: number;
}) {
  const Icon = getIcon(solution.icon);
  return (
    <AnimatedCard index={index}>
      <article className="group h-full rounded-lg border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-cyan-400/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/30">
        <div className="mb-4 flex items-center justify-between">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-100 dark:bg-cyan-400/10 dark:text-cyan-200 dark:group-hover:bg-cyan-400/20">
            <Icon className="h-5 w-5" />
          </div>
          <motion.span
            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 + index * 0.06 }}
          >
            {solution.status}
          </motion.span>
        </div>
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{solution.title}</h4>
        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{solution.description}</p>
        <motion.div
          className="mt-3 flex flex-wrap gap-1.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 + index * 0.06 } },
          }}
        >
          {solution.features.map((f) => (
            <motion.span
              key={f}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
            >
              {f}
            </motion.span>
          ))}
        </motion.div>
      </article>
    </AnimatedCard>
  );
}
