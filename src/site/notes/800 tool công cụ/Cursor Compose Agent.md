---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/cursor-compose-agent/","tags":["tool/vibecoding/cursor"],"dg-note-properties":{"name":"Cursor Compose Agent","type":"tool","tags":["tool/vibecoding/cursor"],"category":["tool","Vận hành / Kỹ thuật","vibecoding/ phải biết"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


### Composer / Agent mode (Cmd+I)
Tự động tạo, sửa, xóa nhiều file — chạy terminal, install package, fix bug liên tục
*đây là tính năng mạnh nhất của Cursor*

Agent mode là thứ biến Cursor từ "AI trợ lý" thành "AI đồng nghiệp" — nó không chờ bạn chỉ đạo từng bước, mà tự lên kế hoạch và thực thi đến khi xong.

---

**Sự khác biệt cốt lõi: reactive vs agentic**

Mọi tính năng khác của Cursor (Tab, Cmd+K, Chat) đều _reactive_ — bạn hỏi, AI trả lời, bạn quyết định bước tiếp theo. Agent mode là _agentic_ — bạn đưa ra mục tiêu, AI tự chia nhỏ thành steps, tự thực thi, tự kiểm tra kết quả, tự fix nếu sai.
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260620133947227.png)

---

**Những gì Agent có thể làm mà các mode khác không làm được**

Agent có quyền truy cập vào một bộ tool thực sự:

- Đọc và ghi bất kỳ file nào trong repo
- Chạy lệnh terminal tùy ý (`npm install`, `python manage.py migrate`, `git`...)
- Tìm kiếm trong codebase
- Fetch web khi cần docs mới
- Đọc output của lệnh vừa chạy rồi quyết định bước tiếp theo

Sự kết hợp này tạo ra loop tự động: chạy → thấy lỗi → sửa → chạy lại → pass → done.

---

**Ví dụ prompt thực tế**

Đây là loại task Agent xử lý tốt — bạn chỉ cần viết một prompt:

```
Tạo trang /dashboard/products với:
- Bảng hiển thị products từ Supabase
- Có thể filter theo category
- Có thể sort theo price và name  
- Pagination 20 items/page
- Loading skeleton khi fetch
- Dùng shadcn/ui Table component
```

Agent sẽ tự: tạo file page, tạo component, viết Supabase query, install shadcn Table nếu chưa có, update route, kiểm tra TypeScript errors, fix nếu có.

---

**Cách dùng hiệu quả**

Mở Composer bằng `Cmd+I`, sau đó nhấn nút chuyển sang Agent mode ở góc dưới. Có hai điểm quan trọng cần nhớ khi dùng:

Viết goal, không viết steps. Agent tự biết cần làm gì — bạn chỉ cần mô tả kết quả muốn có. Prompt kiểu "tạo auth flow với email/password dùng Supabase" tốt hơn nhiều so với "bước 1 tạo file này, bước 2 viết function kia".

Luôn review trước khi accept. Agent hiện diff của mọi thứ nó sửa — đừng nhấn Accept All mà không đọc. Đặc biệt với các lệnh terminal, Cursor hỏi permission trước khi chạy nếu bạn bật chế độ đó trong settings.

---

**Khi nào không nên dùng Agent**

Agent tốn nhiều token và thời gian hơn các mode khác. Với task nhỏ như sửa một function hay thêm một field, dùng Cmd+K nhanh hơn nhiều. Agent phù hợp nhất khi task cần đụng nhiều file, khi bạn chưa chắc cần sửa chỗ nào, hoặc khi muốn build một feature hoàn chỉnh từ đầu.