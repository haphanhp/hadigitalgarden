---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/cursor-chat/","tags":["tool/vibecoding/cursor"],"dg-note-properties":{"name":null,"type":"tool","tags":["tool/vibecoding/cursor"],"category":["tool","Vận hành / Kỹ thuật","vibecoding/ phải biết"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


### Chat (Cmd+L)
Hỏi đáp về code, có file context
> Cursor Chat khác với ChatGPT thế nào? có context codebase không?
> 
Đây là điểm mà nhiều người dùng Cursor bị underestimate — Chat không chỉ là ChatGPT gắn vào editor, nó khác về cơ bản ở chỗ _AI biết bạn đang làm gì_.

---

**Vấn đề cốt lõi của ChatGPT khi code**

Khi dùng ChatGPT, bạn phải copy-paste code vào chat, giải thích context, paste lỗi, paste file liên quan... Mỗi lần hỏi là một cuộc hội thoại mới bắt đầu từ zero. AI không biết bạn đang dùng Next.js 14 hay Next.js 12, không biết cái `useAuth` hook của bạn trả về gì, không biết folder structure ra sao.

Cursor Chat giải quyết đúng vấn đề này.

---

**Hệ thống `@` — cách kéo context vào chat**Bấm vào từng node để tìm hiểu sâu hơn.
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260620122926902.png)
![[Cách kéo context vào chat.canvas\|Cách kéo context vào chat.canvas]]

---

**Sự khác biệt thực tế — cùng một câu hỏi, hai tool khác nhau**

Giả sử bạn đang build app Next.js + Supabase và hỏi: _"Tại sao user bị logout sau khi refresh?"_

Với ChatGPT, bạn phải paste toàn bộ auth code, giải thích stack đang dùng, paste lỗi nếu có. AI trả lời theo kiểu generic.

Với Cursor Chat, bạn chỉ gõ câu hỏi đó rồi thêm `@codebase`. Cursor tự tìm `useAuth.ts`, `middleware.ts`, `supabase/client.ts` — những file liên quan — rồi trả lời dựa trên code thực của bạn. Nó có thể nói "dòng 23 trong `middleware.ts` của bạn đang dùng `getSession()` thay vì `getUser()`, đây là lý do..."

---

**Apply to file — thứ ChatGPT không có**

Khi Cursor Chat trả về code, có nút "Apply" ngay bên cạnh code block. Nhấn Apply → Cursor tự tìm đúng file, tự diff, tự chèn vào đúng chỗ. Không cần copy-paste tay.

ChatGPT trả về code trong chat, bạn tự copy, tự mở file, tự tìm chỗ dán.

---

**`@docs` — killer feature ít người biết**

Bạn add docs của bất kỳ thư viện nào vào Cursor một lần (ví dụ Supabase, Stripe, Shadcn). Từ đó về sau, AI luôn có docs mới nhất khi bạn hỏi về thư viện đó — không bị cutoff knowledge như ChatGPT.

```
@docs Làm sao dùng Supabase realtime subscription với Next.js App Router?
```

AI trả lời theo đúng API version bạn đang dùng, không phải version cũ trong training data.

---

**Khi nào vẫn nên dùng ChatGPT?**

Cursor Chat tốt hơn cho mọi thứ liên quan đến codebase cụ thể của bạn. ChatGPT vẫn hữu ích khi bạn muốn brainstorm kiến trúc từ đầu, hỏi concept chung không liên quan đến code, hoặc dùng nhanh trên điện thoại không có Cursor.