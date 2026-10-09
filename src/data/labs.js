const labs = [
  {
    id: "lab-01",
    code: "LAB-01",
    title: "Active Directory Enterprise Lab",
    description:
      "Enterprise-style Windows Server and Active Directory environment for practicing domain administration, permissions, Group Policy, DNS, DHCP, auditing, and security controls.",
    technologies: [
      "Windows Server 2019",
      "Active Directory",
      "DNS",
      "DHCP",
      "GPO",
      "PowerShell",
    ],
    objectives: [
      "Domain Controller Deployment",
      "OU & User Management",
      "Group-Based Permissions",
      "Group Policy",
      "DNS & DHCP",
      "Auditing & Troubleshooting",
      "Advanced Security",
    ],
    image: "/images/labs/lab-01-active-directory.jpg",
  },

  {
    id: "lab-02",
    code: "LAB-02",
    title: "VMware Security Network Lab",
    description:
      "Multi-machine virtualized security network containing Windows Server, Windows clients, Kali Linux and other Linux systems connected through a controlled VMware network.",
    technologies: [
      "VMware",
      "Windows Server 2019",
      "Windows 10",
      "Windows 11",
      "Kali Linux",
      "TCP/IP",
    ],
    objectives: [
      "Virtual Network Design",
      "Server Configuration",
      "Client Integration",
      "Linux Integration",
      "Connectivity Testing",
      "Security Testing",
    ],
    image: "/images/labs/lab-02-vmware-network.jpg",
  },

  {
    id: "lab-03",
    code: "LAB-03",
    title: "SOC & Security Monitoring Lab",
    description:
      "Security operations environment focused on centralized logging, alert generation, investigation, threat hunting and incident response.",
    technologies: [
      "Wazuh",
      "Splunk",
      "IBM QRadar",
      "Google Chronicle",
      "Kibana",
      "SIEM",
    ],
    objectives: [
      "Log Collection",
      "Detection Engineering",
      "Alert Triage",
      "Investigation",
      "Threat Hunting",
      "Incident Response",
    ],
    image: "/images/labs/lab-03-soc-monitoring.jpg",
  },

  {
    id: "lab-04",
    code: "LAB-04",
    title: "Network Security & IDS Lab",
    description:
      "Network traffic analysis and intrusion detection environment for understanding protocols, malicious traffic, IDS alerts and network investigation.",
    technologies: [
      "Wireshark",
      "Suricata",
      "Zeek",
      "Snort",
      "Nmap",
    ],
    objectives: [
      "Traffic Capture",
      "Protocol Analysis",
      "IDS Deployment",
      "Detection",
      "Investigation",
    ],
    image: "/images/labs/lab-04-network-ids.jpg",
  },

  {
    id: "lab-05",
    code: "LAB-05",
    title: "Digital Forensics & Incident Response Lab",
    description:
      "Forensic investigation environment for evidence acquisition, memory analysis, artifact examination, timeline investigation and incident reporting.",
    technologies: [
      "Volatility",
      "Autopsy",
      "Windows",
      "Linux",
      "Incident Response",
    ],
    objectives: [
      "Evidence Acquisition",
      "Artifact Analysis",
      "Memory Analysis",
      "Timeline Investigation",
      "Reporting",
    ],
    image: "/images/labs/lab-05-dfir.jpg",
  },
];

export default labs;
