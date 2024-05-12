import{_ as e,r as l,o as s,c as d,a as n,b as t,d as a,e as r}from"./app-Bwk_BGmh.js";const v={},c=r(`<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>首先要明白浏览器在加载页面的时候是按顺序来加载的，这样以来就很清楚了，js动态添加dom以后，这些dom并没有绑定事件，这个时候最简单的一个办法就是：将绑定事件的方法封装到一个函数A中，在动态添加完dom以后立即执行一次函数A即可。</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><p>其次需要注意的是，在你可能同时需要添加许多的dom，不要添加一个就执行一次函数A，这样会增加浏览器的负载，你需要在所有dom添加完以后在执行函数A，例如你用一个for循环遍历dom组合并拼接成一个字符串，然后添加到某个父级dom里面，这个时候你需要在循环外添加一次就可以了。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;添加div并绑定点击事件&lt;/title&gt;
    &lt;style&gt;
        div.btn{
            width: 200px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border: solid 1px #000;
            cursor: pointer;
        }
        div.innerDiv{
            width: 50px;
            height: 50px;
            background-color: black;
            margin: 10px;
            cursor: pointer;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;aa&quot;&gt;
        &lt;div class=&quot;btn&quot;&gt;添加div并绑定点击事件&lt;/div&gt;
        &lt;div class=&quot;outerDiv&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;script&gt;
        function getClass(classname) {
            return document.getElementsByClassName(classname);
        }
        getClass(&#39;btn&#39;)[0].onclick=function () {
            addDom();
        }
        //    将点击事件封装为函数
        function funA() {
            for(var i=0;i&lt;getClass(&#39;innerDiv&#39;).length;i++){
                getClass(&#39;innerDiv&#39;)[i].onclick=function () {
                    alert(this.innerText);
                }
            }
        }
        //    将添加dom封装为函数
        function addDom() {
            var oldHtml=&#39;&#39;;
            for(var j=0;j&lt;6;j++){
                oldHtml+=&#39;&lt;div class=&quot;innerDiv&quot;&gt;&#39;+j+&#39;&lt;/div&gt;&#39;
            }
            getClass(&#39;outerDiv&#39;)[0].innerHTML=oldHtml;
            funA();
        }
        //    如果将函数A放在这里就不会起作用的
        //    funA();
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"午后南杂",-1);function u(b,g){const i=l("ExternalLinkIcon");return s(),d("div",null,[c,n("p",null,[t("个人博客："),n("a",o,[m,a(i)])])])}const p=e(v,[["render",u],["__file","052401.html.vue"]]),f=JSON.parse('{"path":"/blogs/frontEnd/2017/052401.html","title":"js动态添加dom，如何绑定事件","lang":"zh-CN","frontmatter":{"title":"js动态添加dom，如何绑定事件","date":"2017-05-24T00:00:00.000Z","tags":["javascript"],"categories":["frontEnd"]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1590769810000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2017/052401.md"}');export{p as comp,f as data};
