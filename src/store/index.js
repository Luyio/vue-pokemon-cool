import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import routes from "./modules/routes";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        routes,
    },
    getters
})
export default store;