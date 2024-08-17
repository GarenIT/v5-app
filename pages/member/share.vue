<template>
	<view></view>
</template>

<script>
export default {
	onLoad() {
		//uni.showLoading({ title:'加载中...',mask:true });
		//uni.reLaunch({ url: '/pages/member/poster' });
	},
	onShow() {
		uni.showLoading({ title:'加载中...',mask:true });
		uni.reLaunch({ url: '/pages/member/poster' });
	},
	// 下拉刷新
	onPullDownRefresh() {
		uni.reLaunch({ url: '/pages/member/poster' });
		uni.stopPullDownRefresh();
	}
}
</script>

<style>
</style>
