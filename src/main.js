import Vue from 'vue'
import App from './App.vue'
import router from './route/routes'
import AudioVisual from 'vue-audio-visual'
 
Vue.use(AudioVisual) //audio visualizer

// service workers
Vue.config.productionTip = false
const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


