"use client";
import { experiences } from "@/../utils/Data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import { Calendar, Building2, ChevronRight } from "lucide-react";
import SectionReveal from "../SectionReveal";

function Experience() {
  return (
    <div id="experience" className="relative z-50 py-16 lg:py-32">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
          <span className="bg-[#1a1443] border border-[#16f2b3]/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(22,242,179,0.2)]">
            Professional Journey
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Central Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#16f2b3] via-violet-500 to-transparent opacity-30" />

        <div className="flex flex-col gap-16 lg:gap-24">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <SectionReveal direction={index % 2 === 0 ? "right" : "left"}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-xl bg-[#0d1224] border-2 border-[#16f2b3] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(22,242,179,0.5)]">
                    <BsPersonWorkspace className="text-[#16f2b3] w-5 h-5" />
                  </div>

                  {/* Date Badge (Mobile: visible, Desktop: visible) */}
                  <div
                    className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-slate-400 text-sm font-medium">
                      <Calendar className="w-4 h-4 text-pink-500" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-left"}`}
                  >
                    <div className="group relative p-8 rounded-3xl border border-white/10 bg-[#11152c]/50 backdrop-blur-md hover:border-pink-500/50 transition-all duration-500 shadow-xl hover:shadow-pink-500/10">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-pink-400 font-semibold">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>

                        <div className="space-y-3 mt-2">
                          {exp.details?.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex gap-3 items-start group/item"
                            >
                              <ChevronRight className="w-4 h-4 text-[#16f2b3] mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                              <p className="text-slate-400 text-sm lg:text-base leading-relaxed group-hover/item:text-slate-200 transition-colors">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Animated Glow Border (Hover) */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/20 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
