import Vue from 'vue'
import App from './App.vue'
import router from './route/routes'

Vue.config.productionTip = false

// require global styles sheets
require('./assets/css/argon.min.css')
require('./assets/css/custom.css')
require('./assets/img/brand/favicon.png')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


