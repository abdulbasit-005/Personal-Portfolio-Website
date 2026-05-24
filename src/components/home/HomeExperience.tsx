"use client";

import { useEffect, useState } from "react";
import IntroLoader from "@/components/chapters/IntroLoader";
import HeroChapter from "@/components/chapters/HeroChapter";
import PositioningChapter from "@/components/chapters/PositioningChapter";
import WorkGalleryChapter from "@/components/chapters/WorkGalleryChapter";
import CapabilitiesChapter from "@/components/chapters/CapabilitiesChapter";
import JourneyChapter from "@/components/chapters/JourneyChapter";
import ContactChapter from "@/components/chapters/ContactChapter";

const SESSION_KEY = "portfolio-intro-seen";

export default function HomeExperience() {
  const [ready, setReady] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    setIntroDone(!!seen);
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="min-h-screen bg-ink" aria-hidden />;
  }

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      <main className={introDone ? "opacity-100" : "opacity-0"}>
        <HeroChapter />
        <PositioningChapter />
        <WorkGalleryChapter />
        <CapabilitiesChapter />
        <JourneyChapter />
        <ContactChapter />
      </main>
    </>
  );
}
