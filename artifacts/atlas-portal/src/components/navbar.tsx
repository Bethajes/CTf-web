"use client";

import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-black/80">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black text-slate-900 dark:text-white" aria-label="Create Future Technologies home">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-500/40 bg-cyan-100 text-cyan-700 dark:border-cyan-300/40 dark:bg-cyan-400/10 dark:text-cyan-200 shadow-[0_0_28px_rgba(6,182,212,0.15)] dark:shadow-[0_0_28px_rgba(6,182,212,0.35)]">
            CTF
          </span>
          <span className="hidden sm:inline">CREATE FUTURE</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />
          <Link href="/contact" className="rounded-md border border-cyan-500/30 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-100 dark:border-cyan-300/30 dark:bg-cyan-400/10 dark:text-cyan-100 dark:hover:bg-cyan-400/20">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 dark:border-white/10 dark:text-white xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-4 xl:hidden">
          <div className="grid gap-1 rounded-md border border-slate-200 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-neutral-950/95 dark:shadow-2xl">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between rounded-md px-3 py-2 border-t border-slate-100 dark:border-white/10 mt-1">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Theme</span>
              <ThemeToggle />
            </div>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-md bg-primary px-3 py-3 text-sm font-semibold text-white">
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
