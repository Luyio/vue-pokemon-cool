import axios from 'axios'
import qs from 'qs'
// import { Message, MessageBox } from "element-ui";

axios.defaults.withCredentials = true //  允许跨域携带cookie信息
// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000 // 超时时间
})

export function get(api, data) {
  return service({
    url: api,
    method: 'GET',
    params: data
  })
}
export function post(api, params, data) {
  return service({
    url: api,
    method: 'POST',
    params: params,
    data: data
  })
}
export function upload(api, params, data) {
  return service({
    url: api,
    method: 'POST',
    params: params,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export function post_form(api, data) {
  return service({
    url: api,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}
export default service
