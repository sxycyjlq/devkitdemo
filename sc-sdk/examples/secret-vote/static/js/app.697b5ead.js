(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},s={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-d8ba16d6":"e020f260"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-d8ba16d6":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-d8ba16d6":"84bf1b3b"}[e]+".css",s=u.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===n||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],d.parentNode.removeChild(d),r(a)},d.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}s[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0bc2":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return d}));r("d3b7");var n=r("bc3a"),o=r.n(n),s=r("a18c"),a=r("5f87"),i=r("5c96"),u=o.a.create({timeout:5e3});function c(e){return u({url:"/user/login",method:"post",data:e})}function l(){return u({url:"/user/logout",method:"delete"})}function f(){return u({url:"/vote_actions/show_vote_info_list",method:"get"})}function d(e){return u({url:"/vote_actions/vote",method:"post",data:e})}u.interceptors.request.use((function(e){return Object(a["a"])()&&(e.headers["X-CSRFToken"]=Object(a["a"])()),e}),(function(e){Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.status;return 403===t||(401===t?(Object(a["c"])(),Object(a["d"])(),s["a"].push("/login")):(Object(a["c"])(),Object(a["d"])(),s["a"].push("/login"),Object(i["Message"])({type:"error",showClose:!0,duration:0,message:"未知错误",offset:84}))),Promise.reject(e)}))},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],a=(r("034f"),r("2877")),i={},u=Object(a["a"])(i,o,s,!1,null,null,null),c=u.exports,l=r("a18c"),f=r("5c96"),d=r.n(f),p=(r("0fae"),r("1da1")),g=(r("96cf"),r("5f87")),h=["/login"];l["a"].beforeEach(function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=Object(g["a"])(),o||-1!==h.indexOf(t.path)?n():n("/login?redirect=".concat(t.path));case 2:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()),n["default"].use(d.a),new n["default"]({router:l["a"],render:function(e){return e(c)}}).$mount("#app")},"5f87":function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return l}));r("e9c4");var n="vote-token",o="vote-user-login";function s(e){window.sessionStorage.setItem(n,e)}function a(){return document.cookie.substring(10)||window.sessionStorage.getItem(n)}function i(){window.sessionStorage.removeItem(n)}function u(e){if(e){var t=JSON.stringify(e);window.localStorage.setItem(o,t)}}function c(){var e=window.localStorage.getItem(o);return e?JSON.parse(e):null}function l(){window.localStorage.removeItem(o)}},"65dd":function(e,t,r){e.exports=r.p+"img/icon-exclamation.6e0f9825.svg"},"85ec":function(e,t,r){},"90cb":function(e,t,r){e.exports=r.p+"img/icon-eye-open.681739ae.svg"},a18c:function(e,t,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0");var n=r("2b0e"),o=r("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-view"},[e._m(0),n("div",{staticClass:"middle-container"},[e._m(1),n("el-form",{ref:"validateLoginForm",staticClass:"login-form",attrs:{model:e.loginInfo,"label-position":"top",rules:e.rules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}}},[e.showLoginErrorInfo?n("el-alert",{staticClass:"login-error-info",attrs:{title:e.loginErrorText,type:"error","show-icon":""}}):e._e(),n("el-form-item",{attrs:{label:"用户名",prop:"username"}},[n("el-input",{attrs:{clearable:!0},model:{value:e.loginInfo.username,callback:function(t){e.$set(e.loginInfo,"username",t)},expression:"loginInfo.username"}}),n("div",{staticClass:"error-info",attrs:{slot:"error"},slot:"error"},[n("img",{attrs:{src:r("65dd")}}),e._v(" "+e._s(e.userInputError)+" ")])],1),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{clearable:!0,type:e.showPasswd?"text":"password",oncut:"return false",oncopy:"return false"},model:{value:e.loginInfo.password,callback:function(t){e.$set(e.loginInfo,"password",t)},expression:"loginInfo.password"}},[n("i",{staticClass:"eye-passwd",attrs:{slot:"suffix"},on:{click:e.changePasswdShow},slot:"suffix"},[e.showPasswd?e._e():n("img",{attrs:{src:r("f023")}}),e.showPasswd?n("img",{attrs:{src:r("90cb")}}):e._e()])]),n("div",{staticClass:"error-info",attrs:{slot:"error"},slot:"error"},[n("img",{attrs:{src:r("65dd")}}),e._v(" "+e._s(e.pwdInputError)+" ")])],1),n("el-button",{staticClass:"login-button",on:{click:e.handleLogin}},[e._v("登录")])],1)],1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"top-nav"},[r("div",{staticClass:"title"},[e._v(" 匿名投票应用 "),r("a",{attrs:{href:"https://gitee.com/kunpengcompute/devkitdemo/tree/main/sc-sdk/examples/secret-vote",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看说明文档")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"welcome-part"},[r("div",{staticClass:"title line-one"},[e._v("欢迎使用")]),r("div",{staticClass:"title line-two"},[e._v("匿名投票应用")]),r("div",{staticClass:"subtitle"},[e._v("基于鲲鹏TEE安全计算开发，")]),r("div",{staticClass:"subtitle"},[e._v("在保证数据隐私安全的情况下完成匿名投票")])])}],i=(r("d9e2"),r("5f87")),u=r("0bc2"),c={name:"UserLogin",created:function(){this.getVoteInfo()},data:function(){var e=this,t=function(t,r,n){r?r.length>=6&&r.length<=32?n():(n(new Error),e.userInputError="用户名长度为6-32个字符"):(n(new Error),e.userInputError="用户名不能为空")},r=function(t,r,n){r?r.length>=8&&r.length<=32?n():(n(new Error),e.pwdInputError="密码长度为8-32个字符"):(n(new Error),e.pwdInputError="密码不能为空")};return{showPasswd:!1,userInputError:"",pwdInputError:"",showLoginErrorInfo:!1,loginErrorText:"",loginInfo:{username:"",password:""},rules:{username:[{validator:t,trigger:"blur"}],password:[{validator:r,trigger:"blur"}]}}},methods:{getVoteInfo:function(){var e=this;Object(u["d"])().then((function(){e.$router.push("/vote")}))},changePasswdShow:function(){this.showPasswd=!this.showPasswd},handleLogin:function(){var e=this;this.$refs["validateLoginForm"].validate((function(t){t&&Object(u["a"])(e.loginInfo).then((function(t){var r=document.cookie.substring(10),n=t.status,o=t.data;200===n&&(Object(i["f"])(o),Object(i["e"])(r),e.$router.push("/vote"))})).catch((function(t){var r=t.response.data;e.showLoginErrorInfo=!0,e.loginErrorText=r.info_chinese||r.detail}))}))}}},l=c,f=(r("c1b1"),r("2877")),d=Object(f["a"])(l,s,a,!1,null,"2eb5e5bf",null),p=d.exports;n["default"].use(o["a"]);var g=[{path:"/",redirect:"/login"},{path:"/login",name:"UserLogin",component:p},{path:"/vote",name:"VoteView",component:function(){return r.e("chunk-d8ba16d6").then(r.bind(null,"7258"))}},{path:"*",redirect:"/login"}],h=new o["a"]({routes:g});t["a"]=h},c1b1:function(e,t,r){"use strict";r("e581")},e581:function(e,t,r){},f023:function(e,t,r){e.exports=r.p+"img/icon-eye-close.209b71c0.svg"}});
//# sourceMappingURL=app.697b5ead.js.map