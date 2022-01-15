import axios from 'axios' // 引用axios
import auth from '@/utils/auth'
import notify from '@/components/SnippetNotification/notify.js'

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

    config.headers.Authorization = 'Bearer ' + auth.getToken()

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
    return response
  },
  (error) => {
    const errorData = error.response.data

    // 错误统一提示
    notify({
      content: errorData.msg,
      type: 'error'
    })

    // 如果接收到 401 异常，说明权限认证失败，跳转到登录界面
    if (errorData.statusCode === 401) {
      location.replace('/login')
    }
    return Promise.reject(errorData)
  }
)

export default service
