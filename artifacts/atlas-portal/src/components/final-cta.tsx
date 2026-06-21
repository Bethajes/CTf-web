"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="section-shell text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">
            Build with CTF
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black sm:text-5xl">
            Let&apos;s Build the Future Together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Partner with CTF to transform your organization through innovative software solutions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Book Consultation</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="#portfolio" variant="secondary">
              View Portfolio
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
