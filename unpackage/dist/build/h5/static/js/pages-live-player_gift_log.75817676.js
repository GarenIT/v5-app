(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-live-player_gift_log"],{"1bef":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.loading?i("v-uni-view",{staticClass:"mask",staticStyle:{"background-color":"#1D1D28"},style:"margin-top:"+t.top+"px!important"},[i("v-uni-view",{staticClass:"loading13",staticStyle:{position:"absolute","margin-top":"-50upx"}},[i("v-uni-view"),i("v-uni-view"),i("v-uni-view"),i("v-uni-view"),i("v-uni-view")],1)],1):t._e(),i("v-uni-view",{staticClass:"list"},[t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:e.headimgurl,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"username"},[i("v-uni-text",[t._v(t._s(e.nickname))]),i("v-uni-text",{staticClass:"r gold"},[t._v("金币 + "+t._s(e.gold))])],1),i("v-uni-text",{staticClass:"texts"},[t._v(t._s(e.text))]),i("v-uni-text",{staticClass:"times"},[t._v("时间："+t._s(t.utils.timeTodate("Y年m月d日 H:i:s",e.add_time)))])],1)],1)})),t.isMoreTig?i("v-uni-view",{staticClass:"moreTig"},[t._v("——— 我是有底线的 ———")]):t._e(),t.isShowTig?i("v-uni-view",{staticStyle:{width:"100%","margin-top":"300upx","text-align":"center"}},[i("v-uni-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"/static/empty.png"}}),i("v-uni-view",{staticStyle:{width:"100%","font-size":"25upx",color:"#666","margin-top":"30upx"}},[t._v("暂无打赏记录，加油")])],1):t._e()],2)],1)},r=[]},"1f6f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bottom-my-bg uni-image[data-v-6865ff4b]{width:%?70?%;height:%?70?%;margin-top:%?10?%}.bottom-my-bg[data-v-6865ff4b]{position:fixed;bottom:40px;right:30px;width:%?90?%;height:%?90?%;background-color:rgba(0,0,0,.5);z-index:99;text-align:center;border-radius:50%;border:1px solid rgba(255,12,208,.3);box-shadow:0 4px 6px 1px hsla(0,0%,40.4%,.2)}.mask[data-v-6865ff4b]{\r\n\t/* pointer-events: none; */position:fixed;z-index:997;top:0;left:0;right:0;bottom:0;height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?-50?%}.mask .title[data-v-6865ff4b]{color:#fff;font-size:12px;margin-top:%?40?%}.mask.mask-show[data-v-6865ff4b]{background:rgba(7,17,27,.3)}\r\n/* loading加载动画的css */.loading13[data-v-6865ff4b]{width:%?45?%;position:relative}.loading13 uni-view[data-v-6865ff4b]{display:block;position:absolute;bottom:%?0?%;width:%?9?%;height:%?5?%;background:coral;-webkit-animation:loading13-data-v-6865ff4b 1.5s infinite ease-in-out;animation:loading13-data-v-6865ff4b 1.5s infinite ease-in-out}.loading13 uni-view[data-v-6865ff4b]:nth-child(2){left:%?11?%;-webkit-animation-delay:.2s;animation-delay:.2s}.loading13 uni-view[data-v-6865ff4b]:nth-child(3){left:%?22?%;-webkit-animation-delay:.4s;animation-delay:.4s}.loading13 uni-view[data-v-6865ff4b]:nth-child(4){left:%?33?%;-webkit-animation-delay:.6s;animation-delay:.6s}.loading13 uni-view[data-v-6865ff4b]:nth-child(5){left:%?44?%;-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes loading13-data-v-6865ff4b{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}@keyframes loading13-data-v-6865ff4b{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}.moreTig[data-v-6865ff4b]{text-align:center;color:#999;font-size:12px;margin-top:%?30?%;padding-bottom:%?30?%}.list[data-v-6865ff4b]{padding:%?30?%}.list .item[data-v-6865ff4b]{background-color:#fff;border-radius:%?12?%;padding:%?20?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-bottom:%?20?%}.list .item .left[data-v-6865ff4b]{border:1px solid #f5f5f5;border-radius:%?12?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:54px;margin-right:%?15?%}.list .item .left uni-image[data-v-6865ff4b]{width:54px;height:54px;border-radius:%?12?%}.list .item .right[data-v-6865ff4b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#666;height:55px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list .item .right .gold[data-v-6865ff4b]{color:#ff5722}.list .item .right .username[data-v-6865ff4b]{font-size:13px;color:#444}.list .item .right .texts[data-v-6865ff4b]{font-size:12px}.list .item .right .times[data-v-6865ff4b]{font-size:12px}.l[data-v-6865ff4b]{float:left}.r[data-v-6865ff4b]{float:right}',""]),t.exports=e},2703:function(t,e,i){"use strict";i.r(e);var a=i("d202"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"5a62":function(t,e,i){var a=i("1f6f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2cd389f8",a,!0,{sourceMap:!1,shadowMode:!1})},a4dc:function(t,e,i){"use strict";var a=i("5a62"),n=i.n(a);n.a},c4f2:function(t,e,i){"use strict";i.r(e);var a=i("1bef"),n=i("2703");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("a4dc");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6865ff4b",null,!1,a["a"],o);e["default"]=l.exports},d1bc:function(t,e,i){"use strict";i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={friendlyDate:function(t){var e=10==t.toString().length?parseInt(t+"000"):t,i={year:"%n% 年前",month:"%n% 月前",day:"%n% 天前",hour:"%n% 小时前",minute:"%n% 分钟前",second:"%n% 秒前"},a=Date.now(),n=Math.floor((a-parseInt(e))/1e3),r=Math.floor(n/60),o=Math.floor(r/60),s=Math.floor(o/24),l=Math.floor(s/30),d=Math.floor(l/12),f="",c=0;return d>0?(f="year",c=d):l>0?(f="month",c=l):s>0?(f="day",c=s):o>0?(f="hour",c=o):r>0?(f="minute",c=r):(f="second",c=0===n?n=1:n),i[f].replace("%n%",c)},timeTodate:function(t,e){var i=10==e.toString().length?parseInt(e+"000"):e,a=new Date;a.getYear(),a.getFullYear(),a.getMonth(),a.getDate(),a.getDay(),a.getTime(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds(),a.toLocaleDateString();a.toLocaleTimeString();a.toLocaleString();var n=new Date(i),r=n.getSeconds(),o=("0"+n.getMinutes()).substr(-2),s=n.getHours()<10?"0"+n.getHours():n.getHours(),l=("0"+n.getDate()).substr(-2),d=("0"+(n.getMonth()+1)).substr(-2),f=n.getFullYear(),c="自定义替换值";return t.replace("Y",f).replace("m",d).replace("d",l).replace("H",s).replace("i",o).replace("s",r).replace("index",c)}};e.default=a},d202:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=a(i("a4c7")),o=a(i("d1bc")),s={data:function(){return{loading:!0,utils:o.default,top:0,page:1,userId:0,isShowTig:!1,isMoreTig:!1,list:[],aid:0,url:""}},onLoad:function(t){n=this,n.top=44;var e=r.default.getLogins();!1===e?r.default.jumpUrl("/pages/login/login","new"):(n.userId=e.userId,n.aid=t.aid,n.url=t.url,n.getData())},methods:{getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;uni.request({url:r.default.apiData.getPlayerGift,method:"POST",data:{uid:n.userId,page:n.page,aid:n.aid,url:n.url},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data;if(201==e.Code)return r.default.showToast(e.msg),void setTimeout((function(){r.default.jumpUrl("/pages/live/player_log","new")}),1e3);var i=t.data.Data;1==n.page?(n.isMoreTig=!1,i.length>0?(n.list=i,n.isShowTig=!1):n.isShowTig=!0):(n.isShowTig=!1,i.length>0?(n.list=n.list.concat(i),n.isMoreTig=!1):n.isMoreTig=!0),n.loading=!1},fail:function(){n.msgData("服务器连接失败，请检查网络是否正常",5e3)},complete:function(){2==t&&uni.hideLoading()}})}},onReachBottom:function(){if(n.isShowTig||n.isMoreTig)return!1;uni.showLoading({title:"加载中...",mask:!0}),n.page++,n.getData(2)}};e.default=s}}]);