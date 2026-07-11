"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "@/../utils/check-email";

const ContactWithoutCaptcha = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    };

    const templateParams = {
      from_name: input.name,
      email: input.email,
      message: `${input.message} \nEmail: ${input.email}`,
    };

    try {
      setIsLoading(true);
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        options,
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setIsLoading(false);
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Send a Message
          </h3>
          <p className="text-slate-400 text-sm">
            I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2 group/input">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors">
              Your Name
            </label>
            <input
              className="bg-transparent w-full border-0 border-b border-white/20 focus:border-red-500 ring-0 outline-0 transition-colors duration-300 px-0 py-3 text-white placeholder:text-slate-600 text-lg md:text-xl font-light"
              type="text"
              placeholder="John Doe"
              maxLength={100}
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2 group/input">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors">
              Your Email
            </label>
            <input
              className={`bg-transparent w-full border-0 border-b ring-0 outline-0 transition-colors duration-300 px-0 py-3 text-white placeholder:text-slate-600 text-lg md:text-xl font-light ${error.email ? "border-red-500" : "border-white/20 focus:border-red-500"}`}
              type="email"
              placeholder="john@example.com"
              maxLength={100}
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && (
              <p className="text-xs text-red-500 ml-1">
                Please provide a valid email address.
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2 group/input">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2 group-focus-within/input:text-red-500 transition-colors">
              Your Message
            </label>
            <textarea
              className="bg-transparent w-full border-0 border-b border-white/20 focus:border-red-500 ring-0 outline-0 transition-colors duration-300 px-0 py-3 text-white placeholder:text-slate-600 text-lg md:text-xl font-light resize-none"
              placeholder="Tell me about your project..."
              maxLength={500}
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={input.message}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {error.required && (
              <p className="text-sm text-red-500 text-center font-medium">
                Oops! Looks like some fields are still empty.
              </p>
            )}

            <button
              className="relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-900 p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              <div className="relative flex items-center justify-center gap-2 bg-[#050505] group-hover/btn:bg-transparent transition-all rounded-[11px] px-6 py-3 text-white font-bold uppercase tracking-widest text-sm">
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Send Message
                    <TbMailForward className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-20 rounded-full" />
    </div>
  );
};

export default ContactWithoutCaptcha;
