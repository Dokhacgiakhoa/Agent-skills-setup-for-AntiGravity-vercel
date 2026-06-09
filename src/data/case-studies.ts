/**
 * Case Studies Content Data
 * Source: antigravity-ide/docs/OPERATIONAL_FLOW.vi.md
 */

export interface CaseStudyPhase {
  phase: number;
  title: string;
  progress: string;
  prompts: Array<{
    context?: string;
    prompt: string;
  }>;
}

export interface CaseStudy {
  id: string;
  title: string;
  icon: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  duration: string;
  focus: string[];
  description: string;
  phases: CaseStudyPhase[];
  tags: string[];
}

export const difficultyConfig = {
  easy: { label: "Dễ", color: "#34A853", bars: 1 },
  medium: { label: "Trung bình", color: "#FBBC04", bars: 2 },
  hard: { label: "Khó", color: "#EA4335", bars: 3 },
  expert: { label: "Chuyên sâu", color: "#8B5CF6", bars: 4 }
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce",
    title: "Sàn Thương mại Điện tử",
    icon: "🛒",
    difficulty: "hard",
    duration: "2 tuần quy đổi",
    focus: ["Database", "API", "State Management"],
    description: "Xây dựng trang bán hàng Sneaker với full-stack: trang chủ, chi tiết sản phẩm, giỏ hàng, và Admin Dashboard.",
    tags: ["Next.js", "PostgreSQL", "Zustand", "JWT"],
    phases: [
      {
        phase: 1,
        title: "Khởi động & Móng nhà",
        progress: "10%",
        prompts: [
          { prompt: "/create (chọn SME, Industry F&B)" },
          { prompt: "/plan" },
          { context: "project-planner", prompt: "Anh muốn làm một trang bán giày Sneaker. Cần có trang chủ, trang chi tiết, giỏ hàng, và Admin Dashboard. Phân tích giúp anh cần những bảng (Table) nào trong Database?" }
        ]
      },
      {
        phase: 2,
        title: "Backend & Database",
        progress: "30%",
        prompts: [
          { context: "@database-architect", prompt: "Tạo file schema.sql. Cần bảng Users, Products (có size, color), Orders, OrderItems. Nhớ thêm Index vào cột price để sau này lọc cho nhanh." },
          { context: "@backend @security", prompt: "Tạo API POST /auth/register. Validate email kỹ vào. Password phải hash bằng Bcrypt. Trả về JWT Token nhé." },
          { context: "@debug", prompt: "Nãy anh gửi request Login mà nó báo lỗi 500. Log đây: Cannot read property 'hash' of undefined. Fix gấp." }
        ]
      },
      {
        phase: 3,
        title: "Frontend Development",
        progress: "40%",
        prompts: [
          { context: "@frontend @ui-ux-pro-max", prompt: "Tạo Component ProductCard. Yêu cầu: Ảnh to, tên đậm, giá tiền màu đỏ. Khi hover vào thì thẻ nổi lên (elevation) và đổ bóng." },
          { context: "@frontend", prompt: "Tạo trang /cart. Sử dụng Zustand để quản lý state giỏ hàng. Cần hiển thị list sản phẩm, nút tăng giảm số lượng, và tổng tiền tạm tính." }
        ]
      },
      {
        phase: 4,
        title: "Tích hợp & Hoàn thiện",
        progress: "20%",
        prompts: [
          { prompt: "Ở trang Login, khi user bấm Submit thì gọi API /auth/login. Nếu thành công thì lưu token vào localStorage và chuyển hướng về trang chủ." },
          { context: "@performance", prompt: "Chạy Lighthouse audit trang chủ xem điểm số thế nào. Tối ưu ảnh và lazy load mấy cái component nặng giúp anh." }
        ]
      }
    ]
  },
  {
    id: "game",
    title: "Game Mobile \"Flappy Clone\"",
    icon: "🎮",
    difficulty: "medium",
    duration: "1 tuần",
    focus: ["Logic", "Physics", "Performance"],
    description: "Phát triển game Indie với gameplay loop hoàn chỉnh, physics engine, và sound effects.",
    tags: ["JavaScript", "Canvas", "Game Loop", "Mobile"],
    phases: [
      {
        phase: 1,
        title: "Logic cốt lõi",
        progress: "40%",
        prompts: [
          { prompt: "/create (chọn Mobile & Game)" },
          { context: "@game-development", prompt: "Tạo class Bird. Có hàm update(). Mỗi khung hình thì y tăng dần (rơi xuống). Khi gọi flap() thì velocity nảy lên. Tinh chỉnh số liệu sao cho cảm giác giống Flappy Bird thật." }
        ]
      },
      {
        phase: 2,
        title: "Gameplay Loop",
        progress: "40%",
        prompts: [
          { prompt: "Tạo class PipeManager. Cứ 2 giây sinh ra một cặp ống (trên/dưới). Ống di chuyển từ phải sang trái. Nếu chim va chạm (collision) với ống thì Game Over." }
        ]
      },
      {
        phase: 3,
        title: "Polish & Optimization",
        progress: "20%",
        prompts: [
          { prompt: "Khi chim bay thì phát sfx_wing.mp3. Khi chết phát sfx_hit.mp3." },
          { context: "@performance", prompt: "Anh thấy chơi lâu thì game bị lag. Nghi là do tạo object nhiều quá mà không xóa. Check xem có memory leak ở chỗ PipeManager không?" }
        ]
      }
    ]
  },
  {
    id: "fintech",
    title: "Hệ thống Tài chính",
    icon: "🏦",
    difficulty: "expert",
    duration: "1 tháng+",
    focus: ["Bảo mật", "Audit", "Compliance"],
    description: "Xây dựng hệ thống Fintech Enterprise với các tiêu chuẩn bảo mật cao nhất và tuân thủ PCI-DSS.",
    tags: ["Node.js", "Helmet", "Bcrypt", "Transaction", "Audit Log"],
    phases: [
      {
        phase: 1,
        title: "Hardening (Gia cố)",
        progress: "30%",
        prompts: [
          { prompt: "/create (chọn Enterprise, Finance)" },
          { context: "@security-auditor", prompt: "Review file server.js. Đảm bảo mình đã setup Helmet, Rate Limiting, và CORS chặt chẽ. Không cho phép IP lạ gọi Admin API." }
        ]
      },
      {
        phase: 2,
        title: "Nghiệp vụ nhạy cảm",
        progress: "50%",
        prompts: [
          { context: "@backend @database-architect", prompt: "Viết function transferMoney. BẮT BUỘC dùng Database Transaction. Tiền trừ bên A và cộng bên B phải xảy ra đồng thời. Nếu lỗi phải Rollback ngay. Log lại mọi thao tác vào bảng Audit." }
        ]
      },
      {
        phase: 3,
        title: "Rà soát (Audit)",
        progress: "20%",
        prompts: [
          { prompt: "/audit" },
          { context: "@compliance", prompt: "Quét toàn bộ code xem có chỗ nào log nhầm thông tin nhạy cảm (Số thẻ, SĐT) ra console không? Dự án này phải tuân thủ PCI-DSS." }
        ]
      }
    ]
  },
  {
    id: "blog",
    title: "Blog Cá nhân",
    icon: "✍️",
    difficulty: "easy",
    duration: "2-3 ngày",
    focus: ["SEO", "Tốc độ", "Nội dung"],
    description: "Xây dựng Personal Brand với blog portfolio, tối ưu SEO và Dark Mode.",
    tags: ["Next.js", "Markdown", "Vercel", "SEO"],
    phases: [
      {
        phase: 1,
        title: "Thiết lập cơ bản",
        progress: "40%",
        prompts: [
          { prompt: "/create (Personal)" },
          { context: "@seo-expert-kit", prompt: "Viết nội dung giới thiệu anh là Kỹ sư AI 5 năm kinh nghiệm. Nhúng thêm mấy từ khóa như 'AI Consultant', 'Machine Learning' để dễ lên Top Google." }
        ]
      },
      {
        phase: 2,
        title: "Feature Development",
        progress: "40%",
        prompts: [
          { context: "@frontend", prompt: "Thêm nút chuyển đổi Sáng/Tối ở góc phải. Lưu setting vào máy người dùng." }
        ]
      },
      {
        phase: 3,
        title: "Deploy",
        progress: "20%",
        prompts: [
          { prompt: "/deploy -> Đẩy lên Vercel giúp anh." }
        ]
      }
    ]
  },
  {
    id: "data-tool",
    title: "Tool Xử lý Data",
    icon: "🐍",
    difficulty: "medium",
    duration: "1 tuần",
    focus: ["Python", "Data", "Charts"],
    description: "Phát triển công cụ AI với Python cho xử lý dữ liệu Excel và visualization.",
    tags: ["Python", "Pandas", "Matplotlib", "Excel"],
    phases: [
      {
        phase: 1,
        title: "Setup Environment",
        progress: "20%",
        prompts: [
          { prompt: "/create (chọn Advanced - Python)" },
          { prompt: "Ok, copy lệnh cài Python chạy terminal cái đã." }
        ]
      },
      {
        phase: 2,
        title: "Data Processing",
        progress: "50%",
        prompts: [
          { context: "@data-engineer", prompt: "Dùng thư viện pandas đọc file sales.xlsx. Làm sạch dữ liệu: Xóa các dòng trống, điền giá trị 0 vào ô thiếu tiền." }
        ]
      },
      {
        phase: 3,
        title: "Visualization",
        progress: "30%",
        prompts: [
          { context: "@ai-engineer", prompt: "Dùng matplotlib vẽ biểu đồ đường doanh thu theo tháng. Xuất ra file chart.png." }
        ]
      }
    ]
  }
];
