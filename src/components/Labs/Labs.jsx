import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  FlaskConical,
  ImageOff,
} from "lucide-react";
import labs from "../../data/labs";
import "./Labs.css";

function LabCard({ lab }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="lab-card">
      {/* Lab screenshot */}
      {!imgError ? (
        <div className="lab-img-wrap">
          <img
            src={lab.image}
            alt={lab.title}
            className="lab-img"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="lab-img-placeholder">
          <ImageOff size={18} />
          <span>Screenshot coming soon</span>
        </div>
      )}

      <div className="lab-card-body">
        <div className="lab-header">
          <span className="lab-code">{lab.code}</span>
          <Activity size={17} />
        </div>

        <h3>{lab.title}</h3>

        <p>{lab.description}</p>

        <div className="lab-tech">
          {lab.technologies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="lab-objectives">
          <strong>LAB OBJECTIVES</strong>

          {lab.objectives.map((objective) => (
            <div key={objective}>
              <span />
              {objective}
            </div>
          ))}
        </div>

        <a href="#contact">
          Discuss Lab
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

function Labs() {
  return (
    <section id="labs" className="section labs-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <FlaskConical size={16} />
            HANDS-ON LABS
          </div>

          <h2>
            Building
            <span> Real Security Environments</span>
          </h2>

          <p>
            Practical environments used to develop administration,
            detection, investigation, networking and defensive security
            skills.
          </p>
        </div>

        <div className="labs-grid">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Labs;
