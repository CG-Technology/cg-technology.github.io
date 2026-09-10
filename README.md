# CG Technology - Systems & Tools Showcase Website

A clean, modern portfolio and project showcase website engineered to display our desktop utilities, RMM tools, and systems management solutions.

Built with a **Slate & Deep Indigo** aesthetic, 3-tier theme selector (Slate, Midnight OLED, Light), dual-mode tab navigation, live interactive CLI terminal simulator, real-time search & category filtering, and zero external build dependencies.

---

## Live Features

- **Dual-Mode Navigation**:
  - Sticky navbar with automatic active tab indicator (`Home`, `About`, `Projects`, `CLI Simulator`, `Architecture FAQ`, `Contact`).
  - Seamless smooth scrolling to each section with direct URL hashtag support.
  - Mobile responsive drawer menu.
- **Projects Showcase Hub**:
  - Pre-populated with your GitHub repositories under **CG-Technology**: **MSP Toolkit Pro** and **IT Support Studio**.
  - Real-time search by tool name, keywords, or technology stack (`WPF`, `RMM`, `DISM`, `PowerShell`).
  - Category filter pills (`All Projects`, `Desktop & RMM Tools`, `Automation & Scripting`, `Diagnostics`).
  - **Project Details Modal**: Click *Details & Specs* on any card to view architectural breakdowns, key features, and 1-click copyable CLI / PowerShell command snippets.
  - Direct links to GitHub repositories (`https://github.com/CG-Technology/...`).
- **Interactive CLI & Triage Simulator**:
  - Live typewriter streaming of real diagnostic and remediation commands (`--scan --json`, `--cw-automate`, `dism-sfc-repair`, `Build-StandaloneExe.ps1`).
  - Color-coded terminal output and 1-click copy session buffer.
- **Architecture & FAQ Accordion**:
  - Pre-configured answers to technical questions about zero-dependency runtimes, RMM exit codes, white-labeling, and UAC elevation handling.
- **3-Tier Theme Switcher**:
  - **Slate Dark** (Default: Balanced corporate navy slate)
  - **Midnight Dark** (OLED pitch black with electric violet & radiant indigo glow)
  - **Light Mode** (Crisp minimal slate white)
  - Seamless 1-click cycling button persisting your preference in `localStorage`.
- **Inquiry & Contact Hub**:
  - Direct links to the **CG-Technology** GitHub profile.
  - Interactive contact form with input validation and feedback alerts.
- **Zero-Dependency Architecture**:
  - 100% standard HTML5, CSS3, and modern ES6+ JavaScript.
  - No `npm install`, Node.js, or complex toolchains required.
  - Ready for instant deployment to **GitHub Pages**, **Netlify**, **Cloudflare Pages**, or **Vercel**.
