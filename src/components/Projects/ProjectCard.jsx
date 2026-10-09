import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  FileText,
  ImageOff,
  Shield,
} from "lucide-react";

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card">
      {/* Project screenshot — shows when image is added */}
      {!imgError ? (
        <div className="project-img-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
            onError={() => setImgError(true)}
          />
          <div className="project-img-overlay" />
        </div>
      ) : (
        <div className="project-img-placeholder">
          <ImageOff size={22} />
          <span>Screenshot coming soon</span>
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>

          <span className="project-status">
            <span />
            {project.status}
          </span>
        </div>

        <div className="project-icon">
          <Shield size={21} />
        </div>

        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-focus">
          <Code2 size={15} />
          <span>{project.focus}</span>
        </div>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.link || "https://github.com/BadGuy101"}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`View ${project.title} project on GitHub`}
          >
            View Project
            <ArrowUpRight size={16} />
          </a>

          {project.thesisUrl && (
            <a
              href={project.thesisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-thesis-link"
              aria-label={`Read ${project.title} Thesis PDF`}
            >
              <FileText size={15} />
              Thesis (PDF)
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
