import messageHelper from '~/helpers/messages'

export default {
  state: () => ({
    messages: [],
    _messageStore: messageHelper.messages,
    isLoading: false,
    firstTime: true
  }),
  getters: {
    getMessages(state) {
      return state.messages
    },
    getIsLoading(state) {
      return state.isLoading
    }
  },
  actions: {
    async nextMessage({ state, commit, dispatch }) {
      commit('FIRST_LOAD_DONE')
      let delayTime = 0
      for (const el of state._messageStore) {
        commit('CHANG_LOADING_STATE', true)
        await messageHelper.sleep(delayTime ? 2 : 0)
        commit('CHANG_LOADING_STATE', false)
        dispatch('addMessage', el)
        await messageHelper.sleep(delayTime)
        delayTime = Math.floor(Math.random() * 2 + 1)
      }
    },
    addMessage({ state, commit }, payload) {
      commit('ADD_MESSAGE', payload)
    }
  },
  mutations: {
    CHANG_LOADING_STATE(state, to) {
      state.isLoading = to
    },
    ADD_MESSAGE(state, payload) {
      state.messages.push({ ...payload, date: new Date() })
    },
    FIRST_LOAD_DONE(state) {
      state.firstTime = false
    }
  }
}
