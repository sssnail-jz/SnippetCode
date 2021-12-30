import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './util/store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import './icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
