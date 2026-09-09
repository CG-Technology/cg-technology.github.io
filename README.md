# Synduction - Systems & Tools Showcase Website

A clean, modern portfolio and project showcase website engineered to display your desktop utilities, RMM tools, and systems management solutions.

Built with a **Slate & Deep Indigo** aesthetic, dual-mode tab navigation, real-time search & category filtering, dark/light theme switching, and zero external build dependencies.

---

## Live Features

- **Dual-Mode Navigation**:
  - Sticky navbar with automatic active tab indicator (`Home`, `About`, `Projects`, `Contact`).
  - Seamless smooth scrolling to each section with direct URL hashtag support.
  - Mobile responsive drawer menu.
- **Projects Showcase Hub**:
  - Pre-populated with your GitHub repositories: **MSP Toolkit Pro** and **IT Support Studio**.
  - Real-time search by tool name, keywords, or technology stack (`WPF`, `RMM`, `DISM`, `PowerShell`).
  - Category filter pills (`All Projects`, `Desktop & RMM Tools`, `Automation & Scripting`, `Diagnostics`).
  - **Project Details Modal**: Click *Details & Specs* on any card to view architectural breakdowns, key features, and 1-click copyable CLI / PowerShell command snippets.
  - Direct links to GitHub repositories.
- **Slate & Deep Indigo Design System**:
  - Fully responsive, uncluttered, typography-focused UI.
  - Persistent Light / Dark mode toggle (persists choice in `localStorage`).
- **Inquiry & Contact Hub**:
  - Direct links to your GitHub profile.
  - Interactive contact form with input validation and feedback alerts.
- **Zero-Dependency Architecture**:
  - 100% standard HTML5, CSS3, and modern ES6+ JavaScript.
  - No `npm install`, Node.js, or complex toolchains required.
  - Ready for instant deployment to **GitHub Pages**, **Netlify**, **Cloudflare Pages**, or **Vercel**.

---

## Quick Start / Local Preview

### Option 1: Double-Click
Simply double-click `index.html` in your file explorer to open it in any web browser.

### Option 2: PowerShell Local Server
Run the included zero-dependency server:
```powershell
.\serve.ps1
```
This starts a lightweight HTTP server on `http://localhost:8080/` and opens your default browser automatically.

---

## How to Add or Update Projects

All projects are configured in a clean, human-readable data file: [`js/projects-data.js`](js/projects-data.js).

To add a new project, simply append an entry to the `projectsData` array:

```javascript
{
  id: "my-new-tool",
  title: "My New Tool",
  subtitle: "One-line summary of what this tool does",
  description: "Detailed description of problem and solution...",
  category: "desktop-rmm", // 'desktop-rmm', 'automation', or 'diagnostics'
  categoryName: "Desktop & RMM Tools",
  badge: "Production Ready", // or 'Beta', 'Open Source', etc.
  badgeType: "accent",       // 'accent' or 'success'
  featured: true,
  tags: ["C#", ".NET", "WPF"],
  stats: [
    { label: "Built-in Tools", value: "10" },
    { label: "Binary Size", value: "120 KB" }
  ],
  links: {
    github: "https://github.com/Synduction/MyNewTool",
    docs: "https://github.com/Synduction/MyNewTool#readme"
  },
  features: [
    "Feature 1: Description of capability",
    "Feature 2: Description of capability"
  ],
  quickSnippet: {
    language: "powershell",
    caption: "CLI Command Example",
    code: `MyTool.exe --scan --json`
  }
}
```

The website will automatically render the new project card, include it in searches, and set up its interactive details modal.

---

## Deploying to GitHub Pages

Because this site is built with standard static web files, you can deploy it for free on GitHub Pages in seconds:

1. Create a repository on GitHub (e.g. `Synduction/synduction.github.io` for a primary root portfolio, or `Synduction/showcase`).
2. Push this directory's contents to the repository.
3. In GitHub, go to **Settings > Pages > Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `master` (or `main`) / `/ (root)`
4. Your website is live!

