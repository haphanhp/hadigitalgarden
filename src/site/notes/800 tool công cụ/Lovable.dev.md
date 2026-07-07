---
{"dg-publish":true,"permalink":"/800 tool công cụ/Lovable.dev/","tags":["tool/vibecoding"],"dg-note-properties":{"name":null,"type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


Lovable.dev dùng cho vibe coding thế nào?

Lovable là tool mà nhiều non-developer dùng để ship product thật — không phải prototype, không phải demo, mà app có user thật đang dùng.

---

**Lovable là gì**

Lovable (trước đây là GPT Engineer) là AI full-stack app builder — bạn describe app bằng ngôn ngữ tự nhiên, Lovable generate cả frontend lẫn backend, deploy luôn, và cho bạn URL có thể share ngay. Stack mặc định là React + Tailwind + shadcn/ui ở frontend, Supabase ở backend.

Điểm khác biệt với Bolt.new: Lovable được design để build _product có thật_ hơn là prototype nhanh. UI output của Lovable thường polish hơn, Supabase integration sâu hơn, và có GitHub sync để bạn có thể tiếp tục trong Cursor khi cần.

---

**So sánh nhanh với các tool tương tự**
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260621155918715.png)

---
**Điểm khác biệt thực sự so với Bolt.new**

Cả hai đều "prompt → full app", nhưng design philosophy khác nhau.

Bolt ưu tiên tốc độ — bạn có app chạy được trong vài phút, trade-off là UI thường basic hơn và app khó maintain khi lớn lên.

Lovable ưu tiên polish và maintainability — UI output thường đẹp hơn từ đầu, component structure sạch hơn, và Supabase được wire đúng cách hơn (RLS policies, proper schema). Đổi lại, mỗi change tốn nhiều credit hơn và đôi khi chậm hơn Bolt.

**Figma to Lovable** là workflow nhiều designer-turned-founder dùng: design trong Figma, import vào Lovable, AI convert thành React code giữ đúng layout và màu sắc. Đây là thứ Bolt không có.

---

**Workflow thực tế**

**Prompt hiệu quả với Lovable**

Lovable respond tốt với prompt mô tả _user experience_, không phải _technical spec_:

```
Build một app giúp freelancer track thời gian làm việc:

- Landing page với hero section và pricing
- Đăng nhập bằng Google
- Dashboard: timer bắt đầu/dừng với project selector
- Trang projects: CRUD, mỗi project có màu và hourly rate
- Trang reports: tổng giờ và revenue theo tháng, export CSV
- UI tông màu dark, professional, dùng shadcn/ui
```

Lovable tạo schema Supabase, auth flow, toàn bộ UI — trong một lần.

**Iterate bằng chat**

Sau khi app có, tiếp tục trong chat sidebar:

```
Thêm biểu đồ bar chart vào reports page, 
hiển thị giờ làm theo từng ngày trong tháng
```

```
Bảng projects cần có cột "Total earned" 
tính từ hours × hourly rate
```

```
Fix bug: timer đang reset khi tôi refresh trang
```

Mỗi message là một iteration — Lovable sửa code, deploy lại, bạn thấy kết quả ngay.

---

**GitHub sync — bridge quan trọng nhất**

Lovable có thể sync 2 chiều với GitHub repo. Đây là feature biến Lovable từ "toy" thành "real workflow":

Bạn build base app trong Lovable — nhanh, không cần setup local.

Sync lên GitHub khi app đủ shape.

Clone về local, mở Cursor để handle logic phức tạp, custom integration, hay những thứ Lovable AI bắt đầu struggle.

Push lên GitHub, Lovable tự pull về và tiếp tục sync.

Hai tool bổ sung cho nhau — Lovable cho UI và CRUD nhanh, Cursor cho business logic và edge cases.

---

**Khi nào Lovable là lựa chọn đúng**

Bạn không phải developer nhưng muốn build SaaS: Lovable là tool ít đòi hỏi technical background nhất trong nhóm full-stack builders.

Validate idea trước khi invest vào engineering: build MVP trong một buổi, test với real user, quyết định có đáng build tiếp không.

Bạn là designer muốn ship thứ mình design: Figma import + Lovable là pipeline ngắn nhất từ design đến deployed app.

Solo founder cần move fast: không cần hire frontend dev để có landing page + auth + dashboard đẹp.

---

**Giới hạn cần biết trước**

Credit system của Lovable tính theo số lượng AI "actions" — mỗi lần generate hoặc edit tốn credit. App phức tạp hoặc nhiều vòng iterate có thể hết credit nhanh hơn bạn nghĩ. Free tier ($0) cho 5 projects và limited credits. Pro ($25/tháng) cho unlimited projects và nhiều credit hơn đáng kể.

Khi app đủ phức tạp — nhiều business logic, nhiều edge case, cần performance optimization — Lovable AI bắt đầu introduce bugs khó trace. Đây là dấu hiệu rõ nhất để export ra Cursor và tiếp tục ở đó.