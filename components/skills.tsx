const Skills = () => {
  const columns = [
    {
      title: "Project Management",
      items: ["ISO Compliance", "Jira", "Git", "Safety Audits"],
      secondary: {
        title: "Multilingual",
        items: ["Malay", "English", "French"],
      },
    },
    {
      title: "Operational Technology",
      items: [
        "OPC",
        "IEC 61850",
        "LonWorks",
        "SNMP",
        "SCADA Systems",
        "PLC Emulation",
        "WireShark",
      ],
    },
    {
      title: "Information Technology",
      items: [
        "VMware",
        "Cloud Deployment",
        "SQL Redundancy",
        "Failover Clustering",
        "AI Edge Deployment",
        "OpenAI API Integration",
        "MongoDB",
        "MERN/MEAN Stack",
        "JavaScript",
        "VB",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        Capabilities
      </p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        Skills
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-12">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {col.items.map((item) => (
                <li key={item} className="text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
            {col.secondary && (
              <>
                <h3 className="mt-8 text-sm font-medium tracking-wide text-foreground">
                  {col.secondary.title}
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {col.secondary.items.map((item) => (
                    <li key={item} className="text-sm md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
