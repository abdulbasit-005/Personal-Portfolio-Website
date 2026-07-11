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
import { MapPin, Send, ArrowUpRight } from "lucide-react";

interface ContactLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

const ContactInfoCard = ({ href, label, value }: ContactLinkProps) => (
  <Link
    href={href}
    target="_blank"
    className="group flex flex-col gap-2 py-6 border-b border-white/10 hover:border-red-500/50 transition-colors"
  >
    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
      {label}
    </span>
    <div className="flex items-center justify-between overflow-hidden">
      <span className="text-lg md:text-xl text-slate-300 font-light group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
        {value}
      </span>
      <ArrowUpRight className="w-5 h-5 text-red-500 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
    </div>
  </Link>
);

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 py-24 lg:py-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal direction="up">
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex items-center gap-3 text-red-500">
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Communication
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-center">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
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
                  <Send className="w-5 h-5 text-red-600" />
                  Direct Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <ContactInfoCard
                    href={`mailto:${personalData.email}`}
                    icon={MdAlternateEmail}
                    label="Email"
                    value={personalData.email}
                    color="#ef4444"
                  />
                  <ContactInfoCard
                    href={`tel:${personalData.phone}`}
                    icon={IoMdCall}
                    label="Phone"
                    value={personalData.phone}
                    color="#dc2626"
                  />
                  <ContactInfoCard
                    href="#"
                    icon={MapPin}
                    label="Location"
                    value={personalData.address}
                    color="#991b1b"
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
