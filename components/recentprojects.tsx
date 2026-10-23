import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const projectImageClass =
  "h-24 w-full object-cover md:h-44 lg:h-56";

export function RecentProjects() {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            IT Solutions Engineer at Daifuku Oceania, supporting international
            Self-Bag Drop (SBD) deployments, backend high availability, and
            endpoint security across enterprise airport environments.
          </p>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Supported DSST unit deployment at sites worldwide and SBD PC rollout.
            Deployed a high-availability backend for Hong Kong International
            Airport T2 SBDs (Collins Aerospace) using Microsoft Service Fabric,
            SQL databases, and Loadbalancer.org ADCs, with stress testing for
            traffic separation and scalability. Hardened endpoints with strict
            peripheral access control across multiple HID types to reduce physical
            attack surface while keeping operations running.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/vietnam-airports-sbds.png"
              alt="Self-Bag Drop deployment at international airports"
              width={500}
              height={500}
              className={projectImageClass}
            />
            <Image
              src="/assets/klia2-airport.png"
              alt="Airport baggage and passenger systems"
              width={500}
              height={500}
              className={projectImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div className="space-y-10">
          <div>
            <h3 className="font-display text-xl font-medium text-foreground">
              Master of Information Technology
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              University of Auckland, New Zealand (February 2023 – May 2025).
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-foreground">
              Prism ImaGen
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              AI-powered all-in-one marketing solutions for FRW Healthcare using
              the MEAN Stack.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image
                src="/assets/imagen.png"
                alt="Prism ImaGen marketing platform"
                width={500}
                height={500}
                className={projectImageClass}
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-foreground">
              HelpBuddy
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Simplifying complaint processes using AI for vulnerable
              populations in New Zealand. Built with OpenAI API and MERN Stack.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image
                src="/assets/helpbuddy.jpeg"
                alt="HelpBuddy AI complaint platform"
                width={500}
                height={500}
                className={projectImageClass}
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-foreground">
              IT Postgraduate Internship — Daifuku Oceania
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              November 2023 – February 2024. Managed deployment and testing of
              over 100 AI-powered edge devices for a Self-Service Bag Drop system
              using Nvidia Jetson Orin NX, delivered on scope and on time.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image
                src="/assets/vietnam-airports-sbds.png"
                alt="Vietnam Airports SBDs"
                width={500}
                height={500}
                className={projectImageClass}
              />
              <Image
                src="/assets/jetson.png"
                alt="Nvidia Jetsons Deployment"
                width={500}
                height={500}
                className={projectImageClass}
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-foreground">
              Waves
            </h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              A social media platform advocating environmental awareness.
              Developed with MERN Stack.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image
                src="/assets/waves.jpeg"
                alt="Waves environmental social platform"
                width={500}
                height={500}
                className={projectImageClass}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Senior SCADA Engineer at Daifuku Oceania, leading the SCADA team and
            ensuring ISO compliance across several international projects.
          </p>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Involved projects: Chengdu SBD SCADA (China), Birmingham Airport
            (United Kingdom), Bandaranaike International Airport (Sri Lanka),
            Sphinx Airport (Egypt), Honiara Airport (Solomon Island), New
            Chitose Airport (Japan)
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/chitose-airport.png"
              alt="New Chitose Airport"
              width={500}
              height={500}
              className={projectImageClass}
            />
            <Image
              src="/assets/klia2-airport.png"
              alt="KLIA2 Airport SCADA"
              width={500}
              height={500}
              className={projectImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018-2021",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            SCADA Engineer at Daifuku Oceania responsible for SCADA development,
            requirement studies, and project implementation for baggage handling
            systems.
          </p>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Involved projects: Dar Es Salaam Airport (Tanzania), Darwin
            International Airport (Australia), MAHB - KLIA2 Enhancement Project
            (Malaysia), Quebec New Outbound BHS-BTS System (Canada), Casablanca
            Airport (Morocco), Soekarno-Hatta Airport (Indonesia), Banyuwangi
            Airport (Indonesia), Marsa Alam International Airport (Egypt),
            Riyadh Airport (Saudi Arabia), Futurebud Dhaka Air Cargo
            (Bangladesh), Palau Airport (Palau), FedEx CDG EBSS NCOY Project
            (France)
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/tanzania-airport.png"
              alt="Dar Es Salaam Airport"
              width={500}
              height={500}
              className={projectImageClass}
            />
            <Image
              src="/assets/casa-airport.jpg"
              alt="Casablanca Airport SCADA"
              width={500}
              height={500}
              className={projectImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015-2018",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Technical Support and SCADA Development Engineer at PcVue (M) Sdn.
            Bhd. Provided technical support for SCADA systems and contributed to
            SCADA development.
          </p>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Involved projects: Hyundai Steel Dangjin Plant (South Korea), UBS AG
            EMRS (Singapore), PFTAsia Egg Crack-Detection Machine (Malaysia),
            KualitiAlam Monitoring System (Malaysia).
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/hyundai-steel-plant.png"
              alt="Hyundai Steel Plant SCADA"
              width={500}
              height={500}
              className={projectImageClass}
            />
            <Image
              src="/assets/ubs-ag-emrs.jpg"
              alt="UBS AG EMRS SCADA"
              width={500}
              height={500}
              className={projectImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Final time as an IT Padawan at Tanarak Sdn. Bhd. Involved in several
            key projects during my time as an intern, where I gained experience
            in networking infrastructure, site assessments, and desktop computer
            maintenance.
          </p>
          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Projects: Schools in Mukah Division, Police General Operations Force
            (GOF) Camp Sarawak, Swinburne University of Technology Engineering
            Building, Sarawak Energy Berhad HQ, OSK Investment Bank Berhad
            Kuching, Sanmina SCI & Hitachi Malaysia, Institute Latihan
            Perindustrian Miri, and SOCSO Sarawak.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/assets/laptop.jpg"
              alt="Fixing a Laptop"
              width={500}
              height={500}
              className={projectImageClass}
            />
            <Image
              src="/assets/wiring.jpg"
              alt="Wires at SEB Headquarters"
              width={500}
              height={500}
              className={projectImageClass}
            />
            <Image
              src="/assets/seb.jpg"
              alt="SEB Headquarters"
              width={500}
              height={500}
              className={projectImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2008",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            Again, as an IT Padawan at Tanarak, where I performed cable
            installation, site assessments, and system maintenance for various
            projects.
          </p>
          <p className="text-sm text-muted-foreground md:text-base">
            Projects: Sarawak Energy Berhad HQ, OSK Investment Bank Kuching,
            Sanmina SCI & Hitachi Malaysia.
          </p>
        </div>
      ),
    },
    {
      title: "2006",
      content: (
        <div>
          <p className="mb-4 text-sm text-muted-foreground md:text-base">
            First role as an IT padawan at Tanarak, where I gained practical
            experience in network infrastructure, cable installation, and
            maintenance.
          </p>
          <p className="text-sm text-muted-foreground md:text-base">
            Projects: Swinburne University of Technology Engineering Building,
            SOCSO Sarawak, Miri Industrial Training Institute.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="scroll-mt-24 w-full">
      <Timeline data={data} />
    </div>
  );
}
