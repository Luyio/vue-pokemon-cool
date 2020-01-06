import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import Fragment from 'vue-fragment' // 解决 折叠文字不隐藏

import './icons' // icon
import './permission' // permission control

// 不引入会有浏览器的默认样式
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import Animate from 'animate.css';


import '@/styles/index.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
Vue.use(Animate)
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')