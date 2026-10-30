"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    index: "01",
    title: "Project Management",
    description: "Delivery, quality and coordination",
    items: ["ISO Compliance", "Jira", "Git", "Safety Audits"],
    secondary: {
      title: "Multilingual",
      items: ["Malay", "English", "French"],
    },
  },
  {
    index: "02",
    title: "Operational Technology",
    description: "Industrial automation and connected systems",
    items: [
      "OPC",
      "IEC 61850",
      "LonWorks",
      "SNMP",
      "SCADA Systems",
      "PLC Emulation",
      "Wireshark",
    ],
  },
  {
    index: "03",
    title: "Information Technology",
    description: "Infrastructure, data and software",
    items: [
      "VMware",
      "Cloud Deployment",
      "SQL Redundancy",
      "Failover Clustering",
      "AI Edge Deployment",
      "OpenAI API Integration",
      "MongoDB",
      "MERN / MEAN Stack",
      "JavaScript",
      "VB",
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="scroll-mt-28 border-t border-border/80 pt-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">04 / Capabilities</p>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl">
            Skills &amp; tools
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base lg:justify-self-end">
          A cross-disciplinary toolkit for the environments where operational
          technology, information technology and product work meet.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-card/65 p-5 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-foreground sm:text-2xl">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                  {group.description}
                </p>
              </div>
              <span className="font-mono text-xs text-accent">{group.index}</span>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-background/45 px-3 py-2 text-xs text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            {group.secondary && (
              <div className="mt-7 border-t border-border/80 pt-5">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {group.secondary.title}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.secondary.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-accent/25 bg-accent/5 px-3 py-2 text-xs text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
