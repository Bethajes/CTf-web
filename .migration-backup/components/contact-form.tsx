"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const requiredFields = ["fullName", "company", "position", "phone", "email"] as const;

export function ContactForm({ demo = false }: { demo?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const missing = requiredFields.some((field) => !String(form.get(field) || "").trim());
    const email = String(form.get("email") || "");

    if (missing) {
      setError("Please complete all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="glass rounded-md p-8 text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-md bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10">
          <Send className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-black">Request received</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Thank you. The CTF team will contact you shortly to schedule the next step.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-md p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="fullName" label="Full Name" />
        <Field name="company" label="Company" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="position" label="Position" />
        <Field name="phone" label="Phone Number" inputMode="tel" />
      </div>
      <Field name="email" label="Email" type="email" />
      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea
          name="message"
          rows={5}
          placeholder={demo ? "Tell us about your product, platform, or preferred consultation time." : "How can we help?"}
          className="rounded-md border-slate-200 bg-white/80 text-sm shadow-none focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-white/5"
        />
      </label>
      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
      <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
        {demo ? "Schedule Consultation" : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  inputMode,
}: {
  name: string;
  label: string;
  type?: string;
  inputMode?: "tel";
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        required
        className="rounded-md border-slate-200 bg-white/80 text-sm shadow-none focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-white/5"
      />
    </label>
  );
}
