/**
 * CG Technology Portfolio - Projects Data Source
 * 
 * To add a new project, simply add an object to this array.
 * Fields:
 * - id: Unique string slug
 * - title: Project name
 * - subtitle: Short 1-line summary
 * - description: Detailed paragraph explaining the problem, solution, and impact
 * - category: Category filter key ('desktop-rmm', 'automation', 'diagnostics')
 * - categoryName: Display name for category
 * - badge: Status tag ('Featured', 'Open Source', 'Production Ready', etc.)
 * - badgeType: 'accent' | 'success' | 'warning' | 'info'
 * - tags: Array of technology strings
 * - featured: Boolean (if true, highlighted on Home page)
 * - stats: Array of key metrics or highlights
 * - links: { github: string, docs?: string, releases?: string }
 * - features: Array of key capabilities
 * - quickSnippet: Optional code/command snippet for the detail modal
 * - quickRunCommand: CLI snippet on card
 * - quickClone: Git clone snippet on card
 */

window.projectsData = [
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
      code: `# Run Quick Health Scan and generate report
MSPToolkit.exe --scan --json

# One-click Windows system file repair
MSPToolkit.exe --run dism-sfc-repair --all

# Reset Microsoft 365 login and profile glitches
MSPToolkit.exe --run m365-repair`
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
      code: `# Launch the Visual Builder Studio
.\\scripts\\Run-Builder.ps1

# Create a branded support app from a template
.\\scripts\\Build-StandaloneExe.ps1 -Config "templates\\modern_slate.json" -Output "build\\CustomSupportInfo.exe"`
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
      code: `# Package Win32 installer and generate detection rules
IntunePackager.exe -Source "C:\\Apps\\Zoom" -Setup "ZoomInstaller.exe" -Output "C:\\Intune" -AutoDetect

# Test generated detection script locally
powershell -ExecutionPolicy Bypass -File .\\Detect-Zoom.ps1`
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
    badge: "v1.0.3 Ready",
    badgeType: "success",
    featured: true,
    tags: ["PC Health Score", "TreeSize Disk Tree", "Disk Space Consumers", "Top RAM & CPU Apps", "PowerShell & WPF"],
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
      "Interactive TreeSize Disk Analyzer: Click the storage card to launch a visualizer with lazy-loaded folder trees, size bars, and largest files finder (>=50MB)",
      "Deep Storage & Space Consumers: Evaluates drive SMART indicators and identifies the largest space hogs on C: (Users, Program Files, Virtual Memory)",
      "Top CPU & Memory Processes: Pinpoints the highest memory-consuming programs (RAM) and active CPU threads in real time",
      "Battery & Power Wear: Measures battery charge cycles, wear percentage, and gracefully detects desktop AC power",
      "Crash & BlueScreen History: Inspects minidumps and translates cryptic Windows crash codes into plain English",
      "Dual Mode Experience: Clean dark WPF dashboard for desktop users, plus scriptable engine for automated IT maintenance",
      "Standalone Branded Reports: Exports polished, self-contained HTML health summaries ready to email or archive"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Run Quick Diagnostic or Generate HTML Report",
      code: `# Launch the modern dashboard
.\\Run-Sentinel.ps1

# Run command-line scan and generate HTML report
.\\src\\HardwareSentinel.ps1 -ExportHtml -HtmlPath "PC-Health-Report.html"`
    },
    quickRunCommand: ".\\Run-Sentinel.ps1",
    quickClone: "git clone https://github.com/CG-Technology/HardwareSentinel.git"
  }
];

// Available project categories for filtering
window.projectCategories = [
  { id: "all", name: "All Tools" },
  { id: "desktop-rmm", name: "PC Repair & Helpdesk" },
  { id: "automation", name: "Packaging & Automation" },
  { id: "diagnostics", name: "Hardware & Health" }
];

// Interactive Terminal Simulator Datasets
window.terminalCommands = [
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

// Architecture & General FAQ Data
window.faqData = [
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

// Provide global aliases for maximum environment compatibility
var projectsData = window.projectsData;
var projectCategories = window.projectCategories;
var terminalCommands = window.terminalCommands;
var faqData = window.faqData;
