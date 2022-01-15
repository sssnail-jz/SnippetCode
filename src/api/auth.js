import service from '@/utils/http'

export function login (params) {
  return service({
    url: '/auth/login',
    method: 'post',
    params
  })
}

export default {
  login
}
