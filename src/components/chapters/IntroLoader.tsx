"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

const SESSION_KEY = "portfolio-intro-seen";

type Props = {
  onComplete: () => void;
};

export default function IntroLoader({ onComplete }: Props) {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (reducedMotion || sessionStorage.getItem(SESSION_KEY)) {
      onComplete();
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setVisible(false);
        onComplete();
      }, 600);
    }, 2200);

    return () => clearTimeout(timer);
  }, [reducedMotion, onComplete]);

  const skip = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Introduction"
    >
      <p className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted mb-6">
        Portfolio
      </p>
      <h1
        className={`text-display text-5xl md:text-7xl lg:text-8xl text-paper text-center transition-all duration-700 ${
          exiting
            ? "translate-y-[-20px] opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {site.name}
      </h1>
      <p className="text-mono text-xs text-muted mt-4 uppercase tracking-widest">
        {site.role}
      </p>
      <button
        type="button"
        onClick={skip}
        className="absolute bottom-12 text-mono text-[10px] uppercase tracking-[0.3em] text-muted hover:text-accent transition-colors"
      >
        Skip
      </button>
    </div>
  );
}
