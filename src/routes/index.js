import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('../views/main'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    name: 'registration',
    path: '/registration',
    component: () => import('../views/auth/Registration.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

function userIsAuthenticated() {
  return !!localStorage.getItem('x-access-token');
}

router.beforeEach((to, from, next) => {
  if (
    to.path !== '/login' &&
    to.path !== '/registration' &&
    !userIsAuthenticated()
  )
    next({ name: 'login' });
  next();
});

export default router;
