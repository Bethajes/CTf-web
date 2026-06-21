import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 font-black">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/40 bg-cyan-400/10 text-cyan-200">CTF</span>
            CREATE FUTURE TECHNOLOGIES
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Engineering the Future Through Software. Enterprise platforms, AI systems, cloud products, and the Atlas software portfolio for ambitious organizations.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-cyan-200">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">Company</h2>
          <div className="grid gap-3">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-cyan-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">Services</h2>
          <div className="grid gap-3 text-sm text-slate-400">
            <span>Enterprise Software</span>
            <span>Web Applications</span>
            <span>Mobile Applications</span>
            <span>AI Solutions</span>
            <span>Cloud & DevOps</span>
            <span>Digital Transformation</span>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">Contact</h2>
          <div className="grid gap-3 text-sm text-slate-400">
            <a className="flex items-center gap-2 hover:text-primary" href="tel:+251966114216">
              <Phone className="h-4 w-4" /> 0966114216
            </a>
            <a className="flex items-center gap-2 hover:text-primary" href="mailto:hello@ctf.software">
              <Mail className="h-4 w-4" /> hello@ctf.software
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        Copyright &copy; {currentYear} Create Future Technologies. All rights reserved.
      </div>
    </footer>
  );
}
