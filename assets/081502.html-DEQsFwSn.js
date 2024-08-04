import{_ as p,r as e,o as l,c,a as s,b as n,d as t,e as o}from"./app-Baml9_qe.js";const i={},u=s("blockquote",null,[s("p",null,[n("最近在小程序的开发过程中遇到这样的需求，一个搜索联想关键词高亮，另一个是将后台传过来的富文本解析成html展示在页面中，这里我们引入非常牛\bX的 "),s("code",null,"wxParse"),n(" ，之所以牛，是因为可以解决很多种问题，正因为如此所以它对于小程序来说也非常大，虽然只有100多kb。")])],-1),r=s("h2",{id:"地址",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#地址"},[s("span",null,"地址")])],-1),k={href:"https://github.com/icindy/wxParse",target:"_blank",rel:"noopener noreferrer"},d=o(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>\b使用</span></a></h2><h3 id="单行文本解析" tabindex="-1"><a class="header-anchor" href="#单行文本解析"><span>单行文本解析</span></a></h3><h4 id="wxml" tabindex="-1"><a class="header-anchor" href="#wxml"><span>wxml</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../../utils/wxParse/wxParse.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wxParse<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{wxParseData:article.nodes}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss"><span>wxss</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;../../../utils/wxParse/wxParse.wxss&#39;</span><span class="token punctuation">;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>javascript</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> WxParse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../../utils/wxParse/wxParse.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">wxParseData</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">toHtml</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> article <span class="token operator">=</span> <span class="token string">&#39;&lt;div&gt;123 &lt;span&gt;456&lt;/span&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    WxParse<span class="token punctuation">.</span><span class="token function">wxParse</span><span class="token punctuation">(</span><span class="token string">&#39;article&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span> article<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组文本解析" tabindex="-1"><a class="header-anchor" href="#数组文本解析"><span>数组文本解析</span></a></h3><h4 id="wxml-1" tabindex="-1"><a class="header-anchor" href="#wxml-1"><span>wxml</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../../utils/wxParse/wxParse.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>list_for list_item<span class="token punctuation">&#39;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{index}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{replyTemArray}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{index}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>clickListItem<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>list_item<span class="token punctuation">&#39;</span></span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wxParse<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{wxParseData:item}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;../../../utils/wxParse/wxParse.wxss&#39;</span><span class="token punctuation">;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="javascript-1" tabindex="-1"><a class="header-anchor" href="#javascript-1"><span>javascript</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> WxParse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../../utils/wxParse/wxParse.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">replyTemArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 搜索联想，关键词高亮</span></span>
<span class="line">  <span class="token function">keywordAssociation</span><span class="token punctuation">(</span><span class="token parameter">keyword</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">getSearchList</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      _this<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">searchList</span><span class="token operator">:</span> res</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> dataArr <span class="token operator">=</span> res<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dataArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        WxParse<span class="token punctuation">.</span><span class="token function">wxParse</span><span class="token punctuation">(</span><span class="token string">&#39;reply&#39;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span> _this<span class="token punctuation">.</span><span class="token function">highLight</span><span class="token punctuation">(</span>dataArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">,</span> _this<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> dataArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          WxParse<span class="token punctuation">.</span><span class="token function">wxParseTemArray</span><span class="token punctuation">(</span><span class="token string">&quot;replyTemArray&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;reply&#39;</span><span class="token punctuation">,</span> dataArr<span class="token punctuation">.</span>length<span class="token punctuation">,</span> _this<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),m={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},v=s("strong",null,"午后南杂",-1);function h(g,b){const a=e("ExternalLinkIcon");return l(),c("div",null,[u,r,s("p",null,[s("a",k,[n("https://github.com/icindy/wxParse"),t(a)])]),d,s("p",null,[n("个人博客："),s("a",m,[v,t(a)])])])}const w=p(i,[["render",h],["__file","081502.html.vue"]]),y=JSON.parse('{"path":"/blogs/frontEnd/2018/081502.html","title":"小程序非常好用的富文本插件wxParse","lang":"zh-CN","frontmatter":{"title":"小程序非常好用的富文本插件wxParse","date":"2018-08-15T00:00:00.000Z","tags":["小程序","wxParse"],"categories":["frontEnd"]},"headers":[{"level":2,"title":"地址","slug":"地址","link":"#地址","children":[]},{"level":2,"title":"\\b使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"单行文本解析","slug":"单行文本解析","link":"#单行文本解析","children":[]},{"level":3,"title":"数组文本解析","slug":"数组文本解析","link":"#数组文本解析","children":[]}]}],"git":{"createdTime":1554691651000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2018/081502.md"}');export{w as comp,y as data};