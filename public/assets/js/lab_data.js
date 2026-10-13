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

