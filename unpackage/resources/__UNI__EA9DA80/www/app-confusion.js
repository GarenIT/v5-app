(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-confusion"],{a4c7:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="http://dx_api.yiyukj.com",o="appapi",n="abc123456",p=function(){var e=uni.getStorageSync("nowDomain_"+n);return e||a},i=p(),r={appInits:i+"/"+o+"/appInit/appkey/"+n,getVersion:i+"/"+o+"/getVersion/appkey/"+n,homeData:i+"/"+o+"/homeMain/appkey/"+n,videoData:i+"/"+o+"/videoList/appkey/"+n,getAlbum:i+"/"+o+"/albumInfo/appkey/"+n,videoInfo:i+"/"+o+"/detail/appkey/"+n,addCollection:i+"/"+o+"/addCollection/appkey/"+n,videoLike:i+"/"+o+"/like/appkey/"+n,addComment:i+"/"+o+"/comment/appkey/"+n,commentList:i+"/"+o+"/commentList/appkey/"+n,heartBeat:i+"/"+o+"/heartbeat/appkey/"+n,userLogin:i+"/"+o+"/login/appkey/"+n,getConfig:i+"/"+o+"/getConfig/appkey/"+n,userReg:i+"/"+o+"/register/appkey/"+n,getMobileCode:i+"/"+o+"/getMobileCode/appkey/"+n,getInfo:i+"/"+o+"/getUserInfo/appkey/"+n,userSign:i+"/"+o+"/userSign/appkey/"+n,myBalance:i+"/"+o+"/balance/appkey/"+n,getMoney:i+"/"+o+"/getMoney/appkey/"+n,getBank:i+"/"+o+"/bankLists/appkey/"+n,getUserBank:i+"/"+o+"/userBankList/appkey/"+n,setBank:i+"/"+o+"/setDefaultBank/appkey/"+n,delBank:i+"/"+o+"/delBank/appkey/"+n,addBank:i+"/"+o+"/addBank/appkey/"+n,getDeposit:i+"/"+o+"/depositLog/appkey/"+n,getDetailed:i+"/"+o+"/detailedList/appkey/"+n,editInfo:i+"/"+o+"/editInfo/appkey/"+n,upload:i+"/"+o+"/upload/appkey/"+n,getColl:i+"/"+o+"/collectionList/appkey/"+n,delColl:i+"/"+o+"/deleteCollection/appkey/"+n,getWatchLog:i+"/"+o+"/getWatchLog/appkey/"+n,getSvodBuyLog:i+"/"+o+"/getSvodBuyLog/appkey/"+n,delWatchLog:i+"/"+o+"/delWatchLog/appkey/"+n,myShare:i+"/"+o+"/myShare/appkey/"+n,getShareLog:i+"/"+o+"/shareLog/appkey/"+n,changePwd:i+"/"+o+"/changePwd/appkey/"+n,getCharge:i+"/"+o+"/getChargeData/appkey/"+n,getPayList:i+"/"+o+"/getPayList/appkey/"+n,createOrder:i+"/"+o+"/createOrder/appkey/"+n,getAbout:i+"/"+o+"/getAbout/appkey/"+n,getGameList:i+"/"+o+"/getGameList/appkey/"+n,getPrize:i+"/"+o+"/getPrize/appkey/"+n,buyVideo:i+"/"+o+"/buy/appkey/"+n,getHotSearch:i+"/"+o+"/getHotSearch/appkey/"+n,searchVideo:i+"/"+o+"/searchVideo/appkey/"+n,emptySearch:i+"/"+o+"/emptySearch/appkey/"+n,getAd:i+"/"+o+"/getAd/appkey/"+n,getSharePid:i+"/"+o+"/getSharePid/appkey/"+n,uploadImg:i+"/"+o+"/uploadImg/appkey/"+n,getPlazaList:i+"/"+o+"/communityHomepage/appkey/"+n,getComment:i+"/"+o+"/getPostComment/appkey/"+n,getAdInfo:i+"/"+o+"/getAdInfo/appkey/"+n,sendComment:i+"/"+o+"/sendPostComment/appkey/"+n,homePage:i+"/"+o+"/homePage/appkey/"+n,uploadConfig:i+"/"+o+"/getUploadConfig/appkey/"+n,getTopMenu:i+"/"+o+"/getTopMenu/appkey/"+n,getAnchorList:i+"/"+o+"/getAnchorList/appkey/"+n,buyGoldRoom:i+"/"+o+"/buyGoldRoom/appkey/"+n,getUserAnchor:i+"/"+o+"/getUserIsAnchor/appkey/"+n,regAnchor:i+"/"+o+"/regAnchor/appkey/"+n,playerConfig:i+"/"+o+"/enterTheStudio/appkey/"+n,focusAnchor:i+"/"+o+"/focusOnTheAnchor/appkey/"+n,logoutRoom:i+"/"+o+"/exitTheStudio/appkey/"+n,giveAnchor:i+"/"+o+"/rewardTheAnchor/appkey/"+n,liveInitData:i+"/"+o+"/startLiveBroadcast/appkey/"+n,saveRoomData:i+"/"+o+"/saveRoomData/appkey/"+n,roomUploadImg:i+"/"+o+"/roomUploadImg/appkey/"+n,endLivePlayer:i+"/"+o+"/endLiveBroadcast/appkey/"+n,updateSendMs:i+"/"+o+"/updateSendMs/appkey/"+n,anchorOutUser:i+"/"+o+"/anchorOutUser/appkey/"+n,getPicture:i+"/"+o+"/getPicture/appkey/"+n,buyPicture:i+"/"+o+"/buyPicture/appkey/"+n,pictureInfo:i+"/"+o+"/pictureInfo/appkey/"+n,openH5Url:i+"/"+o+"/openH5Url/appkey/"+n,updateTryTime:i+"/"+o+"/updateTryTime/appkey/"+n,getAlbumList:i+"/"+o+"/getAlbumList/appkey/"+n,getUserTeam:i+"/"+o+"/getUserTeam/appkey/"+n,getPlayerLog:i+"/"+o+"/getPlayerLog/appkey/"+n,getPlayerGift:i+"/"+o+"/getPlayerGift/appkey/"+n,getFilterData:i+"/"+o+"/getFilterData/appkey/"+n,getFilters:i+"/"+o+"/getFilterVideo/appkey/"+n,getClassData:i+"/"+o+"/getClassData/appkey/"+n,getClassVideo:i+"/"+o+"/getClassVideoData/appkey/"+n,getTagData:i+"/"+o+"/getTagData/appkey/"+n,getSvodClass:i+"/"+o+"/getSvodClassData/appkey/"+n,getSvodData:i+"/"+o+"/getSvodClassVideoData/appkey/"+n,getSvodMain:i+"/"+o+"/getSvodMain/appkey/"+n,updateFree:i+"/"+o+"/updateFree/appkey/"+n,goldBuyVideo:i+"/"+o+"/goldBuyVideo/appkey/"+n,likeSvodVideo:i+"/"+o+"/likeSvodVideo/appkey/"+n,svodVideoComm:i+"/"+o+"/svodVideoComment/appkey/"+n,sendVideoComm:i+"/"+o+"/sendVideoComment/appkey/"+n,tagSvodVideo:i+"/"+o+"/tagSvodVideo/appkey/"+n,playSvodVideo:i+"/"+o+"/playSvodVideo/appkey/"+n,vipWeekDowns:i+"/"+o+"/vipWeekDowns/appkey/"+n,getPay:i+"/"+o+"/pay",agreement:i+"/"+o+"/privacy/type/1",privacy:i+"/"+o+"/privacy/type/2"},s=function(){try{var e=uni.getStorageSync("userInfo_"+n);return e||!1}catch(t){return!1}},u=function(e){try{return uni.setStorageSync("userInfo_"+n,e),!0}catch(t){return!1}},c=function(){try{return uni.removeStorageSync("userInfo_"+n),!0}catch(e){return!1}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,n="",p=a;if(t)var i=["0","1","2","3","4","5","6","7","8","9"];else i=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];e&&(p=Math.round(Math.random()*(o-a))+a);for(var r=0;r<p;r++){var s=Math.round(Math.random()*(i.length-1));n+=i[s]}return n},l=function(e,t){var a=d(e)+n+"",o=uni.getStorageSync(a);o?(plus.io.resolveLocalFileSystemURL(o,(function(e){e.file((function(e){}))}),(function(e){uni.removeStorageSync(a)})),t(o)):(t(e),uni.downloadFile({url:e,success:function(e){200==e.statusCode&&uni.saveFile({tempFilePath:e.tempFilePath,success:function(e){var t=e.savedFilePath;uni.setStorageSync(a,t)}})}}))},d=function(e){if(!e)return!1;var t=e.split("/"),a=t[t.length-1];return a},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";uni.showToast({icon:a,title:e,mask:!0,duration:t,image:o})},k=function(e){try{var t=e,a="";return a=t<1048576?(t/1024).toFixed(2):1048576==t?1:t>1048576&&t<1073741824?(t/1048576).toFixed(2):t>1048576&&1073741824==t?"1GB":t>1073741824&&t<1099511627776?(t/1073741824).toFixed(2):"\u6587\u4ef6\u8d85\u8fc71TB",a}catch(o){return!1}},h=function(e){var t=uni.getSystemInfoSync(),a=t.deviceId;if(a.length>0){a=a.split("|").filter((function(e){return e&&e.trim()}));e(a[a.length-1])}else plus.device.getInfo({success:function(e){if("android"==t.platform){var o=e.uuid.split(",");a=o[0]}else a=e.uuid},fail:function(e){a=f()},complete:function(t){e(a)}})},f=function(){var e="my_did_"+n,t=uni.getStorageSync(e);if(t)return t;var a=g(!1,!1,16,16);return uni.setStorageSync(e,"H5"+a),a},m=function(){switch(uni.getSystemInfoSync().platform){case"android":plus.runtime.quit();break;case"ios":plus.ios.import("UIApplication").sharedApplication().performSelector("exit");break}},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"web",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(a){if("#"==e||""==e)return!1;if("back"!=e)switch(t){case"old":uni.reLaunch({url:e});break;case"new":uni.navigateTo({url:e});break;case"tab":uni.switchTab({url:e});break;case"newx":uni.redirectTo({url:e});break;case"app":var o="/pages/jump/index?u="+e;uni.navigateTo({url:o});break;default:plus.runtime.openURL(e)}else{a=parseInt(t)?t:1;uni.navigateBack({delta:a})}}(a)},S=function(e){var t=e+"";uni.setClipboardData({data:t,success:function(){y("\u590d\u5236\u6210\u529f",2e3)}})},b=null,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"50px",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.3",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";b=new plus.nativeObj.View("bg",{bottom:"0px",left:"0px",height:e,width:"100%",opacity:t,backgroundColor:"rgba(0,0,0,1)"}),""!=a&&b.drawText(a,{widht:"100%",height:"100%"},{size:"18px",color:"#fff"}),b.show()},L=function(){b.close()},w=function(e){uni.makePhoneCall({phoneNumber:e+"",fail:function(){api.showToast("\u64cd\u4f5c\u5931\u8d25",2e3)}})},D=function(e){plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,(function(t){t.find(["displayName","phoneNumbers"],(function(t){e(t)}),(function(){e(!1)}),{multiple:!0})}),(function(t){e(!1)}))},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseInt(e),o=Math.floor(a/3600)<10?"0"+Math.floor(a/3600):Math.floor(a/3600),n=Math.floor(a/60%60)<10?"0"+Math.floor(a/60%60):Math.floor(a/60%60),p=Math.floor(a%60)<10?"0"+Math.floor(a%60):Math.floor(a%60),i="";return 1==t?(i+="".concat(o,":"),i+="".concat(n,":"),i+="".concat(p)):(i+="".concat(o,"\u65f6"),i+="".concat(n,"\u5206"),i+="".concat(p,"\u79d2")),i},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=0;e.length<1?t(a):uni.request({url:e,method:"HEAD",success:function(e){200==e.statusCode&&(a=k(e.header["Content-Length"]))},complete:function(){t(a)}})},M=function(){var e={type:"app",ver:0};return e},A=function(e,t){for(var a=[];t>0;a[--t]=e);return a.join("")},x=function(){var e,t,a,o,n,p=0,i=arguments[p++],r=[],s="";while(i){if(t=/^[^\x25]+/.exec(i))r.push(t[0]);else if(t=/^\x25{2}/.exec(i))r.push("%");else{if(!(t=/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(i)))throw"Huh ?!";if(null==(e=arguments[t[1]||p++])||void 0==e)throw"Too few arguments.";if(/[^s]/.test(t[7])&&"number"!=typeof e)throw"Expecting number but found "+typeof e;switch(t[7]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e);break;case"e":e=t[6]?e.toExponential(t[6]):e.toExponential();break;case"f":e=t[6]?parseFloat(e).toFixed(t[6]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&t[6]?e.substring(0,t[6]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase();break}e=/[def]/.test(t[7])&&t[2]&&e>=0?"+"+e:e,o=t[3]?"0"==t[3]?"0":t[3].charAt(1):" ",n=t[5]-String(e).length-s.length,a=t[5]?A(o,n):"",r.push(s+(t[4]?e+a:a+e))}i=i.substring(t[0].length)}return r.join("")},T=function(){e("log"," ========= copyright: \u9b45\u601d\u89c6\u9891v4 ========= "," at common/api.js:702")},V={appkey:n,apiUrl:a,apiData:r,getLogins:s,setLogins:u,delLogins:c,randomWord:g,imgCache:l,splitUrl:d,showToast:y,getFileSize:k,getWebDomain:p,getMobileDid:h,outApp:m,jumpUrl:v,copy:S,createView:C,closeView:L,callUp:w,getContacts:D,formatSeconds:I,nowUrl:i,getWebFileSize:P,isH5:M,printLog:T,sprintf:x};t.default=V}).call(this,a("0de9")["default"])}}]);