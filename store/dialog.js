import { http } from '~/helpers/axios'

export default {
  state: () => ({
    selectedProject: null,
    dialogs: [],
    start_dialogs: false,
    activeCat: '',
    projectType: '',
    conductorButtonText: '',
    rightMenuIsOpened: false,
    secondPageActive: false,
    platforms: [],
    questions: {
      idea: {
        pm: 'pm for idea?',
        teamLead: 'team lead for idea?',
        uiux: 'uiux for idea?'
      },
      product: {
        pm: 'pm for product?',
        teamLead: 'team lead for product?',
        uiux: 'uiux for product?'
      },
      specialist: {
        pm: 'pm for specialist?',
        teamLead: 'team lead for specialist?',
        uiux: 'uiux for specialist?'
      }
    },
    list: {
      android: false,
      ios: false,
      web_app: false,
      watch_os: false,
      android_ios: false,
      desktop_app: false
    }
  }),
  getters: {
    paltformsGetter(state) {
      return state.platforms
    },
    getSelectedProject(state) {
      return state.selectedProject
    },
    getSecondPageActive(state) {
      return state.secondPageActive
    },
    getConductorButtonText(state) {
      return state.conductorButtonText
    },
    getActiveCat(state) {
      return state.activeCat
    },
    getSelectedCategs(state) {
      return state.dialogs
    },
    getDialogStarted(state) {
      return state.start_dialogs
    },
    getQuestions(state) {
      return payload => {
        return state.questions[payload]
      }
    },
    getProjectType(state) {
      return state.projectType
    },
    getRightMenuIsOpened(state) {
      return state.rightMenuIsOpened
    }
  },

  actions: {
    async getTechnologies({}, name) {
      return (await http.get('/technology?type=' + name)).data
    },
    async sendFirstPageFiles({}, files) {
      if (!files.length) return Promise.resolve([{ id: null }])
      let formData = new FormData()
      files.forEach(file => {
        formData.append('file', file)
      })
      const { data: res } = await http.post(
        '/workingProjects/uploadFiles',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      return res
    },
    async sendProject({ dispatch }, { request, files }) {
      const filesRes = await dispatch('sendFirstPageFiles', files)
      request.consumer.file = filesRes.map(file => ({ id: file.id }))
      const { data: res } = await http.post('/workingProjects', request)
      console.log(res)
    },
    async getPlatforms({ commit }) {
      const { data: platform } = await http.get('/platform')
      commit('SET_PLATFORMS', platform)
      return platform
    },
    async getInTouch({}, payload) {
      const { data: res } = await http.post(`/getInTouch`, payload)
      return res
    },
    setSecondPageActive({ commit }, to) {
      commit('SET_SECOND_PAGE_ACTIVE', to)
    },
    setActiveCat({ state, commit }, which) {
      if (state.activeCat !== which) commit('SET_ACTIVE_CAT', which)
    },
    isCheck({ commit }, payload) {
      commit('CHECK_IN', payload)
      commit('ADD_DIALOG', payload)
    },
    setType({ state, commit }, payload) {
      if (Object.keys(state.questions).indexOf(payload) > -1) {
        commit('SET_TYPE', payload)
        return Promise.resolve()
      }
      return Promise.reject(payload)
    },
    changeConductorButtonText({ commit }, value) {
      commit('SET_CONDUCTOR_BUTTON_TEXT', value)
    },
    toggleRightMenu({ dispatch, state, commit }, to) {
      if (state.dialogs.length) {
        commit('TOGGLE_RIGHT_MENU', to)
        dispatch(
          'changeConductorButtonText',
          to ? 'Send' : 'Create New Estimate +'
        )
      }
    }
  },

  mutations: {
    SET_PLATFORMS(state, to) {
      state.platforms = to
    },
    SET_SELECTED_PROJECT(state, to) {
      state.selectedProject = to
    },
    SET_SECOND_PAGE_ACTIVE(state, to) {
      state.secondPageActive = to
    },
    SET_ACTIVE_CAT(state, which) {
      state.activeCat = which
    },
    SET_CONDUCTOR_BUTTON_TEXT(state, value) {
      state.conductorButtonText = value
    },
    TOGGLE_RIGHT_MENU(state, to) {
      state.rightMenuIsOpened = to
    },
    CHECK_IN(state, e) {
      state.list[e] = !state.list[e]
    },
    ADD_DIALOG(state, data) {
      let name_data = data
      let index = state.dialogs.indexOf(name_data)
      index < 0 ? state.dialogs.push(name_data) : state.dialogs.splice(index, 1)
      state.start_dialogs = state.dialogs.length !== 0
      if (!state.dialogs.length) state.rightMenuIsOpened = false
    },
    CLEAR_DIALOGS(state) {
      state.start_dialogs = false
      state.dialogs = []
      Object.keys(state.list).forEach(v => {
        state.list[v] = false
      })
    },
    SET_TYPE(state, payload) {
      state.projectType = payload
    }
  }
}
