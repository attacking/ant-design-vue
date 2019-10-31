(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1475:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <a-rate v-model="value"/>\n',script:"\n  export default {\n    data() {\n      return {\n        value: 2,\n      };\n    },\n  };\n",style:null,us:"\n#### Basic\nThe simplest usage.\n",cn:"\n#### 基本\n最简单的用法。\n",sourceCode:'<template>\n  <a-rate v-model="value" />\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value: 2,\n      };\n    },\n  };\n<\/script>\n'}}},[s("template",{slot:"component"},[s("a-rate",{model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"基本"}},[t._v("基本 "),s("a",{staticClass:"anchor",attrs:{href:"#基本","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("最简单的用法。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Basic"}},[t._v("Basic "),s("a",{staticClass:"anchor",attrs:{href:"#Basic","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("The simplest usage.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" />")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    data() {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n        "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(",\n      };\n    },\n  };\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)};e._withStripped=!0;var l={data:function(){return{value:2}}},n=s(32),v=Object(n.a)(l,e,[],!1,null,null,null);v.options.__file="components/rate/demo/basic.md";var _=v.exports,r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <a-rate :defaultValue="2.5" allowHalf=""/>\n',script:null,style:null,us:"\n#### Half star\nSupport select half star.\n",cn:"\n#### 半星\n支持选中半星。\n",sourceCode:'<template>\n  <a-rate :defaultValue="2.5" allowHalf />\n</template>\n'}}},[s("template",{slot:"component"},[s("a-rate",{attrs:{defaultValue:2.5,allowHalf:""}})],1),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"半星"}},[t._v("半星 "),s("a",{staticClass:"anchor",attrs:{href:"#半星","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("支持选中半星。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Half-star"}},[t._v("Half star "),s("a",{staticClass:"anchor",attrs:{href:"#Half-star","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Support select half star.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2.5"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("allowHalf")]),t._v(" />")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)};r._withStripped=!0;var i=Object(n.a)({},r,[],!1,null,null,null);i.options.__file="components/rate/demo/half.md";var c=i.exports,o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <span>\n    <a-rate :tooltips="desc" v-model="value"/>\n    <span class="ant-rate-text">{{desc[value - 1]}}</span>\n  </span>\n',script:"\n  export default {\n    data() {\n      return {\n        value: 3,\n        desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],\n      };\n    },\n  };\n",style:null,us:"\n#### Show copywriting\nAdd copywriting in rate components.\n",cn:"\n#### 文案展现\n给评分组件加上文案展示。\n",sourceCode:"<template>\n  <span>\n    <a-rate :tooltips=\"desc\" v-model=\"value\" />\n    <span class=\"ant-rate-text\">{{desc[value - 1]}}</span>\n  </span>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value: 3,\n        desc: ['terrible', 'bad', 'normal', 'good', 'wonderful'],\n      };\n    },\n  };\n<\/script>\n"}}},[s("template",{slot:"component"},[s("span",[s("a-rate",{attrs:{tooltips:t.desc},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),t._v(" "),s("span",{staticClass:"ant-rate-text"},[t._v(t._s(t.desc[t.value-1]))])],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"文案展现"}},[t._v("文案展现 "),s("a",{staticClass:"anchor",attrs:{href:"#文案展现","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("给评分组件加上文案展示。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Show-copywriting"}},[t._v("Show copywriting "),s("a",{staticClass:"anchor",attrs:{href:"#Show-copywriting","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Add copywriting in rate components.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":tooltips")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"desc"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"ant-rate-text"')]),t._v(">")]),s("span",[t._v("{{")]),t._v("desc[value - 1]"),s("span",[t._v("}}")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    data() {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n        "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("3")]),t._v(",\n        "),s("span",{staticClass:"hljs-attr"},[t._v("desc")]),t._v(": ["),s("span",{staticClass:"hljs-string"},[t._v("'terrible'")]),t._v(", "),s("span",{staticClass:"hljs-string"},[t._v("'bad'")]),t._v(", "),s("span",{staticClass:"hljs-string"},[t._v("'normal'")]),t._v(", "),s("span",{staticClass:"hljs-string"},[t._v("'good'")]),t._v(", "),s("span",{staticClass:"hljs-string"},[t._v("'wonderful'")]),t._v("],\n      };\n    },\n  };\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)};o._withStripped=!0;var d={data:function(){return{value:3,desc:["terrible","bad","normal","good","wonderful"]}}},p=Object(n.a)(d,o,[],!1,null,null,null);p.options.__file="components/rate/demo/text.md";var h=p.exports,u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <a-rate :defaultValue="2" disabled=""/>\n',script:null,style:null,us:"\n#### Read only\nRead only, can't use mouse to interact.\n",cn:"\n#### 只读\n只读，无法进行鼠标交互。\n",sourceCode:'<template>\n  <a-rate :defaultValue="2" disabled />\n</template>\n'}}},[s("template",{slot:"component"},[s("a-rate",{attrs:{defaultValue:2,disabled:""}})],1),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"只读"}},[t._v("只读 "),s("a",{staticClass:"anchor",attrs:{href:"#只读","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("只读，无法进行鼠标交互。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Read-only"}},[t._v("Read only "),s("a",{staticClass:"anchor",attrs:{href:"#Read-only","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Read only, can't use mouse to interact.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" />")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)};u._withStripped=!0;var m=Object(n.a)({},u,[],!1,null,null,null);m.options.__file="components/rate/demo/disabled.md";var C=m.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-rate :defaultValue="3"/> allowClear: true\n    <br/>\n    <a-rate :allowClear="false" :defaultValue="3"/> allowClear: false\n    <br/>\n  </div>\n',script:null,style:null,us:"\n#### Clear star\nSupport set allow to clear star when click again.\n",cn:"\n#### 清除\n支持允许或者禁用清除。\n",sourceCode:'<template>\n  <div>\n    <a-rate :defaultValue="3" /> allowClear: true\n    <br />\n    <a-rate :allowClear="false" :defaultValue="3" /> allowClear: false\n    <br />\n  </div>\n</template>\n'}}},[s("template",{slot:"component"},[s("div",[s("a-rate",{attrs:{defaultValue:3}}),t._v(" allowClear: true\n    "),s("br"),t._v(" "),s("a-rate",{attrs:{allowClear:!1,defaultValue:3}}),t._v(" allowClear: false\n    "),s("br")],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"清除"}},[t._v("清除 "),s("a",{staticClass:"anchor",attrs:{href:"#清除","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("支持允许或者禁用清除。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Clear-star"}},[t._v("Clear star "),s("a",{staticClass:"anchor",attrs:{href:"#Clear-star","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Support set allow to clear star when click again.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v(" />")]),t._v(" allowClear: true\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":allowClear")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v(" />")]),t._v(" allowClear: false\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(" />")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)};f._withStripped=!0;var j=Object(n.a)({},f,[],!1,null,null,null);j.options.__file="components/rate/demo/clear.md";var b=j.exports,g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-rate allowHalf="">\n      <a-icon slot="character" type="heart"/>\n    </a-rate>\n    <br/>\n    <a-rate character="A" allowHalf="" style="fontSize: 36px"/>\n    <br/>\n    <a-rate character="好" allowHalf=""/>\n    <br/>\n  </div>\n',script:null,style:null,us:"\n#### Other Character\nReplace the default star to other character like alphabet, digit, iconfont or even Chinese word.\n",cn:"\n#### 其他字符\n可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。\n",sourceCode:'<template>\n  <div>\n    <a-rate allowHalf>\n      <a-icon slot="character" type="heart" />\n    </a-rate>\n    <br />\n    <a-rate character="A" allowHalf style="fontSize: 36px" />\n    <br />\n    <a-rate character="好" allowHalf />\n    <br />\n  </div>\n</template>\n'}}},[s("template",{slot:"component"},[s("div",[s("a-rate",{attrs:{allowHalf:""}},[s("a-icon",{attrs:{slot:"character",type:"heart"},slot:"character"})],1),t._v(" "),s("br"),t._v(" "),s("a-rate",{staticStyle:{fontSize:"36px"},attrs:{character:"A",allowHalf:""}}),t._v(" "),s("br"),t._v(" "),s("a-rate",{attrs:{character:"好",allowHalf:""}}),t._v(" "),s("br")],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"其他字符"}},[t._v("其他字符 "),s("a",{staticClass:"anchor",attrs:{href:"#其他字符","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Other-Character"}},[t._v("Other Character "),s("a",{staticClass:"anchor",attrs:{href:"#Other-Character","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("allowHalf")]),t._v(">")]),t._v("\n      "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-icon")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"character"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"heart"')]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("character")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"A"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("allowHalf")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"fontSize: 36px"')]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-rate")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("character")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"好"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("allowHalf")]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(" />")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)};g._withStripped=!0;var w=Object(n.a)({},g,[],!1,null,null,null);w.options.__file="components/rate/demo/character.md";var y=w.exports,x=function(){var t=this.$createElement;this._self._c;return this._m(0)};x._withStripped=!0;var S=Object(n.a)({},x,[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h2",{attrs:{id:"API"}},[t._v("API "),s("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("allowClear")]),t._v(" "),s("td",[t._v("是否允许再次点击后清除")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("allowHalf")]),t._v(" "),s("td",[t._v("是否允许半选")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("autoFocus")]),t._v(" "),s("td",[t._v("自动获取焦点")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("character")]),t._v(" "),s("td",[t._v("自定义字符")]),t._v(" "),s("td",[t._v('String or slot="character"')]),t._v(" "),s("td",[s("code",{pre:!0},[t._v('<Icon type="star" />')])])]),t._v(" "),s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("star 总数")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("defaultValue")]),t._v(" "),s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("只读，无法进行交互")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("tooltips")]),t._v(" "),s("td",[t._v("自定义每项的提示信息")]),t._v(" "),s("td",[t._v("string[]")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("value(v-model)")]),t._v(" "),s("td",[t._v("当前数，受控值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("h3",{attrs:{id:"事件"}},[t._v("事件 "),s("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blur")]),t._v(" "),s("td",[t._v("失去焦点时的回调")]),t._v(" "),s("td",[t._v("Function()")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("选择时的回调")]),t._v(" "),s("td",[t._v("Function(value: number)")])]),t._v(" "),s("tr",[s("td",[t._v("focus")]),t._v(" "),s("td",[t._v("获取焦点时的回调")]),t._v(" "),s("td",[t._v("Function()")])]),t._v(" "),s("tr",[s("td",[t._v("hoverChange")]),t._v(" "),s("td",[t._v("鼠标经过时数值变化的回调")]),t._v(" "),s("td",[t._v("Function(value: number)")])]),t._v(" "),s("tr",[s("td",[t._v("keydown")]),t._v(" "),s("td",[t._v("按键回调")]),t._v(" "),s("td",[t._v("Function(event)")])])])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[t._v("方法 "),s("a",{staticClass:"anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blur()")]),t._v(" "),s("td",[t._v("移除焦点")])]),t._v(" "),s("tr",[s("td",[t._v("focus()")]),t._v(" "),s("td",[t._v("获取焦点")])])])])])}],!1,null,null,null);S.options.__file="components/rate/index.zh-CN.md";var k=S.exports,H=function(){var t=this.$createElement;this._self._c;return this._m(0)};H._withStripped=!0;var V=Object(n.a)({},H,[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h2",{attrs:{id:"API"}},[t._v("API "),s("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("allowClear")]),t._v(" "),s("td",[t._v("whether to allow clear when click again")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("allowHalf")]),t._v(" "),s("td",[t._v("whether to allow semi selection")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("autoFocus")]),t._v(" "),s("td",[t._v("get focus when component mounted")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("character")]),t._v(" "),s("td",[t._v("custom character of rate")]),t._v(" "),s("td",[t._v('String or slot="character"')]),t._v(" "),s("td",[s("code",{pre:!0},[t._v('<Icon type="star" />')])])]),t._v(" "),s("tr",[s("td",[t._v("count")]),t._v(" "),s("td",[t._v("star count")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("defaultValue")]),t._v(" "),s("td",[t._v("default value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("read only, unable to interact")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("tooltips")]),t._v(" "),s("td",[t._v("Customize tooltip by each character")]),t._v(" "),s("td",[t._v("string[]")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("value(v-model)")]),t._v(" "),s("td",[t._v("current value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("h3",{attrs:{id:"events"}},[t._v("events "),s("a",{staticClass:"anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Events Name")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Arguments")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blur")]),t._v(" "),s("td",[t._v("callback when component lose focus")]),t._v(" "),s("td",[t._v("Function()")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("callback when select value")]),t._v(" "),s("td",[t._v("Function(value: number)")])]),t._v(" "),s("tr",[s("td",[t._v("focus")]),t._v(" "),s("td",[t._v("callback when component get focus")]),t._v(" "),s("td",[t._v("Function()")])]),t._v(" "),s("tr",[s("td",[t._v("hoverChange")]),t._v(" "),s("td",[t._v("callback when hover item")]),t._v(" "),s("td",[t._v("Function(value: number)")])]),t._v(" "),s("tr",[s("td",[t._v("keydown")]),t._v(" "),s("td",[t._v("callback when keydown on component")]),t._v(" "),s("td",[t._v("Function(event)")])])])]),t._v(" "),s("h2",{attrs:{id:"Methods"}},[t._v("Methods "),s("a",{staticClass:"anchor",attrs:{href:"#Methods","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blur()")]),t._v(" "),s("td",[t._v("remove focus")])]),t._v(" "),s("tr",[s("td",[t._v("focus()")]),t._v(" "),s("td",[t._v("get focus")])])])])])}],!1,null,null,null);V.options.__file="components/rate/index.en-US.md";var A=V.exports,E="# Rate\n\n  评分组件。\n\n  ## 何时使用\n\n  - 对评价进行展示。\n  - 对事物进行快速的评级操作。\n            ## 代码演示",O="# Rate\n\n  Rate component.\n\n  # When To Use\n\n  - Show evaluation.\n  - A quick rating operation on something.\n  ## Examples\n  ",F={category:"Components",subtitle:"评分",type:"Data Entry",cols:1,title:"Rate",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:E,us:O}}),t("br"),t(_),t("br"),t(c),t("br"),t(h),t("br"),t(C),t("br"),t(b),t("br"),t(y),t("br"),t("api",[t("template",{slot:"cn"},[t(k)]),t(A)])])}},R=Object(n.a)(F,void 0,void 0,!1,null,null,null);R.options.__file="components/rate/demo/index.vue";a.default=R.exports}}]);