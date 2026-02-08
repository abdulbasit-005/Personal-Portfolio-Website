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
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-[#11152c]/40 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-[#11152c]/60 flex items-center gap-4 shadow-xl">
        <div
          className="text-3xl transition-all duration-500 group-hover:scale-120 group-hover:drop-shadow-[0_0_10px_var(--icon-color)]"
          style={{ "--icon-color": color } as React.CSSProperties}
        >
          <Icon style={{ color: color }} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-pink-400 transition-colors">
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
    <div id="skills" className="relative z-50 py-24 lg:py-40 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-pink-500/10 to-violet-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <SectionReveal direction="up">
        <div className="flex flex-col items-center gap-6 mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-center">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl text-center">
            A comprehensive collection of tools and technologies I use to build
            modern, high-performance web applications.
          </p>
        </div>
      </SectionReveal>

      <div className="relative flex flex-col gap-4">
        {/* Fade Out Edges Mask */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0d1224] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0d1224] to-transparent z-10 pointer-events-none" />

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
  );
}

export default Skills;
