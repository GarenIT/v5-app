(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-live-reg_anchor"],{"287d":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".bottom-my-bg uni-image[data-v-5cd76fc0]{width:%?70?%;height:%?70?%;margin-top:%?10?%}.bottom-my-bg[data-v-5cd76fc0]{position:fixed;bottom:40px;right:30px;width:%?90?%;height:%?90?%;background-color:rgba(0,0,0,.5);z-index:99;text-align:center;border-radius:50%;border:1px solid rgba(255,12,208,.3);box-shadow:0 4px 6px 1px hsla(0,0%,40.4%,.2)}.mask[data-v-5cd76fc0]{\r\n\t/* pointer-events: none; */position:fixed;z-index:997;top:0;left:0;right:0;bottom:0;height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?-50?%}.mask .title[data-v-5cd76fc0]{color:#fff;font-size:12px;margin-top:%?40?%}.mask.mask-show[data-v-5cd76fc0]{background:rgba(7,17,27,.3)}\r\n/* loading加载动画的css */.loading13[data-v-5cd76fc0]{width:%?45?%;position:relative}.loading13 uni-view[data-v-5cd76fc0]{display:block;position:absolute;bottom:%?0?%;width:%?9?%;height:%?5?%;background:coral;-webkit-animation:loading13-data-v-5cd76fc0 1.5s infinite ease-in-out;animation:loading13-data-v-5cd76fc0 1.5s infinite ease-in-out}.loading13 uni-view[data-v-5cd76fc0]:nth-child(2){left:%?11?%;-webkit-animation-delay:.2s;animation-delay:.2s}.loading13 uni-view[data-v-5cd76fc0]:nth-child(3){left:%?22?%;-webkit-animation-delay:.4s;animation-delay:.4s}.loading13 uni-view[data-v-5cd76fc0]:nth-child(4){left:%?33?%;-webkit-animation-delay:.6s;animation-delay:.6s}.loading13 uni-view[data-v-5cd76fc0]:nth-child(5){left:%?44?%;-webkit-animation-delay:.8s;animation-delay:.8s}@-webkit-keyframes loading13-data-v-5cd76fc0{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}@keyframes loading13-data-v-5cd76fc0{0%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}25%{height:%?30?%;-webkit-transform:translateY(%?15?%);transform:translateY(%?15?%);background:#6495ed}50%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:#6495ed}100%{height:%?5?%;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%);background:coral}}.y-btn[data-v-5cd76fc0]{display:block;background-color:#ccc;height:%?100?%;line-height:%?100?%;border-radius:%?10?%;text-align:center;color:#888;font-size:%?30?%}.n-btn[data-v-5cd76fc0]{display:block;background-image:-webkit-linear-gradient(left,#ff8f00,rgba(254,67,101,.8));background-image:linear-gradient(90deg,#ff8f00,rgba(254,67,101,.8));height:%?100?%;line-height:%?100?%;border-radius:%?10?%;text-align:center;color:#fff;font-size:%?30?%}.anchor-item uni-input[data-v-5cd76fc0]{\r\n\t/*background-color: #009688; */height:%?100?%;font-size:%?28?%}.anchor-item .ico[data-v-5cd76fc0]{width:%?40?%;height:%?40?%;margin-top:%?30?%;margin-right:%?25?%}.anchor-item[data-v-5cd76fc0]{height:%?100?%;line-height:%?100?%;background-color:#f8f8f8;padding:0 %?15?%;border-radius:%?15?%;color:#666;margin-bottom:%?30?%}.reg-anchor[data-v-5cd76fc0]{\r\n\t/*background-color: #007AFF; */padding:%?20?% 4%;margin-top:%?20?%}.left[data-v-5cd76fc0]{float:left}.right[data-v-5cd76fc0]{float:right}",""]),t.exports=a},"31cd":function(t,a,i){"use strict";i.r(a);var e=i("aaa0"),n=i("c83a");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("3867");var r,c=i("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"5cd76fc0",null,!1,e["a"],r);a["default"]=s.exports},3867:function(t,a,i){"use strict";var e=i("f97b"),n=i.n(e);n.a},5413:function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,o=e(i("a4c7")),r={data:function(){return{loading:!0,isLogin:!1,userId:0,phone:{},loadingHieght:100,isCheck:!1,text:"提交成功，1至3个工作日审核完成",isBtn:!1,param:{nikcname:"",regDesc:""}}},onLoad:function(t){n=this,n.isLogin=o.default.getLogins(),n.isLogin&&(n.userId=n.isLogin.userId),n.phone=uni.getSystemInfoSync(),n.loadingHieght=n.phone.windowHeight+20,n.getData()},methods:{setParam:function(t){n.param[t.target.id]=t.detail.value},regAnchor:function(){0!=n.param.regDesc.length?(uni.showLoading({title:"提交中...",mask:!0}),uni.request({url:o.default.apiData.regAnchor,method:"POST",data:{userId:n.userId,nikcname:n.param.nikcname,regDesc:n.param.regDesc},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data;o.default.showToast(a.Msg,2e3),200==a.Code?n.isCheck=!0:o.default.jumpUrl("back")},fail:function(){o.default.showToast("服务器连接失败，请检查网络是否正常",3e3)},complete:function(){setTimeout((function(){uni.hideLoading()}),500)}})):o.default.showToast("请填写申请备注",1500)},getData:function(){uni.request({url:o.default.apiData.getUserAnchor,method:"POST",data:{userId:n.userId},header:{"Content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data;200==a.Code&&(n.isCheck=a.Data.isCheck,n.text=a.Data.text)},fail:function(){o.default.showToast("服务器连接失败，请检查网络是否正常",3e3)},complete:function(){setTimeout((function(){n.loading=!1}),500)}})},skipUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/pages/login/login",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new";o.default.jumpUrl(t,a)}}};a.default=r},"893c":function(t,a){t.exports="data:image/png;base64,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"},aaa0:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[t.loading?e("v-uni-view",{staticClass:"mask",staticStyle:{"background-color":"#1D1D28"},style:{height:t.loadingHieght+"px"}},[e("v-uni-view",{staticClass:"loading13",staticStyle:{"margin-top":"-70upx"}},[e("v-uni-view"),e("v-uni-view"),e("v-uni-view"),e("v-uni-view"),e("v-uni-view")],1)],1):t._e(),t.isCheck?e("v-uni-view",{staticStyle:{"text-align":"center","padding-top":"100upx"}},[e("v-uni-image",{staticStyle:{width:"200upx",height:"200upx"},attrs:{src:"/static/live/check.png",mode:"aspectFill"}}),e("v-uni-view",{staticStyle:{"font-size":"28upx",color:"#777"}},[t._v(t._s(t.text))])],1):e("v-uni-view",{staticClass:"reg-anchor"},[e("v-uni-view",{staticClass:"anchor-item"},[e("v-uni-image",{staticClass:"ico left",attrs:{src:i("893c")}}),e("v-uni-input",{attrs:{type:"text",placeholder:"申请备注",id:"regDesc"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.setParam.apply(void 0,arguments)}}})],1),t.isBtn?e("v-uni-view",{staticClass:"y-btn"},[t._v("提交中...")]):e("v-uni-view",{staticClass:"n-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.regAnchor.apply(void 0,arguments)}}},[t._v("提交申请")])],1)],1)},o=[]},c83a:function(t,a,i){"use strict";i.r(a);var e=i("5413"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},f97b:function(t,a,i){var e=i("287d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("14b44df9",e,!0,{sourceMap:!1,shadowMode:!1})}}]);