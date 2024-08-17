<template>
	
	<view class="content">
		
		<view class="mask" v-if="loading" style="background-color:#1D1D28;height:110%!important;" :style="{'padding-top':top+'upx'}">
			<view class="loading13" style="position:absolute;margin-top:-100upx;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		
		<view class="center-content">
			<view class="head-top">
				<image class="bg" src="@/static/homePage/bg.jpg" mode="aspectFill"></image>
				<!-- #ifndef MP-WEIXIN -->
				<view class="back" :style="{'margin-top':top+'px'}" @click="goBack">
					<image src="@/static/imgs/back.png" mode="aspectFill"></image>
				</view>
				<!-- #endif -->
				
				<view class="tx">
					<view style="position:absolute;left:50%;margin-left:-55upx;">
						<image class="left" :src="info.headimgurl" mode="aspectFill"></image>
					</view>
					<view style="text-align:center;margin-top:120upx;">
						<text class="username">{{info.username}}</text>
					</view>
				</view>
			</view>
			<view style="margin-top:350upx;"></view>
			<view class="content-tab">
				<view style="border-radius:20upx 0 0 20upx;" @click="setTabId(1)">
					<text :class="tabId==1?'sel':''">作品({{info.videoSum}})</text>
				</view>
				<view style="border-radius:0 20upx 20upx 0;" @click="setTabId(2)">
					<text :class="tabId==2?'sel':''">动态({{info.commentSum}})</text>
				</view>
			</view>
			
			<view class="content-bottom" v-if="!isShowTig && tabId==1">
				<view class="video-info" v-for="(v, i) in list" :key="i" @click="playVideo(v.id)">
					<easy-loadimage
						mode="aspectFill"
						:scroll-top="scrollTop"
						:image-src="v.thumbnail"
						:open-transition="true"
						class="cover">
					</easy-loadimage>
					<view class="video-title">{{v.title}}</view>
					<view class="video-gold">
						<image class="left" :style="{'margin-top':topUpx+'upx'}" src="@/static/homePage/click.png" mode="aspectFill"></image> 
						<text class="gold">{{v.click}}</text>
						<text class="date right">{{utils.timeTodate('Y-m-d',v.add_time+'')}}</text>
					</view>
				</view>
			</view>
			
			<view class="content-bottom" v-if="!isShowTig && tabId==2">
				<view class="comment-info" v-for="(v, i) in list" :key="i">
					<view class="comment-info-top">
						<image class="comment-tx left" :src="v.headimgurl" mode="aspectFill"></image>
						<view class="comment-username">
							<view style="color:#FFFFFF;" v-if="v.username">{{v.username}}</view>
							<view style="color:#FFFFFF;" v-else>* 保密 *</view>
							<view class="date">{{utils.timeTodate('Y年m月d日 H:i',v.add_time+'')}}</view>
						</view>
						<view class="comment-sum right" @click="goInfo(v)">
							<image class="left" src="@/static/homePage/msg.png" mode="aspectFill"></image>
							<text style="font-size:12px;color:#ffc472;">{{v.comment}}</text>
						</view>
					</view>
					<view style="padding: 0 25upx 20upx;">
						<view class="comment-info-center" style="margin-bottom:20upx;" @click="goInfo(v)">
							<text class="more right">更多</text>{{v.text}}
						</view>
						<jyf-parser use-cache :html="v.html" :height="'100px'" ref="article" v-if="v.html.length>0"></jyf-parser>
					</view>
				</view>
			</view>
			
			<view style="width:100%;text-align:center;padding-top:330upx;" v-if="isShowTig">
				<image src="/static/empty.png" style="width:100px;height:100px;"></image>
				<view style="width:100%;font-size:25upx;color:#999;">主人很懒，暂无动态</view>
			</view>
			
		</view>
		
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
			phone: {},
			top: 0,
			uid: 0,
			uri: {
				url: '/pages/plaza/index',
				t: 'tab'
			},
			tabId: 2,
			isShowTig: false,
			
			list: {},
			info: {},
			topUpx: 12,
			scrollTop: 0,
		}
	},
	onLoad(e) {
		_self = this;
		_self.uri = JSON.parse(e.type);
		_self.uid = e.uid;
		_self.isLogin = api.getLogins();
		if(_self.isLogin) _self.userId = _self.isLogin.userId;
		_self.phone = uni.getSystemInfoSync();
		_self.top = _self.phone.statusBarHeight;
		// #ifdef APP-PLUS
		_self.topUpx = _self.phone.platform=='ios'?10:12;
		// #endif
		// #ifdef H5
		_self.top = 15;
		// #endif
		//console.log(_self.topUpx)
		_self.initData();
	},
	methods: {
		initData(t=0) {
			if (t==1) uni.showLoading({ title:'正在加载...',mask:true });
			uni.request({
				url: api.apiData.homePage,
				method: 'POST',
				data: {
					uid: _self.uid,
					type: _self.tabId
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e)=> {
					//console.log(e);
					var r = e.data;
					if(r.Code == 201){
						api.showToast(r.Msg, 2000);
						return
					}
					_self.list = r.Data.list;
					_self.isShowTig = _self.list.length==0?true:false;
					_self.info = r.Data.info;
				},
				fail: ()=> {
					api.showToast("服务器连接失败，请检查网络是否正常", 3000);
				},
				complete: ()=> {
					let timer = setTimeout(()=>{
						_self.loading = false;
						if (t==1) uni.hideLoading();
						clearTimeout(timer);
					}, 1500);
				}
			});
		},
		// 跳转播放页
		playVideo(vid) {
			//console.log(vid);
			uni.setStorage({
				key: 'vid',
				data: vid,
				success: () => {
					var param = {
						url: '/pages/member/member',
						t: 'tab'
					}
					api.jumpUrl('/pages/video/play?type='+JSON.stringify(param), 'new');
				},
				fail: () => {
					api.showToast('服务器连接失败，请检查网络是否正常');
				}
			});
		},
		goInfo(e) {
			e.isMe = (_self.userId == e.uid) ? true : false;
			uni.setStorage({
			    key: 'info_content_' + api.appkey,
			    data: e,
			    success: () => {
			        _self.skipUrl('/pages/plaza/info?t=2', 'new');
			    },
				fail: () => {
					api.showToast('数据加载失败，请退出重试', 2000);
				}
			});
		},
		goBack() {
			//console.log(_self.uri.url);
			_self.skipUrl(_self.uri.url, _self.uri.t);
		},
		setTabId(e) {
			_self.tabId = e;
			_self.list = [];
			_self.initData(1);
		},
		// 跳转登录
		skipUrl(uri = '/pages/login/login', type = 'new') {
			api.jumpUrl(uri, type)
		},
	},
	onPullDownRefresh() {
		_self.initData();
		uni.stopPullDownRefresh();
	},
	onPageScroll({scrollTop}) {
		_self.scrollTop = scrollTop;
	}
};
</script>

<style>
	@import url('@/components/loading/loading.css');
	.video-gold .date{
		color: #999999;
	}
	.video-gold .gold{
		margin-left: 5upx;
		color: #ffc472;
	}
	.video-gold .left{
		width: 32upx;
		height: 20upx;
		//margin-top: 10upx;
	}
	.video-gold{
		font-size: 25upx;
		margin-top: -5upx;
		height: 40upx;
		line-height: 40upx;
		padding: 0 10upx;
		margin-bottom: 10upx;
	}
	.comment-info-center .more{
		display: inline-block;
		width: 80upx;
		height: 40upx;
		line-height: 40upx;
		border-radius: 10upx;
		text-align: center;
		font-size: 24upx;
		margin-right: 10upx;
		background-color: #ff962f;
	}
	.comment-info-center{
		font-size: 30upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #FFFFFF;
	}
	.comment-sum image{
		width: 30upx;
		height: 30upx;
		margin-top: 31upx;
		margin-right: 10upx;
	}
	.comment-sum{
		display: inline-block;
		height: 80upx;
		line-height: 80upx;
		//background-color: #007AFF;
	}
	.comment-username .date{
		font-size: 12px;
		color: #999;
	}
	.comment-username{
		font-size: 30upx;
		height: 80upx;
		margin-left: 20upx;
		display: inline-block;
		//background-color: #007AFF;
	}
	.comment-tx{
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		border: 1px solid rgba(255,12,208,0.8);
	}
	.comment-info-top{
		padding: 20upx 25upx;
	}
	.comment-info{
		width: 94%;
		margin: 0 3% 15upx;
		border-radius: 10upx;
		background-color: rgba(255,255,255,0.06);
	}
	.video-title{
		height: 50upx;
		line-height: 50upx;
		font-size: 28upx;
		padding-left: 10upx;
		color: #CCCCCC;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.video-info .cover{
		width: 100%;
		height: 200upx;
		border-radius: 15upx 15upx 0 0;
	}
	.cover >>> .origin-img{
		border-radius: 15upx 15upx 0 0;
	}
	.video-info{
		width: 46.5%;
		margin-left: 2%;
		display: inline-block;
		margin-bottom: 15upx;
		background-color: #20202C;
		border-radius: 15upx;
		border: 1px solid #333333;
	}
	.content-bottom{
		padding-top: 130upx;
		margin-bottom: 30upx;
		//background-color: #20202C;
	}
	.content-tab .sel{
		color: rgba(255,215,0,1);
		border-bottom: 3px solid rgba(255,215,0,1);
	}
	.content-tab view{
		width: 40%;
		height: 110upx;
		line-height: 110upx;
		display: inline-block;
		background-color: rgba(0,0,0,0.6);
		font-size: 30upx;
		font-weight: bold;
		color: #FFFFFF;
	}
	.content-tab{
		text-align: center;
		z-index: 2;
		width: 100%;
		position: fixed;
	}
	.center-content .tx .username{
		font-size: 33upx;
		color: #FFFFFF;
		font-weight: bold;
	}
	.center-content .tx image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		border: 5upx solid rgba(255,255,255,0.4);
		margin-bottom: 10upx;
	}
	.center-content .tx{
		position: absolute;
		height: 110upx;
		margin-top: 150upx;
		z-index: 2;
		width: 100%;
		//background-color: #007AFF;
	}
	.center-content .back image{
		width: 40upx;
		height: 40upx;
		float: left;
		margin: 10upx 8upx;
	}
	.center-content .back{
		position: absolute;
		width: 60upx;
		height: 60upx;
		background-color: rgba(0,0,0,0.5);
		border-radius: 50%;
		margin-left: 30upx;
		z-index: 2;
	}
	.center-content .bg{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		box-shadow: 0px 6px 6px 5px rgba(0, 0, 0, 0.2);
		border-bottom: 1px solid rgba(0, 0, 0, 0.4);
	}
	.head-top{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 400upx;
		z-index: 1;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>
