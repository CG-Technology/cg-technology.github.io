/**
 * CG Technology Portfolio - Main Application Logic
 * Dual-Mode Navigation, 3-Tier Themes, Project Filter/Search,
 * Interactive Terminal Simulator, FAQ Accordion, Detail Modal, Toast Notifications
 */

/* ==========================================================================
   Internal Fallback Datasets (Ensures 100% uptime if external data fails)
   ========================================================================== */

const fallbackTerminalCommands = [
  {
    id: "scan-json",
    label: "MSPToolkit --scan --json",
    command: "MSPToolkit.exe --scan --json",
    description: "Execute full auto-triage quick scan with machine-readable JSON",
    output: [
      '<span class="t-purple">[MSPToolkit]</span> Initializing Quick Scan Engine v1.0.4...',
      '<span class="t-blue">[INFO]</span> Probing hardware, OS, disk health, and network connectivity...',
      '<span class="t-green">[PASS]</span> OS: Windows 11 Enterprise (Build 22631.3880) - Uptime: 2d 04h 18m',
      '<span class="t-green">[PASS]</span> System Storage: C: NTFS (214.2 GB Free of 475.8 GB) - 45% used',
      '<span class="t-green">[PASS]</span> SMART Health: NVMe Samsung 980 PRO - Status: OK (0 Reallocated Sectors)',
      '<span class="t-yellow">[WARN]</span> Pending Reboot: Component-Based Servicing (CBS) reboot flag detected',
      '<span class="t-blue">[INFO]</span> Serializing results to structured JSON output...',
      '',
      '{',
      '  <span class="t-blue">"timestamp"</span>: <span class="t-green">"2026-09-09T04:45:12Z"</span>,',
      '  <span class="t-blue">"status"</span>: <span class="t-yellow">"WARNING"</span>,',
      '  <span class="t-blue">"exit_code"</span>: <span class="t-purple">1</span>,',
      '  <span class="t-blue">"summary"</span>: { <span class="t-blue">"errors"</span>: 0, <span class="t-blue">"warnings"</span>: 1, <span class="t-blue">"checks_passed"</span>: 14 },',
      '  <span class="t-blue">"reboot_required"</span>: <span class="t-purple">true</span>,',
      '  <span class="t-blue">"system"</span>: {',
      '    <span class="t-blue">"hostname"</span>: <span class="t-green">"CGTECH-WS01"</span>,',
      '    <span class="t-blue">"os"</span>: <span class="t-green">"Microsoft Windows 11 Enterprise"</span>,',
      '    <span class="t-blue">"ram_gb"</span>: <span class="t-purple">32</span>,',
      '    <span class="t-blue">"primary_ip"</span>: <span class="t-green">"192.168.1.105"</span>',
      '  }',
      '}',
      '',
      '<span class="t-green">[SUCCESS]</span> Scan finished. Process exited with code: 1 (Warning: Pending Reboot).'
    ]
  },
  {
    id: "cw-automate",
    label: "MSPToolkit --cw-automate",
    command: "MSPToolkit.exe --cw-automate --format kv",
    description: "Audit ConnectWise Automate Agent health with script-friendly Key=Value output",
    output: [
      '<span class="t-purple">[MSPToolkit]</span> ConnectWise Automate Agent Diagnostic Probe',
      '<span class="t-blue">[INFO]</span> Checking registry keys at HKLM:\\SOFTWARE\\LabTech\\Service...',
      '<span class="t-blue">[INFO]</span> Verifying Windows services: LTSvc (Running), LTSvcMon (Running)...',
      '<span class="t-blue">[INFO]</span> Testing outbound TCP handshake to server: automate.mspcloud.com:443...',
      '<span class="t-green">[OK]</span> Socket connection verified in 34ms.',
      '',
      'STATUS=HEALTHY',
      'EXIT_CODE=0',
      'ERRORS=0',
      'WARNINGS=0',
      'CW_INSTALLED=True',
      'CW_COMPUTER_ID=84920',
      'CW_CLIENT_ID=142',
      'CW_LOCATION_ID=21',
      'CW_SERVER=automate.mspcloud.com',
      'CW_PORT=443',
      'CW_VERSION=24.0.412',
      'HEARTBEAT_STATUS=ONLINE',
      '',
      '<span class="t-green">[COMPLETED]</span> Automate agent telemetry returned for RMM @result@ parsing.'
    ]
  },
  {
    id: "dism-sfc",
    label: "MSPToolkit --run dism-sfc-repair",
    command: "MSPToolkit.exe --run dism-sfc-repair --all",
    description: "Run automated DISM ScanHealth/RestoreHealth and SFC component repair",
    output: [
      '<span class="t-purple">[Remediation]</span> Executing Automated Windows Component Store Repair...',
      '<span class="t-blue">[Step 1/3]</span> DISM.exe /Online /Cleanup-Image /ScanHealth',
      '  Scanning component store: [====================] 100%',
      '  <span class="t-yellow">[RESULT]</span> Component store corruption detected. Repair source is available.',
      '<span class="t-blue">[Step 2/3]</span> DISM.exe /Online /Cleanup-Image /RestoreHealth',
      '  Restoring component store files: [====================] 100%',
      '  <span class="t-green">[RESULT]</span> The restore operation completed successfully.',
      '<span class="t-blue">[Step 3/3]</span> SFC.exe /scannow (System File Checker)',
      '  Beginning system scan verification: [====================] 100%',
      '  <span class="t-green">[RESULT]</span> Windows Resource Protection found corrupt files and successfully repaired them.',
      '',
      '<span class="t-green">[SUCCESS]</span> Component store verified and repaired. Process exit code: 0.'
    ]
  },
  {
    id: "build-exe",
    label: "ITSupportStudio: Build Standalone",
    command: ".\\scripts\\Build-StandaloneExe.ps1 -Config \"templates\\modern_slate.json\"",
    description: "Compile a custom-branded 70KB standalone IT support executable",
    output: [
      '<span class="t-purple">[IT Support Studio]</span> Standalone Executable Compiler',
      '<span class="t-blue">[INFO]</span> Loading configuration profile: templates\\modern_slate.json',
      '<span class="t-blue">[INFO]</span> Profile: "Corporate Support Companion" - Primary Color: #4F46E5',
      '<span class="t-blue">[INFO]</span> Embedding company logo vector asset: assets\\logo_light.png',
      '<span class="t-blue">[INFO]</span> Generating C# source metadata with embedded branding parameters...',
      '<span class="t-blue">[INFO]</span> Invoking native Microsoft .NET C# compiler (csc.exe)...',
      '  C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\csc.exe /target:winexe /optimize+ /platform:anycpu',
      '  Output target: build\\CorporateSupportInfo.exe',
      '',
      '<span class="t-green">[SUCCESS]</span> Standalone executable compiled successfully!',
      '  Binary Location: build\\CorporateSupportInfo.exe',
      '  Size: 72,192 bytes (~70.5 KB)',
      '  Prerequisites: 0 (Runs natively on Windows 10 & 11 without installer)',
      '  Deployment Script Generated: build\\Deploy-IntuneSupportTool.ps1'
    ]
  }
];

const fallbackFaqData = [
  {
    question: "Do MSP Toolkit Pro and IT Support Studio require any software prerequisites?",
    answer: "No. Both utilities are built as zero-dependency native Windows executables compiled against .NET Framework 4.8 / .NET 10. They run immediately on any standard Windows 10 or Windows 11 installation without requiring runtime packages, Java, Python, or administrative installers."
  },
  {
    question: "How do the headless CLI commands integrate into RMM platforms like Ninja, Datto, or Automate?",
    answer: "When executed with arguments (e.g. <code>--scan</code> or <code>--cw-automate</code>), the application suppresses the GUI window and outputs machine-readable JSON or single-line Key=Value pairs directly to standard output (stdout). Standardized RMM exit codes (0 = Healthy, 1 = Warning, 2 = Critical Error) allow RMM alert monitors to triage endpoints automatically."
  },
  {
    question: "Can we rebrand IT Support Studio with our own logo and helpdesk contact details?",
    answer: "Yes. IT Support Studio is fully white-label. You can configure company branding, phone numbers, email addresses, and ScreenConnect/remote support URLs via the visual builder studio GUI or JSON profiles, and compile a single branded <code>.exe</code> with deployment scripts for Microsoft Intune in one click."
  },
  {
    question: "How are destructive actions and Windows UAC elevations handled?",
    answer: "The GUI includes automatic UAC detection with a prominent elevation banner. In interactive mode, destructive fixes (such as DISM restore, network resets, or profile repairs) require explicit confirmation dialogs. In headless CLI mode, explicit action flags (e.g. <code>--all</code> or <code>--actions</code>) are strictly required to execute remediations."
  }
];

// Helper functions to safely retrieve datasets
function getTerminalCommands() {
  if (typeof window !== 'undefined' && Array.isArray(window.terminalCommands) && window.terminalCommands.length > 0) {
    return window.terminalCommands;
  }
  if (typeof terminalCommands !== 'undefined' && Array.isArray(terminalCommands) && terminalCommands.length > 0) {
    return terminalCommands;
  }
  return fallbackTerminalCommands;
}

function getFaqData() {
  if (typeof window !== 'undefined' && Array.isArray(window.faqData) && window.faqData.length > 0) {
    return window.faqData;
  }
  if (typeof faqData !== 'undefined' && Array.isArray(faqData) && faqData.length > 0) {
    return faqData;
  }
  return fallbackFaqData;
}

function getProjectsData() {
  if (typeof window !== 'undefined' && Array.isArray(window.projectsData) && window.projectsData.length > 0) {
    return window.projectsData;
  }
  if (typeof projectsData !== 'undefined' && Array.isArray(projectsData) && projectsData.length > 0) {
    return projectsData;
  }
  return [];
}

function getProjectCategories() {
  if (typeof window !== 'undefined' && Array.isArray(window.projectCategories) && window.projectCategories.length > 0) {
    return window.projectCategories;
  }
  if (typeof projectCategories !== 'undefined' && Array.isArray(projectCategories) && projectCategories.length > 0) {
    return projectCategories;
  }
  return [
    { id: "all", name: "All Projects" },
    { id: "desktop-rmm", name: "Desktop & RMM Tools" },
    { id: "automation", name: "Automation & Scripting" },
    { id: "diagnostics", name: "Diagnostics" }
  ];
}

/* ==========================================================================
   DOM Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjectsSection();
  initTerminalSimulator();
  initFAQ();
  initContactForm();
  initFooterYear();
});

/* ==========================================================================
   Toast Notification System
   ========================================================================== */

function showToast(message, iconSvg = null) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = iconSvg || `
    <svg class="toast-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
    </svg>
  `;

  toast.innerHTML = `${icon}<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => {
      toast.remove();
    }, 280);
  }, 3200);
}

/* ==========================================================================
   Theme Management (Slate Dark / Midnight OLED / Clean Light)
   ========================================================================== */

const THEMES = ['slate', 'midnight', 'light'];
const THEME_NAMES = {
  slate: 'Slate Dark',
  midnight: 'Midnight Dark (OLED)',
  light: 'Light Mode'
};

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const eclipseIcon = document.getElementById('theme-icon-eclipse');

  const savedTheme = localStorage.getItem('cgtech-theme') || localStorage.getItem('synduction-theme');
  let currentTheme = (savedTheme && THEMES.includes(savedTheme)) ? savedTheme : 'slate';
  applyTheme(currentTheme, false);

  themeToggleBtn.addEventListener('click', () => {
    const currentIndex = THEMES.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    currentTheme = THEMES[nextIndex];

    applyTheme(currentTheme, true);
    localStorage.setItem('cgtech-theme', currentTheme);
  });

  function applyTheme(theme, notify = true) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
      if (eclipseIcon) eclipseIcon.style.display = 'none';
    } else if (theme === 'midnight') {
      document.documentElement.setAttribute('data-theme', 'midnight');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'none';
      if (eclipseIcon) eclipseIcon.style.display = 'block';
    } else {
      document.documentElement.setAttribute('data-theme', 'slate');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
      if (eclipseIcon) eclipseIcon.style.display = 'none';
    }

    themeToggleBtn.setAttribute('title', `Active: ${THEME_NAMES[theme]} (Click to switch)`);
    themeToggleBtn.setAttribute('aria-label', `Active: ${THEME_NAMES[theme]}. Click to switch theme.`);

    if (notify) {
      showToast(`Theme switched to ${THEME_NAMES[theme]}`);
    }
  }
}

/* ==========================================================================
   Dual-Mode Navigation (Tabs + Smooth Scroll + Intersection Observer)
   ========================================================================== */

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileMenuToggle && navLinksContainer) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
      const isOpen = navLinksContainer.classList.contains('mobile-open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
        if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        setActiveNavLink(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  function setActiveNavLink(targetId) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${targetId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   Projects Section (Rendering, Categories, Search, Detail Modal)
   ========================================================================== */

let activeCategory = 'all';
let searchQuery = '';

function initProjectsSection() {
  renderCategoryPills();
  renderProjects();

  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  initModal();
}

function renderCategoryPills() {
  const container = document.getElementById('category-filter-pills');
  const categories = getProjectCategories();
  if (!container || !categories.length) return;

  container.innerHTML = categories.map(cat => `
    <button class="category-pill-btn ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      container.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const projects = getProjectsData();
  if (!grid || !projects.length) return;

  const filtered = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery) ||
      project.subtitle.toLowerCase().includes(searchQuery) ||
      project.description.toLowerCase().includes(searchQuery) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-projects-state">
        <svg class="empty-state-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">No projects found</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem;">Try adjusting your search terms or filter selection.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(project => {
    const badgeClass = project.badgeType === 'success' ? 'badge-success' : 'badge-accent';
    const statsHtml = project.stats && project.stats.length ? `
      <div class="card-stats-grid">
        ${project.stats.slice(0, 4).map(st => `
          <div class="card-stat-box">
            <span class="card-stat-box-val">${escapeHtml(st.value)}</span>
            <span class="card-stat-box-lbl">${escapeHtml(st.label)}</span>
          </div>
        `).join('')}
      </div>
    ` : '';

    const quickCommandHtml = project.quickRunCommand ? `
      <div class="card-command-strip">
        <span class="card-command-text" title="${escapeHtml(project.quickRunCommand)}">${escapeHtml(project.quickRunCommand)}</span>
        <button class="card-command-copy-btn" data-copy-cmd="${escapeHtml(project.quickRunCommand)}" aria-label="Copy run command">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          Copy
        </button>
      </div>
    ` : '';

    return `
      <article class="project-card" data-project-id="${escapeHtml(project.id)}">
        <div class="card-top-bar">
          <span class="card-category-label">${escapeHtml(project.categoryName || 'Tools')}</span>
          <span class="badge ${badgeClass}">${escapeHtml(project.badge || 'Active')}</span>
        </div>

        <h3 class="card-title">${escapeHtml(project.title)}</h3>
        <p class="card-subtitle">${escapeHtml(project.subtitle)}</p>
        <p class="card-description">${escapeHtml(project.description)}</p>

        ${statsHtml}
        ${quickCommandHtml}

        <div class="card-tags-wrap">
          ${project.tags.map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button class="btn btn-secondary btn-sm view-details-btn" data-project-id="${escapeHtml(project.id)}">
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Details & Specs
          </button>
          ${project.links.github ? `
            <a href="${escapeHtml(project.links.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });

  grid.querySelectorAll('.card-command-copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = btn.getAttribute('data-copy-cmd');
      navigator.clipboard.writeText(cmd).then(() => {
        showToast(`Copied: ${cmd}`);
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.innerHTML = `
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            Copy
          `;
        }, 2000);
      });
    });
  });
}

/* ==========================================================================
   Project Details Modal
   ========================================================================== */

function initModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const projects = getProjectsData();
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('project-modal-backdrop');
  const titleEl = document.getElementById('modal-title');
  const subtitleEl = document.getElementById('modal-subtitle');
  const bodyEl = document.getElementById('modal-body-content');
  const githubLinkEl = document.getElementById('modal-github-link');

  titleEl.textContent = project.title;
  subtitleEl.textContent = project.subtitle;

  if (project.links.github) {
    githubLinkEl.href = project.links.github;
    githubLinkEl.style.display = 'inline-flex';
  } else {
    githubLinkEl.style.display = 'none';
  }

  let contentHtml = `
    <div>
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Overview</h4>
      <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">${escapeHtml(project.description)}</p>
    </div>
  `;

  if (project.features && project.features.length) {
    contentHtml += `
      <div>
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary);">Key Architectural Features</h4>
        <ul class="modal-features-list">
          ${project.features.map(f => `
            <li class="modal-feature-item">
              <svg class="modal-feature-icon" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>${escapeHtml(f)}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  if (project.quickSnippet) {
    contentHtml += `
      <div>
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary);">Command & CLI Usage</h4>
        <div class="snippet-box">
          <div class="snippet-top">
            <span>${escapeHtml(project.quickSnippet.caption || 'Script / Terminal')}</span>
            <button class="copy-snippet-btn" style="color: var(--accent-light); font-size: 0.75rem; cursor: pointer;">Copy</button>
          </div>
          <pre class="snippet-code"><code>${escapeHtml(project.quickSnippet.code)}</code></pre>
        </div>
      </div>
    `;
  }

  bodyEl.innerHTML = contentHtml;

  const copyBtn = bodyEl.querySelector('.copy-snippet-btn');
  if (copyBtn && project.quickSnippet) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(project.quickSnippet.code).then(() => {
        showToast('Code snippet copied to clipboard');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
      });
    });
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Interactive Terminal Simulator
   ========================================================================== */

let activeStreamTimer = null;

function initTerminalSimulator() {
  const controlsContainer = document.getElementById('simulator-controls');
  const terminalScreen = document.getElementById('terminal-screen');
  const terminalCommandTitle = document.getElementById('terminal-command-title');
  const clearBtn = document.getElementById('terminal-clear-btn');
  const copyOutputBtn = document.getElementById('terminal-copy-btn');

  const commands = getTerminalCommands();
  if (!controlsContainer || !terminalScreen || commands.length === 0) return;

  // Render command selection pills
  controlsContainer.innerHTML = commands.map((item, idx) => `
    <button class="cmd-pill-btn ${idx === 0 ? 'active' : ''}" data-cmd-id="${escapeHtml(item.id)}">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      ${escapeHtml(item.label)}
    </button>
  `).join('');

  controlsContainer.querySelectorAll('.cmd-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmdId = btn.getAttribute('data-cmd-id');
      controlsContainer.querySelectorAll('.cmd-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      runSimulatorCommand(cmdId);
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (activeStreamTimer) {
        clearInterval(activeStreamTimer);
        activeStreamTimer = null;
      }
      terminalScreen.innerHTML = `
        <div class="terminal-prompt-line">
          <span>PS C:\\Tools&gt;</span>
          <span class="terminal-cursor"></span>
        </div>
      `;
    });
  }

  if (copyOutputBtn) {
    copyOutputBtn.addEventListener('click', () => {
      const text = terminalScreen.innerText;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Terminal session output copied');
      });
    });
  }

  // Run first command initially
  runSimulatorCommand(commands[0].id);

  function runSimulatorCommand(commandId) {
    const allCommands = getTerminalCommands();
    const cmdObj = allCommands.find(c => c.id === commandId) || allCommands[0];
    if (!cmdObj) return;

    if (activeStreamTimer) {
      clearInterval(activeStreamTimer);
      activeStreamTimer = null;
    }

    if (terminalCommandTitle) {
      terminalCommandTitle.textContent = cmdObj.command;
    }

    terminalScreen.innerHTML = `
      <div class="terminal-prompt-line">
        <span>PS C:\\Tools&gt;</span>
        <span style="color: #FFFFFF; font-weight: 600;">${escapeHtml(cmdObj.command)}</span>
      </div>
      <div id="stream-output"></div>
    `;

    const outputContainer = document.getElementById('stream-output');
    let lineIdx = 0;

    activeStreamTimer = setInterval(() => {
      if (lineIdx < cmdObj.output.length) {
        const line = cmdObj.output[lineIdx];
        const lineEl = document.createElement('div');
        lineEl.innerHTML = line || '&nbsp;';
        outputContainer.appendChild(lineEl);
        terminalScreen.scrollTop = terminalScreen.scrollHeight;
        lineIdx++;
      } else {
        clearInterval(activeStreamTimer);
        activeStreamTimer = null;

        const endPrompt = document.createElement('div');
        endPrompt.className = 'terminal-prompt-line';
        endPrompt.style.marginTop = '0.75rem';
        endPrompt.innerHTML = `
          <span>PS C:\\Tools&gt;</span>
          <span class="terminal-cursor"></span>
        `;
        terminalScreen.appendChild(endPrompt);
        terminalScreen.scrollTop = terminalScreen.scrollHeight;
      }
    }, 40);
  }
}

/* ==========================================================================
   Architecture FAQ Accordion
   ========================================================================== */

function initFAQ() {
  const faqContainer = document.getElementById('faq-accordion');
  const faqs = getFaqData();
  if (!faqContainer || faqs.length === 0) return;

  faqContainer.innerHTML = faqs.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span>${escapeHtml(item.question)}</span>
        <svg class="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="faq-content">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  faqContainer.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isActive = item.classList.contains('active');

      faqContainer.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        const trig = i.querySelector('.faq-trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   Contact Form Validation & Feedback
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-msg');
  if (!form || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim() || 'Inquiry for CG Technology';
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      statusMsg.className = 'form-status-msg error';
      statusMsg.textContent = 'Please fill out all required fields before submitting.';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      statusMsg.className = 'form-status-msg success';
      statusMsg.innerHTML = `<strong>Thank you, ${escapeHtml(name)}!</strong> Your message has been prepared. If your mail client doesn't automatically open, you can also reach out directly via GitHub or email.`;
      
      showToast('Message inquiry prepared!');

      const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      form.reset();
    }, 600);
  });
}

function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
