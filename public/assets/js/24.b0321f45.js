(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{183:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("fetch")]),t._v(" 必然要替换 "),n("code",[t._v("XMLHttpRequest")]),t._v(" ，所以是时候尝试 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("fetch"),n("OutboundLink")],1),t._v(" 了；")]),t._v(" "),n("li",[t._v("本封装仅针对npm引入；")]),t._v(" "),n("li",[t._v("本封装依赖 "),n("a",{attrs:{href:"https://github.com/github/fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("es6-promise"),n("OutboundLink")],1),t._v(" 和 "),n("a",{attrs:{href:"https://github.com/stefanpenner/es6-promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("whatwg-fetch"),n("OutboundLink")],1),t._v("，分别对 "),n("code",[t._v("promise")]),t._v(" 和 "),n("code",[t._v("fetch")]),t._v(" 进行兼容性处理；")]),t._v(" "),n("li",[t._v("还有一种兼容性处理是依赖 "),n("a",{attrs:{href:"https://github.com/github/fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("es6-promise"),n("OutboundLink")],1),t._v(" 和"),n("a",{attrs:{href:"https://github.com/matthew-andrews/isomorphic-fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("isomorphic-fetch"),n("OutboundLink")],1),t._v(" ，但是看它的源码就会发现，"),n("code",[t._v("isomorphic-fetch")]),t._v(" 只不过是引用了 "),n("code",[t._v("whatwg-fetch")]),t._v(" ，并没有做二次开发，"),n("code",[t._v("isomorphic-fetch")]),t._v(" 只是将fetch添加为全局，以便其API在客户端和服务器之间保持一致，所以没必要。")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("个人博客："),n("a",{attrs:{href:"http://blog.recoluan.com",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("午后南杂")]),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"封装的主要内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装的主要内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 封装的主要内容")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[n("code",[t._v("fetch")]),t._v(" 的请求方式同 "),n("code",[t._v("$ajax")]),t._v(" 和 "),n("code",[t._v("axios")]),t._v(" 都不太一样，并且它本身的get请求同其他请求对数据的处理和herder也不太相同，所以为了统一请求行为，方便请求过程，将请求过程进行封装；")]),t._v(" "),n("li",[n("code",[t._v("fetch")]),t._v(" 请求的结果均返回到 "),n("code",[t._v(".then()")]),t._v(" 中，但是平时的习惯是是在 "),n("code",[t._v(".then()")]),t._v(" 中处理正确结果，"),n("code",[t._v(".catch()")]),t._v(" 中处理错误，所以对请求结果进行统一处理；")]),t._v(" "),n("li",[n("code",[t._v("fetch")]),t._v(" 本身没有 "),n("strong",[t._v("请求超时")]),t._v(" 这个概念，所以通过 "),n("code",[t._v("Promise.race")]),t._v(" 来处理，它的作用是多个promise同时运行，返回的结果以最快返回结果的那个promise的值为准。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"封装的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装的代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 封装的代码")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 处理promise和fetch的兼容性以及引入")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'es6-promise'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("polyfill")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'whatwg-fetch'")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 前置拼接url")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'***'")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 自定义headers")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" headers "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'Accept'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'application/json; version=3.13.0'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 处理get请求，传入参数对象拼接")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("formatUrl")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("values")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reduce")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("a"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("=")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("b"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("&`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'?'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" params"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("substring")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * @param url    (String) 接口URL\n * @param option (Object) 参数对象，包括method(请求方式，不填默认'get')，headers(设置请求头，选填)，data(请求参数，所有请求方式均适用)\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("recoFetch")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" option "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置请求超时的时间，默认10秒")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timeout "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n  option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" headers\n  option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'get'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toLocaleLowerCase")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 格式化get请求的数据(fetch的get请求需要需要将参数拼接到url后面)")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'get'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" url "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("formatUrl")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 对非get类请求头和请求体做处理")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'post'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'put'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'delete'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'application/json'")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 非get类请求传参时，需要将参数挂在body上")]),t._v("\n    option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("stringify")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 根据后台要求，如果有时候是java请求会用qs转")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// option.body = qs.stringify(option.data)")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("addTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("fetch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" url"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" option"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 对请求结果进行处理：fetch请求成功后返回的是json对象")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("parseJSON")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("json")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * 增加超时处理：fetch本身是没有请求超时处理的，所以可以通过\n * @param fetchPromise (Promise) fetch请求\n * @param timeout      (Number)  请求超时的时间\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("addTimeout")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetchPromise"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timeoutFn "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 请求超时的Promise")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeoutPromise "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function-variable function"}},[t._v("timeoutFn")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("reject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        code"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'timeOut'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'请求超时，请重试'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 声明Promise.race")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" racePromise "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("race")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    fetchPromise"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeoutPromise\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("timeoutFn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" racePromiseResult "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" status "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    racePromise\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        status "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parseJSON"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 将状态码添加到返回结果中，以备后用")]),t._v("\n        response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" status\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果返回码在300到900之间，将以错误返回，如果需要对错误统一处理，可以放在下面判断中")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token regex"}},[t._v("/^[3-9]\\d{2}$/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("test")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token function"}},[t._v("reject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 否则以正确值返回")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("resolve")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 请求出错则报错 recoFetch Error: ***")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'recoFetch Error:'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 将racePromise的结果返回")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" racePromiseResult\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" recoFetch\n")])])])}],!1,null,null,null);o.options.__file="2018091301.md";s.default=o.exports}}]);