import service from '@/utils/http'

export function fetchList () {
  return service({
    url: '/snippet',
    method: 'get'
  })
}

export function fetchDetail (id) {
  return service({
    url: '/snippet/' + id,
    method: 'get'
  })
}

export function createSnippet (data) {
  return service({
    url: '/snippet',
    method: 'post',
    data
  })
}

export default {
  fetchList,
  fetchDetail,
  createSnippet
}
