import {
  FileText,
  FileCheck2,
  FolderGit2,
  ExternalLink,
  ShieldAlert,
  Info,
  Terminal,
} from "lucide-react";
import researchProjects from "../../data/research";
import "./Research.css";

function ResearchCard({ item }) {
  return (
    <article className="research-card">
      <div className="research-card-header">
        <div className="research-meta-left">
          <span className="research-number">RESEARCH #{item.number}</span>
          <span className="research-category">{item.category}</span>
        </div>

        <div className="research-status">
          <span className="status-indicator" />
          <span>{item.status}</span>
        </div>
      </div>

      <div className="research-card-body">
        <div className="research-icon-wrapper">
          <Terminal size={22} />
        </div>

        <h3 className="research-title">{item.title}</h3>

        <p className="research-desc">{item.description}</p>

        {/* Topics badges */}
        <div className="research-topics" aria-label="Research topics">
          {item.topics.map((topic) => (
            <span key={topic} className="research-topic-badge">
              {topic}
            </span>
          ))}
        </div>

        {/* Methodology & Limitations Note */}
        {item.limitationNote && (
          <div className="research-limitation-box" role="note">
            <Info size={16} className="limitation-icon" />
            <p>
              <strong>Scope & Methodology:</strong> {item.limitationNote}
            </p>
          </div>
        )}

        {/* Action Links */}
        <div className="research-actions">
          <a
            href={item.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-research-primary"
            aria-label={`View GitHub repository for ${item.title}`}
          >
            <FolderGit2 size={16} />
            <span>View Research</span>
            <ExternalLink size={14} />
          </a>

          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-research-secondary"
            aria-label={`Read PDF Report for ${item.title}`}
          >
            <FileText size={16} />
            <span>Read PDF Report</span>
            <ExternalLink size={14} />
          </a>

          {item.docxUrl && (
            <a
              href={item.docxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-research-subtle"
              aria-label={`Download DOCX Report for ${item.title}`}
            >
              <FileCheck2 size={15} />
              <span>DOCX Report</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Research() {
  return (
    <section id="research" className="section research-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <ShieldAlert size={16} />
            SECURITY RESEARCH
          </div>

          <h2>
            Research &amp; <span>Analysis</span>
          </h2>

          <p>
            Evidence-based security research exploring software behavior,
            Windows security, system integrity, and defensive analysis.
          </p>
        </div>

        <div className="research-grid">
          {researchProjects.map((item) => (
            <ResearchCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
