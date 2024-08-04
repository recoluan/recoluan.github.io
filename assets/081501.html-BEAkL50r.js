import{_ as a,r as p,o as t,c as e,a as n,b as l,d as c,e as o}from"./app-Baml9_qe.js";const i={},u=o(`<blockquote><p>真正开发过小程序的开发者会发现，小程序里面的单选框和多选框封封装的实在不够友好，一般与UI都会有比较大的出入，所以下面来探讨一下单选框和多选框的封装。</p></blockquote><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果"><span>效果</span></a></h2><p><img src="https://upload-images.jianshu.io/upload_images/4660406-8105fc181c9d2180.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="radio.jpg"></p><p>比如我们要做一个这种样式的单选框和多选框组件，我们改怎么去处理呢？</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><h4 id="wxml" tabindex="-1"><a class="header-anchor" href="#wxml"><span>\bwxml</span></a></h4><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- 判断某个元素是不是指定数组内 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  var checkStatus = function (arr, item) {</span>
<span class="line">    return arr.indexOf(item) &gt;= 0</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  module.exports.checkStatus = checkStatus;</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>{{isHidden}}<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 单选组件 --&gt;</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio-group</span> </span>
<span class="line">    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio-group<span class="token punctuation">&quot;</span></span> </span>
<span class="line">    <span class="token attr-name">bindchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radioChange<span class="token punctuation">&quot;</span></span> </span>
<span class="line">    <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{selectType == &#39;radio&#39;}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> </span>
<span class="line">      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>{{radioIndex == item.index ? focusRadioClass : initRadioClass}}<span class="token punctuation">&#39;</span></span> </span>
<span class="line">      <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{radioData}}<span class="token punctuation">&quot;</span></span> </span>
<span class="line">      <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{index}}<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.index}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>item-index<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radio</span> </span>
<span class="line">          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token value css language-css"><span class="token property">opacity</span><span class="token punctuation">:</span> 0</span><span class="token punctuation">&#39;</span></span></span> </span>
<span class="line">          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.index}}<span class="token punctuation">&quot;</span></span> </span>
<span class="line">          <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.checked}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>index<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{item.index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>flex-item text-center<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{item.value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radio-group</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 多选组件 --&gt;</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox-group</span> </span>
<span class="line">    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox-group<span class="token punctuation">&quot;</span></span> </span>
<span class="line">    <span class="token attr-name">bindchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkboxChange<span class="token punctuation">&quot;</span></span> </span>
<span class="line">    <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{selectType == &#39;checkbox&#39;}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> </span>
<span class="line">      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>{{checkbox.checkStatus(checkboxIndexArr, item.index) ? focusCheckboxClass : initCheckboxClass}}<span class="token punctuation">&#39;</span></span> </span>
<span class="line">      <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{checkboxData}}<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{index}}<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.index}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>item-index<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>checkbox</span> </span>
<span class="line">          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token value css language-css"><span class="token property">opacity</span><span class="token punctuation">:</span> 0</span><span class="token punctuation">&#39;</span></span></span> </span>
<span class="line">          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.index}}<span class="token punctuation">&quot;</span></span> </span>
<span class="line">          <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{item.checked}}<span class="token punctuation">&quot;</span></span></span>
<span class="line">          <span class="token attr-name">disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{checkboxIndexArr.length &gt; maxLength - 1 &amp;&amp; !checkbox.checkStatus(checkboxIndexArr, item.index)}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>index<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{item.index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>flex-item text-center<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        {{item.value}}</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{checkboxIndexArr.prototype}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>checkbox-group</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss"><span>wxss</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre class="language-css"><code><span class="line"><span class="token selector">.flex-wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flex-item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.text-center</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.radio-group, .checkbox-group</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 490rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.radio-group label, .checkbox-group label</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span> </span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 68rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 68rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1rpx solid #000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 30rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.radio-group label.active, .checkbox-group label.active</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #fcc919<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.radio-group label .item-index, .checkbox-group label .item-index</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 40rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 0 20rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 68rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.radio-group label .item-index .index, .checkbox-group label .item-index .index</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>javascript</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 组件的属性列表</span></span>
<span class="line">  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">selectType</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">radioData</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">checkboxData</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">isHidden</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 组件的初始数据</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">initRadioClass</span><span class="token operator">:</span> <span class="token string">&#39;radio flex-wrapper flex-direction-row&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">focusRadioClass</span><span class="token operator">:</span> <span class="token string">&#39;radio flex-wrapper flex-direction-row active&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">initCheckboxClass</span><span class="token operator">:</span> <span class="token string">&#39;checkbox flex-wrapper flex-direction-row&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">focusCheckboxClass</span><span class="token operator">:</span> <span class="token string">&#39;checkbox flex-wrapper flex-direction-row active&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">radioIndex</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">checkboxIndexArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 组件的方法列表</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// radio选择改变触发的函数</span></span>
<span class="line">    <span class="token function-variable function">radioChange</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> value <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radioIndex</span><span class="token operator">:</span> value</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">&#39;radioChange&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// checkbox选择改变触发的函数</span></span>
<span class="line">    <span class="token function-variable function">checkboxChange</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> value <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">checkboxIndexArr</span><span class="token operator">:</span> value</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">&#39;checkboxChange&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h2><p>\b其中，单选框比较简单，重点在于多选框。其中比较坑的地方就是需要手动来控制 <code>checkboxIndexArr</code> 的内容。<br></p><ol><li><p>小程序多选框\b在选中后会返回一个所选中的value的数组 <code>checkboxIndexArr</code> ，所以我们自定义的样式需要通过判断当前框的 <code>value</code> 是不是在 <code>checkboxIndexArr</code> 中（切记，checkboxIndexArr中的每个值的类型都是String），\b小程序在wxml中绑定方法时没办法携带参数的，所以需要需要将这个函数写在 <code>wxs</code> 中。</p></li><li><p>如果需要有默认选中，需要单独把默认选中的框的样式激活，同时手动将默认选中的框的checked设置为 <code>true</code> ，并将其 <code>value</code> 放入 <code>checkboxIndexArr</code> 中。</p></li><li><p>如果需要做全选和全不选，需要在放置一个变量 <code>checked</code> ，\b\bBoolean属性，通过控制 <code>checked</code> 开控制是否全选，但是，还是需要手动\b来添加和清空 <code>checkboxIndexArr</code> 的内容。</p></li><li><p>如果需要做反选功能，需要在数据中单独设置一个控制\b是否选中的checked属性，通过改变数据\bchecked的值来改变多选框的选中效果，与上面一样，还是要手动\b来添加和清空 <code>checkboxIndexArr</code> 的内容。</p></li></ol>`,14),r={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"午后南杂",-1);function d(v,m){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[l("个人博客："),n("a",r,[k,c(s)])])])}const g=a(i,[["render",d],["__file","081501.html.vue"]]),h=JSON.parse('{"path":"/blogs/frontEnd/2018/081501.html","title":"小程序多选和单选组件的封装","lang":"zh-CN","frontmatter":{"title":"小程序多选和单选组件的封装","date":"2018-08-15T00:00:00.000Z","tags":["小程序"],"categories":["frontEnd"]},"headers":[{"level":2,"title":"效果","slug":"效果","link":"#效果","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":2,"title":"分析","slug":"分析","link":"#分析","children":[]}],"git":{"createdTime":1536508429000,"updatedTime":1590769810000,"contributors":[{"name":"reco_luan","email":"recoluan@outlook.com","commits":1}]},"filePathRelative":"blogs/frontEnd/2018/081501.md"}');export{g as comp,h as data};
