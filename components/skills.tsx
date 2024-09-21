const Skills = () => {
    return (
      <section id="skills" className="bg-transparent rounded-lg p-6 md:p-8 shadow-lg">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Angular</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Django</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;