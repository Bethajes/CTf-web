"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";

export function FaqAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-b border-slate-200 py-4 dark:border-white/10">
          <button
            type="button"
            onClick={() => setActive(active === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 text-left font-bold"
          >
            {faq.question}
            <ChevronDown className={`h-5 w-5 transition ${active === index ? "rotate-180 text-primary" : ""}`} />
          </button>
          {active === index ? <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
