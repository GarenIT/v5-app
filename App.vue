<script>
import api from "@/common/api.js"
var setBeatTime, menuTime, mobileSystem, vCode
export default {
  globalData: {
    task: {},
  },
  created() {
    // #ifdef APP-PLUS
    plus.navigator.closeSplashscreen()
    // #endif
  },
  onLaunch() {
    return
    //console.log('onLaunch');
    mobileSystem = "web"
    // #ifdef H5
    api.printLog()
    // #endif
    /* 版本检测s */
    // #ifdef APP-PLUS
    this.globalData.task = this.$down
    uni.getSystemInfo({
      success: (e) => {
        mobileSystem = e.platform
        plus.runtime.getProperty(plus.runtime.appid, (i) => {
          vCode = i.versionCode
          // 读取API版本号
          uni.request({
            url: api.apiData.getVersion,
            method: "GET",
            success: (o) => {
              var res = o.data.Data
              //console.log(res);
              if (mobileSystem == "ios") {
                // 苹果
                var myCode = res.apple.versionCode
                var verName = res.apple.version
              } else {
                // 安卓
                var myCode = res.android.versionCode
                var verName = res.android.version
              }
              if (myCode > vCode) {
                // 圆点
                uni.showTabBarRedDot({ index: 4 })
                var isNewVersion = true
                uni.showModal({
                  title: "发现新版本啦",
                  content: "版本号：" + verName + "\n新版本功能更强大，体验更流畅",
                  confirmText: "更新",
                  showCancel: !res.is_force_update,
                  success: (res) => {
                    if (res.confirm) {
                      api.jumpUrl("/pages/setting/setting", "newx")
                    }
                  },
                })
              } else {
                var isNewVersion = false
              }
              uni.setStorage({
                key: "isNewVersion",
                data: isNewVersion,
              })
            },
          })
        })
      },
    })
    // #endif
  },
  onShow() {
    //console.log('App Show')
    return
    // 中间按钮点击事件
    uni.onTabBarMidButtonTap(() => {
      this.goToRec()
    })
    // 是否登录
    var info = api.getLogins()
    var userId = info == false ? 0 : info.userId
    // #ifdef APP-PLUS
    // schemes
    var param = plus.runtime.arguments
    if (param) api.jumpUrl("/pages/recharge/recharge", "new")
    // #endif
    /* 心跳start */
    if (info != false) {
      if (mobileSystem == "android") {
        var sys = 2
      } else if (mobileSystem == "ios") {
        var sys = 3
      } else {
        var sys = 1
      }
      // 进入后先执行一次
      let timer = setTimeout(() => {
        this.getServer(sys, userId)
        clearTimeout(timer)
      }, 1)
      setBeatTime = setInterval(() => {
        this.getServer(sys, userId)
      }, 1 * 60 * 1000) // 1m一跳
    } else {
      //console.log('未登录状态下不发送心跳数据');
    }
    /* 心跳end */
  },
  onHide() {
    //console.log('App Hide');
    // #ifdef APP-PLUS
    clearInterval(menuTime)
    // #endif
    clearInterval(setBeatTime)
  },
  methods: {
    isWeb() {
      // #ifdef H5
      var isH5 = api.isH5()
      if (isH5.type != "safari") {
        api.showToast("请在safari打开")
        setTimeout(() => {
          api.outApp()
        }, 2000)
      }
      // #endif
    },
    goToRec() {
      if (!api.getLogins()) {
        api.showToast("请先登录", 1500)
        setTimeout(() => {
          api.jumpUrl("/pages/login/login", "new")
        }, 500)
      } else {
        api.jumpUrl("/pages/recharge/recharge?type=2", "new")
      }
    },
    getServer(sys, userId) {
      uni.request({
        url: api.apiData.heartBeat + "/sys/" + sys + "/userId/" + userId,
        success: (e) => {
          var d = e.data.Data
          if (d.status == 0) {
            var closeAppTime = 11
            setInterval(() => {
              if (closeAppTime <= 0) {
                //console.log('closeApp');
                api.outApp()
              }
              closeAppTime--
              uni.showToast({
                title: "App即将关闭" + closeAppTime + "s",
                duration: 50000,
                mask: true,
                image: "/static/stop.png",
              })
            }, 1000)
          }
          if (d.safari == 1) {
            this.isWeb()
          }
        },
        fail: () => {
          clearInterval(setBeatTime)
        },
      })
    },
  },
}
</script>
<style>
/* #ifndef APP-PLUS-NVUE */
page {
  background-color: #1d1d28;
}
uni-swiper .uni-swiper-dot {
  width: 5px !important;
  height: 5px !important;
}
uni-swiper .uni-swiper-dot-active {
  width: 12px !important;
  border-radius: 8upx !important;
}
/* #endif */
/* #ifdef H5 */
::-webkit-scrollbar {
  /* 隐藏滚动条，但依旧具备可以滚动的功能 */
  display: none;
}
/* #endif */
</style>
