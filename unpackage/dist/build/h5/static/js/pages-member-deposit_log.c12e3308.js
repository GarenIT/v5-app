(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-deposit_log"],{"491b":function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"bg"},[a("v-uni-view",{staticClass:"bank-list",style:{"margin-top":t.top+13+"px"}},t._l(t.logList,(function(i,n){return a("v-uni-view",{key:n,class:i.status>0?"bank-info ok":"bank-info no"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:i.banklogo,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"bank-content"},[a("v-uni-view",[t._v(t._s(i.bankName)+" (**** "+t._s(i.bankSn)+")")]),a("v-uni-view",{staticClass:"bank-name"},[t._v(t._s(i.bankUsername))]),a("v-uni-view",{staticStyle:{"font-size":"13px"}},[t._v(t._s(i.addTime))]),a("v-uni-view",{staticClass:"money"},[a("v-uni-view",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(i.money)+"元")]),a("v-uni-view",{staticStyle:{"font-size":"13px"}},[t._v(t._s(i.msg))])],1)],1)],1)})),1),t.isShowTig?a("v-uni-view",{staticStyle:{width:"100%",height:"500upx","margin-top":"100px","text-align":"center"}},[a("v-uni-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"/static/empty.png"}}),a("v-uni-view",{staticStyle:{width:"100%","font-size":"25upx",color:"#666","margin-top":"30upx"}},[t._v("暂无提现记录")])],1):t._e(),t.isMoreTig?a("v-uni-view",{staticClass:"moreTig"},[t._v("——— 我是有底线的 ———")]):t._e()],1)},o=[]},5344:function(t,i,a){"use strict";var n=a("9830"),e=a.n(n);e.a},5985:function(t,i,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e,o=n(a("a4c7")),s={data:function(){return{top:27,userId:0,page:1,logList:[],isShowTig:!1,isMoreTig:!1,more:!1}},onLoad:function(){e=this,uni.showLoading({title:"加载中...",mask:!0});var t=uni.getSystemInfoSync();e.top=t.statusBarHeight;var i=o.default.getLogins();!1===i?e.skipUrl():(e.userId=i.userId,e.getDeposit())},methods:{getDeposit:function(){uni.request({url:o.default.apiData.getDeposit+"/userId/"+e.userId+"/page/"+e.page,method:"GET",header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var i=t.data.Data;e.more||(e.logList=[]),null!=i&&i.length>0?e.logList=e.logList.concat(i):(e.page--,e.more?e.isMoreTig=!0:e.isShowTig=!0),uni.hideLoading()},fail:function(){e.msgData("服务器连接失败，请检查网络是否正常",5e3)}})},startOpt:function(){e.page=1,e.isShowTig=!1,e.isMoreTig=!1,e.more=!1},skipUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/pages/login/login",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;1==i?uni.reLaunch({url:t}):uni.navigateTo({url:t})},msgData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none";uni.showToast({icon:a,title:t,mask:!0,duration:i})}},onReachBottom:function(){e.isMoreTig||(uni.showLoading({title:"加载中...",mask:!0}),e.more=!0,e.isShowTig=!1,e.page++,e.getDeposit())},onPullDownRefresh:function(){e.startOpt(),e.getDeposit(),uni.stopPullDownRefresh()}};i.default=s},"80a0":function(t,i,a){"use strict";a.r(i);var n=a("491b"),e=a("da3f");for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);a("5344");var s,r=a("f0c5"),d=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"254d6ca6",null,!1,n["a"],s);i["default"]=d.exports},9830:function(t,i,a){var n=a("a4b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("71953ef8",n,!0,{sourceMap:!1,shadowMode:!1})},a4b5:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".moreTig[data-v-254d6ca6]{text-align:center;color:#ccc;font-size:%?25?%;margin:%?30?% 0 %?50?% 0}.money[data-v-254d6ca6]{float:right;margin-top:-45px;font-size:15px;text-align:right}.content-head[data-v-254d6ca6]{position:fixed;width:100%;height:30px;line-height:30px;top:27px;text-align:center;color:#666}.bank-list[data-v-254d6ca6]{margin-top:70px;padding-bottom:15px}.bank-info uni-view[data-v-254d6ca6]{display:inline-block}.bank-info .img[data-v-254d6ca6]{width:20%}.bank-info .img uni-image[data-v-254d6ca6]{width:56px;height:56px;border-radius:50%}.bank-content[data-v-254d6ca6]{width:80%}.bank-content uni-view[data-v-254d6ca6]{display:block}.bank-name[data-v-254d6ca6]{font-size:15px}.bank-info[data-v-254d6ca6]{padding:15px 15px 13px;width:86%;background:#ff5e63;margin:0 auto 10px;border-radius:5px;box-shadow:0 4px 6px 0 hsla(0,0%,40.4%,.8);font-size:17px;color:#fff;background:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.6)),to(#70d6ef))}.ok[data-v-254d6ca6]{\r\n\t/*background: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.6)), to(#56e7a4));\r\n */border:1px solid #e5e5e5}.no[data-v-254d6ca6]{\r\n\t/*background: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.6)), to(#ff5e63)); \r\n */border:1px solid rgba(255,94,99,.5)}",""]),t.exports=i},da3f:function(t,i,a){"use strict";a.r(i);var n=a("5985"),e=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a}}]);