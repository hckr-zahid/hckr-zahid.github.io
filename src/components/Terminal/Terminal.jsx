import { useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

import profile from "../../data/profile";
import projects from "../../data/projects";
import labs from "../../data/labs";
import certifications from "../../data/certifications";

import "./Terminal.css";

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const commands = {
    help: `Available commands:
about
projects
labs
skills
certifications
education
tools
github
contact
clear`,

    about:
      "Zahid Ullah — Cybersecurity Analyst, Ethical Hacker and SOC & Threat Intelligence professional.",

    projects: projects
      .map((project) => `${project.number}  ${project.title}`)
      .join("\n"),

    labs: labs
      .map((lab) => `${lab.code}  ${lab.title}`)
      .join("\n"),

    skills:
      "Security Operations | Threat Detection | Network Security | DFIR | Vulnerability Assessment | Security Automation",

    certifications: `${certifications.length} verified professional certifications and specializations.`,

    education:
      "BSc Computer Science — University of Peshawar — 2025",

    tools:
      "Wireshark, Suricata, Zeek, Nmap, OpenVAS, Nessus, Splunk, QRadar, Chronicle, Wazuh, Volatility, Autopsy, YARA",

    github: profile.github,

    contact:
      `${profile.email}\n${profile.phone}\n${profile.location}`,
  };

  function executeCommand(event) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output =
      commands[command] ||
      `Command not found: ${command}. Type "help" for available commands.`;

    setHistory((current) => [
      ...current,
      {
        command,
        output,
      },
    ]);

    setInput("");
  }

  return (
    <section id="terminal" className="section terminal-section">
      <div className="section-container">
        <div className="section-heading">
          <div className="section-kicker">
            <TerminalIcon size={16} />
            INTERACTIVE TERMINAL
          </div>

          <h2>
            Explore the
            <span> Security Profile</span>
          </h2>
        </div>

        <div className="terminal-window">
          <div className="terminal-bar">
            <div>
              <span />
              <span />
              <span />
            </div>

            <small>zahid@hckr-zahid:~</small>
          </div>

          <div className="terminal-output">
            <div className="terminal-line">
              <span className="terminal-prompt">
                zahid@hckr-zahid:~$
              </span>
              <span> help</span>
            </div>

            <pre>{commands.help}</pre>

            {history.map((entry, index) => (
              <div key={index} className="history-entry">
                <div className="terminal-line">
                  <span className="terminal-prompt">
                    zahid@hckr-zahid:~$
                  </span>
                  <span> {entry.command}</span>
                </div>

                <pre>{entry.output}</pre>
              </div>
            ))}

            <form
              className="terminal-input-line"
              onSubmit={executeCommand}
            >
              <span className="terminal-prompt">
                zahid@hckr-zahid:~$
              </span>

              <input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terminal;
