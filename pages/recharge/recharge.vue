<template>
	<view class="content">
		<view class="mask" v-if="loading" style="background-color:#1D1D28;margin-top:0!important;z-index:9!important;">
			<view class="loading13" style="position:absolute;margin-top:-50upx;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		<view class="head-content" :style="{ padding: toTop+'px 0 0 0' }">
			<view class="head">
				<view :class="payType == 1 ? 'ok' : ''" @click="selectType(1)">金币套餐</view>
				<view :class="payType == 2 ? 'ok' : ''" @click="selectType(2)">VIP套餐</view>
			</view>
		</view>
		<view class="head-top">
			<view class="username">{{userInfo.nickname}}</view>
			<view class="vipTime">{{vipmsg}}</view>
			<view class="myGold">账户金币：{{userInfo.corn}}</view>
		</view>
		<view class="center-title"></view>
		<view class="center-content">
			<swiper
				circular
				class="package-swiper"
				previous-margin="30px"
				next-margin="30px"
				:current="current[payType]"
				@change="changePackage"
				v-show="payType==1">
				<swiper-item class="package-item" v-for="(item, index) in goldPackage" :key="index">
					<view class="package-bg" style="background-image: url(/static/member/gold_bg.png)">
						<view class="package-title">{{item.title}}</view>
						<view class="package-info">{{item.tips}}</view>
						<view class="package-day">{{item.corn}}</view>
						<view class="package-money">{{item.money}} 元</view>
					</view>
				</swiper-item>
			</swiper>
			<swiper
				circular
				class="package-swiper"
				previous-margin="30px"
				next-margin="30px"
				:current="current[payType]"
				@change="changePackage"
				v-show="payType==2">
			    <swiper-item class="package-item" v-for="(item, index) in vipPackage" :key="index">
					<view class="package-bg" :style="'background-image: url(/static/member/vip'+item.type+'.png)'">
						<view class="package-title">{{item.title}}</view>
						<view class="package-info">{{item.tips}}</view>
						<view class="package-day" v-if="item.type==0">{{item.time}} 天</view>
						<view class="package-money">{{item.money}} 元</view>
					</view>
			    </swiper-item>
			</swiper>
			<view style="width:100%;margin-top:50px;text-align:center;" v-if="isShow">
				<image src="/static/empty.png" style="width:100px;height:100px;"></image>
				<view style="width:100%;font-size:25upx;color:#666;margin-top:30upx;">暂无套餐数据</view>
			</view>
			<view class="custom" v-if="payType==1&&custom">
				<input 
					class="input" 
					type="number"
					maxlength="6"
					:cursor-spacing="10" 
					:placeholder="'自定义充值金币，1元＝'+cornCal+'金币'" 
					@input="customPay"/>
			</view>
			<view style="height:150upx;"></view>
		</view>
		<view class="bottom-pay">
			<view class="money">{{moneyTig}}</view>
			<view class="pay" @click="pay">立即付款</view>
		</view>
		
		<uni-popup ref="popupPay" type="bottom">
			<view class="pay-content">
				<image src="/static/imgs/delx.png" class="close" @click="closePay"></image>
				<view class="pay-title">请选择支付方式</view>
				<view class="pay-code-list" v-for="(p, i) in payList" :key="i" @click="createOrder(p.id, p.payCode, p.type)">
					<image class="pay-img" :src="p.payIcon"></image>
					<view class="pay-name">{{p.payName}}</view>
					<image class="pay-botton" src="/static/imgs/no.png"></image>
				</view>
			</view>
		</uni-popup>
		
		<view style="height:100%;width:100%;background:rgba(0,0,0,0.3);position:fixed;top:0;left:0;z-index:999;" v-if="isPayStatus">
			<view style="width:65%;position:absolute;top:30%;left:16.3%;text-align:center;font-size:15px;background:#FFFFFF;padding:30px 5px;border-radius:10px;">
				<image src="/static/imgs/msg.png" style="width:200upx;height:200upx;"></image>
				<view style="color:#666666;font-size:13px;height:50upx;line-height:50upx;">如付款成功未到账，请联系平台客服</view>
				<view style="background:#D89720;color:#FFFFFF;width:200upx;height:70upx;line-height:70upx;margin:10px auto 0;border-radius:5px;" @click="closePayStatus">
					我知道了
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from "@/common/api.js";
var _self;
export default {
	data() {
		return {
			toTop: 27,
			phone: {},
			userId: 0,
			userInfo: {},
			vipmsg: '',
			goldPackage: [],
			vipPackage: [],
			packId: 0,
			payType: 1,
			payMoney: 0,
			moneyTig: '支付金额：0元',
			cornCal: 1,
			payStatus: false,
			payList: [],
			gold: 0,
			isPayStatus: false,
			custom: false,
			
			loading: true,
			vid: 0,
			
			url: {
				type: 'tab',
				url: ''
			},
			isShow: false,
			current: [0,0,0],
		}
	},
	onLoad(e) {
		//console.log(e)
		_self = this;
		_self.phone = uni.getSystemInfoSync();
		_self.toTop = _self.phone.statusBarHeight+45;
		// 是否登录
		var info = api.getLogins();
		if (info === false) {
			return api.jumpUrl('/pages/login/login', 'old');
		} else {
			_self.userId = info.userId;
			_self.getUserInfo();
		}
		if (e.type < 3) _self.payType = e.type;
		if (e.type==3) _self.url = JSON.parse(e.url);
		if (e.vid != undefined) _self.vid = e.vid;
		_self.getRecPackage();
	},
	onBackPress(e) {
		if (_self.url.url.length > 0) {
			api.jumpUrl(_self.url.url + '&t=0', _self.url.type);
			return true;
		}
		if (_self.vid > 0) {
			uni.setStorage({
			    key: 'vid',
			    data: _self.vid,
				success: ()=> {
					var param = {
						url: '/pages/index/index',
						t: 'tab'
					}
					api.jumpUrl('/pages/video/play?type='+JSON.stringify(param), 'new');
				},
			    fail: ()=> {
			        api.showToast('服务器连接失败，请检查网络是否正常');
			    }
			});
			return true;
		}
	},
	methods: {
		// 提交充值
		pay() {
			if (_self.payMoney==0 || _self.payMoney<0) {
				api.showToast('支付金额必须大于0元', 2000);
				return false;
			}
			if (_self.payType==2) {
				if (_self.userInfo.is_permanent == 1) {
					api.showToast('您已是尊贵的永久VIP，无须升级', 2000);
					return false;
				}
			}
			uni.showLoading({ title:'读取中...',mask:true });
			_self.getPayList();
		},
		// 读取支付列表
		getPayList() {
			uni.request({
				url: api.apiData.getPayList,
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e) => {
					//console.log(e)
					var data = e.data;
					if(data.Code == 200){
						var payList = data.Data.list;
						if(payList.length > 0){
							_self.payStatus = true;
							_self.payList = payList;
							_self.$refs['popupPay'].open();
							uni.hideLoading();
						}else{
							api.showToast('暂无可用支付接口，请联系平台客服', 2000);
						}
					}else{
						api.showToast(data.Msg, 2000);
					}
				},
				fail: () => {
					// 加载失败提示
					api.showToast('读取失败，请稍后重试', 5000);
				}
			});
		},
		closePay() {
			_self.payStatus = !_self.payStatus;
			_self.$refs['popupPay'].close();
		},
		closePayStatus() {
			_self.getUserInfo();
			_self.isPayStatus = !_self.isPayStatus;
		},
		// 创建订单
		createOrder(pid, payCode, type) {
			if (!pid) return api.showToast('付款失败，请退出后重试', 2000);
			// if (!type) return api.showToast('原生支付正在，开发中', 2000);
			uni.showLoading({ title:'正在创建订单...',mask:true });
			// 发起请求
			uni.request({
				url: api.apiData.createOrder,
				method: 'POST',
				data: {
					userId : _self.userId,  // 用户ID
					payId  : pid,			// 支付方式ID
					buyType: _self.payType, // 1金币套餐2VIP套餐
					payCode: payCode, 		// 方式渠道标识
					price  : _self.payMoney,// 支付金额
					gold   : _self.gold,    // 金币数
					packId : _self.packId    // 套餐ID
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e)=> {
					var data = e.data;
					_self.closePay();
					if (data.Code == 200) {
						var orderSn = data.Data.order_sn;
						if (!orderSn) return api.showToast('订单创建失败，请检查网络是否正常', 2000);
						// 第三方 
						if (type) {
							uni.hideLoading();
							//api.jumpUrl(api.apiData.getPay+'/orderSn/'+orderSn, 'web');
							api.jumpUrl(data.Data.webUrl+'/appapi/pay/orderSn/'+orderSn, 'web');
							setTimeout(() => {
								_self.closePayStatus();
							}, 3000);
						} else {
							uni.showLoading({ title:'正在支付...',mask:true });
							//var orderInfo = JSON.stringify(data.Data.alipayStrSign);
							var orderInfo = data.Data.alipayStrSign;
							// alipay支付宝 wxpay微信
							uni.requestPayment({
								provider: data.Data.pay_channel,
								orderInfo: orderInfo, //微信、支付宝订单数据
								success: (res)=> {
									_self.getUserInfo();
									api.showToast("订单已付款成功", 2000);
									//console.log('success:' + JSON.stringify(res));
									let timer = setTimeout(() => {
										_self.closePayStatus();
										clearTimeout(timer);
									}, 3000);
								},
								fail: (err)=> {
									console.log('fail:' + JSON.stringify(err));
									api.showToast("付款失败，支付已取消", 2000);
									//api.showToast(JSON.stringify(err), 2000);
								}
							});
							//console.log(orderInfo);
						}
					} else {
						api.showToast(data.Msg, 2000);
					}
				},
				fail: () => {
					_self.closePay();
					api.showToast("服务器连接失败，请检测网格是否正常");
				}
			});
		},
		// 自定义充值
		customPay(e) {
			var point = e.target.value;
			var money = point/_self.cornCal;
			_self.cut(0, money, point, 1);
		},
		// 切换vip或金币
		selectType(type) {
			_self.payType = type;
			_self.changePackage();
		},
		setShow() {
			if (_self.payType == 1) {
				_self.isShow = _self.goldPackage.length?false:true;
			} else {
				_self.isShow = _self.vipPackage.length?false:true;
			}
		},
		changePackage(e=0) {
			if(e!=0) _self.current[_self.payType] = e.detail.current;
			_self.cut();
			_self.setShow();
		},
		// 选择套餐
		cut() {
			var d = [];
			if (_self.payType == 1) {
				d = _self.goldPackage[_self.current[_self.payType]];
				_self.gold = d.corn; // 金币数
			} else {
				d = _self.vipPackage[_self.current[_self.payType]];
			}
			_self.packId = d.id; // 套餐ID
			_self.payMoney = d.money;// 支付金额
			_self.moneyTig = '支付金额：'+d.money+'元';
		},
		// 读取套餐
		getRecPackage() {
			uni.request({
				url: api.apiData.getCharge,
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e) => {
					var data = e.data.Data;
					_self.goldPackage = data.corn;
					_self.vipPackage = data.vip;
					_self.cornCal = data.cornCal;
					_self.custom = data.custom;
					//console.log(_self.vipPackage);
					_self.cut();
					_self.setShow();
					if (!data.is_recharge) {
						api.showToast(data.recharge_text, 2000);
						let timer = setTimeout(()=>{
							api.jumpUrl('/pages/member/member', 'tab');
							clearTimeout(timer);
						}, 1500);
					} else {
						let timer = setTimeout(()=>{
							_self.loading = false;
							clearTimeout(timer);
						}, 500);
					}
					//console.log(e); 
				},
				fail: ()=> {
					// 加载失败提示
					_self.back('服务器连接失败，请检查网络是否正常');
				}
			});
		},
		// 读取个人信息
		getUserInfo() {
			uni.request({
				url: api.apiData.getInfo+'/userId/'+_self.userId,
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e) => {
					_self.userInfo = e.data.Data;
					_self.userInfo.nickname = (_self.userInfo.nickname == '') ? _self.userInfo.username : _self.userInfo.nickname;
					if (_self.userInfo.is_permanent == 1) {
						_self.vipmsg = "永久VIP";
					} else if (_self.userInfo.isVip) {
						_self.vipmsg = "VIP将在 "+_self.userInfo.vipEndTime +" 到期";
					} else {
						_self.vipmsg = "普通会员，可升级为尊贵的VIP";
					}
				},
				fail: () => {
					_self.back('服务器连接失败，请检查网络是否正常');
				}
			});
		},
		back(msg) {
			api.showToast(msg);
			let timer = setTimeout(()=>{
				uni.navigateBack();
				clearTimeout(timer);
			}, 1000)
		}
	}
};
</script>
<style lang="scss" scoped>
	/deep/.uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}
</style>
<style>
	@import url('@/components/loading/loading.css');
	.close{ width:30px;height:30px;float:right;right:4%;top:8px; }
	.pay-content{ width:100%;background:#FFFFFF;padding:0 0 10px; }
	.pay-title{ width:100%;height:50px;line-height:50px;font-size:18px;padding:0 5%;color:#666666;border-bottom:1px solid #E8E8E8; }
	.pay-code-list{ width:90%;margin:20px 5% 10px;height:30px;border-bottom:1px dashed #E2E2E2;padding:0 0 15px; }
	.pay-code-list view{ display:inline-block; }
	.pay-img{ width:30px;height:30px;float:left;margin-right:8px; }
	.pay-name{ height:30px;float:left;font-size:16px;line-height:30px;color:#666666; }
	.pay-botton{ width:24px;height:24px;float:right;margin-top:3px; }
	.select{ border:1px solid #ff0cd0;background:#1E1E2B; }
	.custom{ height:40px;line-height:40px;margin-top:20px;color:#666666;border:1px solid #ff0cd0;border-radius:3px;padding:0 2%; }
	.custom input{ font-size:13px; }
	.input{ height:40px;line-height:40px;padding:0 10px; }
	.money{ color:#FFFFFF;padding:0 15px; }
	.pay{ color:#FFFFFF;background-image: linear-gradient(to right,#FF8F00, rgba(254,67,101,0.8));float:right;padding:0 15px;margin-right:15px; }
	.bottom-pay{ width:100%;background:#20202C;margin-top:10px;position:fixed;bottom:0;font-size:15px;height:50px;line-height:50px; }
	.bottom-pay view{ display:inline-block; }
	.package-money{
		position: absolute;
		bottom: 20upx;
		right: 60upx;
	}
	.package-day{
		position: absolute;
		bottom: 105upx;
		left: 165upx;
	}
	.package-info{
		padding: 0 35upx;
	}
	.package-title{
		font-weight: bold;
		font-size: 17px;
		padding: 50upx 33upx 20upx 33upx;
	}
	.package-swiper{
		height: 354upx;
		position: relative;
	}
	.package-item{
		display: flex;
		justify-content: center;
		//background-color: #009688;
	}
	.package-bg{
		width: 550upx;
		height: 354upx;
		background-size: 100% 100%;
		color: #FFFFFF;
		font-size: 10px;
		//background-color: #007AFF;
	}
	.center-content{ 
		background-image: url(/static/member/vip_bg.png);
		background-size: 100% 100%;
	}
	.center-title{ padding:15px 5%;color:#FFFFFF;font-size:16px;margin: 10px 0; }
	.center-scroll{ height: 100px;background-color: #007AFF; }
	.center-info{
		display: inline-block;
		margin: 0 30upx 0 0;
		width: 43%;
		height: 145px;
		border-radius: 8px;
		//border: 2px solid #3F536E;
		//box-shadow: 0px 6px 6px 0px rgba(103, 103, 103, 0.5);
		text-align: center;
		padding: 20px 0 0 0;
		//background: #3F536E;
	}
	.default{ border:1px solid #E8E8E8; }
	.center-info view{ padding:5px 1%;font-size:16px; }
	.center-name{ color: #E8E8E8;border-bottom:1px solid #E8E8E8;width:80%;margin:0 auto;height:20px;line-height:20px; }
	.center-number{ color: #666666;width:98%;height:50px;line-height:50px; }
	.center-money{ color:#FF8F00;font-weight:bold;width:80%;margin:auto;border:1px solid #E8E8E8;border-radius:50px; }
	.myGold{ margin-top:15px;background:rgba(103,103,103,0.8);padding:8px 0;font-size:15px; }
	.gold{ width:30px;height:30px; }
	.head-content{ 
		width: 100%;
		height: 350upx;
		//background-image: linear-gradient(to right, rgba(255,12,208,0.8), rgba(254,67,101,0.8));
		background-color: #000000;
		clip-path: polygon(0% 0%,0% 100%,100% 65%,100% 0%);
	}
	.username{ font-size:17px; }
	.vipTime{ font-size:12px;margin-top:10px;background:rgba(255,94,99,0.8);display:inline-block;padding:5px 10px;border-radius:5px; }
	.svip {
		background: url(/static/member/vip_per.png)!important;
		background-size: cover!important;
		text-align: left!important;
		
	}
	.head-top{ 
		width:70%;
		background: rgba(239,187,52,0.9);
		margin: -200upx auto 0;
		border-radius: 10px;
		z-index: 3;
		position: relative;
		color: #FFFFFF;
		padding: 20px 0;
		height: 120px;
		text-align: center;
		box-shadow: 0px 0px 10px 10px rgba(239,187,52,0.2);
	}
	.content{ width:100%; }
	.head{ 
		background: rgba(218,171,57,0.6);
		text-align: center;
		padding: 7px 0;
		color: #FFFFFF;
		box-shadow: 0px 4px 4px 0px rgba(103, 103, 103, 0.3);
		border-radius: 100upx;
		width: 80%;
		margin: auto;
		font-size: 14px;
	}
	.head view{ display:inline-block;width:100px;height:70upx;line-height:70upx; }
	.ok{ background-color:rgba(0,0,0,0.4);color:#FFFFFF;border-radius:70upx; }
	page{
		background-color: #000000;
	}
</style>
