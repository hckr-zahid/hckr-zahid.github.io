/**
 * Cyber Matrix Particle Canvas & Interactive SOC Terminal Simulator
 * Author: Zahid Ullah (hckr-zahid)
 */

(function () {
  'use strict';

  /* ========================================================================
     1. CYBER MATRIX BACKGROUND PARTICLE EFFECT
     ======================================================================== */
  function initCyberCanvas() {
    const canvas = document.getElementById('cyberMatrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(width / 22), 55);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.8 + 0.8,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective web
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.16;
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ========================================================================
     2. LIVE UTC CLOCK & RANDOM LATENCY SIMULATOR IN TOP HUD
     ======================================================================== */
  function initLiveTelemetry() {
    const clockEl = document.getElementById('hudLiveClock');
    const latencyEl = document.getElementById('hudLatency');

    function updateClock() {
      if (clockEl) {
        const now = new Date();
        clockEl.textContent = now.toUTCString().replace('GMT', 'UTC');
      }
    }
    updateClock();
    setInterval(updateClock, 1000);

    function jitterLatency() {
      if (latencyEl) {
        const jitter = Math.floor(Math.random() * 9) + 18; // 18ms - 26ms
        latencyEl.textContent = `${jitter} ms`;
      }
    }
    setInterval(jitterLatency, 3500);
  }

  /* ========================================================================
     3. INTERACTIVE SOC CLI TERMINAL EMULATOR
     ======================================================================== */
  const COMMANDS = {
    help: `Available commands:
  - status     : Print security posture & active detection nodes
  - projects   : List verified cybersecurity repositories
  - nids       : Query active NIDS-Lab detection signatures
  - dfir       : Display forensic triage & incident response capabilities
  - soar       : Inspect SecAuto DAG playbooks & integrations
  - vuln       : Show Vuln-Hardening CIS/NIST remediation rules
  - certs      : List verified industry certifications (CHFI, CEH, CC)
  - clear      : Clear terminal screen`,

    status: `[+] DEFENSIVE POSTURE: GREEN (THREAT LEVEL: LOW)
  • Primary Sensor: CyberGun EDR Agent (Active, 3.16M Hashes)
  • Network Monitor: NIDS-Lab Engine (Suricata + IsolationForest)
  • SOAR Automation: SecAuto Webhook Daemon (Active)
  • Forest Domain: zroots.local (DC01 10.1.1.10 - VMware VMnet10)
  • Latency: 22ms | Zero Active Compromises`,

    projects: `[+] VERIFIED REPOSITORIES & SYSTEMS:
  1. CyberGun         : Threat Detection & Malware Analysis Suite (Python, PyQt5, LightGBM)
  2. NIDS-Lab         : Hybrid Signature & ML Anomaly Detection Engine (Scapy, IsolationForest)
  3. DFIR-Lab         : Artifact Parsers, Memory Forensics & NIST IR Runbooks (Volatility, YARA)
  4. SecAuto          : Declarative YAML DAG SOAR Framework (FastAPI, Threat Intel APIs)
  5. Vuln-Hardening   : Multi-Platform Vulnerability Remediation & Compliance Engine
  6. AD-Enterprise    : Windows Server 2019 Active Directory & VMware Lab Environment`,

    nids: `[*] NIDS-LAB INTRUSION DETECTION ENGINE:
  • Signatures: Port Scan Sweep, TCP SYN Flood, DNS Amplification, C2 Beaconing
  • ML Model  : Unsupervised IsolationForest (15-dim feature vector)
  • Parsers   : Scapy PCAP dissector + Bi-directional 5-tuple flow reconstructor
  • Repo      : https://github.com/hckr-zahid/NIDS-Lab`,

    dfir: `[*] DFIR FORENSIC TRIAGE CAPABILITIES:
  • Windows Prefetch, Evtx Event Logs, MFT Timeline Parsing
  • Volatility Memory Forensics (DLL injection, rogue tokens, hidden processes)
  • YARA & Sigma detection rule crosswalks
  • Repo      : https://github.com/hckr-zahid/DFIR-Lab`,

    soar: `[*] SECAUTO AUTOMATION ENGINE:
  • DAG Playbook Executor for Automated Threat Remediation
  • Connectors: VirusTotal, AbuseIPDB, Shodan, Webhooks
  • Host Quarantine & Restrictive Firewall Rule Automation
  • Repo      : https://github.com/hckr-zahid/SecAuto`,

    vuln: `[*] VULN-HARDENING REMEDIATION FRAMEWORK:
  • Benchmarks: CIS Distribution Baselines, NIST 800-53, PCI-DSS
  • Targets   : Linux (Ubuntu/RHEL), Windows Server, Docker & Kubernetes
  • Rollback  : Atomic state capture & reversible remediation guarantees
  • Repo      : https://github.com/hckr-zahid/Vuln-Hardening`,

    certs: `[+] VERIFIED CREDENTIALS:
  • EC-Council: Computer Hacking Forensic Investigator (CHFI)
  • Cisco / NAVTTC: Certified Ethical Hacker (CEH)
  • (ISC)²: Certified in Cybersecurity (CC)
  • Google: Cybersecurity Professional & Google Cloud Cybersecurity
  • IBM: Cybersecurity Analyst Professional & Security Specialist
  • Johns Hopkins: Advanced Cybersecurity Techniques`,
  };

  function initInteractiveTerminal() {
    const termBody = document.getElementById('terminalOutput');
    const termInput = document.getElementById('termCommandInput');
    const termForm = document.getElementById('termCommandForm');
    const hintButtons = document.querySelectorAll('.term-hint-btn');

    if (!termBody || !termInput || !termForm) return;

    function appendLine(html, type = '') {
      const line = document.createElement('div');
      line.className = `term-line ${type}`;
      line.innerHTML = html;
      termBody.appendChild(line);
      termBody.scrollTop = termBody.scrollHeight;
    }

    function processCommand(rawCmd) {
      const cmd = rawCmd.trim().toLowerCase();
      appendLine(`<span class="term-prompt">secops@zahid-lab:~$</span> ${escapeHtml(rawCmd)}`);

      if (!cmd) return;

      if (cmd === 'clear') {
        termBody.innerHTML = '';
        return;
      }

      if (COMMANDS[cmd]) {
        appendLine(COMMANDS[cmd], 'term-success');
      } else {
        appendLine(
          `Command not recognized: "${escapeHtml(cmd)}". Type <span class="term-prompt">help</span> for a list of valid commands.`,
          'term-alert'
        );
      }
    }

    termForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = termInput.value;
      if (!val) return;
      processCommand(val);
      termInput.value = '';
    });

    hintButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) {
          termInput.value = cmd;
          processCommand(cmd);
          termInput.value = '';
        }
      });
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Initialize all enhancements on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initCyberCanvas();
    initLiveTelemetry();
    initInteractiveTerminal();
  });
})();
