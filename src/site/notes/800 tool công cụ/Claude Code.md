---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/claude-code/","tags":["tool/vibecoding"],"dg-note-properties":{"name":"các tool phải biết và nên biết cho vibe coding","type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---



> Claude Code là gì? khác với Cursor thế nào?
> 
Claude Code và Cursor giải quyết cùng một vấn đề nhưng từ hai góc độ hoàn toàn khác nhau — IDE-first vs terminal-first. Hiểu sự khác biệt này giúp bạn chọn đúng tool cho đúng task.
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260621161403013.png)

---

**Sự khác biệt cốt lõi về paradigm**

Cursor là IDE — bạn ngồi trong editor, AI assist bạn từng bước. Bạn vẫn là người lái, AI ngồi ghế phụ.

Claude Code là terminal agent — bạn giao task, Claude tự lên plan, tự execute, tự fix lỗi, báo cáo khi xong. Bạn giao việc rồi làm thứ khác.

Điều này tạo ra hai workflow hoàn toàn khác nhau:

```
Cursor workflow:
Bạn → prompt → review diff → accept/reject → prompt tiếp
(interactive loop, bạn control từng bước)

Claude Code workflow:
Bạn → giao task → [Claude tự làm] → review kết quả
(fire and forget, Claude autonomous)
```

---

**Những tính năng Claude Code có mà Cursor không có**

**Agent Teams / Multi-agent** là thứ quan trọng nhất. Claude Code v2.0 thêm multi-agent support — Agent Teams feature cho phép nhiều Claude Code session chạy song song với shared task list. Bạn có thể assign: một agent viết tests, một agent implement feature, một agent review — tất cả chạy đồng thời.

**Auto mode** giảm interruption đáng kể. Auto mode dùng classifier để handle permission prompts — safe actions chạy không cần confirm, risky actions bị block. Middle ground giữa approve everything và `--dangerously-skip-permissions`.

**Computer use trong CLI.** Claude có thể mở native apps, click qua UI, và verify changes từ terminal — hữu ích để close the loop trên những thứ chỉ GUI mới verify được.

**CLAUDE.md** — memory file đặt ở root project, Claude đọc mỗi session. Define coding style, architecture decisions, commands hay dùng. Tương tự `.cursorrules` nhưng Claude follow rất chặt.

**Ultraplan.** Draft plan trong cloud từ CLI, review và comment trong web editor, rồi chạy remote hoặc pull về local.

---

**Git workflow: Claude Code thắng rõ**

Claude Code được design để work với git natively — tự tạo branch, tự commit với meaningful message, tự tạo PR description. Bạn prompt "implement feature X" và cuối session có một clean commit history, không phải đống thay đổi lộn xộn.

Cursor có `@git` để đọc history nhưng không có native git operation workflow như Claude Code.

---

**Khi nào dùng Claude Code thay Cursor**

Task lớn cần nhiều giờ không cần ngồi canh: "Refactor toàn bộ auth system sang JWT", "Migrate từ Pages Router sang App Router", "Thêm TypeScript strict mode và fix tất cả lỗi". Giao cho Claude Code, đi làm việc khác.

Codebase lớn cần đọc nhiều file để hiểu trước khi sửa: Claude Code index và hiểu cả repo tốt hơn khi task cần cross-file understanding sâu.

CI/CD integration: Claude Code chạy được trong GitHub Actions, headless, không cần GUI. Cursor không làm được điều này.

---

**Pattern nhiều người dùng — không phải either/or**

```
Cursor          →  daily coding, Tab completion,
                   inline edit, quick tasks

Claude Code     →  large refactors, autonomous tasks,
                   multi-agent workflows, CI integration
```

Claude Code's strength lies in its harness design, optimized specifically cho Claude models. Cursor optimize cho interactive experience. Hai tool bổ sung cho nhau hơn là thay thế nhau — và thực tế nhiều serious vibe coder dùng cả hai tùy context.
