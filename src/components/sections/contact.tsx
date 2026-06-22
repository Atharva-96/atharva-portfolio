"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedElement } from "@/components/shared/animated-element";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Formspree endpoint — replace YOUR_FORM_ID with the ID from formspree.io
    // Sign up free at https://formspree.io, create a form, copy the ID (e.g. xpwzgkqb)
    const FORMSPREE_ID = "meebqony";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _replyto: formState.email,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again or email atharvaax3@gmail.com directly.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="container">
        <AnimatedElement>
          <span className="text-xs font-medium text-accent uppercase tracking-widest">
            Contact
          </span>
        </AnimatedElement>

        <AnimatedElement delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-6">
            Let&apos;s build something
          </h2>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left — contact info */}
          <AnimatedElement delay={0.2}>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                Have a project in mind or want to discuss how we can work together?
                Send a message and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Mail size={16} className="text-accent shrink-0" />
                  atharvaax3@gmail.com
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Phone size={16} className="text-accent shrink-0" />
                  9699079711
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin size={16} className="text-accent shrink-0" />
                  ganesh Hou. Soc, bankar wasti, moshi, PCMC, Pune, Maharashtra – 412105
                </div>
              </div>

              <a
                href="https://calendly.com/atharvaax3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                <Calendar size={16} />
                Schedule a call
              </a>
            </div>
          </AnimatedElement>

          {/* Right — contact form */}
          <AnimatedElement delay={0.3}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-border bg-surface p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Message sent!</h3>
                <p className="text-sm text-muted mt-2">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  <Send size={16} className="mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
