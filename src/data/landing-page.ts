import { 
  Monitor, Palette, Search, Activity, Code2, 
  ShieldCheck, BrainCircuit, RefreshCw, Zap
} from "lucide-react";

export const landingPage = {
  hero: {
    badge: "Hệ điều hành Trí tuệ cho AI Engineers",
    title: {
      line1: "PHỔ CẬP",
      // Color coded words for rendering logic
      words: [
        { text: "VIBE", color: "blue" },
        { text: "CODING", color: "red" },
        { text: "ANTIGRAVITY", color: "yellow" },
        { text: "IDE", color: "green" }
      ],
      line2: "TỪ", 
      highlight1: "", // Legacy override
      highlight2: "" // Legacy override
    },
    cta: {
      primary: "Kích hoạt ngay",
      secondary: "npx agent-skills-setup-for-antigravity@latest"
    },
    // Updated to support multiple slides with realistic space theme
    slides: [
      {
        image: "/a1.jpeg",
        alt: "Space Exploration 1",
        desc: "Future Technology"
      },
      {
        image: "/a2.jpeg",
        alt: "Space Exploration 2",
        desc: "Orbital Operations"
      },
      {
        image: "/a3.jpeg",
        alt: "Space Exploration 3",
        desc: "Mars Colony"
      }
    ]
  },
  stats: [
    { number: "72", label: "Master Skills", desc: "Bộ kỹ năng chuyên sâu cho mọi lĩnh vực lập trình.", iconName: "Brain", color: "blue" },
    { number: "22", label: "Specialist Agents", desc: "Đội ngũ Agent AI chuyên biệt, phối hợp nhịp nhàng.", iconName: "Layers", color: "red" },
    { number: "30", label: "Workflows", desc: "Quy trình PDCA chuẩn hóa, cam kết chất lượng đầu ra.", iconName: "Workflow", color: "green" }
  ],
  architecture: {
    badge: "Scale-Adaptive Architecture",
    title: {
      main: "THÍCH NGHI",
      highlight: "MỌI QUY MÔ",
      sub: "DỰ ÁN"
    },
    desc: "Lần đầu tiên trên thế giới, hệ thống AI có khả năng tự thay đổi giao thức vận hành để phù hợp với độ phức tạp của bài toán.",
    options: [
      { 
        title: "INSTANT (MVP)", 
        desc: "Tối ưu tốc độ. Một Agent xử lý đa nhiệm (Fullstack).", 
        iconName: "User",
        color: "blue"
      },
      { 
        title: "CREATIVE (AI Toàn diện)", 
        desc: "Phân vai rõ ràng, ưu tiên tính sáng tạo và đột phá.", 
        iconName: "Users",
        color: "red" 
      },
      { 
        title: "SME (Doanh nghiệp)", 
        desc: "Chuẩn hóa cấp độ Enterprise. Bắt buộc Audit và kiểm soát chất lượng.", 
        iconName: "Building",
        color: "yellow"
      }
    ]
  },
  scientificLinkage: {
    badge: "Cỗ máy tri thức",
    title: {
      main: "SCIENTIFIC",
      highlight: "LINKAGE"
    },
    desc: "Không còn những câu trả lời ngẫu nhiên. Mọi hành động của Agent đều được neo vào bộ khung tri thức vững chắc.",
    cards: [
      { title: "DNA (.shared)", items: ["API Standards", "DB Blueprints", "Design Tokens"], color: "blue" },
      { title: "RULES (Guardrails)", items: ["Security Laws", "Coding Style", "Project Specs"], color: "red" },
      { title: "SKILLS (Toolkit)", items: ["Web Architect", "Security Auditor", "SEO Expert"], color: "green" }
    ]
  },
  agents: {
    badge: "Đa tác nhân AI",
    title: {
      main: "ĐỘI NGŨ",
      highlight: "AGENT"
    },
    desc: "22 Agent AI chuyên biệt, mỗi Agent một vai trò, phối hợp nhịp nhàng để xử lý mọi tác vụ lập trình.",
    list: [
      { name: "Orchestrator", role: "Điều phối tổng" },
      { name: "Frontend", role: "Giao diện" },
      { name: "Backend", role: "Hệ thống" },
      { name: "Security", role: "Bảo mật" },
      { name: "DevOps", role: "Triển khai" }
    ]
  },
  features: { // Updated with v4.0 content
    badge: "Công nghệ phi mã",
    title: {
      main: "TÍNH NĂNG",
      highlight: "PHI THƯỜNG"
    },
    items: [
      {
        icon: ShieldCheck,
        title: "Malware Guard",
        desc: "Hệ thống tự động quét và chặn các link độc hại, bảo vệ môi trường development tuyệt đối.",
        colSpan: "md:col-span-2",
        color: "red" // Security -> Red
      },
      {
        icon: BrainCircuit,
        title: "Self-Learning Core",
        desc: "AI tự học từ lỗi sai, ghi nhớ context và tự động tạo Rule mới để tránh mắc lại lỗi cũ.",
        colSpan: "",
        color: "blue" // Intelligence -> Blue
      },
      {
        icon: RefreshCw,
        title: "Auto-Update Chat",
        desc: "AI chủ động kiểm tra version mới và đề xuất nâng cấp package ngay trong luồng chat.",
        colSpan: "",
        color: "green" // Update -> Green
      },
      {
        icon: Monitor,
        title: "Browser Testing",
        desc: "AI chủ động điều khiển Chrome để kiểm tra giao diện và bug UI trực quan.",
        colSpan: "",
        color: "yellow"
      },
      {
        icon: Palette,
        title: "UI/UX Pro Max",
        desc: "Nạp 50+ phong cách thiết kế hiện đại (Magic UI, Linear style) chỉ với một lệnh.",
        colSpan: "",
        color: "blue"
      },
      {
        icon: Search,
        title: "GEO/SEO Expert",
        desc: "Tối ưu hóa nội dung cho cả người dùng và các bộ máy tìm kiếm thế hệ mới.",
        colSpan: "md:col-span-2",
        color: "yellow"
      }
    ]
  }
};
