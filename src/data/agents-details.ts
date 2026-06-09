/**
 * Extended Agents Data for Detail Pages
 */

export interface AgentDetail {
  id: string;
  name: string;
  icon: string;
  role: string;
  roleEn: string;
  category: "command" | "plan" | "do" | "check";
  description: string;
  responsibilities: string[];
  skills: string[];
  workflows: string[];
  strengths: string[];
}

export const agentsDetails: Record<string, AgentDetail> = {
  "orchestrator": {
    id: "orchestrator",
    name: "Orchestrator",
    icon: "🎯",
    role: "Điều phối tổng",
    roleEn: "Chief Orchestrator",
    category: "command",
    description: "Nhạc trưởng điều phối toàn bộ hệ thống Multi-Agent. Chỉ huy chiến lược và đảm bảo mọi thứ hoạt động nhịp nhàng.",
    responsibilities: [
      "Phân tích yêu cầu và quyết định agent nào cần tham gia",
      "Điều phối luồng công việc giữa các agents",
      "Đảm bảo output cuối cùng đạt chất lượng",
      "Xử lý conflicts giữa các agents"
    ],
    skills: ["agent-orchestration", "parallel-agents", "plan-writing"],
    workflows: ["/orchestrate", "/create", "/plan"],
    strengths: ["Strategic thinking", "Multi-tasking", "Conflict resolution"]
  },
  "frontend-specialist": {
    id: "frontend-specialist",
    name: "Frontend Specialist",
    icon: "🎨",
    role: "Kiến trúc sư Giao diện",
    roleEn: "UI Architect",
    category: "do",
    description: "Chuyên gia về UI/UX và Frontend development. Master React, Next.js, và các framework hiện đại.",
    responsibilities: [
      "Thiết kế và implement UI components",
      "Tối ưu performance frontend",
      "Đảm bảo responsive và accessibility",
      "Code reviews cho frontend code"
    ],
    skills: ["nextjs-react-expert", "frontend-design", "tailwind-patterns", "ui-ux-pro-max-skill"],
    workflows: ["/create", "/enhance", "/ui-ux-pro-max"],
    strengths: ["Visual design", "React ecosystem", "Performance optimization"]
  },
  "backend-specialist": {
    id: "backend-specialist",
    name: "Backend Specialist",
    icon: "⚙️",
    role: "Kỹ sư Backend",
    roleEn: "Backend Engineer",
    category: "do",
    description: "Chuyên gia về server-side development, APIs, và database. Master Node.js, Python, và SQL.",
    responsibilities: [
      "Thiết kế và implement APIs",
      "Database schema design",
      "Authentication & Authorization",
      "Performance optimization backend"
    ],
    skills: ["nodejs-best-practices", "api-patterns", "database-design", "python-patterns"],
    workflows: ["/create", "/api", "/debug"],
    strengths: ["API design", "Database optimization", "Security"]
  },
  "security-auditor": {
    id: "security-auditor",
    name: "Security Auditor",
    icon: "🛡️",
    role: "Kiểm toán Bảo mật",
    roleEn: "Security Auditor",
    category: "check",
    description: "Chuyên gia bảo mật với expertise về OWASP, penetration testing, và security best practices.",
    responsibilities: [
      "Scan vulnerabilities trong code",
      "Review authentication flows",
      "Kiểm tra OWASP Top 10",
      "Đề xuất security hardening"
    ],
    skills: ["vulnerability-scanner", "red-team-tactics", "penetration-tester-master"],
    workflows: ["/security", "/audit"],
    strengths: ["Vulnerability detection", "Compliance", "Risk assessment"]
  },
  "project-planner": {
    id: "project-planner",
    name: "Project Planner",
    icon: "📋",
    role: "Kiến trúc sư Dự án",
    roleEn: "Project Architect",
    category: "plan",
    description: "Chuyên gia lập kế hoạch và phân rã tác vụ. Tạo blueprints cho mọi dự án.",
    responsibilities: [
      "Phân tích requirements",
      "Tạo implementation plans",
      "Định nghĩa milestones",
      "Ước tính effort và timeline"
    ],
    skills: ["plan-writing", "brainstorming", "architecture"],
    workflows: ["/plan", "/brainstorm"],
    strengths: ["Strategic planning", "Task breakdown", "Risk identification"]
  },
  "devops-engineer": {
    id: "devops-engineer",
    name: "DevOps Engineer",
    icon: "🚀",
    role: "Kỹ sư Vận hành",
    roleEn: "DevOps Engineer",
    category: "do",
    description: "Chuyên gia CI/CD, Cloud infrastructure, và deployment automation.",
    responsibilities: [
      "Setup CI/CD pipelines",
      "Configure cloud infrastructure",
      "Container orchestration",
      "Monitoring & alerting"
    ],
    skills: ["deployment-procedures", "cloud-architect-master", "vercel-deploy"],
    workflows: ["/deploy", "/monitor"],
    strengths: ["Automation", "Infrastructure", "Reliability"]
  },
  "test-engineer": {
    id: "test-engineer",
    name: "Test Engineer",
    icon: "🧪",
    role: "Kỹ sư Kiểm thử",
    roleEn: "Test Engineer",
    category: "check",
    description: "Chuyên gia testing với TDD mindset. Master Jest, Playwright, và testing strategies.",
    responsibilities: [
      "Viết unit tests và integration tests",
      "Setup test infrastructure",
      "E2E testing workflows",
      "Test coverage analysis"
    ],
    skills: ["tdd-master-workflow", "testing-patterns", "webapp-testing"],
    workflows: ["/test"],
    strengths: ["TDD", "Quality assurance", "Automation"]
  },
  "quality-inspector": {
    id: "quality-inspector",
    name: "Quality Inspector",
    icon: "✅",
    role: "Giám sát Chất lượng",
    roleEn: "Quality Inspector",
    category: "check",
    description: "The Gatekeeper - đảm bảo mọi output đạt tiêu chuẩn chất lượng trước khi bàn giao.",
    responsibilities: [
      "Review code quality",
      "Validate against standards",
      "Final approval trước deploy",
      "Document quality metrics"
    ],
    skills: ["code-review-checklist", "lint-and-validate", "production-code-audit"],
    workflows: ["/audit", "/status"],
    strengths: ["Attention to detail", "Standards enforcement", "Quality metrics"]
  }
};

export function getAgentDetail(id: string): AgentDetail | null {
  return agentsDetails[id] || null;
}

export function getAllAgentIds(): string[] {
  return Object.keys(agentsDetails);
}
