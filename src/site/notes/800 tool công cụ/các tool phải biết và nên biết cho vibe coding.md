---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/cac-tool-phai-biet-va-nen-biet-cho-vibe-coding/","tags":["tool/vibecoding"],"dg-note-properties":{"name":"các tool phải biết và nên biết cho vibe coding","type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---


Đây là breakdown theo 2 tier:

**Phải biết** là những tool tạo thành core workflow của vibe coding — IDE AI (Cursor/Windsurf), LLM chính (Claude/GPT), builder nhanh (v0, Bolt), deploy (Vercel), backend không cần code (Supabase), và Tailwind để AI generate UI chuẩn.

**Nên biết** là lớp power-up — agent CLI (Claude Code, Cline), builder thêm (Lovable, Replit), research realtime (Perplexity), component library (shadcn/ui), và MCP servers để kết nối AI với tool bên ngoài.



## ✧ Phải biết - core work flow 

  
[[800 tool công cụ/Cursor\|Cursor]]

IDE AI-native #1. Tab completion, chat trong editor, agent tự sửa bug.

[[Windsurf\|Windsurf]]

IDE từ Codeium. Cascade agent mạnh, ít tốn token hơn Cursor.

[[Claude\|Claude]] (Anthropic)

LLM mạnh nhất cho code dài, kiến trúc, reasoning. Dùng qua API hoặc claude.ai.

[[ChatGPT\|ChatGPT]] / GPT-4o

Brainstorm, debug nhanh, giải thích concept. Tích hợp sẵn nhiều nơi.

[[v0 by Vercel\|v0 by Vercel]]

Prompt → UI component (React/Tailwind). Xuất code thẳng vào dự án.

[[Bolt.new\|Bolt.new]]

Full-stack app từ prompt, chạy ngay trên browser. Prototype cực nhanh.

[[GitHub Copilot\|GitHub Copilot]]

Inline suggestion trong VS Code. Tích hợp GitHub workflow, plan miễn phí.

[[Vercel / Netlify\|Vercel / Netlify]]

Deploy frontend 1 click. Preview URL tự động cho mỗi PR.

[[800 tool công cụ/Supabase\|Supabase]]

Backend-as-a-service: Postgres, Auth, Storage, Realtime. Không cần viết API.

[[800 tool công cụ/Tailwind CSS\|Tailwind CSS]]

AI generate Tailwind rất tốt. . Class-based, không cần đặt tên CSS.

## ✧ Nên biết — Power-up workflow

[[Claude Code\|Claude Code]]

CLI agent của Anthropic. Codebase-aware, chạy terminal, mạnh cho refactor lớn.

[[Lovable.dev\|Lovable.dev]]

Prompt → full app có UI đẹp. Tốt cho non-dev muốn build SaaS nhanh.

[[Replit Agent\|Replit Agent]]

Cloud IDE + AI agent. Deploy, database, hosting tất cả trong 1 nơi.

[[Perplexity AI\|Perplexity AI]]

Research nhanh: docs mới nhất, package, lỗi lạ — không bị cutoff.

[[Firebase\|Firebase]]

Google BaaS. Realtime DB, Auth, Hosting. AI biết Firebase rất rõ.

[[shadcn/ui\|shadcn/ui]]

Component library copy-paste. AI + shadcn = UI chuyên nghiệp cực nhanh.

[[Cline (VS Code ext)\|Cline (VS Code ext)]]

Agent mạnh trong VS Code, dùng được mọi LLM (Claude, GPT, Gemini).

[[Notion AI / Linear\|Notion AI / Linear]]

AI-assisted PRD, task breakdown. Viết spec xong dán thẳng vào Cursor.

[[Gemini CLI\|Gemini CLI]]

CLI agent của Google, context window lớn (1M token). Miễn phí tier rộng.

[[MCP Servers\|MCP Servers]]

Gắn tool ngoài (DB, GitHub, Figma…) vào AI agent. Chuẩn mở của Anthropic.