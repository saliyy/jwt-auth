import Vuex from 'vuex'
import Vue from 'vue'
import userState from "./modules/user"

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        user: userState
    }
})

export default store