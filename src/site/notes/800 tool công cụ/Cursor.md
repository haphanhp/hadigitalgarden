---
{"dg-publish":true,"permalink":"/800 tool công cụ/Cursor/","tags":["tool/vibecoding"],"dg-note-properties":{"name":null,"type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding/ phải biết"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


Cursor là IDE được xây dựng lại từ đầu để AI là trung tâm, không phải plugin thêm vào. Dưới đây là breakdown đầy đủ.Bấm vào từng block để tìm hiểu sâu hơn. Dưới đây là giải thích chi tiết từng tính năng:
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260620120608645.png)
![[800 tool công cụ/Cursor cấu trúc.canvas\|Cursor cấu trúc.canvas]]


---

**Tab completion — "predict next edit"**

Khác Copilot chỉ suggest dòng tiếp theo, Cursor Tab dự đoán _edit tiếp theo bạn sẽ làm_ dựa trên context xung quanh. Ví dụ bạn đổi tên biến ở dòng 10, nó tự biết bạn sẽ cần đổi ở dòng 25, 47. Nhấn Tab để accept từng bước.

**Inline edit — Cmd+K**

Bôi đen đoạn code → nhấn Cmd+K → gõ yêu cầu bằng tiếng Việt cũng được. Cursor sửa ngay tại chỗ, hiện diff để bạn accept/reject. Dùng cho: refactor function, thêm error handling, đổi logic nhỏ.

**Chat — Cmd+L**

Chat sidebar có full context của file đang mở. Quan trọng là bạn có thể dùng `@` để kéo thêm context:

- `@file` — đính kèm file cụ thể
- `@codebase` — tìm kiếm toàn repo
- `@docs` — kéo docs từ thư viện (React, Tailwind, v.v.)
- `@web` — search realtime

**Composer / Agent — Cmd+I (quan trọng nhất)**

Đây là điểm khác biệt lớn nhất. Agent mode cho phép Cursor:

- Tạo và sửa nhiều file cùng lúc
- Chạy lệnh terminal tự động
- Tự detect lỗi, fix, chạy lại
- Loop liên tục cho đến khi task xong

Workflow vibe coding điển hình: bạn prompt `"Tạo trang login với form email/password, dùng Supabase auth, Tailwind"` → Agent tự tạo component, cập nhật route, install package nếu cần.

---

**Một vài tip thực tế:**

`.cursorrules` — file đặt ở root dự án, viết rules cho AI (stack dùng, convention, những gì không được làm). Mỗi lần AI generate code đều tuân theo rules này.

`Ctrl+Enter` trong Composer — chạy Agent mode thay vì normal mode. Agent mode tốn nhiều token hơn nhưng tự handle multi-step tasks.

Model picker — Cursor cho chọn model: Claude Sonnet/Opus cho code phức tạp, GPT-4o cho tác vụ nhanh, cursor-small cho tab completion (miễn phí, nhanh).