(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-setting"],{"27cb":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _neilModal=_interopRequireDefault(__webpack_require__("39f4")),_api=_interopRequireDefault(__webpack_require__("a4c7")),_self,_default={data:function(){return{userInfo:{},avatar:"/static/imgs/tx0.png",userId:0,isNotice:!1,isTel:!1,title:"提示",value:"",type:1,percent:0,imgs:"",fromData:{oldPwd:"",newPwd:"",rPwd:""},top:27,sex:["保密","帅哥","美女"]}},onLoad:function(){_self=this,uni.showLoading({title:"加载中...",mask:!0});var e=uni.getSystemInfoSync();_self.top=e.safeArea.top+7;var t=_api.default.getLogins();!1===t?_self.skipUrl():(_self.userId=t.userId,_self.getUserInfo())},methods:{radioChange:function(e){for(var t=0;t<_self.sex.length;t++)if(t===e.target.value){_self.userInfo.sex=t;break}},getUserInfo:function(){uni.request({url:_api.default.apiData.getInfo,method:"POST",data:{userId:_self.userId},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(e){_self.userInfo=e.data.Data,_self.userInfo.avatar.length>0&&(_self.avatar=_self.userInfo.avatar),_self.userInfo.sex=""==_self.userInfo.sex||null==_self.userInfo.sex?0:_self.userInfo.sex,null!=_self.userInfo.tel&&_self.userInfo.tel.length>0&&(_self.isTel=!0),uni.hideLoading()},fail:function(){_self.msgData("服务器连接失败，请检查网络是否正常",5e3)}})},editUserInfo:function(e){uni.showLoading({title:"加载中...",mask:!0}),_self.isNotice=!0,_self.type=e,1==e?(_self.title="请输入新昵称",_self.value=_self.userInfo.nickname):2==e?(_self.title="请输入新手机号",_self.value=_self.userInfo.tel):3==e?(_self.title="修改登录密码",_self.fromData.oldPwd="",_self.fromData.newPwd="",_self.fromData.rPwd=""):_self.title="请选择性别",uni.hideLoading()},inputPwd:function(e){_self.fromData[e.target.id]=e.target.value},inputUserInfo:function(e){_self.value=e.detail.value},confirm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;_self.msgData("处理中...");var t=1==e?_self.imgs:_self.value;if(3==_self.type)var i=_api.default.apiData.changePwd,n={userId:_self.userId,oldPwd:_self.fromData.oldPwd,newPwd:_self.fromData.newPwd,confirm:_self.fromData.rPwd};else i=_api.default.apiData.editInfo,n={type:_self.type,userId:_self.userId,content:t};uni.request({url:i,method:"POST",data:n,header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){0==e&&_self.msgData(t.data.Msg),200==t.data.Code&&(1==_self.type?_self.userInfo.nickname=_self.value:2==_self.type?(_self.userInfo.tel=_self.value,_self.isTel=!0):3==_self.type?(_api.default.delLogins(),_self.skipUrl(),_self.msgData("密码修改成功")):(_self.percent=0,_self.msgData("头像更换成功")))},fail:function(){_self.msgData("服务器连接失败，请检测网格是否正常")}})},closeNotice:function(){_self.isNotice=!1},uploadTx:function uploadTx(){uni.chooseImage({count:1,sizeType:["copressed"],success:function success(res){var imgFiles=res.tempFilePaths[0],uper=uni.uploadFile({url:_api.default.apiData.upload,filePath:imgFiles,name:"fileName",formData:{fileType:"image"},success:function success(e){var d=eval("("+e.data+")");200==d.Code?(_self.avatar=d.Data,_self.type=0,_self.imgs=d.Data,_self.confirm(1)):_api.default.showToast(d.Msg,2e3)}});uper.onProgressUpdate((function(e){_self.percent=e.progress}))}})},skipUrl:function(){uni.reLaunch({url:"/pages/login/login"})},msgData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none";uni.showToast({icon:i,title:e,mask:!0,duration:t})}},onPullDownRefresh:function(){_self.getUserInfo(),uni.stopPullDownRefresh()},components:{neilModal:_neilModal.default}};exports.default=_default},"39f4":function(e,t,i){"use strict";i.r(t);var n=i("f625"),a=i("90e7");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("b403");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"0031b672",null,!1,n["a"],s);t["default"]=r.exports},"41cc":function(e,t,i){"use strict";var n=i("41ef"),a=i.n(n);a.a},"41ef":function(e,t,i){var n=i("9f97");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("d5a5077a",n,!0,{sourceMap:!1,shadowMode:!1})},5824:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.neil-modal[data-v-0031b672]{position:fixed;visibility:hidden;width:100%;height:100%;top:0;left:0;z-index:1000;-webkit-transition:visibility .2s ease-in;transition:visibility .2s ease-in}.neil-modal.neil-modal--show[data-v-0031b672]{visibility:visible}.neil-modal__header[data-v-0031b672]{position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:%?18?% %?24?%;line-height:1.5;color:#333;font-size:%?32?%;text-align:center}.neil-modal__header[data-v-0031b672]::after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.neil-modal__container[data-v-0031b672]{position:absolute;z-index:999;top:46%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;width:%?540?%;border-radius:%?20?%;background-color:#fff;overflow:hidden;opacity:0;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in}.neil-modal__content[data-v-0031b672]{position:relative;color:#333;font-size:%?28?%;box-sizing:border-box;line-height:1.5}.neil-modal__content[data-v-0031b672]::after{content:" ";position:absolute;left:0;bottom:-1px;right:0;height:1px;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.neil-modal__footer[data-v-0031b672]{position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#333;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.neil-modal__footer-left[data-v-0031b672], .neil-modal__footer-right[data-v-0031b672]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:%?88?%;font-size:%?28?%;line-height:%?88?%;text-align:center;background-color:#fff;color:#333}.neil-modal__footer-right[data-v-0031b672]{color:#007aff}.neil-modal__footer-left[data-v-0031b672]::after{content:" ";position:absolute;right:-1px;top:0;width:1px;bottom:0;border-right:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.neil-modal__footer-hover[data-v-0031b672]{background-color:#f1f1f1}.neil-modal__mask[data-v-0031b672]{display:block;position:absolute;z-index:998;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);opacity:0;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in}.neil-modal__mask.neil-modal--show[data-v-0031b672]{opacity:1}.neil-modal--padding[data-v-0031b672]{padding:%?32?% %?24?%;min-height:%?90?%}.neil-modal--show .neil-modal__container[data-v-0031b672], .neil-modal--show .neil-modal__mask[data-v-0031b672]{opacity:1}',""]),e.exports=t},"74c8":function(e,t,i){var n=i("5824");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("56fbd158",n,!0,{sourceMap:!1,shadowMode:!1})},8436:function(e,t,i){"use strict";i.r(t);var n=i("c9c3"),a=i("9e4a");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("41cc");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"5b126833",null,!1,n["a"],s);t["default"]=r.exports},"90e7":function(e,t,i){"use strict";i.r(t);var n=i("cfab"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"9e4a":function(e,t,i){"use strict";i.r(t);var n=i("27cb"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"9f97":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".line[data-v-5b126833]{height:8px;background-color:#20202c}.content-head[data-v-5b126833]{ \n\t/*position: fixed; */width:100%;height:30px;line-height:30px;\n\t/*top: 27px; */text-align:center;color:#fff;background:rgba(0,0,0,.2);font-size:17px;border-bottom:1px solid rgba(0,0,0,.1)}.input[data-v-5b126833]{width:96%;padding:5px 2%;border:1px solid #e2e2e2;border-radius:5px;font-size:13px}.pwd[data-v-5b126833]{margin-bottom:10px}.head-tx uni-view[data-v-5b126833]{display:inline-block}.head-tx[data-v-5b126833]{width:90%;height:60px;line-height:60px;color:#fff;margin-top:15px;font-size:%?30?%;margin:auto;border-bottom:%?1?% solid #20202c}.head-img[data-v-5b126833]{width:80px;height:80px;border-radius:50%;border:1px solid #ff8f00}.head-acc[data-v-5b126833]{float:right;color:#999}",""]),e.exports=t},b403:function(e,t,i){"use strict";var n=i("74c8"),a=i.n(n);a.a},c9c3:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={neilModal:i("39f4").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"content-head",style:{padding:e.top+"px 0 10px 0"}},[e._v("编辑资料")]),i("v-uni-progress",{attrs:{percent:e.percent,backgroundColor:"#20202C","strock-width":"10"}}),i("v-uni-view",{staticStyle:{"text-align":"center",margin:"20px 0"}},[i("v-uni-image",{staticClass:"head-img",attrs:{src:e.avatar,mode:"aspectFill"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadTx.apply(void 0,arguments)}}}),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#fff","margin-top":"10upx"}},[e._v("点击更换头像")])],1),i("v-uni-view",{staticClass:"line"}),i("v-uni-view",{staticClass:"head-tx"},[i("v-uni-view",[e._v("账号")]),i("v-uni-view",{staticClass:"head-acc"},[e._v(e._s(e.userInfo.username))])],1),i("v-uni-view",{staticClass:"head-tx"},[i("v-uni-view",[e._v("昵称")]),i("v-uni-view",{staticClass:"head-acc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editUserInfo(1)}}},[e._v(e._s(e.userInfo.nickname)),i("v-uni-image",{staticStyle:{width:"12px",height:"10px"},attrs:{src:"/static/imgs/r.png"}})],1)],1),i("v-uni-view",{staticClass:"head-tx"},[i("v-uni-view",[e._v("绑定手机")]),e.isTel?i("v-uni-view",{staticClass:"head-acc"},[e._v(e._s(e.userInfo.tel))]):i("v-uni-view",{staticClass:"head-acc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editUserInfo(2)}}},[e._v("绑定后不可修改"),i("v-uni-image",{staticStyle:{width:"12px",height:"10px"},attrs:{src:"/static/imgs/r.png"}})],1)],1),i("v-uni-view",{staticClass:"head-tx"},[i("v-uni-view",[e._v("登录密码")]),i("v-uni-view",{staticClass:"head-acc",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editUserInfo(3)}}},[e._v("修改登录密码"),i("v-uni-image",{staticStyle:{width:"12px",height:"10px"},attrs:{src:"/static/imgs/r.png"}})],1)],1),i("neil-modal",{attrs:{show:e.isNotice,title:e.title,"confirm-text":"提交数据","cancel-text":"我再想想"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.closeNotice.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{"min-height":"90upx",padding:"24upx 30upx 10upx"}},[1==e.type?i("v-uni-view",[i("v-uni-input",{staticClass:"input",attrs:{type:"text",value:e.value,maxlength:"15",placeholder:"请输入用户昵称"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputUserInfo.apply(void 0,arguments)}}})],1):e._e(),2==e.type?i("v-uni-view",[i("v-uni-input",{staticClass:"input",attrs:{type:"number",value:e.value,maxlength:"11",placeholder:"请输入手机号"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputUserInfo.apply(void 0,arguments)}}})],1):e._e(),3==e.type?i("v-uni-view",[i("v-uni-input",{staticClass:"input pwd",attrs:{type:"password",value:e.fromData.oldPwd,id:"oldPwd",maxlength:"15",placeholder:"请输入原密码"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputPwd.apply(void 0,arguments)}}}),i("v-uni-input",{staticClass:"input pwd",attrs:{type:"password",value:e.fromData.newPwd,id:"newPwd",maxlength:"15",placeholder:"请输入新密码"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputPwd.apply(void 0,arguments)}}}),i("v-uni-input",{staticClass:"input pwd",attrs:{type:"password",value:e.fromData.rPwd,id:"rPwd",maxlength:"15",placeholder:"再输入一次"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputPwd.apply(void 0,arguments)}}})],1):e._e(),4==e.type?i("v-uni-view",[i("v-uni-radio-group",{staticStyle:{display:"flex","flex-direction":"row","padding-top":"10upx"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.sex,(function(t,n){return i("v-uni-label",{key:n,staticStyle:{flex:"1","flex-direction":"row",display:"flex","align-items":"center","justify-content":"center"}},[i("v-uni-view",[i("v-uni-radio",{attrs:{value:n,checked:n==e.userInfo.sex}})],1),i("v-uni-view",[e._v(e._s(t))])],1)})),1)],1):e._e()],1)],1)],1)},o=[]},cfab:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"neil-modal",props:{title:{type:String,default:""},content:String,align:{type:String,default:"left"},cancelText:{type:String,default:"取消"},cancelColor:{type:String,default:"#333333"},confirmText:{type:String,default:"确定"},confirmColor:{type:String,default:"#007aff"},showCancel:{type:[Boolean,String],default:!0},show:{type:[Boolean,String],default:!1},autoClose:{type:[Boolean,String],default:!0}},data:function(){return{isOpen:!1}},watch:{show:function(e){this.isOpen=e}},created:function(){this.isOpen=this.show},methods:{bindTouchmove:function(){},clickLeft:function(){var e=this;setTimeout((function(){e.$emit("cancel")}),200),this.closeModal()},clickRight:function(){var e=this;setTimeout((function(){e.$emit("confirm")}),200),this.closeModal()},clickMask:function(){this.autoClose&&this.closeModal()},closeModal:function(){this.showAnimation=!1,this.isOpen=!1,this.$emit("close")}}};t.default=n},f625:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"neil-modal",class:{"neil-modal--show":e.isOpen},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.bindTouchmove.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"neil-modal__mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickMask.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"neil-modal__container"},[e.title.length>0?i("v-uni-view",{staticClass:"neil-modal__header"},[e._v(e._s(e.title))]):e._e(),i("v-uni-view",{staticClass:"neil-modal__content",class:e.content?"neil-modal--padding":"",style:{textAlign:e.align}},[e.content?[i("v-uni-text",{staticClass:"modal-content"},[e._v(e._s(e.content))])]:[e._t("default")]],2),i("v-uni-view",{staticClass:"neil-modal__footer"},[e.showCancel?i("v-uni-view",{staticClass:"neil-modal__footer-left",style:{color:e.cancelColor},attrs:{"hover-class":"neil-modal__footer-hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))]):e._e(),i("v-uni-view",{staticClass:"neil-modal__footer-right",style:{color:e.confirmColor},attrs:{"hover-class":"neil-modal__footer-hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[e._v(e._s(e.confirmText))])],1)],1)],1)},o=[]}}]);