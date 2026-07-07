# Nhật ký vá lỗ hổng bảo mật dependencies

## 2026-07-08 — Vá 17 lỗ hổng qua `npm audit fix`

### Vì sao sửa
GitHub Dependabot báo lỗ hổng trên nhánh `main` (con số Dependabot hiển thị
~63, tính theo nhiều alert/manifest khác nhau; `npm audit` chạy trực tiếp
trên `package-lock.json` ở root cho ra 17 lỗ hổng riêng biệt: **2 critical,
10 high, 5 moderate**). Toàn bộ đều nằm ở `devDependencies` / build-time
tooling (Eleventy, Vite, các plugin markdown...) — không phải code chạy
trên trình duyệt người dùng cuối, nhưng vẫn nên vá vì:
- `liquidjs` (critical) và `shell-quote` (critical) có thể bị khai thác
  nếu input không kiểm soát lọt vào pipeline build.
- Phần lớn còn lại là lỗi ReDoS (regex khiến CPU treo khi gặp input đặc
  biệt) ở `axios`, `glob`, `minimatch`, `picomatch`, `linkify-it`, `ws`,
  `vite`, `form-data`, `flatted`, `immutable`.

### Đã sửa thế nào
Chạy `npm audit fix` 2 lần liên tiếp tại root repo:
```
npm audit fix   # vá 16/17, còn lại picomatch
npm audit fix   # vá nốt picomatch
```
Không có breaking change nào cần sửa tay — tất cả đều có bản vá tương thích
ngược (`fixAvailable: true`), chỉ nâng version trong `package-lock.json`.
`package.json` (version ranges khai báo) **không đổi** — chỉ resolve lại
sub-dependency trong lockfile.

### Xác minh sau khi vá
- `npm audit` → `found 0 vulnerabilities`
- `npm run build` chạy sạch, không lỗi, ghi ra đúng 58 file (khớp số bài
  đang publish trên site tại thời điểm vá).

### Danh sách các gói được vá
`axios`, `brace-expansion`, `flatted`, `follow-redirects`, `form-data`,
`glob`, `immutable`, `js-yaml`, `linkify-it`, `liquidjs` (critical),
`markdown-it`, `minimatch`, `picomatch`, `postcss`, `shell-quote`
(critical), `vite`, `ws`.

### Nếu lần sau Dependabot lại báo
1. Chạy `npm audit` để xem danh sách + severity.
2. Nếu tất cả đều `fixAvailable: true` → chạy `npm audit fix`, build thử,
   commit lockfile.
3. Nếu có gói cần bump major version (không tự động) → `npm audit fix` sẽ
   *không* tự sửa, cần đọc changelog gói đó trước khi nâng tay, vì có thể
   breaking.
