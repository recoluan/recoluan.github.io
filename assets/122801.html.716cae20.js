import{_ as s,r as t,o as c,c as l,a as e,b as a,e as i,d}from"./app.223ff6b1.js";const r={},o=i("\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u524D\u7AEF\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u53EF\u80FD\u4F1A\u51FA\u73B0\u8DE8\u57DF\u95EE\u9898\uFF0C\u5728vue-cli\u4E2D\u5DF2\u7ECF\u4E3A\u6211\u4EEC\u96C6\u6210\u4E86"),u={href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"http-proxy-middleware",-1),v=i("\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728"),p=e("code",null,"config/index.js",-1),_=i("\u4E2D\u7684proxyTable \u914D\u7F6E\u5373\u53EF\u3002"),b=d(`<p>\u5982\u679C\u63A5\u53E3\u662F<code>www.aaa.com/get/getList</code>\uFF0C\u90A3\u4E48\u6709\u4E24\u79CD\u914D\u7F6E\u65B9\u6848\uFF1A</p><ul><li>\u65B9\u6CD5\u4E00</li></ul><div class="language-ecmascript ext-ecmascript line-numbers-mode"><pre class="language-ecmascript"><code>proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;/get&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u8BF7\u6C42<code>/api/getList</code>\u5C31\u662F\u8BF7\u6C42<code>www.aaa.com/get/getList</code></p><ul><li>\u65B9\u6CD5\u4E8C</li></ul><div class="language-ecmascript ext-ecmascript line-numbers-mode"><pre class="language-ecmascript"><code>proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u8BF7\u6C42<code>/api/get/getList</code>\u5C31\u662F\u8BF7\u6C42<code>www.aaa.com/get/getList</code></p>`,7),g=i("\u4E2A\u4EBA\u535A\u5BA2\uFF1A"),h={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"\u5348\u540E\u5357\u6742",-1);function x(f,k){const n=t("ExternalLinkIcon");return c(),l("div",null,[e("blockquote",null,[e("p",null,[o,e("a",u,[m,a(n)]),v,p,_])]),b,e("p",null,[g,e("a",h,[w,a(n)])])])}var y=s(r,[["render",x],["__file","122801.html.vue"]]);export{y as default};
