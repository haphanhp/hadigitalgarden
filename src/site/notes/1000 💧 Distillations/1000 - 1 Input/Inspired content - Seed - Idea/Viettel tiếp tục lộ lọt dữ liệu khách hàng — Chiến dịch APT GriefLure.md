---
{"dg-publish":true,"permalink":"/1000-distillations/1000-1-input/inspired-content-seed-idea/viettel-tiep-tuc-lo-lot-du-lieu-khach-hang-chien-dich-apt-grief-lure/","title":"Viettel tiếp tục lộ lọt dữ liệu khách hàng — Chiến dịch APT GriefLure","tags":["lo-du-lieu","data-breach","viettel","viet-nam","apt","grieflure","an-ninh-mang","seqrite","quan-su-vien-thong","osint",2026,"seedling/video-content","tintuc"],"dg-note-properties":{"title":"Viettel tiếp tục lộ lọt dữ liệu khách hàng — Chiến dịch APT GriefLure","allias":"viettel-grieflure-data-breach","tags":["lo-du-lieu","data-breach","viettel","viet-nam","apt","grieflure","an-ninh-mang","seqrite","quan-su-vien-thong","osint",2026,"seedling/video-content","tintuc"],"status":"archived","date_logged":"2026-06-27","source":"https://www.seqrite.com/vi/blog/operation-grieflure-dissecting-an-apt-campaign-targeting-vietnams-military-telecom-philippine-healthcare/","related_doc":"vu-lo-du-lieu-quy-mo-lon-vn.md"}}
---

[[1000 💧 Distillations/1000 - 1 Input/Inspired content - Seed - Idea/Các vụ lộ dữ liệu quy mô lớn ở Việt Nam 2015 → 2026\|Các vụ lộ dữ liệu quy mô lớn ở Việt Nam 2015 → 2026]]
# Viettel tiếp tục lộ lọt dữ liệu khách hàng — Chiến dịch APT "GriefLure"
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260627225318900.png)
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260627225329228.png)
![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260627225338955.png)

## Tóm tắt nhanh

- **Đơn vị bị nhắm tới:** Tập đoàn Viettel — tập đoàn viễn thông lớn nhất Việt Nam, hoạt động dưới sự quản lý của Bộ Quốc phòng.
- **Đơn vị phát hiện:** Seqrite Labs (Ấn Độ), thuộc Quick Heal Technologies.
- **Tên chiến dịch:** Operation GriefLure ("Mồi nhử Nỗi đau").
- **Thời điểm công bố báo cáo:** 07/05/2026.
- **Mức độ:** Được nâng tầm quốc tế — chiến dịch không chỉ nhắm vào Việt Nam mà còn đồng thời tấn công ngành y tế Philippines (Trung tâm Y tế St. Luke - SLMC), cho thấy một nhóm tấn công duy nhất vận hành hạ tầng tấn công trên nhiều quốc gia Đông Nam Á.
- **Nghi vấn quy kết:** Nhóm đe dọa có liên kết với Trung Quốc, mức độ tin cậy trung bình đến cao (dựa trên hạ tầng máy chủ tại Hồng Kông, danh sách phần mềm diệt virus Trung Quốc được nhúng trong mã độc, và việc nhắm vào dữ liệu WeChat).

## Diễn biến

Seqrite Labs phát hiện một chiến dịch tấn công lừa đảo có chủ đích (spear-phishing) nhắm vào ban lãnh đạo cấp cao Viettel cùng các điều tra viên Đội Cảnh sát Phòng chống Tội phạm mạng tỉnh Thanh Hóa. Điều đặc biệt nguy hiểm của chiến dịch này là kẻ tấn công **không tự tạo ra tài liệu mồi nhử** mà đánh cắp các tài liệu **có thật** từ một vụ tranh chấp pháp lý đang diễn ra giữa một khách hàng (được nêu tên là Lê Thị Dung) và Viettel, liên quan đến một vụ rò rỉ dữ liệu cá nhân trước đó kéo dài hơn 4 tháng.

Bộ tài liệu mồi nhử mà kẻ tấn công thu thập và sử dụng gồm:

- Báo cáo điều tra chính thức của cảnh sát
- Thư thừa nhận sai phạm có chữ ký của lãnh đạo Viettel (Phó Giám đốc)
- Bản tường trình bào chữa viết tay của nhân viên Viettel liên quan
- Chuỗi email nội bộ giữa khách hàng và bộ phận chăm sóc khách hàng Viettel, chứa thông tin cá nhân thật (số CMND, số điện thoại)
- Hồ sơ y tế cá nhân của nạn nhân (ghi nhận tổn thương tâm lý như PTSD, trầm cảm do hậu quả của vụ lộ dữ liệu trước đó)

Vì toàn bộ tài liệu là thật, tên người thật, sự việc thật, nên việc phát hiện dựa trên trực giác hầu như là bất khả thi đối với người nhận liên quan trực tiếp đến vụ việc — đây cũng là lý do chiến dịch được đặt tên "GriefLure" (mồi nhử từ nỗi đau của nạn nhân).

## Cơ chế kỹ thuật (tóm lược)

1. **Phát tán:** Email lừa đảo gửi kèm file RAR/ZIP chứa file LNK độc hại lồng trong các tài liệu PDF mồi nhử.
2. **Kỹ thuật Living-off-the-Land:** File LNK lạm dụng `ftp.exe` (file nhị phân gốc của Windows) để âm thầm thực thi script, tránh bị endpoint phát hiện.
3. **Lắp ráp payload đa hình theo thời gian:** Mã độc ghép các đoạn file `.doc` vô hại thành file thực thi `sfsvc.exe` (162KB) ngay tại thời điểm chạy — file EXE/DLL hoàn chỉnh không bao giờ tồn tại sẵn trong file RAR, giúp né tránh quét chữ ký tĩnh.
4. **Tải DLL độc hại (`360.dll`):** Thực hiện kỹ thuật fileless và process injection vào `explorer.exe`.
5. **Payload thứ 2:** Một RAT (Remote Access Trojan) đa năng có khả năng:
    - Chụp màn hình, liệt kê tiến trình, dò quét phần mềm bảo mật (AV/EDR) đang chạy
    - Đánh cắp thông tin đăng nhập từ trình duyệt Chrome, FileZilla, Xshell, Sunlogin, ToDesk
    - Truy cập dữ liệu WeChat
    - Tải file lên/xuống theo từng phần, thực thi payload bổ sung (nghi là công cụ điều khiển từ xa dạng TightVNC)
6. **C2 (Command & Control):** Giao tiếp qua HTTPS, mã hóa XOR, sử dụng domain giả mạo `whatsappcenter[.]com`, lưu trữ trên hạ tầng "bulletproof hosting" tại Hồng Kông (KAOPU-HK, AS138915).

## Hai chiến dịch song song

||Chiến dịch 1|Chiến dịch 2|
|---|---|---|
|Quốc gia|Việt Nam|Philippines|
|Mục tiêu|Viễn thông quân sự (Viettel)|Y tế (St. Luke's Medical Center)|
|Mồi nhử|Hồ sơ vụ tranh chấp rò rỉ dữ liệu thật|Đơn tố giác gian lận giả (1.5 triệu PHP, vi phạm JCI/PhilHealth)|
|File phát tán|Ho so.rar|download.zip|

Cả hai chiến dịch dùng chung khung kỹ thuật lắp ráp payload, xác nhận đây là một nhóm tấn công duy nhất vận hành đồng thời trên nhiều quốc gia.

## Chỉ báo kỹ thuật (IOC) chọn lọc

- **C2 domain:** `www.whatsappcenter.com`
- **Hạ tầng:** 38.54.122.188 — KAOPU-HK Kaopu Cloud HK Limited (AS138915)
- **Tên phát hiện của Seqrite:** `Lnk.Trojan.50682.GC`, `Script.Trojan.50683.GC`, `Trojan.Win32CiR`
- **MITRE ATT&CK nổi bật:** T1566.001 (Phishing Attachment), T1218 (System Binary Proxy Execution - ftp.exe), T1027 (Obfuscated Files), T1055.001 (Process Injection), T1113 (Screen Capture), T1071.001 (C2 qua HTTPS)

_(Danh sách SHA256 đầy đủ xem tại nguồn gốc bài viết của Seqrite.)_

## Nguồn

- Seqrite Labs (báo cáo kỹ thuật gốc, song ngữ Việt–Anh): https://www.seqrite.com/vi/blog/operation-grieflure-dissecting-an-apt-campaign-targeting-vietnams-military-telecom-philippine-healthcare/

## Ghi chú liên hệ với danh sách các vụ lộ dữ liệu lớn ở Việt Nam

Vụ việc này khác biệt so với các vụ lộ dữ liệu trước đó (VNG, Thế Giới Di Động, Vietnam Airlines, FPT) ở điểm:

- Không phải lộ dữ liệu hàng loạt qua hệ thống bị hack trực tiếp, mà là **một chiến dịch tấn công có chủ đích (APT)** sử dụng chính dữ liệu rò rỉ trước đó làm vũ khí tấn công tiếp theo — cho thấy hậu quả dây chuyền (secondary exploitation) của các vụ lộ dữ liệu cá nhân.
- Mục tiêu là lãnh đạo cấp cao của một tập đoàn viễn thông quân sự, không phải khách hàng đại trà — nâng mức độ nghiêm trọng lên cấp độ an ninh quốc gia.
- Được phát hiện và công bố bởi đơn vị nghiên cứu an ninh mạng quốc tế (Seqrite Labs, Ấn Độ), không phải bởi cơ quan chức năng Việt Nam.