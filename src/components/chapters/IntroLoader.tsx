"use client";

import Image from "next/image";
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
    }, 2800);

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
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink px-6 transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Introduction"
    >
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          exiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8 rounded-full overflow-hidden border-2 border-accent/40 ring-4 ring-accent/10">
          <Image
            src={site.profileImage}
            alt={site.name}
            fill
            className="object-cover"
            sizes="144px"
            priority
          />
        </div>
        <p className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted mb-4 text-center">
          Portfolio
        </p>
        <h1 className="text-display text-4xl md:text-6xl lg:text-7xl text-paper text-center">
          {site.name}
        </h1>
        <p className="text-mono text-xs text-muted mt-3 uppercase tracking-widest text-center">
          {site.role}
        </p>
        <p className="text-muted text-sm md:text-base mt-6 max-w-md text-center leading-relaxed">
          {site.intro}
        </p>
      </div>
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
