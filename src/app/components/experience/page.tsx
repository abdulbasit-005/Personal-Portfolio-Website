"use client";
import { experiences } from "@/../utils/Data/experience";
import { Building2 } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (containerRef.current && lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      id="experience"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal direction="up">
          <div className="mb-20 md:mb-32">
            <div className="flex items-center gap-3 text-red-500 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Career
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Experience
              </span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Base Timeline Line */}
          <div className="absolute left-[11px] md:left-[25%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

          {/* Animated Scroll Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-[11px] md:left-[25%] top-0 bottom-0 w-[1px] bg-red-600 hidden md:block origin-top"
          />

          <div className="group flex flex-col gap-16 md:gap-32">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 transition-opacity duration-500 hover:!opacity-100 group-hover:opacity-30"
              >
                {/* Timeline Dot (Lights up on hover) */}
                <div className="hidden md:block absolute left-[25%] top-[42px] w-[9px] h-[9px] rounded-full bg-[#050505] border-2 border-white/20 -translate-x-[4px] z-10 transition-all duration-500 group-hover/item:bg-red-600 group-hover/item:border-red-600 group-hover/item:shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

                {/* Left: Sticky Date */}
                <div className="md:col-span-1">
                  <div className="md:sticky md:top-32 pt-2 md:pt-10">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-3 pt-0 md:pt-8">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transition-colors duration-300 group-hover/item:text-red-50">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-red-500 font-medium">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>

                    <ul className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed">
                      {exp.details?.map((detail, idx) => (
                        <li key={idx} className="relative pl-6">
                          <span className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-slate-700 transition-colors duration-300 group-hover/item:bg-red-500/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
