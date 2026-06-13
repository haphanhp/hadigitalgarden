function userMarkdownSetup(md) {
}

function userEleventySetup(eleventyConfig) {
  eleventyConfig.addTransform("injectGoogleTranslate", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        "</body>",
        `<div id="google_translate_element" style="position:fixed;bottom:20px;right:20px;z-index:99999;background:white;padding:8px 12px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.2);"></div>
<script>function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'vi',includedLanguages:'en,vi',layout:google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay:false},'google_translate_element');}</script>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`
      );
    }
    return content;
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
