import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net'

})
request.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      console.log(config.headers.Authorization)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
