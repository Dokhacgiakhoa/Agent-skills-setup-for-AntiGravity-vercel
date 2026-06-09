/**
 * FAQ Content Data
 * Source: Agent-skills-setup-for-AntiGravity/docs/FAQ.vi.md
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "technical" | "operations" | "contribution";
}

export const faqCategories = [
  { id: "all", label: "Tất cả", count: 10 },
  { id: "general", label: "Chung", count: 4 },
  { id: "technical", label: "Kỹ thuật", count: 4 },
  { id: "operations", label: "Vận hành", count: 2 },
];

export const faqItems: FAQItem[] = [
  // General
  {
    id: "what-is-antigravity",
    question: "Agent skills setup for AntiGravity là gì? Có phải là phần mềm cài đặt vào máy không?",
    answer: "Không hẳn. Agent skills setup for AntiGravity hoạt động như một lớp bổ trợ (layer) thông minh chạy trên nền Node.js. Bạn có thể gọi nó bất cứ lúc nào qua lệnh `npx agent-skills-setup-for-antigravity` mà không cần cài đặt nặng nề như Visual Studio hay Android Studio. Nó tự động thiết lập bộ não AI Agent với 72 Master Skills và 22 Specialist Agents.",
    category: "general"
  },
  {
    id: "brownfield-project",
    question: "Tôi có thể dùng nó với dự án đã có sẵn (Brownfield Project) không?",
    answer: "Có! Hãy cd vào thư mục dự án của bạn và chạy `npx agent-skills-setup-for-antigravity .` (có dấu chấm). Nó sẽ tự động phát hiện dự án và chỉ thêm bộ não `.agent/` vào mà không làm hỏng code cũ của bạn. Hệ thống sẽ tự động nhận diện framework bạn đang dùng.",
    category: "general"
  },
  {
    id: "is-it-free",
    question: "Nó có miễn phí không?",
    answer: "Mã nguồn Agent skills setup for AntiGravity là Open Source hoàn toàn miễn phí. Tuy nhiên, để AI hoạt động thông minh, bạn cần API Key của các mô hình LLM (như Gemini, GPT-4, Claude) - phần này có thể tốn phí tùy nhà cung cấp. Với Gemini Pro, Google cung cấp Free Tier khá rộng rãi cho developers.",
    category: "general"
  },
  {
    id: "what-is-difference",
    question: "Khác gì so với các script/plugin AI khác?",
    answer: "Agent skills setup for AntiGravity không chỉ là wrapper đơn giản. Nó có: (1) Hệ thống Watchdog bảo vệ tài khoản 24/7, ngăn chặn vòng lặp vô hạn; (2) 72 chuyên gia cấp Senior (Master Skills) thay vì prompt đơn giản; (3) Cơ chế tự sửa lỗi và học từ sai lầm; (4) Không cần config JSON phức tạp, chỉ cần 1 lệnh duy nhất.",
    category: "general"
  },
  // Technical
  {
    id: "why-python",
    question: "Tại sao lại cần Python?",
    answer: "Chế độ \"Advanced\" sử dụng các thư viện Data Science và AI mạnh mẽ (như Pandas, Scikit-learn) chỉ có trên Python. Tuy nhiên, nếu bạn chỉ làm Web/App cơ bản (Standard Mode), bạn KHÔNG cần Python. Hệ thống sẽ tự động phát hiện và hỏi bạn khi cần thiết.",
    category: "technical"
  },
  {
    id: "what-is-600-patterns",
    question: "600+ Chiến thuật (AI Patterns) là gì?",
    answer: "Đó không phải là 600 file riêng lẻ, mà là tổng hợp các mẫu thiết kế (Design Patterns), Checklist kiểm thử, và Quy tắc bảo mật nằm BÊN TRONG 72 bộ Master Skills. Ví dụ: Skill \"Mobile Design\" chứa hơn 50 patterns về UX, Performance và Security cho iOS/Android. Skill \"Security Auditor\" chứa toàn bộ OWASP Top 10.",
    category: "technical"
  },
  {
    id: "what-is-gemini-md",
    question: "File GEMINI.md là gì?",
    answer: "Đó là \"CMND/CCCD\" của AI Agent - định nghĩa danh tính, nhiệm vụ và các quy tắc ứng xử. AI sẽ đọc file này ĐẦU TIÊN khi bắt đầu phiên làm việc để biết \"mình là ai\", được phép làm gì và cấm làm gì. Bạn có thể tùy chỉnh file này để thay đổi hành vi của Agent theo ý muốn.",
    category: "technical"
  },
  {
    id: "overwrite-config",
    question: "Tôi lỡ tay ghi đè file cấu hình, có lấy lại được không?",
    answer: "Nếu chưa commit git → Rất tiếc là không thể khôi phục. Nếu đã dùng cờ `--force`, file cũ đã bị xóa vĩnh viễn. Hãy tập thói quen dùng Git! Hoặc bạn có thể chạy lại `npx agent-skills-setup-for-antigravity` để hệ thống tự động tạo lại các file mặc định.",
    category: "technical"
  },
  // Operations
  {
    id: "agent-knows-changes",
    question: "Làm sao để Agent biết tôi vừa sửa code?",
    answer: "Agent hiện đại (như trong Cursor/Windsurf) thường tự đọc context từ file system. Nếu dùng CLI truyền thống, bạn cần nhắc Agent đọc lại file: \"Đọc lại file X giúp tôi\" hoặc sử dụng lệnh `/status` để Agent cập nhật trạng thái dự án.",
    category: "operations"
  },
  {
    id: "create-custom-agent",
    question: "Tôi muốn tạo Agent riêng chuyên về Game thì làm sao?",
    answer: "Khi chạy `npx agent-skills-setup-for-antigravity`, ở bước chọn Project Scale, hãy chọn Creative. Sau đó chọn Game Development. Hệ thống sẽ tự động load bộ Skill `game-development`, `mobile-design` và các Agent phù hợp như `game-developer`. Bạn cũng có thể tùy chỉnh GEMINI.md để thêm các quy tắc riêng.",
    category: "operations"
  }
];
