import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router.ts'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
