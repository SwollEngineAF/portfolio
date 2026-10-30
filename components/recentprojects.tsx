"use client";

import Image from "next/image";
import { motion } from "motion/react";

type FeaturedProject = {
  number: string;
  title: string;
  period: string;
  category: string;
  description: string;
  technologies: string[];
  images: { src: string; alt: string }[];
  featured?: boolean;
};

const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    title: "Airport systems & high availability",
    period: "2025 — Present",
    category: "Daifuku Oceania / Airport systems",
    description:
      "Supported DSST unit deployments at sites worldwide and the SBD PC rollout. At Hong Kong International Airport T2, deployed a high-availability backend for Collins Aerospace Self-Bag Drop using Microsoft Service Fabric, SQL databases and Loadbalancer.org ADCs. Stress-tested traffic separation and scalability, then hardened endpoints with strict peripheral access controls across multiple HID types.",
    technologies: [
      "Microsoft Service Fabric",
      "SQL databases",
      "Loadbalancer.org ADCs",
      "Endpoint security",
    ],
    images: [
      {
        src: "/assets/vietnam-airports-sbds.png",
        alt: "Self-service bag drop systems at Vietnam Airports",
      },
      {
        src: "/assets/klia2-airport.png",
        alt: "Baggage and passenger systems at KLIA2",
      },
    ],
    featured: true,
  },
  {
    number: "02",
    title: "Prism ImaGen",
    period: "2023 — 2025",
    category: "AI-powered marketing platform",
    description:
      "An all-in-one AI-powered marketing solution for FRW Healthcare, built with the MEAN Stack.",
    technologies: ["AI", "MEAN Stack", "Healthcare"],
    images: [
      {
        src: "/assets/imagen.png",
        alt: "Prism ImaGen marketing platform",
      },
    ],
  },
  {
    number: "03",
    title: "HelpBuddy",
    period: "2023 — 2025",
    category: "AI / Social impact",
    description:
      "Simplifying complaint processes with AI for vulnerable populations in New Zealand. Built with the OpenAI API and MERN Stack.",
    technologies: ["OpenAI API", "MERN Stack", "Accessibility"],
    images: [
      {
        src: "/assets/helpbuddy.jpeg",
        alt: "HelpBuddy AI complaint support platform",
      },
    ],
  },
  {
    number: "04",
    title: "AI-powered edge deployment",
    period: "Nov 2023 — Feb 2024",
    category: "Daifuku Oceania / Postgraduate internship",
    description:
      "Managed deployment and testing of more than 100 AI-powered edge devices for a Self-Service Bag Drop system using Nvidia Jetson Orin NX, delivering on scope and on time.",
    technologies: ["Nvidia Jetson Orin NX", "Edge AI", "Self-Service Bag Drop"],
    images: [
      {
        src: "/assets/jetson.png",
        alt: "Nvidia Jetson edge devices used in the deployment",
      },
    ],
  },
  {
    number: "05",
    title: "Waves",
    period: "2023 — 2025",
    category: "Environmental awareness / Social platform",
    description:
      "A social media platform advocating environmental awareness, developed with the MERN Stack.",
    technologies: ["MERN Stack", "Social platform", "Environment"],
    images: [
      {
        src: "/assets/waves.jpeg",
        alt: "Waves environmental awareness social platform",
      },
    ],
  },
];

type ExperienceEntry = {
  period: string;
  role: string;
  organization: string;
  description: string;
  projects?: string;
};

const experience: ExperienceEntry[] = [
  {
    period: "2025 — Present",
    role: "IT Solutions Engineer",
    organization: "Daifuku Oceania",
    description:
      "Supporting international Self-Bag Drop (SBD) deployments, backend high availability and endpoint security across enterprise airport environments. Supported DSST unit deployments at sites worldwide and the SBD PC rollout. Deployed a high-availability backend for Hong Kong International Airport T2 SBDs (Collins Aerospace) using Microsoft Service Fabric, SQL databases and Loadbalancer.org ADCs. Stress-tested traffic separation and scalability, and hardened endpoints with strict peripheral access control across multiple HID types to reduce the physical attack surface while keeping operations running.",
  },
  {
    period: "2023 — 2025",
    role: "Master of Information Technology",
    organization: "University of Auckland · New Zealand",
    description:
      "Completed a Master of Information Technology at the University of Auckland from February 2023 to May 2025.",
  },
  {
    period: "Nov 2023 — Feb 2024",
    role: "IT Postgraduate Internship",
    organization: "Daifuku Oceania",
    description:
      "Managed deployment and testing of more than 100 AI-powered edge devices for a Self-Service Bag Drop system using Nvidia Jetson Orin NX, delivering on scope and on time.",
  },
  {
    period: "2021 — 2023",
    role: "Senior SCADA Engineer",
    organization: "Daifuku Oceania",
    description:
      "Led the SCADA team and ensured ISO compliance across several international projects.",
    projects:
      "Chengdu SBD (China), Birmingham Airport (United Kingdom), Bandaranaike International Airport (Sri Lanka), Sphinx Airport (Egypt), Honiara Airport (Solomon Island), and New Chitose Airport (Japan).",
  },
  {
    period: "2018 — 2021",
    role: "SCADA Engineer",
    organization: "Daifuku Oceania",
    description:
      "Responsible for SCADA development, requirement studies and project implementation for baggage handling systems.",
    projects:
      "Dar Es Salaam Airport (Tanzania), Darwin International Airport (Australia), MAHB — KLIA2 Enhancement Project (Malaysia), Quebec New Outbound BHS-BTS System (Canada), Casablanca Airport (Morocco), Soekarno-Hatta Airport (Indonesia), Banyuwangi Airport (Indonesia), Marsa Alam International Airport (Egypt), Riyadh Airport (Saudi Arabia), Futurebud Dhaka Air Cargo (Bangladesh), Palau Airport (Palau), and FedEx CDG EBSS NCOY Project (France).",
  },
  {
    period: "2015 — 2018",
    role: "Technical Support & SCADA Development Engineer",
    organization: "PcVue (M) Sdn. Bhd.",
    description:
      "Provided technical support for SCADA systems and contributed to SCADA development.",
    projects:
      "Hyundai Steel Dangjin Plant (South Korea), UBS AG EMRS (Singapore), PFTAsia Egg Crack-Detection Machine (Malaysia), and KualitiAlam Monitoring System (Malaysia).",
  },
  {
    period: "2011",
    role: "IT Padawan",
    organization: "Tanarak Sdn. Bhd.",
    description:
      "Final time as an IT Padawan at Tanarak. Worked on several key projects and gained experience in networking infrastructure, site assessments and desktop computer maintenance.",
    projects:
      "Schools in Mukah Division; Police General Operations Force (GOF) Camp Sarawak; Swinburne University of Technology Engineering Building; Sarawak Energy Berhad HQ; OSK Investment Bank Berhad Kuching; Sanmina SCI & Hitachi Malaysia; Institut Latihan Perindustrian Miri; and SOCSO Sarawak.",
  },
  {
    period: "2008",
    role: "IT Padawan",
    organization: "Tanarak Sdn. Bhd.",
    description:
      "Worked on cable installation, site assessments and system maintenance for a range of projects.",
    projects:
      "Sarawak Energy Berhad HQ, OSK Investment Bank Kuching, and Sanmina SCI & Hitachi Malaysia.",
  },
  {
    period: "2006",
    role: "IT Padawan",
    organization: "Tanarak Sdn. Bhd.",
    description:
      "First role in IT, gaining practical experience in network infrastructure, cable installation and maintenance.",
    projects:
      "Swinburne University of Technology Engineering Building, SOCSO Sarawak, and Miri Industrial Training Institute.",
  },
];

function ProjectMedia({ project }: { project: FeaturedProject }) {
  if (project.images.length > 1) {
    return (
      <div className="absolute inset-0 grid grid-cols-2 gap-px bg-background/70 p-px">
        {project.images.map((image) => (
          <div key={image.src} className="relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized={process.env.NODE_ENV !== "production"}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
          </div>
        ))}
      </div>
    );
  }

  const image = project.images[0];
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      unoptimized={process.env.NODE_ENV !== "production"}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 35vw"
      className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
    />
  );
}

export function RecentProjects() {
  return (
    <>
      <section id="projects" className="scroll-mt-28">
        <div className="grid gap-8 border-t border-border/80 pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="section-kicker">02 / Selected work</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-foreground sm:text-5xl lg:text-6xl">
              Systems people rely on.
              <br />
              <span className="text-muted-foreground">Products people use.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base lg:justify-self-end">
            A selection of work across airport automation, enterprise IT,
            applied AI and digital products.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24), ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`group grid overflow-hidden rounded-3xl border border-white/10 bg-card/70 transition-colors hover:border-white/20 ${project.featured ? "md:col-span-2 md:grid-cols-[1.1fr_0.9fr]" : "grid-rows-[auto_1fr]"}`}
            >
              <div
                className={`relative overflow-hidden bg-[#111] ${project.featured ? "aspect-[16/10] md:aspect-auto md:min-h-[390px]" : "aspect-[16/10]"}`}
              >
                <ProjectMedia project={project} />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground backdrop-blur-md">
                  {project.period}
                </span>
              </div>

              <div className="flex flex-col p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.number}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies and focus areas">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-foreground/75 sm:text-xs"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 border-t border-border/80 pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">03 / Experience</p>
            <h2 className="mt-6 max-w-md font-display text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:text-5xl">
              A career built across systems.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
              From early IT field work to international airport systems,
              engineering has always been about making essential things work
              better.
            </p>
          </div>

          <div className="border-t border-border/80">
            {experience.map((entry, index) => (
              <motion.article
                key={`${entry.period}-${entry.role}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.025, 0.18), ease: "easeOut" }}
                className="grid gap-3 border-b border-border/80 py-7 sm:grid-cols-[150px_1fr] sm:gap-6 sm:py-8"
              >
                <p className="pt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent sm:text-xs">
                  {entry.period}
                </p>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
                      {entry.role}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                      {entry.organization}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {entry.description}
                  </p>
                  {entry.projects && (
                    <p className="mt-3 text-xs leading-6 text-muted-foreground/85 sm:text-sm">
                      <span className="mr-2 font-mono text-[9px] uppercase tracking-[0.14em] text-foreground/70 sm:text-[10px]">
                        Projects
                      </span>
                      {entry.projects}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
