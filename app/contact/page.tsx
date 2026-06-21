import type { Metadata } from "next";
import { Mail, MapPinned, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Create Future Technologies to discuss software engineering, AI, cloud, and product development.",
};

export default function ContactPage() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-accent">Contact</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Talk to Create Future Technologies</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Reach out to discuss enterprise software, AI systems, cloud architecture, product development, or the Atlas portfolio.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <Info icon={Phone} title="Phone" text="0966114216" href="tel:+251966114216" />
            <Info icon={Mail} title="Email" text="hello@ctf.software" href="mailto:hello@ctf.software" />
            <div className="glass rounded-md p-6">
              <div className="mb-4 flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-primary" />
                <h2 className="font-black">Location</h2>
              </div>
              <div className="grid aspect-[16/10] place-items-center rounded-md bg-slate-100 text-sm font-bold text-slate-500 dark:bg-white/10 dark:text-slate-300">
                Global delivery team
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, text, href }: { icon: typeof Phone; title: string; text: string; href: string }) {
  return (
    <a href={href} className="glass block rounded-md p-6 transition hover:-translate-y-1">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="font-black">{title}</h2>
      </div>
      <p className="text-slate-300">{text}</p>
    </a>
  );
}
