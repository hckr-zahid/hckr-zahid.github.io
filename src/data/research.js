const researchProjects = [
  {
    id: "mas-aio-static-analysis",
    number: "01",
    title: "Static Security Analysis of a PowerShell-Based Windows Activation Workflow",
    category: "Cybersecurity Research",
    date: "2024",
    status: "Completed",
    topics: [
      "PowerShell",
      "Windows Security",
      "Static Analysis",
      "Software Integrity",
      "Defensive Security",
    ],
    description:
      "A static source-code security review of a PowerShell-based Windows activation workflow initiated by `irm https://get.activated.win | iex`, including analysis of the launcher behavior and the associated `MAS_AIO.cmd` script. The research examines licensing-related system modifications, DLL replacement mechanisms, scheduled tasks, registry and service changes, and network behavior.",
    limitationNote:
      "This project is based on static source-code analysis. The analyzed script was not executed as part of the research. Findings describe observed code behavior and potential risks; they do not establish that the script is malware or guarantee that it is safe.",
    repoUrl: "https://github.com/hckr-zahid/Activate-Windows-Free",
    researchFolderUrl:
      "https://github.com/hckr-zahid/Activate-Windows-Free/tree/main/Research",
    pdfUrl:
      "https://github.com/hckr-zahid/Activate-Windows-Free/blob/main/Research/report/MAS_AIO_CMD_Static_Security_Research_Report.pdf",
    docxUrl:
      "https://github.com/hckr-zahid/Activate-Windows-Free/blob/main/Research/report/MAS_AIO_CMD_Static_Security_Research_Report.docx",
  },
];

export default researchProjects;
