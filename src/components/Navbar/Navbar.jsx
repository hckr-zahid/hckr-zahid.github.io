import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import profile from "../../data/profile";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Labs", "#labs"],
    ["Skills", "#skills"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <Shield size={19} />
          </span>

          <span>
            <strong>{profile.handle}</strong>
            <small>CYBERSECURITY</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
