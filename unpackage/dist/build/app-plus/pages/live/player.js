!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=121)}({0:function(e,t,a){"use strict";function n(e,t,a,n,o,r,i,p,s,u){var l,c="function"==typeof e?e.options:e;if(s){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var d in s)f.call(s,d)&&!f.call(c.components,d)&&(c.components[d]=s[d])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(c.mixins||(c.mixins=[])).push(u)),t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=p?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var g=c.render;c.render=function(e,t){return l.call(t),g(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:c}}a.d(t,"a",(function(){return n}))},1:function(e,t){e.exports={"@VERSION":2}},10:function(e,t,a){"use strict";function n(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function r(e,t){switch(n(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];console[e].apply(console,a)},t.default=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[i].apply(console,t);var p=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,r)+"---END:JSON---"}catch(a){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=n(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e})),s="";if(p.length>1){var u=p.pop();s=p.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=p[0];console[i](s)}},106:function(e,t,a){"use strict";a.r(t);var n=a(53),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t.default=o.a},11:function(e,t,a){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(a(12).default,Vue.prototype.__$appStyle__)},12:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t.default=o.a},121:function(e,t,a){"use strict";a.r(t);a(11);var n=a(25);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(a){return t.resolve(e()).then((function(){return a}))}),(function(a){return t.resolve(e()).then((function(){throw a}))}))}),n.default.mpType="page",n.default.route="pages/live/player",n.default.el="#root",new Vue(n.default)},122:function(e,t,a){e.exports=a(123)},123:function(e,t,a){var n=function(e){"use strict";var t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function p(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(e,t,a){return e[t]=a}}function s(e,t,a,n){var o=t&&t.prototype instanceof c?t:c,r=Object.create(o.prototype),i=new w(n||[]);return r._invoke=function(e,t,a){var n="suspendedStart";return function(o,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw r;return L()}for(a.method=o,a.arg=r;;){var i=a.delegate;if(i){var p=k(i,a);if(p){if(p===l)continue;return p}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}(e,a,i),r}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function c(){}function f(){}function d(){}var g={};g[o]=function(){return this};var h=Object.getPrototypeOf,y=h&&h(h(x([])));y&&y!==t&&a.call(y,o)&&(g=y);var v=d.prototype=c.prototype=Object.create(g);function m(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var n;this._invoke=function(o,r){function i(){return new t((function(n,i){!function n(o,r,i,p){var s=u(e[o],e,r);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&a.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,i,p)}),(function(e){n("throw",e,i,p)})):t.resolve(c).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,p)}))}p(s.arg)}(o,r,n,i)}))}return n=n?n.then(i,i):i()}}function k(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=v.constructor=d,d.constructor=f,f.displayName=p(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,p(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},m(_.prototype),_.prototype[r]=function(){return this},e.AsyncIterator=_,e.async=function(t,a,n,o,r){void 0===r&&(r=Promise);var i=new _(s(t,a,n,o),r);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},m(v),p(v,i,"Generator"),v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],i=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var p=a.call(r,"catchLoc"),s=a.call(r,"finallyLoc");if(p&&s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(p){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),S(a),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var o=n.arg;S(a)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},16:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="http://v5_black_api.cqpig.cn",n="abc123456",o=function(){var e=uni.getStorageSync("nowDomain_"+n);return e||a},r=o(),i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o="",r=a;if(t)var i=["0","1","2","3","4","5","6","7","8","9"];else i=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(r=Math.round(Math.random()*(n-a))+a);for(var p=0;p<r;p++){var s=Math.round(Math.random()*(i.length-1));o+=i[s]}return o},p=function(e){if(!e)return!1;var t=e.split("/");return t[t.length-1]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";uni.showToast({icon:a,title:e,mask:!0,duration:t,image:n})},u=function(e){try{var t=e;return t<1048576?(t/1024).toFixed(2):1048576==t?1:t>1048576&&t<1073741824?(t/1048576).toFixed(2):t>1048576&&1073741824==t?"1GB":t>1073741824&&t<1099511627776?(t/1073741824).toFixed(2):"\u6587\u4ef6\u8d85\u8fc71TB"}catch(e){return!1}},l=function(){var e=uni.getStorageSync("my_did_abc123456");if(e)return e;var t=i(!1,!1,16,16);return uni.setStorageSync("my_did_abc123456","H5"+t),t},c=null,f=function(e,t){for(var a=[];t>0;a[--t]=e);return a.join("")},d={appkey:n,apiUrl:a,apiData:{appInits:r+"/appapi/appInit/appkey/"+n,getVersion:r+"/appapi/getVersion/appkey/"+n,homeData:r+"/appapi/homeMain/appkey/"+n,videoData:r+"/appapi/videoList/appkey/"+n,getAlbum:r+"/appapi/albumInfo/appkey/"+n,videoInfo:r+"/appapi/detail/appkey/"+n,addCollection:r+"/appapi/addCollection/appkey/"+n,videoLike:r+"/appapi/like/appkey/"+n,addComment:r+"/appapi/comment/appkey/"+n,commentList:r+"/appapi/commentList/appkey/"+n,heartBeat:r+"/appapi/heartbeat/appkey/"+n,userLogin:r+"/appapi/login/appkey/"+n,getConfig:r+"/appapi/getConfig/appkey/"+n,userReg:r+"/appapi/register/appkey/"+n,getMobileCode:r+"/appapi/getMobileCode/appkey/"+n,getInfo:r+"/appapi/getUserInfo/appkey/"+n,userSign:r+"/appapi/userSign/appkey/"+n,myBalance:r+"/appapi/balance/appkey/"+n,getMoney:r+"/appapi/getMoney/appkey/"+n,getBank:r+"/appapi/bankLists/appkey/"+n,getUserBank:r+"/appapi/userBankList/appkey/"+n,setBank:r+"/appapi/setDefaultBank/appkey/"+n,delBank:r+"/appapi/delBank/appkey/"+n,addBank:r+"/appapi/addBank/appkey/"+n,getDeposit:r+"/appapi/depositLog/appkey/"+n,getDetailed:r+"/appapi/detailedList/appkey/"+n,editInfo:r+"/appapi/editInfo/appkey/"+n,upload:r+"/appapi/upload/appkey/"+n,getColl:r+"/appapi/collectionList/appkey/"+n,delColl:r+"/appapi/deleteCollection/appkey/"+n,getWatchLog:r+"/appapi/getWatchLog/appkey/"+n,getSvodBuyLog:r+"/appapi/getSvodBuyLog/appkey/"+n,delWatchLog:r+"/appapi/delWatchLog/appkey/"+n,myShare:r+"/appapi/myShare/appkey/"+n,getShareLog:r+"/appapi/shareLog/appkey/"+n,changePwd:r+"/appapi/changePwd/appkey/"+n,getCharge:r+"/appapi/getChargeData/appkey/"+n,getPayList:r+"/appapi/getPayList/appkey/"+n,createOrder:r+"/appapi/createOrder/appkey/"+n,getAbout:r+"/appapi/getAbout/appkey/"+n,getGameList:r+"/appapi/getGameList/appkey/"+n,getPrize:r+"/appapi/getPrize/appkey/"+n,buyVideo:r+"/appapi/buy/appkey/"+n,getHotSearch:r+"/appapi/getHotSearch/appkey/"+n,searchVideo:r+"/appapi/searchVideo/appkey/"+n,emptySearch:r+"/appapi/emptySearch/appkey/"+n,getAd:r+"/appapi/getAd/appkey/"+n,getSharePid:r+"/appapi/getSharePid/appkey/"+n,uploadImg:r+"/appapi/uploadImg/appkey/"+n,getPlazaList:r+"/appapi/communityHomepage/appkey/"+n,getComment:r+"/appapi/getPostComment/appkey/"+n,getAdInfo:r+"/appapi/getAdInfo/appkey/"+n,sendComment:r+"/appapi/sendPostComment/appkey/"+n,homePage:r+"/appapi/homePage/appkey/"+n,uploadConfig:r+"/appapi/getUploadConfig/appkey/"+n,getTopMenu:r+"/appapi/getTopMenu/appkey/"+n,getAnchorList:r+"/appapi/getAnchorList/appkey/"+n,buyGoldRoom:r+"/appapi/buyGoldRoom/appkey/"+n,getUserAnchor:r+"/appapi/getUserIsAnchor/appkey/"+n,regAnchor:r+"/appapi/regAnchor/appkey/"+n,playerConfig:r+"/appapi/enterTheStudio/appkey/"+n,focusAnchor:r+"/appapi/focusOnTheAnchor/appkey/"+n,logoutRoom:r+"/appapi/exitTheStudio/appkey/"+n,giveAnchor:r+"/appapi/rewardTheAnchor/appkey/"+n,liveInitData:r+"/appapi/startLiveBroadcast/appkey/"+n,saveRoomData:r+"/appapi/saveRoomData/appkey/"+n,roomUploadImg:r+"/appapi/roomUploadImg/appkey/"+n,endLivePlayer:r+"/appapi/endLiveBroadcast/appkey/"+n,updateSendMs:r+"/appapi/updateSendMs/appkey/"+n,anchorOutUser:r+"/appapi/anchorOutUser/appkey/"+n,getPicture:r+"/appapi/getPicture/appkey/"+n,buyPicture:r+"/appapi/buyPicture/appkey/"+n,pictureInfo:r+"/appapi/pictureInfo/appkey/"+n,openH5Url:r+"/appapi/openH5Url/appkey/"+n,updateTryTime:r+"/appapi/updateTryTime/appkey/"+n,getAlbumList:r+"/appapi/getAlbumList/appkey/"+n,getUserTeam:r+"/appapi/getUserTeam/appkey/"+n,getPlayerLog:r+"/appapi/getPlayerLog/appkey/"+n,getPlayerGift:r+"/appapi/getPlayerGift/appkey/"+n,getFilterData:r+"/appapi/getFilterData/appkey/"+n,getFilters:r+"/appapi/getFilterVideo/appkey/"+n,getClassData:r+"/appapi/getClassData/appkey/"+n,getClassVideo:r+"/appapi/getClassVideoData/appkey/"+n,getTagData:r+"/appapi/getTagData/appkey/"+n,getSvodClass:r+"/appapi/getSvodClassData/appkey/"+n,getSvodData:r+"/appapi/getSvodClassVideoData/appkey/"+n,getSvodMain:r+"/appapi/getSvodMain/appkey/"+n,updateFree:r+"/appapi/updateFree/appkey/"+n,goldBuyVideo:r+"/appapi/goldBuyVideo/appkey/"+n,likeSvodVideo:r+"/appapi/likeSvodVideo/appkey/"+n,svodVideoComm:r+"/appapi/svodVideoComment/appkey/"+n,sendVideoComm:r+"/appapi/sendVideoComment/appkey/"+n,tagSvodVideo:r+"/appapi/tagSvodVideo/appkey/"+n,playSvodVideo:r+"/appapi/playSvodVideo/appkey/"+n,vipWeekDowns:r+"/appapi/vipWeekDowns/appkey/"+n,getPay:r+"/appapi/pay",agreement:r+"/appapi/privacy/type/1",privacy:r+"/appapi/privacy/type/2"},getLogins:function(){try{var e=uni.getStorageSync("userInfo_"+n);return e||!1}catch(e){return!1}},setLogins:function(e){try{return uni.setStorageSync("userInfo_"+n,e),!0}catch(e){return!1}},delLogins:function(){try{return uni.removeStorageSync("userInfo_"+n),!0}catch(e){return!1}},randomWord:i,imgCache:function(e,t){var a=p(e)+n+"",o=uni.getStorageSync(a);o?(plus.io.resolveLocalFileSystemURL(o,(function(e){e.file((function(e){}))}),(function(e){uni.removeStorageSync(a)})),t(o)):(t(e),uni.downloadFile({url:e,success:function(e){200==e.statusCode&&uni.saveFile({tempFilePath:e.tempFilePath,success:function(e){var t=e.savedFilePath;uni.setStorageSync(a,t)}})}}))},splitUrl:p,showToast:s,getFileSize:u,getWebDomain:o,getMobileDid:function(e){var t=uni.getSystemInfoSync();if((a=t.deviceId).length>0){var a=a.split("|").filter((function(e){return e&&e.trim()}));e(a[a.length-1])}else plus.device.getInfo({success:function(e){if("android"==t.platform){var n=e.uuid.split(",");a=n[0]}else a=e.uuid},fail:function(e){a=l()},complete:function(t){e(a)}})},outApp:function(){switch(uni.getSystemInfoSync().platform){case"android":plus.runtime.quit();break;case"ios":plus.ios.import("UIApplication").sharedApplication().performSelector("exit")}},jumpUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"web",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(a){if("#"==e||""==e)return!1;if("back"!=e)switch(t){case"old":uni.reLaunch({url:e});break;case"new":uni.navigateTo({url:e});break;case"tab":uni.switchTab({url:e});break;case"newx":uni.redirectTo({url:e});break;case"app":var n="/pages/jump/index?u="+e;uni.navigateTo({url:n});break;default:plus.runtime.openURL(e)}else{a=parseInt(t)?t:1;uni.navigateBack({delta:a})}}(a)},copy:function(e){var t=e+"";uni.setClipboardData({data:t,success:function(){s("\u590d\u5236\u6210\u529f",2e3)}})},createView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"50px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.3",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";c=new plus.nativeObj.View("bg",{bottom:"0px",left:"0px",height:e,width:"100%",opacity:t,backgroundColor:"rgba(0,0,0,1)"}),""!=a&&c.drawText(a,{widht:"100%",height:"100%"},{size:"18px",color:"#fff"}),c.show()},closeView:function(){c.close()},callUp:function(e){uni.makePhoneCall({phoneNumber:e+"",fail:function(){api.showToast("\u64cd\u4f5c\u5931\u8d25",2e3)}})},getContacts:function(e){plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,(function(t){t.find(["displayName","phoneNumbers"],(function(t){e(t)}),(function(){e(!1)}),{multiple:!0})}),(function(t){e(!1)}))},formatSeconds:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseInt(e),n=Math.floor(a/3600)<10?"0"+Math.floor(a/3600):Math.floor(a/3600),o=Math.floor(a/60%60)<10?"0"+Math.floor(a/60%60):Math.floor(a/60%60),r=Math.floor(a%60)<10?"0"+Math.floor(a%60):Math.floor(a%60),i="";return 1==t?(i+="".concat(n,":"),i+="".concat(o,":"),i+="".concat(r)):(i+="".concat(n,"\u65f6"),i+="".concat(o,"\u5206"),i+="".concat(r,"\u79d2")),i},nowUrl:r,getWebFileSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=0;e.length<1?t(a):uni.request({url:e,method:"HEAD",success:function(e){200==e.statusCode&&(a=u(e.header["Content-Length"]))},complete:function(){t(a)}})},isH5:function(){return{type:"app",ver:0}},printLog:function(){e("log"," ========= copyright: \u9b45\u601d\u89c6\u9891v4 ========= "," at common/api.js:702")},sprintf:function(){for(var e,t,a,n,o,r=0,i=arguments[r++],p=[],s="";i;){if(t=/^[^\x25]+/.exec(i))p.push(t[0]);else if(t=/^\x25{2}/.exec(i))p.push("%");else{if(!(t=/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(i)))throw"Huh ?!";if(null==(e=arguments[t[1]||r++])||null==e)throw"Too few arguments.";if(/[^s]/.test(t[7])&&"number"!=typeof e)throw"Expecting number but found "+typeof e;switch(t[7]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e);break;case"e":e=t[6]?e.toExponential(t[6]):e.toExponential();break;case"f":e=t[6]?parseFloat(e).toFixed(t[6]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&t[6]?e.substring(0,t[6]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(t[7])&&t[2]&&e>=0?"+"+e:e,n=t[3]?"0"==t[3]?"0":t[3].charAt(1):" ",o=t[5]-String(e).length-s.length,a=t[5]?f(n,o):"",p.push(s+(t[4]?e+a:a+e))}i=i.substring(t[0].length)}return p.join("")}};t.default=d}).call(this,a(10).default)},25:function(e,t,a){"use strict";var n=a(84),o=a(51),r=a(0);var i=Object(r.a)(o.default,n.b,n.c,!1,null,null,"140af4cb",!1,n.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(a(106).default,this.options.style):Object.assign(this.options.style,a(106).default)}).call(i),t.default=i.exports},51:function(e,t,a){"use strict";var n=a(52),o=a.n(n);t.default=o.a},52:function(module,exports,__webpack_require__){"use strict";(function(__f__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(122)),_api=_interopRequireDefault(__webpack_require__(16)),_self,socketTask,pingTime;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function asyncGeneratorStep(e,t,a,n,o,r,i){try{var p=e[r](i),s=p.value}catch(e){return void a(e)}p.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function i(e){asyncGeneratorStep(r,n,o,i,p,"next",e)}function p(e){asyncGeneratorStep(r,n,o,i,p,"throw",e)}i(void 0)}))}}var is_open_socket=!1,_default={components:{},data:function(){return{isLogin:!1,userId:0,phone:{},loadingHieght:100,isCheck:!1,isBtn:!1,aid:0,setTing:{playerName:"",playerGold:0,playerImg:""},playerImg:"",lingText:[],playerSetting:{mode:"SD",whiteness:0,beauty:0},context:{},playerUrl:"",startUrl:"",server:{ipUrl:""},did:"",userInfo:{id:0,isVip:!1,username:"loading...",gold:0,isDisable:!1,headImg:""},isShowPlaer:!0,videoContext:{},playerMuted:!1,backUrl:{url:"/pages/live/list",type:"newx"},anchorCover:"",isAnchorCover:!0,objectFit:"cover"}},onLoad:function onLoad(e){_self=this,_self.isLogin=_api.default.getLogins(),_self.isLogin&&(_self.userId=_self.isLogin.userId),_self.phone=uni.getSystemInfoSync(),"ios"==_self.phone.platform&&plus.navigator.hasNotchInScreen()?_self.objectFit="fill":_self.objectFit="cover",_self.loadingHieght=_self.phone.windowHeight+20,_self.aid=1==e.t?0:e.aid,null!=e.url&&(_self.backUrl=JSON.parse(e.url)),uni.setStorageSync("anchor_id_"+_api.default.appkey,_self.aid),_api.default.getMobileDid((function(e){_self.did=e,_self.initPlayer()})),uni.$on("getSubnvueParam",(function(data){if("livePlayerStatus"==data.type&&eval(data.data),"playerSetting"==data.type){var d=data.data.data;1==data.data.type?eval(d):_self.playerSetting=d}"roomSetting"==data.type&&(_self.setTing=data.data,_self.hideLiveSubNVue("live_setting"),_self.startPreview())}))},onReady:function(){0==_self.aid&&(_self.context=uni.createLivePusherContext("livePusher",_self))},onShow:function(){0!=_self.aid&&(_self.setLiveStatus(!0),uni.$emit("getSubnvueParam",{type:"toHeadBackFun",data:"_self.tryTimeDsq(1)"}))},onHide:function(){0!=_self.aid&&(_self.setLiveStatus(!1),uni.$emit("getSubnvueParam",{type:"toHeadBackFun",data:"_self.tryTimeDsq(0)"})),_self.isAnchorCover=!0},onUnload:function(){_self.closeConnectToServer()},onBackPress:function(e){return uni.$emit("getSubnvueParam",{type:"backList",data:_self.aid}),!0},methods:{loadedmetadata:function(e){_self.objectFit=e.detail.width>=e.detail.height?"contain":"fill"},setLiveStatus:function(e){_self.isShowPlaer=e},playLoad:function(){setTimeout((function(){_self.isAnchorCover=!1,_self.hideLiveSubNVue("live_loading")}),500)},initPlayer:function(){var e=uni.getStorageSync("server_ipUrl_"+_api.default.appkey);e&&(_self.server.ipUrl=e),0==_self.aid?_self.getAnchorData():_self.getClientData()},connectToServer:function(){0!=_self.server.ipUrl.length?((socketTask=uni.connectSocket({url:_self.server.ipUrl,fail:function(){_self.backList("\u8fde\u63a5\u6d88\u606f\u670d\u52a1\u5668\u5931\u8d252")}})).onOpen((function(e){is_open_socket=!0,socketTask.onMessage((function(e){var t=JSON.parse(e.data);switch(t.type){case"init":var a={type:"bid",data:{did:_self.did,time:5,id:_self.userId,isVip:_self.userInfo.isVip,username:_self.userInfo.username,headImg:_self.userInfo.headImg,isDisable:_self.userInfo.isDisable},web:0==_self.aid?_api.default.apiData.endLivePlayer:_api.default.apiData.logoutRoom,anchorId:_self.aid};_self.sendSocketTask(a);break;case"msg":if(t.anchorId==_self.aid||t.anchorId==_self.userId){if(1==t.data.type)var n="_self.addSysNotice("+JSON.stringify(t.data.content)+")";else n="_self.userSendMsg("+JSON.stringify(t.data)+")";uni.$emit("getSubnvueParam",{type:"backFun",data:n})}break;case"userLogout":t.anchorId!=_self.aid&&t.anchorId!=_self.userId||(__f__("log","out",t.data," at pages/live/player.nvue:267"),uni.$emit("getSubnvueParam",{type:"outUser",data:t.data}));break;case"giveGift":if(t.anchorId==_self.aid||t.anchorId==_self.userId){n="_self.userGiveGift("+JSON.stringify(t.data.item)+")";uni.$emit("getSubnvueParam",{type:"backFun",data:n}),uni.$emit("getSubnvueParam",{type:"giveGiftOrder",data:t.data.orderList})}break;case"endLive":t.anchorId==_self.aid&&(_self.isShowPlaer=!1,uni.showModal({content:"\u672c\u6b21\u76f4\u64ad\u5df2\u7ed3\u675f\uff0c\u4e0b\u671f\u4e0d\u89c1\u4e0d\u6563",showCancel:!1,confirmText:"\u786e\u5b9a\u8fd4\u56de",success:function(e){e.confirm&&_self.skipUrl("/pages/live/list","newx")}}));break;case"userFocus":var o={detail:{message:(t.data.isVip?"VIP":"")+"["+t.data.username+"]\u5173\u6ce8\u4e86\u60a8"}};_self.statechange(o);break;case"kickOutAnchor":n="_self.kickOutAnchor("+JSON.stringify(t)+")";uni.$emit("getSubnvueParam",{type:"backFun",data:n});break;case"login":t.anchorId!=_self.aid&&t.anchorId!=_self.userId||uni.$emit("getSubnvueParam",{type:"inUser",data:t.data});break;default:t.anchorId!=_self.aid&&t.anchorId!=_self.userId||uni.$emit("getSubnvueParam",{type:t.type,data:t})}}))})),setTimeout((function(){is_open_socket||_self.backList("\u8fde\u63a5\u6d88\u606f\u670d\u52a1\u5668\u5931\u8d253")}),1e4),pingTime=setInterval((function(){_self.pongToServer()}),9e3)):_self.backList("\u8fde\u63a5\u6d88\u606f\u670d\u52a1\u5668\u5931\u8d251")},pongToServer:function(){_self.sendSocketTask({type:"pong"})},sendSocketTask:function(e){is_open_socket&&socketTask.send({data:JSON.stringify(e),success:function(){return _asyncToGenerator(_regenerator.default.mark((function t(){return _regenerator.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:__f__("log",e," at pages/live/player.nvue:342");case 1:case"end":return t.stop()}}),t)})))()}})},closeConnectToServer:function(){socketTask.close({success:function(e){is_open_socket=!1,clearInterval(pingTime)}})},showLiveSubNVue:function(e){uni.getSubNVueById(e).show("slide-in-bottom",10)},hideLiveSubNVue:function(e){uni.getSubNVueById(e).hide("slide-in-bottom",10)},statechange:function(e){_self.lingText.push(e.detail.message),_self.lingText.reverse()},netstatus:function(e){},liveError:function(e){_api.default.showToast("\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u5173\u95edAPP\u91cd\u8bd5",2e3),__f__("log","error:"+JSON.stringify(e)," at pages/live/player.nvue:378")},start:function(){_self.setTing.playerName.length<1?(_self.showLiveSubNVue("live_setting"),_api.default.showToast("\u8bf7\u8bbe\u7f6e\u623f\u95f4\u4fe1\u606f",2e3)):_self.context.start({success:function(e){uni.$emit("getSubnvueParam",{type:"startPlayer",data:1}),0==_self.setTing.playerImg.length?setTimeout((function(){_self.snapshot((function(e){_self.uploadRoomImg(e)}))}),500):_self.uploadRoomImg(_self.setTing.playerImg)}})},pause:function(){_self.context.pause({success:function(e){uni.$emit("getSubnvueParam",{type:"startPlayer",data:2})}})},resume:function(){_self.context.resume({success:function(e){uni.$emit("getSubnvueParam",{type:"startPlayer",data:1})}})},snapshot:function(e){_self.context.snapshot({success:function(t){var a=t.message.tempImagePath.split("/"),n="_doc/snapshot/"+a[a.length-1];e(n)}})},stop:function(){_self.context.stop({success:function(e){uni.$emit("getSubnvueParam",{type:"startPlayer",data:0})}})},switchCamera:function(){_self.context.switchCamera({success:function(e){}})},startPreview:function(){_self.context.startPreview({success:function(e){}})},uploadRoomImg:function uploadRoomImg(img){var imgs=[{name:"imgs[0]",uri:img}],uper=uni.uploadFile({url:_api.default.apiData.roomUploadImg,files:imgs,formData:{uid:_self.userId,roomName:_self.setTing.playerName,roomGold:_self.setTing.playerGold,tryTime:_self.setTing.tryTime},success:function success(e){var d=eval("("+e.data+")");200==d.Code?(_self.playerImg=d.Data,0==_self.setTing.playerImg.length&&_self.snapshot((function(e){setTimeout((function(){_self.uploadRoomImg(e)}),6e4)}))):_self.backList(r.Msg)},fail:function(){_api.default.showToast("\u4e0a\u4f20\u5373\u65f6\u5c01\u9762\u5931\u8d25")}});uper.onProgressUpdate((function(e){}))},videoErrorCallback:function(){},getAnchorData:function(){uni.request({url:_api.default.apiData.liveInitData,method:"POST",data:{uid:_self.userId},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;if(200==t.Code){var a=t.Data;_self.startUrl=a.startUrl,a.id=_self.userId,a.playerTime=0;var n="_self.setMinTrytime("+a.minTryTime+")";uni.$emit("getSubnvueParam",{type:"liveSetting",data:n}),uni.$emit("getSubnvueParam",{type:"anchorToHead",data:a}),uni.$emit("getSubnvueParam",{type:"anchor",data:_self.userId}),_self.connectToServer()}else _api.default.showToast(t.Msg,3e3)},fail:function(){_self.backList("\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u6b63\u5e38")},complete:function(){_self.hideLiveSubNVue("live_loading"),_self.showLiveSubNVue("live_setting")}})},getClientData:function(){uni.request({url:_api.default.apiData.playerConfig,method:"POST",data:{uid:_self.userId,aid:_self.aid,sys:_self.phone.platform},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;if(200==t.Code){var a=t.Data;_self.playerUrl=a.anchorInfo.playerUrl,_self.anchorCover=a.anchorInfo.anchorCover,_self.userInfo=a.userInfo;var n={onlineNum:a.onlineNum.length,anchorInfo:a.anchorInfo,isFocus:a.isFocus,giftOrder:a.giftOrder,otherParam:{aid:_self.aid,uid:_self.userId},userInfo:_self.userInfo},o={giftList:a.giftList,userInfo:_self.userInfo,sysNotice:a.sysNotice},r="_self.getGiftList("+JSON.stringify(o)+")";uni.$emit("getSubnvueParam",{type:"backFun",data:r}),uni.$emit("getSubnvueParam",{type:"toHead",data:n}),uni.$emit("getSubnvueParam",{type:"anchorId",data:_self.aid}),setTimeout((function(){_self.sendSocketTask({type:"onlineList",anchorId:_self.aid,data:a.onlineNum})}),500),_self.connectToServer()}else _self.backList(t.Msg)},fail:function(){_self.backList("\u670d\u52a1\u5668\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u6b63\u5e38")},complete:function(){}})},backList:function(e){_api.default.showToast(e,2e3),setTimeout((function(){_self.skipUrl(_self.backUrl.url,_self.backUrl.type),_self.isShowPlaer=!1}),1500)},skipUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/pages/login/login",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"newx";_api.default.jumpUrl(e,t)}}};exports.default=_default}).call(this,__webpack_require__(10).default)},53:function(e,t){e.exports={"player-end":{justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.5)",width:"750rpx"},"live-text":{color:"#FFFFFF",fontSize:"10",height:"30rpx",lineHeight:"30rpx"},"live-ing":{position:"fixed",top:"75",right:"20rpx",height:"105rpx",backgroundColor:"rgba(0,0,0,0.3)",borderRadius:"20rpx",alignItems:"center",paddingTop:"10rpx",paddingRight:"10rpx",paddingBottom:"10rpx",paddingLeft:"10rpx"},livePusher:{width:"750rpx",position:"fixed",top:0,left:0},"player-video":{width:"750rpx",position:"fixed",top:0,left:0},content:{backgroundColor:"#000000"},"@VERSION":2}},84:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!1,enableBackToTop:!0,bubble:"true"}},[a("view",{staticClass:["content"]},[e.aid>0?a("view",{staticClass:["live-player"]},[e.isShowPlaer?a("u-video",{staticClass:["player-video"],style:{height:e.phone.windowHeight+"px"},attrs:{id:"myVideo",autoplay:!0,controls:!1,loop:!0,muted:e.playerMuted,src:e.playerUrl,enableProgressGesture:!1,objectFit:e.objectFit,poster:e.anchorCover},on:{error:e.videoErrorCallback,play:e.playLoad}},[a("u-scalable",{staticStyle:{position:"absolute",left:"0",right:"0",top:"0",bottom:"0"}},[e.isAnchorCover?a("u-image",{staticClass:["player-end"],style:{height:e.phone.windowHeight+"px"},attrs:{src:e.anchorCover,mode:"aspectFill"}}):e._e()],1)],1):a("cover-image",{staticClass:["player-end"],style:{height:e.phone.windowHeight+"px"},attrs:{src:e.anchorCover,mode:"aspectFill"}})],1):a("view",{staticClass:["live-player"]},[a("live-pusher",{ref:"livePusher",staticClass:["livePusher"],style:{height:e.phone.windowHeight+"px"},attrs:{id:"livePusher",aspect:"9:16",url:e.startUrl,muted:!1,enableCamera:!0,autoFocus:!0,mode:e.playerSetting.mode,beauty:e.playerSetting.beauty,whiteness:e.playerSetting.whiteness},on:{netstatus:e.netstatus,error:e.liveError}}),e.lingText.length>0?a("scroll-view",{staticClass:["live-ing"],attrs:{scrollY:"true",showScrollbar:!1}},e._l(e.lingText,(function(t,n){return a("u-text",{key:n,staticClass:["live-text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t))])})),0):e._e()],1)])])},o=[]}});