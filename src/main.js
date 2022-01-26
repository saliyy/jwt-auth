import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import setupInterceptors from "./api/auth-interceptors"


Vue.config.productionTip = false
Vue.use(ElementUI);




setupInterceptors(store)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
