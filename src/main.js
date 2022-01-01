import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './util/store'
import '@/plugins/element.js'
import '@/assets/alifont/iconfont.js'
import '@/assets/css/global.css'
import '@/assets/alifont/iconfont.css'

import '@/styles/btn.scss' // global css

import '@/assets/hightlight/prism.css'

import SnippetSvg from './components/SnippetSvg' // svg 图标

Vue.component('snippet-svg', SnippetSvg)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
