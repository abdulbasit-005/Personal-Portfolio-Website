// src/app/components/Footer.tsx
"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 text-gray-200">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        <div className="flex flex-col gap-6">
          <Link href="/" className="w-fit">
            <Image
              src="/logo.png"
              alt="Abdul Basit Logo"
              width={100}
              height={100}
              className="brightness-125"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Professional Full Stack Developer dedicated to crafting immersive,
            high-performance digital experiences with cutting-edge technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
            Navigation
          </h3>
          <ul className="space-y-4">
            {[
              { label: "About", to: "about" },
              { label: "Experience", to: "experience" },
              { label: "Skills", to: "skills" },
              { label: "Projects", to: "projects" },
              { label: "Contact", to: "contact" },
            ].map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth
                  duration={500}
                  className="text-gray-400 hover:text-red-500 transition-all cursor-pointer font-medium"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-50">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalData.email}`}
                className="text-gray-400 hover:text-red-500 transition-all font-medium"
              >
                {personalData.email}
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className="text-gray-400 hover:text-red-500 transition-all font-medium"
              >
                {personalData.phone}
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              href={personalData.github}
              target="_blank"
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-all border border-white/5"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-all border border-white/5"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-all border border-white/5"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href={personalData.Instagram}
              target="_blank"
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-all border border-white/5"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Abdul Basit. All rights reserved.
        </p>
        <p className="flex items-center gap-2">
          Made with <span className="text-red-600 animate-pulse">❤️</span> in
          Pakistan
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
