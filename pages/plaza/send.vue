<template>
	<view class="content">
		<view class="head-top" :style="{'padding-top':top+'px'}">
			<view class="content-head" @click="goPlazaIndex">
				<image src="@/static/plaza/back.png" mode="aspectFill" style="width:26upx;height:40upx;"></image>
			</view>
			<text>发帖</text>
			<view :class="isSend?'send-right-y':'send-right-n'" @click="send">发布</view>
		</view>
		<view class="textarea" :style="{'margin-top':contentTop+'px'}">
			<textarea @blur="bindTextAreaBlur" :value="content" :maxlength="maxlength" @input="sendText" placeholder="尬聊内容, 写在这里哦~~"/>
			<view class="bottom-right">{{wzCount}}/{{maxlength}}</view>
		</view>
		<view class="content-bottom">
			<text>1. 内容不允许出现数字、英文字母；</text>
			<text>2. 最多可添加{{maxCount}}张图片。</text>
		</view>
		<view class="bottom-btn">
			<g-upload
				ref='gUpload'
				:mode="imgList" 
				@chooseFile='chooseFile' 
				@imgDelete='imgDelete' 
				:control='control' 
				:maxCount="maxCount"
				:columnNum="columnNum">
			</g-upload>
		</view>
	</view>
</template>

<script>
	import api from "@/common/api.js";
	import gUpload from "@/components/g-upload/g-upload.vue"
	var _self;
	export default {
		components: {
			gUpload
		},
		data() {
			return {
				isLogin: false,
				userId: 0,
				top: 0,
				phone: {},
				contentTop: 35,
				
				isSend: false,
				
				maxCount: 9,
				maxlength: 200,
				uploadSize: '500M',
				wzCount: 0,
				
				control: true,
				columnNum: 3,
				imgList: [],
				newImgList: [],
				
				content: '',
				
				oldContent: {
					id: 0
				},
				type: 0,
			}
		},
		onLoad(e) {
			_self = this;
			_self.phone = uni.getSystemInfoSync();
			_self.top = _self.phone.statusBarHeight;
			//console.log(_self.phone)
			// #ifdef H5
			_self.top = 9;
			// #endif
			_self.type = e.t;
			_self.contentTop = _self.top + 46;
			if(e.t == 0) _self.removeStorage();
			uni.getStorage({
			    key: 'edit_content_' + api.appkey,
			    success: (res)=> {
					_self.oldContent = res.data;
			        //console.log(res.data);
			    },
				complete: () => {
					_self.isUserLogin();
				}
			});
		},
		methods: {
			isUserLogin() {
				_self.isLogin = api.getLogins();
				if(!_self.isLogin) {
					_self.skipUrl('/pages/login/login', 'new');
				}else{
					_self.userId = _self.isLogin.userId;
					if(_self.type == 1 && _self.oldContent.uid == _self.userId){
						_self.imgList = _self.oldContent.allImg;
						_self.content = _self.oldContent.text;
						_self.wzCount = _self.oldContent.text.length;
					} 
					//console.log(_self.imgList);
				}
			},
			removeStorage() {
				uni.removeStorage({
				    key: 'edit_content_' + api.appkey,
				    success: ()=> {
						//console.log('ok')
					}
				});
			},
			goPlazaIndex() {
				_self.skipUrl('/pages/plaza/index', 'new')
			},
			// 点击上传控件上传
			uploadImg() {
				_self.$refs.gUpload.uploadImg()
			},
			/*
			上传后返回的值：
			list：上传后图片数组
			v：返回当前上传图片的临时路径
			*/
			chooseFile(list, v) {
				//console.log("上传图片_list：", list)
				//console.log("上传图片_v：", v);
				//_self.uploadFileToServe(v);
				_self.newImgList = _self.newImgList.concat(v);
				//console.log(_self.newImgList)
			},
			/*
			删除图片：
			list：删除返回删除后剩余的图片数组
			eq：返回删除的数组
			*/
			imgDelete(list, eq) {
				_self.newImgList = list;
				/* console.log("删除图片_list：", list)
				console.log("删除图片_eq：", eq) */
			},
			/*
			执行上传服务：
			urlList：要上传的图片：数组类型
			*/
			uploadFileToServe(urlList='') {
				//console.log(_self.newImgList);
				/* if (!urlList || urlList.length <= 0) {
					return
				}; */
				if(_self.newImgList.length>0){
					var imgs = _self.newImgList.map((value, index) => {
						return {  
							name: "imgs["+index+"]",
							uri: value  
						}
					});
					var isData = 1;
				}else{
					var imgs = [{  
						name: "imgs[0]",
						uri: ''  
					}];
					var isData = 0;
				}
				if(_self.content.length == 0) {
					//api.showToast('请输入帖子内容', 2000);
					return;
				}
				//console.log(imgs);
				//return
				uni.showLoading({ title:'发布中...',mask:true });
				//for (let i = 0; i < urlList.length; i++) {
					uni.uploadFile({
						url: api.apiData.uploadImg,
						//filePath: urlList[i],
						files: imgs,
						//name: 'fileName',
						formData: {
							userId: _self.userId,
							content: _self.content,
							type: 1,
							id: _self.oldContent.id,
							isData: isData
						},
						success: (res)=> {
							//console.log(res);
							var r = JSON.parse(res.data);
							api.showToast(r.Msg, 2000);
							if (r.Code == 200) {
								setTimeout(()=>{
									_self.goPlazaIndex();
								}, 500);
							}
						},
						fail: (e)=> {
							api.showToast('暂未开启发帖功能', 2000);
						}
					});
				//}
			},
			send() {
				//console.log('send');
				_self.uploadFileToServe();
			},
			bindTextAreaBlur() {
				//console.log('hide');
			},
			sendText(e) {
				var value = e.detail.value;
				_self.wzCount = value.length;
				_self.content = value;
				if(_self.wzCount > 0){
					_self.isSend = true;
				}else{
					_self.isSend = false;
				}
				if(value.length >= _self.maxlength){
					api.showToast('最多可输入'+_self.maxlength+'个文字');
				}
				//console.log(value.length);
			},
			// 跳转登录
			skipUrl(uri = '/pages/login/login', type = 'new') {
				api.jumpUrl(uri, type)
			},
		}
	};
</script>

<style>
	.bottom-btn{
		//background-color: #007AFF;
	}
	.content-bottom text{
		display: block;
		margin-bottom: 8upx;
	}
	.content-bottom{
		width: 97%;
		margin: 20upx 3%;
		font-size: 24upx;
		color: #999999;
	}
	.bottom-right{
		text-align: right;
		font-size: 24upx;
		color: #999999;
		width: 97%;
		padding-right: 3%;
		padding-bottom: 15upx;
	}
	.textarea textarea{
		width: 94%;
		height: 200upx;
		margin: 0 3%;
		padding: 20upx 0 0upx;
		font-size: 26upx;
		color: #FFFFFF;
		//background-color: #007AFF;
	}
	.textarea{
		width: 100%;
		//height: 300upx;
		background-color: rgba(255,255,255,0.1);
	}
	.send-right-n{
		display: inline-block;
		right: 35upx;
		width: 120upx;
		height: 55upx;
		line-height: 55upx;
		color: #888888;
		background-color: #F8F8F8;
		border-radius: 40upx;
		font-size: 30upx;
		position: absolute;
		margin-top: 8upx;
	}
	.send-right-y{
		display: inline-block;
		right: 35upx;
		width: 120upx;
		height: 55upx;
		line-height: 55upx;
		color: #FFFFFF;
		background-image: linear-gradient(to right,#FF8F00, rgba(254,67,101,0.8));
		border-radius: 40upx;
		font-size: 12px;
		position: absolute;
		margin-top: 8upx;
	}
	.content-head{
		position: absolute;
		display: inline-block;
		//background: rgba(0,0,0,0.5);
		color: #cccccc;
		left: 35upx;
		margin-top: 14upx;
	}
	.head-top text{
		display: inline-block;
		width: 50%;
		height: 30px;
		line-height: 30px;
		font-weight: bold; 
	}
	.head-top{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 15px;
		z-index: 10;
		background-color: #20202C;
		padding-bottom: 15upx;
		border-bottom: 1px solid #20202C;
		color: #FFFFFF;
	}
</style>
