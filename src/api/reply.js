import service from '@/utils/http'

export function fetchList (id) {
  return service({
    url: '/reply/' + id,
    method: 'get'
  })
}

export function createReply (id, data) {
  return service({
    url: '/reply/' + id,
    method: 'post',
    data
  })
}

export default {
  fetchList,
  createReply
}
