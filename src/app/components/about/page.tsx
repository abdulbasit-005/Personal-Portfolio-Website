"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { User, Sparkles } from "lucide-react";

function About() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".about-image-card",
      { opacity: 0, scale: 0.9, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-image-card",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-8 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-red-500 mb-2">
                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  Discovery
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  The Architect
                </span>
              </h2>
            </div>

            <div className="about-description text-slate-300 text-lg lg:text-xl leading-relaxed text-justify space-y-4 font-normal italic max-w-2xl">
              {personalData.description}
            </div>

            <div className="flex flex-wrap gap-8 items-center mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Years Experience
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">20+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Global Projects
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Tech Mastered
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Profile Image with High-End Frame */}
          <div className="lg:col-span-4 w-full max-w-sm mx-auto order-1 lg:order-2">
            <Tilt
              perspective={1500}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ef4444"
              className="about-image-card"
            >
              <div className="relative group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.15)] bg-[#050505]">
                  <Image
                    src={personalData.profile}
                    fill
                    alt={personalData.name}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
