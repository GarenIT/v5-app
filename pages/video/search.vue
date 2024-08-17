<template>
	<view>
		<view class="head-content" id="head">
			<view class="head-placeholder"></view>
			<view class="head-search">
				<view class="head-left" @click="backUrl">
					<image src="@/static/imgs/back.png" mode="aspectFill"></image>
				</view>
				<view class="head-center">
					<text class="sel">搜索</text>
					<text @click="api.jumpUrl('/pages/class/index', 'new')">分类</text>
				</view>
				<view class="head-left"></view>
			</view>
			<view class="head-bottom">
				<view class="head-search-center">
					<input class="head-input" 
						focus="true" 
						:value="search" 
						@input="inputKey" 
						confirm-type="search" 
						@confirm="searchKey(1)" 
						type="search" 
						maxlength="20"
						placeholder="搜索一下,发现新世界...">
				</view>
				<view class="head-search-right" @click="searchKey(1)">
					<image src="@/static/imgs/search.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view :style="{ height: topHeight + 'px' }"></view>
		<view class="top-content" v-if="isShearchShow">
			<view class="search-log" v-if="logHide">
				<view class="search-log-top">
					<text class="line"></text>
					<text class="c-title">历史搜索</text>
					<image src="@/static/imgs/del.png" @click="delSearch"></image>
				</view>
				<view class="search-log-content">
					<view class="search-log-list" v-for="(t, i) in logList" :key="i" @click="searchLog(t.content)">
						<text>{{t.content}}</text>
					</view>
				</view>
			</view>
			<view class="search-log" v-if="hotHide">
				<view class="search-log-top hot">
					<text class="line"></text>
					<text class="c-title">热门搜索</text>
				</view>
				<view class="search-hot-content" v-for="(e, h) in hotList" :key="h" @click="playVideo(e.id)">
					<view class="search-hot-list">
						<text class="search-hot-sort one" v-if="(h+1)==1">{{h+1}}</text>
						<text class="search-hot-sort two" v-if="(h+1)==2">{{h+1}}</text>
						<text class="search-hot-sort thr" v-if="(h+1)==3">{{h+1}}</text>
						<text class="search-hot-sort" v-if="(h+1)>3">{{h+1}}</text>
						<text class="search-hot-time">{{utils.timeTodate('Y/m/d',e.update_time)}}</text>
						<text class="search-hot-title">{{e.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="video-list" v-else>
			<view class="video-desc">共搜索到{{videoCount}}个与<text class="colorRed">{{search}}</text>相关的视频</view>
			<view style="display: flex;flex-wrap: wrap;">
				<view class="video-info" v-for="(v, k) in videoList" :key="k" @click="playVideo(v.id)">
					<image :src="v.thumbnail" mode="aspectFill"></image>
					<view style="padding: 0 3px;">
						<rich-text class="title" :nodes="v.title">...</rich-text>
					</view>
				</view>
			</view>
			<view class="moreTig" v-if="isMoreTig">{{isMoreMsg}}</view>
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
			isMoreTig: false,
			isMoreMsg: '——— 我是有底线的 ———',
			isMore: false,
			topHeight: 76,
			did: 0,
			logHide: false,
			hotHide: false,
			isShearchShow: true,
			logList: {},
			hotList: {},
			isSearchs: 1,
			search: '',
			userId: 0,
			utils: utils,
			videoList: [],
			videoCount: 0,
			scrollTop: 0,
			page: 1,
			api: api,
		}
	},
	onLoad() {
		uni.showLoading({ title:'加载中,请稍后...',mask:true });
		_self = this;
		var info = api.getLogins();
		if(info != false) _self.userId = info.userId;
		uni.getStorage({
		    key: 'mobileDid_'+ api.appkey,
		    success: res => {
				// 从缓存中拉取
				_self.did = res.data;
				//console.log(_self.did)
		    },
			complete: () => {
				_self.getHotSearch();
			}
		});
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
		let timer = setTimeout(() => {
			query.select('#head').boundingClientRect(ah => {
				_self.topHeight = ah.height;
			}).exec();	
			clearTimeout(timer);
		}, 100);
	},
	methods: {
		// 清空搜索记录
		delSearch() {
			uni.showModal({
				content: '确认清空搜索记录吗？',
				cancelText:'考虑一下',
				confirmText:'清空记录',
				success: res => {
					if (res.confirm) {
						_self.delSearchLog();
					} else if (res.cancel) {
				
					}
				}
			});
		},
		// 同步接口清空搜索记录
		delSearchLog() {
			uni.showLoading({ title:'处理中...',mask:true });
			uni.request({
				url: api.apiData.emptySearch,
				method: 'POST',
				//timeout: 3000,
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					did: _self.did
				},
				success: (e) => {
					//console.log(e)
					if(e.data.Code==200){
						_self.logHide = false;
					}
					uni.hideLoading();
				},
				fail: () => {
					api.showToast('服务器连接失败，请检查网络是否正常', 2000);
				}
			});
		},
		// 跳转播放页
		playVideo(vid) {
			//console.log(vid);
			uni.setStorage({
			    key: 'vid',
			    data: vid,
			    fail: () => {
					_self.back('服务器连接失败，请检查网络是否正常');
			    },
				complete: () => {
					var param = {
						url: '/pages/video/search',
						t: 'new'
					}
					api.jumpUrl('/pages/video/play?type='+JSON.stringify(param), 'new');
				}
			});
		},
		inputKey(e) {
			_self.search = e.detail.value;
		},
		searchLog(e){
			_self.search = e;
			_self.searchKey(1);
			//console.log(e)
		},
		searchKey(e) {
			if (e) _self.page = 1;
			uni.showLoading({ title:'搜索中,请稍后...',mask:true });
			if (_self.search.length==0) return api.showToast('请输入搜索关键字', 2000);
			// 是否允许普通用户搜索
			if (!_self.isSearchs) {
				if (_self.userId==0) {
					api.showToast('禁止游客使用搜索功能，请先登录', 2000);
					let timer = setTimeout(() => {
						api.jumpUrl('/pages/login/login', 'newx');
						clearTimeout(timer);
					}, 1000);
					return;
				}
			}
			//console.log(_self.userId+'=='+_self.did+'=='+_self.search)
			uni.request({
				url: api.apiData.searchVideo,
				method: 'POST',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					uid: _self.userId,
					did: _self.did,
					key: _self.search,
					page: _self.page
				},
				success: (e) => {
					var data = e.data;
					if (data.Code == 201) {
						return api.showToast(data.Msg, 2000);
					} else if (data.Code == 202) {
						if (e&&_self.page==1) {
							api.showToast(data.Msg, 2000);
						} else {
							api.showToast("已到顶到胃了");
						}
						_self.isMoreMsg = "——— 我是有底线的 ———";
						_self.page = _self.page-1;
						_self.isMore = true;
						return false;
					}
					//console.log(3)
					if (_self.page>1) _self.isMoreTig = true;
					if (data.Data.video.length>0) {
						_self.isMoreMsg = "——— 加载数据中 ———";
						if (e&&_self.page==1) {
							_self.videoList = data.Data.video;
						} else {
							_self.videoList = _self.videoList.concat(data.Data.video);
						} 
					}
					_self.videoCount = data.Data.count;
					_self.isShearchShow = false;
					let timer = setTimeout(() => {
						_self.getHotSearch();
						clearTimeout(timer);
					}, 300);
				},
				fail: () => {
					_self.back('服务器连接失败，请检查网络是否正常');
				}
			});
		},
		getHotSearch() {
			//console.log(_self.did)
			uni.request({
				url: api.apiData.getHotSearch,
				method: 'POST',
				data:{
					did: _self.did
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e) => {
					var res = e.data.Data;
					_self.isSearchs = res.isSearchs;
					if (res.logList.length) {
						_self.logList = res.logList;
						_self.logHide = true;
					}
					if (res.hotList.length) {
						_self.hotList = res.hotList;
						_self.hotHide = true;
					}
				},
				fail: ()=> {
					// 加载失败提示
					_self.back('服务器连接失败，请检查网络是否正常');
				},
				complete: () => {
					uni.hideLoading();
				}
			});
		},
		// 返回上一层
		backUrl() {
			if (_self.isShearchShow) {
				api.jumpUrl('/pages/video/class', 'tab');
			} else {
				_self.page = 1;
				_self.videoList = [];
				_self.isShearchShow = true;
				_self.isMore = false;
			}
		},
		// 提示
		back(msg = '') {
			if (msg.length == 0) return;
			api.showToast(msg);
			let timer = setTimeout(() => {
				uni.navigateBack();
				clearTimeout(timer);
			}, 1500);
		}
	},
	// 上拉加载数据
	onReachBottom(){ 
		if (!_self.isMore) {
			_self.page++;
			_self.searchKey(0);
		}
	},
	// 滚动监听事件
	onPageScroll({scrollTop}) {
	    _self.scrollTop = scrollTop;
	}
}
</script>

<style>
	.moreTig{
		width: 100%;
		text-align: center;
		color: #999999;
		font-size: 25upx;
		margin-top: 20upx;
		padding-bottom: 30px;
	}
	.colorRed{
		color: #B01A1C;
	}
	.video-list{
		width: 97%;
		padding: 1px 0 10px 3%;
	}
	.video-desc{
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #999999;
		margin: 10px 0;
	}
	.video-info{
		width: 45%;
		height: 265upx;
		border-radius: 5px;
		border: 1px solid #E5E5E5;
		padding-bottom: 8px;
		display: inline-block;
		margin: 0 0 3% 2%;
	}
	.video-info image{
		width: 100%;
		height: 200upx;
		border-radius: 5px 5px 0 0;
	}
	.video-info .title{
		font-size: 12px;
		color: #CCCCCC;
		line-height: 30upx;
	}
	.one{
		background: #B01A1C;
		color: #FFFFFF!important;
	}
	.two{
		background: #007AFF;
		color: #FFFFFF!important;
	}
	.thr{
		background: #A83FDB;
		color: #FFFFFF!important;
	}
	.search-hot-list{
		width: 92%;
		font-size: 13px;
		border-radius: 3px;
		margin: 0 5% 0 3%;
	}
	.search-hot-sort{
		width: 20px;
		height: 20px;
		line-height: 20px;
		display: inline-block;
		text-align: center;
		border-radius: 50%;
		color: #777777;
	}
	.search-hot-title{
		width: 63%;
		padding: 0 5% 0 0;
		height: 20px;
		line-height: 20px;
		display: inline-block;
		color: #999;
		float: right;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.search-hot-time{
		width: 22%;
		float: right;
		height: 20px;
		line-height: 20px;
		text-align: right;
	}
	.search-hot-content{
		margin-top: 10px;
	}
	.hot{
		margin-bottom: 18px;
	}
	.search-log-content{
		margin-top: 18px;
	}
	.search-log-content view{
		display: inline-block;
	}
	.search-log-list{
		width: 25%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #f5f5f5;
		font-size: 13px;
		border-radius: 3px;
		color: #666666;
		margin: 0 0 5px 10px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 0 5px;
	}
	.search-log-top .line{
		width: 8px;
		height: 15px;
		background-color: #FF8F00;
		margin-right: 20upx;
		border-radius: 8px;
	}
	.c-title{
		flex: 1;
		color: #FFFFFF;
	}
	.search-log-top image{
		width: 20px;
		height: 20px;
	}
	.search-log-top{
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.search-log{
		margin-top: 10px;
		padding: 0 35upx;
		font-size: 17px;
		color: #666666;
		font-weight: bold;
	}
	.top-content{
		margin-top: 10px;
	}
	.head-content{
		width: 94%;
		background: #20202C; 
		padding: 0 3% 10upx;
		text-align: center;
		position: fixed;
		top: 0;
		z-index: 999;
		border-bottom: 1px solid rgba(0,0,0,0.2);
		display: flex;
		flex-direction: column;
	}
	.head-placeholder{
		height: var(--status-bar-height);
		padding-top: 16upx;
		box-sizing: content-box;
	}
	.head-bottom{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 10upx 0;
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
	.head-center .sel{
		font-weight: bold;
		border-bottom: 2px solid #F2692F;
	}
	.head-center text{
		color: #FFFFFF;
		font-size: 16px;
		margin: 0 30upx;
		border-bottom: 2px solid #20202C;
	}
	.head-center{
		height: 35.5px;
		line-height: 30px;
		flex: 1;
	}
	.head-search{
		display: flex;
		flex-direction: row;
	}
	.head-search-right image{
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}
	.head-search-center{
		flex: 1;
		margin: 0 20upx;
	}
	.head-input{
		height: 32px;
		line-height: 32px;
		background: #E5E5E5;
		border-radius: 50px;
		font-size: 26upx;
		padding: 0px 30upx;
		text-align: left;
		color: #666666;
	}
	.error{
		margin-top: 300upx;
	}
</style>
