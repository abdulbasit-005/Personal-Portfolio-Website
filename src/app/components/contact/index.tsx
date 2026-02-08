"use client";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { personalData } from "@/../utils/Data/PersonalData";
import ContactWithoutCaptcha from "./contact-without-captcha";
import SectionReveal from "../SectionReveal";
import { MapPin, Send, MessageSquare } from "lucide-react";

interface ContactLinkProps {
  href: string;
  icon: any;
  label: string;
  value: string;
  color: string;
}

const ContactInfoCard = ({
  href,
  icon: Icon,
  label,
  value,
  color,
}: ContactLinkProps) => (
  <Link
    href={href}
    target="_blank"
    className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 shadow-xl"
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300`}
      style={{ backgroundColor: `${color}15` }}
    >
      <Icon
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
        style={{ color: color }}
      />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
        {label}
      </span>
      <span className="text-sm md:text-base text-slate-200 font-medium group-hover:text-white transition-colors">
        {value}
      </span>
    </div>

    {/* Hover Glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none blur-xl"
      style={{ backgroundColor: color }}
    />
  </Link>
);

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 py-24 lg:py-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal direction="up">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex items-center gap-3 text-[#16f2b3]">
              <div className="w-10 h-10 rounded-xl bg-[#16f2b3]/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Communication
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-center">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] to-violet-600">
                Connect
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl text-center">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and creative ideas.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Side: Form */}
          <div className="lg:col-span-7">
            <SectionReveal direction="right">
              <ContactWithoutCaptcha />
            </SectionReveal>
          </div>

          {/* Right Side: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <SectionReveal direction="left">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Send className="w-5 h-5 text-pink-500" />
                  Direct Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <ContactInfoCard
                    href={`mailto:${personalData.email}`}
                    icon={MdAlternateEmail}
                    label="Email"
                    value={personalData.email}
                    color="#16f2b3"
                  />
                  <ContactInfoCard
                    href={`tel:${personalData.phone}`}
                    icon={IoMdCall}
                    label="Phone"
                    value={personalData.phone}
                    color="#ec4899"
                  />
                  <ContactInfoCard
                    href="#"
                    icon={MapPin}
                    label="Location"
                    value={personalData.address}
                    color="#8b5cf6"
                  />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.2}>
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-white">
                  Social Presence
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      href: personalData.github,
                      icon: IoLogoGithub,
                      color: "#ffffff",
                    },
                    {
                      href: personalData.linkedIn,
                      icon: BiLogoLinkedin,
                      color: "#0077b5",
                    },
                    {
                      href: personalData.twitter,
                      icon: FaXTwitter,
                      color: "#1da1f2",
                    },
                    {
                      href: personalData.stackOverflow,
                      icon: FaStackOverflow,
                      color: "#f48024",
                    },
                    {
                      href: personalData.facebook,
                      icon: FaFacebook,
                      color: "#1877f2",
                    },
                  ].map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href}
                      target="_blank"
                      className="w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center hover:bg-white/[0.05] hover:border-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon
                        className="w-6 h-6"
                        style={{ color: social.color }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
