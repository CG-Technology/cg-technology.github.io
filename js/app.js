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
    label: "🔍 Check PC Health",
    command: "MSPToolkit.exe --scan --json",
    description: "Scan hardware, storage, and Windows health with structured output",
    output: [
      '<span class="t-purple">[MSPToolkit]</span> Initializing Quick Scan Engine v1.0.5...',
      '<span class="t-blue">[INFO]</span> Checking hardware, storage health, and system status...',
      '<span class="t-green">[PASS]</span> OS: Windows 11 Enterprise (Build 22631) - Running for: 2 days, 4 hours',
      '<span class="t-green">[PASS]</span> Storage Space: C: Drive (214.2 GB Free of 475.8 GB) - Healthy',
      '<span class="t-green">[PASS]</span> Hard Drive Health (SMART): NVMe SSD - Status: OK (0 Bad Sectors)',
      '<span class="t-yellow">[NOTE]</span> Pending Restart: A Windows update was recently installed and needs a restart',
      '<span class="t-blue">[INFO]</span> Compiling clean summary report...',
      '',
      '{',
      '  <span class="t-blue">"status"</span>: <span class="t-green">"HEALTHY"</span>,',
      '  <span class="t-blue">"system"</span>: {',
      '    <span class="t-blue">"computer_name"</span>: <span class="t-green">"WORKSTATION-01"</span>,',
      '    <span class="t-blue">"os"</span>: <span class="t-green">"Windows 11 Enterprise"</span>,',
      '    <span class="t-blue">"memory_ram"</span>: <span class="t-purple">32 GB</span>,',
      '    <span class="t-blue">"storage_health"</span>: <span class="t-green">"100% OK"</span>',
      '  }',
      '}',
      '',
      '<span class="t-green">[SUCCESS]</span> Health scan complete. No critical hardware or file errors found.'
    ]
  },
  {
    id: "sentinel-scan",
    label: "🛡️ Hardware Sentinel",
    command: "HardwareSentinel.exe --health-scan",
    description: "Inspect storage SMART health, battery wear, and system crash history",
    output: [
      '<span class="t-purple">[HardwareSentinel]</span> Initializing Diagnostic Probes v1.0.0...',
      '<span class="t-blue">[Storage]</span> Reading SMART telemetry & NVMe health... <span class="t-green">[HEALTHY]</span>',
      '  Model: NVMe SAMSUNG MZVL21T0 - SMART Status: OK - Free Space: 382.4 GB (62%)',
      '<span class="t-blue">[Power]</span> Inspecting battery wear and power rails... <span class="t-green">[EXCELLENT]</span>',
      '  Design Capacity: 75,000 mWh | Full Charge: 72,400 mWh | Wear: 3.5% | Cycles: 48',
      '<span class="t-blue">[Stability]</span> Checking Windows Minidump and System Crash Logs...',
      '  Recent BlueScreens (30d): 0 detected | Kernel-Power Warnings: Clean',
      '<span class="t-blue">[System Load]</span> CPU Load: 14% | Memory: 11.2 GB / 32.0 GB (35%)',
      '',
      '<span class="t-green">========================================================</span>',
      '  <span class="t-green">HARDWARE HEALTH SCORE: 96 / 100 (EXCELLENT)</span>',
      '  <span class="t-blue">Status: All primary hardware subsystems within optimal parameters.</span>',
      '<span class="t-green">========================================================</span>',
      '',
      '<span class="t-green">[SUCCESS]</span> Standalone HTML report generated: output\\Hardware-Health-Report.html'
    ]
  },
  {
    id: "dism-sfc",
    label: "🛠️ Repair Windows Files",
    command: "MSPToolkit.exe --run dism-sfc-repair --all",
    description: "Scan and automatically repair corrupted Windows system files",
    output: [
      '<span class="t-purple">[Automated Repair]</span> Checking Windows System Files for Corruption...',
      '<span class="t-blue">[Step 1/2]</span> Checking Windows Component Health...',
      '  Scanning system files: [====================] 100%',
      '  <span class="t-yellow">[FOUND]</span> Some damaged system files were detected. Repair source is available.',
      '<span class="t-blue">[Step 2/2]</span> Restoring healthy Windows files from verified backup...',
      '  Restoring files: [====================] 100%',
      '  <span class="t-green">[RESULT]</span> Windows files successfully restored to healthy state.',
      '',
      '<span class="t-green">[SUCCESS]</span> Repair finished successfully. Your Windows system files are now clean and verified!'
    ]
  },
  {
    id: "intune-pack",
    label: "📦 Convert App Installer",
    command: "IntunePackager.exe -Source \"C:\\Apps\\Zoom\" -Setup \"ZoomInstaller.exe\" -AutoDetect",
    description: "Convert a regular installer into a cloud-ready package with detection rules",
    output: [
      '<span class="t-purple">[IntunePackager]</span> Starting Package Conversion...',
      '<span class="t-blue">[INFO]</span> Inspecting installer binary: ZoomInstaller.exe...',
      '<span class="t-green">[DETECTED]</span> Product Version: 6.1.5',
      '<span class="t-green">[DETECTED]</span> Silent Install Switch: /silent /norestart',
      '<span class="t-blue">[INFO]</span> Compressing and encrypting into cloud-ready package...',
      '  Packaging files: [====================] 100%',
      '<span class="t-green">[SUCCESS]</span> Package Created: ZoomInstaller.intunewin (58.4 MB)',
      '<span class="t-blue">[INFO]</span> Auto-generating detection script: Detect-Zoom.ps1...',
      '<span class="t-green">[COMPLETED]</span> Package and deployment guide created in 3.4 seconds!'
    ]
  },
  {
    id: "cw-automate",
    label: "📡 Check IT Connection",
    command: "MSPToolkit.exe --cw-automate --format kv",
    description: "Verify that the IT support connection and monitoring services are active",
    output: [
      '<span class="t-purple">[MSPToolkit]</span> Checking IT Support Agent Connection...',
      '<span class="t-blue">[INFO]</span> Verifying Windows background support services... [RUNNING]',
      '<span class="t-blue">[INFO]</span> Testing connection to central support server...',
      '<span class="t-green">[OK]</span> Connection to support server verified in 34ms.',
      '',
      'STATUS=HEALTHY',
      'CONNECTION=ONLINE',
      'ERRORS=0',
      'SUPPORT_SERVER=CONNECTED',
      '',
      '<span class="t-green">[COMPLETED]</span> Computer is actively connected to support services.'
    ]
  },
  {
    id: "build-exe",
    label: "🎨 Create Custom Help App",
    command: ".\\scripts\\Build-StandaloneExe.ps1 -Config \"templates\\modern_slate.json\"",
    description: "Generate a custom-branded 70KB desktop support application",
    output: [
      '<span class="t-purple">[IT Support Studio]</span> Building Standalone Support App...',
      '<span class="t-blue">[INFO]</span> Loading custom branding profile: Company Support Widget',
      '<span class="t-blue">[INFO]</span> Embedding support phone number and email...',
      '<span class="t-blue">[INFO]</span> Applying brand color theme: Indigo Slate',
      '<span class="t-blue">[INFO]</span> Compiling single self-contained application...',
      '  Creating standalone file: build\\CompanySupportInfo.exe',
      '',
      '<span class="t-green">[SUCCESS]</span> Support app built successfully!',
      '  App Size: ~70 KB',
      '  Prerequisites: 0 (Runs immediately on Windows 10 & 11 without installer)',
      '  Ready to share with employees or clients!'
    ]
  }
];

const fallbackFaqData = [
  {
    question: "Do I need to install anything before using these tools?",
    answer: "No! All CG Technology tools are completely standalone and portable. They run immediately on any standard Windows 10 or Windows 11 computer without requiring installers, extra downloads, or administrator setup."
  },
  {
    question: "What does the Intune App Packager do in simple terms?",
    answer: "When companies want to install software (like Zoom or Google Chrome) across dozens or hundreds of computers automatically from the cloud, Microsoft Intune requires a special encrypted format called <code>.intunewin</code>. Our tool does all the heavy lifting in seconds: it inspects your setup file, configures silent installation, creates the package, and writes the rules that tell Windows when the app is installed."
  },
  {
    question: "What is MSP Toolkit Pro and when should I use it?",
    answer: "MSP Toolkit Pro is like a digital mechanic for your PC. Use it whenever a computer is behaving sluggishly, failing to open Microsoft 365 apps, throwing blue screen crashes, or having printer/network glitches. You can run a quick check to see what's wrong, or click automated repair buttons to fix corrupted files."
  },
  {
    question: "Can I customize IT Support Studio with my own company's branding?",
    answer: "Yes! IT Support Studio has an easy visual builder where you can upload your own company logo, pick your brand colors, and add your team's support phone number and email. With one click, it builds a tiny (~70 KB) app you can give to your team or clients so they can reach you in one click."
  },
  {
    question: "Are these tools safe to run on my computer?",
    answer: "Yes, completely. Everything is built using native, verified Windows technologies. Our tools do not install mystery background services or show advertisements. Diagnostic checks are read-only, and any repair options clearly explain what they do before making changes."
  }
];

const fallbackProjectsData = [
  {
    id: "msp-toolkit-pro",
    title: "MSP Toolkit Pro",
    subtitle: "All-in-one Windows diagnostic & automated repair toolkit",
    description: "Think of it as a digital mechanic for Windows. It quickly scans your computer to find out why it is running slow, checks whether your hard drive is healthy, and repairs common system crashes and glitches with a single click—no messy installation or extra software required.",
    category: "desktop-rmm",
    categoryName: "PC Repair & Helpdesk",
    categories: ["desktop-rmm", "diagnostics"],
    badge: "Production Ready",
    badgeType: "accent",
    featured: true,
    tags: ["Windows 10 / 11", "One-Click Fixes", "Hardware Health", "Crash Analysis", "C# & PowerShell"],
    stats: [
      { label: "One-Click Fixes", value: "29+" },
      { label: "Tool Areas", value: "6" },
      { label: "Installation", value: "None (Portable)" },
      { label: "Windows OS", value: "10 & 11" }
    ],
    links: {
      github: "https://github.com/CG-Technology/MSPToolkitPro",
      docs: "https://github.com/CG-Technology/MSPToolkitPro#readme",
      releases: "https://github.com/CG-Technology/MSPToolkitPro/releases"
    },
    features: [
      "Visual & Command Modes: Easy buttons for everyday users, plus automated command support for office IT departments",
      "Quick Computer Health Check: Scans your computer in seconds for drive health, battery status, memory issues, and crash reports",
      "Automated Windows Repair: Fixes corrupted Windows system files (SFC & DISM), clears stuck print queues, and resets network hiccups",
      "Login & Account Fixer: Solves Microsoft 365, Outlook, and Teams login loops and account profile errors with one click",
      "Drive & Hardware Warning: Checks your hard drive or SSD health indicators to alert you before hardware fails",
      "Save & Share Reports: Generates clean, easy-to-read reports in HTML or text that you can save or email to a support technician"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Quick Scan & Automated Repair Example",
      code: `# Run Quick Health Scan and generate report\nMSPToolkit.exe --scan --json\n\n# One-click Windows system file repair\nMSPToolkit.exe --run dism-sfc-repair --all\n\n# Reset Microsoft 365 login and profile glitches\nMSPToolkit.exe --run m365-repair`
    },
    quickRunCommand: "MSPToolkit.exe --scan --json",
    quickClone: "git clone https://github.com/CG-Technology/MSPToolkitPro.git"
  },
  {
    id: "it-support-studio",
    title: "IT Support Studio",
    subtitle: "One-click desktop help widget & custom app builder",
    description: "A friendly desktop widget that makes getting computer support effortless. It displays essential computer details (like IP address, computer name, and system health) and gives you instant one-click buttons to call, email, or launch remote support.",
    category: "desktop-rmm",
    categoryName: "PC Repair & Helpdesk",
    badge: "Open Source",
    badgeType: "success",
    featured: true,
    tags: ["Desktop Widget", "Custom Branding", "Instant Support", "Windows 10 / 11", "C# & WPF"],
    stats: [
      { label: "File Size", value: "~70 KB" },
      { label: "Windows OS", value: "10 & 11" },
      { label: "Installation", value: "None" },
      { label: "Branding", value: "100% Custom" }
    ],
    links: {
      github: "https://github.com/CG-Technology/ITSupportStudio",
      docs: "https://github.com/CG-Technology/ITSupportStudio#readme",
      releases: "https://github.com/CG-Technology/ITSupportStudio/releases"
    },
    features: [
      "At-a-Glance PC Info: Displays your computer name, user account, local IP address, and how long the computer has been running",
      "Instant Helpdesk Contact: One-click buttons to call support, send a pre-filled email, or open remote assistance (TeamViewer, ScreenConnect, AnyDesk)",
      "One-Click Copy for Help Tickets: Click any individual detail or click 'Copy All Info' to paste your PC specs straight into a support email",
      "Visual Customizer Studio: Easy live-preview editor to add your company logo, colors, support phone number, and custom window title",
      "Standalone App Generator: Builds a tiny, single-file (.exe) application with your company branding baked right in",
      "Company Fleet Ready: Includes ready-to-use scripts to deploy automatically to all office computers via Microsoft Intune"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Launch Builder Studio or Create Branded App",
      code: `# Launch the Visual Builder Studio\n.\\scripts\\Run-Builder.ps1\n\n# Create a branded support app from a template\n.\\scripts\\Build-StandaloneExe.ps1 -Config "templates\\modern_slate.json" -Output "build\\CustomSupportInfo.exe"`
    },
    quickRunCommand: ".\\scripts\\Run-Builder.ps1",
    quickClone: "git clone https://github.com/CG-Technology/ITSupportStudio.git"
  },
  {
    id: "intune-app-packager",
    title: "Intune App Packager",
    subtitle: "Software packaging made easy for modern workplaces",
    description: "Taking a regular software installer (like Zoom or Chrome) and preparing it for company-wide deployment used to be tedious. This tool takes any standard EXE or MSI installer, detects the silent install settings, and turns it into a cloud-ready package in seconds.",
    category: "automation",
    categoryName: "Packaging & Automation",
    badge: "Beta • Active",
    badgeType: "accent",
    featured: true,
    tags: ["Microsoft Intune", "EXE to .intunewin", "MSI", "Silent Install", "PowerShell"],
    stats: [
      { label: "Packaging Time", value: "< 5s" },
      { label: "Installers", value: "EXE & MSI" },
      { label: "Detection Rules", value: "Automatic" },
      { label: "Prerequisites", value: "None" }
    ],
    links: {
      github: "https://github.com/CG-Technology/IntuneAppPackager",
      docs: "https://github.com/CG-Technology/IntuneAppPackager#readme",
      releases: "https://github.com/CG-Technology/IntuneAppPackager/releases"
    },
    features: [
      "Fast One-Click Conversion: Converts standard EXE and MSI installers into encrypted .intunewin packages ready for Microsoft Intune",
      "Smart Switch Detection: Automatically detects silent install switches so software installs smoothly in the background without user prompts",
      "Automatic Detection Rules: Generates verified PowerShell scripts so Intune knows whether the app is installed or missing",
      "Clear Deployment Guide: Creates an easy-to-read summary with the exact copy-and-paste commands for the Intune admin portal",
      "Live Visual Progress: Shows a real-time progress bar, elapsed timer, and live diagnostic output as it packages"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Package Installer with Automatic Detection",
      code: `# Package Win32 installer and generate detection rules\nIntunePackager.exe -Source "C:\\Apps\\Zoom" -Setup "ZoomInstaller.exe" -Output "C:\\Intune" -AutoDetect\n\n# Test generated detection script locally\npowershell -ExecutionPolicy Bypass -File .\\Detect-Zoom.ps1`
    },
    quickRunCommand: "IntunePackager.exe -Source \"C:\\Apps\\Zoom\" -Setup \"ZoomInstaller.exe\"",
    quickClone: "git clone https://github.com/CG-Technology/IntuneAppPackager.git"
  },
  {
    id: "hardware-sentinel",
    title: "Hardware Sentinel",
    subtitle: "Zero-dependency Windows hardware diagnostics & 0–100% PC Health Score",
    description: "An instant, honest health assessment utility for any Windows PC or laptop. It deep-scans storage drives (SMART & NVMe health), battery cycle wear, system stability, and recent blue screen crashes to calculate an intuitive 0–100% PC Health Score and standalone HTML report.",
    category: "diagnostics",
    categoryName: "Hardware & Health",
    categories: ["diagnostics"],
    badge: "v1.0.1 Ready",
    badgeType: "success",
    featured: true,
    tags: ["PC Health Score", "Drive SMART & NVMe", "Battery Degradation", "Crash Analysis", "PowerShell & WPF"],
    stats: [
      { label: "Health Score", value: "0–100%" },
      { label: "Diagnostics", value: "4 Modules" },
      { label: "Installation", value: "None (Portable)" },
      { label: "HTML Export", value: "Included" }
    ],
    links: {
      github: "https://github.com/CG-Technology/HardwareSentinel",
      docs: "https://github.com/CG-Technology/HardwareSentinel#readme",
      releases: "https://github.com/CG-Technology/HardwareSentinel/releases"
    },
    features: [
      "0–100% PC Health Score: Intelligent weighted scoring across storage, battery, stability, and system load",
      "Deep Storage Diagnostics: Evaluates SMART indicators, NVMe/SSD wear, and alerts on low disk space (<15% warning, <5% critical)",
      "Battery & Power Wear: Measures battery charge cycles, wear percentage, and gracefully detects desktop AC power",
      "Crash & BlueScreen History: Inspects minidumps and translates cryptic Windows crash codes into plain English",
      "Dual Mode Experience: Clean dark WPF dashboard for desktop users, plus scriptable engine for automated IT maintenance",
      "Standalone Branded Reports: Exports polished, self-contained HTML health summaries ready to email or archive"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Run Quick Diagnostic or Generate HTML Report",
      code: `# Launch the modern dashboard\n.\\Run-Sentinel.ps1\n\n# Run command-line scan and generate HTML report\n.\\src\\HardwareSentinel.ps1 -ExportHtml -HtmlPath "PC-Health-Report.html"`
    },
    quickRunCommand: ".\\Run-Sentinel.ps1",
    quickClone: "git clone https://github.com/CG-Technology/HardwareSentinel.git"
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
  return fallbackProjectsData;
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
  initDeepLinking();
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
    const matchesCategory = activeCategory === 'all' || 
      project.category === activeCategory || 
      (Array.isArray(project.categories) && project.categories.includes(activeCategory));
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
          ${project.links && project.links.releases ? `
            <a href="${escapeHtml(project.links.releases)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm card-releases-btn" title="Download latest releases / binaries">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Releases
            </a>
          ` : ''}
          ${project.links && project.links.github ? `
            <a href="${escapeHtml(project.links.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm card-github-btn">
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
   Project Details Modal & Deep Linking
   ========================================================================== */

let currentOpenProjectId = null;

function initModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const shareBtn = document.getElementById('modal-share-btn');

  if (!backdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(true));
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal(true);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal(true);
    }
  });

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!currentOpenProjectId) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}#${currentOpenProjectId}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast(`Direct link copied: #${currentOpenProjectId}`);
        }).catch(() => {
          showToast(`Direct link: #${currentOpenProjectId}`);
        });
      } else {
        showToast(`Direct link: #${currentOpenProjectId}`);
      }
    });
  }
}

function openProjectModal(projectId, updateHash = true) {
  const projects = getProjectsData();
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  currentOpenProjectId = projectId;

  const backdrop = document.getElementById('project-modal-backdrop');
  const titleEl = document.getElementById('modal-title');
  const subtitleEl = document.getElementById('modal-subtitle');
  const bodyEl = document.getElementById('modal-body-content');
  const githubLinkEl = document.getElementById('modal-github-link');
  const releasesLinkEl = document.getElementById('modal-releases-link');

  titleEl.textContent = project.title;
  subtitleEl.textContent = project.subtitle;

  if (project.links && project.links.github) {
    githubLinkEl.href = project.links.github;
    githubLinkEl.style.display = 'inline-flex';
  } else {
    githubLinkEl.style.display = 'none';
  }

  if (releasesLinkEl) {
    if (project.links && project.links.releases) {
      releasesLinkEl.href = project.links.releases;
      releasesLinkEl.style.display = 'inline-flex';
    } else {
      releasesLinkEl.style.display = 'none';
    }
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

  if (updateHash && window.location.hash !== '#' + projectId) {
    history.replaceState(null, document.title, window.location.pathname + '#' + projectId);
  }
}

function closeModal(clearHash = true) {
  const backdrop = document.getElementById('project-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';

  if (clearHash && currentOpenProjectId && window.location.hash === '#' + currentOpenProjectId) {
    history.replaceState(null, document.title, window.location.pathname + '#projects');
  }
  currentOpenProjectId = null;
}

function initDeepLinking() {
  function checkUrlHash() {
    const rawHash = window.location.hash.replace(/^#/, '');
    if (!rawHash) return;

    // Don't intercept section navigation hashes
    const standardSections = ['home', 'about', 'projects', 'simulator', 'faq', 'contact', 'header'];
    if (standardSections.includes(rawHash)) return;

    const projects = getProjectsData();
    const matched = projects.find(p => p.id === rawHash);
    if (matched) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
      openProjectModal(matched.id, false);
    }
  }

  window.addEventListener('hashchange', () => {
    const rawHash = window.location.hash.replace(/^#/, '');
    const standardSections = ['home', 'about', 'projects', 'simulator', 'faq', 'contact', 'header'];
    if (standardSections.includes(rawHash)) {
      if (currentOpenProjectId) {
        closeModal(false);
      }
      return;
    }

    const projects = getProjectsData();
    const matched = projects.find(p => p.id === rawHash);
    if (matched) {
      openProjectModal(matched.id, false);
    } else if (currentOpenProjectId && !rawHash) {
      closeModal(false);
    }
  });

  // Check once on load after elements are mounted
  setTimeout(checkUrlHash, 150);
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
