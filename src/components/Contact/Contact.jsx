import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import profile from "../../data/profile";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="contact-card">
          <div className="contact-main">
            <div className="section-kicker">
              <Send size={16} />
              CONTACT
            </div>

            <h2>
              Let's build
              <span> something secure.</span>
            </h2>

            <p>
              Open to cybersecurity opportunities, security engineering
              projects, technical collaboration, research and remote work.
            </p>
          </div>

          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              <span>{profile.email}</span>
            </a>

            <a href={`tel:${profile.phone}`}>
              <Phone size={18} />
              <span>{profile.phone}</span>
            </a>

            <div>
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>

            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
