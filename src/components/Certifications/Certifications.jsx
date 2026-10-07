import { useState } from "react";
import {
  Award,
  ExternalLink,
  ImageOff,
  ShieldCheck,
  X,
} from "lucide-react";

import certifications from "../../data/certifications";
import "./Certifications.css";

function CertImage({ cert }) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <img
      src={cert.image}
      alt={cert.title}
      className="cert-thumb"
      onError={() => setError(true)}
    />
  );
}

function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  function openLightbox(cert) {
    setLightbox(cert);
  }

  function closeLightbox() {
    setLightbox(null);
  }

  return (
    <section
      id="certifications"
      className="section certifications-section"
    >
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <Award size={16} />
            CERTIFICATE VAULT
          </div>

          <h2>
            Continuous
            <span> Technical Development</span>
          </h2>

          <p>
            Verified cybersecurity, networking, cloud, programming and
            machine-learning credentials — click any card to view the
            certificate image.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <article
              className="certificate-card"
              key={certificate.title}
              onClick={() => openLightbox(certificate)}
            >
              <div className="certificate-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="certificate-icon">
                <ShieldCheck size={20} />
              </div>

              <div className="certificate-content">
                <span>{certificate.category}</span>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <small>{certificate.date}</small>
              </div>

              <button
                className="cert-view-btn"
                aria-label={`View certificate: ${certificate.title}`}
              >
                <ExternalLink size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="cert-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="cert-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cert-lightbox-header">
              <div>
                <span className="cert-lightbox-category">
                  {lightbox.category}
                </span>
                <h3>{lightbox.title}</h3>
                <p>{lightbox.issuer} · {lightbox.date}</p>
              </div>

              <button
                className="cert-lightbox-close"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-lightbox-img-wrap">
              <CertImage cert={lightbox} />
              {/* If image hasn't been added yet */}
              <div className="cert-lightbox-placeholder">
                <ImageOff size={32} />
                <span>Certificate image not added yet.</span>
                <small>
                  Drop <code>{lightbox.image}</code> into your{" "}
                  <code>public/</code> folder.
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
