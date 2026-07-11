"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Link from "next/link";
import { useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const designationRef = useRef<HTMLElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const titles = personalData.designationAlternateWords;
      let index = 0;

      // Initial Intro Animation
      const introTl = gsap.timeline();
      introTl
        .fromTo(
          ".hero-tag",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        )
        .fromTo(
          ".hero-heading",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" },
          "-=1",
        );

      // Designation Rotation Animation
      const runDesignationAnimation = () => {
        const el = designationRef.current;
        if (!el) return;

        const tl = gsap.timeline({
          onComplete: () => {
            index = (index + 1) % titles.length;
            runDesignationAnimation();
          },
        });

        el.textContent = titles[index];
        const split = new SplitText(el, { type: "chars" });

        tl.from(split.chars, {
          opacity: 0,
          y: 10,
          rotateX: -90,
          stagger: 0.04,
          duration: 0.6,
          ease: "back.out(1.7)",
        }).to(split.chars, {
          opacity: 0,
          y: -10,
          rotateX: 90,
          stagger: 0.02,
          duration: 0.5,
          ease: "back.in(1.7)",
          delay: 2,
          onComplete: () => split.revert(),
        });
      };

      runDesignationAnimation();

      // Floating animation for social icons
      gsap.to(".social-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 lg:py-24 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <span className="hero-tag px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-[0.3em] w-fit">
              WELCOME TO MY UNIVERSE
            </span>
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Digital
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                Masterpieces
              </span>
            </h1>
            <p className="hero-heading text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
              I'm{" "}
              <span className="text-white font-bold">{personalData.name}</span>,
              a professional
              <span
                className="text-red-500 ml-2 font-bold inline-block min-w-[200px]"
                ref={designationRef}
              >
                {personalData.designation}
              </span>
              <br />
              dedicated to building high-performance, user-centric web
              applications.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Link
                href={personalData.github}
                target="_blank"
                className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-500/50 transition-all duration-300 shadow-xl"
              >
                <BsGithub size={24} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-500/50 transition-all duration-300 shadow-xl"
              >
                <BsLinkedin size={24} />
              </Link>
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-500/50 transition-all duration-300 shadow-xl"
              >
                <SiLeetcode size={24} />
              </Link>
              <Link
                href={personalData.twitter}
                target="_blank"
                className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-500/50 transition-all duration-300 shadow-xl"
              >
                <FaTwitterSquare size={24} />
              </Link>
            </div>

            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="group relative px-6 py-3 text-sm rounded-xl bg-gradient-to-r from-red-600 to-red-900 text-white font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Let's Collaborate <RiContactsFill />
                </span>
              </Link>

              <Link
                href={personalData.resume}
                target="_blank"
                className="group px-6 py-3 text-sm rounded-xl border border-white/10 bg-white/5 text-white font-bold uppercase tracking-wider transition-all hover:bg-white/10 hover:border-red-500/50 flex items-center gap-2"
              >
                Get Resume{" "}
                <MdDownload className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Code Card */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.02}
            className="w-full max-w-[550px]"
          >
            <div
              ref={codeCardRef}
              className="relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl overflow-hidden shadow-2xl group"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-red-300/20" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Portfolio.ts
                </div>
              </div>

              <div className="p-6 lg:p-10">
                <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">01</span>
                    <p>
                      <span className="text-red-500">const</span>{" "}
                      <span className="text-white">developer</span> = {"{"}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">02</span>
                    <p className="ml-4">
                      <span className="text-slate-200">name:</span>{" "}
                      <span className="text-red-300">'Abdul Basit'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">03</span>
                    <p className="ml-4">
                      <span className="text-slate-200">role:</span>{" "}
                      <span className="text-red-300">
                        'Full-Stack Developer'
                      </span>
                      ,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">04</span>
                    <p className="ml-4">
                      <span className="text-slate-200">frontend:</span> [
                      <span className="text-red-300">
                        'Next.js', 'React', 'Tailwind'
                      </span>
                      ],
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">05</span>
                    <p className="ml-4">
                      <span className="text-slate-200">backend:</span> [
                      <span className="text-red-300">
                        'Node.js', 'Express', 'Prisma', 'MongoDB'
                      </span>
                      ],
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">06</span>
                    <p className="ml-4">
                      <span className="text-slate-200">focus:</span>{" "}
                      <span className="text-red-300">
                        'Scalable SaaS & Automation'
                      </span>
                      ,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">07</span>
                    <p className="ml-4">
                      <span className="text-slate-200">passionate:</span>{" "}
                      <span className="text-red-600">true</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">08</span>
                    <p className="ml-4">
                      <span className="text-slate-200">motto:</span>{" "}
                      <span className="text-red-400">"Build with Purpose"</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">09</span>
                    <p>{"};"}</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <span className="text-slate-600 italic">10</span>
                    <p>
                      <span className="text-red-500">await</span>{" "}
                      <span className="text-white">developer</span>.
                      <span className="text-white">showcase</span>();
                    </p>
                  </div>
                </code>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
