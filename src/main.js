// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import css from 'vuetify/dist/vuetify.min.css'
import icons from 'material-design-icons-iconfont/dist/material-design-icons.css'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Vue.prototype.$axios = axios
Vue.use(css)
Vue.use(icons)
Vue.use(axios)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
