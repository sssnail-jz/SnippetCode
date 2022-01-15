import service from '@/utils/http'

export function fetchList () {
  return service({
    url: 'users',
    method: 'get'
  })
}

export default {
  fetchList
}
