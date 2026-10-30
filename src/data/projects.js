const projects = [
  {
    id: "cybergun",
    number: "01",
    title: "CyberGun",
    category: "Threat Detection",
    description:
      "Dynamic and static threat detection system designed to analyze suspicious files and security indicators using automated analysis techniques.",
    technologies: [
      "Python",
      "Threat Intelligence",
      "Malware Analysis",
      "Static Analysis",
      "Dynamic Analysis",
    ],
    focus: "Threat Detection & Malware Analysis",
    status: "Completed",
    featured: true,
    image: "/images/projects/cybergun.jpg",
    link: "https://github.com/hckr-zahid/CyberGun",
    thesisUrl: "/thesis/CyberGun Final Thesis.pdf",
  },

  {
    id: "nids",
    number: "02",
    title: "Network Intrusion Detection & Monitoring",
    category: "Network Security",
    description:
      "Hybrid NIDS combining deterministic YAML signatures with unsupervised Isolation Forest ML anomaly scoring, Scapy dissection, and flow reconstruction.",
    technologies: [
      "Python 3",
      "Scapy",
      "Isolation Forest",
      "Suricata",
      "Zeek",
      "PCAP Analysis",
    ],
    focus: "Network Detection Engineering & Anomaly ML",
    status: "Completed",
    featured: true,
    image: "/images/projects/nids.jpg",
    link: "https://github.com/hckr-zahid/NIDS-Lab",
  },

  {
    id: "incident-response",
    number: "03",
    title: "Digital Forensics & Incident Response Lab",
    category: "DFIR",
    description:
      "Forensic investigation framework with artifact parsers (Evtx, Prefetch, MFT), memory analysis, Sigma & YARA crosswalks, and NIST IR runbooks.",
    technologies: [
      "Python 3",
      "Volatility",
      "Autopsy",
      "YARA",
      "Sigma Rules",
      "NIST SP 800-61",
    ],
    focus: "Digital Forensics & Incident Response",
    status: "Completed",
    featured: true,
    image: "/images/projects/incident-response.jpg",
    link: "https://github.com/hckr-zahid/DFIR-Lab",
  },

  {
    id: "security-automation",
    number: "04",
    title: "SecAuto: Security Orchestration & Response",
    category: "Security Automation",
    description:
      "Declarative SOAR framework executing YAML-based DAG playbooks for automated threat intelligence enrichment, phishing analysis, and host containment.",
    technologies: [
      "Python 3",
      "FastAPI",
      "VirusTotal",
      "AbuseIPDB",
      "SOAR Engine",
      "Playbook DAG",
    ],
    focus: "SOAR & Security Engineering",
    status: "Completed",
    featured: true,
    image: "/images/projects/security-automation.jpg",
    link: "https://github.com/hckr-zahid/SecAuto",
  },

  {
    id: "vulnerability",
    number: "05",
    title: "Vuln-Hardening: OS & Container Security Engine",
    category: "Vulnerability Management",
    description:
      "Automated vulnerability remediation and baseline compliance engine supporting CIS Benchmarks, NIST 800-53, CVSS v3, and atomic rollbacks.",
    technologies: [
      "Python 3",
      "Nmap",
      "OpenVAS",
      "CIS Benchmarks",
      "NIST 800-53",
      "System Hardening",
    ],
    focus: "Vulnerability Remediation & Hardening",
    status: "Completed",
    featured: true,
    image: "/images/projects/vulnerability-assessment.jpg",
    link: "https://github.com/hckr-zahid/Vuln-Hardening",
  },

  {
    id: "crypto-platform",
    number: "06",
    title: "Object-Oriented Crypto Trading Platform",
    category: "Software Engineering",
    description:
      "Object-oriented cryptocurrency trading platform demonstrating software architecture, reusable components, and C++ programming principles.",
    technologies: [
      "C++",
      "OOP",
      "Software Engineering",
      "Data Structures",
    ],
    focus: "Object-Oriented Software Development",
    status: "Completed",
    featured: true,
    image: "/images/projects/crypto-platform.jpg",
  },
];

export default projects;
