import { Github, Linkedin, Shield } from "lucide-react";

import profile from "../../data/profile";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Shield size={18} />
          </div>

          <div>
            <strong>{profile.name}</strong>
            <span>Cybersecurity Analyst</span>
          </div>
        </div>

        <div className="footer-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} {profile.name}.
          Built for security.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
