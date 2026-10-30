"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syahiidrasidi/",
    icon: Linkedin,
  },
  {
    label: "Medium",
    href: "https://medium.com/@syahiid.rasidi",
    icon: null,
  },
  {
    label: "University GitHub · abin733",
    href: "https://github.com/abin733",
    icon: Github,
  },
  {
    label: "Personal GitHub · SwollEngineAF",
    href: "https://github.com/SwollEngineAF",
    icon: Github,
  },
];

const SocialMedia = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="scroll-mt-28"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-accent text-accent-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-36 size-[28rem] rounded-full border border-background/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-24 size-[20rem] rounded-full border border-background/10"
        />
        <div className="relative grid gap-12 p-6 sm:p-10 md:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground/65 sm:text-xs">
              05 / Start a conversation
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-5xl lg:text-7xl">
              Let&apos;s make complex systems work beautifully.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-accent-foreground/75 sm:text-base sm:leading-8">
              For roles, collaborations, or a thoughtful conversation about
              engineering and technology, get in touch.
            </p>
            <motion.a
              href="mailto:syahiid.rasidi@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-background px-5 text-sm font-semibold text-foreground transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              <Mail aria-hidden="true" className="size-4" />
              syahiid.rasidi@gmail.com
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </motion.a>
          </div>

          <div className="flex flex-col justify-end lg:pb-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground/65 sm:text-xs">
              Elsewhere on the internet
            </p>
            <ul className="mt-4 divide-y divide-background/15 border-y border-background/15">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-14 items-center justify-between gap-4 py-3 text-sm font-medium transition-colors hover:text-background/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                    >
                      <span className="inline-flex items-center gap-3">
                        {Icon ? (
                          <Icon aria-hidden="true" className="size-4" />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="grid size-4 place-items-center font-display text-base font-bold"
                          >
                            M
                          </span>
                        )}
                        {link.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialMedia;
