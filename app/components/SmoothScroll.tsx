// app/components/SmoothScroll.tsx
"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let frame = 0;

    const start = () => {
      if (lenis) return;
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };

    const sync = () => (query.matches ? stop() : start());
    sync();
    query.addEventListener("change", sync);

    return () => {
      query.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return <>{children}</>;
}
