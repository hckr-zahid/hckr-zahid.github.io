import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  User,
} from "lucide-react";
import profile from "../../data/profile";
import "./Hero.css";

function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <div className="hero-terminal-label">
            <span>root@{profile.handle}</span>
            <span>~</span>
            <span>$ whoami</span>
          </div>

          <h1>
            {profile.name}
            <span className="hero-accent">.</span>
          </h1>

          <h2>
            Cybersecurity Analyst
            <span> | </span>
            Ethical Hacker
          </h2>

          <p>{profile.summary}</p>

          <div className="hero-location">
            <MapPin size={15} />
            {profile.location}
            <span className="location-separator">•</span>
            {profile.availability}
          </div>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              Explore My Work
              <ArrowUpRight size={17} />
            </a>

            <a className="btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {/* Profile photo — shows when you add the image file */}
          <div className="hero-photo-wrap">
            {!photoError ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className={`hero-photo ${photoLoaded ? "hero-photo--loaded" : ""}`}
                onLoad={() => setPhotoLoaded(true)}
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="hero-photo-placeholder">
                <User size={48} />
              </div>
            )}

            <div className="hero-photo-ring" />
          </div>

          {/* Floating terminal console */}
          <div className="hero-console">
            <div className="console-header">
              <span />
              <span />
              <span />
              <small>security-terminal</small>
            </div>

            <div className="console-body">
              <p>
                <span className="console-green">●</span>{" "}
                security environment online
              </p>

              <p>
                <span className="console-cyan">[01]</span>{" "}
                threat_detection ........ OK
              </p>

              <p>
                <span className="console-cyan">[02]</span>{" "}
                network_monitoring ..... OK
              </p>

              <p>
                <span className="console-cyan">[03]</span>{" "}
                incident_response ...... READY
              </p>

              <p>
                <span className="console-cyan">[04]</span>{" "}
                digital_forensics ...... READY
              </p>

              <p>
                <span className="console-cyan">[05]</span>{" "}
                security_automation .... ACTIVE
              </p>

              <div className="console-line">
                <span>root@hckr-zahid:~$</span>
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

export default Hero;
