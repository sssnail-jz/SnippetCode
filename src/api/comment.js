import service from '@/utils/http'

export function fetchList (id) {
  return service({
    url: '/comment/' + id,
    method: 'get'
  })
}

export function createComment (id, data) {
  return service({
    url: '/comment/' + id,
    method: 'post',
    data
  })
}

export default {
  fetchList,
  createComment
}
