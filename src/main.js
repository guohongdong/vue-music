import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lazyload from 'vue-lazyload'

import './assets/style/index.scss'

Vue.use(Lazyload, {
  loading: require('./assets/images/default.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
