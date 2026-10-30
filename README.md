# Zahid Ullah — Cybersecurity Engineer & Threat Researcher Portfolio

[![Live Site](https://img.shields.io/badge/Live_Portfolio-hckr--zahid.github.io-0284c7?style=for-the-badge&logo=googlechrome&logoColor=white)](https://hckr-zahid.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-hckr--zahid-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hckr-zahid)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Zahid_Ullah-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hckr-zahid)
[![Credentials](https://img.shields.io/badge/Certifications-CHFI%20%7C%20CC%20%7C%20CEH%20%7C%20Google%20%7C%20IBM-059669?style=for-the-badge&logo=shield&logoColor=white)](#-certifications--credentials)

> **Official portfolio website of Zahid Ullah:** Cybersecurity Engineer, Threat Researcher, and SOC & Digital Forensics (DFIR) Analyst.  
> Holds a **B.S. in Computer Science** from the **University of Peshawar** (Class of 2025, First Division) and elite defensive credentials including **EC-Council CHFI**, **(ISC)² Certified in Cybersecurity (CC)**, **Cisco/NAVTTC CEH**, **Google Cybersecurity**, and **IBM Cybersecurity Analyst**.

---

## 🎯 Executive Overview

This repository hosts the official source code for **[hckr-zahid.github.io](https://hckr-zahid.github.io)**, an interactive, responsive cybersecurity engineering portfolio. Rather than presenting theoretical knowledge, this portfolio showcases **functional, code-backed security tools, intrusion detection engines, memory forensic runbooks, and enterprise infrastructure laboratories** developed across self-directed defensive research.

### Core Focus Areas
- **Security Operations Center (SOC) & Telemetry:** SIEM monitoring (Splunk, Wazuh, IBM QRadar, Google Chronicle), alert triage, and false-positive reduction.
- **Threat Detection & Engineering:** Custom YARA rules, Suricata/Zeek signatures, and machine-learning threat classification.
- **Digital Forensics & Incident Response (DFIR):** Volatility 3 memory forensics, Windows host artifact triage (Prefetch, $MFT, Shimcache), and NIST SP 800-61 incident lifecycles.
- **Malware Analysis & Reverse Engineering:** Portable Executable (PE) structural dissection, LightGBM classifiers on EMBER PE features, and process masquerading heuristics.
- **Security Automation & SOAR:** Python 3, FastAPI webhooks, YAML DAG playbook engines, and threat intelligence API enrichment (VirusTotal, AbuseIPDB, Shodan).
- **Enterprise Infrastructure Defense:** Multi-node Windows Server 2022 Active Directory laboratories on VMware virtual networks.

---

## 🛡️ Featured Technical Systems & Repositories

The portfolio indexes and links directly to six specialized, open-source security engineering repositories:

### 1. [CyberGun — Modular Threat Detection & Endpoint Security Suite](https://github.com/hckr-zahid/CyberGun)
* **Stack:** Python · PyQt5 · LightGBM · YARA · EMBER PE · SQLite WAL
* **Architecture:**
  * **Engine Architecture:** Orchestrated by `EngineLauncher` and a decoupled Qt `SignalBus`, coordinating concurrent asynchronous execution across static analysis, dynamic behavioral monitoring, raw socket network inspection, and USB peripheral surveillance.
  * **Detection & Intelligence:** 443 compiled in-memory YARA rules (~0.06s compile time), SQLite B-tree indexing over **3.16M+ malware hashes**, and LightGBM machine learning classifiers trained on **2,381 EMBER PE features** and **55 CIC-MalMem memory forensic features**.
  * **Forensics & Incident Response:** 8 operational PyQt5 dashboard views, MITRE ATT&CK technique mapping across Execution, Persistence, Defense Evasion, and C2, with automated SHA-256 quarantine containment.

### 2. [NIDS-Lab — Hybrid Signature & Machine-Learning Network IDS](https://github.com/hckr-zahid/NIDS-Lab)
* **Stack:** Python 3 · Scapy · Suricata · Zeek · Scikit-Learn · Elasticsearch · Kibana
* **Capabilities:**
  * Bi-directional 5-tuple flow reassembly and deep packet header inspection via custom Scapy dissectors.
  * Deterministic signature detection targeting TCP SYN floods, aggressive port sweeps, DNS amplification, and C2 beaconing.
  * Unsupervised **IsolationForest** machine learning model trained on 15-dimensional flow feature vectors (variance, packet jitter, byte ratios) to detect novel anomalies.
  * Tuned alerting thresholds cutting false-positive alert fatigue by 40% with streaming telemetry visualized in Kibana.

### 3. [DFIR-Lab — Ransomware Incident Response & Memory Forensics](https://github.com/hckr-zahid/DFIR-Lab)
* **Stack:** Volatility 3 · Autopsy · Windows Prefetch · $MFT · EVTX · NIST SP 800-61
* **Capabilities:**
  * End-to-end simulated ransomware outbreak investigation conducted under the **NIST SP 800-61 Rev. 2** handling lifecycle.
  * Deep memory forensics using Volatility 3 uncovering stealthy DLL injection, unlinked processes, and access token manipulation.
  * Host artifact triage parsing Windows Prefetch, Shimcache, Shellbags, and `$MFT` journals to reconstruct granular intrusion timelines.
  * Tamper-evident cryptographic evidence handling and post-incident remediation reporting.

### 4. [SecAuto — Declarative Security Orchestration & Automation (SOAR)](https://github.com/hckr-zahid/SecAuto)
* **Stack:** Python 3 · FastAPI · YAML DAG Engine · VirusTotal · AbuseIPDB · Shodan
* **Capabilities:**
  * Lightweight, extensible SOAR execution engine running multi-step playbooks defined in declarative YAML Directed Acyclic Graphs (DAGs).
  * Asynchronous threat intelligence connectors enriching IP, domain, and hash indicators via VirusTotal, AbuseIPDB, and Shodan REST APIs.
  * Automated containment workflows dynamically generating Windows Firewall rules, IP blocks, and host network isolation.
  * High-throughput FastAPI webhook endpoints ingesting external sensor alerts.

### 5. [Vuln-Hardening — Multi-Platform Vulnerability & Compliance Engine](https://github.com/hckr-zahid/Vuln-Hardening)
* **Stack:** Nmap · OpenVAS · Nessus · CVSS v3 · CIS Benchmarks · NIST 800-53
* **Capabilities:**
  * Credentialed and non-credentialed vulnerability scanning across Windows Server and Ubuntu Linux nodes.
  * CVSS v3 risk-prioritization algorithms filtering false positives and mapping critical CVEs to actionable remediation steps.
  * Automated audit scripts validating systems against **CIS Distribution Benchmarks** (Level 1 & Level 2) and **NIST SP 800-53** controls.
  * Reversible remediation playbooks featuring atomic configuration state backups ensuring zero downtime.

### 6. [Active-Directory-Labs — Enterprise AD DS & VMware Infrastructure](https://github.com/hckr-zahid/Active-Directory-Labs)
* **Stack:** Windows Server 2022 · AD DS · Group Policy (GPO) · Kerberos · DNS · DHCP · VMware VMnet10
* **6 Structured Engineering Labs:**
  * **LAB 01 — Active Directory Installation & Configuration:** Multi-node forest root (`zroots.local`), authoritative DNS, and VMware host-only network segmentation.
  * **LAB 02 — Group Policy Management & Verification:** GPO creation, OU linking, security filtering, and elevated `gpresult /r` client verification.
  * **LAB 03 — Organizational Unit (OU) Management:** Enterprise OU hierarchy, accidental deletion protection (`ProtectedFromAccidentalDeletion`), and inheritance flow verification.
  * **LAB 04 — User & Group Management:** PowerShell user inventory (`Get-ADUser`), role-based security groups, account lifecycle, and password policy audits.
  * **LAB 05 — DNS & DHCP Configuration:** AD-integrated reverse lookup zones (`10.1.1.0/24`), PTR record binding, DHCP authorization in AD DS, and dynamic lease validation.
  * **LAB 06 — File Server & NTFS Permissions:** `Lab06Data` SMB share, explicit role-based NTFS ACEs (IT-Admins, Staff, Students), cross-role access validation from `WIN10-01`, and least-privilege security hardening.

---

## 🏆 Certifications & Credentials

| Credential | Issuing Body | Specialization |
| :--- | :--- | :--- |
| **Computer Hacking Forensic Investigator (CHFI v10)** | **EC-Council** | Digital Forensics, Memory Triage & Chain of Custody |
| **Certified in Cybersecurity (CC)** | **(ISC)²** | Security Principles, Access Controls, Incident Response |
| **Certified Ethical Hacker (CEH)** | **Cisco / NAVTTC** | Penetration Testing, Network Reconnaissance & Exploitation |
| **IBM Cybersecurity Specialist Professional Certificate** | **IBM** | Defensive Architecture, Compliance & Threat Management |
| **IBM Cybersecurity Analyst Professional Certificate (V2)** | **IBM** | SIEM Analysis (QRadar), Triage & Threat Intelligence |
| **Google Cybersecurity Professional Certificate (V2)** | **Google** | Python Automation, Linux Security, SIEM & Incident Handling |
| **Google Cloud Cybersecurity Certificate** | **Google Cloud** | Cloud IAM, VPC Security & Cloud Workload Defense |
| **Fortinet Network Security Associate** | **Fortinet** | Perimeter Firewalls, Traffic Inspection & UTM |
| **Networking in Google Cloud** | **Google Cloud** | Cloud Virtual Private Cloud (VPC) & Hybrid Connectivity |

---

## 💻 Website Design & Architecture

The portfolio is built as a high-performance web experience:
* **Interactive Cyber Matrix Background:** Hardware-accelerated HTML5 canvas particle network (`cyberMatrixCanvas`) simulating live neural/telemetry nodes.
* **CyberGun 3-Pillar Technical Spotlight:** Structured presentation featuring metric cards, tech tags, and capability grids covering Engine Architecture, Detection & Intelligence, and Forensics & IR.
* **29-Step Active Directory Evidence Gallery:** High-resolution modal lightbox with category filtering (VMware, Server & IP, AD DS & DNS, Users & Groups, NTFS & Shares, Client & Kerberos).
* **Theme Persistence:** Dark and Light mode switcher with `localStorage` state persistence.
* **Accessible & Responsive:** Fluid responsive CSS utilizing modern CSS variables, flexbox, CSS grid, and semantic HTML5.
* **Dual-Build Capability:** Functions as a 100% zero-dependency static site for GitHub Pages, with an optional modern **Vite** build pipeline for optimized production bundles.

---

## 🚀 Local Development & Deployment

### Run Locally (Static / Zero-Dependency)
Since the portfolio is written in pure semantic HTML5, CSS3, and JavaScript, you can run it directly:
```bash
# Using Python's built-in HTTP server
python -m http.server 8000

# Open in browser: http://localhost:8000
```

### Build with Vite (Optional Bundle Optimization)
```bash
# Install dependencies
npm install

# Start local development server with Hot Module Replacement (HMR)
npm run dev

# Build production assets into /dist
npm run build

# Preview production build locally
npm run preview
```

### GitHub Pages Deployment
The website is automatically served by GitHub Pages directly from the `main` branch root directory:
1. Push changes to `main`.
2. Ensure GitHub repository settings have **Settings > Pages > Build and deployment** set to **Deploy from a branch** (`main` / `/ (root)`).
3. Access the live portfolio at: **`https://hckr-zahid.github.io`**

---

## 📬 Contact & Professional Links

* **Live Portfolio:** [https://hckr-zahid.github.io](https://hckr-zahid.github.io)
* **GitHub Profile:** [github.com/hckr-zahid](https://github.com/hckr-zahid)
* **LinkedIn:** [linkedin.com/in/hckr-zahid](https://linkedin.com/in/hckr-zahid)
* **Primary Email:** [cyber.zahid@proton.me](mailto:cyber.zahid@proton.me)
* **Alternative Email:** [hckr.zahid@proton.me](mailto:hckr.zahid@proton.me)

---
*© 2026 Zahid Ullah (`hckr-zahid`). All rights reserved.*
