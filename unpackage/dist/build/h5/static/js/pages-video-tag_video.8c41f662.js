(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-tag_video"],{"1de5":function(t,i,a){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"25f4":function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"easy-loadimage",attrs:{id:"img"}},[t.loadImg&&!t.isLoadError?a("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],staticClass:"origin-img",class:{"no-transition":!t.openTransition,"show-transition":t.showTransition&&t.openTransition},attrs:{src:t.imageSrc,mode:t.mode},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.handleImgLoad.apply(void 0,arguments)},error:function(i){arguments[0]=i=t.$handleEvent(i),t.handleImgError.apply(void 0,arguments)}}}):t.isLoadError?a("v-uni-view",{staticClass:"loadfail-img"}):t._e(),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.showImg&&!t.isLoadError,expression:"!showImg&&!isLoadError"}],staticClass:"loading-img"})],1)},o=[]},"2faa":function(t,i,a){t.exports=a.p+"static/img/loading.659e6ad3.gif"},"30b8":function(t,i,a){var n=a("b71b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("a24b486e",n,!0,{sourceMap:!1,shadowMode:!1})},"6e6d":function(t,i,a){"use strict";var n=a("30b8"),e=a.n(n);e.a},"7cc3":function(t,i,a){"use strict";a.r(i);var n=a("25f4"),e=a("b279");for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);a("e2cc3");var r,s=a("f0c5"),l=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"78cac7d7",null,!1,n["a"],r);i["default"]=l.exports},"7d80":function(t,i,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e,o=n(a("a4c7")),r={data:function(){return{info:{name:"热门标签",id:0},page:1,list:[],scrollTop:0,notData:!1,more:!1,loading:!0,isShowTig:!1}},onLoad:function(t){e=this,e.info=JSON.parse(t.info);var i=setTimeout((function(){uni.setNavigationBarTitle({title:e.info.name}),clearTimeout(i)}),100);e.getVideo()},methods:{getVideo:function(){uni.request({url:o.default.apiData.getTagData+"/tid/"+e.info.id+"/page/"+e.page,method:"GET",header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var i=t.data.Data;if(201==t.data.Code)return e.showTip(i.Msg);i.list.length?(e.list=e.list.concat(i.list),e.notData=!1):1==e.page?e.isShowTig=!0:e.notData=!0;var a=setTimeout((function(){e.loading=!1,clearTimeout(a)}),500)},fail:function(){e.showTip("服务器连接失败，请检查网络是否正常")},complete:function(){e.more=!1}})},playVideo:function(t){uni.setStorage({key:"vid",data:t,success:function(){var t={url:"/pages/video/tag_video?info="+JSON.stringify(e.info),t:"new"};o.default.jumpUrl("/pages/video/play?type="+JSON.stringify(t),"new")},fail:function(){o.default.showToast("播放失败，请检查网络是否正常")}})},showTip:function(t){o.default.showToast(t);var i=setTimeout((function(){uni.navigateBack(),clearTimeout(i)}),1e3)}},onBackPress:function(){var t=uni.getStorageSync("url_"+o.default.appkey);return t?o.default.jumpUrl(t.url,t.t):o.default.jumpUrl("/pages/video/class","tab"),!0},onReachBottom:function(){e.notData||(e.page++,e.more=!0,e.getVideo())},onPageScroll:function(t){var i=t.scrollTop;e.scrollTop=i}};i.default=r},"7d9b":function(t,i,a){var n=a("81bf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("0dfc8f27",n,!0,{sourceMap:!1,shadowMode:!1})},"81bf":function(t,i,a){var n=a("24fb"),e=a("1de5"),o=a("f729"),r=a("2faa");i=n(!1);var s=e(o),l=e(r);i.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 官方优化图片tips */uni-image[data-v-78cac7d7]{will-change:transform}\n/* 渐变过渡效果处理 */uni-image.origin-img[data-v-78cac7d7]{width:100%;height:100%;opacity:.3}uni-image.origin-img.show-transition[data-v-78cac7d7]{-webkit-transition:opacity 1.2s;transition:opacity 1.2s;opacity:1}uni-image.origin-img.no-transition[data-v-78cac7d7]{opacity:1}\n/* 加载失败、加载中的占位图样式控制 */.loadfail-img[data-v-78cac7d7]{height:100%;background:url("+s+") no-repeat 50%;background-size:50%}.loading-img[data-v-78cac7d7]{height:100%;background:url("+l+") no-repeat 50%;background-size:%?100?%}",""]),t.exports=i},9157:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return n}));var n={easyLoadimage:a("7cc3").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"video-list"},[t.loading?a("v-uni-view",{staticClass:"mask",staticStyle:{"background-color":"#1D1D28","margin-top":"0"}},[a("v-uni-view",{staticClass:"loading13",staticStyle:{position:"absolute","margin-top":"-30upx"}},[a("v-uni-view"),a("v-uni-view"),a("v-uni-view"),a("v-uni-view"),a("v-uni-view")],1)],1):t._e(),t._l(t.list,(function(i,n){return a("v-uni-view",{key:n,staticClass:"video-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.playVideo(i.id)}}},[i.gold>0?a("v-uni-image",{staticClass:"is-vip",attrs:{src:"/static/play/ico_vip.png"}}):a("v-uni-image",{staticClass:"is-vip",attrs:{src:"/static/play/ico_free.png"}}),a("easy-loadimage",{staticClass:"cover",attrs:{mode:"aspectFill","scroll-top":t.scrollTop,"image-src":i.cover,"open-transition":!0}}),a("v-uni-text",{staticClass:"video-title"},[t._v(t._s(i.title))])],1)})),t.isShowTig?a("v-uni-view",{staticStyle:{width:"100%","margin-top":"180px","text-align":"center"}},[a("v-uni-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"/static/empty.png"}}),a("v-uni-view",{staticStyle:{width:"100%","font-size":"25upx",color:"#666","margin-top":"30upx"}},[t._v("当前页面暂无内容")])],1):t._e(),a("v-uni-view",{staticClass:"more"},[t.more?a("v-uni-image",{staticClass:"load-img",attrs:{src:"/static/loading/load0.gif",mode:"aspectFill"}}):t._e(),t.notData?a("v-uni-text",[t._v("——— 我是有底线的 ———")]):t._e()],1)],2)},o=[]},b279:function(t,i,a){"use strict";a.r(i);var n=a("f722"),e=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a},b407:function(t,i,a){"use strict";a.r(i);var n=a("7d80"),e=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a},b71b:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".bottom-my-bg uni-image[data-v-ba02a676]{width:%?70?%;height:%?70?%;margin-top:%?10?%}.bottom-my-bg[data-v-ba02a676]{position:fixed;bottom:40px;right:30px;width:%?90?%;height:%?90?%;background-color:rgba(0,0,0,.5);z-index:99;text-align:center;border-radius:50%;border:1px solid rgba(255,12,208,.3);box-shadow:0 4px 6px 1px hsla(0,0%,40.4%,.2)}.mask[data-v-ba02a676]{\r\n\t/* pointer-events: none; */position:fixed;z-index:997;top:0;left:0;right:0;bottom:0;height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?-50?%}.mask .title[data-v-ba02a676]{color:#fff;font-size:12px;margin-top:%?40?%}.mask.mask-show[data-v-ba02a676]{background:rgba(7,17,27,.3)}\r\n/* loading加载动画的css */.loading13[data-v-ba02a676]{width:%?45?%;position:relative}.loading13 uni-view[data-v-ba02a676]{display:block;position:absolute;bottom:%?0?%;width:%?9?%;height:%?5?%;background:coral;-webkit-animation:loading13-data-v-ba02a676 1.5s infinite ease-in-out;animation:loading13-data-v-ba02a676 1.5s infinite ease-in-out}.loading13 uni-view[data-v-ba02a676]:nth-child(2){left:%?11?%;-webkit-animation-delay:.2s;animation-delay:.2s}.loading13 uni-view[data-v-ba02a676]:nth-child(3){left:%?22?%;-webkit-animation-delay:.4s;animation-delay:.4s}.loading13 uni-view[data-v-ba02a676]:nth-child(4){left:%?33?%;-webkit-animation-delay:.6s;animation-delay:.6s}.loading13 uni-view[data-v-ba02a676]:nth-child(5){left:%?44?%;-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes loading13-data-v-ba02a676{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}@keyframes loading13-data-v-ba02a676{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}.more .load-img[data-v-ba02a676]{width:%?80?%;height:%?80?%}.more[data-v-ba02a676]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;color:#999;font-size:12px;margin:10px 0}.is-vip[data-v-ba02a676]{width:32px;height:16px;position:absolute;margin-bottom:-16px;z-index:1}.video-bottom[data-v-ba02a676]{width:50%;height:30px;background-color:#272733;border-radius:30px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:15px auto 20px}.video-title[data-v-ba02a676]{font-size:12px;line-height:15px;padding:5px 0 2px 0;width:100%;color:hsla(0,0%,100%,.7);display:-webkit-box;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.video-item .cover[data-v-ba02a676]{width:100%;height:100px;border-radius:8px;background-color:rgba(0,0,0,.3)}.cover[data-v-ba02a676] .origin-img{border-radius:8px}.video-list .video-item[data-v-ba02a676]{display:inline-block;width:48%;position:relative;margin-bottom:7px}.video-list[data-v-ba02a676]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:15px %?30?%}",""]),t.exports=i},c34d:function(t,i,a){"use strict";a.r(i);var n=a("9157"),e=a("b407");for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);a("6e6d");var r,s=a("f0c5"),l=Object(s["a"])(e["default"],n["b"],n["c"],!1,null,"ba02a676",null,!1,n["a"],r);i["default"]=l.exports},e2cc3:function(t,i,a){"use strict";var n=a("7d9b"),e=a.n(n);e.a},f722:function(t,i,a){"use strict";a("a9e3"),a("ac1f"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{imageSrc:{type:String},mode:{type:String},scrollTop:{type:Number},openTransition:{type:Boolean,default:!1},viewHeight:{type:Number,default:function(){return uni.getSystemInfoSync().windowHeight}}},watch:{scrollTop:function(t){this.onScroll(t)}},data:function(){return{loadImg:!1,showImg:!1,isLoadError:!1,showTransition:!1,query:{}}},created:function(){this.query=uni.createSelectorQuery().in(this)},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$nextTick((function(){t.onScroll(0)}))},handleImgLoad:function(t){var i=this;this.showImg=!0;var a=setTimeout((function(){i.showTransition=!0,clearTimeout(a)}),20)},handleImgError:function(t){this.isLoadError=!0},onScroll:function(t){var i=this;this.loadImg||this.isLoadError||this.$nextTick((function(){i.query.select("#img").boundingClientRect((function(t){t&&t.top-i.viewHeight<0&&(i.loadImg=!0)})).exec()}))}}};i.default=n},f729:function(t,i){t.exports="data:image/png;base64,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"}}]);