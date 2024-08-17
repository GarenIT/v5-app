<template>
	<view>
		<view class="mask" v-if="loading" style="background-color:#1D1D28;" :style="'margin-top:'+top+'px!important'">
			<view class="loading13" style="position:absolute;margin-top:-50upx;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		<view class="list">
			
			<view class="item" v-for="(g, i) in list" :key="i">
				<view class="left">
					<image :src="g.headimgurl" mode="aspectFill"></image>
				</view>
				<view class="right">
					<view class="username">
						<text>{{g.nickname}}</text>
						<text class="r gold">金币 + {{g.gold}}</text>
					</view>
					<text class="texts">{{g.text}}</text>
					<text class="times">时间：{{utils.timeTodate('Y年m月d日 H:i:s', g.add_time)}}</text>
				</view>
			</view>
			
			<view class="moreTig" v-if="isMoreTig">——— 我是有底线的 ———</view>
			<view style="width:100%;margin-top:300upx;text-align:center;" v-if="isShowTig">
				<image src="/static/empty.png" style="width:100px;height:100px;"></image>
				<view style="width:100%;font-size:25upx;color:#666;margin-top:30upx;">暂无打赏记录，加油</view>
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
				loading: true,
				utils: utils,
				top: 0,
				page: 1,
				userId: 0,
				isShowTig: false,
				isMoreTig: false,
				list: [],
				aid: 0,
				url: '',
			}
		},
		onLoad(e) {
			_self = this;
			// #ifdef H5
			_self.top = 44;
			//#endif
			const info = api.getLogins();
			if(info === false) {
				api.jumpUrl('/pages/login/login', 'new');
			}else{
				_self.userId = info.userId;
				_self.aid = e.aid;
				_self.url = e.url;
				_self.getData();
			}
		},
		methods: {
			getData(t = 1) {
				uni.request({
					url: api.apiData.getPlayerGift,
					method: 'POST',
					data: {
						uid: _self.userId,
						page: _self.page,
						aid: _self.aid,
						url: _self.url
					},
					header: {
						'Content-type': 'application/x-www-form-urlencoded'
					},
					success: (e)=> {
						//console.log(e)
						var d = e.data;
						if (d.Code == 201) {
							api.showToast(d.msg);
							setTimeout(()=>{
								api.jumpUrl('/pages/live/player_log', 'new');
							}, 1000);
							return
						}
						var data = e.data.Data;
						if (_self.page == 1) {
							_self.isMoreTig = false;
							if (data.length > 0) {
								_self.list = data;
								_self.isShowTig = false;
							} else {
								_self.isShowTig = true;
							}
						} else {
							_self.isShowTig = false;
							if (data.length > 0) {
								_self.list = _self.list.concat(data);
								_self.isMoreTig = false;
							} else {
								_self.isMoreTig = true;
							}
						}
						_self.loading = false;
					},
					fail: () => {
						// 加载失败提示
						_self.msgData('服务器连接失败，请检查网络是否正常', 5000);
					},
					complete: ()=> {
						if(t == 2) uni.hideLoading();
					}
				});
			}
		},
		// 上拉加载数据
		onReachBottom(){ 
			if(_self.isShowTig || _self.isMoreTig) return false;
			uni.showLoading({ title:'加载中...',mask:true });
			_self.page++;
			_self.getData(2);
		},
	}
</script>

<style lang="scss">
	@import url('@/components/loading/loading.css');
	.moreTig{
		text-align: center;
		color: #999999;
		font-size: 12px;
		margin-top: 30upx;
		padding-bottom: 30upx;
	}
	.list{
		padding: 30upx;
		.item{
			background-color: #FFFFFF;
			border-radius: 12upx;
			padding: 20upx 30upx;
			display: flex;
			flex-direction: row;
			margin-bottom: 20upx;
			.left{
				border: 1px solid #F5F5F5;
				border-radius: 12upx;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 54px;
				margin-right: 15upx;
				image{
					width: 54px;
					height: 54px;
					border-radius: 12upx;
				}
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				//background-color: #007AFF;
				color: #666666;
				height: 55px;
				justify-content: center;
				.gold{
					color: #FF5722;
				}
				.username{
					font-size: 13px;
					color: #444444;
				}
				.texts{
					font-size: 12px;
				}
				.times{
					font-size: 12px;
				}
			}
		}
	}
	.l{
		float: left;
	}
	.r{
		float: right;
	}
</style>
