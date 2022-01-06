/**
 * 全局的 vuex 数据
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 菜单栏是否折叠
    isCollapse: true,
    menuStyleObject: {}
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
      if (state.isCollapse === true) {
        state.menuStyleObject = {}
      } else {
        state.menuStyleObject = { width: '150px' }
      }
    }
  },
  actions: {}
})
