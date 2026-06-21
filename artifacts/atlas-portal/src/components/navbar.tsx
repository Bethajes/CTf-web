"use client";

import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl dark:bg-black/80">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-black text-white" aria-label="Create Future Technologies home">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/40 bg-cyan-400/10 text-cyan-200 shadow-[0_0_28px_rgba(6,182,212,0.35)]">
            CTF
          </span>
          <span className="hidden sm:inline">CREATE FUTURE</span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />
          <Link href="/contact" className="rounded-md border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-400/20">
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="section-shell pb-4 xl:hidden">
          <div className="grid gap-1 rounded-md border border-white/10 bg-neutral-950/95 p-2 shadow-2xl">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-md bg-primary px-3 py-3 text-sm font-semibold text-white">
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
