function userMarkdownSetup(md) {
}

function userEleventySetup(eleventyConfig) {
  // Copy nguyên các file HTML lịch sử (không qua xử lý template/markdown)
  // Đặt file .html của bạn vào: src/site/eras/
  // Sau khi build sẽ ra: https://garden.haphan.digital/eras/ten-file.html
  eleventyConfig.addPassthroughCopy("src/site/eras");

  eleventyConfig.addTransform("injectGoogleTranslate", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // Áp chế độ sáng/tối sớm trong <head> để tránh nháy màu khi tải trang
      const themeBoot = `<script>(function(){try{var t=localStorage.getItem('dg-theme');if(t!=='light'&&t!=='dark'){t=(window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}document.documentElement.setAttribute('data-dg-theme',t);}catch(e){document.documentElement.setAttribute('data-dg-theme','dark');}})();</script>
</head>`;
      content = content.replace("</head>", themeBoot);
      return content.replace(
        "</body>",
        `<div class="dg-corner-widgets" style="position:fixed;bottom:20px;right:20px;z-index:99999;display:flex;align-items:center;gap:8px;">
  <button id="dg-theme-btn" class="dg-theme-btn" type="button" aria-label="Đổi chế độ sáng/tối">☀️ Light</button>
  <div id="google_translate_element" style="background:white;padding:8px 12px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.2);"></div>
</div>
<script>
/* Nút Sáng/Tối: nhớ lựa chọn của khách; lần đầu theo cài đặt sáng/tối của thiết bị */
(function(){
  var KEY='dg-theme', root=document.documentElement;
  function cur(){return root.getAttribute('data-dg-theme')==='light'?'light':'dark';}
  function apply(t,save){
    root.setAttribute('data-dg-theme',t);
    var b=document.body; b.classList.remove('theme-dark','theme-light'); b.classList.add('theme-'+t);
    var btn=document.getElementById('dg-theme-btn');
    if(btn){btn.textContent=(t==='light')?'🌙 Dark':'☀️ Light';}
    if(save){try{localStorage.setItem(KEY,t);}catch(e){}}
    document.dispatchEvent(new Event('forestry:css-changed'));
  }
  apply(cur(),false);
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('#dg-theme-btn');
    if(b){apply(cur()==='light'?'dark':'light',true);}
  });
})();
</script>
<script>function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'vi',includedLanguages:'en,fr,zh-CN',layout:google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay:false},'google_translate_element');}</script>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`
      );
    }
    return content;
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
