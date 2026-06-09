---
trigger: model_decision
description: "Khi người dùng hỏi về cập nhật, phiên bản, hoặc update của gói agent-skills-setup-for-antigravity."
---

# UPDATE.MD - Quy trình Cập nhật Hệ thống

> **Mục tiêu**: Đảm bảo người dùng luôn sử dụng phiên bản Antigravity IDE mới nhất và an toàn nhất.

---

## 🔄 1. NHẬN DIỆN NHU CẦU
Nếu người dùng sử dụng các từ khóa sau:
- "kiểm tra cập nhật", "update", "phiên bản mới nhất", "có bản mới không?"
- "phiên bản hiện tại là gì?", "check version"

---

## 🛠️ 2. QUY TRÌNH THỰC HIỆN

1. **Bước 1: Kiểm tra phiên bản cục bộ**: Đọc file `package.json` trong thư mục gốc của workspace.
2. **Bước 2: Kiểm tra phiên bản mới nhất trên npm**: 
   ```powershell
   npm view agent-skills-setup-for-antigravity version
   ```
3. **Bước 3: So sánh và Thông báo**:
   - Nếu `Local Version == NPM Version`: Thông báo người dùng đã ở bản mới nhất.
   - Nếu `Local Version < NPM Version`: 
     - Thông báo có bản mới.
     - Liệt kê một vài thay đổi (nếu có thể lấy từ changelog hoặc giả định).
     - **Hỏi xác nhận**: "Bạn có muốn tôi cập nhật lên phiên bản [NPM_VERSION] không?"

4. **Bước 4: Thực thi Cập nhật (Nếu người dùng đồng ý)**:
   ```powershell
   npm install -g agent-skills-setup-for-antigravity@latest
   ```
   Sau đó thông báo người dùng khởi động lại CLI hoặc chat tiếp.

---

## 🚨 3. LƯU Ý AN TOÀN
- Luôn hỏi xác nhận trước khi chạy lệnh `npm install -g`.
- Nếu lệnh lỗi, hướng dẫn người dùng chạy thủ công bằng quyền Admin.
