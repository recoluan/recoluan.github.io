import{_ as t,r as l,o as s,c,a as e,b as a,d as n,e as r}from"./app-Bwk_BGmh.js";const o={},d={href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"http-proxy-middleware",-1),p=e("code",null,"config/index.js",-1),u=r(`<p>如果接口是<code>www.aaa.com/get/getList</code>，那么有两种配置方案：</p><ul><li>方法一</li></ul><div class="language-ecmascript line-numbers-mode" data-ext="ecmascript" data-title="ecmascript"><pre class="language-ecmascript"><code>proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;/get&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/getList</code>就是请求<code>www.aaa.com/get/getList</code></p><ul><li>方法二</li></ul><div class="language-ecmascript line-numbers-mode" data-ext="ecmascript" data-title="ecmascript"><pre class="language-ecmascript"><code>proxyTable: {
  &#39;/api&#39;: {
    target: &#39;www.aaa.com&#39;,
    pathRewrite: {
      &#39;^/api&#39;: &#39;&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/get/getList</code>就是请求<code>www.aaa.com/get/getList</code></p>`,7),v={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"午后南杂",-1);function g(_,h){const i=l("ExternalLinkIcon");return s(),c("div",null,[e("blockquote",null,[e("p",null,[a("在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了"),e("a",d,[m,n(i)]),a("，我们只需要在"),p,a("中的proxyTable 配置即可。")])]),u,e("p",null,[a("个人博客："),e("a",v,[b,n(i)])])])}const f=t(o,[["render",g],["__file","122801.html.vue"]]),x=JSON.parse('{"path":"/blogs/frontEnd/2017/122801.html","title":"跨域解决方案之proxyTable","lang":"zh-CN","frontmatter":{"title":"跨域解决方案之proxyTable","date":"2017-12-28T00:00:00.000Z","tags":["vue","webpack"],"categories":["frontEnd"]},"headers":[],"git":{"createdTime":1590769810000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2017/122801.md"}');export{f as comp,x as data};
