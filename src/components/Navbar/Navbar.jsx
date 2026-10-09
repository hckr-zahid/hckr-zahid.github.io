import { useState, useEffect } from "react";
import { Menu, X, Shield, Sun, Moon } from "lucide-react";
import profile from "../../data/profile";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("zahid_portfolio_theme") ||
        (document.documentElement.getAttribute("data-theme") || "dark")
      );
    }
    return "dark";
  });
  const [activeSection, setActiveSection] = useState("about");

  const links = [
    ["About", "#about", "about"],
    ["Projects", "#projects", "projects"],
    ["Research", "#research", "research"],
    ["Labs", "#labs", "labs"],
    ["Certifications", "#certifications", "certifications"],
    ["Education", "#education", "education"],
    ["Contact", "#contact", "contact"],
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("zahid_portfolio_theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = links.map((link) => link[2]);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (scrollY < 300) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          href="#home"
          className="brand"
          aria-label="Zahid Ullah - Cybersecurity Portfolio"
        >
          <span className="brand-icon">
            <Shield size={19} />
          </span>

          <span className="brand-text">
            <strong>{profile.name}</strong>
            <small>{profile.handle.toUpperCase()} &bull; CYBERSECURITY</small>
          </span>
        </a>

        <div className="nav-group-right">
          <nav
            className={`nav-links ${open ? "open" : ""}`}
            aria-label="Main Navigation"
          >
            {links.map(([label, href, id]) => (
              <a
                key={href}
                href={href}
                className={activeSection === id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to Light Theme"
                  : "Switch to Dark Theme"
              }
              title={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="mobile-menu"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
