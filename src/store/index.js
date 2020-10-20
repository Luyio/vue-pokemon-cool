import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import routes from './modules/routes'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    routes,
    user
  },
  getters
})
export default store
