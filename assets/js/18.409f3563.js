(window.webpackJsonp=window.webpackJsonp||[]).push([[18,27],{1532:function(t,a,n){"use strict";n.r(a);var e={name:"App",components:{authentication:n(536).default},data:function(){return{}}},i=n(2),s=Object(i.a)(e,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hhx-前端平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hhx-前端平台"}},[t._v("#")]),t._v(" HHX 前端平台")]),t._v(" "),e("h2",{attrs:{id:"平台内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台内容"}},[t._v("#")]),t._v(" 平台内容")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("平台共包含两部分，私服插件（三模块：组件、方法、小工具）与辅助文档（代码规范、git 规范、NPM 私服使用、脚手架使用等）\n")])])]),e("h2",{attrs:{id:"平台目的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台目的"}},[t._v("#")]),t._v(" 平台目的")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("开发人员可借助平台的私服插件可视化、可操作性来实现自定义插件快速理解与引用，整合文档模块约束代码规范化\n")])])]),e("h2",{attrs:{id:"平台演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台演示"}},[t._v("#")]),t._v(" 平台演示")]),t._v(" "),[e("div",{attrs:{id:"app"}},[e("authentication",[e("section",[e("video",{attrs:{width:"420",height:"240",controls:""}},[e("source",{attrs:{src:n(714),type:"video/mp4"}}),t._v(" "),e("source",{attrs:{src:n(714),type:"video/ogg"}})])])])],1)]],2)}),[],!1,null,null,null);a.default=s.exports},472:function(t,a,n){},509:function(t,a,n){"use strict";n(472)},536:function(t,a,n){"use strict";n.r(a);var e={name:"authentication",data:function(){return{psw:"",admin:"",errorTip:"",encInfoShow:!1,authenticationLoad:!1,authenticationType:!1,authenticationTypeList:["账户校验","联系开发人员"]}},methods:{handleClickAuthentication:function(t){t?window.open("/relation"):this.authenticationLoad=!0},handleClickBtn:function(){"korains"!=this.psw||"korains"!=this.admin?this.errorTip="(账户不匹配，请联系开发人员)":this.encInfoShow=!0}}},i=(n(509),n(2)),s=Object(i.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"authentication"},[t.authenticationType?t._e():n("nav",{on:{click:function(a){t.authenticationType=!0}}},[t._v("点击查看")]),t._v(" "),t.authenticationType?n("div",{staticClass:"navList"},t._l(t.authenticationTypeList,(function(a,e){return n("nav",{key:a.id,on:{click:function(a){return t.handleClickAuthentication(e)}}},[e?n("span",[t._v("|")]):t._e(),t._v("\n            "+t._s(a)+"\n        ")])})),0):t._e(),t._v(" "),t.authenticationLoad&&!t.encInfoShow?n("main",[n("label",{attrs:{for:"账户"}},[t._v("账户")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.admin,expression:"admin"}],attrs:{type:"text"},domProps:{value:t.admin},on:{input:function(a){a.target.composing||(t.admin=a.target.value)}}}),t._v(" "),n("label",{attrs:{for:"密码"}},[t._v("密码")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.psw,expression:"psw"}],attrs:{type:"password"},domProps:{value:t.psw},on:{input:function(a){a.target.composing||(t.psw=a.target.value)}}}),t._v(" "),n("span",{staticClass:"btn",on:{click:t.handleClickBtn}},[t._v("校验")]),t._v(" "),n("span",{staticClass:"error"},[t._v(t._s(t.errorTip))])]):t._e(),t._v(" "),t.encInfoShow?t._t("default"):t._e()],2)}),[],!1,null,"eb01faae",null);a.default=s.exports},714:function(t,a,n){t.exports=n.p+"assets/media/demo.3f86d5f9.mp4"}}]);