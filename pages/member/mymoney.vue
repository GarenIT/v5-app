<template>
	<view class="bg" :style="{ height: bgHeight + 'px' }">
		<view class="head">
			<view class="head-money">
				<view><image src="/static/imgs/mygold.png" mode="aspectFill"></image></view>
				<view style="font-size:14px;color:rgba(255,255,255,0.7)">金币</view>
				<view class="head-wz">{{userInfo.corn}}</view>
			</view>
			<view class="head-money">
				<view><image src="/static/imgs/money.png" mode="aspectFill"></image></view>
				<view style="font-size:14px;color:rgba(255,255,255,0.7)">余额</view>
				<view class="head-wz">{{userInfo.money}}</view>
			</view>
		</view>
		<view class="content">
			<view class="line"></view>
			<view class="content-gt" @click="skipUrl('/pages/member/deposit', 2)">
				<view><image src="/static/mymoney/icon_1.png" mode="aspectFill"></image></view>
				<view class="content-gt-title">余额提现</view>
				<image class="right-img" src="@/static/imgs/r.png"></image>
			</view>
			<view class="line"></view>
			<view class="content-gt" @click="skipUrl('/pages/member/deposit_log', 2)">
				<view><image src="/static/mymoney/icon_2.png" mode="aspectFill"></image></view>
				<view class="content-gt-title">提现记录</view>
				<image class="right-img" src="@/static/imgs/r.png"></image>
			</view>
			<view class="line"></view>
			<view class="content-gt" @click="skipUrl('/pages/member/money_log', 2)">
				<view><image src="/static/mymoney/icon_3.png" mode="aspectFill"></image></view>
				<view class="content-gt-title">账户明细</view>
				<image class="right-img" src="@/static/imgs/r.png"></image>
			</view>
			<view class="line"></view>
			<view class="content-gt" @click="skipUrl('/pages/member/bank_list', 2)">
				<view><image src="/static/mymoney/icon_4.png" mode="aspectFill"></image></view>
				<view class="content-gt-title">银行卡</view>
				<image class="right-img" src="@/static/imgs/r.png"></image>
			</view>
			<view class="line"></view>
			<view class="content-gt" @click="skipUrl('/pages/live/player_log', 2)" v-if="userInfo.isAnchor">
				<view><image src="/static/mymoney/icon_5.png" mode="aspectFill"></image></view>
				<view class="content-gt-title">直播记录</view>
				<image class="right-img" src="@/static/imgs/r.png"></image>
			</view>
			<view class="line" v-if="userInfo.isAnchor"></view>
		</view>

	</view>
</template>

<script>
import api from "@/common/api.js";
var _self;
export default {
	data() {
		return {
			bgHeight: '/static/imgs/bggold.png',
			userId: 0,
			userInfo: {
				isAnchor: false,
			},
			toHeight: 250,
		}
	},
	onLoad() {
		_self = this;
		uni.showLoading({ title:'加载中...',mask:true });
		var mobile = uni.getSystemInfoSync();
		_self.bgHeight = mobile.windowHeight;
		// 是否登录
		const info = api.getLogins();
		if(info === false) {
			_self.skipUrl();
		}else{
			_self.userId = info.userId;
			_self.getUserInfo();
		}
	},
	mounted: function() {
		/* const query = uni.createSelectorQuery().in(this);
		query.select('#toTop').boundingClientRect(data => {
			_self.toHeight = _self.bgHeight-data.top-5
			//console.log(data)
		}).exec();	 */	
	},
	methods: {
		// 读取个人信息
		getUserInfo() {
			uni.request({
				url: api.apiData.myBalance+'/userId/'+_self.userId,
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e)=> {
					//console.log(e)
					_self.userInfo = e.data.Data;
					uni.hideLoading();
				},
				fail: () => {
					// 加载失败提示
					_self.msgData('服务器连接失败，请检查网络是否正常', 5000);
				}
			});
		},
		// 跳转登录
		skipUrl(url = '/pages/login/login', type = 1) {
			if(type == 1){
				uni.reLaunch({ url: url });
			}else{
				uni.navigateTo({ url: url });
			}
		},
		// 提示
		msgData(title = '', times = 1000, style = 'none') {
			// 加载失败提示
			uni.showToast({
				icon: style,
				title: title,
				mask: true,
				duration: times
			});
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		_self.getUserInfo();
		uni.stopPullDownRefresh();
	},
	onBackPress(e) {
		//console.log(e)
		api.jumpUrl('/pages/member/member', 'tab');
		return true;
	},
}
</script>
<style>
	.line{
		height: 8px;
		background-color: #20202C;
	}
	.right-img{
		width: 16px!important;
		height: 16px!important;
		margin-top: 4px;
	}
	#toTop{
		margin-top: 10px;
	}
	.content-gt-title{
		height: 24px;
		line-height: 24px;
		margin-left: 20upx;
		flex: 1;
		text-align: left;
		color: #ccc;
	}
	.bg{ 
		width: 100%;
		height: 690px;
	}
	.head{ 
		width: 100%;
		height: 250px;
		//background-image: linear-gradient(to right, rgba(255,12,208,0.8), rgba(254,67,101,0.8));
		/* background: url(/static/imgs/bg_info.jpg);
		background-size: 100% 100%; */
		text-align: center; 
		//border-radius: 0 0 50upx 50upx;
	}
	.head view{ display:inline-block;width:50%;color:#FFFFFF; }
	.head-money{ height:250px; }
	.head-money view{ display:block;width:100%;font-size:20px; }
	.head-money image{ width:50px;height:50px;margin-top:90px; }
	.head-money .head-wz{ color: #fff; }
	.content{ }
	.content-gt{ text-align: center;padding: 10px 0;border-radius: 10px;color: #666666;display: flex;flex-direction: row;margin: 0 20px; }
	.content-gt image{ width: 24px;height: 24px; }
	.content-gt view{ display: block;font-size: 15px; }
</style>
