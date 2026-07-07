---
{"dg-publish":true,"permalink":"/800 tool công cụ/shadcn UI/","tags":["tool/vibecoding"],"dg-note-properties":{"name":"các tool phải biết và nên biết cho vibe coding","type":"tool","tags":["tool/vibecoding"],"category":["tool","Vận hành / Kỹ thuật","vibecoding"],"pricing":null,"priority":"⭐⭐⭐","is_fit":null}}
---



shadcn/ui là một trong những thứ thay đổi cách mọi người build UI — và nó hot với vibe coding vì một lý do rất cụ thể, không phải vì marketing.

---

**shadcn/ui không phải component library thông thường**

Đây là điểm quan trọng nhất cần hiểu. Với Material UI hay Chakra UI, bạn `npm install` rồi import component — code nằm trong `node_modules`, bạn không sở hữu nó, không sửa được source.

shadcn/ui hoạt động khác hoàn toàn: bạn chạy CLI, nó **copy source code của component thẳng vào project của bạn**. Component nằm trong `src/components/ui/`, bạn đọc được, sửa được, xóa được.

```bash
# Không phải install như library thông thường
npx shadcn@latest add button
# → Tạo file src/components/ui/button.tsx trong project của bạn
# → Bạn sở hữu file đó hoàn toàn
```

---

**Tại sao model này phù hợp với vibe coding đến vậy**
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260621160852542.png)
Khi AI nhờ customize Button component của MUI, nó phải dùng `sx` prop, `styled()`, hoặc theme override — indirect, verbose, dễ conflict. Với shadcn, AI mở thẳng `button.tsx` và sửa — direct, clean, không magic.

---

**Stack của shadcn và tại sao nó được chọn**

shadcn build trên ba thứ:

**Radix UI** — headless component primitives. Cung cấp behavior (accessibility, keyboard navigation, ARIA attributes) mà không có style. Bạn không thấy Radix trong UI, nhưng nó là lý do shadcn accessible từ đầu mà không cần config.

**Tailwind CSS** — tất cả styling đều là Tailwind classes. AI generate Tailwind rất tốt, và vì style nằm ngay trong JSX, AI đọc và sửa trong một file.

**CSS variables** — màu sắc và design tokens được define qua CSS variables, không hardcode. Đổi theme chỉ cần đổi variables, mọi component update tự động.

```tsx
// Một button shadcn trông như thế này — AI đọc được hoàn toàn
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
```

---

**Component library đầy đủ**

shadcn có đủ mọi thứ cần cho web app hiện đại:

Layout: Card, Separator, Sheet, Dialog, Drawer, Popover, Tooltip

Forms: Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Date Picker

Data: Table, Data Table (với TanStack Table), Badge, Avatar

Navigation: Tabs, Breadcrumb, Pagination, Navigation Menu, Command

Feedback: Alert, Toast (Sonner), Progress, Skeleton, Spinner

---

**Workflow vibe coding thực tế với shadcn**

Setup một lần lúc tạo project:

```bash
npx create-next-app@latest my-app
cd my-app
npx shadcn@latest init
# Chọn theme, màu base, CSS variables
```

Sau đó trong Cursor, prompt tự nhiên:

```
Tạo trang settings với:
- Form đổi display name và email dùng shadcn Input
- Upload avatar dùng shadcn Avatar
- Toggle notification preferences dùng shadcn Switch
- Save button dùng shadcn Button variant="default"
- Danger zone: delete account dùng shadcn Button variant="destructive"
  với shadcn AlertDialog để confirm
```

Cursor biết chính xác shadcn API, generate đúng ngay lần đầu, không cần iterate nhiều.

**Một trick hay:** Dùng `v0.dev` để generate UI với shadcn, sau đó import vào Cursor. v0 cũng được train trên shadcn nên output compatible hoàn toàn — copy code từ v0, paste vào project, chạy ngay.

---

**Dark mode miễn phí**

shadcn dùng CSS variables + Tailwind dark mode. Bạn thêm `dark` class vào `<html>` tag, toàn bộ app đổi sang dark theme mà không cần viết thêm một dòng CSS nào. Với `next-themes`:

```tsx
// Đây là toàn bộ code cần thiết cho dark mode toggle
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </Button>
  )
}
```

---

**Một giới hạn cần biết**

Vì bạn sở hữu code, khi shadcn release component version mới bạn không auto-update như npm package — phải chạy lại CLI hoặc merge tay. Với vibe coding thì không phải vấn đề lớn vì bạn hiếm khi cần update component đã customize. Nhưng nếu bạn customize nhiều rồi muốn lấy design mới của shadcn, cần merge cẩn thận.