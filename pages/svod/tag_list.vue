<template>
	<view class="video-list">
		<view class="mask" v-if="loading" style="background-color:#1D1D28;margin-top:0;">
			<view class="loading13" style="position:absolute;margin-top:-30upx;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		<view class="video-item" v-for="(b, i) in list" :key="i" @click="api.jumpUrl('/pages/svod/player?info='+JSON.stringify(b), 'new')">
			<image class="is-vip" src="/static/play/ico_vip.png" v-if="b.gold>0"></image>
			<image class="is-vip" src="/static/play/ico_free.png" v-else></image>
			<easy-loadimage
				mode="aspectFill"
				:scroll-top="scrollTop"
				:image-src="b.cover"
				:open-transition="true"
				class="cover">
			</easy-loadimage>
			<text class="video-title">{{b.title}}</text>
		</view>
		<view class="more">
			<image v-if="more" class="load-img" src="/static/loading/load0.gif" mode="aspectFill"></image>
			<text v-if="notData">——— 我是有底线的 ———</text>
		</view>
	</view>
</template>
<script>
import api from "@/common/api.js";
var _self;
export default {
	data() {
		return {
			info: {
				name: '视频',
				id: 0
			},
			page: 1,
			list: [],
			scrollTop: 0,
			notData: false,
			more: false,
			loading: true,
			api: api,
		}
	},
	onLoad(e) {
		_self = this;
		_self.info = JSON.parse(e.info);
		let timer = setTimeout(() => {
			uni.setNavigationBarTitle({ title: _self.info.name });
			clearTimeout(timer);
		}, 100);
		_self.getVideo();
	},
	methods: {
		getVideo() {
			uni.request({
				url: api.apiData.tagSvodVideo,
				method: 'POST',
				data: {
					tid: _self.info.id,
					page: _self.page
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (r) => {
					let d = r.data;
					if (d.Code != 200) return api.showToast(d.Msg);
					if (d.Data.length) {
						_self.list = _self.list.concat(d.Data);
						_self.notData = false;
					} else {
						_self.notData = true;
					}
					let timer = setTimeout(()=> {
						_self.loading = false;
						clearTimeout(timer);
					}, 500);
				},
				fail: () => {
					// 加载失败提示
					_self.showTip('服务器连接失败，请检查网络是否正常');
				},
				complete: () => {
					_self.more = false;
				}
			});
		},
		showTip(m) {
			api.showToast(m);
			let timer = setTimeout(()=> {
				uni.navigateBack();
				clearTimeout(timer);
			}, 1000);
		}
	},
	onReachBottom(){
		if (_self.notData) return;
		_self.page++;
		_self.more = true;
		_self.getVideo();
	},
	onPageScroll({scrollTop}) {
		_self.scrollTop = scrollTop;
	}
};
</script>

<style>
	@import url('@/components/loading/loading.css');
	.more .load-img{
		width: 80rpx;
		height: 80rpx;
	}
	.more{
		display: flex;
		justify-content: center;
		width: 100%;
		color: #999;
		font-size: 12px;
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
		margin: 15px auto 20px;
	}
	.video-title{
		position: absolute;
		margin-top: -30px;
		background-color: rgba(0,0,0,0.2);
		color: #fff;
		font-size: 12px;
		width: 96%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 2px 2%;
	}
	.video-item .cover{
		width: 100%;
		height: 210px;
		border-radius: 8px;
	}
	.cover >>> .origin-img{
		border-radius: 8px;
	}
	.video-list .video-item{
		display: inline-block;
		width: 45.5%;
		position: relative;
		margin-bottom: 10px;
		border-radius: 8px;
		background-color: rgba(0,0,0,0.3);
		margin-left: 3%;
	}
	.video-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 15px 0;
	}
</style>
