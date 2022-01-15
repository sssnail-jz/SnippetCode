import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './utils/store'
import '@/plugins/element.js'
import '@/assets/alifont/iconfont.js'
import '@/assets/css/global.css'
import '@/assets/alifont/iconfont.css'
import '@/styles/index.scss' // global css
import '@/assets/hightlight/prism.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'

import Notification from './components/SnippetNotification'

import OverlayScrollbars from 'overlayscrollbars'
import { OverlayScrollbarsPlugin } from 'overlayscrollbars-vue'

import SnippetSvg from '@/components/SnippetSvg' // svg 图标
import SnippetComments from '@/components/SnippetComments'

Vue.component('snippet-svg', SnippetSvg)

Vue.use(OverlayScrollbarsPlugin)
Vue.use(OverlayScrollbars)
Vue.use(SnippetComments)
Vue.use(Notification)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
  created () {
    Vue.prototype.$_router = this.$router
  }
}).$mount('#app')
