(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-search"],{"01f4":function(e,t,i){"use strict";var a=i("4ea4");i("99af"),i("ac1f"),i("841c"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=a(i("a4c7")),c=a(i("d1bc")),s={data:function(){return{isMoreTig:!1,isMoreMsg:"——— 我是有底线的 ———",isMore:!1,topHeight:76,did:0,logHide:!1,hotHide:!1,isShearchShow:!0,logList:{},hotList:{},isSearchs:1,search:"",userId:0,utils:c.default,videoList:[],videoCount:0,scrollTop:0,page:1,api:n.default}},onLoad:function(){uni.showLoading({title:"加载中,请稍后...",mask:!0}),o=this;var e=n.default.getLogins();0!=e&&(o.userId=e.userId),uni.getStorage({key:"mobileDid_"+n.default.appkey,success:function(e){o.did=e.data},complete:function(){o.getHotSearch()}})},mounted:function(){var e=uni.createSelectorQuery().in(this),t=setTimeout((function(){e.select("#head").boundingClientRect((function(e){o.topHeight=e.height})).exec(),clearTimeout(t)}),100)},methods:{delSearch:function(){uni.showModal({content:"确认清空搜索记录吗？",cancelText:"考虑一下",confirmText:"清空记录",success:function(e){e.confirm?o.delSearchLog():e.cancel}})},delSearchLog:function(){uni.showLoading({title:"处理中...",mask:!0}),uni.request({url:n.default.apiData.emptySearch,method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{did:o.did},success:function(e){200==e.data.Code&&(o.logHide=!1),uni.hideLoading()},fail:function(){n.default.showToast("服务器连接失败，请检查网络是否正常",2e3)}})},playVideo:function(e){uni.setStorage({key:"vid",data:e,fail:function(){o.back("服务器连接失败，请检查网络是否正常")},complete:function(){var e={url:"/pages/video/search",t:"new"};n.default.jumpUrl("/pages/video/play?type="+JSON.stringify(e),"new")}})},inputKey:function(e){o.search=e.detail.value},searchLog:function(e){o.search=e,o.searchKey(1)},searchKey:function(e){if(e&&(o.page=1),uni.showLoading({title:"搜索中,请稍后...",mask:!0}),0==o.search.length)return n.default.showToast("请输入搜索关键字",2e3);if(o.isSearchs||0!=o.userId)uni.request({url:n.default.apiData.searchVideo,method:"POST",header:{"Content-type":"application/x-www-form-urlencoded"},data:{uid:o.userId,did:o.did,key:o.search,page:o.page},success:function(e){var t=e.data;if(201==t.Code)return n.default.showToast(t.Msg,2e3);if(202==t.Code)return e&&1==o.page?n.default.showToast(t.Msg,2e3):n.default.showToast("已到顶到胃了"),o.isMoreMsg="——— 我是有底线的 ———",o.page=o.page-1,o.isMore=!0,!1;o.page>1&&(o.isMoreTig=!0),t.Data.video.length>0&&(o.isMoreMsg="——— 加载数据中 ———",e&&1==o.page?o.videoList=t.Data.video:o.videoList=o.videoList.concat(t.Data.video)),o.videoCount=t.Data.count,o.isShearchShow=!1;var i=setTimeout((function(){o.getHotSearch(),clearTimeout(i)}),300)},fail:function(){o.back("服务器连接失败，请检查网络是否正常")}});else{n.default.showToast("禁止游客使用搜索功能，请先登录",2e3);var t=setTimeout((function(){n.default.jumpUrl("/pages/login/login","newx"),clearTimeout(t)}),1e3)}},getHotSearch:function(){uni.request({url:n.default.apiData.getHotSearch,method:"POST",data:{did:o.did},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data.Data;o.isSearchs=t.isSearchs,t.logList.length&&(o.logList=t.logList,o.logHide=!0),t.hotList.length&&(o.hotList=t.hotList,o.hotHide=!0)},fail:function(){o.back("服务器连接失败，请检查网络是否正常")},complete:function(){uni.hideLoading()}})},backUrl:function(){o.isShearchShow?n.default.jumpUrl("/pages/video/class","tab"):(o.page=1,o.videoList=[],o.isShearchShow=!0,o.isMore=!1)},back:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0!=e.length){n.default.showToast(e);var t=setTimeout((function(){uni.navigateBack(),clearTimeout(t)}),1500)}}},onReachBottom:function(){o.isMore||(o.page++,o.searchKey(0))},onPageScroll:function(e){var t=e.scrollTop;o.scrollTop=t}};t.default=s},3472:function(e,t,i){"use strict";i.r(t);var a=i("c230"),o=i("e674");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("fd2c");var c,s=i("f0c5"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"5023f5de",null,!1,a["a"],c);t["default"]=r.exports},"7fd9":function(e,t,i){e.exports=i.p+"static/img/del.757f2a82.png"},a859:function(e,t){e.exports="data:image/png;base64,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"},af31:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".moreTig[data-v-5023f5de]{width:100%;text-align:center;color:#999;font-size:%?25?%;margin-top:%?20?%;padding-bottom:30px}.colorRed[data-v-5023f5de]{color:#b01a1c}.video-list[data-v-5023f5de]{width:97%;padding:1px 0 10px 3%}.video-desc[data-v-5023f5de]{width:100%;text-align:center;font-size:12px;color:#999;margin:10px 0}.video-info[data-v-5023f5de]{width:45%;height:%?265?%;border-radius:5px;border:1px solid #e5e5e5;padding-bottom:8px;display:inline-block;margin:0 0 3% 2%}.video-info uni-image[data-v-5023f5de]{width:100%;height:%?200?%;border-radius:5px 5px 0 0}.video-info .title[data-v-5023f5de]{font-size:12px;color:#ccc;line-height:%?30?%}.one[data-v-5023f5de]{background:#b01a1c;color:#fff!important}.two[data-v-5023f5de]{background:#007aff;color:#fff!important}.thr[data-v-5023f5de]{background:#a83fdb;color:#fff!important}.search-hot-list[data-v-5023f5de]{width:92%;font-size:13px;border-radius:3px;margin:0 5% 0 3%}.search-hot-sort[data-v-5023f5de]{width:20px;height:20px;line-height:20px;display:inline-block;text-align:center;border-radius:50%;color:#777}.search-hot-title[data-v-5023f5de]{width:63%;padding:0 5% 0 0;height:20px;line-height:20px;display:inline-block;color:#999;float:right;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.search-hot-time[data-v-5023f5de]{width:22%;float:right;height:20px;line-height:20px;text-align:right}.search-hot-content[data-v-5023f5de]{margin-top:10px}.hot[data-v-5023f5de]{margin-bottom:18px}.search-log-content[data-v-5023f5de]{margin-top:18px}.search-log-content uni-view[data-v-5023f5de]{display:inline-block}.search-log-list[data-v-5023f5de]{width:25%;height:30px;line-height:30px;text-align:center;background:#f5f5f5;font-size:13px;border-radius:3px;color:#666;margin:0 0 5px 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 5px}.search-log-top .line[data-v-5023f5de]{width:8px;height:15px;background-color:#ff8f00;margin-right:%?20?%;border-radius:8px}.c-title[data-v-5023f5de]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#fff}.search-log-top uni-image[data-v-5023f5de]{width:20px;height:20px}.search-log-top[data-v-5023f5de]{height:30px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search-log[data-v-5023f5de]{margin-top:10px;padding:0 %?35?%;font-size:17px;color:#666;font-weight:700}.top-content[data-v-5023f5de]{margin-top:10px}.head-content[data-v-5023f5de]{width:94%;background:#20202c;padding:0 3% %?10?%;text-align:center;position:fixed;top:0;z-index:999;border-bottom:1px solid rgba(0,0,0,.2);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.head-placeholder[data-v-5023f5de]{height:0;padding-top:%?16?%;box-sizing:initial}.head-bottom[data-v-5023f5de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?10?% 0}.head-left uni-image[data-v-5023f5de]{width:30px;height:30px;margin-top:1px;border-radius:50%;opacity:.6;filter:alpha(opacity=60)}.head-left[data-v-5023f5de]{width:30px}.head-center .sel[data-v-5023f5de]{font-weight:700;border-bottom:2px solid #f2692f}.head-center uni-text[data-v-5023f5de]{color:#fff;font-size:16px;margin:0 %?30?%;border-bottom:2px solid #20202c}.head-center[data-v-5023f5de]{height:35.5px;line-height:30px;-webkit-box-flex:1;-webkit-flex:1;flex:1}.head-search[data-v-5023f5de]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.head-search-right uni-image[data-v-5023f5de]{width:32px;height:32px;border-radius:50%}.head-search-center[data-v-5023f5de]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 %?20?%}.head-input[data-v-5023f5de]{height:32px;line-height:32px;background:#e5e5e5;border-radius:50px;font-size:%?26?%;padding:0 %?30?%;text-align:left;color:#666}.error[data-v-5023f5de]{margin-top:%?300?%}",""]),e.exports=t},c230:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"head-content",attrs:{id:"head"}},[a("v-uni-view",{staticClass:"head-placeholder"}),a("v-uni-view",{staticClass:"head-search"},[a("v-uni-view",{staticClass:"head-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backUrl.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:i("f892"),mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"head-center"},[a("v-uni-text",{staticClass:"sel"},[e._v("搜索")]),a("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.api.jumpUrl("/pages/class/index","new")}}},[e._v("分类")])],1),a("v-uni-view",{staticClass:"head-left"})],1),a("v-uni-view",{staticClass:"head-bottom"},[a("v-uni-view",{staticClass:"head-search-center"},[a("v-uni-input",{staticClass:"head-input",attrs:{focus:"true",value:e.search,"confirm-type":"search",type:"search",maxlength:"20",placeholder:"搜索一下,发现新世界..."},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputKey.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.searchKey(1)}}})],1),a("v-uni-view",{staticClass:"head-search-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchKey(1)}}},[a("v-uni-image",{attrs:{src:i("a859"),mode:"aspectFill"}})],1)],1)],1),a("v-uni-view",{style:{height:e.topHeight+"px"}}),e.isShearchShow?a("v-uni-view",{staticClass:"top-content"},[e.logHide?a("v-uni-view",{staticClass:"search-log"},[a("v-uni-view",{staticClass:"search-log-top"},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",{staticClass:"c-title"},[e._v("历史搜索")]),a("v-uni-image",{attrs:{src:i("7fd9")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delSearch.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"search-log-content"},e._l(e.logList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"search-log-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.searchLog(t.content)}}},[a("v-uni-text",[e._v(e._s(t.content))])],1)})),1)],1):e._e(),e.hotHide?a("v-uni-view",{staticClass:"search-log"},[a("v-uni-view",{staticClass:"search-log-top hot"},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",{staticClass:"c-title"},[e._v("热门搜索")])],1),e._l(e.hotList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"search-hot-content",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.playVideo(t.id)}}},[a("v-uni-view",{staticClass:"search-hot-list"},[i+1==1?a("v-uni-text",{staticClass:"search-hot-sort one"},[e._v(e._s(i+1))]):e._e(),i+1==2?a("v-uni-text",{staticClass:"search-hot-sort two"},[e._v(e._s(i+1))]):e._e(),i+1==3?a("v-uni-text",{staticClass:"search-hot-sort thr"},[e._v(e._s(i+1))]):e._e(),i+1>3?a("v-uni-text",{staticClass:"search-hot-sort"},[e._v(e._s(i+1))]):e._e(),a("v-uni-text",{staticClass:"search-hot-time"},[e._v(e._s(e.utils.timeTodate("Y/m/d",t.update_time)))]),a("v-uni-text",{staticClass:"search-hot-title"},[e._v(e._s(t.title))])],1)],1)}))],2):e._e()],1):a("v-uni-view",{staticClass:"video-list"},[a("v-uni-view",{staticClass:"video-desc"},[e._v("共搜索到"+e._s(e.videoCount)+"个与"),a("v-uni-text",{staticClass:"colorRed"},[e._v(e._s(e.search))]),e._v("相关的视频")],1),a("v-uni-view",{staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.videoList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"video-info",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.playVideo(t.id)}}},[a("v-uni-image",{attrs:{src:t.thumbnail,mode:"aspectFill"}}),a("v-uni-view",{staticStyle:{padding:"0 3px"}},[a("v-uni-rich-text",{staticClass:"title",attrs:{nodes:t.title}},[e._v("...")])],1)],1)})),1),e.isMoreTig?a("v-uni-view",{staticClass:"moreTig"},[e._v(e._s(e.isMoreMsg))]):e._e()],1)],1)},n=[]},c9c2:function(e,t,i){var a=i("af31");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("61b00df0",a,!0,{sourceMap:!1,shadowMode:!1})},d1bc:function(e,t,i){"use strict";i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={friendlyDate:function(e){var t=10==e.toString().length?parseInt(e+"000"):e,i={year:"%n% 年前",month:"%n% 月前",day:"%n% 天前",hour:"%n% 小时前",minute:"%n% 分钟前",second:"%n% 秒前"},a=Date.now(),o=Math.floor((a-parseInt(t))/1e3),n=Math.floor(o/60),c=Math.floor(n/60),s=Math.floor(c/24),r=Math.floor(s/30),l=Math.floor(r/12),d="",h=0;return l>0?(d="year",h=l):r>0?(d="month",h=r):s>0?(d="day",h=s):c>0?(d="hour",h=c):n>0?(d="minute",h=n):(d="second",h=0===o?o=1:o),i[d].replace("%n%",h)},timeTodate:function(e,t){var i=10==t.toString().length?parseInt(t+"000"):t,a=new Date;a.getYear(),a.getFullYear(),a.getMonth(),a.getDate(),a.getDay(),a.getTime(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds(),a.toLocaleDateString();a.toLocaleTimeString();a.toLocaleString();var o=new Date(i),n=o.getSeconds(),c=("0"+o.getMinutes()).substr(-2),s=o.getHours()<10?"0"+o.getHours():o.getHours(),r=("0"+o.getDate()).substr(-2),l=("0"+(o.getMonth()+1)).substr(-2),d=o.getFullYear(),h="自定义替换值";return e.replace("Y",d).replace("m",l).replace("d",r).replace("H",s).replace("i",c).replace("s",n).replace("index",h)}};t.default=a},e674:function(e,t,i){"use strict";i.r(t);var a=i("01f4"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},f892:function(e,t){e.exports="data:image/png;base64,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"},fd2c:function(e,t,i){"use strict";var a=i("c9c2"),o=i.n(a);o.a}}]);