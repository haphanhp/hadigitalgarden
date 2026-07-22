---
{"dg-publish":true,"permalink":"/1000-distillations/1000-4-published/ha-digital-garden/vibe-code-diary-3-9router-change-this-game/","title":"Vibe code diary - 9router change this game","tags":["tech/ai","vibecoding","diary","writing","published/digitalgarden"],"dg-note-properties":{"title":"Vibe code diary - 9router change this game","date":"2026-07-22","created":"2026-07-22 11:02","tags":["tech/ai","vibecoding","diary","writing","published/digitalgarden"],"status":"done","date created":"Wednesday, July 22nd 2026, 11:01:32 am","date modified":"Wednesday, July 22nd 2026, 2:27:39 pm","parent-project":"vibe-code-diary","priority":1}}
---



### Nhờ có 9router gắn vào Cline trong VSCode đúng là game changer.

**15-6-26** cài vào máy để đó để cả tuần chưa làm gì. hoàn toàn bối rối vì không biết cách xài. Hỏi claude mà nó toàn đe dọa xài cái này sẽ bị ban account các thứ, nó toàn lái qua chuyện xài Claude Code dĩ nhiên phải trả tiền cho Claude. 

**20-6-2026** nói chuyện với Grok nó mới bật mí một chút, đưa ra câu trả lời khác biệt. nhưng vẫn có rất nhiều tín hiệu nhiễu, Grok free cũng tệ, mấy cái bậy bạ thì nói nhanh lắm, tin tức cũng ok nhưng không hề update mã nguồn mở như Claude, Claude thì biết nhưng mà nó éo bày. Gemini thì nó còn k biết 9router là gì luôn. 

**25-6-2026** nhưng mà một đại ca trong group zalo khẳng định 9router rất tốt thế là ngồi vật vã gắn API đầu tiên nhờ cái clip này https://www.youtube.com/watch?v=Wc20BtLz8qA, vừa làm vừa hỏi claude cái này cái kia thì Claude nó lại tiếp tục dọa, nó nói thì đúng thôi, nhưng là nói một nửa sự thật, đi kèm mấy cảnh báo nho nhỏ làm người ta phân tâm để khỏi xài nữa, khiến cho người mới yếu lòng, vì người ta xài 9router thì ai thèm trả tiền cho Claude Code nữa.

**1-7-2026** tối 6h đã ngồi vào bàn vọc 9router gắn với Claude CLI nhờ openAI review kết quả, mấy con Mimo free model thực sự tệ như con Ollama chạy local không được tích sự gì, chán nản. 

Đến 10h gắn vào Cline xong chat 1-2 câu thấy chạy cũng nhanh đấy, mà nhanh quá thì lại sợ, lúc đó đang xài Copilot mất công lại phí model mạnh để chat vớ vẩn nên lại thôi. Lúc đó chưa hề biết cách sắp xếp combo cho con nào chạy trước. Hỏi Claude bày cách gắn 9router vào Cline thì nó lại bày nhanh.

**2-7-2026** thử chat với Claude về con quartz 2ndbrain đang bị bế tắc, nhưng một khi đã gắn PAT cho nó tự chạy cảm giác phê trong người không còn muốn động tay đích thân push code nữa, có đứa làm được cho mình tại sao mình phải tự làm, dự án cứ bị tắc ở đó, vì con Claude chạy được 1 lệnh là bị hết token. Bế tắc suốt 1 tuần.

Mình xài được 9router phải nhờ con OpenAI giúp, nó bày mình lấy API gemini. Sau khi gắn 5 acc Gemini thì trở nên phấn khởi, nghĩ có thể cào được 5 acc miễn phí thấy vui trong người. Gắn xong để đó chứ cũng chưa làm gì. 

Đến đây mình dần hiểu ra một chút, nếu như dùng AI hãng khác bày cách bào đối thủ thì tụi nó bày nhiệt tình. Còn dùng openai để hỏi cách bào Codex thì tắc, thế là mình cứ kiểm tra chéo giữa các bên, cuối cùng sự thật hé lộ. 

**10-7-2026** Nếu như việc xài AI có 5 level https://youtu.be/b78SAYqgmEo?si=GvfsCB5c09yfrnfF thì mặc dù đã viết xong 2 app nhỏ bằng Claude Chat nghĩa là mình chỉ mới chạm level 2. Bằng một sự tình cờ giao PAT tạm cho Claude để nó tự chạy trên repo, tự sửa lỗi, tự commit, lúc đó mình đã nếm được vị phê của việc chạm ngưỡng level 3, AI trở thành người thực thi, người nhân viên cho mình. Ý tưởng build AI agent lúc này có nhưng cảm giác hơi xa vời vì có nhiều thứ cản bước hiện tại nên cứ hẹn lần lữa. 

**10-7-2026** đến **16-7-2026** 10-7 đến qua nửa đêm 11-7 là khoảnh khắc phê dopamine khi phát hiện ra Cline giỏi hơn mình nghĩ, nó chạy trên máy dưới sự chỉ huy của openai, cứ thế chứng kiến nó làm toàn bộ quá trình chỉ cần nhấn nút allow mà k phải động tay vào, một con ra lệnh 1 con thực thi. giá như 2 con nói chuyện được với nhau thì đúng là mình chỉ cần phải nhìn kết quả cuối cùng.

### Quartz

Mình từng nghĩ sẽ sửa xong lỗi repo https://github.com/haphanhp/2ndbrain trong vòng 24h, do OpenAI lập plan, kiểm soát quá trình, 3 tài khoản Claude thay phiên hand over, phân vùng và sửa từng lỗi 1, Cline thực thi với API Copilot, cline đọc file, clone repo về, báo cáo chạy lệnh git, chạy thử, xin ý kiến, sửa tiếp cho đến khi sạch lỗi và commit lên repo.

Thực tế Quartz được cho là đơn giản nhất trong việc render site tĩnh trong các lựa chọn Astro, Hugo (Go) / Jekyll (Ruby) Lume (Deno) Eleventy, vì trước đó đã thực hiện xong garden.haphan.digital với Eleventy rồi nên mình nghĩ việc render Quartz là đơn giản.

Nhưng mình đã sai, việc render sang vercel gặp nhiều vấn đề:

- xung khắc phiên bản [Quartz v5](https://quartz.jzhao.xyz/) do fork về từ [obsidian](https://github.com/obsidianmd) với bản hướng dẫn
- số lượng file khổng lồ sinh ra cùng với 7000 notes được workflow chạy PAT copy tự động qua repo mới khiến việc tìm lỗi YAML trở nên quá tải nếu chỉ làm với Claude chat.
- Nếu render của Netify không gặp vấn đề nhiều khi code tách riêng các file có vấn đề qua một bên để render tiếp các file còn lại thì Vercel lại có kiểu đọc file khác.
- Lỗi front matter và tên file quá dài, dính permanlink trong front matter khiến nó hiểu lầm đây là một đường dẫn của thư mục, nhưng lại không tìm thấy thư mục đó.
- lỗi quartz.config.yaml
- lỗi Plugin Not Found, ở máy chạy đủ 44 plugin mà lên cloud chỉ còn 3
- chủ yếu do quartz chạy linux mà máy lại đang chạy windows nên chạy thành công trên máy vẫn có thể còn issue
- Mọi chuyện đang bê tắc vì fix lỗi này lại lòi ra lỗi kia cuối cùng thay vì xây một cơ chế mới hoàn toàn cho vercel lại khó bảo trì thì lại dựa hoàn toàn vào hệ sinh thái của netify cũ. Thế là chuyện được giải quyết.

**Chi tiết kỹ thuật cho ai tò mò:**

- Lỗi permalink không phải do Quartz tự nhiên "hiểu lầm" một cách ngẫu nhiên — do 1 note có field `permalink: https://...` (URL tuyệt đối) thay vì đường dẫn tương đối trong frontmatter. Plugin `note-properties` đẩy giá trị này vào danh sách alias, plugin `AliasRedirects` sau đó cố tạo (`mkdir`) một thư mục có tên chứa cả `https:` — dấu `:` không hợp lệ trong tên thư mục Windows nên máy local báo lỗi ngay; nhưng đây thật ra là lỗi độc lập hệ điều hành, chỉ là Windows/Linux báo triệu chứng khác nhau nên ban đầu dễ tưởng nhầm là do Windows.
    
- Lỗi "Plugin Not Found, máy chạy 44 plugin, cloud chỉ còn 3" có 2 nguyên nhân khác nhau, xảy ra ở 2 thời điểm khác nhau, dễ gây nhầm lẫn: (1) lần đầu là do 1 script tự viết để cài plugin (`install-plugins.ts`) lỡ import luôn file cấu hình chính của Quartz, kéo theo toàn bộ hệ thống khởi tạo chỉ cần lúc build thật — trong đó có đoạn import file `.scss` mà Node không biết xử lý khi chạy dưới dạng script cài đặt, khiến việc cài plugin bị crash giữa chừng; (2) lần sau, sau khi đã đổi sang dùng đúng lệnh cài plugin có sẵn của Quartz (`npx quartz plugin install --from-config`), Vercel lại tự động phục hồi cache build cũ (dở dang, chưa đủ plugin) ở một số lần deploy, khiến "chỉ cài bổ sung phần thiếu so với cache" thay vì cài đủ lại từ đầu — không phải bug code, mà là hành vi cache của nền tảng deploy.
    
- Việc "dựa hoàn toàn vào hệ sinh thái Netlify cũ" được nhắc ở trên cụ thể là: phát hiện ra lệnh CLI `--from-config` nói trên tồn tại sẵn trong Quartz nhờ tình cờ còn sót lại 1 file cấu hình Netlify (`netlify.toml`) từ thời còn chạy trên Netlify — không phải tự nghĩ ra, mà đọc lại đúng cấu hình cũ đang chạy tốt để tìm ra cách làm đơn giản hơn cho Vercel.
    
- Lỗi permalink còn **tái phát thêm 1 lần nữa** sau khi tưởng đã sửa xong — nguyên nhân là có 1 workflow tự động (`sync.yml`) đồng bộ nội dung từ vault Obsidian gốc vào repo web mỗi ~6 tiếng. Sửa lỗi ở bản copy trong repo web chỉ là vá tạm, vì file gốc trong vault vẫn còn giữ field lỗi — hễ note đó được lưu lại trong vault, lần đồng bộ kế tiếp lại kéo lỗi trở lại. Bài học rút ra: khi 1 lỗi dữ liệu tái phát đúng ở cùng 1 chỗ sau khi đã sửa, nên nghi ngờ có quy trình tự động nào đang ghi đè lại, và sửa đúng tại nguồn phát sinh dữ liệu thay vì vá lặp đi lặp lại ở điểm hiển thị cuối cùng.
    
- Nhưng mà câu trả lời chỉ có được sau khi làm hàng loạt thao tác phân vùng dò lỗi, rồi mới ra được đến bước đó, mình đã học được nhiều thông qua cách quan sát AI phối hợp, không tin nhận định mà chỉ dựa trên bằng chứng, cline là người thu thập data báo cáo với model rẻ, còn claude nhận định đánh giá bằng sonnet 5.
    
- Nhờ openAi gợi ý 10 file md khác được tạo ra để quản lý context và handover giữa các ca làm việc không bị gãy, bỏ vào thư mục `.ai` chỉ dành riêng cho AI đọc. Một dự án tưởng hoàn thành trong 4 tiếng thực tế kéo dài từ lúc setup ban đầu (10/7) qua nhiều đợt fix rải rác — build đầu tiên pass trên Vercel ngày 16/7, nhưng bug cache và lỗi permalink tái phát qua sync khiến phải vá thêm, mãi tới 22/7 mới thực sự ổn định tại nguồn.
    
- Deploy tay không có cache thì thành công mà deploy tự động lại lỗi. Thế là phải fix thêm lỗi này nữa. Ngày 16 build pass lần đầu trên Vercel, ngày 19-20 viết worklog và phát hiện thêm bug cache, ngày 20 vá lỗi permalink tái phát lần 2 (downstream), ngày 22 mới sửa tận gốc tại vault Obsidian. **22-7-2026**
    

### lần đầu thấy Cline chạy xử lý Yaml text lỗi, quét xử lý lỗi lồng folder file trùng lặp, chuẩn hóa Yaml text và metadata cho vault

- Claude viết mã python cho cline thực hiện, báo cáo lỗi
    
- giữa chừng Cline bị ngáo do bị tràn context, cứ đọc đi đọc lại một file mà không làm gì khác
    
- Kiểm tra giảm số lượng tool/MCP server đang bật trong profile "9Router - My Combo" cũng không phải, 15 skill cố định từ Copilot không tắt được ![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260722113527067.png)
    
- Kiểm tra lại model đang route qua 9Router thì thấy Copilot và Kiro hết quota, Gemini còn nguyên Codex chưa chạy, đổi ưu tiên sang Gemini, tắt VSCode, khởi động lại Cline bằng cách ấn Ctrl P, bấm > developer Reload Window, xóa lịch sử chat, xóa task, bật chat mới, vẫn bị tràn context. Phát hiện model đang chat với mình vẫn là ô chat của copilot nhưng đã gắn chatLanguageModels.json rồi.
    
- Lúc này claude bó tay nói chuyển sang chạy bằng tay nhưng Gemini lại phát hiện ra lỗi do chatLanguageModels.json
    
- ![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260722114222191.png) Hóa ra do Maxinput token quy định quá thấp, giống như người xử lý công việc mà mang một cái ba lô đựng đồ nghề quá nhỏ, thêm ngữ cảnh chat, đọc file phải nhớ context thêm nữa mà bộ chứa không đủ.
    
- Sau khi chỉnh 200000 thành 1000000, đổi ưu tiên cho gemini chạy trước, khởi động lại, bật chat mới, Cline hoạt động bình thường. ![image.png](https://raw.githubusercontent.com/tudotaichinh/image-auto/Obsidian/Obsidian20260722114613500.png) Mới xài được 7 ngày 9router đốt 140tr token thực ra cũng không nhiều. Add thêm tài khoản vào. Còn rất nhiều việc cần làm.
    
### Take note acc free 
- Antigravity add vào sẽ bị khóa tài khoản 
-  NIM Nvidia xác thực sdt có vấn đề, thử số ở Mỹ hay Hongkong đều bị, khỏi làm mất công. 
-  AI Tung của phải có sdt +86 xác thực
- Openrouter nối được mấy acc free 
- Mình xài chủ yếu Copilot và deepseek

### Nhờ 9router mà mình đã 
- chạy soát lỗi yaml toàn vault định kỳ, biến nó thành lịch tự động
- kéo data hàng trăm bộ phim thông qua API và script python và javascript chỉ trong vòng 5 phút thay vì trước đó làm thủ công mất nguyên 1 ngày [[700 Vaults/750 movie/Japan movie/list-100-phim-nhat-hay-nhat\|list-100-phim-nhat-hay-nhat]]
- Kéo về xong thì lại nhờ Cline check lỗi, đối chiếu coi có sót file trùng file không, Cline viết code Python liên kết các file vừa tải bằng cách chèn wiki link hàng loạt 
- Cline viết file tổng kết MD chèn ngược wikilink về các file con. [[700 Vaults/750 movie/792.03 China movie/list-100-phim-trung-quoc-dai-loan-hongkong-hay-nhat\|list-100-phim-trung-quoc-dai-loan-hongkong-hay-nhat]]
- hoàn thành https://2ndbrainha.vercel.app/ trong vòng 2 ngày giải quyết được nút thắt lớn nhất, có 2 ngày 11/7 làm việc tập trung cực kỳ phê 

### Next to do

- [ ] app quản lý nơi chốn lịch trình nối API gg maps
- [ ] automation n8n
- [ ] mini CRM
