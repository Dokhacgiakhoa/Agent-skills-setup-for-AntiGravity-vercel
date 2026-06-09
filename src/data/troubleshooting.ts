/**
 * Troubleshooting Content Data
 * Source: Agent-skills-setup-for-AntiGravity/docs/TROUBLESHOOTING.vi.md
 */

export type Severity = "low" | "medium" | "high" | "critical";

export interface TroubleshootingItem {
  id: string;
  title: string;
  errorCode?: string;
  severity: Severity;
  category: "installation" | "runtime" | "dependencies";
  cause: string;
  solution: string;
  commands?: string[];
}

export const troubleshootingCategories = [
  { id: "all", label: "Tất cả", count: 8 },
  { id: "installation", label: "Cài đặt", count: 4 },
  { id: "runtime", label: "Runtime", count: 2 },
  { id: "dependencies", label: "Thư viện", count: 2 },
];

export const troubleshootingItems: TroubleshootingItem[] = [
  // Installation Errors
  {
    id: "command-not-found",
    title: "command not found: antigravity",
    errorCode: "command not found: antigravity",
    severity: "medium",
    category: "installation",
    cause: "Chưa cài global hoặc lỗi đường dẫn PATH.",
    solution: "Chạy lại npm install -g agent-skills-setup-for-antigravity hoặc dùng trực tiếp npx agent-skills-setup-for-antigravity (không cần cài).",
    commands: [
      "npm install -g agent-skills-setup-for-antigravity",
      "npx agent-skills-setup-for-antigravity"
    ]
  },
  {
    id: "permission-denied",
    title: "EACCES: permission denied",
    errorCode: "EACCES: permission denied",
    severity: "high",
    category: "installation",
    cause: "Không đủ quyền ghi file hệ thống. Thường gặp trên macOS/Linux.",
    solution: "Mac/Linux: Thêm sudo trước lệnh. Windows: Chạy CMD/PowerShell dưới quyền Administrator.",
    commands: [
      "sudo npm install -g agent-skills-setup-for-antigravity",
      "# Windows: Right-click > Run as Administrator"
    ]
  },
  {
    id: "python-not-found",
    title: "Python not found",
    errorCode: "Python not found",
    severity: "medium",
    category: "installation",
    cause: "Bạn chọn quy mô dự án có dùng AI nâng cao (Creative/SME Scale) nhưng máy chưa cài Python hoặc chưa đưa vào PATH.",
    solution: "Cài đặt Python 3.10+ từ python.org và tích chọn \"Add Python to PATH\". Hoặc chọn Standard Mode nếu không cần Python.",
    commands: [
      "# Download from https://python.org",
      "# Check: Add Python to PATH",
      "python --version"
    ]
  },
  {
    id: "file-exists",
    title: "File GEMINI.md already exists",
    errorCode: "File \"GEMINI.md\" already exists",
    severity: "low",
    category: "installation",
    cause: "Đây KHÔNG phải lỗi - đây là tính năng bảo vệ dữ liệu. Hệ thống phát hiện file cấu hình đã tồn tại.",
    solution: "Nhập 'y' để ghi đè, hoặc 'n' để hệ thống tạo file .new. Nếu muốn bỏ qua hoàn toàn, dùng cờ --force.",
    commands: [
      "npx agent-skills-setup-for-antigravity --force"
    ]
  },
  // Runtime Errors
  {
    id: "agent-not-responding",
    title: "Agent is not responding",
    errorCode: "Agent im lặng / không phản hồi",
    severity: "high",
    category: "runtime",
    cause: "API Key chưa được cấu hình hoặc hết hạn sử dụng.",
    solution: "Kiểm tra file .env đã có GEMINI_API_KEY chưa. Kiểm tra mạng internet. Xác nhận API key còn quota.",
    commands: [
      "# Check .env file:",
      "GEMINI_API_KEY=your_key_here",
      "# Verify at: https://aistudio.google.com/apikey"
    ]
  },
  {
    id: "token-limit",
    title: "Token limit exceeded",
    errorCode: "Token limit exceeded",
    severity: "medium",
    category: "runtime",
    cause: "Cuộc hội thoại quá dài, tràn bộ nhớ context của LLM.",
    solution: "Tắt chat đi và mở lại hội thoại mới. Hoặc dùng model có context lớn hơn (Gemini 1.5 Pro có 1M tokens).",
    commands: [
      "# Start new conversation",
      "# Or upgrade to Gemini 1.5 Pro"
    ]
  },
  // Dependencies
  {
    id: "legacy-peer-deps",
    title: "npm ERR! legacy-peer-deps",
    errorCode: "npm ERR! legacy-peer-deps",
    severity: "medium",
    category: "dependencies",
    cause: "Xung đột phiên bản thư viện, thường gặp với React cũ/mới hoặc các package không tương thích.",
    solution: "Thêm cờ --legacy-peer-deps khi cài đặt để bỏ qua kiểm tra peer dependencies.",
    commands: [
      "npm install --legacy-peer-deps"
    ]
  },
  {
    id: "common-rules-undefined",
    title: "ReferenceError: commonRules is not defined",
    errorCode: "ReferenceError: commonRules is not defined",
    severity: "critical",
    category: "dependencies",
    cause: "Máy bạn đang cài sẵn phiên bản cũ (v3.5.54 hoặc cũ hơn) ở chế độ Global, gây xung đột với lệnh npx.",
    solution: "Gỡ bỏ bản Global cũ để npx tải bản mới nhất. Đây là known bug đã được fix ở v4.0+.",
    commands: [
      "npm uninstall -g agent-skills-setup-for-antigravity",
      "npx agent-skills-setup-for-antigravity"
    ]
  }
];
