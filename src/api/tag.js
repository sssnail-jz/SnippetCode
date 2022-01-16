import service from '@/utils/http'

export function fetchList () {
  return service({
    url: 'tags',
    method: 'get'
  })
}

export default {
  fetchList
}
