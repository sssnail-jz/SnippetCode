const state = {
  coverVisible: false
}

const mutations = {
  CLOSE_COVER: (state) => {
    state.coverVisible = !state.coverVisible
  }
}

const actions = {
  closeCover ({ commit }) {
    commit('CLOSE_COVER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
