import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//Bootstrap
import 'bootstrap'
import 'jquery'
import 'popper.js'
import '@/assets/app.css'

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)


//Styles
import '@/assets/styles.css'


//Vue-MQ with Bootstrap 4 breakpoints
Vue.use(VueMq, {
  breakpoints: {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
