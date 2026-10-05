// app/components/ContactForm.tsx
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Magnetic, MotionConfig, ease, motion } from "./motion";

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

const input =
  "w-full rounded-xl border border-[#D9B48F]/70 bg-[#EAD8C0]/30 px-5 py-3.5 text-[15px] text-[#33241F] placeholder:text-[#33241F]/50 transition-all duration-300 focus:border-[#8A5A3B] focus:outline-none focus:ring-4 focus:ring-[#8A5A3B]/10";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

function Select({ name, label, options, required }: { name: string; label: string; options: string[]; required?: boolean }) {
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label={label}
        className={`${input} cursor-pointer appearance-none pr-12 ${value ? "" : "text-[#33241F]/50"}`}
      >
        <option value="">
          {label}
          {required ? " *" : ""}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[#33241F]">
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A5A3B]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default function ContactForm() {
  const [problems, setProblems] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);

  const toggleProblem = (p: string) =>
    setProblems((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  useEffect(() => {
    if (status === "done") wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

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
      <MotionConfig reducedMotion="user">
        <motion.div
          ref={wrapRef}
          role="status"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-[#D9B48F] bg-[#FFF5E8] p-10 text-center shadow-[0_30px_60px_-30px_rgba(138,90,59,0.3)] md:p-14"
        >
          <div className="relative z-10 mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#8A5A3B]/10 text-[#8A5A3B]">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.3 }}
              />
            </svg>
          </div>
          <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight text-[#33241F] md:text-4xl">
            Request <span className="font-serif font-normal italic text-[#8A5A3B]">received.</span>
          </h2>
          <p className="relative z-10 mx-auto max-w-sm text-[15px] leading-relaxed text-[#33241F]/70">
            Thanks. We&apos;ll review your store and send your audit to your email within 2 working days.
          </p>
        </motion.div>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div ref={wrapRef}>
        <motion.form
          onSubmit={onSubmit}
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-[#D9B48F] bg-[#FFF5E8] p-6 shadow-[0_30px_60px_-30px_rgba(138,90,59,0.3)] md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#8A5A3B]/5" />

          {/* honeypot */}
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <motion.div variants={item} className="relative z-10 grid gap-3 sm:grid-cols-2">
            <input name="name" required autoComplete="name" aria-label="Your name" placeholder="Your name *" className={input} />
            <input name="email" type="email" required autoComplete="email" aria-label="Email" placeholder="Email *" className={input} />
            <input name="whatsapp" type="tel" autoComplete="tel" aria-label="WhatsApp number" placeholder="WhatsApp (optional)" className={input} />
            <input name="url" inputMode="url" autoComplete="url" aria-label="Store or website URL" placeholder="Store URL (if you have one)" className={input} />
          </motion.div>

          <motion.div variants={item} className="relative z-10 grid gap-3 sm:grid-cols-2">
            <Select name="niche" label="What do you sell?" options={NICHES} required />
            <Select name="platform" label="Current platform" options={PLATFORMS} />
          </motion.div>

          <motion.div variants={item} className="relative z-10" role="group" aria-labelledby="problems_label">
            <div id="problems_label" className="mb-3 flex items-baseline gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#33241F]">Biggest problem right now *</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#33241F]/55">pick all that apply</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROBLEMS.map((p) => {
                const active = problems.includes(p);
                return (
                  <motion.button
                    key={p}
                    type="button"
                    onClick={() => toggleProblem(p)}
                    aria-pressed={active}
                    whileTap={{ scale: 0.93 }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`rounded-full border px-4 py-2 text-[12px] font-bold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8A5A3B]/25 ${
                      active
                        ? "border-[#8A5A3B] bg-[#8A5A3B] text-[#FFF5E8] shadow-md"
                        : "border-[#D9B48F]/70 bg-[#EAD8C0]/30 text-[#33241F]/75 hover:border-[#8A5A3B] hover:text-[#8A5A3B]"
                    }`}
                  >
                    {p}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={item} className="relative z-10 grid gap-3 sm:grid-cols-2">
            <Select name="budget" label="Budget (optional)" options={BUDGETS} />
            <Select name="timeline" label="Timeline (optional)" options={TIMELINES} />
          </motion.div>

          <motion.div variants={item} className="relative z-10">
            <textarea
              name="message"
              rows={3}
              maxLength={2000}
              aria-label="Tell us more"
              placeholder="Anything else we should know? (optional)"
              className={`${input} resize-none`}
            />
          </motion.div>

          {error && (
            <p role="alert" className="relative z-10 text-[13px] font-bold text-red-700">
              {error}
            </p>
          )}

          <motion.div variants={item} className="relative z-10">
            <Magnetic strength={0.2}>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#8A5A3B] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFF5E8] transition-colors duration-500 hover:bg-[#33241F] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Get my free store review"}
                <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.form>
      </div>
    </MotionConfig>
  );
}