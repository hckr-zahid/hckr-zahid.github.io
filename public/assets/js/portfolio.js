/**
 * Portfolio Data Engine: Zahid Ullah
 * Includes:
 * 1. CyberGun Spotlight Screenshots & Thesis Link
 * 2. 6 Core Cybersecurity & Systems Projects
 * 3. Verified Industry Certification Credentials (24 items across ISC2, Cisco, Google, IBM, Johns Hopkins, Fortinet, etc.)
 */

// CYBERGUN SPOTLIGHT SCREENSHOTS
const CYBERGUN_DATA = [
  {
    id: "cg-01",
    title: "CyberGun Threat Mitigation Suite - Real-Time Dashboard",
    categoryLabel: "CyberGun Architecture",
    description: "Centralized threat operations dashboard showing threat database readiness, live system resource monitoring (CPU 20%, Memory 77%), tracked processes (CyberGun.exe, splunkd.exe), and live event feeds.",
    image: "assets/img/projects/cybergun-dashboard.png",
    tags: ["PyQt5", "Threat Intelligence", "Process Monitor", "YARA / Hashes"]
  },
  {
    id: "cg-02",
    title: "Host Telemetry & Running Process Audit",
    categoryLabel: "System Status Engine",
    description: "Detailed live system inspection on Host 'Expert-1' (Windows 10, 8 Cores, 16GB RAM) auditing 299 running processes, active threads, disk I/O rates (5.9 MB/s read), and real-time network traffic.",
    image: "assets/img/projects/cybergun-system-status.png",
    tags: ["System Activity", "Process Inspection", "Disk I/O", "Network Telemetry"]
  },
  {
    id: "cg-03",
    title: "Layered Scan Engine & Real-Time Threat Neutralization",
    categoryLabel: "Detection & Threat Logs",
    description: "Background execution of layered scan pipeline across 169 files: querying 3,160,113 malware hashes in SQLite, YARA rule validation, byte signature analysis, string regex pattern detection, and LightGBM machine learning inference (pdf_model.lgbm) with desktop notification alert.",
    image: "assets/img/projects/cybergun-threat-logs.png",
    tags: ["Static Engine", "3.1M Hash Index", "LightGBM ML Model", "YARA Rules"]
  },
  {
    id: "cg-04",
    title: "Quarantine Zone & File Isolation Management",
    categoryLabel: "Incident Remediation",
    description: "Encrypted file quarantine zone tracking malicious payloads, temporary files, and suspicious attachments with timestamped audit logs, original paths, file sizes, and options for restoration or permanent destruction.",
    image: "assets/img/projects/cybergun-quarantine.png",
    tags: ["Quarantine Zone", "Payload Isolation", "Remediation", "Integrity Control"]
  }
];

// COMPREHENSIVE CERTIFICATIONS & CREDENTIALS DATASET
const CERTIFICATES_DATA = [
  {
    id: "cert-01",
    title: "Certified in Cybersecurity (CC)",
    issuer: "(ISC)2",
    badgeType: "Industry Certification",
    category: "industry",
    image: "assets/img/certificates/ISC2-Certified-in-Cybersecurity-CC.png",
    pdf: "assets/img/certificates/ISC2-Certified-in-Cybersecurity-CC.pdf",
    description: "Globally recognized baseline credential verifying competence in Security Principles, Incident Response, Access Controls, and Network Security."
  },
  {
    id: "cert-02",
    title: "(ISC)2 Certified in Cybersecurity Specialization",
    issuer: "(ISC)2",
    badgeType: "Professional Specialization",
    category: "industry",
    image: "assets/img/certificates/ISC2-Certified-in-Cybersecurity-Specialization.png",
    pdf: "assets/img/certificates/ISC2-Certified-in-Cybersecurity-Specialization.pdf",
    description: "5-course specialization covering Security Principles, Incident Response, Access Controls, Network Security, and Security Operations."
  },
  {
    id: "cert-03",
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    badgeType: "Professional Certification",
    category: "offensive",
    image: "assets/img/certificates/Cisco-Ethical-Hacker.png",
    pdf: "assets/img/certificates/Cisco-Ethical-Hacker.pdf",
    description: "Hands-on penetration testing, ethical hacking, vulnerability scanning, network reconnaissance, and defense countermeasures - issued by Cisco."
  },
  {
    id: "cert-04",
    title: "Introduction to Cybersecurity Knowledge Check",
    issuer: "Cisco Networking Academy",
    badgeType: "Foundation Certificate",
    category: "engineering",
    image: "assets/img/certificates/Cisco-Introduction-to-Cybersecurity-Knowledge-Check.png",
    pdf: "assets/img/certificates/Cisco-Introduction-to-Cybersecurity-Knowledge-Check.pdf",
    description: "Verified foundational knowledge of cybersecurity concepts, threats, vulnerabilities, and defensive measures through Cisco knowledge check."
  },
  {
    id: "cert-05",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    badgeType: "Professional Certificate",
    category: "soc",
    image: "assets/img/certificates/Google-Cybersecurity-Professional-Certificate.png",
    pdf: "assets/img/certificates/Google-Cybersecurity-Professional-Certificate.pdf",
    description: "9-course comprehensive program covering Linux CLI, SQL, Python security automation, SIEM triage, and threat mitigation via the Google Cybersecurity curriculum."
  },
  {
    id: "cert-06",
    title: "Google Cloud Cybersecurity Professional Certificate",
    issuer: "Google Cloud / Coursera",
    badgeType: "Cloud Security",
    category: "cloud",
    image: "assets/img/certificates/Google-Cloud-Cybersecurity-Professional-Certificate.png",
    pdf: "assets/img/certificates/Google-Cloud-Cybersecurity-Professional-Certificate.pdf",
    description: "5-course program securing cloud workloads, IAM least privilege, Cloud Audit Logging, VPC Service Controls, and security posture management on GCP."
  },
  {
    id: "cert-07",
    title: "Networking in Google Cloud Specialization",
    issuer: "Google Cloud / Coursera",
    badgeType: "Cloud Architecture",
    category: "cloud",
    image: "assets/img/certificates/Google-Cloud-Networking-Specialization.png",
    pdf: "assets/img/certificates/Google-Cloud-Networking-Specialization.pdf",
    description: "6-course specialization: advanced VPC routing, Cloud Interconnect, subnets, firewall rules, Cloud NAT, and network performance diagnostics."
  },
  {
    id: "cert-08",
    title: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM / Coursera",
    badgeType: "Professional Certificate",
    category: "soc",
    image: "assets/img/certificates/IBM-Cybersecurity-Analyst-Professional-Certificate.png",
    pdf: "assets/img/certificates/IBM-Cybersecurity-Analyst-Professional-Certificate.pdf",
    description: "14-course deep dive into SOC workflows, threat intelligence, endpoint behavior, IBM QRadar SIEM, and digital forensics incident response capstone."
  },
  {
    id: "cert-09",
    title: "IBM and ISC2 Cybersecurity Specialist",
    issuer: "IBM and (ISC)2",
    badgeType: "Joint Specialization",
    category: "industry",
    image: "assets/img/certificates/IBM-and-ISC2-Cybersecurity-Specialist.png",
    pdf: "assets/img/certificates/IBM-and-ISC2-Cybersecurity-Specialist.pdf",
    description: "12-course joint specialization bridging enterprise risk management, access governance, threat hunting, and regulatory security policies."
  },
  {
    id: "cert-10",
    title: "Fortinet Network Security Specialization",
    issuer: "Fortinet, Inc.",
    badgeType: "Vendor Credential",
    category: "cloud",
    image: "assets/img/certificates/Fortinet-Network-Security-Specialization.png",
    pdf: "assets/img/certificates/Fortinet-Network-Security-Specialization.pdf",
    description: "5-course specialization: perimeter threat analysis, Next-Generation Firewall (NGFW) architectures, network segmentation, and secure fabric operations."
  },
  {
    id: "cert-11",
    title: "Advanced Cybersecurity Techniques",
    issuer: "Johns Hopkins University",
    badgeType: "University Certificate",
    category: "industry",
    image: "assets/img/certificates/Johns-Hopkins-Advanced-Cybersecurity-Techniques.png",
    pdf: "assets/img/certificates/Johns-Hopkins-Advanced-Cybersecurity-Techniques.pdf",
    description: "Advanced cryptographic mechanisms, cyber defense models, secure architecture paradigms, and vulnerability mitigation from Johns Hopkins University."
  },
  {
    id: "cert-12",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Stanford",
    badgeType: "AI and Machine Learning",
    category: "engineering",
    image: "assets/img/certificates/DeepLearningAI-Stanford-Supervised-Machine-Learning.png",
    pdf: "assets/img/certificates/DeepLearningAI-Stanford-Supervised-Machine-Learning.pdf",
    description: "Foundational ML algorithms, gradient descent, feature engineering, and classification models - techniques directly applied in the CyberGun threat detection engine."
  },
  {
    id: "cert-13",
    title: "Object Oriented Programming in C++ Specialization",
    issuer: "University of London / Coursera",
    badgeType: "Software Engineering",
    category: "engineering",
    image: "assets/img/certificates/University-of-London-OOP-in-Cpp-Specialization.png",
    pdf: "assets/img/certificates/University-of-London-OOP-in-Cpp-Specialization.pdf",
    description: "5-course mastery in OOP design patterns, encapsulation, inheritance, polymorphism, and memory management - applied in the C++ Crypto Trading capstone project."
  },
  {
    id: "cert-14",
    title: "Penetration Testing Web Hacking",
    issuer: "KPITB / KP Information Technology Board",
    badgeType: "Offensive Security",
    category: "offensive",
    image: "assets/img/certificates/KPITB-Penetration-Testing-Web-Hacking.png",
    pdf: "assets/img/certificates/KPITB-Penetration-Testing-Web-Hacking.pdf",
    description: "Web application penetration testing, OWASP Top 10 exploits (SQLi, XSS, CSRF, SSRF), and vulnerability exploitation - certified by KP IT Board Pakistan."
  },
  {
    id: "cert-15",
    title: "Cybersecurity Level 3 - Palo Alto Firewall",
    issuer: "CyberPashto Academy",
    badgeType: "Advanced Defense",
    category: "cloud",
    image: "assets/img/certificates/CyberPashto-Cybersecurity-Level-3-Palo-Alto.png",
    pdf: "assets/img/certificates/CyberPashto-Cybersecurity-Level-3-Palo-Alto.pdf",
    description: "Advanced Palo Alto firewall configuration, NGFW policy management, threat prevention profiles, and enterprise security architecture."
  },
  {
    id: "cert-16",
    title: "Cybersecurity Level 2 - Hacking within Lab",
    issuer: "CyberPashto Academy",
    badgeType: "Ethical Hacking",
    category: "offensive",
    image: "assets/img/certificates/CyberPashto-Cybersecurity-Level-2-Lab-Hacking.png",
    pdf: "assets/img/certificates/CyberPashto-Cybersecurity-Level-2-Lab-Hacking.pdf",
    description: "Controlled lab hacking exercises covering network scanning, exploitation, privilege escalation, and post-exploitation within an isolated environment."
  },
  {
    id: "cert-17",
    title: "Full Ethical Hacking Course Volume 1",
    issuer: "CyberPashto Academy",
    badgeType: "Ethical Hacking",
    category: "offensive",
    image: "assets/img/certificates/CyberPashto-Full-Ethical-Hacking-Course-Vol-1.png",
    pdf: "assets/img/certificates/CyberPashto-Full-Ethical-Hacking-Course-Vol-1.pdf",
    description: "Comprehensive ethical hacking curriculum: footprinting, scanning, enumeration, exploitation, and social engineering - Volume 1 of a multi-part series."
  },
  {
    id: "cert-18",
    title: "Dark Web Level 1",
    issuer: "CyberPashto Academy",
    badgeType: "Threat Intelligence",
    category: "offensive",
    image: "assets/img/certificates/CyberPashto-Dark-Web-Level-1.png",
    pdf: "assets/img/certificates/CyberPashto-Dark-Web-Level-1.pdf",
    description: "Techniques for monitoring darknet forums, tracing compromised credentials, evaluating underground threat vectors, and maintaining OPSEC."
  },
  {
    id: "cert-19",
    title: "Kali Linux For Beginners",
    issuer: "CyberPashto Academy",
    badgeType: "Offensive Tooling",
    category: "offensive",
    image: "assets/img/certificates/CyberPashto-Kali-Linux-For-Beginners.png",
    pdf: "assets/img/certificates/CyberPashto-Kali-Linux-For-Beginners.pdf",
    description: "Mastery in the Kali Linux offensive distribution: custom scripting, payload delivery, Nmap reconnaissance, and penetration testing tools."
  },
  {
    id: "cert-20",
    title: "Different Types of Cloud Computing",
    issuer: "CyberPashto Academy",
    badgeType: "Cloud Fundamentals",
    category: "cloud",
    image: "assets/img/certificates/CyberPashto-Different-Types-of-Cloud-Computing.png",
    pdf: "assets/img/certificates/CyberPashto-Different-Types-of-Cloud-Computing.pdf",
    description: "IaaS, PaaS, SaaS cloud service models, public vs private vs hybrid cloud architectures, and security considerations for cloud deployments."
  },
  {
    id: "cert-21",
    title: "Introduction to Cybersecurity Careers",
    issuer: "IBM / Coursera",
    badgeType: "Foundation Certificate",
    category: "soc",
    image: "assets/img/certificates/IBM-Introduction-to-Cybersecurity-Careers.png",
    pdf: "assets/img/certificates/IBM-Introduction-to-Cybersecurity-Careers.pdf",
    description: "Overview of cybersecurity career pathways, roles, SOC analyst responsibilities, and industry certifications mapped to job families."
  },
  {
    id: "cert-22",
    title: "Introduction to Cybersecurity Tools and Cyberattacks",
    issuer: "IBM / Coursera",
    badgeType: "Security Operations",
    category: "soc",
    image: "assets/img/certificates/IBM-Introduction-to-Cybersecurity-Tools-and-Cyberattacks.png",
    pdf: "assets/img/certificates/IBM-Introduction-to-Cybersecurity-Tools-and-Cyberattacks.pdf",
    description: "Core SIEM tools, cyberattack taxonomy, phishing, malware types, denial-of-service, and defensive countermeasures - IBM V3 curriculum."
  },
  {
    id: "cert-23",
    title: "Network Security and Database Vulnerabilities",
    issuer: "IBM / Coursera",
    badgeType: "Security Operations",
    category: "soc",
    image: "assets/img/certificates/IBM-Network-Security-and-Database-Vulnerabilities.png",
    pdf: "assets/img/certificates/IBM-Network-Security-and-Database-Vulnerabilities.pdf",
    description: "Assessing enterprise database weaknesses, SQL injection vectors, network protocol analysis, and securing relational data stores against exfiltration."
  },
  {
    id: "cert-24",
    title: "All Certificates Compendium",
    issuer: "Multiple Institutions",
    badgeType: "Compendium",
    category: "compendium",
    image: "assets/img/certificates/All-Certificates-Compendium.png",
    pdf: "assets/img/certificates/All-Certificates-Compendium.pdf",
    description: "Complete collection of all earned certificates: Google Cybersecurity, Google Cloud, IBM Analyst, IBM+ISC2 Specialist, Fortinet, ISC2 CC, and ISC2 Specialization."
  }
];

// COMBINED DATASET FOR UNIFIED LIGHTBOX NAVIGATION
const ALL_INSPECTOR_ITEMS = [
  ...CYBERGUN_DATA.map(d => ({ ...d, modalType: "CyberGun Project" })),
  ...CERTIFICATES_DATA.map(d => ({ ...d, modalType: "Verified Certificate", tags: [d.issuer, d.badgeType] }))
];

// APP INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderCertificates();
  initFilterButtons();
  initLightbox();
  initThemeToggle();
  initMobileNav();
  setupSmoothScroll();
});

// RENDER CERTIFICATES
function renderCertificates(filterCategory = 'all') {
  const container = document.getElementById('certGalleryGrid');
  if (!container) return;

  const items = filterCategory === 'all'
    ? CERTIFICATES_DATA
    : CERTIFICATES_DATA.filter(cert => cert.category === filterCategory);

  container.innerHTML = items.map((cert) => {
    const globalIndex = ALL_INSPECTOR_ITEMS.findIndex(d => d.id === cert.id);
    return `
      <div class="cert-showcase-card">
        <div class="cert-preview-wrap" onclick="openLightbox(${globalIndex})">
          <img src="${cert.image}" alt="${escapeHtml(cert.title)}" loading="lazy" />
          <div class="image-zoom-overlay">
            <span class="zoom-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Inspect Certificate
            </span>
          </div>
        </div>
        <div class="cert-card-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
            <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--accent-cyan); background:rgba(0,229,255,0.1); padding:0.15rem 0.4rem; border-radius:4px; font-weight:700;">${escapeHtml(cert.badgeType)}</span>
            <span style="font-size:0.75rem; color:var(--text-dim); font-weight:600;">${escapeHtml(cert.issuer)}</span>
          </div>
          <h4 class="cert-title">${escapeHtml(cert.title)}</h4>
          <p style="font-size:0.83rem; color:var(--text-muted); line-height:1.5; margin-bottom:1rem; flex-grow:1;">
            ${escapeHtml(cert.description)}
          </p>
          <div class="cert-actions">
            <button class="inspect-btn" onclick="openLightbox(${globalIndex})">
              <span>View Credential</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <a href="${cert.pdf}" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem; font-weight:600; color:var(--accent-cyan); display:inline-flex; align-items:center; gap:0.3rem;">
              <span>Verify PDF</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// FILTER CONTROLS
function initFilterButtons() {
  // Certificate filters
  const certBar = document.getElementById('certFilterBar');
  if (certBar) {
    const certButtons = certBar.querySelectorAll('.filter-btn');
    certButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        certButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-cert-filter') || 'all';
        renderCertificates(category);
      });
    });
  }
}

// LIGHTBOX LOGIC
let currentLightboxIndex = 0;

function openLightbox(index) {
  if (index < 0 || index >= ALL_INSPECTOR_ITEMS.length) return;
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + ALL_INSPECTOR_ITEMS.length) % ALL_INSPECTOR_ITEMS.length;
  updateLightboxContent();
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % ALL_INSPECTOR_ITEMS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = ALL_INSPECTOR_ITEMS[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById('lightboxImage');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const badgeEl = document.getElementById('lightboxBadge');
  const stepEl = document.getElementById('lightboxStep');
  const tagsEl = document.getElementById('lightboxTags');
  const viewRawLink = document.getElementById('lightboxRawLink');

  if (imgEl) {
    imgEl.src = item.image;
    imgEl.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.description;
  if (badgeEl) badgeEl.textContent = item.modalType || item.categoryLabel;
  if (stepEl) stepEl.textContent = `Asset ${currentLightboxIndex + 1} of ${ALL_INSPECTOR_ITEMS.length}`;
  if (tagsEl) {
    tagsEl.innerHTML = (item.tags || []).map(t => `<span class="tag-badge">${escapeHtml(t)}</span>`).join(' ');
  }
  if (viewRawLink) {
    viewRawLink.href = item.image;
  }
}

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });
}

// THEME TOGGLE
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('zahid_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('zahid_portfolio_theme', target);
      updateThemeIcon(target);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  if (!iconSpan) return;
  if (theme === 'light') {
    iconSpan.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    iconSpan.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// MOBILE NAV & ACTIVE SECTION TRACKING
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggleBtn');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = navLinks.classList.contains('mobile-open');
      if (isVisible) {
        navLinks.classList.remove('mobile-open');
        navLinks.style.display = 'none';
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        navLinks.classList.add('mobile-open');
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--bg-secondary)';
        navLinks.style.padding = '1.25rem 1.5rem';
        navLinks.style.borderBottom = '1px solid var(--border-color)';
        navLinks.style.gap = '0.75rem';
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 880) {
          navLinks.classList.remove('mobile-open');
          navLinks.style.display = 'none';
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Active section tracking on scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

// SMOOTH SCROLL WITH NAVBAR OFFSET
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 74;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
