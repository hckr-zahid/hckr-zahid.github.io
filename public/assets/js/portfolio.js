/**
 * Portfolio Data Engine: Zahid Ullah
 * Includes:
 * 1. CyberGun Spotlight Screenshots & Thesis Link
 * 2. 6 Core Cybersecurity & Systems Projects
 * 3. 29 Windows Server & Active Directory Lab Screenshots
 * 4. Verified Industry Certification Credentials (18+ items across ISC2, CISCO, EC-Council, Google, IBM, Johns Hopkins, Fortinet, etc.)
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

// WINDOWS SERVER 2019 / ACTIVE DIRECTORY LAB DATA (29 SCREENSHOTS)
const LAB_DATA = [
  // VMware Infrastructure
  {
    id: "vm-01",
    category: "vmware",
    categoryLabel: "VMware Infrastructure",
    step: "01",
    title: "VMware Virtual Network Editor - Host-Only Lab Subnet Creation",
    description: "Configured an isolated virtual switch (MyLabNet / VMnet10) bound to subnet 10.1.1.0/24 with host virtual adapter enabled, establishing a secure isolated environment separated from physical host broadcast domains.",
    image: "assets/img/labs/01-vmware-vnet-editor-config.png",
    tags: ["VMware Workstation", "Host-Only", "Virtual Switch", "10.1.1.0/24"]
  },
  {
    id: "vm-02",
    category: "vmware",
    categoryLabel: "VMware Infrastructure",
    step: "02",
    title: "VMware Built-in DHCP Server Staging & State Verification",
    description: "Inspected the hypervisor local DHCP distribution service on VMnet10 before transferring authoritative IP lease allocation rights to the dedicated Windows Server 2019 Domain Controller role.",
    image: "assets/img/labs/02-vmware-vnet-dhcp-enabled.png",
    tags: ["VMware Workstation", "DHCP Configuration", "IP Range", "Virtual Adapter"]
  },
  {
    id: "vm-03",
    category: "vmware",
    categoryLabel: "VMware Infrastructure",
    step: "03",
    title: "Virtual Adapter Subnet Realignment (192.168.29.0 to 10.1.1.0)",
    description: "Audited default NAT/host-only subnet addressing (192.168.29.0/24) and executed re-addressing migration to the standardized enterprise class-C lab schema (10.1.1.0/24).",
    image: "assets/img/labs/03-vmware-vnet-default-subnet.png",
    tags: ["Subnet Re-addressing", "VMware Editor", "Network Planning", "Enterprise CIDR"]
  },
  {
    id: "vm-04",
    category: "vmware",
    categoryLabel: "VMware Infrastructure",
    step: "04",
    title: "Hypervisor Multi-Node Infrastructure & Running Guests",
    description: "Active multi-tier hypervisor environment showcasing co-located production VMs: Windows Server 2019 (DC01), Windows 10 Enterprise client, Windows 11 x64, Kali Linux, BlackArch, Metasploitable2, and Android x86.",
    image: "assets/img/labs/04-vmware-hypervisor-running-vms.png",
    tags: ["VMware Hypervisor", "Multi-VM Topology", "Linux & Windows", "SOC Pentest Lab"]
  },
  {
    id: "vm-05",
    category: "vmware",
    categoryLabel: "VMware Infrastructure",
    step: "05",
    title: "Server Manager Guest Console Integration in Hypervisor",
    description: "Full hypervisor console display of Windows Server 2019 Datacenter (WWW / DC01) connected to domain zroot.local with multi-adapter bindings, hardware allocation of 6-8 GB RAM, and dual virtual vCPUs.",
    image: "assets/img/labs/05-dc01-vmware-guest-overview.png",
    tags: ["Server Manager", "VMware Guest Console", "System Metrics", "zroot.local"]
  },

  // Windows Server 2019 & Host TCP/IP Prep
  {
    id: "srv-01",
    category: "server",
    categoryLabel: "Windows Server 2019",
    step: "06",
    title: "Server Manager Baseline Properties & Workgroup Baseline",
    description: "Initial post-installation state of DC01 prior to role installation. Validated Windows Defender Firewall profiles, Remote Management status, VMware v20.1 hardware integration, and 8 GB RAM allocation.",
    image: "assets/img/labs/06-server2019-local-server-properties.png",
    tags: ["Windows Server 2019", "Server Manager", "Hardware Verification", "Base Config"]
  },
  {
    id: "srv-02",
    category: "server",
    categoryLabel: "Windows Server 2019",
    step: "07",
    title: "Network Troubleshooting: Duplicate IP Collision Diagnostics (APIPA Fallback)",
    description: "Diagnosed IPv4 address conflict where static IP 10.1.1.1 was flagged as (Duplicate), causing Windows to fall back to APIPA (169.254.122.73/16). Promptly isolated conflicting nodes and re-scoped the subnet.",
    image: "assets/img/labs/07-server-duplicate-ip-troubleshoot.png",
    tags: ["Network Diagnostics", "ARP / Duplicate IP", "APIPA Troubleshooting", "ipconfig /all"]
  },
  {
    id: "srv-03",
    category: "server",
    categoryLabel: "Windows Server 2019",
    step: "08",
    title: "Ethernet0 TCP/IP Realignment & Gateway Reassignment",
    description: "Re-scoped DC01 to static IP 10.1.1.10/24 with default gateway configured to 10.1.1.1 to eliminate collisions and establish standard core router hop topology.",
    image: "assets/img/labs/08-server-ip-gateway-config.png",
    tags: ["Static IP Configuration", "Subnet Mask /24", "Default Gateway", "IPv4 Stack"]
  },
  {
    id: "srv-04",
    category: "server",
    categoryLabel: "Windows Server 2019",
    step: "09",
    title: "Static IP & Self-Referential DNS Validation",
    description: "Verified static addressing on DC01 with IPv4 10.1.1.10 and Primary DNS pointer set to 10.1.1.10, fulfilling Microsoft prerequisite requirements for Domain Controller promotion.",
    image: "assets/img/labs/09-server-static-ip-dns-validated.png",
    tags: ["DNS Staging", "Domain Prerequisite", "Static IP Binding", "IPv4 Addressing"]
  },
  {
    id: "srv-05",
    category: "server",
    categoryLabel: "Windows Server 2019",
    step: "10",
    title: "Authoritative Domain Controller Network State & DNS Suffix",
    description: "Final authoritative ipconfig verification confirming Hostname DC01, Primary DNS suffix zroots.local, IPv4 10.1.1.10, and Loopback DNS resolver 127.0.0.1 operating in healthy hybrid node type.",
    image: "assets/img/labs/10-dc01-authoritative-ipconfig.png",
    tags: ["DC01", "Primary DNS Suffix", "zroots.local", "Loopback Resolver"]
  },

  // Active Directory Domain Services (AD DS)
  {
    id: "ad-01",
    category: "ad",
    categoryLabel: "Active Directory / DC",
    step: "11",
    title: "AD DS Forest & Domain Functional Level Configuration",
    description: "Selected Windows Server 2016 Forest and Domain Functional Levels during forest root creation. Enabled Domain Name System (DNS) server and Global Catalog (GC) roles with robust DSRM credential recovery protection.",
    image: "assets/img/labs/11-ad-forest-functional-levels.png",
    tags: ["AD DS Wizard", "Functional Level 2016", "Global Catalog", "DSRM Password"]
  },
  {
    id: "ad-02",
    category: "ad",
    categoryLabel: "Active Directory / DC",
    step: "12",
    title: "Authoritative Root DNS Delegation Configuration Analysis",
    description: "Reviewed Microsoft DNS delegation warning regarding authoritative parent zones. Identified that for an isolated private root namespace (zroots.local), child delegation from public roots is safely bypassed.",
    image: "assets/img/labs/12-ad-dns-delegation-warning.png",
    tags: ["DNS Delegation", "Zone Authority", "Private Namespace", "Name Resolution"]
  },
  {
    id: "ad-03",
    category: "ad",
    categoryLabel: "Active Directory / DC",
    step: "13",
    title: "AD DS Prerequisites Check Passed & Forest Promotion Execution",
    description: "Passed all Microsoft Directory Services prerequisite validation checks. Successfully initialized forest creation, schema creation, SYSVOL generation, and automated post-install reboot into domain mode.",
    image: "assets/img/labs/13-ad-prerequisites-passed-install.png",
    tags: ["Prerequisites Check", "AD DS Promotion", "SYSVOL Replication", "Schema Partition"]
  },

  // Users, Groups & Organizational Units
  {
    id: "users-01",
    category: "users",
    categoryLabel: "Users & Groups",
    step: "14",
    title: "ADUC Security Groups Hierarchy & Role-Based Access Control",
    description: "Engineered role-based access control (RBAC) security groups under zroots.local/Groups: Administratorss, IT-HelpDesk, Staff, Students, and Management security principals.",
    image: "assets/img/labs/14-aduc-security-groups-structure.png",
    tags: ["ADUC", "Security Groups", "RBAC", "Access Control Matrix"]
  },
  {
    id: "users-02",
    category: "users",
    categoryLabel: "Users & Groups",
    step: "15",
    title: "Organizational Unit (OU) Architecture & Account Provisioning",
    description: "Structured organizational units (OUs) separating Computer Accounts, Servers, Service Accounts, and User Accounts. Provisioned staff identities: Ahmed Shah, Ali Khan, Staff One, and Test User.",
    image: "assets/img/labs/15-aduc-user-accounts-ou.png",
    tags: ["OU Hierarchy", "User Accounts", "Identity Management", "AD Administration"]
  },
  {
    id: "users-03",
    category: "users",
    categoryLabel: "Users & Groups",
    step: "16",
    title: "User Account Group Membership Inspection (Ali Khan)",
    description: "Examined user security token attributes and group memberships for Ali Khan (ali.khan@zroots.local) in ADUC properties, verifying inheritance from standard Domain Users.",
    image: "assets/img/labs/16-aduc-user-member-of-groups.png",
    tags: ["Member Of", "Domain Users", "Security Token", "Account Properties"]
  },
  {
    id: "users-04",
    category: "users",
    categoryLabel: "Users & Groups",
    step: "17",
    title: "Multi-Tier Group Assignment for Academic Identity (Student One)",
    description: "Configured Student One identity with explicit membership in both Domain Users and Students security group (zroots.local/Groups), validating tiered access boundaries.",
    image: "assets/img/labs/17-aduc-student-group-membership.png",
    tags: ["Group Membership", "Least Privilege", "Academic Tier", "AD Groups"]
  },
  {
    id: "users-05",
    category: "users",
    categoryLabel: "Users & Groups",
    step: "18",
    title: "Security Principal Disambiguation & Object Resolver",
    description: "Resolved naming collision during object resolution between Built-in Administrators alias and custom domain global security group Administratorss within zroots.local.",
    image: "assets/img/labs/18-aduc-security-principal-resolution.png",
    tags: ["Object Resolution", "Builtin vs Custom Groups", "SID Disambiguation", "AD Security"]
  },

  // File Sharing, NTFS & Permissions
  {
    id: "files-01",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "19",
    title: "CompanyData Enterprise Departmental Directory Structure",
    description: "Designed multi-departmental corporate file storage on volume C:\\CompanyData partitioned into IT, Management, Private, Staff Documents, and StaffShared directories.",
    image: "assets/img/labs/19-companydata-folder-structure.png",
    tags: ["File Server", "Departmental Shares", "Storage Structure", "CompanyData"]
  },
  {
    id: "files-02",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "20",
    title: "SMB Network Share Permissions Configuration (Ali Khan)",
    description: "Configured SMB network share-level access permissions granting Ali Khan (ali.khan@zroots.local) Change and Read permissions while denying unrestricted Full Control.",
    image: "assets/img/labs/20-smb-share-permissions-alikhan.png",
    tags: ["SMB Sharing", "Share Permissions", "Least Privilege", "Read/Change Rights"]
  },
  {
    id: "files-03",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "21",
    title: "NTFS Access Control List (ACL) Entry for Staff Group",
    description: "Assigned granular NTFS file system permissions granting ZROOTS\\Staff group Modify, Read & Execute, List Folder Contents, Read, and Write permissions on the StaffShared folder.",
    image: "assets/img/labs/21-ntfs-acl-staff-group-modify.png",
    tags: ["NTFS Permissions", "Modify Rights", "Staff Group", "ACL Entry"]
  },
  {
    id: "files-04",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "22",
    title: "Advanced Security Settings: Auditing Inherited NTFS ACEs",
    description: "Audited inherited Access Control Entries (ACEs) on C:\\CompanyData\\StaffShared, tracing inherited rights cascading from parent volume root C:\\.",
    image: "assets/img/labs/22-ntfs-inherited-permissions-audit.png",
    tags: ["Inherited ACEs", "Advanced Security", "Audit Trail", "NTFS Inheritance"]
  },
  {
    id: "files-05",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "23",
    title: "Inheritance Disablement & Explicit ACL Hardening",
    description: "Severed default inheritance on StaffShared, converting inherited permissions to explicit entries and restricting generic Users group access to specialized subfolder rights.",
    image: "assets/img/labs/23-ntfs-explicit-acl-hardened.png",
    tags: ["Disable Inheritance", "Explicit ACLs", "Privilege Hardening", "Special Rights"]
  },
  {
    id: "files-06",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "24",
    title: "Departmental Folder Security Hardening: IT Directory",
    description: "Secured C:\\CompanyData\\IT folder with strict role isolation: Full Control for Administrators and Management, Modify access for IT-HelpDesk, and exclusion of unauthorized staff.",
    image: "assets/img/labs/24-ntfs-advanced-security-it-folder.png",
    tags: ["IT Directory", "Role Isolation", "Management Access", "IT-HelpDesk"]
  },
  {
    id: "files-07",
    category: "fileshare",
    categoryLabel: "File Sharing & Permissions",
    step: "25",
    title: "Granular Permission Entry Dialog & Attribute Scoping",
    description: "Fine-grained permission scoping dialog configuring targeted Allow ACEs applying recursively across 'This folder, subfolders and files' for domain user Ali Khan.",
    image: "assets/img/labs/25-ntfs-user-permission-entry-dialog.png",
    tags: ["Permission Scoping", "Recursive ACL", "Principal Rights", "NTFS Attributes"]
  },

  // Windows 10 Domain Client Integration
  {
    id: "client-01",
    category: "client",
    categoryLabel: "Domain Client Integration",
    step: "26",
    title: "Client Pre-Join DNS Resolution & DC Reachability Test",
    description: "Executed network verification from Windows 10 client (WIN10-01): successfully pinged DC01 at 10.1.1.10 (<1ms) and tested DNS SRV lookup for zroots.local via nslookup.",
    image: "assets/img/labs/26-win10-dns-ping-test-prejoin.png",
    tags: ["Client Connectivity", "Ping Test <1ms", "nslookup", "DNS SRV Records"]
  },
  {
    id: "client-02",
    category: "client",
    categoryLabel: "Domain Client Integration",
    step: "27",
    title: "Windows 10 Workstation Domain Join to zroots.local",
    description: "Joined client workstation WIN10-01 to active directory domain zroots.local via System Properties, successfully completing Kerberos authentication handshake and machine account creation.",
    image: "assets/img/labs/27-win10-domain-join-zroots.png",
    tags: ["System Properties", "Domain Join", "WIN10-01", "zroots.local"]
  },
  {
    id: "client-03",
    category: "client",
    categoryLabel: "Domain Client Integration",
    step: "28",
    title: "nltest Domain Controller Locator Verification (/dsgetdc)",
    description: "Executed command 'nltest /dsgetdc:zroots.local' from domain client as staff.one, confirming active connection to \\\\DC01.zroots.local (10.1.1.10) with PDC, GC, LDAP, and KDC operational flags.",
    image: "assets/img/labs/28-win10-nltest-dc-locator-verified.png",
    tags: ["nltest /dsgetdc", "DC Locator", "Kerberos KDC", "LDAP Services"]
  },
  {
    id: "client-04",
    category: "client",
    categoryLabel: "Domain Client Integration",
    step: "29",
    title: "Domain User Logon Session & Kerberos Security Token (whoami /groups)",
    description: "Logged into client as zroots\\ali.khan. Verified domain session context via 'whoami' and confirmed Kerberos authorization token with effective membership in ZROOTS\\Staff group (SID: S-1-5-21-...-1104).",
    image: "assets/img/labs/29-win10-kerberos-token-whoami-groups.png",
    tags: ["whoami /groups", "Kerberos Token", "Security Identifier (SID)", "Effective Rights"]
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
  ...LAB_DATA.map(d => ({ ...d, modalType: "AD & VMware Lab" })),
  ...CERTIFICATES_DATA.map(d => ({ ...d, modalType: "Verified Certificate", tags: [d.issuer, d.badgeType] }))
];

// APP INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderLabGallery('all');
  renderCertificates();
  initFilterButtons();
  initLightbox();
  initThemeToggle();
  initMobileNav();
  setupSmoothScroll();
});

// RENDER LAB GALLERY
function renderLabGallery(filterCategory = 'all') {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const items = filterCategory === 'all' 
    ? LAB_DATA 
    : LAB_DATA.filter(item => item.category === filterCategory);

  container.innerHTML = items.map((item) => {
    const globalIndex = ALL_INSPECTOR_ITEMS.findIndex(d => d.id === item.id);
    return `
      <article class="lab-card" data-category="${item.category}">
        <div class="lab-card-image-wrap" onclick="openLightbox(${globalIndex})">
          <span class="card-order-tag">STEP ${item.step}</span>
          <span class="card-category-badge">${item.categoryLabel}</span>
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
          <div class="image-zoom-overlay">
            <span class="zoom-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              Inspect Screenshot
            </span>
          </div>
        </div>
        <div class="lab-card-body">
          <h3 class="lab-card-title">${escapeHtml(item.title)}</h3>
          <p class="lab-card-desc">${escapeHtml(item.description)}</p>
          <div class="lab-card-tags">
            ${item.tags.map(tag => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <div style="margin-top:auto; padding-top:0.75rem; border-top:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
            <button class="inspect-btn" onclick="openLightbox(${globalIndex})">
              <span>View Full Resolution</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

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
  // Lab filters
  const labBar = document.querySelector('#adlab .filter-bar');
  if (labBar) {
    const labButtons = labBar.querySelectorAll('.filter-btn');
    labButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        labButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter') || 'all';
        renderLabGallery(category);
      });
    });
  }

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
