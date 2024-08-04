import{_ as l,r as a,o as e,c as i,a as n,b as d,d as t,e as c}from"./app-Baml9_qe.js";const r={},p=c(`<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>首先要明白浏览器在加载页面的时候是按顺序来加载的，这样以来就很清楚了，js动态添加dom以后，这些dom并没有绑定事件，这个时候最简单的一个办法就是：将绑定事件的方法封装到一个函数A中，在动态添加完dom以后立即执行一次函数A即可。</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><p>其次需要注意的是，在你可能同时需要添加许多的dom，不要添加一个就执行一次函数A，这样会增加浏览器的负载，你需要在所有dom添加完以后在执行函数A，例如你用一个for循环遍历dom组合并拼接成一个字符串，然后添加到某个父级dom里面，这个时候你需要在循环外添加一次就可以了。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;title&gt;添加div并绑定点击事件&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        div.btn{</span>
<span class="line">            width: 200px;</span>
<span class="line">            height: 50px;</span>
<span class="line">            line-height: 50px;</span>
<span class="line">            text-align: center;</span>
<span class="line">            border: solid 1px #000;</span>
<span class="line">            cursor: pointer;</span>
<span class="line">        }</span>
<span class="line">        div.innerDiv{</span>
<span class="line">            width: 50px;</span>
<span class="line">            height: 50px;</span>
<span class="line">            background-color: black;</span>
<span class="line">            margin: 10px;</span>
<span class="line">            cursor: pointer;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div class=&quot;aa&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;btn&quot;&gt;添加div并绑定点击事件&lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;outerDiv&quot;&gt;&lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        function getClass(classname) {</span>
<span class="line">            return document.getElementsByClassName(classname);</span>
<span class="line">        }</span>
<span class="line">        getClass(&#39;btn&#39;)[0].onclick=function () {</span>
<span class="line">            addDom();</span>
<span class="line">        }</span>
<span class="line">        //    将点击事件封装为函数</span>
<span class="line">        function funA() {</span>
<span class="line">            for(var i=0;i&lt;getClass(&#39;innerDiv&#39;).length;i++){</span>
<span class="line">                getClass(&#39;innerDiv&#39;)[i].onclick=function () {</span>
<span class="line">                    alert(this.innerText);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        //    将添加dom封装为函数</span>
<span class="line">        function addDom() {</span>
<span class="line">            var oldHtml=&#39;&#39;;</span>
<span class="line">            for(var j=0;j&lt;6;j++){</span>
<span class="line">                oldHtml+=&#39;&lt;div class=&quot;innerDiv&quot;&gt;&#39;+j+&#39;&lt;/div&gt;&#39;</span>
<span class="line">            }</span>
<span class="line">            getClass(&#39;outerDiv&#39;)[0].innerHTML=oldHtml;</span>
<span class="line">            funA();</span>
<span class="line">        }</span>
<span class="line">        //    如果将函数A放在这里就不会起作用的</span>
<span class="line">        //    funA();</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},o=n("strong",null,"午后南杂",-1);function m(u,b){const s=a("ExternalLinkIcon");return e(),i("div",null,[p,n("p",null,[d("个人博客："),n("a",v,[o,t(s)])])])}const h=l(r,[["render",m],["__file","052401.html.vue"]]),f=JSON.parse('{"path":"/blogs/frontEnd/2017/052401.html","title":"js动态添加dom，如何绑定事件","lang":"zh-CN","frontmatter":{"title":"js动态添加dom，如何绑定事件","date":"2017-05-24T00:00:00.000Z","tags":["javascript"],"categories":["frontEnd"]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1536508429000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2017/052401.md"}');export{h as comp,f as data};
