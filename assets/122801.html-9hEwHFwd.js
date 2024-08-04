import{_ as i,r as l,o as t,c,a as e,b as a,d as n,e as r}from"./app-Baml9_qe.js";const o={},d={href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer"},p=e("strong",null,"http-proxy-middleware",-1),m=e("code",null,"config/index.js",-1),u=r(`<p>如果接口是<code>www.aaa.com/get/getList</code>，那么有两种配置方案：</p><ul><li>方法一</li></ul><div class="language-ecmascript line-numbers-mode" data-highlighter="prismjs" data-ext="ecmascript" data-title="ecmascript"><pre class="language-ecmascript"><code><span class="line">proxyTable: {</span>
<span class="line">  &#39;/api&#39;: {</span>
<span class="line">    target: &#39;www.aaa.com&#39;,</span>
<span class="line">    pathRewrite: {</span>
<span class="line">      &#39;^/api&#39;: &#39;/get&#39;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/getList</code>就是请求<code>www.aaa.com/get/getList</code></p><ul><li>方法二</li></ul><div class="language-ecmascript line-numbers-mode" data-highlighter="prismjs" data-ext="ecmascript" data-title="ecmascript"><pre class="language-ecmascript"><code><span class="line">proxyTable: {</span>
<span class="line">  &#39;/api&#39;: {</span>
<span class="line">    target: &#39;www.aaa.com&#39;,</span>
<span class="line">    pathRewrite: {</span>
<span class="line">      &#39;^/api&#39;: &#39;&#39;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们请求<code>/api/get/getList</code>就是请求<code>www.aaa.com/get/getList</code></p>`,7),v={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"午后南杂",-1);function g(h,_){const s=l("ExternalLinkIcon");return t(),c("div",null,[e("blockquote",null,[e("p",null,[a("在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了"),e("a",d,[p,n(s)]),a("，我们只需要在"),m,a("中的proxyTable 配置即可。")])]),u,e("p",null,[a("个人博客："),e("a",v,[b,n(s)])])])}const f=i(o,[["render",g],["__file","122801.html.vue"]]),x=JSON.parse('{"path":"/blogs/frontEnd/2017/122801.html","title":"跨域解决方案之proxyTable","lang":"zh-CN","frontmatter":{"title":"跨域解决方案之proxyTable","date":"2017-12-28T00:00:00.000Z","tags":["vue","webpack"],"categories":["frontEnd"]},"headers":[],"git":{"createdTime":1536508429000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2017/122801.md"}');export{f as comp,x as data};
