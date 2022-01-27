import VueRouter from "vue-router"
import Vue from "vue"

import Login from "../views/auth/Login.vue"
import Registration from "../views/auth/Registration.vue"

Vue.use(VueRouter)

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'registration',
        path: '/registration',
        component: Registration
    }
]


const router = new VueRouter({
    routes
})

export default router

