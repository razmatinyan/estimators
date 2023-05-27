import axios from 'axios'

export const baseURL = 'https://api-dev.itestimators.com/api'

const http = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
})

http.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...config.headers
    }
    if (localStorage.access_token) {
      config.headers.Authorization = `Bearer ${localStorage.access_token}`
    }
    return config
  },
  error => {
    console.error(error.status)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => response,
  error => {
    if (error?.response.status === 401) {
      if (!location.href.includes('login')) window.location = '/auth/login'
      localStorage.clear()
    }
    return Promise.reject(error)
  }
)

export { http }
