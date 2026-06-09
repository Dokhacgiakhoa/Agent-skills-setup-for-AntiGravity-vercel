/**
 * Extended Skills Data for Detail Pages
 * Contains additional information for each skill
 * Auto-generated from skillCategories in documentation.ts
 */

export interface SkillDetail {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  source?: string;
  features: string[];
  usageExamples: string[];
  relatedSkills: string[];
}

// Map skills from the main list to extended details
export const skillsDetails: Record<string, SkillDetail> = {
  // =====================
  // WEB & FRONTEND SKILLS
  // =====================
  "modern-web-architect": {
    id: "modern-web-architect",
    name: "modern-web-architect",
    description: "Kiến trúc Next.js/React hiện đại với App Router, Server Components và Hydration patterns.",
    category: "frontend",
    version: "4.0.12",
    source: "Vercel Engineering Blog",
    features: [
      "App Router architecture patterns",
      "React Server Components optimization",
      "Hydration strategies for SSR/SSG",
      "Edge runtime configuration",
      "Modern CSS-in-JS patterns"
    ],
    usageExamples: [
      "Thiết kế kiến trúc Next.js cho website mới",
      "Convert từ Pages Router sang App Router",
      "Setup Server Components cho SEO",
      "Tối ưu hydration performance"
    ],
    relatedSkills: ["nextjs-react-expert", "frontend-design", "tailwind-patterns"]
  },
  "frontend-design": {
    id: "frontend-design",
    name: "frontend-design",
    description: "Mẫu thiết kế UI/UX và Design System với component architecture, state management và motion design.",
    category: "frontend",
    version: "4.0.12",
    source: "React Design Patterns",
    features: [
      "Component architecture patterns",
      "State management best practices",
      "Motion design với Framer Motion",
      "Accessible component design",
      "Design tokens implementation"
    ],
    usageExamples: [
      "Tạo Design System cho dự án",
      "Implement component library",
      "Setup state management với Zustand",
      "Thêm animations vào UI"
    ],
    relatedSkills: ["tailwind-patterns", "web-design-guidelines", "ui-ux-pro-max-skill"]
  },
  "tailwind-patterns": {
    id: "tailwind-patterns",
    name: "tailwind-patterns",
    description: "Tailwind CSS v4 principles với dynamic styling, container queries và modern color functions.",
    category: "frontend",
    version: "4.0.12",
    source: "Tailwind CSS Documentation",
    features: [
      "Tailwind v4 new features",
      "Dynamic styling patterns",
      "Container queries usage",
      "Modern color functions",
      "Responsive design utilities"
    ],
    usageExamples: [
      "Setup Tailwind v4 cho dự án",
      "Convert CSS sang Tailwind",
      "Tạo custom color palette",
      "Implement responsive design"
    ],
    relatedSkills: ["frontend-design", "ui-ux-pro-max-skill", "web-design-guidelines"]
  },
  "nextjs-react-expert": {
    id: "nextjs-react-expert",
    name: "nextjs-react-expert",
    description: "React và Next.js performance optimization từ Vercel Engineering với bundle reduction và PPR.",
    category: "frontend",
    version: "4.0.12",
    source: "Vercel Engineering Blog",
    features: [
      "React 19 best practices",
      "Bundle size reduction",
      "PPR (Partial Prerendering)",
      "Edge runtime optimization",
      "Image & Font optimization"
    ],
    usageExamples: [
      "Tối ưu React component giảm re-renders",
      "Phân tích bundle size và cải thiện",
      "Setup ISR cho blog",
      "Convert sang Server Components"
    ],
    relatedSkills: ["modern-web-architect", "frontend-design", "modern-web-performance"]
  },
  "web-design-guidelines": {
    id: "web-design-guidelines",
    name: "web-design-guidelines",
    description: "Quy chuẩn thiết kế Web chuyên nghiệp với WCAG 2.1 Compliance, aesthetic ratio và typography scales.",
    category: "frontend",
    version: "4.0.12",
    source: "Web Design Guidelines",
    features: [
      "WCAG 2.1 Compliance standards",
      "Golden ratio in design",
      "Typography scale systems",
      "Color contrast guidelines",
      "Layout grid systems"
    ],
    usageExamples: [
      "Audit accessibility cho website",
      "Setup typography scale",
      "Check color contrast ratios",
      "Design responsive grid system"
    ],
    relatedSkills: ["frontend-design", "tailwind-patterns", "ui-ux-pro-max-skill"]
  },
  "webapp-testing": {
    id: "webapp-testing",
    name: "webapp-testing",
    description: "E2E testing với Playwright & Cypress, visual regression và CI/CD integration.",
    category: "frontend",
    version: "4.0.12",
    source: "Playwright Documentation",
    features: [
      "Playwright test suites",
      "Visual regression testing",
      "CI/CD integration",
      "API mocking strategies",
      "Cross-browser testing"
    ],
    usageExamples: [
      "Setup Playwright cho project",
      "Viết E2E tests cho login flow",
      "Configure visual regression",
      "Integrate tests với GitHub Actions"
    ],
    relatedSkills: ["tdd-master-workflow", "testing-patterns", "lint-and-validate"]
  },
  "i18n-localization": {
    id: "i18n-localization",
    name: "i18n-localization",
    description: "Đa ngôn ngữ và bản địa hóa toàn cầu với RTL Support, dynamic translations và ISO standards.",
    category: "frontend",
    version: "4.0.12",
    source: "Next-Intl Documentation",
    features: [
      "RTL Support implementation",
      "Dynamic translations",
      "ISO 639 language codes",
      "Date/Number formatting",
      "Pluralization rules"
    ],
    usageExamples: [
      "Setup next-intl cho website",
      "Add support cho RTL languages",
      "Configure date formatting",
      "Implement language switcher"
    ],
    relatedSkills: ["frontend-design", "nextjs-react-expert", "modern-web-architect"]
  },

  // =====================
  // BACKEND & API SKILLS
  // =====================
  "api-patterns": {
    id: "api-patterns",
    name: "api-patterns",
    description: "Chuẩn thiết kế REST, GraphQL, tRPC với versioning, pagination và rate limiting.",
    category: "backend",
    version: "4.0.12",
    source: "API Design Best Practices",
    features: [
      "REST API versioning strategies",
      "GraphQL schema design",
      "tRPC type-safe APIs",
      "Pagination patterns",
      "Rate limiting implementation"
    ],
    usageExamples: [
      "Thiết kế REST API cho e-commerce",
      "Setup GraphQL với Apollo",
      "Implement pagination cho lists",
      "Add rate limiting middleware"
    ],
    relatedSkills: ["api-documenter", "nodejs-best-practices", "database-design"]
  },
  "api-documenter": {
    id: "api-documenter",
    name: "api-documenter",
    description: "Tài liệu hóa API chuyên nghiệp với OpenAPI 3.1, Swagger integration và SDK generation.",
    category: "backend",
    version: "4.0.12",
    source: "OpenAPI Specification",
    features: [
      "OpenAPI 3.1 specification",
      "Swagger UI integration",
      "SDK generation automation",
      "API versioning documentation",
      "Interactive API playground"
    ],
    usageExamples: [
      "Tạo OpenAPI spec cho API",
      "Setup Swagger UI",
      "Generate TypeScript SDK",
      "Document API endpoints"
    ],
    relatedSkills: ["api-patterns", "documentation-templates", "nodejs-best-practices"]
  },
  "nodejs-best-practices": {
    id: "nodejs-best-practices",
    name: "nodejs-best-practices",
    description: "Nguyên lý phát triển Node.js sạch với event loop optimization, memory leak detection và dependency safety.",
    category: "backend",
    version: "4.0.12",
    source: "Node.js Best Practices",
    features: [
      "Event loop optimization",
      "Memory leak detection",
      "Dependency security audits",
      "Error handling patterns",
      "Logging best practices"
    ],
    usageExamples: [
      "Optimize event loop cho API",
      "Debug memory leaks",
      "Setup dependency audits",
      "Implement error handling"
    ],
    relatedSkills: ["api-patterns", "database-design", "performance-profiling"]
  },
  "python-patterns": {
    id: "python-patterns",
    name: "python-patterns",
    description: "Mẫu thiết kế Python hiện đại với FastAPI standards, asynchronous patterns và type hinting.",
    category: "backend",
    version: "4.0.12",
    source: "FastAPI Documentation",
    features: [
      "FastAPI best practices",
      "Asynchronous programming",
      "Type hinting with Pydantic",
      "Dependency injection",
      "Database ORM patterns"
    ],
    usageExamples: [
      "Setup FastAPI project",
      "Implement async endpoints",
      "Add Pydantic validation",
      "Configure SQLAlchemy ORM"
    ],
    relatedSkills: ["api-patterns", "database-design", "ai-engineer"]
  },
  "database-design": {
    id: "database-design",
    name: "database-design",
    description: "Thiết kế Schema 3NF và tối ưu hóa với indexing strategy, normalization và query profiling.",
    category: "database",
    version: "4.0.12",
    source: "PostgreSQL Documentation",
    features: [
      "3NF Schema normalization",
      "Index optimization strategies",
      "Query performance profiling",
      "Relationship modeling",
      "Data integrity constraints"
    ],
    usageExamples: [
      "Thiết kế schema cho e-commerce",
      "Tối ưu query chạy chậm",
      "Thêm indexes cải thiện perf",
      "Normalize database schema"
    ],
    relatedSkills: ["nodejs-best-practices", "api-patterns", "performance-profiling"]
  },
  "database-migration": {
    id: "database-migration",
    name: "database-migration",
    description: "Quản lý di cư dữ liệu không gián đoạn với zero-downtime migrations, rollback strategies và seeding patterns.",
    category: "database",
    version: "4.0.12",
    source: "Prisma Documentation",
    features: [
      "Zero-downtime migrations",
      "Rollback strategies",
      "Seed data patterns",
      "Schema versioning",
      "Data transformation scripts"
    ],
    usageExamples: [
      "Create migration cho new table",
      "Setup rollback strategy",
      "Seed development data",
      "Handle breaking schema changes"
    ],
    relatedSkills: ["database-design", "deployment-procedures", "nodejs-best-practices"]
  },

  // =====================
  // SECURITY SKILLS
  // =====================
  "security-auditor": {
    id: "security-auditor",
    name: "security-auditor",
    description: "Kiểm toán bảo mật theo chuẩn OWASP với SCA/SAST analysis, credential safety và XSS/SQLi prevention.",
    category: "security",
    version: "4.0.12",
    source: "OWASP Foundation",
    features: [
      "OWASP Top 10 auditing",
      "Static code analysis (SAST)",
      "Credential leak detection",
      "XSS/SQLi prevention",
      "API security review"
    ],
    usageExamples: [
      "Audit bảo mật cho file server.js",
      "Review authentication flow",
      "Kiểm tra SQL injection",
      "Setup Helmet và Rate Limiting"
    ],
    relatedSkills: ["vulnerability-scanner", "penetration-tester-master", "red-team-tactics"]
  },
  "vulnerability-scanner": {
    id: "vulnerability-scanner",
    name: "vulnerability-scanner",
    description: "Phân tích lỗ hổng hệ thống nâng cao với attack surface mapping, CVE tracking và risk prioritization.",
    category: "security",
    version: "4.0.12",
    source: "NIST Vulnerability Database",
    features: [
      "Attack surface mapping",
      "CVE vulnerability tracking",
      "Risk prioritization matrix",
      "Dependency scanning",
      "Container security analysis"
    ],
    usageExamples: [
      "Scan dependencies cho vulnerabilities",
      "Track CVE cho libraries",
      "Prioritize security fixes",
      "Audit container images"
    ],
    relatedSkills: ["security-auditor", "penetration-tester-master", "production-code-audit"]
  },
  "penetration-tester-master": {
    id: "penetration-tester-master",
    name: "penetration-tester-master",
    description: "Chuyên gia thâm nhập hệ thống với active reconnaissance, exploit chain và post-exploitation reporting.",
    category: "security",
    version: "4.0.12",
    source: "PNPT Certification",
    features: [
      "Active reconnaissance",
      "Exploit chain development",
      "Post-exploitation analysis",
      "Privilege escalation",
      "Security report writing"
    ],
    usageExamples: [
      "Perform penetration test",
      "Write security report",
      "Test authentication bypass",
      "Check privilege escalation"
    ],
    relatedSkills: ["security-auditor", "red-team-tactics", "vulnerability-scanner"]
  },
  "red-team-tactics": {
    id: "red-team-tactics",
    name: "red-team-tactics",
    description: "Chiến thuật Red Team theo MITRE ATT&CK với lateral movement, persistence mechanisms và evasion techniques.",
    category: "security",
    version: "4.0.12",
    source: "MITRE ATT&CK Framework",
    features: [
      "MITRE ATT&CK tactics",
      "Lateral movement techniques",
      "Persistence mechanisms",
      "Evasion techniques",
      "Threat modeling"
    ],
    usageExamples: [
      "Simulate APT attack",
      "Test lateral movement",
      "Check persistence vectors",
      "Create threat model"
    ],
    relatedSkills: ["penetration-tester-master", "security-auditor", "vulnerability-scanner"]
  },
  "production-code-audit": {
    id: "production-code-audit",
    name: "production-code-audit",
    description: "Audit code lên tiêu chuẩn production với scalability review, resource utilization và technical debt audit.",
    category: "security",
    version: "4.0.12",
    source: "Google Engineering Practices",
    features: [
      "Scalability code review",
      "Resource utilization analysis",
      "Technical debt assessment",
      "Performance bottlenecks",
      "Code maintainability"
    ],
    usageExamples: [
      "Audit code trước production",
      "Identify technical debt",
      "Review scalability",
      "Check resource usage"
    ],
    relatedSkills: ["code-review-checklist", "clean-code", "performance-profiling"]
  },
  "code-review-checklist": {
    id: "code-review-checklist",
    name: "code-review-checklist",
    description: "Checklist review code chuẩn Enterprise với safety audit, pattern consistency và maintainability metrics.",
    category: "security",
    version: "4.0.12",
    source: "Google Code Review Guide",
    features: [
      "Safety audit checklist",
      "Pattern consistency check",
      "Maintainability metrics",
      "Performance review",
      "Documentation coverage"
    ],
    usageExamples: [
      "Review PR trước merge",
      "Check code patterns",
      "Evaluate maintainability",
      "Audit performance impact"
    ],
    relatedSkills: ["production-code-audit", "clean-code", "lint-and-validate"]
  },

  // =====================
  // DEVOPS & CLOUD SKILLS
  // =====================
  "cloud-architect-master": {
    id: "cloud-architect-master",
    name: "cloud-architect-master",
    description: "Kiến trúc Multi-Cloud (AWS/GCP/Azure) với hybrid-cloud design, high availability và DR implementation.",
    category: "devops",
    version: "4.0.12",
    source: "AWS Well-Architected Framework",
    features: [
      "Multi-cloud architecture",
      "Hybrid-cloud design",
      "High availability patterns",
      "DR implementation",
      "Cost optimization"
    ],
    usageExamples: [
      "Design serverless architecture",
      "Setup multi-region HA",
      "Configure disaster recovery",
      "Optimize cloud costs"
    ],
    relatedSkills: ["deployment-procedures", "server-management", "incident-responder"]
  },
  "deployment-engineer": {
    id: "deployment-engineer",
    name: "deployment-engineer",
    description: "Kỹ sư triển khai CI/CD Automation với Github Actions, Docker Orchestration và GitOps manual.",
    category: "devops",
    version: "4.0.12",
    source: "GitHub Actions Documentation",
    features: [
      "GitHub Actions workflows",
      "Docker orchestration",
      "GitOps principles",
      "Automated deployments",
      "Environment management"
    ],
    usageExamples: [
      "Setup GitHub Actions CI/CD",
      "Configure Docker builds",
      "Implement GitOps workflow",
      "Automate deployments"
    ],
    relatedSkills: ["deployment-procedures", "cloud-architect-master", "vercel-deploy"]
  },
  "deployment-procedures": {
    id: "deployment-procedures",
    name: "deployment-procedures",
    description: "Quy trình triển khai sản xuất an toàn với blue-green deployment, canary releases và rollback protocols.",
    category: "devops",
    version: "4.0.12",
    source: "Continuous Delivery Book",
    features: [
      "Blue-green deployment",
      "Canary releases",
      "Rollback protocols",
      "Feature flags",
      "Deployment checklists"
    ],
    usageExamples: [
      "Setup blue-green deploy",
      "Configure canary releases",
      "Create rollback plan",
      "Implement feature flags"
    ],
    relatedSkills: ["cloud-architect-master", "server-management", "incident-responder"]
  },
  "server-management": {
    id: "server-management",
    name: "server-management",
    description: "Quản trị máy chủ và Linux tối ưu với kernel tuning, monitoring setup và hardening servers.",
    category: "devops",
    version: "4.0.12",
    source: "Linux System Administration",
    features: [
      "Linux kernel tuning",
      "Monitoring setup (Prometheus)",
      "Server hardening",
      "Log management",
      "Backup strategies"
    ],
    usageExamples: [
      "Optimize Linux server",
      "Setup Prometheus monitoring",
      "Harden production server",
      "Configure log rotation"
    ],
    relatedSkills: ["cloud-architect-master", "incident-responder", "performance-engineer"]
  },
  "incident-responder": {
    id: "incident-responder",
    name: "incident-responder",
    description: "Phản ứng và xử lý sự cố SRE với root cause analysis, post-mortem reports và on-call standards.",
    category: "devops",
    version: "4.0.12",
    source: "Google SRE Book",
    features: [
      "Root cause analysis (RCA)",
      "Post-mortem reports",
      "On-call standards",
      "Incident classification",
      "Communication protocols"
    ],
    usageExamples: [
      "Handle production incident",
      "Write post-mortem report",
      "Setup on-call rotation",
      "Classify incident severity"
    ],
    relatedSkills: ["server-management", "performance-engineer", "systematic-debugging"]
  },
  "performance-engineer": {
    id: "performance-engineer",
    name: "performance-engineer",
    description: "Kỹ sư tối ưu hóa hiệu năng hệ thống với bottleneck identification, throughput scaling và latency reduction.",
    category: "devops",
    version: "4.0.12",
    source: "High Performance Browser Networking",
    features: [
      "Bottleneck identification",
      "Throughput scaling",
      "Latency reduction",
      "Load testing",
      "Performance budgets"
    ],
    usageExamples: [
      "Identify performance bottleneck",
      "Scale throughput capacity",
      "Reduce API latency",
      "Setup load testing"
    ],
    relatedSkills: ["performance-profiling", "server-management", "cloud-architect-master"]
  },
  "vercel-deploy": {
    id: "vercel-deploy",
    name: "vercel-deploy",
    description: "Automated Vercel deployment skill với Edge Config, Analytics integration và Preview deployments.",
    category: "devops",
    version: "4.0.12",
    source: "Vercel Documentation",
    features: [
      "Automated deployments",
      "Edge Config setup",
      "Analytics integration",
      "Preview deployments",
      "Domain management"
    ],
    usageExamples: [
      "Deploy to Vercel",
      "Configure custom domain",
      "Setup preview branches",
      "Enable Vercel Analytics"
    ],
    relatedSkills: ["deployment-procedures", "nextjs-react-expert", "modern-web-architect"]
  },

  // =====================
  // AI SKILLS
  // =====================
  "ai-engineer": {
    id: "ai-engineer",
    name: "ai-engineer",
    description: "Kỹ sư AI và LLM Engineering với RAG implementation, prompt chains và token optimization.",
    category: "ai",
    version: "4.0.12",
    source: "LangChain Documentation",
    features: [
      "RAG implementation",
      "Prompt engineering",
      "Token optimization",
      "LLM fine-tuning",
      "Vector database setup"
    ],
    usageExamples: [
      "Setup RAG system",
      "Create AI chatbot với memory",
      "Optimize token usage",
      "Configure vector database"
    ],
    relatedSkills: ["langgraph-engineering", "mcp-builder", "parallel-agents"]
  },
  "intelligent-routing": {
    id: "intelligent-routing",
    name: "intelligent-routing",
    description: "Điều hướng Agent thông minh với intent recognition, agent orchestration và dynamic handoffs.",
    category: "ai",
    version: "4.0.12",
    source: "Agent Routing Patterns",
    features: [
      "Intent recognition",
      "Agent orchestration",
      "Dynamic handoffs",
      "Context preservation",
      "Fallback strategies"
    ],
    usageExamples: [
      "Route user to right agent",
      "Handle multi-step tasks",
      "Preserve context across agents",
      "Setup fallback routing"
    ],
    relatedSkills: ["ai-engineer", "parallel-agents", "agent-orchestration"]
  },
  "parallel-agents": {
    id: "parallel-agents",
    name: "parallel-agents",
    description: "Phối hợp đa Agent song song với concurrency control, state synchronization và conflict resolution.",
    category: "ai",
    version: "4.0.12",
    source: "Multi-Agent Systems",
    features: [
      "Concurrency control",
      "State synchronization",
      "Conflict resolution",
      "Task distribution",
      "Result aggregation"
    ],
    usageExamples: [
      "Run parallel agent tasks",
      "Synchronize agent states",
      "Resolve conflicting results",
      "Aggregate multi-agent output"
    ],
    relatedSkills: ["ai-engineer", "intelligent-routing", "agent-orchestration"]
  },
  "mcp-builder": {
    id: "mcp-builder",
    name: "mcp-builder",
    description: "Xây dựng Server Model Context Protocol với tool definitions, resource mapping và context window tuning.",
    category: "ai",
    version: "4.0.12",
    source: "Anthropic MCP Specification",
    features: [
      "MCP tool definitions",
      "Resource mapping",
      "Context window tuning",
      "Server implementation",
      "Client integration"
    ],
    usageExamples: [
      "Build MCP server",
      "Define custom tools",
      "Map resources to MCP",
      "Integrate MCP client"
    ],
    relatedSkills: ["ai-engineer", "langgraph-engineering", "agent-orchestration"]
  },
  "brainstorming": {
    id: "brainstorming",
    name: "brainstorming",
    description: "Quy trình Socratic và Brainstorming với clarifying questions, first principles thinking và strategic planning.",
    category: "ai",
    version: "4.0.12",
    source: "Socratic Method",
    features: [
      "Clarifying questions",
      "First principles thinking",
      "Strategic planning",
      "Idea generation",
      "Decision frameworks"
    ],
    usageExamples: [
      "Brainstorm feature ideas",
      "Analyze problem from first principles",
      "Create strategic plan",
      "Generate creative solutions"
    ],
    relatedSkills: ["plan-writing", "architecture", "behavioral-modes"]
  },
  "behavioral-modes": {
    id: "behavioral-modes",
    name: "behavioral-modes",
    description: "Định nghĩa chế độ hành vi AI với implement mode, review mode và teaching mode.",
    category: "ai",
    version: "4.0.12",
    source: "AI Behavior Patterns",
    features: [
      "Implement mode",
      "Review mode",
      "Teaching mode",
      "Debug mode",
      "Ship mode"
    ],
    usageExamples: [
      "Switch to review mode",
      "Enable teaching mode",
      "Activate debug mode",
      "Use ship mode for production"
    ],
    relatedSkills: ["brainstorming", "intelligent-routing", "ai-engineer"]
  },
  "langgraph-engineering": {
    id: "langgraph-engineering",
    name: "langgraph-engineering",
    description: "Building stateful, resilient AI agents với LangGraph v1.0, state machines và checkpointing.",
    category: "ai",
    version: "4.0.12",
    source: "LangGraph Documentation",
    features: [
      "State machine design",
      "Checkpointing strategies",
      "Graph-based workflows",
      "Human-in-the-loop",
      "Error recovery"
    ],
    usageExamples: [
      "Build LangGraph agent",
      "Design state machine",
      "Implement checkpointing",
      "Add human-in-the-loop"
    ],
    relatedSkills: ["ai-engineer", "mcp-builder", "parallel-agents"]
  },
  "agent-orchestration": {
    id: "agent-orchestration",
    name: "agent-orchestration",
    description: "Multi-agent orchestration và state management với task distribution và coordination patterns.",
    category: "ai",
    version: "4.0.12",
    source: "Agent Orchestration Patterns",
    features: [
      "Task distribution",
      "Coordination patterns",
      "State persistence",
      "Agent communication",
      "Lifecycle management"
    ],
    usageExamples: [
      "Orchestrate multi-agent task",
      "Distribute work to agents",
      "Manage agent lifecycle",
      "Setup agent communication"
    ],
    relatedSkills: ["parallel-agents", "intelligent-routing", "langgraph-engineering"]
  },

  // =====================
  // ARCHITECTURE SKILLS
  // =====================
  "architecture": {
    id: "architecture",
    name: "architecture",
    description: "Tư duy và quy trình thiết kế kiến trúc với ADR (Decision Records), trade-off analysis và modular design.",
    category: "architecture",
    version: "4.0.12",
    source: "Software Architecture Patterns",
    features: [
      "ADR (Architecture Decision Records)",
      "Trade-off analysis",
      "Modular design",
      "Scalability patterns",
      "System decomposition"
    ],
    usageExamples: [
      "Write ADR cho decision",
      "Analyze architecture trade-offs",
      "Design modular system",
      "Plan scalability approach"
    ],
    relatedSkills: ["full-stack-scaffold", "app-builder", "clean-code"]
  },
  "full-stack-scaffold": {
    id: "full-stack-scaffold",
    name: "full-stack-scaffold",
    description: "Khởi tạo khung dự án chuyên nghiệp với folder structures, boilerplate generation và env management.",
    category: "architecture",
    version: "4.0.12",
    source: "Project Scaffolding Guide",
    features: [
      "Folder structure templates",
      "Boilerplate generation",
      "Environment management",
      "Package configuration",
      "Git setup automation"
    ],
    usageExamples: [
      "Scaffold new project",
      "Generate boilerplate code",
      "Setup environment files",
      "Configure package.json"
    ],
    relatedSkills: ["architecture", "app-builder", "nodejs-best-practices"]
  },
  "app-builder": {
    id: "app-builder",
    name: "app-builder",
    description: "Kỹ năng xây dựng App trọn gói với cross-agent coordination, requirement mapping và feature sequencing.",
    category: "architecture",
    version: "4.0.12",
    source: "Application Development Guide",
    features: [
      "Cross-agent coordination",
      "Requirement mapping",
      "Feature sequencing",
      "Integration planning",
      "Milestone tracking"
    ],
    usageExamples: [
      "Build complete application",
      "Coordinate multiple agents",
      "Map requirements to features",
      "Plan feature releases"
    ],
    relatedSkills: ["architecture", "full-stack-scaffold", "plan-writing"]
  },
  "plan-writing": {
    id: "plan-writing",
    name: "plan-writing",
    description: "Kỹ năng lập kế hoạch kỹ thuật chi tiết với task decomposition, dependency mapping và estimation logic.",
    category: "architecture",
    version: "4.0.12",
    source: "Technical Planning Guide",
    features: [
      "Task decomposition",
      "Dependency mapping",
      "Effort estimation",
      "Risk assessment",
      "Milestone planning"
    ],
    usageExamples: [
      "Create technical plan",
      "Break down tasks",
      "Map dependencies",
      "Estimate project timeline"
    ],
    relatedSkills: ["architecture", "app-builder", "brainstorming"]
  },
  "clean-code": {
    id: "clean-code",
    name: "clean-code",
    description: "Quy chuẩn mã nguồn sạch và bảo trì với SOLID principles, naming conventions và DRY violations removal.",
    category: "architecture",
    version: "4.0.12",
    source: "Clean Code Book",
    features: [
      "SOLID principles",
      "Naming conventions",
      "DRY principle",
      "Code readability",
      "Refactoring patterns"
    ],
    usageExamples: [
      "Refactor for clean code",
      "Apply SOLID principles",
      "Fix naming conventions",
      "Remove code duplication"
    ],
    relatedSkills: ["code-review-checklist", "production-code-audit", "lint-and-validate"]
  },
  "systematic-debugging": {
    id: "systematic-debugging",
    name: "systematic-debugging",
    description: "Phương pháp gỡ lỗi hệ thống bài bản với isolating issues, evidence gathering và pattern matching.",
    category: "architecture",
    version: "4.0.12",
    source: "Debugging Methodology",
    features: [
      "Issue isolation",
      "Evidence gathering",
      "Pattern matching",
      "Root cause analysis",
      "Solution verification"
    ],
    usageExamples: [
      "Debug complex issue",
      "Isolate bug location",
      "Gather evidence",
      "Verify fix is correct"
    ],
    relatedSkills: ["incident-responder", "clean-code", "testing-patterns"]
  },

  // =====================
  // QUALITY SKILLS
  // =====================
  "tdd-master-workflow": {
    id: "tdd-master-workflow",
    name: "tdd-master-workflow",
    description: "Chu kỳ TDD (Red-Green-Refactor) nâng cao với test coverage, behavioral tests và edge case coverage.",
    category: "testing",
    version: "4.0.12",
    source: "Kent Beck's TDD Book",
    features: [
      "Red-Green-Refactor cycle",
      "Test coverage analysis",
      "Behavioral testing",
      "Edge case coverage",
      "Test refactoring"
    ],
    usageExamples: [
      "Write test first",
      "Increase coverage to 80%",
      "Add edge case tests",
      "Refactor with confidence"
    ],
    relatedSkills: ["tdd-workflow", "testing-patterns", "webapp-testing"]
  },
  "tdd-workflow": {
    id: "tdd-workflow",
    name: "tdd-workflow",
    description: "Quy trình Test-Driven Development cơ bản với unit tests, assertions và test suites.",
    category: "testing",
    version: "4.0.12",
    source: "TDD Fundamentals",
    features: [
      "Unit test basics",
      "Assertion patterns",
      "Test suite organization",
      "Setup/Teardown",
      "Test naming conventions"
    ],
    usageExamples: [
      "Write unit tests",
      "Organize test suites",
      "Use proper assertions",
      "Setup test fixtures"
    ],
    relatedSkills: ["tdd-master-workflow", "testing-patterns", "lint-and-validate"]
  },
  "testing-patterns": {
    id: "testing-patterns",
    name: "testing-patterns",
    description: "Mẫu kiểm thử nâng cao (Mocking/STUB) với contract testing, integration patterns và dependency injection.",
    category: "testing",
    version: "4.0.12",
    source: "Testing Best Practices",
    features: [
      "Mock/Stub patterns",
      "Contract testing",
      "Integration patterns",
      "Dependency injection",
      "Test doubles"
    ],
    usageExamples: [
      "Mock external APIs",
      "Write contract tests",
      "Setup integration tests",
      "Inject test dependencies"
    ],
    relatedSkills: ["tdd-master-workflow", "webapp-testing", "systematic-debugging"]
  },
  "lint-and-validate": {
    id: "lint-and-validate",
    name: "lint-and-validate",
    description: "Kiểm tra và chuẩn hóa mã nguồn tự động với static analysis, type checking và style enforcement.",
    category: "testing",
    version: "4.0.12",
    source: "ESLint/TypeScript Docs",
    features: [
      "Static code analysis",
      "Type checking",
      "Style enforcement",
      "Auto-fixing",
      "Git hooks integration"
    ],
    usageExamples: [
      "Setup ESLint config",
      "Configure TypeScript strict",
      "Add Prettier formatting",
      "Setup pre-commit hooks"
    ],
    relatedSkills: ["clean-code", "code-review-checklist", "tdd-workflow"]
  },
  "documentation-templates": {
    id: "documentation-templates",
    name: "documentation-templates",
    description: "Hệ thống templates tài liệu chuyên nghiệp với technical specs, PRD templates và user manuals.",
    category: "testing",
    version: "4.0.12",
    source: "Documentation Best Practices",
    features: [
      "Technical spec templates",
      "PRD templates",
      "API documentation",
      "User manual templates",
      "README standards"
    ],
    usageExamples: [
      "Create PRD document",
      "Write technical spec",
      "Generate API docs",
      "Update README"
    ],
    relatedSkills: ["api-documenter", "plan-writing", "clean-code"]
  },
  "performance-profiling": {
    id: "performance-profiling",
    name: "performance-profiling",
    description: "Phân tích và đo lường hiệu năng với flamegraphs, profiling tools và benchmarking.",
    category: "testing",
    version: "4.0.12",
    source: "Performance Analysis",
    features: [
      "Flamegraph analysis",
      "CPU profiling",
      "Memory profiling",
      "Benchmarking",
      "Performance regression"
    ],
    usageExamples: [
      "Profile application",
      "Generate flamegraph",
      "Analyze memory usage",
      "Run benchmarks"
    ],
    relatedSkills: ["performance-engineer", "modern-web-performance", "nodejs-best-practices"]
  },
  "modern-web-performance": {
    id: "modern-web-performance",
    name: "modern-web-performance",
    description: "High-Performance Web Engineering với Core Web Vitals, bundle optimization và runtime performance.",
    category: "testing",
    version: "4.0.12",
    source: "Web.dev Performance",
    features: [
      "Core Web Vitals",
      "Bundle optimization",
      "Runtime performance",
      "Loading strategies",
      "Caching patterns"
    ],
    usageExamples: [
      "Optimize Core Web Vitals",
      "Reduce bundle size",
      "Implement lazy loading",
      "Setup caching headers"
    ],
    relatedSkills: ["nextjs-react-expert", "performance-profiling", "seo-expert-kit"]
  },

  // =====================
  // GROWTH SKILLS
  // =====================
  "seo-expert-kit": {
    id: "seo-expert-kit",
    name: "seo-expert-kit",
    description: "Bộ công cụ tối ưu hóa SEO chuyên sâu với technical SEO, semantic HTML và Schema.org markup.",
    category: "seo",
    version: "4.0.12",
    source: "Google Search Central",
    features: [
      "Technical SEO audit",
      "Semantic HTML optimization",
      "Schema.org markup",
      "Content optimization",
      "Link building strategies"
    ],
    usageExamples: [
      "Audit SEO cho website",
      "Add structured data",
      "Optimize meta tags",
      "Improve content for E-E-A-T"
    ],
    relatedSkills: ["seo-fundamentals", "geo-fundamentals", "modern-web-performance"]
  },
  "seo-fundamentals": {
    id: "seo-fundamentals",
    name: "seo-fundamentals",
    description: "Nền tảng về thuật toán Google & AI Search với E-E-A-T principles, Core Web Vitals và indexing lifecycle.",
    category: "seo",
    version: "4.0.12",
    source: "Google Search Central",
    features: [
      "E-E-A-T principles",
      "Core Web Vitals",
      "Indexing lifecycle",
      "Crawl optimization",
      "Search ranking factors"
    ],
    usageExamples: [
      "Improve E-E-A-T signals",
      "Optimize for crawling",
      "Check indexing status",
      "Analyze ranking factors"
    ],
    relatedSkills: ["seo-expert-kit", "geo-fundamentals", "modern-web-performance"]
  },
  "geo-fundamentals": {
    id: "geo-fundamentals",
    name: "geo-fundamentals",
    description: "Generative Engine Optimization (AI Search) với Perplexity optimization, reference building và brand authority.",
    category: "seo",
    version: "4.0.12",
    source: "GEO Research Papers",
    features: [
      "AI Search optimization",
      "Reference building",
      "Brand authority",
      "Citation optimization",
      "Conversational SEO"
    ],
    usageExamples: [
      "Optimize for AI search",
      "Build citation references",
      "Improve brand mentions",
      "Create conversational content"
    ],
    relatedSkills: ["seo-fundamentals", "seo-expert-kit", "documentation-templates"]
  },
  "cro-expert-kit": {
    id: "cro-expert-kit",
    name: "cro-expert-kit",
    description: "Tối ưu hóa tỷ lệ chuyển đổi (CRO) với landing page psychology, friction reduction và form optimization.",
    category: "seo",
    version: "4.0.12",
    source: "CRO Best Practices",
    features: [
      "Landing page psychology",
      "Friction reduction",
      "Form optimization",
      "A/B testing",
      "User behavior analysis"
    ],
    usageExamples: [
      "Optimize landing page",
      "Reduce form friction",
      "Setup A/B tests",
      "Analyze user behavior"
    ],
    relatedSkills: ["frontend-design", "ui-ux-pro-max-skill", "web-design-guidelines"]
  },
  "game-development": {
    id: "game-development",
    name: "game-development",
    description: "Phát triển Game và logic tương tác mạnh với game loops, asset management và level design.",
    category: "frontend",
    version: "4.0.12",
    source: "Game Development Patterns",
    features: [
      "Game loop patterns",
      "Asset management",
      "Level design",
      "Physics simulation",
      "Animation systems"
    ],
    usageExamples: [
      "Build game prototype",
      "Setup game loop",
      "Manage game assets",
      "Design game levels"
    ],
    relatedSkills: ["frontend-design", "mobile-design", "performance-profiling"]
  },
  "mobile-design": {
    id: "mobile-design",
    name: "mobile-design",
    description: "Tư duy thiết kế ứng dụng di động ưu tiên với touch ergonomics, offline capability và mobile UI patterns.",
    category: "frontend",
    version: "4.0.12",
    source: "Mobile Design Guidelines",
    features: [
      "Touch ergonomics",
      "Offline capability",
      "Mobile UI patterns",
      "Gesture navigation",
      "Device adaptation"
    ],
    usageExamples: [
      "Design mobile-first",
      "Implement offline mode",
      "Add gesture navigation",
      "Optimize for touch"
    ],
    relatedSkills: ["frontend-design", "react-native-best-practices", "ui-ux-pro-max-skill"]
  },
  "react-native-best-practices": {
    id: "react-native-best-practices",
    name: "react-native-best-practices",
    description: "React Native & Expo engineering standards với performance optimization và native modules.",
    category: "frontend",
    version: "4.0.12",
    source: "React Native Docs",
    features: [
      "Expo SDK usage",
      "Native modules",
      "Performance optimization",
      "Navigation patterns",
      "State management"
    ],
    usageExamples: [
      "Build React Native app",
      "Optimize app performance",
      "Setup navigation",
      "Manage app state"
    ],
    relatedSkills: ["mobile-design", "frontend-design", "nextjs-react-expert"]
  },

  // =====================
  // SHELL SKILLS
  // =====================
  "bash-linux": {
    id: "bash-linux",
    name: "bash-linux",
    description: "Bash/Linux Shell Scripting chuyên nghiệp với grepping patterns, stream editing và automated scripts.",
    category: "devops",
    version: "4.0.12",
    source: "Linux Shell Scripting",
    features: [
      "Grep/Sed/Awk patterns",
      "Stream editing",
      "Script automation",
      "File manipulation",
      "Process management"
    ],
    usageExamples: [
      "Write bash script",
      "Search with grep",
      "Edit files with sed",
      "Automate tasks"
    ],
    relatedSkills: ["powershell-windows", "server-management", "deployment-procedures"]
  },
  "powershell-windows": {
    id: "powershell-windows",
    name: "powershell-windows",
    description: "Windows PowerShell và Automation với CMDlets, registry management và Windows workflows.",
    category: "devops",
    version: "4.0.12",
    source: "PowerShell Docs",
    features: [
      "PowerShell cmdlets",
      "Registry management",
      "Windows automation",
      "Active Directory",
      "Remote management"
    ],
    usageExamples: [
      "Write PowerShell script",
      "Manage Windows registry",
      "Automate Windows tasks",
      "Configure Active Directory"
    ],
    relatedSkills: ["bash-linux", "server-management", "deployment-procedures"]
  },

  // =====================
  // UI/UX SKILLS
  // =====================
  "ui-ux-pro-max-skill": {
    id: "ui-ux-pro-max-skill",
    name: "ui-ux-pro-max-skill",
    description: "Premium design toolkit với Magic UI patterns, Glassmorphism 2.0 và Framer Motion animations.",
    category: "frontend",
    version: "4.0.12",
    source: "Magic UI / Linear Design",
    features: [
      "Glassmorphism 2.0 patterns",
      "Micro-interaction animations",
      "Bento grid layouts",
      "Premium color palettes",
      "Framer Motion patterns"
    ],
    usageExamples: [
      "Design premium landing page",
      "Add micro-interactions",
      "Create Bento grid layout",
      "Implement dark mode"
    ],
    relatedSkills: ["frontend-design", "tailwind-patterns", "web-design-guidelines"]
  },
  "antfu-coding-style": {
    id: "antfu-coding-style",
    name: "antfu-coding-style",
    description: "Opinionated coding style và tooling preferences by Anthony Fu với ESLint/Prettier configs.",
    category: "architecture",
    version: "4.0.12",
    source: "Anthony Fu Blog",
    features: [
      "ESLint config flat",
      "Prettier alternatives",
      "TypeScript patterns",
      "Vue/React conventions",
      "Monorepo setup"
    ],
    usageExamples: [
      "Setup antfu eslint config",
      "Apply coding style",
      "Configure TypeScript",
      "Setup monorepo"
    ],
    relatedSkills: ["clean-code", "lint-and-validate", "nodejs-best-practices"]
  }
};

// Helper function to get skill detail by ID
export function getSkillDetail(id: string): SkillDetail | null {
  return skillsDetails[id] || null;
}

// Get all skill IDs for static generation
export function getAllSkillIds(): string[] {
  return Object.keys(skillsDetails);
}

// Get skills by category
export function getSkillsByCategory(category: string): SkillDetail[] {
  return Object.values(skillsDetails).filter(skill => skill.category === category);
}
