import { ArrowUpRight, Github, ShieldCheck } from "lucide-react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <ShieldCheck size={16} />
            SECURITY PROJECTS
          </div>

          <h2>
            Engineering Security
            <span> Through Practice</span>
          </h2>

          <p>
            Selected cybersecurity projects covering threat detection,
            network security, incident response, digital forensics,
            vulnerability assessment and security automation.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/BadGuy101"
            target="_blank"
            rel="noreferrer"
            className="projects-github-link"
          >
            <Github size={18} />
            View GitHub Projects
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
