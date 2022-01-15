import axios from 'axios' // 引用axios
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000, // request timeout
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    config.headers.Authorization = 'Bearer ' + getToken()

    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data

    // 如果接收到 401 异常，说明权限认证失败，跳转到登录界面
    if (res.statusCode === 401) {
      this.$router.push({
        path: 'login',
        query: { redirect: this.$router.currentRoute.fullPath } // 从哪个页面跳转
      })
    } else {
      return response
    }
  },
  (error) => {
    return Promise.reject(error.response.data)
  }
)

export default service
