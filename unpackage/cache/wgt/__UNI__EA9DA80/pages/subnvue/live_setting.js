!function(e){var t={};function a(i){if(t[i])return t[i].exports;var p=t[i]={i:i,l:!1,exports:{}};return e[i].call(p.exports,p,p.exports,a),p.l=!0,p.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var p in e)a.d(i,p,function(t){return e[t]}.bind(null,p));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=94)}({0:function(e,t,a){"use strict";function i(e,t,a,i,p,o,n,r,s,l){var u,d="function"==typeof e?e.options:e;if(s){d.components||(d.components={});var c=Object.prototype.hasOwnProperty;for(var f in s)c.call(s,f)&&!c.call(d.components,f)&&(d.components[f]=s[f])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),t&&(d.render=t,d.staticRenderFns=a,d._compiled=!0),i&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),n?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),p&&p.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=u):p&&(u=r?function(){p.call(this,this.$root.$options.shadowRoot)}:p),u)if(d.functional){d._injectStyles=u;var g=d.render;d.render=function(e,t){return u.call(t),g(e,t)}}else{var y=d.beforeCreate;d.beforeCreate=y?[].concat(y,u):[u]}return{exports:e,options:d}}a.d(t,"a",(function(){return i}))},1:function(e,t){e.exports={"@VERSION":2}},10:function(e,t,a){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(a(11).default,Vue.prototype.__$appStyle__)},11:function(e,t,a){"use strict";a.r(t);var i=a(1),p=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=p.a},13:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="http://v3api.yiyukj.com",p="abc123456",o=function(){var e=uni.getStorageSync("nowDomain_"+p);return e||i},n=o(),r=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];plus.sqlite.executeSql({name:e,sql:t,success:function(t){0!=a&&plus.sqlite.executeSql({name:e,sql:a,success:function(e){},fail:function(e){}})},fail:function(e){}})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,p="",o=a;if(t)var n=["0","1","2","3","4","5","6","7","8","9"];else n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(o=Math.round(Math.random()*(i-a))+a);for(var r=0;r<o;r++){var s=Math.round(Math.random()*(n.length-1));p+=n[s]}return p},l=function(e){if(!e)return!1;var t=e.split("/");return t[t.length-1]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";uni.showToast({icon:a,title:e,mask:!0,duration:t,image:i})},d=function(e){try{var t=e;return t<1048576?(t/1024).toFixed(2):1048576==t?1:t>1048576&&t<1073741824?(t/1048576).toFixed(2):t>1048576&&1073741824==t?"1GB":t>1073741824&&t<1099511627776?(t/1073741824).toFixed(2):"\u6587\u4ef6\u8d85\u8fc71TB"}catch(e){return!1}},c=function(){var e=uni.getStorageSync("my_did_abc123456");if(e)return e;var t=s(!1,!1,16,16);return uni.setStorageSync("my_did_abc123456","H5"+t),t},f=null,g={appkey:p,apiUrl:i,apiData:{appInits:n+"/appapi/appInit/appkey/"+p,getVersion:n+"/appapi/getVersion/appkey/"+p,homeData:n+"/appapi/homeMain/appkey/"+p,videoData:n+"/appapi/videoList/appkey/"+p,getAlbum:n+"/appapi/albumInfo/appkey/"+p,videoInfo:n+"/appapi/detail/appkey/"+p,addCollection:n+"/appapi/addCollection/appkey/"+p,videoLike:n+"/appapi/like/appkey/"+p,addComment:n+"/appapi/comment/appkey/"+p,commentList:n+"/appapi/commentList/appkey/"+p,heartBeat:n+"/appapi/heartbeat/appkey/"+p,userLogin:n+"/appapi/login/appkey/"+p,getConfig:n+"/appapi/getConfig/appkey/"+p,userReg:n+"/appapi/register/appkey/"+p,getMobileCode:n+"/appapi/getMobileCode/appkey/"+p,getInfo:n+"/appapi/getUserInfo/appkey/"+p,userSign:n+"/appapi/userSign/appkey/"+p,myBalance:n+"/appapi/balance/appkey/"+p,getMoney:n+"/appapi/getMoney/appkey/"+p,getBank:n+"/appapi/bankLists/appkey/"+p,getUserBank:n+"/appapi/userBankList/appkey/"+p,setBank:n+"/appapi/setDefaultBank/appkey/"+p,delBank:n+"/appapi/delBank/appkey/"+p,addBank:n+"/appapi/addBank/appkey/"+p,getDeposit:n+"/appapi/depositLog/appkey/"+p,getDetailed:n+"/appapi/detailedList/appkey/"+p,editInfo:n+"/appapi/editInfo/appkey/"+p,upload:n+"/appapi/upload/appkey/"+p,getColl:n+"/appapi/collectionList/appkey/"+p,delColl:n+"/appapi/deleteCollection/appkey/"+p,getWatchLog:n+"/appapi/getWatchLog/appkey/"+p,delWatchLog:n+"/appapi/delWatchLog/appkey/"+p,myShare:n+"/appapi/myShare/appkey/"+p,getShareLog:n+"/appapi/shareLog/appkey/"+p,changePwd:n+"/appapi/changePwd/appkey/"+p,getCharge:n+"/appapi/getChargeData/appkey/"+p,getPayList:n+"/appapi/getPayList/appkey/"+p,createOrder:n+"/appapi/createOrder/appkey/"+p,getAbout:n+"/appapi/getAbout/appkey/"+p,getGameList:n+"/appapi/getGameList/appkey/"+p,getPrize:n+"/appapi/getPrize/appkey/"+p,buyVideo:n+"/appapi/buy/appkey/"+p,getHotSearch:n+"/appapi/getHotSearch/appkey/"+p,searchVideo:n+"/appapi/searchVideo/appkey/"+p,emptySearch:n+"/appapi/emptySearch/appkey/"+p,getAd:n+"/appapi/getAd/appkey/"+p,getSharePid:n+"/appapi/getSharePid/appkey/"+p,uploadImg:n+"/appapi/uploadImg/appkey/"+p,getPlazaList:n+"/appapi/communityHomepage/appkey/"+p,getComment:n+"/appapi/getPostComment/appkey/"+p,getAdInfo:n+"/appapi/getAdInfo/appkey/"+p,sendComment:n+"/appapi/sendPostComment/appkey/"+p,homePage:n+"/appapi/homePage/appkey/"+p,uploadConfig:n+"/appapi/getUploadConfig/appkey/"+p,getTopMenu:n+"/appapi/getTopMenu/appkey/"+p,getAnchorList:n+"/appapi/getAnchorList/appkey/"+p,buyGoldRoom:n+"/appapi/buyGoldRoom/appkey/"+p,getUserAnchor:n+"/appapi/getUserIsAnchor/appkey/"+p,regAnchor:n+"/appapi/regAnchor/appkey/"+p,playerConfig:n+"/appapi/enterTheStudio/appkey/"+p,focusAnchor:n+"/appapi/focusOnTheAnchor/appkey/"+p,logoutRoom:n+"/appapi/exitTheStudio/appkey/"+p,giveAnchor:n+"/appapi/rewardTheAnchor/appkey/"+p,liveInitData:n+"/appapi/startLiveBroadcast/appkey/"+p,saveRoomData:n+"/appapi/saveRoomData/appkey/"+p,roomUploadImg:n+"/appapi/roomUploadImg/appkey/"+p,endLivePlayer:n+"/appapi/endLiveBroadcast/appkey/"+p,updateSendMs:n+"/appapi/updateSendMs/appkey/"+p,anchorOutUser:n+"/appapi/anchorOutUser/appkey/"+p,getPicture:n+"/appapi/getPicture/appkey/"+p,buyPicture:n+"/appapi/buyPicture/appkey/"+p,pictureInfo:n+"/appapi/pictureInfo/appkey/"+p,openH5Url:n+"/appapi/openH5Url/appkey/"+p,updateTryTime:n+"/appapi/updateTryTime/appkey/"+p,getAlbumList:n+"/appapi/getAlbumList/appkey/"+p,getPay:n+"/appapi/pay",agreement:n+"/appapi/privacy/type/1",privacy:n+"/appapi/privacy/type/2"},getLogins:function(){try{var e=uni.getStorageSync("userInfo_"+p);return e||!1}catch(e){return!1}},setLogins:function(e){try{return uni.setStorageSync("userInfo_"+p,e),!0}catch(e){return!1}},delLogins:function(){try{return uni.removeStorageSync("userInfo_"+p),!0}catch(e){return!1}},randomWord:s,downVideo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="video",i='create table if not exists downVideoList("userid" INT(11),"videoid" INT(11),"videotitle" CHAR(100),"videourl" CHAR(100),"poster" CHAR(100),"videosize" CHAR(50),"downsize" CHAR(50),"downkb" CHAR(50),"videoing" INT(11),"starttostop" INT(1),"downstatus" INT(1),"delstatus" INT(1))';if(1==t)var p="insert into downVideoList values('"+e.userId+"','"+e.videoId+"','"+e.videoTitle+"','"+e.videoUrl+"','"+e.poster+"','"+e.videoSize+"','0','\u51c6\u5907\u5c31\u7eea','0','1','0','1')";else p=e;r(a,i,p)},delDown:function(e,t,a,i){r("video",'create table if not exists downVideoList("userid" INT(11),"videoid" INT(11),"videotitle" CHAR(100),"videourl" CHAR(100),"poster" CHAR(100),"videosize" CHAR(50),"downsize" CHAR(50),"downkb" CHAR(50),"videoing" INT(11),"starttostop" INT(1),"downstatus" INT(1),"delstatus" INT(1))',"delete from downVideoList where videoid="+t+" and userid="+e),1==i&&plus.io.resolveLocalFileSystemURL(a,(function(e){e.remove((function(e){}),(function(e){}))}))},openDb:function(e){plus.sqlite.openDatabase({name:e,path:"_doc/video_"+p+".db",success:function(e){},fail:function(e){}})},closeDb:function(e){plus.sqlite.closeDatabase({name:e,success:function(e){},fail:function(e){}})},createTable:function(){r("video",'create table if not exists downVideoList("userid" INT(11),"videoid" INT(11),"videotitle" CHAR(100),"videourl" CHAR(100),"poster" CHAR(100),"videosize" CHAR(50),"downsize" CHAR(50),"downkb" CHAR(50),"videoing" INT(11),"starttostop" INT(1),"downstatus" INT(1),"delstatus" INT(1))')},imgCache:function(e,t){var a=l(e)+p+"",i=uni.getStorageSync(a);i?(plus.io.resolveLocalFileSystemURL(i,(function(e){e.file((function(e){}))}),(function(e){uni.removeStorageSync(a)})),t(i)):(t(e),uni.downloadFile({url:e,success:function(e){200==e.statusCode&&uni.saveFile({tempFilePath:e.tempFilePath,success:function(e){var t=e.savedFilePath;uni.setStorageSync(a,t)}})}}))},splitUrl:l,showToast:u,getFileSize:d,getWebDomain:o,getMobileDid:function(e){var t=uni.getSystemInfoSync(),a=t.deviceId||0;a.length>0?e(a):plus.device.getInfo({success:function(e){if("android"==t.platform){var i=e.uuid.split(",");a=i[0]}else a=e.uuid},fail:function(e){a=c()},complete:function(t){e(a)}})},outApp:function(){switch(uni.getSystemInfoSync().platform){case"android":plus.runtime.quit();break;case"ios":plus.ios.import("UIApplication").sharedApplication().performSelector("exit")}},jumpUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"web",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if("#"==e||""==e)return!1;switch(t){case"old":uni.reLaunch({url:e});break;case"new":uni.navigateTo({url:e});break;case"tab":uni.switchTab({url:e});break;case"newx":uni.redirectTo({url:e});break;case"back":uni.navigateBack({delta:a});break;case"app":var i="/pages/jump/index?u="+e;uni.navigateTo({url:i});break;default:plus.runtime.openURL(e)}},copy:function(e){var t=e+"";uni.setClipboardData({data:t,success:function(){u("\u590d\u5236\u6210\u529f",2e3)}})},createView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"50px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.3",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";f=new plus.nativeObj.View("bg",{bottom:"0px",left:"0px",height:e,width:"100%",opacity:t,backgroundColor:"rgba(0,0,0,1)"}),""!=a&&f.drawText(a,{widht:"100%",height:"100%"},{size:"18px",color:"#fff"}),f.show()},closeView:function(){f.close()},callUp:function(e){uni.makePhoneCall({phoneNumber:e+"",fail:function(){api.showToast("\u64cd\u4f5c\u5931\u8d25",2e3)}})},getContacts:function(e){plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,(function(t){t.find(["displayName","phoneNumbers"],(function(t){e(t)}),(function(){e(!1)}),{multiple:!0})}),(function(t){e(!1)}))},formatSeconds:function(e){var t=parseInt(e),a=Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600),i=Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60),p=Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60),o="";return o+="".concat(a,":"),o+="".concat(i,":"),o+="".concat(p)},nowUrl:n,getWebFileSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=0;e.length<1?t(a):uni.request({url:e,method:"HEAD",success:function(e){200==e.statusCode&&(a=d(e.header["Content-Length"]))},complete:function(){t(a)}})},isH5:function(){return{type:"app",ver:0}}};t.default=g},21:function(e,t,a){"use strict";var i=a(69),p=a(39),o=a(0);var n=Object(o.a)(p.default,i.b,i.c,!1,null,null,"7343b653",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(a(82).default,this.options.style):Object.assign(this.options.style,a(82).default)}).call(n),t.default=n.exports},39:function(e,t,a){"use strict";var i=a(40),p=a.n(i);t.default=p.a},40:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _api=_interopRequireDefault(__webpack_require__(13)),_self;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={data:function(){return{param:{playerName:"",playerImg:"",playerGold:0,tryTime:0},showSetting:!1,djsTime:1,liveModeIcon:"/static/live/status0.png",isGold:!1,minTrytime:0}},onLoad:function onLoad(){_self=this,_self.djsShow(),uni.$on("getSubnvueParam",(function(data){"liveSetting"==data.type&&eval(data.data)}))},methods:{setMinTrytime:function(e){_self.minTrytime=e},switchMode:function(){_self.isGold=!_self.isGold,_self.isGold?_self.liveModeIcon="/static/live/status1.png":_self.liveModeIcon="/static/live/status0.png"},setParam:function(e){_self.param[e.target.id]=e.detail.value},selectImg:function(){uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){_self.param.playerImg=e.tempFilePaths[0]},fail:function(){}})},djsShow:function(){setTimeout((function(){(_self.djsTime--,_self.djsTime>0)?_self.djsShow():0==uni.getStorageSync("anchor_id_"+_api.default.appkey)&&(_self.showSetting=!0)}),1e3)},btnClose:function(){uni.getSubNVueById("live_setting").hide("slide-in-bottom",10),_api.default.jumpUrl("/pages/live/list","newx")},btnParam:function(){if(0!=_self.param.playerName.length){if(_self.isGold){if(0==_self.param.playerGold)return void _api.default.showToast("\u8bf7\u8f93\u5165\u6536\u8d39\u91d1\u5e01\u6570",1500);if(_self.param.tryTime<_self.minTrytime&&0!=_self.param.tryTime)return void _api.default.showToast("\u6700\u5c11\u8bd5\u770b\u65f6\u95f4"+_self.minTrytime+"\u5206\u949f",1500)}uni.$emit("getSubnvueParam",{type:"roomSetting",data:_self.param})}else _api.default.showToast("\u8bf7\u8f93\u5165\u76f4\u64ad\u95f4\u540d\u79f0",1500)}}};exports.default=_default},41:function(e,t){e.exports={"player-param-right":{fontSize:"30rpx",color:"#444444",height:"73rpx",lineHeight:"73rpx",marginLeft:"10rpx"},"player-param":{fontSize:"30rpx",textAlign:"right",height:"73rpx",lineHeight:"75rpx",color:"#444444",paddingRight:"15rpx"},"player-param-input":{width:"330rpx",borderWidth:"1",borderStyle:"solid",borderColor:"#f5f5f5",borderRadius:"10rpx",paddingTop:"10rpx",paddingRight:"15rpx",paddingBottom:"10rpx",paddingLeft:"15rpx"},"live-trytime":{width:"380rpx",position:"absolute",right:0,borderBottomWidth:"1",borderBottomStyle:"solid",borderBottomColor:"#f5f5f5",paddingBottom:"15rpx"},"live-gold":{width:"160rpx",borderBottomWidth:"1",borderBottomStyle:"solid",borderBottomColor:"#f5f5f5",paddingBottom:"15rpx"},"live-mode":{width:"70rpx",height:"42rpx",position:"absolute",right:0,bottom:0},"close-btn":{backgroundColor:"#FF5722",width:"160rpx",marginLeft:"30rpx"},"setting-btn":{backgroundColor:"rgba(255,12,208,0.8)",color:"#FFFFFF",fontSize:"33rpx",textAlign:"center",height:"80rpx",lineHeight:"80rpx",borderRadius:"10rpx",marginTop:"10rpx",width:"400rpx"},"player-content":{fontSize:"30rpx",marginTop:"10rpx",marginRight:0,marginBottom:"10rpx",marginLeft:0},"player-name":{color:"#666666",fontSize:"36rpx"},"live-setting-item":{marginBottom:"25rpx",borderBottomWidth:"1",borderBottomColor:"#F5F5F5"},"player-title":{fontSize:"37rpx",borderBottomColor:"#F5F5F5",borderBottomWidth:"1",marginBottom:"30rpx",paddingBottom:"30rpx",textAlign:"center"},"live-setting-bg":{backgroundColor:"#FFFFFF",width:"650rpx",borderRadius:"40rpx",paddingTop:"40rpx",paddingRight:"30rpx",paddingBottom:"40rpx",paddingLeft:"30rpx"},"live-setting":{justifyContent:"center",alignItems:"center"},"@VERSION":2}},69:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.showSetting?a("view",{staticClass:["live-setting"]},[a("view",{staticClass:["live-setting-bg"]},[a("u-text",{staticClass:["player-title"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u76f4\u64ad\u95f4\u76f8\u5173\u8bbe\u7f6e")]),a("view",{staticClass:["live-setting-item"]},[a("u-text",{staticClass:["player-name"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u76f4\u64ad\u95f4\u6807\u9898")]),a("u-input",{staticClass:["player-content"],attrs:{type:"text",placeholder:"1\u81f38\u4e2a\u4e2d\u82f1\u6587\u5b57\u7b26",maxlength:"8",id:"playerName"},on:{input:e.setParam}})],1),a("view",{staticClass:["live-setting-item"]},[a("u-text",{staticClass:["player-name"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u76f4\u64ad\u95f4\u5c01\u9762")]),0==e.param.playerImg.length?a("u-input",{staticClass:["player-content"],attrs:{type:"text",placeholder:"\u4e0a\u4f20\u5c01\u9762\u6216\u5b9e\u65f6\u622a\u56fe"},on:{click:e.selectImg}}):a("view",{staticStyle:{flexDirection:"row",lines:"1",marginTop:"15rpx",marginBottom:"15rpx"}},[a("u-text",{staticStyle:{fontSize:"30rpx",color:"#007AFF"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5df2\u8bbe\u7f6e")]),a("u-text",{staticStyle:{fontSize:"30rpx",marginLeft:"330rpx",color:"#007AFF"},appendAsTree:!0,attrs:{append:"tree"},on:{click:e.selectImg}},[e._v("\u91cd\u65b0\u9009\u62e9")])])],1),a("view",{staticClass:["live-setting-item"],staticStyle:{borderBottomColor:"#FFFFFF"}},[a("view",{staticStyle:{lines:"1",flexDirection:"row"}},[a("u-text",{staticClass:["player-name"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u662f\u5426\u91d1\u5e01\u623f")]),a("u-image",{staticClass:["live-mode"],attrs:{src:e.liveModeIcon,mode:"aspectFill"},on:{click:e.switchMode}})],1)]),e.isGold?a("view",[a("view",{staticStyle:{flexDirection:"row"}},[a("u-text",{staticClass:["player-param"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u623f\u8d39\u6536\u53d6:")]),a("u-input",{staticClass:["player-content","player-param-input"],attrs:{type:"number",maxlength:"3",id:"playerGold",placeholder:"\u91d1\u5e01\u6570"},on:{input:e.setParam}}),a("u-text",{staticClass:["player-param-right"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u91d1\u5e01")])],1),a("view",{staticStyle:{flexDirection:"row"}},[a("u-text",{staticClass:["player-param"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8bd5\u770b\u65f6\u95f4:")]),a("u-input",{staticClass:["player-content","player-param-input"],attrs:{type:"number",placeholder:"0\u6216\u7a7a\u5219\u4e0d\u652f\u6301\u8bd5\u770b",maxlength:"3",id:"tryTime"},on:{input:e.setParam}}),a("u-text",{staticClass:["player-param-right"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5206\u949f")])],1)]):e._e(),a("view",{staticStyle:{flexDirection:"row",marginTop:"15rpx"}},[a("u-text",{staticClass:["setting-btn"],appendAsTree:!0,attrs:{append:"tree"},on:{click:e.btnParam}},[e._v("\u786e\u5b9a")]),a("u-text",{staticClass:["setting-btn","close-btn"],appendAsTree:!0,attrs:{append:"tree"},on:{click:e.btnClose}},[e._v("\u5173\u95ed")])])])]):e._e()},p=[]},82:function(e,t,a){"use strict";a.r(t);var i=a(41),p=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t.default=p.a},94:function(e,t,a){"use strict";a.r(t);a(10);var i=a(21);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(a){return t.resolve(e()).then((function(){return a}))}),(function(a){return t.resolve(e()).then((function(){throw a}))}))}),i.default.mpType="page",i.default.route="pages/subnvue/live_setting",i.default.el="#root",new Vue(i.default)}});