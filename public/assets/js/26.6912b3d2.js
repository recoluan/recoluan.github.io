(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{197:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("首先了解一下GitLab Pages运行的原理。与GitHub不同的是，GitLab需要上传一个 "),n("code",[t._v(".gitlab-ci.yml")]),t._v(" 的文件，同时生成的项目文件必须要到 "),n("code",[t._v("/public")]),t._v(" 目录中，见"),n("a",{attrs:{href:"https://about.gitlab.com/features/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),n("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(2),n("p",[t._v("valine 的饮用必须放到mounted中，否则无法编译，报错，window is undefined")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("个人博客："),n("a",{attrs:{href:"http://blog.recoluan.com",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("午后南杂")]),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("最近在给公司架构一个新的项目，要求同时写出一个完整的文档，由于正好在浏览vue的GitHub浏览相关项目时，看到了 "),e("code",[this._v("Vuepress")]),this._v("，所以尝试了一把，所以把开发中的积累写下来。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("## .gitlab-ci.yml\n\nimage: node:9.11.1\n\npages:\n cache:\n   paths:\n   - node_modules/\n\n script:\n - npm install\n - npm run docs:build\n artifacts:\n   paths:\n   - public\n only:\n - master\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"持续更新中。。。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续更新中。。。","aria-hidden":"true"}},[this._v("#")]),this._v(" 持续更新中。。。")])}],!1,null,null,null);a.options.__file="2018090901.md";e.default=a.exports}}]);