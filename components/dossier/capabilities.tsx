const capabilityGroups = [
  {
    number: "01",
    title: "Operational Technology",
    skills: ["OPC", "IEC 61850", "LonWorks", "SNMP", "SCADA Systems", "PLC Emulation", "WireShark"],
  },
  {
    number: "02",
    title: "Information Technology",
    skills: ["VMware", "Cloud Deployment", "SQL Redundancy", "Failover Clustering", "AI Edge Deployment", "OpenAI API Integration", "MongoDB", "MERN / MEAN Stack", "JavaScript", "VB"],
  },
  {
    number: "03",
    title: "Project Management",
    skills: ["ISO Compliance", "Jira", "Git", "Safety Audits"],
  },
  {
    number: "04",
    title: "Multilingual",
    skills: ["Malay", "English", "French"],
  },
];

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="content-section" id="capabilities">
      <div className="section-heading">
        <p className="eyebrow">02 <span>·</span> CAPABILITIES</p>
        <h2 id="capabilities-title">Tools for complex systems<span className="period">.</span></h2>
        <p className="section-intro">A practical range across operational technology, infrastructure and product delivery.</p>
      </div>
      <div className="capability-grid">
        {capabilityGroups.map((group) => (
          <article className="capability-card" key={group.number}>
            <div className="capability-card-heading">
              <span className="card-number">{group.number}</span>
              <h3>{group.title}</h3>
            </div>
            <ul aria-label={`${group.title} skills`} className="skill-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
