<template>
	<view class="content">		<view class="head-top" :style="{'top':(top - h5H)+'px'}">
			<view class="head-left" @click="backUrl">
				<image src="@/static/imgs/back.png" mode="aspectFill"></image>
			</view>
			<text style="flex: 1;">长视频收藏</text>
			<view class="head-left"></view>
		</view>
		<view class="content-head" :style="{ 'padding-top': top + 'px' }" id="toHeadLine">
			<view :class="typeSet==1? 'ok':''" @click="setClass(1)">全部</view>
			<view :class="typeSet==2? 'ok':''" @click="setClass(2)">免费</view>
			<view :class="typeSet==3? 'ok':''" @click="setClass(3)">收费</view>
		</view>
		<view :style="{'margin-top':contentTop+'px'}">
			<view class="video" v-for="(v, i) in collectList" :key="i">
				<view class="videoimg" @click="playVideo(v.videoId)" :style="{ background: 'url('+ bg +')' }">
					<image :src="v.videoImgUrl" mode="aspectFill"></image>
				</view>
				<view class="video-play-time">{{v.play_time}}</view>
				<view class="video-title">{{v.videoTitle}}</view>
				<view class="video-bot">
					<view class="video-gold">
						<image class="gold" src="@/static/imgs/gold2.png" mode="aspectFill"></image>{{v.gold}}
					</view>
					<image @click="delCollect(v.videoId)" class="dels" src="@/static/imgs/del.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view style="width:100%;margin-top:500upx;text-align:center;" v-if="isShowTig">
			<image src="/static/empty.png" style="width:100px;height:100px;"></image>
			<view style="width:100%;font-size:25upx;color:#999;margin-top:30upx;">当前页面暂无内容</view>
		</view>
	</view>
</template>

<script>
import api from "@/common/api.js";
var _self;
export default {
	data() {
		return {
			bg: '',
			top: 27,
			userId: 0,
			collectList: {},
			isShowTig: false,
			type: 0,
			typeSet: 1,
			contentTop: 107,
			h5H: 43,
		}
	},
	onLoad() {
		_self = this;
		var mobile = uni.getSystemInfoSync();
		_self.top = mobile.statusBarHeight+53;
		//console.log(mobile)
		// 是否登录
		var info = api.getLogins();
		if (info === false) {
			uni.showLoading({ title:'加载中...',mask:true });
			_self.skipUrl();
		} else {
			_self.userId = info.userId;
			_self.getCollect();
		}
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
		let timer = setTimeout(() => {
			query.select('#toHeadLine').boundingClientRect(data => {
				_self.contentTop = data.top+data.height+15;
			}).exec();
			clearTimeout(timer);
		}, 100)
	},
	methods: {
		backUrl() {
			api.jumpUrl('/pages/member/member', 'tab');
		},
		// 切换TAB
		setClass(type) {
			//console.log(type)
			_self.typeSet = type;
			_self.getCollect();
		},
		// 收藏列表 
		getCollect() {
			uni.showLoading({ title:'加载中...',mask:true });
			uni.request({
				url: api.apiData.getColl+'/userId/'+_self.userId+'/type/'+_self.typeSet,
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e) => {
					_self.collectList = e.data.Data;
					if (_self.collectList.length) {
						_self.isShowTig = false;
					} else {
						_self.isShowTig = true;
					}
				},
				fail: () => {
					_self.back('服务器连接失败，请检查网络是否正常');
				},				complete: () => {
					uni.hideLoading();
				}
			});
		},
		// 跳转播放页
		playVideo(vid) {
			uni.setStorage({
			    key: 'vid',
			    data: vid,
			    fail: ()=> {
			        api.showToast('服务器连接失败，请检查网络是否正常');
					return false;
			    },
				complete: () => {
					var param = {
						url: '/pages/member/collect',
						t: 'new'
					}
					api.jumpUrl('/pages/video/play?type='+JSON.stringify(param), 'new');
				}
			});
		},
		// 删除收藏视频 
		delCollect(vid){
			uni.showModal({
			    content: '确认要删除收藏吗？',
				cancelText: '取消',
				confirmText: '确定',
			    success: (res)=> {
			        if (res.confirm) {
						_self.delCollectVideo(vid);
			        }
			    }
			});
		},
		// 删除操作
		delCollectVideo(vid) {
			uni.showLoading({ title: '处理中...',mask:true });
			uni.request({
				url: api.apiData.delColl,
				method: 'POST',
				data: { 
					userId: _self.userId,
					videoId: vid
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e) => {
					//console.log(vid)
					var res = e.data;
					api.showToast(res.Msg);
					if (res.Code == 200) {
						let timer = setTimeout(() => {
							_self.getCollect();
							clearTimeout(timer);
						}, 300)
					}
				},
				fail: () => {
					api.showToast('删除失败，请检查网络是否正常');
				}
			});
		},
		// 跳转登录
		skipUrl(url = '/pages/login/login', type = 'newx') {
			api.jumpUrl(url, type);
		},
		back(msg = '') {
			if (msg.length == 0) return;
			api.showToast(msg);
			let timer = setTimeout(() => {
				uni.navigateBack();
				clearTimeout(timer);
			}, 1500);
		}
	},
	onBackPress(e) {
		api.jumpUrl('/pages/member/member', 'tab');
		return true;
	}
}
</script>

<style>
	.head-top{
		width: 100%;
		text-align: center;
		position: fixed;
		color: #FFF;
		z-index: 21;
		display: flex;
		flex-direction: row;
		padding: 0 10upx;
	}
	.head-left image{
		width: 30px;
		height: 30px;
		margin-top: 1px;
		border-radius: 50%;
		opacity: 0.6;
		filter: alpha(opacity=60);
	}
	.head-left{
		width: 30px;
	}
	.video-play-time{
		position: relative;
		float: left;
		margin-top: -25px;
		background-color: rgba(0,0,0,0.5);
		padding: 5upx 10upx;
		height: 30upx;
		line-height: 30upx;
		border-radius: 0 3px 3px 0;
		color: #FFFFFF;
		font-size: 23upx;
	}
	.video{
		background: rgba(255,255,255,0.03);
		width: 45%;
		display: inline-block;
		margin-left: 3.3%;
		border-radius: 10px;
		color: #000000;
		font-size: 15px;
		padding: 0 0 5px 0;
		box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
		margin-bottom: 13px;
		z-index: 19;
		position: relative;
	}
	.video-title{ 
		margin-top: 3px;
		padding: 0 6px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 93%;
		line-height: 40upx;
		font-size: 14px;
		color: #FFFFFF;
	}
	.video-gold{
		//margin-left: 2%;
		padding: 0 10upx;
		height: 13px;
		line-height: 13px;
		border-radius: 5upx;
		//background: #fff0e2;
		color: #ff9030;
		font-size: 13px;
	}
	.video-bot{
		padding: 0 6px;
		margin-top: 5px;
		//line-height: 12px;
		font-size: 14px;
	}
	.video-bot view{ display: inline-block; }
	.video-bot image{
		width: 16px;
		height: 16px;
	}
	.video-bot .gold{
		float: left;
		width: 13px;
		height: 13px;
		margin-right: 3px;
	}
	.video-bot .dels{
		float: right;
	}
	.videoimg{ height: 100px; }
	.videoimg image{
		border-radius: 10px 10px 0 0;
		width: 100%;
		height: 100px;
		background-color: #24292E;
	}
	.image{
		width: 100%;
		height: 233px;
		position: fixed;
		top: 0;
		left: 0;
	}
	.ok{ 
		//border-bottom: 2px solid #FFFFFF; 
		//color: #FF3637;
		background-color: rgba(0,0,0,0.4);
		border-radius: 50upx;
	}
	.content-head{ 
		position: fixed;
		width: 100%;
		height: 30px;
		line-height: 30px;
		padding: 10upx 0 20upx;
		background-color: #20202C;
		top: 0;
		text-align: center;
		color: #FFFFFF; 
		z-index: 20;
	}
	.content-head view{ display: inline-block;width: 23%;height: 30px;font-size: 13px; }
</style> 
