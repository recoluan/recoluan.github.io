(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{200:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("个人猜想，小程序本身属于单页面应用，代码的运行权限没有处理好，就像上面这种情况，B页面的代码穿越到了A页面的环境里面，并且执行。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),n("p",[t._v("个人博客："),n("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("午后南杂")]),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("最近在做小程序的时候遇到这么一个有趣的问题，就是从A页面跳转到B页面，如果B页面需要在接口加载之后更改title，\n并且如果接口请求过慢，还灭有请求完毕时就点击返回按钮回到A页面，这时B页面的请求会继续执行，并在执行完毕后修改了A页面的title。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 原因")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("既然B页面的请求方法可以在A页面执行，那么在B页面的方法中获取的当前的页面路由时就有可能可以获取到A页面的路由，经过测试果然不出所料。")]),t._v(" "),n("li",[t._v("所以，可以这样来解决这个问题：在B页面的onLoad中获取当前页面路径，应该是"),n("code",[t._v("/b")]),t._v("，然后在方法中再次获取当前路径，可能是"),n("code",[t._v("/b")]),t._v("，也可能是"),n("code",[t._v("/a")]),t._v("，\n若是"),n("code",[t._v("/a")]),t._v("，则是上面提到问题情况，这个时候就不用取改变title了，若是"),n("code",[t._v("/b")]),t._v("，则可以更改。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// utils.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("getCurrentRouter")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getCurrentPages")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      len "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("len "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("getCurrentRouter"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// b.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("getCurrentRouter"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getDataForB "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'../../../servies/services.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("Page")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("onLoad")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRouter "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getCurrentRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取数据")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("getData")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("getDataForB")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取数据后判断router是否一致")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentRouter "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getCurrentRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        wx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setNavigationBarTitle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'要修改的title'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);o.options.__file="2018081101.md";s.default=o.exports}}]);