# Windows Server 2019, Active Directory & VMware Enterprise Lab Portfolio

> **Live GitHub Pages URL:** [https://hckr-zahid.github.io](https://hckr-zahid.github.io)  
> **Author:** Zahid Ullah (Cybersecurity Analyst & Systems Engineer)  
> **Domain:** `zroots.local` | **Domain Controller:** `DC01` (`10.1.1.10`) | **Subnet:** `10.1.1.0/24` (VMware VMnet10)

---

## 🌟 Overview

This portfolio website documents and showcases a production-grade **Windows Server 2019**, **Active Directory Domain Services (AD DS)**, and **VMware Workstation** enterprise networking lab.

It is built specifically with pure **HTML5, modern responsive CSS3, and vanilla JavaScript** — completely independent of Node.js, Vite, npm, or any build step — making it **100% compatible with GitHub Pages** right out of the box.

---

## 🏗️ Lab Architecture & Network Topology

```
========================================================================
     VMware Workstation Virtual Switch: VMnet10 (MyLabNet)
     Subnet: 10.1.1.0 / 255.255.255.0  (Isolated Host-Only)
========================================================================
                          |
      +-------------------+-------------------+-------------------+
      |                   |                   |                   |
[ Windows Server 2019 ] [ Windows 10 Client ] [ Security Nodes ] [ Admin Host ]
   DC01 (or WWW)            WIN10-01             Kali Linux         VMnet10 Adapter
   10.1.1.10/24             10.1.1.x / DHCP      BlackArch          10.1.1.1 (GW)
   Forest: zroots.local     Domain Joined        Metasploitable2
   Roles:                   Account:             Android x86
   - AD DS (Kerberos/KDC)   - ali.khan           Auditing &
   - DNS Server (127.0.0.1) - staff.one          Penetration Testing
   - File Server (SMB/NTFS)
```

### IP Allocation Matrix

| Hostname / Node | Role & Description | IPv4 Address | Status |
| :--- | :--- | :--- | :--- |
| **DC01** | Primary Domain Controller, Authoritative DNS, File Server | `10.1.1.10/24` | **Authoritative Active** |
| **WIN10-01** | Domain Member Client Workstation | `10.1.1.x (DHCP)` | **Joined to zroots.local** |
| **Host Virtual Adapter** | VMware VMnet10 Host Gateway | `10.1.1.1/24` | **Connected** |
| **Kali / BlackArch** | Penetration Testing & Vulnerability Assessment | `10.1.1.x` | **Provisioned** |
| **Forest Root** | AD DS Forest Root Domain | `zroots.local` | **Functional Level 2016** |

---

## 📸 Technical Evidence & Sequence

The portfolio presents **29 curated, high-resolution screenshots** organized into 6 core engineering phases:

1. **VMware Infrastructure (Steps 01–05):**
   - Isolated Virtual Switch configuration (`VMnet10` / `10.1.1.0/24`)
   - DHCP distribution state management
   - Multi-node virtualization environment (Server 2019, Win10, Win11, Kali, BlackArch)
   - Guest VM console monitoring in Server Manager
2. **Windows Server 2019 & Host TCP/IP Prep (Steps 06–10):**
   - Server baseline metrics and hardware sizing (8 GB RAM, dual vCPUs)
   - Diagnostic isolation and resolution of IPv4 duplicate collision (APIPA fallback)
   - Static IP binding (`10.1.1.10/24`) and default gateway reassignment (`10.1.1.1`)
   - DNS loopback resolver validation (`127.0.0.1`) and primary DNS suffix assignment
3. **Active Directory Domain Services (AD DS) Deployment (Steps 11–13):**
   - Forest root creation and Windows Server 2016 functional levels
   - Global Catalog (GC) & Integrated DNS provisioning with DSRM recovery
   - Authoritative DNS delegation review and prerequisite clearance
4. **Users, Groups & Organizational Units (Steps 14–18):**
   - Role-Based Access Control (RBAC) security groups (`IT-HelpDesk`, `Staff`, `Students`, `Management`)
   - Departmental OU structure and account provisioning (`Ali Khan`, `Ahmed Shah`, `Staff One`)
   - User security token membership inspection
   - Security principal disambiguation and SID validation
5. **File Sharing & NTFS Permissions Hardening (Steps 19–25):**
   - Enterprise folder architecture (`C:\CompanyData` with departmental shares)
   - SMB network share permissions (`ali.khan` granted Change/Read)
   - NTFS Access Control Lists (ACLs) with explicit inheritance severance
   - Departmental IT directory security hardening (least privilege)
6. **Windows 10 Domain Client Integration (Steps 26–29):**
   - Pre-join connectivity test (ping `<1ms` and `nslookup` DNS SRV record)
   - Domain join handshake into `zroots.local`
   - DC Locator verification via `nltest /dsgetdc:zroots.local`
   - Kerberos authorization token inspection and group membership verification via `whoami /groups`

---

## 🚀 Features of the Website

- 🔍 **Interactive High-Resolution Lightbox:** Click any screenshot to view full resolution with keyboard navigation (`Left`, `Right`, `Escape`).
- 🏷️ **Categorical Filter Bar:** Instantly filter evidence by lab phase (VMware, Windows Server, AD DS, Users, File Sharing, Client Integration).
- 🌓 **Theme Switcher:** Dark & Light theme with automatic local storage persistence.
- 📱 **Fully Responsive:** Adapts cleanly across mobile phones, tablets, laptops, and ultra-wide desktop displays.
- ⚡ **Zero Build Pipeline:** 100% pure static web assets; upload directly to GitHub and publish via GitHub Pages.

---

## 🛠️ Deployment Instructions

1. Commit and push the repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete professional AD and VMware lab portfolio"
   git push origin main
   ```
2. Navigate to your repository settings on GitHub: **Settings > Pages**.
3. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / Folder: `/ (root)`
4. Click **Save**. Your site will be live at `https://<username>.github.io`.
