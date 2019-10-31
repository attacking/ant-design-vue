(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1497:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this.$createElement;this._self._c;return this._m(0)};e._withStripped=!0;var r=a(32),n=Object(r.a)({},e,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h1",[s._v("快速上手")]),s._v(" "),a("p",[s._v("Ant Design Vue 致力于提供给程序员"),a("strong",[s._v("愉悦")]),s._v("的开发体验。")]),s._v(" "),a("blockquote",[a("p",[s._v("在开始之前，推荐先学习 "),a("a",{attrs:{href:"https://cn.vuejs.org/"}},[s._v("Vue")]),s._v(" 和 "),a("a",{attrs:{href:"http://babeljs.io/docs/learn-es2015/"}},[s._v("ES2015")]),s._v("，并正确安装和配置了 "),a("a",{attrs:{href:"https://nodejs.org/"}},[s._v("Node.js")]),s._v(" v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。")])]),s._v(" "),a("h2",{attrs:{id:"使用-vue-cli@3"}},[s._v("使用 vue-cli@3 "),a("a",{staticClass:"anchor",attrs:{href:"#使用-vue-cli@3","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("我们为新版的 vue-cli 准备了相应的 "),a("a",{attrs:{href:"https://github.com/vueComponent/vue-cli-plugin-ant-design"}},[s._v("Ant Design Vue")]),s._v(" 插件，你可以用它们快速地搭建一个基于 Ant Design Vue 的项目。")]),s._v(" "),a("h2",{attrs:{id:"在线演示"}},[s._v("在线演示 "),a("a",{staticClass:"anchor",attrs:{href:"#在线演示","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("最简单的使用方式参照以下 CodeSandbox 演示，也推荐 Fork 本例来进行 "),a("code",{pre:!0},[s._v("Bug Report")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://codesandbox.io/s/2wpk21kzvr"}},[a("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Vue Antd Template"}})])])]),s._v(" "),a("h2",{attrs:{id:"引入-ant-design-vue"}},[s._v("引入 ant-design-vue "),a("a",{staticClass:"anchor",attrs:{href:"#引入-ant-design-vue","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("h3",{attrs:{id:"1.-安装脚手架工具"}},[s._v("1. 安装脚手架工具 "),a("a",{staticClass:"anchor",attrs:{href:"#1.-安装脚手架工具","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[s._v("vue-cli")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ npm install -g @vue/cli\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# OR")]),s._v("\n$ yarn global add @vue/cli\n")])]),s._v(" "),a("h3",{attrs:{id:"2.-创建一个项目"}},[s._v("2. 创建一个项目 "),a("a",{staticClass:"anchor",attrs:{href:"#2.-创建一个项目","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("使用命令行进行初始化。")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ vue create antd-demo\n")])]),s._v(" "),a("p",[s._v("并配置项目。")]),s._v(" "),a("p",[s._v("若安装缓慢报错，可尝试用 "),a("code",{pre:!0},[s._v("cnpm")]),s._v(" 或别的镜像源自行安装："),a("code",{pre:!0},[s._v("rm -rf node_modules && cnpm install")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"3.-使用组件"}},[s._v("3. 使用组件 "),a("a",{staticClass:"anchor",attrs:{href:"#3.-使用组件","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ npm i --save ant-design-vue\n")])]),s._v(" "),a("p",[a("strong",[s._v("完整引入")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Antd "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./App'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/dist/antd.css'")]),s._v(";\nVue.config.productionTip = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n\nVue.use(Antd);\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* eslint-disable no-new */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { App },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<App/>'")]),s._v(",\n});\n")])]),s._v(" "),a("p",[s._v("以上代码便完成了 Antd 的引入。需要注意的是，样式文件需要单独引入。")]),s._v(" "),a("p",[a("strong",[s._v("局部导入组件")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button, message } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./App'")]),s._v(";\n\nVue.config.productionTip = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* v1.1.2 */")]),s._v("\nVue.component(Button.name, Button);\nVue.component(Button.Group.name, Button.Group);\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* v1.1.3+ 自动注册Button下组件，如Button.Group */")]),s._v("\nVue.use(Button);\n\nVue.prototype.$message = message;\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* eslint-disable no-new */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { App },\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<App/>'")]),s._v(",\n});\n")])]),s._v(" "),a("blockquote",[a("p",[s._v("你可以在左侧菜单选用更多组件。")])]),s._v(" "),a("h3",{attrs:{id:"4.-组件列表"}},[s._v("4. 组件列表 "),a("a",{staticClass:"anchor",attrs:{href:"#4.-组件列表","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vueComponent/ant-design-vue/blob/master/site/components.js"}},[s._v("完整组件列表")])]),s._v(" "),a("h2",{attrs:{id:"兼容性"}},[s._v("兼容性 "),a("a",{staticClass:"anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Ant Design Vue 支持所有的现代浏览器和 IE9+。")]),s._v(" "),a("p",[s._v("对于 IE 系列浏览器，需要提供 "),a("a",{attrs:{href:"https://github.com/es-shims/es5-shim"}},[s._v("es5-shim")]),s._v(" 和 "),a("a",{attrs:{href:"https://github.com/paulmillr/es6-shim"}},[s._v("es6-shim")]),s._v(" 等 Polyfills 的支持。")]),s._v(" "),a("p",[s._v("如果你使用了 babel，强烈推荐使用 "),a("a",{attrs:{href:"https://babeljs.io/docs/usage/polyfill/"}},[s._v("babel-polyfill")]),s._v(" 和 "),a("a",{attrs:{href:"https://babeljs.io/docs/plugins/transform-runtime/"}},[s._v("babel-plugin-transform-runtime")]),s._v(" 来替代以上两个 shim。")]),s._v(" "),a("blockquote",[a("p",[s._v("避免同时使用 babel 和 shim 两种兼容方法，以规避 "),a("a",{attrs:{href:"https://github.com/ant-design/ant-design/issues/6512"}},[s._v("#6512")]),s._v(" 中所遇问题")])]),s._v(" "),a("h2",{attrs:{id:"按需加载"}},[s._v("按需加载 "),a("a",{staticClass:"anchor",attrs:{href:"#按需加载","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("如果你在开发环境的控制台看到下面的提示，那么你可能使用了 "),a("code",{pre:!0},[s._v("import { Button } from 'ant-design-vue';")]),s._v(" 的写法引入了 antd 下所有的模块，这会影响应用的网络性能。")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":""}},[s._v("You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.\n")])]),s._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:""}})])]),s._v(" "),a("p",[s._v("可以通过以下的写法来按需加载组件。")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/lib/button'")]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/lib/button/style'")]),s._v("; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 或者 ant-design-vue/lib/button/style/css 加载 css 文件")]),s._v("\n")])]),s._v(" "),a("p",[s._v("如果你使用了 babel，那么可以使用 "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(" 来进行按需加载，加入这个插件后。你可以仍然这么写：")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Button } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ant-design-vue'")]),s._v(";\n")])]),s._v(" "),a("p",[s._v("插件会帮你转换成 "),a("code",{pre:!0},[s._v("ant-design-vue/lib/xxx")]),s._v(" 的写法。另外此插件配合 "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import#usage"}},[s._v("style")]),s._v(" 属性可以做到模块样式的按需自动加载。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意，babel-plugin-import 的 "),a("code",{pre:!0},[s._v("style")]),s._v(" 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 "),a("code",{pre:!0},[s._v("import 'ant-design-vue/dist/antd.css")]),s._v(" 手动引入，并覆盖全局样式。")])]),s._v(" "),a("h2",{attrs:{id:"配置主题和字体"}},[s._v("配置主题和字体 "),a("a",{staticClass:"anchor",attrs:{href:"#配置主题和字体","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/docs/vue/customize-theme-cn"}},[s._v("改变主题")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"}},[s._v("使用本地字体")])])]),s._v(" "),a("h2",{attrs:{id:"小贴士"}},[s._v("小贴士 "),a("a",{staticClass:"anchor",attrs:{href:"#小贴士","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("ul",[a("li",[s._v("你可以享用 "),a("code",{pre:!0},[s._v("npm")]),s._v(" 生态圈里的所有模块。")]),s._v(" "),a("li",[s._v("虽然 Vue 官方推荐模板编写组件，不过对于复杂组件，"),a("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx"}},[s._v("jsx")]),s._v("未必不是一个更好的选择。")])])])}],!1,null,null,null);n.options.__file="docs/vue/getting-started.zh-CN.md";t.default=n.exports}}]);