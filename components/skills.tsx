const Skills = () => {
  return (
    <section id="skills" className="bg-transparent rounded-lg p-6 md:p-8 shadow-lg">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Project Management Skills */}
          <div className="bg-background rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Project Management</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>ISO Compliance</li>
              <li>Jira</li>
              <li>Git</li>
              <li>Safety Audits</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-4">Multilingual</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Malay</li>
              <li>English</li>
              <li>French</li>
            </ul>
          </div>
          {/* OT Skills */}
          <div className="bg-background rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Operational Technology</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>OPC</li>
              <li>IEC 61850</li>
              <li>LonWorks</li>
              <li>SNMP</li>
              <li>SCADA Systems</li>
              <li>PLC Emulation</li>
              <li>WireShark</li>
            </ul>
          </div>

          {/* IT Skills */}
          <div className="bg-background rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Information Technology</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>VMware</li>
              <li>Cloud Deployment</li>
              <li>SQL Redundancy</li>
              <li>Failover Clustering</li>
              <li>AI Edge Deployment</li>
              <li>OpenAI API Integration</li>
              <li>MongoDB</li>
              <li>MERN/MEAN Stack</li>
              <li>JavaScript</li>
              <li>VB</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;