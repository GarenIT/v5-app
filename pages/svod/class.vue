<template>
	<view class="content">
		<view class="mask" v-if="loading" style="background-color:#1D1D28;margin-top:0;" :style="{'height':loadHeight+'px!important'}">
			<view class="loading13" style="position:absolute;margin-top:-30upx;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		<!-- 头部 -->
		<view class="center-content">
			<view class="head" :style="'padding-top:'+(phone.statusBarHeight+10)+'px'">
				<view class="head-item">
					<view class="head-back" @click="api.jumpUrl('/pages/video/class', 'tab')">
						<image src="@/static/imgs/back.png" mode="aspectFill" style="width:25px;height:25px;"></image>
					</view>
					<text class="class" 
						v-for="(m, i) in homeData.classList" 
						:key="i" @click="setTabId(m.id)"
						:class="(tabId==m.id)||(tabId==0&&i==0)?'sel':''">{{m.name}}</text>
				</view>
			</view>
			<view :style="'height:'+(phone.statusBarHeight+45)+'px'"></view>
			<!--轮播图-->
			<view class="head-banner" v-if="isBanner">
				<swiper 
					class="swiper" 
					circular 
					interval="3000"
					:autoplay="true" 
					:indicator-dots="true" 
					indicator-color="rgba(255,255,255,0.4)"
					indicator-active-color="rgba(255,255,255,0.8)">
				    <swiper-item class="item" v-for="(b, i) in homeData.banner" :key="i" @click="api.jumpUrl(b.url, 'web')">
				        <image :src="b.images_url" mode="aspectFill"></image>
				    </swiper-item>
				</swiper>
			</view>

			<!-- 分类视频 -->
			<view class="class-list">
				<block v-for="(v, k) in homeData.clist" :key="k">
					<view class="class-item" v-if="v.c_list.length">
						<view class="class-name">
							<text>{{v.c_name}}</text>
							<text class="r" style="color:#777;" @click="api.jumpUrl('/pages/svod/class_video?info='+JSON.stringify(v), 'new')">更多</text>
						</view>
						
						<view class="video-list" style="justify-content:flex-start;">
							<view class="video-item" 
								v-for="(b, i) in v.c_list" 
								:key="i" @click="api.jumpUrl('/pages/svod/player?info='+JSON.stringify(b), 'new')"
								:style="(i+1)%3==0?'':'margin-right:2%'">
								<image class="is-vip" src="/static/play/ico_vip.png" v-if="b.gold>0"></image>
								<image class="is-vip" src="/static/play/ico_free.png" v-else></image>
								<!-- <image class="cover" :src="b.cover" mode="aspectFill"></image> -->
								<easy-loadimage
									mode="aspectFill"
								    :scroll-top="scrollTop"
								    :image-src="b.cover"
								    :open-transition="true"
									class="cover">
								</easy-loadimage>
								<text class="video-title">{{b.title}}</text>
							</view>
						</view>
						<view class="video-bottom" @click="nextData(k)">
							<image style="width:20px;height:20px;" src="/static/play/next_page.png"></image>
							<text style="color:#FFFFFF;font-size:14px;margin-left:5px;">换一批</text>
						</view>
					</view>
				</block>
				<view class="video-list" style="margin-top:-10px;">
					<view class="video-item" style="width:48.5%;margin-bottom:8.5px;" 
						v-for="(b, i) in homeData.vlist" :key="i" @click="api.jumpUrl('/pages/svod/player?info='+JSON.stringify(b), 'new')">
						<image class="is-vip" src="/static/play/ico_vip.png" v-if="b.gold>0"></image>
						<image class="is-vip" src="/static/play/ico_free.png" v-else></image>
						<!-- <image class="cover" :src="b.cover" mode="aspectFill"></image> -->
						<easy-loadimage
							mode="aspectFill"
							:scroll-top="scrollTop"
							:image-src="b.cover"
							:open-transition="true"
							class="cover"
							style="height: 210px;">
						</easy-loadimage>
						<text class="v-list-title">{{b.title}}</text>
					</view>
				</view>
				<view style="width:100%;margin:150px 0;text-align:center;" v-if="isClistNotData && pageType==1">
					<image src="/static/empty.png" style="width:100px;height:100px;"></image>
					<view style="width:100%;font-size:25upx;color:#999;margin-top:30upx;">本页面暂无内容</view>
				</view>
				<view style="width:100%;margin:150px 0;text-align:center;" v-if="isVlistNotData && pageType==2">
					<image src="/static/empty.png" style="width:100px;height:100px;"></image>
					<view style="width:100%;font-size:25upx;color:#999;margin-top:30upx;">本页面暂无内容</view>
				</view>
				<view class="more" v-if="notData">
					<text>——— 我是有底线的 ———</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from "@/common/api.js";
import easyLoadimage from '@/components/easy-loadimage/easy-loadimage.vue'
import utils from '@/components/shoyu-date/utils.filter.js';
var _self;
export default {
	components: { 
		easyLoadimage
	},
	data() {
		return {
			scrollTop: 0,
			loading: true,
			system: 'web',
			phone: {},
			one: false,
			api: api,
			homeData: {},
			isBanner: false,
			tabId: 0,
			isClistNotData: false,
			isVlistNotData: false,
			pageType: 1,
			notData: false,
			page: 1,
		}
	},
	onHide() {
		_self.one = true;
	},
	onShow() {
		if (_self.one) _self.getHomeData();
	},
	onLoad() {
		_self = this;
		_self.phone = uni.getSystemInfoSync();
		// #ifdef APP-PLUS
		_self.system = _self.phone.platform;
		_self.loadHeight = _self.phone.screenHeight;
		// #endif
		// #ifdef H5 || MP-WEIXIN
		_self.loadHeight = _self.phone.windowHeight;
		// #endif
		// 加载首页全局数据
		_self.getHomeData();
	},
	methods: {
		// 首页数据
		getHomeData(t = 0) {	
			if(t == 1) uni.showLoading({ title:'加载中...',mask:true });
			// 发起请求
			uni.request({
				url: api.apiData.getSvodClass,
				method: 'POST',
				data: {
					class_id: _self.tabId
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e)=> {
					let d = e.data;
					if (d.Code == 201) return api.showToast(d.Msg, 2000);
					// 首页数据
					_self.homeData = e.data.Data;
					_self.pageType = _self.homeData.type;
					_self.isClistNotData = _self.homeData.clist.length?false:true;
					_self.isVlistNotData = _self.homeData.vlist.length?false:true;
					// 轮播图start
					var banner = _self.homeData.banner;
					if (banner.length) {
						_self.isBanner = true;
						if (banner[0]['images_url'].length) {
							for (var i = 0; i < banner.length; i++) {
								api.imgCache(banner[i]['images_url'], (img)=>{
									banner[i]['images_url'] = img;
								});
							}
						}
						_self.homeData['banner'] = banner;
					} else { 
						_self.isBanner = false;
					}
					let timer = setTimeout(()=> {
						_self.loading = false;
						if (t==1) {
							uni.hideLoading();
							uni.pageScrollTo({
							    scrollTop: 0,
							    duration: 300
							});
						}
						clearTimeout(timer);
					}, 500);
				},
				fail: ()=> {
					// 加载失败提示
					api.showToast('服务器连接失败，请检查网络是否正常', 5000);
				},
				complete: ()=> {
					_self.scrollTop = 2;
				}
			});
		},
		// 切换大分类
		setTabId(e) {
			_self.page = 1;
			_self.tabId = e;
			_self.notData = false;
			_self.getHomeData(1);
		},
		// 换一批
		nextData(e) {
			uni.showLoading({ title:'加载中...',mask:true });
			_self.homeData.clist[e]['c_page'] ++; 
			let v = _self.homeData.clist[e];
			uni.request({
				url: api.apiData.getSvodData +'/cid/'+ v['c_id'] +'/type/1/page/'+ v['c_page'],
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (r)=> {
					let d = r.data;
					if (d.length) {
						_self.homeData.clist[e]['c_list'] = d;
					} else {
						api.showToast("哦豁，没有找到数据")
					}
					let timer = setTimeout(()=> {
						uni.hideLoading();
						clearTimeout(timer);
					}, 500);
				},
				fail: ()=> {
					// 加载失败提示
					api.showToast("服务器连接失败，请检查网络是否正常", 5000);
				}
			});
		},
		getVideo() {
			uni.showLoading({ title:'加载中...',mask:true });
			uni.request({
				url: api.apiData.getSvodData +'/cid/'+ _self.tabId +'/type/'+ _self.pageType +'/page/'+ _self.page +'/count/12',
				method: 'GET',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (r) => {
					let d = r.data;
					if (d.length) {
						_self.homeData.vlist = _self.homeData.vlist.concat(d);
						_self.notData = false;
					} else {
						_self.notData = true;
					}
					let timer = setTimeout(()=> {
						uni.hideLoading();
						clearTimeout(timer);
					}, 500);
				},
				fail: () => {
					// 加载失败提示
					api.showToast('服务器连接失败，请检查网络是否正常');
				}
			});
		},
	},
	onReachBottom(){
		if (_self.notData || _self.pageType==1) return;
		_self.page++;
		_self.getVideo();
	},
	// 滚动监听事件
	onPageScroll({scrollTop}) {
		_self.scrollTop = scrollTop;
	}
}
</script>
<style lang="scss" scoped>
	/deep/.uni-scroll-view::-webkit-scrollbar {
		display: none
	}
</style>
<style>
	@import url('@/components/loading/loading.css');
	.head-back{
		height: 26px;
		margin: 0 20upx 0 -5px;
	}
	.more{
		text-align: center;
		width: 100%;
		color: #999;
		font-size: 12px;
		margin: 10px 0 15px;
	}
	.v-list-title{
		position: absolute;
		margin-top: -30px;
		background-color: rgba(0,0,0,0.2);
		color: #fff;
		font-size: 12px;
		width: 98%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 2px 1%;
	}
	.tag-item text{
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100px;
		line-height: 100px;
		border-radius: 8px;
		margin-left: -100%;
		background-color: rgba(0,0,0,0.5);
		text-align: center;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: bold;
	}
	.tag-item .tag-cover{
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
	.tag-item{
		position: relative;
		width: 22%;
		height: 100px;
		margin-bottom: 8px;
	}
	.tag-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 30rpx;
		margin: 10px 0;
	}
	.is-vip{
		width: 32px;
		height: 16px;
		position: absolute;
		margin-bottom: -16px;
		z-index: 1;
	}
	.video-bottom{
		width: 50%;
		height: 30px;
		background-color: #272733;
		border-radius: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 12px auto 23px;
	}
	.video-title{
		font-size: 12px;
		line-height: 16px;
		padding: 5px 0 2px 0;
		width: 100%;
		color: rgba(255,255,255,0.7);
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.video-item .cover{
		width: 100%;
		height: 140px;
		border-radius: 8px;
		background-color: rgba(0,0,0,0.3);
	}
	.cover >>> .origin-img{
		border-radius: 8px;
	}
	.video-list .video-item{
		display: inline-block;
		width: 32%;
		position: relative;
		margin-bottom: 7px;
	}
	.video-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.class-name{
		height: 20px;
		line-height: 20px;
		border-left: 6px solid #FF8F00;
		border-radius: 3px;
		font-size: 14px;
		color: #FFFFFF;
		padding-left: 10px;
		margin-bottom: 17px;
	}
	.class-item{
		margin-bottom: 5px;
	}
	.class-list{
		padding: 0 30rpx;
		margin-top: 15px;
	}
	.menu-item image{
		width: 50px;
		height: 50px;
	}
	.menu-item text{
		color: rgba(255,255,255,0.8);
		font-size: 14px;
		margin-top: 10px;
	}
	.menu-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25%;
	}
	.menu-list{
		padding: 0 30rpx;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin: 20px 0;
	}
	.head-banner image{
		width: 100%;
		height: 100%;
	}
	.head-banner .swiper{
		width: 100%;
		height: 160px;
		overflow: hidden;
		border-radius: 10px;
		/* #ifdef H5 */
		position: relative;
		transform: rotate(0deg);
		/* #endif */
	}
	.head-banner{
		margin: 5px 0 10px;
		padding: 0 30rpx;
	}
	.head-right image{
		height: 26px;
		width: 26px;
		margin-left: 14px;
		margin-top: 4px;
	}
	.head-search{
		display: flex;
		flex-direction: row;
		background-color: #31313C;
		border-radius: 34px;
		height: 34px;
		line-height: 34px;
		align-items: center;
		padding: 0 10px;
		flex: 1;
	}
	.head-item .sel{
		font-size: 17px!important;
		color: #FFFFFF;
		border-bottom: 2px solid #FF8F00!important;
	}
	.head-item .class{
		font-size: 16px;
		height: 26px;
		margin-right: 15px;
		border-bottom: 2px solid #1D1D28;
	}
	.head-item{
		display: flex;
		flex-direction: row;
		margin-bottom: 10px;
		width: 694rpx;
	}
	.head{
		position: fixed;
		color: #999999;
		background-color: #1D1D28;
		z-index: 99;
		padding: 0 30rpx;
	}
	.r{
		float: right;
	}
	.l{
		float: left;
	}
	.center-content{
		
	}
</style>
