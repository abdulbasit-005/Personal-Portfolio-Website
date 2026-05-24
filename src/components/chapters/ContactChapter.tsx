"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { site } from "@/content/site";
import { isValidEmail } from "@/lib/check-email";

export default function ContactChapter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ required: false, email: false });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrors({ required: true, email: false });
      return;
    }
    if (!isValidEmail(form.email)) {
      setErrors({ required: false, email: true });
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    try {
      setLoading(true);
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          email: form.email,
          message: `${form.message}\n\nReply-to: ${form.email}`,
        },
        { publicKey },
      );
      if (res.status === 200) {
        toast.success("Message sent — I'll reply within 24 hours.");
        setForm({ name: "", email: "", message: "" });
        setErrors({ required: false, email: false });
      }
    } catch {
      toast.error("Something went wrong. Email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="chapter-padding border-t border-[var(--border)] min-h-[80vh] flex flex-col justify-center"
    >
      <div className="max-w-site mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            05 — Contact
          </p>
          <h2 className="text-display text-4xl md:text-6xl text-paper mt-4 leading-tight">
            Let&apos;s build something
          </h2>
          <p className="text-muted mt-6 max-w-prose leading-relaxed">
            Open to full-time roles, contract work, and ambitious side projects.
            Tell me what you&apos;re shipping.
          </p>

          <div className="mt-12 flex flex-col gap-4 text-mono text-sm">
            <Link
              href={`mailto:${site.email}`}
              className="text-paper hover:text-accent transition-colors link-underline w-fit"
            >
              {site.email}
            </Link>
            <Link
              href={`tel:${site.phone}`}
              className="text-muted hover:text-accent transition-colors link-underline w-fit"
            >
              {site.phone}
            </Link>
            <p className="text-muted">{site.location}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 border border-[var(--border)] rounded-lg p-8 bg-surface/30"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="text-mono text-[10px] uppercase tracking-widest text-muted"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-3 text-paper outline-none focus:border-accent transition-colors"
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-mono text-[10px] uppercase tracking-widest text-muted"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-3 text-paper outline-none focus:border-accent transition-colors"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">Invalid email</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-mono text-[10px] uppercase tracking-widest text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-3 text-paper outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          {errors.required && (
            <p className="text-xs text-red-400">All fields are required.</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="self-start bg-accent text-ink text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
