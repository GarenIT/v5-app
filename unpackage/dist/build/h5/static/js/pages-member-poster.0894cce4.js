(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-poster"],{"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=a(i("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.default)(t,e):void 0}}},"0c10":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{staticClass:"h5-img",style:{height:t.height},attrs:{id:"rtf"+t.uid}})])],2)},o=[]},"1f7a":function(t,e,i){"use strict";i.r(e);var n=i("2bba"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"2bba":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("bad8"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean,height:String},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n="",a=0;i=e[a];a++){if("/"==i&&"/"!=e[a-1]&&"/"!=e[a+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(a),this[t]=n}if(this[t]=e,e.includes("data:image")){var o=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!o)return}}},this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,i="",n=(0,_createForOfIteratorHelper2.default)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;if("text"==a.type)i+=a.text;else{for(var o in i+="<"+a.name,a.attrs||{})i+=" "+o+'="'+a.attrs[o]+'"';a.children&&a.children.length?i+=">"+this._Dom2Str(a.children)+"</"+a.name+">":i+=">"}}}catch(r){n.e(r)}finally{n.f()}return i},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),!e){var i="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var n in cfg.userAgentStyles)i+="".concat(n,"{").concat(cfg.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t},setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var a,o=this.rtf.getElementsByTagName("style"),r=0;a=o[r++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"900px 0px 900px 0px"}));var s=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var l,f=this.rtf.getElementsByTagName("img"),d=0,u=0;l=f[d];d++){l.style.maxWidth="100%";var h=l.getAttribute("src");this.domain&&h&&("/"==h[0]?"/"==h[1]?l.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+h:l.src=this.domain+h:h.includes("://")||(l.src=this.domain+"/"+h)),l.hasAttribute("ignore")||"A"==l.parentElement.nodeName||(l.i=u++,s.imgList.push(l.src||l.getAttribute("data-src")),l.onclick=function(){var t=!0;this.ignore=function(){return t=!1},s.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:s.imgList})}),l.onerror=function(){s.$emit("error",{source:"img",target:this})},s.lazyLoad&&this._observer&&l.src&&0!=l.i&&(l.setAttribute("data-src",l.src),l.removeAttribute("src"),this._observer.observe(l))}var p,g=this.rtf.getElementsByTagName("a"),b=(0,_createForOfIteratorHelper2.default)(g);try{for(b.s();!(p=b.n()).done;){var m=p.value;m.onclick=function(){var t=!0,e=this.getAttribute("href");if(s.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])s.useAnchor&&s.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(C){b.e(C)}finally{b.f()}var v=this.rtf.getElementsByTagName("video");s.videoContexts=v;for(var x,w=0;x=v[w++];)x.style.maxWidth="100%",x.onerror=function(){s.$emit("error",{source:"video",target:this})},x.onplay=function(){if(s.autopause)for(var t,e=0;t=s.videoContexts[e++];)t!=this&&t.pause()};var _,k,y=this.rtf.getElementsByTagName("audios"),A=(0,_createForOfIteratorHelper2.default)(y);try{for(A.s();!(_=A.n()).done;){var E=_.value;E.onerror=function(){s.$emit("error",{source:"audio",target:this})}}}catch(C){A.e(C)}finally{A.f()}this.document=this.rtf,e||document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.width=t[0].width,t[0].height==k&&(i.$emit("ready",t[0]),clearInterval(i._timer)),k=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var i=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(i,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=i/2,this._tMin=(i-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},3245:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".bottom-my-bg uni-image[data-v-770c6de1]{width:%?70?%;height:%?70?%;margin-top:%?10?%}.bottom-my-bg[data-v-770c6de1]{position:fixed;bottom:40px;right:30px;width:%?90?%;height:%?90?%;background-color:rgba(0,0,0,.5);z-index:99;text-align:center;border-radius:50%;border:1px solid rgba(255,12,208,.3);box-shadow:0 4px 6px 1px hsla(0,0%,40.4%,.2)}.mask[data-v-770c6de1]{\r\n\t/* pointer-events: none; */position:fixed;z-index:997;top:0;left:0;right:0;bottom:0;height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?-50?%}.mask .title[data-v-770c6de1]{color:#fff;font-size:12px;margin-top:%?40?%}.mask.mask-show[data-v-770c6de1]{background:rgba(7,17,27,.3)}\r\n/* loading加载动画的css */.loading13[data-v-770c6de1]{width:%?45?%;position:relative}.loading13 uni-view[data-v-770c6de1]{display:block;position:absolute;bottom:%?0?%;width:%?9?%;height:%?5?%;background:coral;-webkit-animation:loading13-data-v-770c6de1 1.5s infinite ease-in-out;animation:loading13-data-v-770c6de1 1.5s infinite ease-in-out}.loading13 uni-view[data-v-770c6de1]:nth-child(2){left:%?11?%;-webkit-animation-delay:.2s;animation-delay:.2s}.loading13 uni-view[data-v-770c6de1]:nth-child(3){left:%?22?%;-webkit-animation-delay:.4s;animation-delay:.4s}.loading13 uni-view[data-v-770c6de1]:nth-child(4){left:%?33?%;-webkit-animation-delay:.6s;animation-delay:.6s}.loading13 uni-view[data-v-770c6de1]:nth-child(5){left:%?44?%;-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes loading13-data-v-770c6de1{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}@keyframes loading13-data-v-770c6de1{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}.explain-center[data-v-770c6de1]{width:96%;height:270px;border-top:1px solid #e5e5e5;\r\n\t\t/*border-radius: 5px;\r\n */overflow-y:scroll;padding:2%;font-size:13px;color:#666\r\n\t\t/*box-shadow: 0px 4px 6px 0px rgba(103, 103, 103, 0.2);\r\n */}.explain-title[data-v-770c6de1]{width:100%;height:50px;line-height:50px;font-size:18px;text-align:left;color:#666;font-weight:700}.close[data-v-770c6de1]{width:30px;height:30px;float:right;margin:5px -3% 0 0}.explain-content[data-v-770c6de1]{padding:0 5%;width:70%;height:350px;border-radius:10px;background:#fff;margin-top:35%;margin-left:10%}.explain-tig[data-v-770c6de1]{position:fixed;z-index:98;width:100%;height:100%;background:rgba(0,0,0,.5)}.explain[data-v-770c6de1]{position:absolute;width:50px;height:30px;line-height:30px;background:#2c405a;right:13px;color:#fff;text-align:center;border-radius:3px;font-size:15px}.p-left[data-v-770c6de1]{left:30px}.p-right[data-v-770c6de1]{right:30px}.poster-save[data-v-770c6de1]{width:%?270?%;height:%?85?%;line-height:%?85?%;text-align:center;border-radius:10px;position:absolute;bottom:%?60?%;color:#fff;font-size:%?35?%;box-shadow:0 4px 6px 0 hsla(0,0%,40.4%,.2);background-image:-webkit-linear-gradient(left,rgba(255,12,208,.7),rgba(254,67,101,.7));background-image:linear-gradient(90deg,rgba(255,12,208,.7),rgba(254,67,101,.7))}.content-head[data-v-770c6de1]{position:fixed;width:30px;height:30px;line-height:30px;border-radius:50%;background:rgba(0,0,0,.5);top:27px;left:10px;text-align:center;font-size:15px;color:#ccc;z-index:10;font-weight:700}.poster[data-v-770c6de1]{width:100%;padding:0;margin:0;position:fixed;top:0}.poster-bg[data-v-770c6de1]{background:#fff}",""]),t.exports=e},"42ea":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={jyfParser:i("4a68").default,uniFab:i("72e1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bg"},[t.loading?n("v-uni-view",{staticClass:"mask",staticStyle:{"background-color":"#1D1D28","margin-top":"0!important"},style:{height:t.loadHeight+"px"}},[n("v-uni-view",{staticClass:"loading13",staticStyle:{position:"absolute"}},[n("v-uni-view"),n("v-uni-view"),n("v-uni-view"),n("v-uni-view"),n("v-uni-view")],1)],1):t._e(),n("v-uni-view",{staticClass:"poster-bg"},[n("v-uni-image",{staticClass:"poster",style:{height:t.bgHeight+"px"},attrs:{src:t.bg,mode:"aspectFill"}})],1),t.close?n("v-uni-view",{staticClass:"explain-tig"},[n("v-uni-view",{staticClass:"explain-content"},[n("v-uni-view",{staticClass:"explain-title"},[t._v("规则说明"),n("v-uni-image",{staticClass:"close",attrs:{src:i("c31a")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeTig.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"explain-center"},[n("jyf-parser",{ref:"article",attrs:{html:t.rule}})],1)],1)],1):t._e(),n("uni-fab",{ref:"menu",attrs:{content:t.menuList,horizontal:"right",vertical:"bottom",direction:"horizontal"},on:{trigger:function(e){arguments[0]=e=t.$handleEvent(e),t.trigger.apply(void 0,arguments)}}})],1)},o=[]},4908:function(t,e,i){var n=i("3245");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("64b1ee9a",n,!0,{sourceMap:!1,shadowMode:!1})},"4a68":function(t,e,i){"use strict";i.r(e);var n=i("0c10"),a=i("1f7a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9448");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f186af3a",null,!1,n["a"],r);e["default"]=c.exports},"4ee8":function(t,e,i){"use strict";i.r(e);var n=i("f97c"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6b75":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"72e1":function(t,e,i){"use strict";i.r(e);var n=i("d80b"),a=i("c298");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c007");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"318d7961",null,!1,n["a"],r);e["default"]=c.exports},7341:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-fab[data-v-318d7961]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:10}.uni-fab--active[data-v-318d7961]{opacity:1}.uni-fab--leftBottom[data-v-318d7961]{left:5px;bottom:20px;bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--leftTop[data-v-318d7961]{left:5px;top:30px;top:calc(30px + var(--window-top));padding:10px}.uni-fab--rightBottom[data-v-318d7961]{right:5px;bottom:20px;bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--rightTop[data-v-318d7961]{right:5px;top:30px;top:calc(30px + var(--window-top));padding:10px}.uni-fab__circle[data-v-318d7961]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:55px;z-index:11}.uni-fab__circle--leftBottom[data-v-318d7961]{left:15px;bottom:30px;bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-318d7961]{left:15px;top:40px;top:calc(40px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-318d7961]{right:15px;bottom:30px;bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-318d7961]{right:15px;top:40px;top:calc(40px + var(--window-top))}.uni-fab__circle--left[data-v-318d7961]{left:0}.uni-fab__circle--right[data-v-318d7961]{right:0}.uni-fab__circle--top[data-v-318d7961]{top:0}.uni-fab__circle--bottom[data-v-318d7961]{bottom:0}.uni-fab__plus[data-v-318d7961]{font-weight:700}.fab-circle-v[data-v-318d7961]{position:absolute;width:3px;height:31px;left:26px;top:12px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.fab-circle-h[data-v-318d7961]{position:absolute;width:31px;height:3px;left:12px;top:26px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.uni-fab__plus--active[data-v-318d7961]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-318d7961]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-radius:55px;overflow:hidden;-webkit-transition-property:width,height;transition-property:width,height;-webkit-transition-duration:.2s;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-318d7961]{border-width:0;box-shadow:0 0 5px 2px rgba(0,0,0,.2)}.uni-fab__content--left[data-v-318d7961]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-fab__content--right[data-v-318d7961]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-fab__content--flexDirection[data-v-318d7961]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-318d7961]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-318d7961]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-fab__item[data-v-318d7961]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:55px;height:55px;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.uni-fab__item--active[data-v-318d7961]{opacity:1}.uni-fab__item-image[data-v-318d7961]{width:25px;height:25px;margin-bottom:3px}.uni-fab__item-text[data-v-318d7961]{color:#fff;font-size:12px}.uni-fab__item--first[data-v-318d7961]{width:55px}',""]),t.exports=e},"8fbc":function(t,e,i){var n=i("e0c1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("610985dc",n,!0,{sourceMap:!1,shadowMode:!1})},9448:function(t,e,i){"use strict";var n=i("8fbc"),a=i.n(n);a.a},a523:function(t,e,i){"use strict";var n=i("4908"),a=i.n(n);a.a},b392:function(t,e,i){"use strict";i.r(e);var n=i("42ea"),a=i("4ee8");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a523");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"770c6de1",null,!1,n["a"],r);e["default"]=c.exports},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=a(i("06c5"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,r=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(c)throw r}}}}},bad8:function(t,e,i){function n(t){for(var e={},i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}i("ac1f"),i("1276"),t.exports={filter:null,highlight:null,onText:null,blankChar:n(" , ,\t,\r,\n,\f"),blockTags:n("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:n("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:n("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:n("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:n("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:n("autoplay,controls,ignore,loop,muted"),trustTags:n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic;",big:"display:inline;font-size:1.2em;",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px;",img:"width:32%;border-radius:5px;margin-right:1.3%;float:left;overflow:hidden;height:100%;margin-bottom:5px;",mark:"background-color:yellow",picture:"max-width:100%;",pre:"font-family:monospace;white-space:pre;overflow:scroll;",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},bfa6:function(t,e,i){var n=i("7341");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0ffcb536",n,!0,{sourceMap:!1,shadowMode:!1})},c007:function(t,e,i){"use strict";var n=i("bfa6"),a=i.n(n);a.a},c298:function(t,e,i){"use strict";i.r(e);var n=i("db86"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c31a:function(t,e){t.exports="data:image/png;base64,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"},d80b:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)?i("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[i("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onItemClick(n,e)}}},[i("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"widthFix"}}),i("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),i("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"fab-circle-v",class:{"uni-fab__plus--active":t.isShow}}),i("v-uni-view",{staticClass:"fab-circle-h",class:{"uni-fab__plus--active":t.isShow}})],1)],1)},o=[]},db86:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="other",a={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===n,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,e){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,e){this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}};e.default=a},e0c1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes show-data-v-f186af3a{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-f186af3a{0%{opacity:0}100%{opacity:1}}\n.h5-img[data-v-f186af3a]{\n\t/*height: 100px!important; */overflow:hidden;border-radius:5px\n\t/*background-color: #007AFF;\t */}",""]),t.exports=e},f97c:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _api=_interopRequireDefault(__webpack_require__("a4c7")),_self,wv,_default={data:function(){return{top:27,explain:47,bgHeight:695,close:!1,userId:0,bg:"",rule:"规则说明",pName:"",btnBottom:30,isApp:!0,one:!1,loading:!0,loadHeight:600,menuList:[{iconPath:"/static/member/exp.png",text:"规则",method:"closeTig"},{iconPath:"/static/member/team.png",text:"团队",method:"shareLog"},{iconPath:"/static/member/save.png",text:"保存",method:"saveShareImg"}]}},onLoad:function(){_self=this;var t=uni.getSystemInfoSync();_self.top=t.safeArea.top+7,_self.bgHeight=t.windowHeight,_self.loadHeight=_self.bgHeight,_self.btnBottom=15;var e=_api.default.getLogins();0==e?_self.skipUrl():(_self.userId=e.userId,_self.getShare())},onHide:function(){_self.one=!0},onShow:function(){if(_self.one){var t=_api.default.getLogins();0==t?_self.skipUrl():(_self.userId=t.userId,_self.getShare())}},methods:{trigger:function trigger(e){var funStr="_self."+e.item.method+"()";eval(funStr),_self.$nextTick((function(){_self.$refs["menu"].close()}))},getShare:function(){uni.request({url:_api.default.apiData.myShare+"/userId/"+_self.userId,method:"GET",header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data.Data;_api.default.imgCache(e.poster,(function(t){_self.bg=t+"?token="+_api.default.randomWord(!1,!1,10,10)})),_self.rule=e.rule,setTimeout((function(){_self.loading=!1}),500)},fail:function(){_api.default.showToast("服务器连接失败，请检查网络是否正常"),uni.navigateBack()}})},shareLog:function(){_api.default.jumpUrl("/pages/member/share_info","new")},closeTig:function(){_self.close=!_self.close},saveShareImg:function(){_api.default.showToast("请用手机截图或面对面扫码",2e3)},savePoto:function(t){uni.saveImageToPhotosAlbum({filePath:t,success:function(){_api.default.showToast("海报已保存至手机相册",2e3)},fail:function(){_api.default.showToast("保存失败，请检查APP是否有权限",5e3)}})},skipUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/pages/login/login",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(e){if(1==e)e="old";else if(2==e)e="new";else e="tab";_api.default.jumpUrl(t,e)}(e)}}};exports.default=_default}}]);