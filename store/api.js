import jwt from '~/helpers/JWT'
import { http } from '~/helpers/axios'

export default {
  state: () => ({
    token: null,
    isAuth: false,
    userRole: [],
    professions: [],
    senioritys: [],
    user: {},
    allUsers: []
  }),
  getters: {
    checkUserRole(state) {
      return role =>
        state.userRole
          .join()
          .toLowerCase()
          .includes(role.toLowerCase())
    },
    getUserRole(state) {
      return state.userRole
    },
    professions(state) {
      return state.professions
    },
    senioritys(state) {
      return state.senioritys
    },
    getFullAddress(state) {
      return state.user?.location
    },
    getFullName(state) {
      return (state.user?.firstName ?? '') + ' ' + (state.user?.lastName ?? '')
    },
    getFirstLetters(state) {
      return (
        (state.user?.firstName?.[0]?.toUpperCase() ?? '') +
        (state.user?.lastName?.[0]?.toUpperCase() ?? '')
      )
    },
    getUser(state) {
      return state.user
    },
    getIsAuth(state) {
      return state.isAuth
    }
  },
  actions: {
    async init({ commit, getters, dispatch }) {
      commit(
        'SET_IS_AUTH',
        localStorage.getItem('access_token') != null || getters.getIsAuth
      )
      if (localStorage.getItem('access_token')) {
        const data = jwt(localStorage.getItem('access_token'))
        commit('SET_ROLE', data.authorities)
        commit('CHANGE_TOKEN', localStorage.getItem('access_token'))
      }
      if (localStorage.getItem('users_id')) {
        try {
          await dispatch('getUserByID', localStorage.getItem('users_id'))
        } catch {
          localStorage.clear()
          commit('SET_IS_AUTH', false)
          location.reload()
        }
      } else {
        localStorage.clear()
        commit('SET_IS_AUTH', false)
      }
      // commit('setTokenData', localStorage)
      // localStorage.access_token = data.access_token
    },
    async recover({}, email) {
      const res = await http.post('/user/forgot-password', { email })
      return res
    },
    async getAllUsers({ commit, state }) {
      if (state.allUsers.length) {
        return Promise.resolve(state.allUsers)
      }
      const { data: res } = await http.get('/user')
      console.log(res)
      return res
    },
    async getUserByID({ commit }, id) {
      const { data: res } = await http.get('/user/' + id)
      console.log('userrrrr', res)
      commit('SET_USER_INFO', res)
    },
    async login({ commit, dispatch }, { email, password, remember }) {
      const { data: res } = await http.get(
        `/oauth/token?grant_type=password&client_id=application-client&client_secret=1a9aaa10-662b-4660-bcfe-fac4c62ffef7&username=${email}&password=${password}&scope=default`
      )
      // console.log('object', data, res)
      // debugger
      if (remember) {
        const data = jwt(res.access_token)
        localStorage.setItem('access_token', res.access_token)
        localStorage.setItem('users_id', res.users_id)
        localStorage.setItem('authorities', data.authorities)
        commit('SET_ROLE', data.authorities)
      }
      commit('CHANGE_TOKEN', res.access_token)
      commit('SET_IS_AUTH', true)
      dispatch('getUserByID', res.users_id)
      return res
    },
    async register({}, userInfo) {
      const { data: res } = await http.post(`/user/register`, userInfo, {
        headers: {
          'client-id': 'application-client'
        }
      })
      return res
    },
    async updateUser({ commit }, userInfo) {
      const { data: res } = await http.post(`/user/update`, userInfo, {
        headers: {
          'client-id': 'application-client'
        }
      })
      return res
    },
    logout({ commit }) {
      localStorage.clear()
      commit('CHANGE_TOKEN', null)
      commit('SET_IS_AUTH', false)
      commit('SET_USER_INFO', null)
    },
    async getProfessions({ commit }, selectedType) {
      const { data: res } = await http.get(`/profession?type=${selectedType}`)
      commit('SET_PROFESSIONS', res.content)
      return res.content
    },
    async getSenioritys({ commit }) {
      const { data: res } = await http.get(`/seniority`)
      commit('SET_SENIORITYS', res.content)
      return res.content
    },
    async changeUserPhoto({ commit }, file) {
      let formData = new FormData()
      formData.append('file', file)
      const { data: res } = await http.post(
        `/user/image?name=${file.name}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )
      commit('SET_IMAGE', res.photo)
      return res.photo
    }
  },
  mutations: {
    SET_IMAGE(state, photoURL) {
      state.user.photo = photoURL
    },
    SET_ROLE(state, to) {
      state.userRole = to
    },
    CHANGE_TOKEN(state, to) {
      state.token = to
    },
    SET_IS_AUTH(state, to) {
      state.isAuth = to
    },
    SET_PROFESSIONS(state, to) {
      state.professions = to
    },
    SET_SENIORITYS(state, to) {
      state.senioritys = to
    },
    SET_USER_INFO(state, to) {
      state.user = to
    }
  }
}
