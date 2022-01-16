const state = {
  visible: false,
  collapse: {
    bCollapse: false,
    style: 'no-collapse'
  }
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.collapse.bCollapse = !state.collapse.bCollapse
    if (state.collapse.style === 'collapse') {
      state.collapse.style = 'no-collapse'
    } else {
      state.collapse.style = 'collapse'
    }
  },
  CLOSE_SIDEBAR: (state) => {
    state.visible = !state.visible
  }
}

const actions = {
  toggleSideBar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar ({ commit }) {
    commit('CLOSE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
