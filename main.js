import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// #ifdef APP-PLUS
import Down from './common/download.js'
/* 挂载下载 */
Vue.prototype.$down = Down
// #endif

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
