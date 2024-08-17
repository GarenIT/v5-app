<template>
	
	<view class="content">
		
		<view class="head-top" :style="{'padding-top':top+'px'}">
			<!-- <view class="top-one" style="width:93%;">
				<top-menu :nowUrl="'/pages/plaza/index'"></top-menu>
			</view> -->
			<view class="top-two" :style="{'padding-top':headTop+'px'}">
				<view @click="setTabId(1)">
					<text :class="tabId==1?'sel':''">我的</text>
				</view>
				<view @click="setTabId(2)">
					<text :class="tabId==2?'sel':''">最新</text>
				</view>
				<view @click="setTabId(3)">
					<text :class="tabId==3?'sel':''">热门</text>
					<image src="@/static/plaza/hot.png" mode="aspectFill"></image>
				</view>
				<view class="right" style="padding-right:15upx;margin-top:5upx;" @click="goSend">
					<text class="send-content">+ 发帖</text>
				</view>
			</view>
		</view>
		
		<view class="mask" v-if="loading" style="background-color:#20202C;z-index:8!important;" @touchmove.stop.prevent="moveHandle" :style="{'margin-top':(contentTop-10+h5Top)+'px','height':loadingHieght+'px'}">
			<view class="loading13" style="margin-top:-90px;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		<view class="center-content" :style="{'margin-top':contentTop+'px'}">

			<view>
				<view class="center-content-item" v-for="(m, i) in msgList" :key="i">
					<view v-if="m.type==0">
						<view class="center-top">
							<image class="center-top-img" src="@/static/plaza/top2.png" mode="aspectFill" v-if="m.isTop"></image>
							<image class="tx left" :src="m.headimgurl" mode="aspectFill"></image>
							<view class="username">
								<view style="height:56upx;line-height:65upx;font-weight:bold;color:#FFFFFF;">
									<text v-if="m.username">{{m.username}}</text>
									<text v-else>* 保密 *</text>
								</view>
								<view style="font-size:12px;color:#999;">
									{{utils.timeTodate('Y年m月d日 H:i',m.add_time)}}
								</view>
							</view>
							<view class="go-home right" v-if="m.isMe && tabId > 1">
								<image class="left" src="@/static/live/_my.png" mode="aspectFill"></image>
								<text>我的</text>
							</view>
							<view class="go-home right" @click="goHome(m.uid)" v-if="!m.isMe && tabId > 1">
								<image class="left" src="@/static/plaza/home.png" mode="aspectFill"></image>
								<text>主页</text>
							</view>
							<view class="go-home right" @click="editContent(m)" v-if="m.status==0 && tabId==1">
								<image class="left" src="@/static/live/settings.png" mode="aspectFill"></image>
								<text>审核中</text>
							</view>
						</view>
						<view class="center-content-center">
							<!--文字内容-->
							<view class="center-content-text" @click="goInfo(m)">
								<text class="more right">更多</text>{{m.text}}
							</view>
							<!--图片，视频-->
							<jyf-parser use-cache :html="m.html" :height="'100px'" ref="article" v-if="m.html.length>0"></jyf-parser>
						</view>
						<view class="content-bottom" @click="goInfo(m)"> 
							<text>@ 共{{m.comment}}条评论</text>
							<image class="msg" src="@/static/plaza/msg.png"></image>
						</view>
					</view>
					<!--广告位-->
					<view class="plaza-ad" @click="skipUrl(m.url, 'web')" v-if="m.type==1 && tabId>1">
						<image :src="m.img" mode="aspectFill" :style="{'height':m.height+'px'}"></image>
					</view>
					
				</view>
				
				<view class="moreTig" v-if="isMoreTig">——— 我是有底线的 ———</view>
			</view>

			<view style="width:100%;text-align:center;" :style="{'margin-top':(phone.windowHeight/2) - 100 +'px'}" v-if="isShowTig">
				<image src="/static/empty.png" style="width:100px;height:100px;"></image>
				<view style="width:100%;font-size:25upx;color:#666;margin-top:30upx;">本页面暂无内容</view>
			</view>
			
		</view>
		
		<!-- <view class="bottom-my-bg" @click="skipUrl('/pages/member/member', 'tab')">
			<image src="/static/imgs/user_ok.png" mode="aspectFill"></image>
		</view> -->
	</view>
</template>
<script>
import api from "@/common/api.js";
import utils from '@/components/shoyu-date/utils.filter.js';
var _self;
export default {
	data() {
		return {
			utils: utils,
			loading: true,
			isLogin: false,
			userId: 0,
			top: 0,
			phone: {},
			tabId: 2,
			contentTop: 35,
			isShowTig: false,
			one: false,
			
			msgList: [],
			page: 1,
			isMoreTig: false,
			
			loadingHieght: 100,
			headTop: 0,
			h5Top: 0,
		}
	},
	onLoad(e) {
		_self = this;
		_self.isLogin = api.getLogins();
		if (_self.isLogin) _self.userId = _self.isLogin.userId;
		_self.phone = uni.getSystemInfoSync();
		_self.top = 5;
		_self.contentTop = _self.top + 50;
		_self.loadingHieght = _self.phone.windowHeight - _self.top;
		// #ifdef H5
		_self.headTop = 44;
		_self.h5Top = 30;
		// #endif
		_self.getData();
	},
	onHide() {
		_self.one = true;
	},
	onShow() {
		_self.isLogin = api.getLogins();
		if (_self.one) {
			if(_self.isLogin) _self.userId = _self.isLogin.userId;
			//_self.getData();
		} 
	},
	methods: {
		moveHandle() {},
		goInfo(e) {
			uni.setStorage({
			    key: 'info_content_' + api.appkey,
			    data: e,
			    success: () => {
			        _self.skipUrl('/pages/plaza/info?t=1', 'new');
					//console.log(e)
			    },
				fail: () => {
					api.showToast('数据加载失败，请退出重试', 2000);
				}
			});
		},
		editContent(e) {
			//console.log(e)
			uni.setStorage({
			    key: 'edit_content_' + api.appkey,
			    data: e,
			    success: () => {
			        _self.skipUrl('/pages/plaza/send?t=1', 'new');
			    },
				fail: () => {
					api.showToast('数据加载失败，请退出重试', 2000);
				}
			});
		},
		goHome(uid) {
			if(uid == 0) {
				api.showToast('模拟数据，请重启APP', 2000);
				return
			}
			var param = {
				url: '/pages/plaza/index',
				t: 'new'
			}
			_self.skipUrl('/pages/member/home_page?type='+JSON.stringify(param)+'&uid='+uid, 'new');
		},
		goSend() {
			if(!_self.isLogin) {
				api.showToast('请登录后再发来帖');
				setTimeout(() => {
					_self.skipUrl('/pages/login/login', 'new');
				}, 500);
			}else{
				_self.skipUrl('/pages/plaza/send?t=0', 'new');
			}
		},
		setTabId(t) {
			if(t == 1){
				if(!_self.isLogin) {
					api.showToast('请登录后再发来帖');
					setTimeout(() => {
						_self.skipUrl('/pages/login/login', 'new');
					}, 500);
					return;
				}
			}
			_self.tabId = t;
			_self.page = 1;
			_self.loading = true;
			_self.msgList = [];
			_self.getData();
		},
		getData() {
			if(_self.page > 1) uni.showLoading({ title:'正在加载...',mask:true });
			uni.request({
				url: api.apiData.getPlazaList,
				method: 'POST',
				data: {
					page: _self.page,
					order: _self.tabId,
					uid: _self.userId
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e)=> {
					//console.log(e)
					var r = e.data;
					if(r.Code == 200){
						var msgList = r.Data.list;
						if(_self.page > 1){
							if(msgList.length > 0){
								_self.isMoreTig = false;
								_self.msgList = _self.msgList.concat(msgList);
							}else{
								_self.isMoreTig = true;
							}
						}else{
							_self.isMoreTig = false;
							_self.msgList = msgList;
							_self.isShowTig = msgList.length==0?true:false;
							//console.log(msgList.length)
						}
					}else{
						api.showToast(r.Msg, 2000);
					}
				},
				fail: ()=> {
					// 加载失败提示
					api.showToast("服务器连接失败，请检查网络是否正常", 3000);
				},
				complete: ()=> {
					setTimeout(()=>{
						_self.loading = false;
						if(_self.page > 1) uni.hideLoading();
					}, 500);
				}
			});
		},
		// 跳转登录
		skipUrl(uri = '/pages/login/login', type = 'new') {
			api.jumpUrl(uri, type)
		},
	},
	onPullDownRefresh() {
		_self.page = 1;
		_self.getData();
		uni.stopPullDownRefresh();
	},
	onReachBottom(){
		_self.page ++;
		_self.getData();
	},
	onBackPress(e) {
		api.jumpUrl('/pages/video/class', 'tab');
		return true;
	}
};
</script>

<style>
	@import url('@/components/loading/loading.css');
	.plaza-ad image{
		margin: -20upx 0 -25upx 0!important;
		width: 100%;
		border-radius: 15upx;
	}
	.moreTig{
		text-align: center;
		color: #ccc;
		font-size: 25upx;
		margin-top: 26upx;
		padding-bottom: 30upx;
		//background: #007AFF;
		//padding-bottom: 30px;
	}
	.send-content{
		color: #FFFFFF;
		background-image: linear-gradient(to right,#FF8F00, rgba(254,67,101,0.8));
		border-radius: 10upx;
		padding: 6upx 16upx;
		font-size: 12px;
	}
	.content-bottom .msg{
		width: 35upx;
		height: 30upx;
		margin-bottom: -5upx;
		margin-left: 5upx;
		//display: inline-block;
	}
	.content-bottom{
		margin: 20upx 3% 5upx;
		background-color: rgba(0,0,0,0.1);
		border-radius: 10upx;
		font-size: 26upx;
		text-align: center;
		color: #999;
		height: 60upx;
		line-height: 60upx;
	}
	.center-content-text .more{
		display: inline-block;
		width: 80upx;
		height: 40upx;
		line-height: 40upx;
		border-radius: 10upx;
		color: #FFFFFF;
		text-align: center;
		font-size: 24upx;
		margin-right: 10upx;
		background-color: #007AFF;
	}
	.center-content-text{
		font-size: 28upx;
		margin-bottom: 20upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #FFFFFF;
		//background-color: #009688;
	}
	.center-top-img{
		width: 110upx;
		height: 110upx;
		position: absolute;
		left: 3%;
		margin-top: -22upx;
		z-index: 3;
	}
	.center-content-center{
		margin: 20upx 3% 0;
		font-size: 26upx;
		//height: 100upx;
		//background-color: #007AFF;
	}
	.center-top .go-home image{
		width: 40upx;
		height: 40upx;
		margin: 15upx 5upx;
	}
	.center-top .go-home{
		height: 70upx;
		line-height: 70upx;
		//padding: 0 20upx;
		font-size: 26upx;
		//border-radius: 10upx;
		margin: 14upx 14upx;
		color: #FFFFFF;
		//background-image: linear-gradient(to right,rgba(255,12,208,0.8), rgba(254,67,101,0.8));
	}
	.username view{
		display: block;
		color: #000000;
		font-size: 30upx;
		height: 38upx;
		line-height: 30upx;
	}
	.username .author{
		display: inline-block;
		margin-left: 10upx;
		height: 40upx;
		line-height: 40upx;
		width: 40upx;
		text-align: center;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 20upx;
		background-image: linear-gradient(to right,rgba(255,12,208,0.8), rgba(254,67,101,0.8));
	}
	.center-top .username{
		display: inline-block;
		margin-left: 20upx;
		height: 94upx;
		line-height: 94upx;
	}
	.center-top .tx{
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		border: 1px solid rgba(255,12,208,0.8);
	}
	.center-top{
		width: 94%;
		//background-color: #007AFF;
		margin: 0 3%;
	}
	.center-content-item{
		width: 92%;
		background-color: rgba(255,255,255,0.03);
		margin: 0 4% 20upx;
		border-radius: 15upx;
		padding: 20upx 0;
	}
	.center-content{
		margin-bottom: 60upx;
	}
	.head-top .top-two image{
		width: 72upx;
		height: 30upx;
		margin-left: 10upx;
	}
	.head-top .top-two .sel{
		border-bottom: 3px solid #FFFFFF;
		color: #FFFFFF;
		//font-weight: bold;
	}
	.head-top .top-two view{
		display: inline-block;
		text-align: center;
		color: #999999;
		font-size: 30upx;
		border-bottom: 3px solid #20202C;
		margin-right: 40upx;
		//font-weight: bold;
	}
	.head-top{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		width: 100%;
		padding: 0 28upx 20upx;
		//height: 35px;
		background-color: #20202C;
		box-shadow: 4px 4px 6px 0px rgba(103, 103, 103, 0.1);
	}
	.content{
		width: 100%;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>
