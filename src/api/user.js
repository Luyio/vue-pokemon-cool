import request from '@/utils/request'

export function user() {
  return request({
    url: '/user',
    method: 'get',
    params: {}
  })
}
