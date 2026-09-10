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
    subtitle: "All-in-one IT diagnostic and automated repair suite for Windows",
    description: "A production-grade, zero-dependency diagnostic and remediation workstation/server utility engineered for Managed Service Providers (MSPs) and systems engineers. Features 29 specialized tools across 6 categories with both an intuitive WPF interface and a native headless CLI engine with RMM exit codes for NinjaRMM, Datto, and ConnectWise Automate.",
    category: "desktop-rmm",
    categoryName: "Desktop & RMM Tools",
    badge: "Production Ready",
    badgeType: "accent",
    featured: true,
    tags: ["C#", ".NET Framework", "WPF", "Win32 / WMI", "PowerShell", "RMM Engine"],
    stats: [
      { label: "Built-In Tools", value: "29" },
      { label: "Tool Categories", value: "6" },
      { label: "Dependencies", value: "Zero (.NET)" },
      { label: "Deployment", value: "Single .exe" }
    ],
    links: {
      github: "https://github.com/CG-Technology/MSPToolkitPro",
      docs: "https://github.com/CG-Technology/MSPToolkitPro#readme",
      releases: "https://github.com/CG-Technology/MSPToolkitPro/releases"
    },
    features: [
      "Dual-Mode (GUI & CLI): Interactive WPF UI for technician desktops; headless execution with JSON and Key=Value outputs for automated RMMs",
      "ConnectWise Automate Integration: Specialized agent health checks, service fixes, and script-variable (@result@) reporting",
      "Comprehensive Diagnostic Suite: Auto-triage Quick Scan, SMART drive telemetry, BSOD crash dump inspection, BitLocker status, and network route tracing",
      "System Remediation: Automated DISM & SFC restoration, M365 & Entra ID WAM auth cache reset, corrupt temporary profile (.bak) fixer, and Print Spooler recovery",
      "Server Tools: Active Directory user & group auditing, backup verification, and DHCP/DNS health reporting",
      "Export & Audit: Clean HTML, CSV, and JSON reporting with automatic desktop session logging"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Headless RMM Automation Example",
      code: `# Run Quick Scan auto-triage with structured JSON
MSPToolkit.exe --scan --json

# Headless ConnectWise Automate Agent Repair
MSPToolkit.exe --cw-automate-repair --all --silent

# Automated DISM & SFC System Repair
MSPToolkit.exe --run dism-sfc-repair --all`
    },
    quickRunCommand: "MSPToolkit.exe --scan --json",
    quickClone: "git clone https://github.com/CG-Technology/MSPToolkitPro.git"
  },
  {
    id: "it-support-studio",
    title: "IT Support Studio",
    subtitle: "White-label endpoint diagnostic companion & visual builder studio",
    description: "An open-source, white-label desktop diagnostic companion and visual generator for IT departments, Managed Service Providers (MSPs), and corporate helpdesks. Allows IT teams to design branded endpoint desktop widgets with live WYSIWYG previews and compile single self-contained executables with deployment automation for Microsoft Intune and RMMs.",
    category: "desktop-rmm",
    categoryName: "Desktop & RMM Tools",
    badge: "Open Source",
    badgeType: "success",
    featured: true,
    tags: ["C#", "WPF", ".NET 4.8", "Win32 APIs", "PowerShell", "Intune / RMM"],
    stats: [
      { label: "Binary Size", value: "~70 KB" },
      { label: "OS Support", value: "Win 10 / 11" },
      { label: "Runtime", value: "Native .NET" },
      { label: "Deployment", value: "Intune / GPO" }
    ],
    links: {
      github: "https://github.com/CG-Technology/ITSupportStudio",
      docs: "https://github.com/CG-Technology/ITSupportStudio#readme",
      releases: "https://github.com/CG-Technology/ITSupportStudio/releases"
    },
    features: [
      "Client Support Widget: Real-time hostname, logged-in user, local/external IP, system uptime counter, and active internet connectivity probe",
      "Instant Helpdesk Access: Branded support phone number, one-click email client launcher, and direct links to remote assistance portals (ScreenConnect, TeamViewer, AnyDesk)",
      "Technician Productivity: Click-to-copy on all individual fields plus a 'Copy All Info' button for pre-formatted ticket summaries",
      "Visual Builder Studio: Real-time WYSIWYG editor with live preview for custom logos, colors, custom window titles, and visible field toggles",
      "One-Click Standalone Compiler: Employs native Roslyn/csc compiler automation to build a single standalone binary with your brand baked directly inside",
      "Enterprise Ready: Generates automated Microsoft Intune detection and deployment PowerShell scripts out of the box"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Builder Studio & Standalone Compiler",
      code: `# Launch the Visual Builder Studio GUI
.\\scripts\\Run-Builder.ps1

# Compile a standalone custom branded .exe via CLI
.\\scripts\\Build-StandaloneExe.ps1 -Config "templates\\modern_slate.json" -Output "build\\CustomSupportInfo.exe"`
    },
    quickRunCommand: ".\\scripts\\Run-Builder.ps1",
    quickClone: "git clone https://github.com/CG-Technology/ITSupportStudio.git"
  },
  {
    id: "intune-app-packager",
    title: "Intune App Packager",
    subtitle: "Automated Win32 (.intunewin) packager & PowerShell detection script generator",
    description: "A specialized packaging engine engineered for systems administrators and MSPs deploying applications via Microsoft Intune. Transforms any EXE or MSI installer into an encrypted .intunewin package, extracts installer signatures, and generates production-ready PowerShell detection scripts with silent install/uninstall parameters in seconds.",
    category: "automation",
    categoryName: "Automation & Scripting",
    badge: "Beta • Active",
    badgeType: "accent",
    featured: true,
    tags: ["PowerShell", "Microsoft Intune", "Win32 App", "C#", "Automation"],
    stats: [
      { label: "Packaging Speed", value: "< 5s" },
      { label: "Detection Rules", value: "Auto-Gen" },
      { label: "Installer Support", value: "EXE / MSI" },
      { label: "Intune Prep", value: "Automated" }
    ],
    links: {
      github: "https://github.com/CG-Technology/IntuneAppPackager",
      docs: "https://github.com/CG-Technology/IntuneAppPackager#readme",
      releases: "https://github.com/CG-Technology/IntuneAppPackager/releases"
    },
    features: [
      "Automated .intunewin Compilation: Wraps Microsoft Win32 Content Prep Tool with a high-speed GUI and batch pipeline",
      "Dynamic PowerShell Detection Builder: Auto-generates registry, file version, and MSI ProductCode verification scripts with exit 0/1 logic",
      "Silent Parameter Catalog: Built-in library of proven install switches for Inno Setup, InstallShield, NSIS, WiX, and MSI",
      "Requirement Rule Analyzer: Inspects minimum Windows 10/11 build numbers, disk space, and 64-bit architecture constraints",
      "Batch Directory Processing: Queue multiple software packages and compile ready-to-upload Intune bundles sequentially"
    ],
    quickSnippet: {
      language: "powershell",
      caption: "Intune Packaging & Detection Generator",
      code: `# Package Win32 installer and generate detection scripts
IntunePackager.exe -Source "C:\\Apps\\Zoom" -Setup "ZoomInstaller.exe" -Output "C:\\Intune" -AutoDetect

# Test generated PowerShell detection rule locally
powershell -ExecutionPolicy Bypass -File .\\DetectionRule.ps1`
    },
    quickRunCommand: "IntunePackager.exe -Source \"C:\\Apps\\Zoom\" -Setup \"ZoomInstaller.exe\"",
    quickClone: "git clone https://github.com/CG-Technology/IntuneAppPackager.git"
  }
];

// Available project categories for filtering
window.projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "desktop-rmm", name: "Desktop & RMM Tools" },
  { id: "automation", name: "Automation & Scripting" },
  { id: "diagnostics", name: "Diagnostics" }
];

// Interactive Terminal Simulator Datasets
window.terminalCommands = [
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
    id: "intune-pack",
    label: "IntunePackager -Package",
    command: "IntunePackager.exe -Source \"C:\\Apps\\Zoom\" -Setup \"ZoomInstaller.exe\" -AutoDetect",
    description: "Compile .intunewin bundle and auto-generate Intune PowerShell detection script",
    output: [
      '<span class="t-purple">[IntunePackager]</span> Microsoft Win32 Content Prep Engine v2.1',
      '<span class="t-blue">[INFO]</span> Inspecting source setup binary: ZoomInstaller.exe...',
      '<span class="t-blue">[INFO]</span> Detecting installer architecture: 64-bit Inno Setup',
      '<span class="t-green">[DETECTED]</span> Product Version: 6.1.5.42901',
      '<span class="t-green">[DETECTED]</span> Silent Install Switch: /silent /norestart',
      '<span class="t-green">[DETECTED]</span> Silent Uninstall Switch: /uninstall /silent',
      '<span class="t-blue">[INFO]</span> Encrypting payload into Win32 application package...',
      '  Compressing C:\\Apps\\Zoom [====================] 100%',
      '  Generating SHA256 integrity block...',
      '<span class="t-green">[SUCCESS]</span> Created: C:\\Intune\\ZoomInstaller.intunewin (58.4 MB)',
      '<span class="t-blue">[INFO]</span> Generating PowerShell detection rule: C:\\Intune\\Detect-Zoom.ps1',
      '',
      '  # PowerShell Detection Snippet (Exit 0 = Installed, Exit 1 = Not Found)',
      '  $path = "${env:ProgramFiles}\\Zoom\\bin\\Zoom.exe"',
      '  if ((Test-Path $path) -and ([System.Diagnostics.FileVersionInfo]::GetVersionInfo($path).FileVersion -ge "6.1.5.42901")) {',
      '      Write-Host "Installed" ; exit 0',
      '  } else { exit 1 }',
      '',
      '<span class="t-green">[COMPLETED]</span> Package and Intune detection scripts generated in 3.4 seconds.'
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

// Architecture & MSP FAQ Data
window.faqData = [
  {
    question: "Do MSP Toolkit Pro and IT Support Studio require any software prerequisites?",
    answer: "No. Both utilities are built as zero-dependency native Windows executables compiled against .NET Framework 4.8 / .NET 10. They run immediately on any standard Windows 10 or Windows 11 installation without requiring runtime packages, Java, Python, or administrative installers."
  },
  {
    question: "How does Intune App Packager speed up application deployments?",
    answer: "Instead of manually extracting MSI ProductCodes, crafting detection scripts, and running command-line Content Prep packaging, Intune App Packager inspects the setup file, detects standard silent install switches, auto-compiles the <code>.intunewin</code> payload, and generates verified PowerShell detection scripts ready to paste into Intune."
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

// Provide global aliases for maximum environment compatibility
var projectsData = window.projectsData;
var projectCategories = window.projectCategories;
var terminalCommands = window.terminalCommands;
var faqData = window.faqData;
