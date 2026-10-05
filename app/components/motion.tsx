// app/components/motion.tsx
// Shared animation kit. Every page picks the pieces it needs and combines them differently.
"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

export { MotionConfig, motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
export type { MotionValue } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

// Warm colour grades so stock photos sit inside the cream and caramel palette.
export const WARM = "[filter:sepia(0.2)_saturate(1.05)]";
export const WARM_STRONG = "[filter:sepia(0.28)_saturate(0.95)]";

/* ------------------------------ helpers ------------------------------ */

export function useIsDesktop() {
  const [v, setV] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(min-width: 768px)");
    const f = () => setV(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return v;
}

/* --------------------------- page progress bar --------------------------- */

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#8A5A3B]"
    />
  );
}

/* ------------------------------ fade / slide ------------------------------ */

export function FadeUp({
  children,
  delay = 0,
  className = "",
  y = 32,
  x = 0,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  x?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ masked headline ------------------------------ */

export function MaskLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  // Observe the wrapper (which never moves or gets clipped), not the sliding text.
  const inView = useInView(ref, { once: true, amount: "some" });
  const show = reduce || inView;
  return (
    <span ref={ref} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: show ? 0 : "110%" }}
        transition={{ duration: 1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ------------------------------ scroll lit words ------------------------------ */

function Word({
  children,
  progress,
  range,
  em,
  reduce,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  em: boolean;
  reduce: boolean;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="mr-[0.28em] inline-block">
      <motion.span
        style={reduce ? undefined : { opacity }}
        className={em ? "font-serif font-normal italic text-[#D9B48F]" : ""}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollWords({ text, em = [], className = "" }: { text: string; em?: string[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.5"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word
          key={`${w}_${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          em={em.includes(w)}
          reduce={!!reduce}
        >
          {w}
        </Word>
      ))}
    </p>
  );
}

/* ------------------------------ images ------------------------------ */

export type ImgProps = {
  src: string;
  alt: string;
  sizes: string;
  fallback: string;
  className?: string;
  priority?: boolean;
  speed?: number; // parallax strength in percent, max about 12
  imgClassName?: string; // extra classes on the image itself (for example a warm filter)
};

/** Image that drifts as you scroll. Shows a branded block if the file is missing. */
export function ParallaxImage({ src, alt, sizes, fallback, className = "", priority = false, speed = 10, imgClassName = "" }: ImgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#EAD8C0] ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#D9B48F] to-[#8A5A3B] p-6 text-center font-serif text-2xl italic text-[#FFF5E8]">
          {fallback}
        </div>
      ) : (
        <motion.div style={reduce ? undefined : { y }} className="absolute inset-x-0 -bottom-[12%] -top-[12%]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onError={() => setFailed(true)}
            className={`object-cover ${imgClassName}`}
          />
        </motion.div>
      )}
    </div>
  );
}

/** Image revealed by a rising curtain, then drifting with scroll. */
export function CurtainImage({ delay = 0, className = "", ...img }: ImgProps & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Observe the wrapper, not the clipped layer: an element clipped to nothing never counts as visible.
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const show = reduce || inView;
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
        transition={{ duration: 1.2, ease, delay }}
      >
        <ParallaxImage {...img} className="h-full w-full" />
      </motion.div>
    </div>
  );
}

/* ------------------------------ interaction ------------------------------ */

/** Element that gently follows the cursor. */
export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.2 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Card that tilts toward the cursor in 3D. */
export function TiltCard({ children, className = "", max = 5 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 150, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        onMouseMove={reduce ? undefined : onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Endless horizontal ticker. Pass the items once; they are duplicated for the loop. */
export function Marquee({ children, duration = 40, reverse = false }: { children: ReactNode; duration?: number; reverse?: boolean }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <style>{`
        @keyframes zy_marquee { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        @media (prefers-reduced-motion: reduce) { .zy_marquee { animation: none !important; } }
      `}</style>
      <div
        className="zy_marquee flex w-max will-change-transform"
        style={{ animation: `zy_marquee ${duration}s linear infinite ${reverse ? "reverse" : "normal"}` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}