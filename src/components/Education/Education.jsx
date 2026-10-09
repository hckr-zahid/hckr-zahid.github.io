import {
  BookOpen,
  GraduationCap,
} from "lucide-react";

import "./Education.css";

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <GraduationCap size={16} />
            EDUCATION
          </div>

          <h2>
            Academic
            <span> Foundation</span>
          </h2>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <BookOpen size={25} />
          </div>

          <div>
            <span className="education-label">
              BACHELOR OF SCIENCE
            </span>

            <h3>BSc Computer Science</h3>

            <p>University of Peshawar</p>

            <div className="education-meta">
              <span>2025</span>
              <span>Computer Science</span>
              <span>Cybersecurity Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
