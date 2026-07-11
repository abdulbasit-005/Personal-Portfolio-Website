"use client";
import { skillsData } from "@/../utils/Data/skills";
import { getSkillIcon, getSkillColor } from "@/../utils/skill-icons";
import Marquee from "react-fast-marquee";
import SectionReveal from "../SectionReveal";

const SkillItem = ({ skill }: { skill: string }) => {
  const Icon = getSkillIcon(skill);
  const color = getSkillColor(skill);

  return (
    <div className="mx-4 my-4 group">
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500 hover:border-red-500/30 hover:bg-white/[0.05] flex items-center gap-4 shadow-xl">
        <div
          className="text-3xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_var(--icon-color)]"
          style={{ "--icon-color": color } as React.CSSProperties}
        >
          <Icon style={{ color: color }} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-red-500 transition-colors">
            {skill}
          </span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
            Technology
          </span>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none blur-xl"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

function Skills() {
  const firstHalf = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const secondHalf = skillsData.slice(Math.ceil(skillsData.length / 2));

  return (
    <div id="skills" className="relative z-50 py-24 lg:py-48 overflow-hidden ">
      {/* Dramatic Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-red-500">
                <span className="w-8 h-[1px] bg-red-500/50"></span>
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Inventory
                </span>
                <span className="w-8 h-[1px] bg-red-500/50"></span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter text-center">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Tech Stack
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        {/* Dual Marquee Display */}
        <div className="flex flex-col gap-6 lg:gap-8 relative">
          {/* Gradient Masks */}

          <SectionReveal direction="right" delay={0.2}>
            <Marquee speed={40} gradient={false} pauseOnHover={true}>
              {firstHalf.map((skill, index) => (
                <SkillItem key={`first-${index}`} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.4}>
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover={true}
              direction="right"
            >
              {secondHalf.map((skill, index) => (
                <SkillItem key={`second-${index}`} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Skills;
