"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import { isValidEmail } from "@/lib/check-email";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ email: false, required: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.message) {
      setErrors((prev) => ({ ...prev, required: true }));
      return;
    }
    if (!isValidEmail(input.email)) {
      setErrors({ email: true, required: false });
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    };

    try {
      setLoading(true);
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: input.name,
          email: input.email,
          message: `${input.message}\nEmail: ${input.email}`,
        },
        options,
      );

      if (res.status === 200) {
        toast.success("Message sent. I'll reply soon.");
        setInput({ name: "", email: "", message: "" });
        setErrors({ email: false, required: false });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full rounded-md border border-subtle bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent/50 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs text-muted mb-2 block"
        >
          Name
        </label>
        <input
          id="name"
          className={fieldClass}
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          maxLength={100}
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs text-muted mb-2 block"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className={fieldClass}
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          maxLength={100}
          required
        />
        {errors.email && (
          <p className="text-xs text-accent mt-1">Enter a valid email.</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs text-muted mb-2 block"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={fieldClass}
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
          maxLength={500}
          required
        />
      </div>
      {errors.required && (
        <p className="text-sm text-accent">Please fill in all fields.</p>
      )}
      <Button type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
