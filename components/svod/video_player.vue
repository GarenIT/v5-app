<template>
  <view>
    <!-- #ifdef APP-PLUS -->
    <image :src="cover" mode="aspectFill" @load="loadedmetadata" style="position: absolute; z-index: -1"></image>
    <!-- #endif -->
    <video
      ref="myVideo"
      id="myVideo"
      :src="src"
      :muted="muted"
      :controls="true"
      :enable-progress-gesture="false"
      :show-center-play-btn="false"
      :show-fullscreen-btn="false"
      :enable-play-gesture="false"
      :show-play-btn="false"
      :loop="true"
      :autoplay="true"
      :object-fit="objectFit"
      @play="onplay"
      @error="onerror"
      @timeupdate="timeupdate"
      @loadedmetadata="loadedmetadata"
      style="width: 750rpx"
      :style="{ height: windowHeight + 'px' }"
    ></video>
  </view>
</template>

<script>
export default {
  name: "video_player",
  props: {
    windowHeight: {
      default: 0,
    },
    src: {
      default: false,
    },
    playStatus: {
      default: false,
    },
    muted: {
      default: false,
    },
    cover: {
      type: String,
    },
  },
  data() {
    return {
      percent: 0,
      videoObj: {},
      objectFit: "cover",
      coverMode: "aspectFit", // aspectFill  aspectFit
      isPay: false,
    }
  },
  created() {
    this.videoObj = uni.createVideoContext("myVideo")
  },
  watch: {
    playStatus: {
      handler(val) {
        console.log("playStatus", val)
        if (!val) {
          this.videoObj.pause()
        } else {
          this.videoObj.play()
        }
      },
      deep: true,
    },
    // playStatus(val) {
    //   console.log("playStatus", val)
    //   if (!val) {
    //     this.videoObj.pause()
    //   } else {
    //     this.videoObj.play()
    //   }
    // },
  },
  methods: {
    onplay(e) {
      this.$emit("play", true)
    },
    onerror(err) {
      this.$emit("error", err)
    },
    timeupdate(e) {
      let d = e.detail
      this.$emit("playTime", d)
    },
    loadedmetadata(e) {
      e = e.detail.height - e.detail.width
      if (e > 50) {
        this.objectFit = "cover"
      } else {
        this.objectFit = "contain"
      }
    },
  },
}
</script>

<style></style>
