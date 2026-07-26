---
{"dg-publish":true,"permalink":"/800-tool-cong-cu/sop/in-file-tu-dong-dinh-ky-moi-3-ngay-de-chong-viec-may-in-bi-kho-muc-dau-kim-phun/","tags":["huong-dan","SOP","tech/automation",null],"dg-note-properties":{"tags":["huong-dan","SOP","tech/automation",null]}}
---


> Mỗi lần chạy power cleaning rất tốn mực mà chỉ cần 15 ngày không in là đã đủ cho nó khô mực đầu kim 

## Tạo file in:
tui gửi một file word mà tui in mỗi ngày nhờ claude add dải màu vào đó vừa sử dụng để ghi chép hàng ngày vừa test màu được 
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260726152208826.png) check list này để xoay vòng thời gian sử dụng của các acc AI cái nào đang xử lý việc gì để follow up, mốc thời gian là khi acc reset chu kỳ để cấp token mới. 

> [!note]- 🏷️ mã code
> 
> ```from docx import Document
> from docx.shared import Inches, Pt, RGBColor
> from docx.enum.section import WD_ORIENT
> from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
> from docx.enum.text import WD_ALIGN_PARAGRAPH
> from docx.oxml import OxmlElement
> from docx.oxml.ns import qn
> 
> out = "/mnt/data/mau_test_may_in_4_mau.docx"
> 
> doc = Document()
> section = doc.sections[0]
> section.orientation = WD_ORIENT.LANDSCAPE
> section.page_width = Inches(11.69)
> section.page_height = Inches(8.27)
> section.top_margin = Inches(0.35)
> section.bottom_margin = Inches(0.35)
> section.left_margin = Inches(0.35)
> section.right_margin = Inches(0.35)
> 
> table = doc.add_table(rows=12, cols=6)
> table.alignment = WD_TABLE_ALIGNMENT.CENTER
> table.autofit = False
> 
> widths = [Inches(0.75), Inches(0.90), Inches(0.90), Inches(0.90), Inches(0.90), Inches(6.65)]
> headers = ["NO", "Thời gian", "Thời gian", "Thời gian", "Thời gian", "Issues"]
> 
> # Header: xanh nhạt, xanh, vàng, hồng, trắng, trắng
> header_colors = ["D9EAF7", "4472C4", "FFD966", "E6B8D7", "FFFFFF", "FFFFFF"]
> 
> # Các dải màu để test máy in: Xanh, Vàng, Hồng, Trắng/Xám nhạt
> row_colors = [
>     "D9EAF7", "D9EAF7", "D9EAF7", "D9EAF7",
>     "FFF8CC", "FFF8CC",
>     "F6D4E5", "F6D4E5", "F6D4E5",
>     "F2F2F2", "F2F2F2"
> ]
> names = ["brave", "opera", "edge", "app", "cốc", "arc", "opera", "edge", "app", "Cốc", "arc"]
> 
> def shade(cell, fill):
>     tcPr = cell._tc.get_or_add_tcPr()
>     shd = OxmlElement("w:shd")
>     shd.set(qn("w:fill"), fill)
>     tcPr.append(shd)
> 
> def border(cell):
>     tcPr = cell._tc.get_or_add_tcPr()
>     borders = OxmlElement("w:tcBorders")
>     for edge in ["top", "left", "bottom", "right"]:
>         e = OxmlElement("w:" + edge)
>         e.set(qn("w:val"), "single")
>         e.set(qn("w:sz"), "8")
>         e.set(qn("w:space"), "0")
>         e.set(qn("w:color"), "000000")
>         borders.append(e)
>     tcPr.append(borders)
> 
> for c in range(6):
>     cell = table.cell(0, c)
>     cell.width = widths[c]
>     cell.text = headers[c]
>     cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
>     shade(cell, header_colors[c])
>     border(cell)
>     p = cell.paragraphs[0]
>     p.alignment = WD_ALIGN_PARAGRAPH.CENTER
>     p.paragraph_format.space_after = Pt(0)
>     run = p.runs[0]
>     run.bold = True
>     run.font.name = "Arial"
>     run.font.size = Pt(9)
>     if c == 1:
>         run.font.color.rgb = RGBColor(255, 255, 255)
> 
> for r in range(1, 12):
>     for c in range(6):
>         cell = table.cell(r, c)
>         cell.width = widths[c]
>         cell.text = names[r-1] if c == 0 else ""
>         cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
>         shade(cell, row_colors[r-1])
>         border(cell)
>         p = cell.paragraphs[0]
>         p.alignment = WD_ALIGN_PARAGRAPH.CENTER if c == 0 else WD_ALIGN_PARAGRAPH.LEFT
>         p.paragraph_format.space_after = Pt(0)
>         if p.runs:
>             p.runs[0].font.name = "Arial"
>             p.runs[0].font.size = Pt(8)
> 
> for r, row in enumerate(table.rows):
>     trPr = row._tr.get_or_add_trPr()
>     h = OxmlElement("w:trHeight")
>     h.set(qn("w:val"), "430" if r == 0 else "650")
>     h.set(qn("w:hRule"), "atLeast")
>     trPr.append(h)
> 
> tblPr = table._tbl.tblPr
> layout = OxmlElement("w:tblLayout")
> layout.set(qn("w:type"), "fixed")
> tblPr.append(layout)
> 
> doc.save(out)
> print(out)
> ```



- **Bước 1:** mở **Notepad** (chương trình soạn thảo văn bản có sẵn trên Windows), dán toàn bộ đoạn code vào đó.

- **Bước 2:** Tại dòng đầu tiên của code,  sửa lại đường dẫn cho gọn (để lưu ngay vào thư mục hiện tại):
    
    ```
    out = "color_check_reusable.docx"
    ```
    ![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260726161159388.png) 
- Nếu như thấy choáng vì tìm không ra thì bấm Ctrl F và gõ chứ out vào, nó sẽ dẫn đến vị trí cần để sửa đường dẫn 

- **Bước 3:** Bấm **File > Save As**(chọn _Save as type_ là _All Files_ để tránh bị đuôi `.txt` ở cuối).   lưu với tên `tao-file.py` lưu đâu cũng được, tui lưu ở 
`C:\Users\Admin\AppData\Roaming\Code\User`

 - **Bước 4: Sau đó mở Windows chạy cmd 

```cd /d C:\Users\Admin\AppData\Roaming\Code\User

```
 - **Bước 5: Chạy file Python

Sau khi dòng dẫn ở đầu màn hình đổi thành thư mục đó, bạn gõ tiếp lệnh sau và nhấn **Enter**:

```
python tao-file.py
```

Ngay sau khi chạy xong, file Word sẽ được tự động tạo ngay bên trong thư mục `User` đó .
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260726153340597.png)
*lần đầu chạy lệnh chưa thành công là do chưa đổi đường dẫn ở trên, sau khi đổi xong bấm lưu file tao-file.py thì đã tạo được* 
Tui copy file word mới tạo thành E:\DownloadsDocuments `mau_test_may_in_4_mau.docx`

## cấu hình **Task Scheduler** trên Windows 

để cứ đúng lịch là máy tính tự động lôi file Word `mau_test_may_in_4_mau.docx` này ra in ngầm, giúp đầu phun máy in luôn thông thoáng.
làm các bước sau
### Bước 1: Mở Bộ lập lịch Windows (Task Scheduler)

1. Nhấn phím **Windows** trên bàn phím, gõ **Task Scheduler** rồi nhấn **Enter**.
    
2. Ở cột bên phải ngoài cùng (Actions), bấm vào dòng **Create Task...** (Tạo Tác vụ).
   nếu tìm không ra Task Scheduler : 1. Nhấn tổ hợp phím **Windows + R** trên bàn phím để mở hộp thoại Run. 2. Gõ chính xác cụm từ: **`taskschd.msc`** rồi nhấn **Enter**. Cửa sổ Task Scheduler sẽ hiện ra ngay lập tức. Bạn làm tiếp từ **Bước 2** như hướng dẫn ở trên để lên lịch in nhé!

### Bước 2: Cài đặt thông tin chung (Tab General)

- **Name:** Nhập tên để dễ nhớ, ví dụ: `Auto_Print_Epson_Test`.
    
- **Configure for:** Chọn **Windows 10** (hoặc phiên bản Windows hiện tại của bạn).
    
- _Mẹo nhỏ:_ Cứ giữ nguyên tùy chọn _Run only when user is logged on_ để mỗi khi bạn đang mở máy dùng, lịch kích hoạt sẽ chạy rất mượt mà.
    

### Bước 3: Đặt lịch chạy hàng tuần (Tab Triggers)

1. Chuyển sang thẻ **Triggers**, bấm nút **New...** ở phía dưới.
    
2. Tại mục _Begin the task_, chọn **On a schedule**.
    
3. Cấu hình thời gian bên dưới:
    
    - Chọn **Weekly** (Hàng tuần).
        
    - **Start:** Chọn ngày bắt đầu và giờ (Ví dụ: 09:00:00 sáng).
        
    - **Recur every:** `1` weeks.
        
    - Tích chọn ngày bạn muốn máy tự in (Ví dụ: **Sunday** - Chủ Nhật).
        
4. Bấm **OK**.
    

### Bước 4: Thiết lập lệnh in file Word tự động (Tab Actions)

1. Chuyển sang thẻ **Actions**, bấm nút **New...**.
    
2. Mục _Action_ giữ nguyên là **Start a program**.
    
3. Tại ô **Program/script**, bạn gõ:
    
    `powershell.exe`
    
4. Tại ô **Add arguments (optional)**, bạn copy và dán chính xác toàn bộ đoạn lệnh dưới đây (đã bao gồm đường dẫn chuẩn đến thư mục `User` của bạn):
    
    DOS
    
    ```
    -WindowStyle Hidden -Command "Start-Process -FilePath 'E:\DownloadsDocuments\mau_test_may_in_4_mau.docx' -Verb Print"
    ```
    
5. Bấm **OK** để đóng cửa sổ Action, sau đó bấm **OK** thêm lần nữa ở cửa sổ chính để hoàn tất lưu tác vụ.
    ![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260726160110764.png)


### 🚀 Cách kiểm tra xem lịch tự động đã hoạt động chưa:

Để chắc chắn mọi thứ trơn tru mà không cần đợi đến Chủ Nhật:

1. Tại giao diện chính của Task Scheduler, bấm vào thư mục **Task Scheduler Library** ở cột bên trái.
    
2. Tìm tên lịch `Auto_Print_Epson_Test` bạn vừa tạo ở danh sách giữa.
    
3. Bấm chuột phải vào nó và chọn **Run**.
    

Test thành công. Nhờ vụ này mà tui phát hiện ra một đống lệnh chạy ngầm không cần thiết của Adobe các thứ tắt hết luôn cho nhẹ máy. Bằng cách nhấn chuột phải chọn disable. 