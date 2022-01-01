import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './util/store'
import './plugins/element.js'
import './assets/alifont/iconfont.js'
import './assets/css/global.css'
import './assets/alifont/iconfont.css'

import '@/styles/btn.scss' // global css

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
