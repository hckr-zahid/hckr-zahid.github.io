import { CheckCircle2, Terminal } from "lucide-react";
import profile from "../../data/profile";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <Terminal size={16} />
            ABOUT / PROFILE
          </div>

          <h2>
            Security is built
            <span> through practice.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-strengths">
            <div className="strengths-header">
              <span>core_capabilities</span>
              <span>8 items</span>
            </div>

            <div className="strength-list">
              {profile.strengths.map((strength) => (
                <div className="strength-item" key={strength}>
                  <CheckCircle2 size={16} />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
