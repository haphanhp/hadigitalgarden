---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/firebase/","tags":["tool/vibecoding"],"dg-note-properties":{"name":null,"type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


> Firebase vs Supabase, nên dùng cái nào cho side project?


Câu hỏi này có câu trả lời khác nhau tùy vào stack và priority của bạn — không phải "cái nào tốt hơn" mà là "cái nào phù hợp hơn với context của bạn".

---

**Sự khác biệt cốt lõi về triết lý**

Firebase là Google ecosystem — NoSQL document store (Firestore), design để scale tự động, mobile-first từ đầu, và lock bạn vào Google Cloud. Mọi thứ managed hoàn toàn, bạn không thấy infrastructure.

Supabase là open-source, xây trên PostgreSQL thật — relational database với full SQL power, có thể self-host nếu muốn, và được build cho web developer hiện đại. Infrastructure visible hơn nhưng cũng controllable hơn.
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260621160536021.png)

---

**Vấn đề thực sự của Firebase với vibe coding: query**

Firestore là NoSQL document store. Điều đó có nghĩa là không có JOINs, không có aggregation phức tạp, không có GROUP BY. Khi app của bạn cần query như thế này:

```sql
-- Supabase làm được dễ dàng
SELECT 
  users.name,
  COUNT(orders.id) as total_orders,
  SUM(orders.amount) as total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE orders.created_at > NOW() - INTERVAL '30 days'
GROUP BY users.id
ORDER BY total_spent DESC
LIMIT 10
```

Với Firestore bạn phải fetch nhiều collection riêng, join ở client side, hoặc dùng Cloud Functions để xử lý — tốn nhiều code hơn, và AI generate code phức tạp hơn nhiều.

Với Supabase, paste câu SQL trên vào Cursor là xong.

---

**Khi Firebase vẫn là lựa chọn đúng**

**Build mobile app (React Native, Flutter):** Firebase SDK cho mobile mature hơn, offline sync tốt hơn, push notification integration sẵn. Supabase có SDK mobile nhưng chưa đến level Firebase.

**App cần realtime cực mạnh:** Chat app, collaborative tool, multiplayer game — Firestore được thiết kế cho realtime từ đầu, latency thấp hơn, client SDK handle reconnect tốt hơn.

**Bạn đã trong Google ecosystem:** Nếu dùng Google Cloud, Firebase Authentication tích hợp với Identity Platform, Cloud Run, BigQuery — ecosystem advantage thực sự.

**App cần scale đột ngột không báo trước:** Firebase auto-scale là thật, không cần config. Supabase Pro plan cần upgrade manual khi database hits limit.

---

**Khi Supabase là lựa chọn đúng — và đây là phần lớn side project**

Data có relationship: users, orders, products, categories — relational data fit PostgreSQL tự nhiên hơn NoSQL.

Bạn biết SQL hoặc muốn AI generate SQL: SQL là ngôn ngữ AI biết rất rõ. Cursor generate Supabase query chính xác và dễ debug hơn Firestore query chains.

Bạn dùng Lovable, Bolt, hay v0: những tool này đều có Supabase integration native, không ai có Firebase integration tương đương.

Bạn quan tâm đến vendor lock-in: Supabase là PostgreSQL — bạn có thể export data ra và chạy trên Neon, Railway, hay self-hosted Postgres bất cứ lúc nào.

---

**Một rule of thumb đơn giản**

Nếu bạn nghĩ về data theo dạng _bảng và quan hệ_ — Supabase. Nếu bạn nghĩ về data theo dạng _documents và collections_ — Firebase. Phần lớn web app và SaaS side project tự nhiên fit relational model hơn, nên Supabase thắng trong majority of cases.

Với vibe coding thuần túy năm 2025 — build nhanh, web app, dùng Cursor/Lovable/Bolt — **Supabase là default tốt hơn**. Firebase vẫn có use case rõ ràng nhưng không còn là lựa chọn mặc định cho mọi thứ nữa.