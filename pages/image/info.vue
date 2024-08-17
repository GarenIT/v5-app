<template>
	<view class="content">
		<view class="mask" v-if="loading" style="background-color:#20202C;margin-top:0px;" @touchmove.stop.prevent="moveHandle">
			<view class="loading13" style="margin-top: -60px;">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
		</view>
		<view class="info-head">
			<view class="info-title">{{info.title}}</view>
			<view class="info-title-bottom">
				<text>点击量：{{info.watch}}</text>
				<view style="display:inline-block;margin-left:10upx;">
					<text v-if="info.gold > 0">[{{info.gold}} 金币]</text>
					<text v-else>[免费]</text> 
					<text style="color:#009688;" v-if="info.gold > 0 && info.isBuy">[已购买]</text>
				</view>
				<text class="right">发布：{{info.date}}</text>
			</view>
		</view>
		<view class="info-content">
			<view v-for="(p, i) in info.list" :key="i" @click="bigImg(p)">
				<!-- <image class="img-item" :src="p" mode="aspectFill" @click="bigImg(p)"></image> -->
				<easy-loadimage
					mode="aspectFill"
				    :scroll-top="scrollTop"
				    :image-src="p" 
				    :open-transition="true"
					class="img-item">
				</easy-loadimage>
			</view>
		</view>
	</view>
</template>
<script>
import api from "@/common/api.js";
import easyLoadimage from '@/components/easy-loadimage/easy-loadimage.vue'
var _self;
export default {
	onPageScroll({scrollTop}) {
		_self.scrollTop = scrollTop;
	},
	components: {
		easyLoadimage
	},
	data() {
		return {
			loading: true,
			isLogin: false,
			userId: 0,
			phone: {},
			
			zid: 0,
			info: {},
			scrollTop: 1,
		}
	},
	onLoad(e) {
		_self = this;
		_self.zid = e.zid;
		_self.isLogin = api.getLogins();
		if(_self.isLogin) _self.userId = _self.isLogin.userId;
		//_self.phone = uni.getSystemInfoSync();
		_self.getData();
	},
	methods: {
		bigImg(i) {
			uni.previewImage({
				urls: _self.info.list,
				current: i,
				longPressActions: {
					itemList: ['保存至手机相册'],
					success: (data)=> {
						_self.downImg(_self.info.list[data.index]);
					}
				}
			});
		},
		downImg(img) {
			uni.showLoading({ title:'正在保存...',mask:true });
			uni.downloadFile({
				url: img,
				success: (res)=>{
					if (res.statusCode == 200) {
						_self.savePoto(res.tempFilePath);
					} else {
						api.showToast('保存失败，请确定是否给于APP权限');
					}
				},
				complete() {
					uni.hideLoading();
				}
			})
		},
		savePoto(tempFilePath) {
			uni.saveImageToPhotosAlbum({
				filePath: tempFilePath,
				success: ()=> {
					api.showToast("已保存至手机相册", 2000);
				},
				fail: ()=> {
					api.showToast("保存失败，请检查APP是否有权限", 5000);
				}
			});
		},
		getData() {
			uni.request({
				url: api.apiData.pictureInfo,
				method: 'POST',
				data: {
					zid: _self.zid,
					uid: _self.userId
				},
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				success: (e)=> {
					var r = e.data;
					if(r.Code == 200){
						var d = r.Data;
						_self.info = d.info;
						//console.log(_self.info)
						_self.info.list.unshift(d.info.cover);
					}else{
						_self.back(r.Msg);
					}
				},
				fail: ()=> {
					// 加载失败提示
					_self.back("服务器连接失败，请检查网络是否正常");
				},
				complete: ()=> {
					let timer = setTimeout(()=>{
						_self.loading = false;
						clearTimeout(timer);
					}, 500);
				}
			});
		},
		back(msg) {
			api.showToast(msg, 2000);
			setTimeout(()=>{
				uni.navigateBack();
			}, 1000);
		},
		// 跳转登录
		skipUrl(uri = '/pages/login/login', type = 'new') {
			api.jumpUrl(uri, type)
		},
		moveHandle() {}
	}
};
</script>

<style>
	@import url('@/components/loading/loading.css');
	.info-content{
		padding-top: 30upx;
	}
	.img-item{
		width: 100%;
		height: 350upx;
		border-radius: 10upx;
		margin-bottom: 10upx;
	}
	.img-item >>> .origin-img{
		border-radius: 10upx;
	}
	.info-title-bottom text{
		display: inline-block;
	}
	.info-title-bottom{
		font-size: 12px;
		color: #999;
		text-align: left;
	}
	.info-title{
		color: #FFFFFF;
		font-size: 20px;
		font-weight: bold;
		margin: 10upx 0 20upx;
	}
	.info-head{
		text-align: center;
		border-bottom: 1px solid rgba(255,255,255,0.1);
		padding-bottom: 20upx;
	}
	.content{
		margin: 20upx 25upx;
		padding: 20upx;
		border-radius: 15upx;
		background-color: #31313C;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>
