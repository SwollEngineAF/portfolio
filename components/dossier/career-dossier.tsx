const careerEntries = [
  {
    period: "2025 — Present",
    kind: "Professional experience",
    title: "IT Solutions Engineer",
    organization: "Daifuku Oceania",
    description: "Supporting international Self-Bag Drop deployments, backend high availability, and endpoint security across enterprise airport environments.",
    bullets: [
      "Deployed DSST units worldwide and supported Self-Bag Drop PC rollouts.",
      "Delivered a high-availability backend for Hong Kong International Airport T2 Self-Bag Drops with Collins Aerospace, using Microsoft Service Fabric, SQL databases and Loadbalancer.org ADCs, including stress testing.",
      "Hardened endpoints with strict peripheral access control across multiple HID types.",
    ],
  },
  {
    period: "2023 — 2025",
    kind: "Education & product work",
    title: "Master of Information Technology",
    organization: "University of Auckland · New Zealand",
    dates: "February 2023 — May 2025",
    description: "IT Postgraduate Internship · Daifuku Oceania · November 2023 — February 2024. Managed deployment and testing of 100+ AI-powered edge devices for a Self-Service Bag Drop system using Nvidia Jetson Orin NX, delivered on scope and on time.",
    projects: [
      { name: "Prism ImaGen", description: "AI marketing platform for FRW Healthcare.", stack: "MEAN STACK" },
      { name: "HelpBuddy", description: "AI complaint assistant for vulnerable populations in New Zealand.", stack: "OPENAI API · MERN" },
      { name: "Waves", description: "Environmental advocacy social platform.", stack: "MERN STACK" },
    ],
  },
  {
    period: "2021 — 2023",
    kind: "Professional experience",
    title: "Senior SCADA Engineer",
    organization: "Daifuku Oceania",
    description: "Led the SCADA team and ensured ISO compliance across international airport projects.",
    locations: "Chengdu SBD SCADA · China / Birmingham Airport · UK / Bandaranaike International Airport · Sri Lanka / Sphinx Airport · Egypt / Honiara Airport · Solomon Islands / New Chitose Airport · Japan",
  },
  {
    period: "2018 — 2021",
    kind: "Professional experience",
    title: "SCADA Engineer",
    organization: "Daifuku Oceania",
    description: "SCADA development, requirement studies, and baggage handling system implementation across 12 international airports.",
    locations: "Dar Es Salaam · Tanzania / Darwin · Australia / MAHB KLIA2 Enhancement · Malaysia / Quebec Outbound BHS-BTS · Canada / Casablanca · Morocco / Soekarno-Hatta · Indonesia / Banyuwangi · Indonesia / Marsa Alam · Egypt / Riyadh · Saudi Arabia / Futurebud Dhaka Air Cargo · Bangladesh / Palau Airport · Palau / FedEx CDG EBSS NCOY · France",
  },
  {
    period: "2015 — 2018",
    kind: "Professional experience",
    title: "Technical Support & SCADA Development Engineer",
    organization: "PcVue (M) Sdn. Bhd.",
    description: "Technical support, SCADA development and implementation across industrial and financial systems.",
    locations: "Hyundai Steel Dangjin Plant · South Korea / UBS AG EMRS · Singapore / PFTAsia Egg Crack-Detection Machine · Malaysia / KualitiAlam Monitoring System · Malaysia",
  },
  {
    period: "2011 · 2008 · 2006",
    kind: "Early experience",
    title: "IT Padawan",
    organization: "Tanarak Sdn. Bhd.",
    description: "Three stints in network infrastructure, cable installation, site assessments, and system maintenance across Sarawak.",
    locations: "Schools in Mukah Division / Police GOF Camp Sarawak / Swinburne University Engineering Building / Sarawak Energy Berhad HQ / OSK Investment Bank Kuching / Sanmina SCI & Hitachi Malaysia / ILP Miri / SOCSO Sarawak",
  },
];

export function CareerDossier() {
  return (
    <section aria-labelledby="work-title" className="content-section work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">01 <span>·</span> WORK &amp; EDUCATION</p>
        <h2 id="work-title">A record of building things that work<span className="period">.</span></h2>
        <p className="section-intro">A career moving between control rooms, infrastructure and the interfaces people rely on.</p>
      </div>
      <div className="career-timeline">
        {careerEntries.map((entry, index) => (
          <article className="career-entry" key={entry.period}>
            <div className="career-date">
              <span className="eyebrow">{entry.period}</span>
              <span className="entry-kind">{entry.kind}</span>
            </div>
            <div className="career-role">
              <h3>{entry.title}</h3>
              <p className="organization">{entry.organization}{entry.dates && <><span> · </span>{entry.dates}</>}</p>
            </div>
            <div className="career-detail">
              <p className="entry-description">{entry.description}</p>
              {entry.bullets && (
                <ul className={`work-highlights${index === 0 ? " highlight-card" : ""}`}>
                  {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {entry.projects && (
                <div className="project-cards" aria-label="Selected builds">
                  {entry.projects.map((project) => (
                    <article className="project-card" key={project.name}>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <span className="project-stack">{project.stack}</span>
                    </article>
                  ))}
                </div>
              )}
              {entry.locations && <p className="location-list"><span className="micro-label">SELECTED PROJECTS</span>{entry.locations}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
