export default {
  state: () => ({
    modalOpen: false
  }),
  getters: {
    isModalActive(state) {
      return state.modalOpen
    }
  },
  actions: {
    toggleModal({ commit }, payload) {
      commit('TOGGLE_MODAL', payload)
    }
  },
  mutations: {
    TOGGLE_MODAL(state, payload) {
      state.modalOpen = payload
    }
  }
}
