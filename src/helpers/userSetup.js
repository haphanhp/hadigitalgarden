function userMarkdownSetup(md) {
}

function userEleventySetup(eleventyConfig) {
  // Copy nguyên các file HTML lịch sử (không qua xử lý template/markdown)
  // Đặt file .html của bạn vào: src/site/eras/
  // Sau khi build sẽ ra: https://garden.haphan.digital/eras/ten-file.html
  eleventyConfig.addPassthroughCopy("src/site/eras");

  eleventyConfig.addTransform("injectGoogleTranslate", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        "</body>",
        `<div style="position:fixed;bottom:20px;right:20px;z-index:99999;">
  <div style="font-size:0.75rem;color:#888;margin-bottom:4px;text-align:right;">🌐 Language</div>
  <div id="google_translate_element" style="background:white;padding:8px 12px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.2);"></div>
</div>
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
