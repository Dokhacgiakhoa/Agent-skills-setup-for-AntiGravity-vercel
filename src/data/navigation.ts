import { Book, Users, Zap, Workflow, Share2, Rocket, FileText, MessageCircleQuestion, AlertTriangle, Briefcase, History, Brain, Layers } from "lucide-react";

export const navigation = {
  mainDetails: [
    { name: "Trang chủ", href: "/" },
    { name: "Cài đặt", href: "/tutorial" },
    { 
      name: "Hướng dẫn", 
      href: "/guide",
      children: [
        { name: "Rules", href: "/guide/rules", desc: "Quy tắc vận hành", icon: Book },
        { name: "Agents", href: "/guide/agents", desc: "Nhân sự AI", icon: Users },
        { name: "Skills", href: "/guide/skills", desc: "Thư viện kỹ năng", icon: Zap },
        { name: "Workflows", href: "/guide/workflows", desc: "Quy trình", icon: Workflow },
        { name: ".shared", href: "/guide/shared", desc: "DNA hệ thống", icon: Share2 },
        { name: "AI Thinking", href: "/guide/how-it-thinks", desc: "Cách AI xử lý", icon: Brain },
        { name: "Architecture", href: "/guide/architecture", desc: "Kiến trúc hệ thống", icon: Layers },
      ]
    },
    { 
      name: "Hỗ trợ", 
      href: "/guide/faq",
      children: [
        { name: "FAQ", href: "/guide/faq", desc: "Câu hỏi thường gặp", icon: MessageCircleQuestion },
        { name: "Troubleshooting", href: "/guide/troubleshooting", desc: "Khắc phục lỗi", icon: AlertTriangle },
        { name: "Case Studies", href: "/guide/case-studies", desc: "Ví dụ thực tế", icon: Briefcase },
        { name: "Changelog", href: "/guide/changelog", desc: "Lịch sử phát hành", icon: History },
      ]
    },
    { 
      name: "Ghi chú", 
      href: "/notes",
      children: [
        { name: "Dự án mẫu", href: "/samples", desc: "Kho kịch bản thực tế", icon: Rocket },
        { name: "Thuật ngữ", href: "/dictionaries", desc: "Từ điển chuyên ngành", icon: FileText },
      ]
    },
  ],
  footer: [
    {
      title: "Hệ thống",
      links: [
        { name: "Trang chủ", href: "/" },
        { name: "Cài đặt", href: "/tutorial" },
        { name: "Phiên bản v4.0", href: "https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity/releases" },
      ]
    },
    {
      title: "Tài liệu",
      links: [
        { name: "Rules", href: "/guide/rules" },
        { name: "Skills", href: "/guide/skills" },
        { name: "Workflows", href: "/guide/workflows" },
      ]
    },
    {
      title: "Cộng đồng",
      links: [
        { name: "GitHub", href: "https://github.com/Dokhacgiakhoa/Agent-skills-setup-for-AntiGravity" },
        { name: "Discord", href: "#" },
      ]
    }
  ]
};
