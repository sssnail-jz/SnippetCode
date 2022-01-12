// http.js
import axios from 'axios'
// 创建 axios 实例
const snippetRequest = axios.create({
  // 配置项
  baseURL: 'http://localhost:3000/',
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    }
  },
  // 在向服务器发送请求前，序列化请求数据
  transformRequest: [
    function (data) {
      data = JSON.stringify(data)
      return data
    }
  ],
  // 在传递给 then/catch 前，修改响应数据
  transformResponse: [
    function (data) {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
      }
      return data
    }
  ]
})

export default snippetRequest
