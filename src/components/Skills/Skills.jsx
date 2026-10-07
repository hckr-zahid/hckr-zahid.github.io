import {
  Code2,
  Cloud,
  Database,
  Network,
  Search,
  Shield,
  Terminal,
} from "lucide-react";

import skills from "../../data/skills";
import "./Skills.css";

const icons = [
  Shield,
  Network,
  Search,
  Database,
  Terminal,
  Code2,
  Cloud,
  Shield,
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <Code2 size={16} />
            TECHNICAL STACK
          </div>

          <h2>
            Tools,
            <span> Technologies & Capabilities</span>
          </h2>

          <p>
            A security-focused technical stack spanning offensive and
            defensive security, systems, networking, programming,
            cloud and investigation.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div className="skill-card" key={group.category}>
                <div className="skill-icon">
                  <Icon size={19} />
                </div>

                <h3>{group.category}</h3>

                <div className="skill-items">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
