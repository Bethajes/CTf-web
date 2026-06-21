import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase text-cyan-600 dark:text-cyan-300">Get In Touch</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-5xl">Contact Us</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] mt-12">
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300 mb-2">
                <Phone className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Phone</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">0966114216</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300 mb-2">
                <Mail className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Email</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">hello@ctf.software</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300 mb-4">
                <MapPin className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Location</h3>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-neutral-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1547623954352!2d38.78547087485852!3d9.012652891048058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850d4bb1ac49%3A0xb0c90b76a68bbbd7!2zTG90dXMgQnVpbGRpbmcgMjIgfCAyMiB8IGhheWFodWxldCB8IOGIjuGJsOGItSDhiIXhipXhjYMgMjIgfCDhiIPhi6vhiIHhiIjhibU!5e1!3m2!1sen!2set!4v1782028949755!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full opacity-70 grayscale invert contrast-[95%] brightness-[75%] transition-opacity duration-300 hover:opacity-95"
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-400">
                Based in Addis Ababa, Ethiopia — Available for global operations.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
