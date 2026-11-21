"use client";

import { useState, type FormEvent } from "react";

const NICHES = [
  "Fashion and apparel",
  "Footwear",
  "Beauty and wellness",
  "Home and lifestyle",
  "Electronics",
  "B2B, wholesale or manufacturing",
  "Services or consulting",
  "Other",
];

const PLATFORMS = ["Shopify", "WooCommerce", "WordPress", "Custom or other", "No store yet"];

const PROBLEMS = [
  "Site is slow",
  "Low conversions",
  "Need a new store",
  "Redesign",
  "Payment gateway",
  "SEO and traffic",
  "Social media",
  "Paid ads",
];

const BUDGETS = ["Under $500", "$500 to $1,500", "$1,500 to $3,000", "$3,000+", "Not sure yet"];
const TIMELINES = ["ASAP", "Within a month", "2 to 3 months", "Just exploring"];

const FALLBACK_ERROR = "Something went wrong. Please email zyrusdigital@gmail.com directly.";

const label =
  "font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] text-[var(--color-mute)]";

const field =
  "w-full border-b border-[var(--color-rule-strong)] bg-transparent py-4 text-[length:var(--text-md)] text-[var(--color-ink)] placeholder:text-[var(--color-mute)] transition-colors duration-300 focus:border-[var(--color-accent)] focus:outline-none";

function SelectField({
  name,
  text,
  options,
  required,
}: {
  name: string;
  text: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={label}>
        {text}
        {required ? " *" : ""}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className={`${field} cursor-pointer appearance-none`}
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function ContactForm() {
  const [problems, setProblems] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const toggle = (p: string) =>
    setProblems((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError("");

    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return; // honeypot

    if (problems.length === 0) {
      setError("Please choose at least one problem you want help with.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setError(FALLBACK_ERROR);
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New store review request: ${fd.get("name")} (${fd.get("niche")})`,
          from_name: "Zyrus Digital Website",
          name: fd.get("name"),
          email: fd.get("email"),
          whatsapp: fd.get("whatsapp"),
          store_url: fd.get("url"),
          niche: fd.get("niche"),
          platform: fd.get("platform"),
          problems: problems.join(", "),
          budget: fd.get("budget"),
          timeline: fd.get("timeline"),
          message: fd.get("message"),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Rejected");
      setStatus("done");
    } catch {
      setStatus("error");
      setError(FALLBACK_ERROR);
    } finally {
      clearTimeout(timeout);
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="border-t border-[var(--color-rule)] pt-12">
        <p className="[font-family:var(--font-display)] [font-size:var(--text-2xl)] [font-weight:var(--weight-display)] leading-[0.96] tracking-[var(--tracking-display-lg)]">
          Request{" "}
          <em className="[font-family:var(--font-body)] font-normal italic text-[var(--color-accent)]">
            received.
          </em>
        </p>
        <p className="mt-8 max-w-md text-[length:var(--text-md)] leading-[1.5] text-[var(--color-ink-soft)]">
          Thanks. We will review your store and send your audit to your email within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-12 border-t border-[var(--color-rule)] pt-12">
      {/* honeypot */}
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-10 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Your name *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email *</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={label}>WhatsApp (optional)</span>
          <input name="whatsapp" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className={label}>Store URL (if you have one)</span>
          <input name="url" inputMode="url" autoComplete="url" className={field} />
        </label>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <SelectField name="niche" text="What do you sell?" options={NICHES} required />
        <SelectField name="platform" text="Current platform" options={PLATFORMS} />
      </div>

      <fieldset className="border-0 p-0">
        <legend className={`${label} mb-6`}>
          Biggest problem right now * <span className="opacity-60">pick all that apply</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {PROBLEMS.map((p) => {
            const active = problems.includes(p);
            return (
              <button
                key={p}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(p)}
                className={`px-4 py-2.5 font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[var(--tracking-label)] transition-colors duration-300 ${
                  active
                    ? "bg-[var(--color-inverse-bg)] text-[var(--color-inverse-ink)]"
                    : "border border-[var(--color-rule-strong)] text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
                }`}
              >
                {p}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-10 sm:grid-cols-2">
        <SelectField name="budget" text="Budget (optional)" options={BUDGETS} />
        <SelectField name="timeline" text="Timeline (optional)" options={TIMELINES} />
      </div>

      <label className="block">
        <span className={label}>Anything else we should know? (optional)</span>
        <textarea name="message" rows={3} maxLength={2000} className={`${field} resize-none`} />
      </label>

      {error && (
        <p role="alert" className="text-[length:var(--text-base)] text-[oklch(55%_0.19_27)]">
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 bg-[var(--color-inverse-bg)] px-8 py-4 font-semibold text-[var(--color-inverse-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending" : "Get my free store review"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
