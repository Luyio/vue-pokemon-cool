import { get, post } from './request'

export default {
  // 首页
  index: {
    login(param){
      return post('/login', param)
    }
  }
}