import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import setupJWTInterceptors from "./api/auth-interceptors"
import axiosInstance from './api';
import router from "./routes"

Vue.config.productionTip = false
Vue.use(ElementUI);

setupJWTInterceptors(store)

Vue.prototype.$api = axiosInstance

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
