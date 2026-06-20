---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/tab-completion/","tags":["tool/vibecoding/cursor"],"dg-note-properties":{"name":"Tab completion","type":"tool","tags":["tool/vibecoding/cursor"],"category":["tool","Vận hành / Kỹ thuật","vibecoding/ phải biết"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


### Tab completion

Predict next edit, not just next line
Cursor Tab completion hoạt động thế nào? khác GitHub Copilot không?

Đây là một trong những điểm khác biệt thực sự thú vị giữa hai tool.

**Copilot nghĩ theo dòng, Cursor nghĩ theo edit**

Copilot được train để predict _text tiếp theo_ — về bản chất nó là language model hoàn thành câu. Kết quả là nó rất tốt ở việc suggest dòng code kế tiếp khi bạn đang gõ từ đầu.

Cursor Tab được train khác: nó học từ hàng triệu _git diff_ — tức là các cặp "trước/sau" khi lập trình viên thực sự sửa code. Nên thay vì hỏi "dòng tiếp theo là gì?", nó hỏi "edit tiếp theo là gì?".

**Điều đó tạo ra sự khác biệt thực tế như thế này:**

```python
# Bạn đổi tên hàm ở đây...
def calculate_total_price(items):   # ← bạn vừa đổi từ get_price
    return sum(item.price for item in items)

# ...Cursor tự nhảy xuống đây và suggest sửa luôn
result = get_price(cart)  # ← Cursor gợi ý đổi thành calculate_total_price
                           # Copilot không làm được điều này
```

Cursor biết rằng khi bạn rename một thứ, bạn sẽ cần rename các chỗ dùng nó. Đây là _edit prediction_, không phải _text completion_.

**Cursor Tab cũng nhảy con trỏ**

Một tính năng ít được nói đến: sau khi bạn accept một suggestion, Cursor Tab tự di chuyển con trỏ đến vị trí _tiếp theo cần edit_ trong file, rồi suggest tiếp. Bạn chỉ cần nhấn Tab liên tục như một conveyor belt. Copilot không có behavior này — sau khi accept, con trỏ đứng yên.

**Khi nào Copilot vẫn tốt hơn?**

Copilot mạnh hơn khi bạn viết code mới từ đầu trong file trống — nó rất giỏi "đọc vị" pattern từ comment hoặc tên function rồi generate cả block. Cursor Tab thiên về sửa code có sẵn hơn là generate từ trống.

**Giá tiền**

Copilot có free tier (2,000 completions/tháng) và tích hợp sâu vào GitHub ecosystem. Cursor Tab đi kèm gói Cursor ($20/tháng) — bạn không trả riêng cho Tab, nó bundle chung với toàn bộ Cursor.

Tóm lại: nếu workflow của bạn chủ yếu là _sửa và refactor code có sẵn_ (đặc trưng của vibe coding — bạn generate rồi tweak liên tục), Cursor Tab thực sự phù hợp hơn. Nếu bạn hay viết boilerplate mới từ đầu, Copilot vẫn cạnh tranh được.