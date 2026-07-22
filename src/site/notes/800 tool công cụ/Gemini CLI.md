---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/gemini-cli/","tags":["tool/vibecoding"],"dg-note-properties":{"name":"các tool phải biết và nên biết cho vibe coding","type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---

Gemini CLI ra tháng 6/2025, được Google quảng cáo mạnh vì một điểm: **free với context window khổng lồ**. Câu hỏi thực tế là nó có đủ tốt để thay Claude Code trong workflow hàng ngày không.Data từ các benchmark thực tế 2025-2026. Đây là picture đầy đủ nhất hiện tại.

---

**Gemini CLI là gì**

Gemini CLI là open-source AI coding agent cho terminal của Google, ra mắt ngày 25/6/2025 — đạt 15,000 GitHub stars trong 24 giờ đầu và vượt 55,000 stars. Licensed Apache 2.0, fully open source, inspectable, forkable.

Về cơ bản nó là terminal agent tương tự Claude Code: đọc codebase, edit file, chạy command, iterate — nhưng dùng Gemini model thay vì Claude.

---

**Điểm khác biệt thực sự — data từ benchmark**
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260621161207834.png)

---

**Một điểm quan trọng bị hiểu sai nhiều: context window**

Nhiều bài viết 2025 nói Gemini CLI có 1M token còn Claude Code chỉ có 200K. Thông tin này đã lỗi thời — cả Claude Sonnet 4.6 và Claude Opus 4.7 hiện đều hỗ trợ 1M token context window. Context gap không còn tồn tại nữa kể từ đầu 2026.

---

**Free tier — thứ mọi người nhắc nhiều nhất**

Gemini CLI hoàn toàn miễn phí với bất kỳ Google account nào, cho 1,000 requests mỗi ngày và 60 requests mỗi phút — không cần setup billing.

Nhưng có một caveat quan trọng: Trên free tier, Gemini CLI mặc định dùng Gemini 3 Flash, không phải Gemini 3.1 Pro. Real Python benchmark phát hiện Flash output "thiếu type hints, module-level docstrings, và input validation một cách nhất quán" — những gap về production-readiness thêm debugging overhead về sau.

---

**Code quality và autonomy: Claude Code vẫn hơn**

Trong benchmark build CLI tool phức tạp của Composio: Claude Code hoàn thành trong 1 giờ 17 phút với full autonomy, Gemini CLI mất 2 giờ 2 phút và cần manual nudging. Claude tốn $4.80, Gemini tốn $7.06 vì nhiều retry hơn.

Về token efficiency: DataCamp tìm thấy Gemini CLI dùng 432K input tokens so với 261K của Claude Code cho cùng một task — overhead 65% đáng kể trên pay-per-token plans.

---

**Khi nào Gemini CLI là lựa chọn đúng**

Gemini CLI được build cho speed và flexibility, bao gồm fast prototyping và Google Cloud workflows. Cụ thể:

Bạn muốn thử terminal agent mà chưa chắc có commit không — free tier cho bạn evaluate thực sự mà không tốn tiền.

Bạn deep trong Google ecosystem — BigQuery, Cloud Run, Vertex AI, Google Workspace. Gemini CLI đến với Google Cloud Shell pre-installed và hỗ trợ native cho các service này.

Bạn cần multimodal — Gemini CLI accept images, PDFs, và audio làm input alongside text. Hữu ích khi cần describe UI từ screenshot hay đọc diagram.

---

**Khi nào Claude Code vẫn tốt hơn**

Production codebase cần quality cao, complex multi-file refactor, hoặc bạn cần agent chạy autonomously mà không interrupt nhiều. Claude Code produces cleaner code, chạy autonomous hơn, và handle complex multi-file refactors tốt hơn.

---

**Verdict: không phải either/or**

Nhiều developer dùng cả hai. Hybrid approach phổ biến nhất trong community: Gemini cho exploration, Claude cho implementation.

Workflow thực tế: dùng Gemini CLI miễn phí để research approach, test idea, explore codebase lạ. Khi đã biết chính xác cần làm gì, switch sang Claude Code để implement sạch và autonomous hơn.