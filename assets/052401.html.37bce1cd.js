import{_ as e,r as l,o as d,c as s,a as n,b as t,d as a,e as v}from"./app.223ff6b1.js";const r={},c=a(`<h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u9996\u5148\u8981\u660E\u767D\u6D4F\u89C8\u5668\u5728\u52A0\u8F7D\u9875\u9762\u7684\u65F6\u5019\u662F\u6309\u987A\u5E8F\u6765\u52A0\u8F7D\u7684\uFF0C\u8FD9\u6837\u4EE5\u6765\u5C31\u5F88\u6E05\u695A\u4E86\uFF0Cjs\u52A8\u6001\u6DFB\u52A0dom\u4EE5\u540E\uFF0C\u8FD9\u4E9Bdom\u5E76\u6CA1\u6709\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6700\u7B80\u5355\u7684\u4E00\u4E2A\u529E\u6CD5\u5C31\u662F\uFF1A\u5C06\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u65B9\u6CD5\u5C01\u88C5\u5230\u4E00\u4E2A\u51FD\u6570A\u4E2D\uFF0C\u5728\u52A8\u6001\u6DFB\u52A0\u5B8Cdom\u4EE5\u540E\u7ACB\u5373\u6267\u884C\u4E00\u6B21\u51FD\u6570A\u5373\u53EF\u3002</p><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><p>\u5176\u6B21\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4F60\u53EF\u80FD\u540C\u65F6\u9700\u8981\u6DFB\u52A0\u8BB8\u591A\u7684dom\uFF0C\u4E0D\u8981\u6DFB\u52A0\u4E00\u4E2A\u5C31\u6267\u884C\u4E00\u6B21\u51FD\u6570A\uFF0C\u8FD9\u6837\u4F1A\u589E\u52A0\u6D4F\u89C8\u5668\u7684\u8D1F\u8F7D\uFF0C\u4F60\u9700\u8981\u5728\u6240\u6709dom\u6DFB\u52A0\u5B8C\u4EE5\u540E\u5728\u6267\u884C\u51FD\u6570A\uFF0C\u4F8B\u5982\u4F60\u7528\u4E00\u4E2Afor\u5FAA\u73AF\u904D\u5386dom\u7EC4\u5408\u5E76\u62FC\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u6DFB\u52A0\u5230\u67D0\u4E2A\u7236\u7EA7dom\u91CC\u9762\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u9700\u8981\u5728\u5FAA\u73AF\u5916\u6DFB\u52A0\u4E00\u6B21\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;\u6DFB\u52A0div\u5E76\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6&lt;/title&gt;
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
        &lt;div class=&quot;btn&quot;&gt;\u6DFB\u52A0div\u5E76\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6&lt;/div&gt;
        &lt;div class=&quot;outerDiv&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;script&gt;
        function getClass(classname) {
            return document.getElementsByClassName(classname);
        }
        getClass(&#39;btn&#39;)[0].onclick=function () {
            addDom();
        }
        //    \u5C06\u70B9\u51FB\u4E8B\u4EF6\u5C01\u88C5\u4E3A\u51FD\u6570
        function funA() {
            for(var i=0;i&lt;getClass(&#39;innerDiv&#39;).length;i++){
                getClass(&#39;innerDiv&#39;)[i].onclick=function () {
                    alert(this.innerText);
                }
            }
        }
        //    \u5C06\u6DFB\u52A0dom\u5C01\u88C5\u4E3A\u51FD\u6570
        function addDom() {
            var oldHtml=&#39;&#39;;
            for(var j=0;j&lt;6;j++){
                oldHtml+=&#39;&lt;div class=&quot;innerDiv&quot;&gt;&#39;+j+&#39;&lt;/div&gt;&#39;
            }
            getClass(&#39;outerDiv&#39;)[0].innerHTML=oldHtml;
            funA();
        }
        //    \u5982\u679C\u5C06\u51FD\u6570A\u653E\u5728\u8FD9\u91CC\u5C31\u4E0D\u4F1A\u8D77\u4F5C\u7528\u7684
        //    funA();
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u=v("\u4E2A\u4EBA\u535A\u5BA2\uFF1A"),m={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},o=n("strong",null,"\u5348\u540E\u5357\u6742",-1);function b(h,g){const i=l("ExternalLinkIcon");return d(),s("div",null,[c,n("p",null,[u,n("a",m,[o,t(i)])])])}var _=e(r,[["render",b],["__file","052401.html.vue"]]);export{_ as default};
