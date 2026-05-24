"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[101] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-accent origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
