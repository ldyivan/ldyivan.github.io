(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"49d1":function(t,e,n){var i=n("ca62");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5559aa69",i,!0,{sourceMap:!1,shadowMode:!1})},"5f8e":function(t,e,n){"use strict";n.r(e);var i=n("fb24"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},"8fb6":function(t,e,n){"use strict";var i=n("49d1"),a=n.n(i);a.a},"9c30":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/images/api.png"}}),n("v-uni-view",{staticClass:"text-area"},[n("v-uni-text",{staticStyle:{width:"100%",color:"#fb0","text-align":"center","margin-top":"10px","margin-bottom":"20px","font-size":"45rpx","font-weight":"900"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.about.apply(void 0,arguments)}}},[t._v("远智聊天")]),n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-text",{staticClass:"title",staticStyle:{color:"#1296db","margin-top":"15px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigorTo("/pages/index/webView?url=https://www.hzv5.cn/")}}},[t._v(t._s(t.hit))])],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"20px"}},[n("v-uni-view",{staticStyle:{color:"#8f8f94"}},[t._v("接口选择")]),n("v-uni-picker",{attrs:{value:t.selected,range:t.list},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{"font-size":"25rpx",color:"#8f8f94"}},[t._v(t._s(t.list[t.selected]))])],1)],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0px"}},[n("v-uni-text",{staticStyle:{color:"#8f8f94"}},[t._v("联网能力")]),n("v-uni-switch",{attrs:{checked:t.isChecked},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.aboutMe.apply(void 0,arguments)}}},[n("v-uni-text",{staticStyle:{color:"#8f8f94"}},[t._v("软件关于")]),n("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/arrow_right.png"}})],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigorTo("/pages/index/webView?url=https://dz.hzv5.cn/z")}}},[n("v-uni-text",{staticStyle:{color:"#8f8f94"}},[t._v("赞助作者")]),n("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/arrow_right.png"}})],1),n("v-uni-view",{staticClass:"item",staticStyle:{"margin-top":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkUpdate.apply(void 0,arguments)}}},[n("v-uni-text",{staticStyle:{color:"#8f8f94"}},[t._v("检查更新")]),n("v-uni-image",{staticClass:"arrow",attrs:{src:"/static/images/arrow_right.png"}})],1)],1)},a=[]},afc2:function(t,e,n){"use strict";n.r(e);var i=n("9c30"),a=n("5f8e");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("8fb6");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"030d4cd6",null,!1,i["a"],void 0);e["default"]=s.exports},ca62:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*\r\npage {\r\n\tbackground-color: #f2f2f2;\r\n}\r\n*/.content[data-v-030d4cd6]{text-align:center;display:flex;padding:10dp;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-030d4cd6]{height:%?100?%;width:%?100?%;margin-top:%?100?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-030d4cd6]{display:flex;text-align:center;justify-content:center;flex-direction:column;align-items:flex-start}.title[data-v-030d4cd6]{width:100%;text-align:center;font-size:%?28?%;color:#8f8f94}.interface[data-v-030d4cd6]{word-break:break-all;width:%?700?%;margin-top:%?20?%;height:%?80?%}.item[data-v-030d4cd6]{margin:%?20?% %?30?% 0 %?30?%;height:%?90?%;width:85%;background-color:hsla(0,0%,100%,.2);display:flex;flex-direction:row;padding:0 %?30?%;justify-content:space-between;align-items:center}.arrow[data-v-030d4cd6]{height:%?28?%;width:%?16?%}',""]),t.exports=e},fb24:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("29bd"),a={data:function(){return{hit:"(免翻，免费，不限制次数 >)",title:"本程序使用的是GPT3.5模型\n支持上下文联系的能力",isChecked:!1,list:["默认(GPT3.5)","备用(GPT3.5-Turbo)","文生图GPT","备用2(GPT3.5)","Llama","Vicuna","ChatGLM2","通义千问"],selected:0}},onLoad:function(){var t=uni.getStorageSync("netType"),e=uni.getStorageSync("selected");""!=t&&null!=t&&void 0!=t&&(this.isChecked=t),""!=e&&null!=e&&void 0!=e&&(this.selected=e)},onShow:function(){},methods:{navigorTo:function(t){uni.navigateTo({url:t})},checkChange:function(e){this.isChecked=e.detail.value,t("log",this.isChecked," at pages/index/index.vue:128"),uni.setStorageSync("netType",this.isChecked)},aboutMe:function(t){uni.showModal({icon:"none",title:"关于",content:"版本v1.0.1\n\n好吗？嘿嘿... \n\n本软件完全免费，不限制次数使用。\n\n软件使用的大模型为GPT3.5，支持简单的上下文理解能力，解析代码能力，响应超时比较短（10秒左右），所以如果想处理太耗时间的问答操作，可能无法处理。\n\n么么哒！！"})},about:function(t){uni.showToast({icon:"none",title:"v1.0.1"})},handleChange:function(e){this.selected=e.detail.value,t("log","选中的值:",this.list[this.selected]," at pages/index/index.vue:149"),uni.setStorageSync("selected",this.selected)},checkUpdate:function(t){i.checkUpdate(!0)}}};e.default=a}).call(this,n("0de9")["log"])}}]);