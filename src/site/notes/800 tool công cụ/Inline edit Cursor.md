---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/inline-edit-cursor/","tags":["tool/vibecoding/cursor"],"dg-note-properties":{"name":null,"type":"tool","tags":["tool/vibecoding/cursor"],"category":["tool","Vận hành / Kỹ thuật","vibecoding/ phải biết"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


### Inline edit (Cmd+K)
Chọn code, prompt sửa tại chỗ
Cursor Cmd+K inline edit dùng thế nào hiệu quả nhất?

Cmd+K là tính năng "phẫu thuật" — thay vì nhờ AI viết lại cả file, bạn khoanh vùng chính xác chỗ cần sửa. Đây là cách dùng hiệu quả nhất:

---

**Nguyên tắc cốt lõi: bôi đen càng chính xác, kết quả càng tốt**

AI chỉ thấy đoạn bạn bôi đen + vài dòng context xung quanh. Bôi đen cả file → AI bị loãng context. Bôi đen đúng function cần sửa → AI tập trung 100% vào đó.

---

**5 use case hiệu quả nhất**

**1. Refactor một function**

```js
// Bôi đen cả function này, Cmd+K:
// "refactor dùng early return, bỏ else lồng nhau"
function processUser(user) {
  if (user) {
    if (user.active) {
      if (user.role === 'admin') {
        return doAdminStuff(user)
      } else {
        return doUserStuff(user)
      }
    }
  }
  return null
}
```

**2. Thêm error handling**

```ts
// Bôi đen function, Cmd+K:
// "wrap trong try/catch, throw error có message rõ ràng"
async function fetchUser(id: string) {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
```

**3. Đổi từ một pattern sang pattern khác**

```js
// Bôi đen đoạn callbacks, Cmd+K:
// "convert sang async/await"
getUserById(id, function(err, user) {
  getPostsByUser(user.id, function(err, posts) {
    renderPage(posts, function(err) { ... })
  })
})
```

**4. Thêm TypeScript types**

```ts
// Bôi đen function signature, Cmd+K:
// "thêm proper TypeScript types"
function createProduct(name, price, category, inStock) {
  return { name, price, category, inStock }
}
```

**5. Viết code vào vùng trống (không cần bôi đen)**

```ts
// Đặt con trỏ vào dòng trống, Cmd+K:
// "viết function validate email trả về boolean"

// ← Cursor generate vào đây
```

---

**Workflow thực tế: dùng diff view**

Sau khi Cursor generate, nó hiện diff ngay trong editor — xanh là thêm, đỏ là xóa. Bạn có 3 lựa chọn:

- `Tab` / `Accept` — apply toàn bộ thay đổi
- `Esc` — reject, giữ nguyên code cũ
- Chỉnh sửa prompt rồi regenerate — nếu kết quả chưa đúng ý

Tip quan trọng: đừng vội Accept ngay. Đọc diff trước — đôi khi AI sửa đúng chỗ bạn muốn nhưng lại remove một behavior quan trọng ở chỗ khác.

---

**Prompt ngắn thắng prompt dài**

Cmd+K hoạt động tốt nhất với prompt ngắn, rõ động từ:

|Thay vì|Dùng|
|---|---|
|"làm cho code này tốt hơn và dễ đọc hơn"|"extract thành 3 function nhỏ"|
|"sửa lỗi trong đây"|"fix off-by-one error trong vòng lặp"|
|"thêm tính năng mới vào đây"|"thêm pagination, limit 20 items/page"|

---

**Cmd+K vs Composer — khi nào dùng cái nào?**

Dùng Cmd+K khi bạn biết chính xác _chỗ nào_ cần sửa và sửa _gì_. Một hàm, một block, một đoạn logic cụ thể.

Chuyển sang Composer (Cmd+I) khi task cần đụng nhiều file, hoặc bạn chưa biết AI sẽ cần sửa ở đâu — ví dụ "thêm dark mode cho toàn app" hay "tạo CRUD API cho entity này".