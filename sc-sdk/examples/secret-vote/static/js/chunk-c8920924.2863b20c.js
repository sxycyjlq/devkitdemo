(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8920924"],{"22e3":function(t,e,o){"use strict";o("99d9")},7258:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vote-view"},[o("div",{staticClass:"top-nav"},[t._m(0),o("div",{staticClass:"nav-right-part"},[o("div",{staticClass:"show-username"},[t._v(t._s(t.userInfo.username))]),o("div",{staticClass:"sep"}),o("div",{staticClass:"logout",attrs:{title:"退出登录"},on:{click:function(e){return t.handleLogout()}}})])]),o("div",{staticClass:"vote-info"},[o("div",{staticClass:"vote-title"},[t._v(t._s(t.voteTitle))]),o("div",{staticClass:"vote-detail"},[t._v(t._s(t.voteDetail))])]),o("div",{staticClass:"color-sep"},[t.showVoteErrorInfo?o("el-alert",{staticClass:"vote-error-info",attrs:{title:t.voteErrorText,type:"error","show-icon":""},on:{close:t.closeVoteError}}):t._e()],1),t.voteStatus?t._e():o("el-radio-group",{staticClass:"vote-radio-group",model:{value:t.voteSelectId,callback:function(e){t.voteSelectId=e},expression:"voteSelectId"}},t._l(t.voteOption,(function(e){return o("el-radio",{key:e.vote_id,attrs:{label:e.vote_id,border:""}},[t._v(t._s(e.vote_opt_message))])})),1),t.voteStatus?o("ul",{staticClass:"show-vote-result"},t._l(t.voteOption,(function(e){return o("li",{key:e.option_id,staticClass:"result-item"},[o("div",{staticClass:"mask",style:{width:t.percentWidth(e.votes_number)}}),o("div",{staticClass:"vote-message"},[t._v(t._s(e.vote_opt_message))]),o("div",{staticClass:"right-part"},[t._v(" "+t._s(e.votes_number+"("+Math.round(e.votes_number/t.voteCount*1e4)/100+"%)")+" ")])])})),0):t._e(),t.voteStatus?t._e():o("el-button",{staticClass:"vote-button",class:""!==t.voteSelectId?"":"disable-button",attrs:{disabled:t.buttonDisabled,title:""!==t.voteSelectId?"":"请选择一个选项"},on:{click:function(e){return t.handleVote()}}},[t._v("投票")]),t.voteStatus?o("div",{staticClass:"vote-sum"},[t._v(" 您已投票，现有"+t._s(t.voteCount)+"人参与投票 ")]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[t._v(" 匿名投票应用 "),o("a",{attrs:{href:"https://gitee.com/kunpengcompute/devkitdemo/tree/main/sc-sdk/examples/secret-vote",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看说明文档")])])}],n=(o("d3b7"),o("159b"),o("5f87")),a=o("0bc2"),r=o("5c96"),c={name:"VoteView",data:function(){return{voteStatus:!1,voteSelectId:"",voteTitle:"",voteDetail:"",showVoteErrorInfo:!1,voteErrorText:"",voteOption:[],buttonDisabled:!1}},created:function(){this.getVoteInfo()},computed:{userInfo:function(){return Object(n["b"])()||{}},voteCount:function(){var t=0;return this.voteOption.forEach((function(e){t+=e.votes_number})),t}},methods:{closeVoteError:function(){this.showVoteErrorInfo=!1},getVoteInfo:function(){var t=this;Object(a["d"])().then((function(e){var o=e.data.data;t.voteStatus=o.vote_status,t.voteOption=o.vote_info_list,t.voteTitle=o.vote_title,t.voteDetail=o.vote_sub_title}))},handleLogout:function(){var t=this;Object(a["b"])().then((function(e){var o=e.status,s=e.data;200===o&&(Object(n["c"])(),Object(n["d"])(),t.$router.push("/login"),Object(r["Message"])({type:"success",showClose:!0,duration:3e3,message:s.info_chinese,offset:84}))}))},handleVote:function(){var t=this;if(""!==this.voteSelectId){var e={id:this.userInfo.id,vote_id:this.voteSelectId};this.buttonDisabled=!0,Object(a["c"])(e).then((function(){t.getVoteInfo(),t.buttonDisabled=!1})).catch((function(e){if(e.response){var o=e.response.status;if(403===o){var s=e.response.data;t.showVoteErrorInfo=!0,t.voteErrorText=s.info_chinese,t.getVoteInfo(),t.buttonDisabled=!1}}}))}},percentWidth:function(t){var e=596,o=Math.round(t/this.voteCount*1e4)/1e4*e;return o+"px"}}},v=c,l=(o("22e3"),o("2877")),u=Object(l["a"])(v,s,i,!1,null,"fd62e062",null);e["default"]=u.exports},"99d9":function(t,e,o){}}]);
//# sourceMappingURL=chunk-c8920924.2863b20c.js.map