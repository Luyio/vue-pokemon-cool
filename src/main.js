import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import router from '@/router'

import './icons' // icon
import './permission' // permission control

// 好坑啊 不引入的话会有浏览器的默认样式
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import '@/styles/index.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')