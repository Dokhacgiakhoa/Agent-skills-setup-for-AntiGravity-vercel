/**
 * Changelog Content Data
 * Source: Agent-skills-setup-for-AntiGravity/CHANGELOG.md
 */

export interface ChangelogEntry {
  type: "added" | "changed" | "fixed" | "improved";
  description: string;
}

export interface ChangelogVersion {
  version: string;
  date: string;
  title?: string;
  entries: ChangelogEntry[];
}

export const changelogTypeConfig = {
  added: { label: "Added", color: "#34A853", icon: "+" },
  changed: { label: "Changed", color: "#FBBC04", icon: "~" },
  fixed: { label: "Fixed", color: "#EA4335", icon: "✓" },
  improved: { label: "Improved", color: "#4285F4", icon: "↑" }
};

export const changelog: ChangelogVersion[] = [
  {
    version: "4.0.12",
    date: "2026-02-08",
    title: "Critical Fix",
    entries: [
      { type: "fixed", description: "Resolved circular dependency in cli/repair.js causing generateGeminiMd to be undefined during project repair/initialization." }
    ]
  },
  {
    version: "4.0.11",
    date: "2026-02-08",
    title: "NPM Enhancement",
    entries: [
      { type: "changed", description: "Enhanced package description to list ALL project assets (Rules, Agents, Master Skills, Patterns, Workflows, DNA Libraries) for complete transparency." },
      { type: "changed", description: "Updated package.json description to include key statistics (72 Skills, 22 Agents) for better discoverability on npmjs.com." },
      { type: "added", description: "New \"One Command\" slogan and high-contrast NPM badges." },
      { type: "added", description: "Synchronized all guides with 72 Master Skills and 600+ AI Patterns." },
      { type: "added", description: "Project statistics bar to READMEs." },
      { type: "changed", description: "Refined README.md and README.vi.md for maximum marketing impact." },
      { type: "changed", description: "Standardized badge colors: Green (Version), Purple (Downloads), Orange (License)." }
    ]
  },
  {
    version: "4.0.9",
    date: "2026-02-06",
    title: "Content Polish",
    entries: [
      { type: "changed", description: "Moved Project Statistics Bar to top for maximum visual impact." },
      { type: "improved", description: "Audited all 72 Skills and 600+ Patterns for consistency." },
      { type: "fixed", description: "Minor typos in Vietnamese guides." }
    ]
  },
  {
    version: "4.0.8",
    date: "2026-02-05",
    title: "Marketing Alpha",
    entries: [
      { type: "added", description: "Updated Minimalist Marketing Slogan: \"Easy Vibe, Lazy Code. One Command to Rule Them All.\"" },
      { type: "improved", description: "Full documentation sync for Non-Tech users (80/20 target)." },
      { type: "added", description: "Integrated official MCP badges and professional repository standards." },
      { type: "added", description: "Synchronized all 72 Master Skills and 22 Specialist Agents." }
    ]
  },
  {
    version: "4.0.7",
    date: "2026-02-04",
    title: "The Unified Command",
    entries: [
      { type: "added", description: "Implemented the Unified God Command: npx agent-skills-setup-for-antigravity now handles Create, Update, Repair, and Fix automatically." },
      { type: "added", description: "Integrated The Watchdog: Real-time hang detection and loop prevention." },
      { type: "added", description: "Recursive Learning: Automatic logging of Agent errors to ERRORS.md for behavior improvement." },
      { type: "added", description: "Comprehensive FAQ, Update, and Uninstall guides." }
    ]
  },
  {
    version: "4.0.5",
    date: "2026-02-02",
    title: "Final Sync",
    entries: [
      { type: "changed", description: "Rebranded to Agent skills setup for AntiGravity." },
      { type: "improved", description: "Standardized all 72 Master Skills to v4.0.8 metadata." },
      { type: "added", description: "Integrated Python environment awareness." },
      { type: "changed", description: "Unified License & Credits." }
    ]
  },
  {
    version: "4.0.2",
    date: "2026-02-02",
    title: "Error Logging System",
    entries: [
      { type: "added", description: "Automatic Error Logging System - AI tracks all errors to ERRORS.md for learning." },
      { type: "added", description: "New error-logging.md rule that auto-captures errors during development." },
      { type: "added", description: "New /log-error workflow for systematic error tracking." }
    ]
  },
  {
    version: "4.0.1",
    date: "2026-02-02",
    title: "Security & Auto-Update",
    entries: [
      { type: "added", description: "New malware-analyst skill for threat intelligence and malicious URL scanning." },
      { type: "added", description: "New malware-protection.md rule to prevent malware infiltration." },
      { type: "added", description: "Auto-update functionality via chat - AI can check NPM version and offer to upgrade." },
      { type: "added", description: "New /update workflow for checking and updating Agent skills setup for AntiGravity." }
    ]
  },
  {
    version: "4.0.0",
    date: "2026-02-01",
    title: "Big Update",
    entries: [
      { type: "added", description: "Introduced Scalable Architecture (Instant/Creative/SME)." },
      { type: "added", description: "Implemented \"Scientific Linking\" between DNA, Skills, and Agents." },
      { type: "changed", description: "Full rewrite of the CLI Setup Wizard." }
    ]
  },
  {
    version: "3.5.54",
    date: "2026-01-31",
    title: "NPM Optimization",
    entries: [
      { type: "improved", description: "Significantly reduced NPM package size (excluded docs/, tests/)." },
      { type: "added", description: "Implemented GitHub Actions for auto-publishing with Provenance." },
      { type: "fixed", description: "Sync package-lock.json and .npmignore for stable CI builds." }
    ]
  },
  {
    version: "3.5.30",
    date: "2026-01-30",
    title: "Copy-Paste Prompts",
    entries: [
      { type: "added", description: "Added \"Copy-Paste Prompts\" for AI Delegation in Setup Wizard." },
      { type: "added", description: "Smart Python detection and installation guidance." },
      { type: "changed", description: "Renamed GEMINI.md to GEMINI_GUIDE.md for clarity." }
    ]
  },
  {
    version: "3.5.29",
    date: "2026-01-29",
    title: "Workflow Expansion",
    entries: [
      { type: "added", description: "Workflow /audit for comprehensive quality checks." },
      { type: "added", description: "Workflow /onboard for team integration." },
      { type: "added", description: "Workflow /document for automated documentation generation." },
      { type: "added", description: "Workflow /monitor for system health tracking." },
      { type: "added", description: "Workflow /security and /seo for domain-specific tasks." },
      { type: "improved", description: "Enhanced prompts.js with dynamic workflow mapping based on industry." }
    ]
  }
];
