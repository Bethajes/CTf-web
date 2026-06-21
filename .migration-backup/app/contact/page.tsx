"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form"; // or wherever your form is located

export default function ContactPage() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Your outer grid wrapper */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] mt-12">
          
          {/* LEFT COLUMN: Contact Information Cards */}
          <div className="flex flex-col gap-4">
            
            {/* Phone Card */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-cyan-300 mb-2">
                <Phone className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Phone</h3>
              </div>
              <p className="text-slate-300">0966114216</p>
            </div>

            {/* Email Card */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-cyan-300 mb-2">
                <Mail className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Email</h3>
              </div>
              <p className="text-slate-300">hello@ctf.software</p>
            </div>

            {/* 🔴 LOCATION CARD: Replace your old placeholder with this updated map code */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2 text-cyan-300 mb-4">
                <MapPin className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Location</h3>
              </div>

              {/* Map Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-white/10 bg-neutral-900">
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

          {/* RIGHT COLUMN: The Form component you shared */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}