"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { submitContactForm } from "@/services/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// Email obfuscation - renders only on client to prevent bot scraping
function ObfuscatedEmail() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Only reveal email on client-side (bots can't execute JS)
    setEmail("hello" + "@" + "ndevuspace" + "." + "com");
  }, []);

  if (!email) return <span>hello [at] ndevuspace [dot] com</span>;
  return (
    <a
      href={`mailto:${email}`}
      className="text-gray-900 dark:text-white font-medium border-b border-current hover:opacity-70 transition-opacity duration-300"
    >
      {email}
    </a>
  );
}

const inputStyles = (focused: boolean) =>
  cn(
    "w-full px-4 py-3 rounded-xl",
    "bg-white/40 dark:bg-white/[0.04] border",
    focused ? "border-gray-900 dark:border-white" : "border-border",
    "text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500",
    "focus:outline-none focus:border-gray-900 dark:focus:border-white",
    "transition-colors duration-300"
  );

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus === "error") {
      setSubmitStatus(null);
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    // The contact service validates a subject, so derive one from the sender
    const result = await submitContactForm({
      ...formData,
      subject: `Portfolio contact — ${formData.name}`,
    });

    if (result.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
      const fullMessage = result.error
        ? `${result.message} ${result.error}`
        : result.message;
      setErrorMessage(fullMessage);
    }

    setIsSubmitting(false);
  };

  return (
    <Section id="contact">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeader
          index="02"
          label="Contact"
          title="Let's work together"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Invitation */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Have a project in mind, or just want to say hi? Send a message —
              I&apos;ll get back to you soon.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Or email me directly at <ObfuscatedEmail />
            </p>
          </div>

          {/* Minimal glass form */}
          <div className="lg:col-span-3">
            <div className="glass-panel p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputStyles(focusedField === "name")}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputStyles(focusedField === "email")}
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={cn(inputStyles(focusedField === "message"), "resize-none")}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  rightIcon={!isSubmitting && <Send className="w-4 h-4" />}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-gray-900 dark:text-white text-sm">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent. I&apos;ll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-gray-900 dark:text-white text-sm font-medium">
                    <AlertCircle className="w-5 h-5" />
                    <span>
                      {errorMessage || "Something went wrong. Please try again."}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
