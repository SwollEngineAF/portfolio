"use client";

import { motion } from "motion/react";

const highlights = [
  {
    index: "01",
    title: "Certified Technologist",
    detail: "Professional foundation in applied technology.",
  },
  {
    index: "02",
    title: "SCADA & IT Engineer",
    detail: "Industrial automation, enterprise systems and infrastructure.",
  },
  {
    index: "03",
    title: "Lifelong learner",
    detail: "Always improving, exploring and sharing what works.",
  },
];

const AboutMe = () => {
  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="scroll-mt-28 border-t border-border/80 pt-8"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:text-5xl lg:text-6xl">
            Connecting complex operations to better experiences.
          </h2>
        </div>

        <div className="pt-1 lg:pt-12">
          <p className="max-w-2xl text-lg leading-8 text-foreground/90 sm:text-xl sm:leading-9">
            With a strong background in engineering and technology, I&apos;m
            passionate about solving real-world challenges through innovative
            solutions. My expertise spans industrial automation and SCADA
            systems to thoughtful product and frontend work.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I believe in lifelong learning, continuous improvement, and staying
            ahead of the technological curve. My work brings together a
            systems-first mindset and a practical focus on the people who rely
            on what we build.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
              <motion.article
                key={highlight.index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-card/60 p-4 sm:p-5"
              >
                <p className="font-mono text-[10px] tracking-[0.15em] text-accent">
                  {highlight.index}
                </p>
                <h3 className="mt-5 text-sm font-semibold text-foreground sm:text-base">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                  {highlight.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
