import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)

import store from "../store"

const isAuthenticated = () => {
    return store.getters.isAuthenticated
}

const routes = [
    {
        name: 'main',
        path: '/',
        component: () => import('../views/main')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        name: 'registration',
        path: '/registration',
        component: () => import('../views/auth/Registration.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login'
        && to.name !== 'registration'
        && !isAuthenticated())
        next({ name: 'login' })
    next()
})


export default router

